import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase, type Service } from "@/lib/supabase";
import { Trash2, Upload, Plus } from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: Admin,
});

const EMPTY = { title: "", vendor: "", price: "", description: "", rating: 4.5, reviews: 0 };

function Admin() {
  const [services, setServices] = useState<Service[]>([]);
  const [form, setForm] = useState(EMPTY);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => { fetchServices(); }, []);

  async function fetchServices() {
    const { data } = await supabase.from("services").select("*").order("created_at", { ascending: false });
    if (data) setServices(data);
  }

  async function uploadFile(file: File, folder: string) {
    const ext = file.name.split(".").pop();
    const path = `${folder}/${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from("services").upload(path, file);
    if (error) throw error;
    const { data } = supabase.storage.from("services").getPublicUrl(path);
    return data.publicUrl;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!imageFile) { setMsg("Please select an image."); return; }
    setLoading(true);
    setMsg("");
    try {
      const image_url = await uploadFile(imageFile, "images");
      const video_url = videoFile ? await uploadFile(videoFile, "videos") : null;
      const { error } = await supabase.from("services").insert([{ ...form, image_url, video_url }]);
      if (error) throw error;
      setMsg("✅ Service added successfully!");
      setForm(EMPTY);
      setImageFile(null);
      setVideoFile(null);
      fetchServices();
    } catch (err: any) {
      setMsg(`❌ Error: ${err.message}`);
    }
    setLoading(false);
  }

  async function handleDelete(id: string, image_url: string) {
    if (!confirm("Delete this service?")) return;
    const path = image_url.split("/services/")[1];
    if (path) await supabase.storage.from("services").remove([path]);
    await supabase.from("services").delete().eq("id", id);
    fetchServices();
  }

  return (
    <div className="min-h-screen bg-background p-4 sm:p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-extrabold text-foreground">Admin — Manage Services</h1>

        {/* Add Service Form */}
        <form onSubmit={handleSubmit} className="mb-12 space-y-4 rounded-2xl border border-border bg-card p-6 shadow">
          <h2 className="text-xl font-bold">Add New Service</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <input required className="rounded-lg border border-border bg-background px-3 py-2 text-sm" placeholder="Service title" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
            <input required className="rounded-lg border border-border bg-background px-3 py-2 text-sm" placeholder="Vendor name" value={form.vendor} onChange={e => setForm(f => ({ ...f, vendor: e.target.value }))} />
            <input required className="rounded-lg border border-border bg-background px-3 py-2 text-sm" placeholder="Price (e.g. Rs 1,500.00)" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} />
            <input required type="number" min="1" max="5" step="0.1" className="rounded-lg border border-border bg-background px-3 py-2 text-sm" placeholder="Rating (1-5)" value={form.rating} onChange={e => setForm(f => ({ ...f, rating: parseFloat(e.target.value) }))} />
            <input type="number" min="0" className="rounded-lg border border-border bg-background px-3 py-2 text-sm" placeholder="Review count" value={form.reviews} onChange={e => setForm(f => ({ ...f, reviews: parseInt(e.target.value) }))} />
          </div>
          <textarea required rows={3} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" placeholder="Description" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex cursor-pointer flex-col items-center gap-2 rounded-lg border-2 border-dashed border-border p-4 hover:border-[var(--brand)]">
              <Upload size={24} className="text-muted-foreground" />
              <span className="text-sm font-medium">{imageFile ? imageFile.name : "Upload Image *"}</span>
              <input type="file" accept="image/*" className="hidden" onChange={e => setImageFile(e.target.files?.[0] ?? null)} />
            </label>
            <label className="flex cursor-pointer flex-col items-center gap-2 rounded-lg border-2 border-dashed border-border p-4 hover:border-[var(--brand)]">
              <Upload size={24} className="text-muted-foreground" />
              <span className="text-sm font-medium">{videoFile ? videoFile.name : "Upload Video (optional)"}</span>
              <input type="file" accept="video/*" className="hidden" onChange={e => setVideoFile(e.target.files?.[0] ?? null)} />
            </label>
          </div>

          {msg && <p className="text-sm font-medium">{msg}</p>}
          <button type="submit" disabled={loading} className="flex items-center gap-2 rounded-lg bg-[var(--brand)] px-6 py-2 font-semibold text-white transition hover:opacity-90 disabled:opacity-50">
            <Plus size={18} /> {loading ? "Uploading..." : "Add Service"}
          </button>
        </form>

        {/* Services List */}
        <h2 className="mb-4 text-xl font-bold">Existing Services ({services.length})</h2>
        <div className="space-y-4">
          {services.map(s => (
            <div key={s.id} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
              <img src={s.image_url} alt={s.title} className="h-16 w-24 rounded-lg object-cover" />
              <div className="flex-1">
                <div className="font-bold">{s.title}</div>
                <div className="text-sm text-muted-foreground">{s.vendor} · {s.price} · ⭐ {s.rating}</div>
                {s.video_url && <div className="mt-1 text-xs text-[var(--brand)]">📹 Video attached</div>}
              </div>
              <button onClick={() => handleDelete(s.id, s.image_url)} className="rounded-lg p-2 text-destructive hover:bg-destructive/10">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
          {services.length === 0 && <p className="text-muted-foreground">No services yet. Add one above!</p>}
        </div>
      </div>
    </div>
  );
}
