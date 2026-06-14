import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as supabase } from "./supabase-iFuljuaK.mjs";
import { U as Upload, P as Plus, C as Check, X, a as Pencil, T as Trash2 } from "../_libs/lucide-react.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
const EMPTY = {
  title: "",
  price: "",
  description: "",
  rating: 4.5,
  reviews: 0
};
function Admin() {
  const [services, setServices] = reactExports.useState([]);
  const [form, setForm] = reactExports.useState(EMPTY);
  const [imageFile, setImageFile] = reactExports.useState(null);
  const [videoFile, setVideoFile] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [msg, setMsg] = reactExports.useState("");
  const [editId, setEditId] = reactExports.useState(null);
  const [editForm, setEditForm] = reactExports.useState({});
  const [editImageFile, setEditImageFile] = reactExports.useState(null);
  const [editLoading, setEditLoading] = reactExports.useState(false);
  const addTextareaRef = reactExports.useRef(null);
  const editTextareaRef = reactExports.useRef(null);
  const autoResize = (ref) => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  };
  reactExports.useEffect(() => {
    autoResize(addTextareaRef);
  }, [form.description]);
  reactExports.useEffect(() => {
    autoResize(editTextareaRef);
  }, [editForm.description]);
  reactExports.useEffect(() => {
    fetchServices();
  }, []);
  async function fetchServices() {
    const {
      data
    } = await supabase.from("services").select("*").order("created_at", {
      ascending: false
    });
    if (data) setServices(data);
  }
  async function uploadFile(file, folder) {
    const ext = file.name.split(".").pop();
    const path = `${folder}/${Date.now()}.${ext}`;
    const {
      error
    } = await supabase.storage.from("services").upload(path, file);
    if (error) throw error;
    const {
      data
    } = supabase.storage.from("services").getPublicUrl(path);
    return data.publicUrl;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!imageFile) {
      setMsg("Please select an image.");
      return;
    }
    setLoading(true);
    setMsg("");
    try {
      const image_url = await uploadFile(imageFile, "images");
      const video_url = videoFile ? await uploadFile(videoFile, "videos") : null;
      const {
        error
      } = await supabase.from("services").insert([{
        ...form,
        image_url,
        video_url
      }]);
      if (error) throw error;
      setMsg("✅ Service added successfully!");
      setForm(EMPTY);
      setImageFile(null);
      setVideoFile(null);
      fetchServices();
    } catch (err) {
      setMsg(`❌ Error: ${err.message}`);
    }
    setLoading(false);
  }
  async function handleDelete(id, image_url) {
    if (!confirm("Delete this service?")) return;
    const path = image_url.split("/services/")[1];
    if (path) await supabase.storage.from("services").remove([path]);
    await supabase.from("services").delete().eq("id", id);
    fetchServices();
  }
  function startEdit(s) {
    setEditId(s.id);
    setEditForm({
      title: s.title,
      price: s.price,
      description: s.description,
      rating: s.rating,
      reviews: s.reviews
    });
    setEditImageFile(null);
    setTimeout(() => autoResize(editTextareaRef), 0);
  }
  async function handleSaveEdit(s) {
    setEditLoading(true);
    try {
      let image_url = s.image_url;
      if (editImageFile) image_url = await uploadFile(editImageFile, "images");
      const {
        error
      } = await supabase.from("services").update({
        ...editForm,
        image_url
      }).eq("id", s.id);
      if (error) throw error;
      setEditId(null);
      setEditForm({});
      setEditImageFile(null);
      fetchServices();
    } catch (err) {
      alert(`❌ ${err.message}`);
    }
    setEditLoading(false);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background p-4 sm:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-8 text-3xl font-extrabold text-foreground", children: "Admin — Manage Services" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "mb-12 space-y-4 rounded-2xl border border-border bg-card p-6 shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: "Add New Service" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, className: "rounded-lg border border-border bg-background px-3 py-2 text-sm", placeholder: "Service title", value: form.title, onChange: (e) => setForm((f) => ({
          ...f,
          title: e.target.value
        })) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, className: "rounded-lg border border-border bg-background px-3 py-2 text-sm", placeholder: "Price (e.g. Rs 1,500.00)", value: form.price, onChange: (e) => setForm((f) => ({
          ...f,
          price: e.target.value
        })) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "number", min: "1", max: "5", step: "0.1", className: "rounded-lg border border-border bg-background px-3 py-2 text-sm", placeholder: "Rating (1-5)", value: form.rating, onChange: (e) => setForm((f) => ({
          ...f,
          rating: parseFloat(e.target.value)
        })) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", min: "0", className: "rounded-lg border border-border bg-background px-3 py-2 text-sm", placeholder: "Review count", value: form.reviews, onChange: (e) => setForm((f) => ({
          ...f,
          reviews: parseInt(e.target.value)
        })) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, ref: addTextareaRef, rows: 1, style: {
        minHeight: "100px",
        resize: "vertical",
        overflow: "hidden"
      }, className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm", placeholder: "Description", value: form.description, onChange: (e) => setForm((f) => ({
        ...f,
        description: e.target.value
      })) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex cursor-pointer flex-col items-center gap-2 rounded-lg border-2 border-dashed border-border p-4 hover:border-[var(--brand)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 24, className: "text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: imageFile ? imageFile.name : "Upload Image *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", className: "hidden", onChange: (e) => setImageFile(e.target.files?.[0] ?? null) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex cursor-pointer flex-col items-center gap-2 rounded-lg border-2 border-dashed border-border p-4 hover:border-[var(--brand)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 24, className: "text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: videoFile ? videoFile.name : "Upload Video (optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "video/*", className: "hidden", onChange: (e) => setVideoFile(e.target.files?.[0] ?? null) })
        ] })
      ] }),
      msg && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: msg }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: loading, className: "flex items-center gap-2 rounded-lg bg-[var(--brand)] px-6 py-2 font-semibold text-white transition hover:opacity-90 disabled:opacity-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 18 }),
        " ",
        loading ? "Uploading..." : "Add Service"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-4 text-xl font-bold", children: [
      "Existing Services (",
      services.length,
      ")"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card p-4 shadow-sm", children: editId === s.id ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: editImageFile ? URL.createObjectURL(editImageFile) : s.image_url, alt: s.title, className: "h-16 w-24 rounded-lg object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-border px-3 py-2 text-xs hover:border-[var(--brand)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 14 }),
            " ",
            editImageFile ? editImageFile.name : "Change Image",
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", className: "hidden", onChange: (e) => setEditImageFile(e.target.files?.[0] ?? null) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "rounded-lg border border-border bg-background px-3 py-2 text-sm", placeholder: "Title", value: editForm.title ?? "", onChange: (e) => setEditForm((f) => ({
            ...f,
            title: e.target.value
          })) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "rounded-lg border border-border bg-background px-3 py-2 text-sm", placeholder: "Price", value: editForm.price ?? "", onChange: (e) => setEditForm((f) => ({
            ...f,
            price: e.target.value
          })) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", min: "1", max: "5", step: "0.1", className: "rounded-lg border border-border bg-background px-3 py-2 text-sm", placeholder: "Rating", value: editForm.rating ?? "", onChange: (e) => setEditForm((f) => ({
            ...f,
            rating: parseFloat(e.target.value)
          })) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", min: "0", className: "rounded-lg border border-border bg-background px-3 py-2 text-sm", placeholder: "Reviews", value: editForm.reviews ?? "", onChange: (e) => setEditForm((f) => ({
            ...f,
            reviews: parseInt(e.target.value)
          })) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { ref: editTextareaRef, rows: 1, style: {
          minHeight: "100px",
          resize: "vertical",
          overflow: "hidden"
        }, className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm", placeholder: "Description", value: editForm.description ?? "", onChange: (e) => setEditForm((f) => ({
          ...f,
          description: e.target.value
        })) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handleSaveEdit(s), disabled: editLoading, className: "flex items-center gap-1 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 15 }),
            " ",
            editLoading ? "Saving..." : "Save"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
            setEditId(null);
            setEditForm({});
            setEditImageFile(null);
          }, className: "flex items-center gap-1 rounded-lg border border-border px-4 py-2 text-sm font-semibold hover:bg-muted", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 15 }),
            " Cancel"
          ] })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.image_url, alt: s.title, className: "h-16 w-24 rounded-lg object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
            s.price,
            " · ⭐ ",
            s.rating,
            " · ",
            s.reviews,
            " reviews"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 line-clamp-1 text-xs text-muted-foreground", children: s.description }),
          s.video_url && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-[var(--brand)]", children: "📹 Video attached" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => startEdit(s), className: "rounded-lg p-2 text-[var(--brand)] hover:bg-[var(--brand)]/10", title: "Edit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDelete(s.id, s.image_url), className: "rounded-lg p-2 text-destructive hover:bg-destructive/10", title: "Delete", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 18 }) })
        ] })
      ] }) }, s.id)),
      services.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No services yet. Add one above!" })
    ] })
  ] }) });
}
export {
  Admin as component
};
