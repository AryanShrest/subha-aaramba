import { createFileRoute, useSearch, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { supabase, type Service } from "@/lib/supabase";
import { Trash2, Upload, Plus, Pencil, X, Check, Lock, ArrowRight } from "lucide-react";

// ⚠️ CHANGE THESE CREDENTIALS TO YOUR OWN
const ADMIN_ID = "netra";
const ADMIN_PROCESS = "bahadur";

export const Route = createFileRoute("/admin")({
  validateSearch: (search: Record<string, string>) => ({
    id: search.id || '',
    process: search.process || '',
  }),
  component: Admin,
});

const EMPTY = { title: "", price: "", description: "", rating: 4.5, reviews: 0 };

function Admin() {
  const search = useSearch({ from: Route.id });
  const navigate = useNavigate();
  
  // Check authentication
  const isAuthenticated = search.id === ADMIN_ID && search.process === ADMIN_PROCESS;
  
  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return <AdminPanel />;
}

function LoginForm() {
  const [id, setId] = useState("");
  const [process, setProcess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !process) {
      setError("Please fill in all fields.");
      return;
    }
    if (id === ADMIN_ID && process === ADMIN_PROCESS) {
      navigate({ to: "/admin", search: { id, process } });
    } else {
      setError("❌ Invalid ID or Process code. Access denied.");
      setId("");
      setProcess("");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[var(--brand-deep)] via-[var(--brand)] to-sky-500 p-4">
      <div className="w-full max-w-md rounded-2xl border border-white/20 bg-card/95 shadow-2xl backdrop-blur">
        <div className="space-y-6 p-8">
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand)]/20">
              <Lock size={28} className="text-[var(--brand)]" />
            </div>
            <h1 className="text-2xl font-extrabold">Admin Access</h1>
            <p className="text-center text-sm text-muted-foreground">
              Enter your ID and Process code to manage services
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm font-semibold">ID</label>
              <input
                type="text"
                placeholder="Enter your ID"
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                  setError("");
                }}
                className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2 text-sm focus:border-[var(--brand)] focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-semibold">Process Code</label>
              <input
                type="password"
                placeholder="Enter your Process code"
                value={process}
                onChange={(e) => {
                  setProcess(e.target.value);
                  setError("");
                }}
                className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2 text-sm focus:border-[var(--brand)] focus:outline-none"
              />
            </div>

            {error && (
              <div className="rounded-lg bg-destructive/10 px-4 py-2 text-sm font-medium text-destructive">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--brand)] py-3 font-semibold text-white transition hover:opacity-90"
            >
              <Lock size={18} /> Access Admin Panel
            </button>
          </form>

          <p className="text-center text-xs text-muted-foreground">
            Unauthorized access attempts may be logged.
          </p>
        </div>
      </div>
    </div>
  );
}

function AdminPanel() {
  const search = useSearch({ from: Route.id });
  const navigate = useNavigate();
  const [services, setServices] = useState<Service[]>([]);
  const [form, setForm] = useState(EMPTY);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Service>>({});
  const [editImageFile, setEditImageFile] = useState<File | null>(null);
  const [editLoading, setEditLoading] = useState(false);
  
  const addTextareaRef = useRef<HTMLTextAreaElement>(null);
  const editTextareaRef = useRef<HTMLTextAreaElement>(null);
  
  const autoResize = (ref: React.RefObject<HTMLTextAreaElement>) => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  };
  
  useEffect(() => {
    autoResize(addTextareaRef);
  }, [form.description]);
  
  useEffect(() => {
    autoResize(editTextareaRef);
  }, [editForm.description]);

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
    setLoading(true); setMsg("");
    try {
      const image_url = await uploadFile(imageFile, "images");
      const video_url = videoFile ? await uploadFile(videoFile, "videos") : null;
      const { error } = await supabase.from("services").insert([{ ...form, image_url, video_url }]);
      if (error) throw error;
      setMsg("✅ Service added successfully!");
      setForm(EMPTY); setImageFile(null); setVideoFile(null);
      fetchServices();
    } catch (err: any) { setMsg(`❌ Error: ${err.message}`); }
    setLoading(false);
  }

  async function handleDelete(id: string, image_url: string) {
    if (!confirm("Delete this service?")) return;
    const path = image_url.split("/services/")[1];
    if (path) await supabase.storage.from("services").remove([path]);
    await supabase.from("services").delete().eq("id", id);
    fetchServices();
  }

  function startEdit(s: Service) {
    setEditId(s.id);
    setEditForm({ title: s.title, price: s.price, description: s.description, rating: s.rating, reviews: s.reviews });
    setEditImageFile(null);
    setTimeout(() => autoResize(editTextareaRef), 0);
  }

  async function handleSaveEdit(s: Service) {
    setEditLoading(true);
    try {
      let image_url = s.image_url;
      if (editImageFile) image_url = await uploadFile(editImageFile, "images");
      const { error } = await supabase.from("services").update({ ...editForm, image_url }).eq("id", s.id);
      if (error) throw error;
      setEditId(null); setEditForm({}); setEditImageFile(null);
      fetchServices();
    } catch (err: any) { alert(`❌ ${err.message}`); }
    setEditLoading(false);
  }

  const handleLogout = () => {
    navigate({ to: "/admin" });
  };

  return (
    <div className="min-h-screen bg-background p-4 sm:p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-foreground">Admin — Manage Services</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-lg bg-destructive px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            <ArrowRight size={16} /> Logout
          </button>
        </div>

        {/* Add Service Form */}
        <form onSubmit={handleSubmit} className="mb-12 space-y-4 rounded-2xl border border-border bg-card p-6 shadow">
          <h2 className="text-xl font-bold">Add New Service</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <input required className="rounded-lg border border-border bg-background px-3 py-2 text-sm" placeholder="Service title" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
            <input required className="rounded-lg border border-border bg-background px-3 py-2 text-sm" placeholder="Price (e.g. Rs 1,500.00)" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} />
            <input required type="number" min="1" max="5" step="0.1" className="rounded-lg border border-border bg-background px-3 py-2 text-sm" placeholder="Rating (1-5)" value={form.rating} onChange={e => setForm(f => ({ ...f, rating: parseFloat(e.target.value) }))} />
            <input type="number" min="0" className="rounded-lg border border-border bg-background px-3 py-2 text-sm" placeholder="Review count" value={form.reviews} onChange={e => setForm(f => ({ ...f, reviews: parseInt(e.target.value) }))} />
          </div>
          <textarea required ref={addTextareaRef} rows={1} style={{ minHeight: "100px", resize: "vertical", overflow: "hidden" }} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" placeholder="Description" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
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
            <div key={s.id} className="rounded-xl border border-border bg-card p-4 shadow-sm">
              {editId === s.id ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={editImageFile ? URL.createObjectURL(editImageFile) : s.image_url}
                      alt={s.title}
                      className="h-16 w-24 rounded-lg object-cover"
                    />
                    <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-border px-3 py-2 text-xs hover:border-[var(--brand)]">
                      <Upload size={14} /> {editImageFile ? editImageFile.name : "Change Image"}
                      <input type="file" accept="image/*" className="hidden" onChange={e => setEditImageFile(e.target.files?.[0] ?? null)} />
                    </label>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input className="rounded-lg border border-border bg-background px-3 py-2 text-sm" placeholder="Title" value={editForm.title ?? ""} onChange={e => setEditForm(f => ({ ...f, title: e.target.value }))} />
                    <input className="rounded-lg border border-border bg-background px-3 py-2 text-sm" placeholder="Price" value={editForm.price ?? ""} onChange={e => setEditForm(f => ({ ...f, price: e.target.value }))} />
                    <input type="number" min="1" max="5" step="0.1" className="rounded-lg border border-border bg-background px-3 py-2 text-sm" placeholder="Rating" value={editForm.rating ?? ""} onChange={e => setEditForm(f => ({ ...f, rating: parseFloat(e.target.value) }))} />
                    <input type="number" min="0" className="rounded-lg border border-border bg-background px-3 py-2 text-sm" placeholder="Reviews" value={editForm.reviews ?? ""} onChange={e => setEditForm(f => ({ ...f, reviews: parseInt(e.target.value) }))} />
                  </div>
                  <textarea ref={editTextareaRef} rows={1} style={{ minHeight: "100px", resize: "vertical", overflow: "hidden" }} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" placeholder="Description" value={editForm.description ?? ""} onChange={e => setEditForm(f => ({ ...f, description: e.target.value }))} />
                  <div className="flex gap-2">
                    <button onClick={() => handleSaveEdit(s)} disabled={editLoading} className="flex items-center gap-1 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50">
                      <Check size={15} /> {editLoading ? "Saving..." : "Save"}
                    </button>
                    <button onClick={() => { setEditId(null); setEditForm({}); setEditImageFile(null); }} className="flex items-center gap-1 rounded-lg border border-border px-4 py-2 text-sm font-semibold hover:bg-muted">
                      <X size={15} /> Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <img src={s.image_url} alt={s.title} className="h-16 w-24 rounded-lg object-cover" />
                  <div className="flex-1">
                    <div className="font-bold">{s.title}</div>
                    <div className="text-sm text-muted-foreground">{s.price} · ⭐ {s.rating} · {s.reviews} reviews</div>
                    <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">{s.description}</p>
                    {s.video_url && <div className="mt-1 text-xs text-[var(--brand)]">📹 Video attached</div>}
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => startEdit(s)} className="rounded-lg p-2 text-[var(--brand)] hover:bg-[var(--brand)]/10" title="Edit">
                      <Pencil size={18} />
                    </button>
                    <button onClick={() => handleDelete(s.id, s.image_url)} className="rounded-lg p-2 text-destructive hover:bg-destructive/10" title="Delete">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
          {services.length === 0 && <p className="text-muted-foreground">No services yet. Add one above!</p>}
        </div>
      </div>
    </div>
  );
}
