import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import { D as Droplets, M as MapPin, P as Phone, A as ArrowLeft, B as BadgeCheck, S as Star, C as Clock, T as Tag, U as Upload, a as Plus, b as Check, X, c as Pencil, d as Trash2, e as ArrowRight, f as ShieldCheck, g as Truck, W as Wrench, h as Waves, i as Mail, F as Facebook, I as Instagram, j as MessageCircle } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
const appCss = "/assets/styles-BFQzwTJb.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$3 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "keywords", content: "clean tank nepal, water tank cleaning nepal, tank cleaning kathmandu, septic tank cleaning kathmandu, plumbing service kathmandu, sewage cleaning nepal" },
      { name: "author", content: "शुभ आरम्भ Cleaning Service" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://clean-tank-nepal.aaryanshrestha00.com.np" },
      { property: "og:image", content: "https://clean-tank-nepal.aaryanshrestha00.com.np/images/Septic-tank-cleaning-in-Lalitpur-1-1024x538.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "geo.region", content: "NP-BA" },
      { name: "geo.placename", content: "Kathmandu" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://clean-tank-nepal.aaryanshrestha00.com.np" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "शुभ आरम्भ Cleaning Service",
          "alternateName": "Clean Tank Nepal",
          "description": "Professional water tank, septic tank, sewage and plumbing cleaning services in Kathmandu, Lalitpur and Bhaktapur.",
          "url": "https://clean-tank-nepal.aaryanshrestha00.com.np",
          "telephone": "+977-9800000000",
          "image": "https://clean-tank-nepal.aaryanshrestha00.com.np/images/Septic-tank-cleaning-in-Lalitpur-1-1024x538.webp",
          "priceRange": "Rs 500 - Rs 5500",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kathmandu",
            "addressRegion": "Bagmati",
            "addressCountry": "NP"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "27.7172",
            "longitude": "85.3240"
          },
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "27.7172",
              "longitude": "85.3240"
            },
            "geoRadius": "30000"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Cleaning Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Overhead Tank Cleaning" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Septic Tank Cleaning" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sewage & Drainage Cleaning" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Plumbing Repair & Installation" } }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.6",
            "reviewCount": "38"
          }
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "ne", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$3.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const supabase = createClient(
  "https://bdwwiokeojuqmwyfusos.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkd3dpb2tlb2p1cW13eWZ1c29zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5MjYzNjEsImV4cCI6MjA5NjUwMjM2MX0.fkoEnI5pzSJIiQL1UF8pna3HqzFQR9NixWKTX3XOgzI"
);
const Route$2 = createFileRoute("/admin")({
  component: Admin
});
const EMPTY = { title: "", price: "", description: "", rating: 4.5, reviews: 0 };
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
  reactExports.useEffect(() => {
    fetchServices();
  }, []);
  async function fetchServices() {
    const { data } = await supabase.from("services").select("*").order("created_at", { ascending: false });
    if (data) setServices(data);
  }
  async function uploadFile(file, folder) {
    const ext = file.name.split(".").pop();
    const path = `${folder}/${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from("services").upload(path, file);
    if (error) throw error;
    const { data } = supabase.storage.from("services").getPublicUrl(path);
    return data.publicUrl;
  }
  async function handleAdd(e) {
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
      const { error } = await supabase.from("services").insert([{ ...form, image_url, video_url }]);
      if (error) throw error;
      setMsg("✅ Service added!");
      setForm(EMPTY);
      setImageFile(null);
      setVideoFile(null);
      fetchServices();
    } catch (err) {
      setMsg(`❌ ${err.message}`);
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
    setEditForm({ title: s.title, price: s.price, description: s.description, rating: s.rating, reviews: s.reviews });
    setEditImageFile(null);
  }
  async function handleSaveEdit(s) {
    setEditLoading(true);
    try {
      let image_url = s.image_url;
      if (editImageFile) image_url = await uploadFile(editImageFile, "images");
      const { error } = await supabase.from("services").update({ ...editForm, image_url }).eq("id", s.id);
      if (error) throw error;
      setEditId(null);
      setEditForm({});
      setEditImageFile(null);
      fetchServices();
    } catch (err) {
      alert(err.message);
    }
    setEditLoading(false);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background p-4 sm:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-8 text-3xl font-extrabold text-foreground", children: "Admin — Manage Services" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAdd, className: "mb-12 space-y-4 rounded-2xl border border-border bg-card p-6 shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: "Add New Service" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, className: "rounded-lg border border-border bg-background px-3 py-2 text-sm", placeholder: "Service title", value: form.title, onChange: (e) => setForm((f) => ({ ...f, title: e.target.value })) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, className: "rounded-lg border border-border bg-background px-3 py-2 text-sm", placeholder: "Price (e.g. Rs 1,500.00)", value: form.price, onChange: (e) => setForm((f) => ({ ...f, price: e.target.value })) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "number", min: "1", max: "5", step: "0.1", className: "rounded-lg border border-border bg-background px-3 py-2 text-sm", placeholder: "Rating (1-5)", value: form.rating, onChange: (e) => setForm((f) => ({ ...f, rating: parseFloat(e.target.value) })) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", min: "0", className: "rounded-lg border border-border bg-background px-3 py-2 text-sm", placeholder: "Review count", value: form.reviews, onChange: (e) => setForm((f) => ({ ...f, reviews: parseInt(e.target.value) })) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 3, className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm", placeholder: "Description", value: form.description, onChange: (e) => setForm((f) => ({ ...f, description: e.target.value })) }),
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
      services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card p-4 shadow-sm", children: editId === s.id ? (
        /* Edit Mode */
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "rounded-lg border border-border bg-background px-3 py-2 text-sm", placeholder: "Title", value: editForm.title ?? "", onChange: (e) => setEditForm((f) => ({ ...f, title: e.target.value })) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "rounded-lg border border-border bg-background px-3 py-2 text-sm", placeholder: "Price", value: editForm.price ?? "", onChange: (e) => setEditForm((f) => ({ ...f, price: e.target.value })) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", min: "1", max: "5", step: "0.1", className: "rounded-lg border border-border bg-background px-3 py-2 text-sm", placeholder: "Rating", value: editForm.rating ?? "", onChange: (e) => setEditForm((f) => ({ ...f, rating: parseFloat(e.target.value) })) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", min: "0", className: "rounded-lg border border-border bg-background px-3 py-2 text-sm", placeholder: "Reviews", value: editForm.reviews ?? "", onChange: (e) => setEditForm((f) => ({ ...f, reviews: parseInt(e.target.value) })) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 2, className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm", placeholder: "Description", value: editForm.description ?? "", onChange: (e) => setEditForm((f) => ({ ...f, description: e.target.value })) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handleSaveEdit(s), disabled: editLoading, className: "flex items-center gap-1 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 15 }),
              " ",
              editLoading ? "Saving..." : "Save"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
              setEditId(null);
              setEditForm({});
            }, className: "flex items-center gap-1 rounded-lg border border-border px-4 py-2 text-sm font-semibold hover:bg-muted", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 15 }),
              " Cancel"
            ] })
          ] })
        ] })
      ) : (
        /* View Mode */
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => startEdit(s), className: "rounded-lg p-2 text-[var(--brand)] hover:bg-[var(--brand)]/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { size: 18 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDelete(s.id, s.image_url), className: "rounded-lg p-2 text-destructive hover:bg-destructive/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 18 }) })
          ] })
        ] })
      ) }, s.id)),
      services.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No services yet. Add one above!" })
    ] })
  ] }) });
}
function useScrollAnimation(className = "animate-in-view", threshold = 0.15) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(className);
        } else {
          el.classList.remove(className);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [className, threshold]);
  return ref;
}
function useTypewriter(text, speed = 50, startDelay = 0) {
  const [displayed, setDisplayed] = reactExports.useState("");
  const [done, setDone] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(start);
  }, [text, speed, startDelay]);
  return { displayed, done };
}
function useCounter(target, duration = 1500, startDelay = 0) {
  const [count, setCount] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const delay = setTimeout(() => {
            const step = Math.ceil(target / (duration / 16));
            const interval = setInterval(() => {
              start += step;
              if (start >= target) {
                setCount(target);
                clearInterval(interval);
              } else {
                setCount(start);
              }
            }, 16);
          }, startDelay);
          observer.disconnect();
          return () => clearTimeout(delay);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, startDelay]);
  return { count, ref };
}
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clean Tank Nepal | Water Tank, Septic & Plumbing Cleaning Kathmandu" },
      { name: "description", content: "Clean Tank Nepal offers professional overhead tank, reserve tank, septic tank, sewage and plumbing cleaning in Kathmandu, Lalitpur & Bhaktapur. Trusted, affordable, same-day service. Book now." },
      { property: "og:title", content: "Clean Tank Nepal | Water Tank & Plumbing Cleaning Kathmandu" },
      { property: "og:description", content: "Professional tank cleaning, septic & sewage clearing, and plumbing services across Kathmandu valley. Verified workers. Same-day service." }
    ]
  }),
  component: Index
});
function Index() {
  const [services, setServices] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    supabase.from("services").select("*").order("created_at").then(({ data }) => {
      if (data) setServices(data);
      setLoading(false);
    });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesSection, { services, loading }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, { services }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppButton, {})
  ] });
}
function Header() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand)] text-primary-foreground shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { size: 22 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-[var(--brand-deep)]", children: "शुभ आरम्भ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Cleaning Service" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden gap-8 text-sm font-medium md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "hover:text-[var(--brand)]", children: "Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#features", className: "hover:text-[var(--brand)]", children: "Why Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "hover:text-[var(--brand)]", children: "Contact" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+9779812330094", className: "hidden items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-accent-foreground shadow-md transition hover:opacity-90 sm:inline-flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16 }),
      " Book Now"
    ] })
  ] }) });
}
function Hero() {
  const heroRef = useScrollAnimation("hero-visible", 0.1);
  const { displayed, done } = useTypewriter("Clean Tank Nepal", 70, 300);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden text-primary-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 bg-cover bg-center",
        style: { backgroundImage: "url('/images/Septic-tank-cleaning-in-Lalitpur-1-1024x538.webp')" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[var(--brand-deep)]/95 via-[var(--brand)]/90 to-sky-500/85" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20", style: { backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)", backgroundSize: "60px 60px" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: heroRef, className: "relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-badge inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { size: 14 }),
          " Trusted in Kathmandu Valley"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "hero-title mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `typewriter-cursor${done ? " done" : ""}`, children: displayed }),
          done && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            " — Sewer, Tank & Plumbing Cleaning",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shimmer-text animated-underline", children: "Done Right." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero-subtitle mt-5 max-w-xl text-base text-white/85 sm:text-lg", children: "Hygienic water tank cleaning, septic & sewage clearing, and professional plumbing services across Kathmandu — booked in minutes." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-buttons mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#services", className: "inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-accent-foreground shadow-xl transition hover:opacity-90", children: [
            "View Services ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+9779812330094", className: "inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold backdrop-blur hover:bg-white/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16 }),
            " +977 9812330094"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-badges mt-8 flex flex-wrap items-center gap-6 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "blur-up-1 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 18 }),
            " Verified workers"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "blur-up-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 18 }),
            " Same-day service"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "blur-up-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 18, className: "fill-[var(--accent)] text-[var(--accent)]" }),
            " 4.6 rated"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-cards relative hidden lg:block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 top-10 h-72 w-72 rounded-full bg-[var(--accent)]/30 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative grid grid-cols-2 gap-4", children: [
          { I: Droplets, label: "Tank Cleaning" },
          { I: Truck, label: "Septic" },
          { I: Wrench, label: "Plumbing" },
          { I: Waves, label: "Sewage" }
        ].map(({ I, label }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `blur-up-${i + 1} rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md transition hover:scale-105 hover:bg-white/20`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(I, { size: 32, className: "text-[var(--accent)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-bold", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white/70", children: "Pro service" })
        ] }, i)) })
      ] })
    ] })
  ] });
}
function ServicesSection({ services, loading }) {
  const titleRef = useScrollAnimation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "services", className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mb-3 flex items-center gap-2 text-sm text-[var(--brand)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:underline", children: "Home" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:underline", children: "Tank Cleaning Service" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "View Service" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: titleRef, className: "fade-up mb-8 flex items-end justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-extrabold sm:text-4xl", children: "Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hidden text-sm font-semibold text-[var(--brand)] hover:underline sm:inline", children: "View all →" })
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: [...Array(4)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 animate-pulse rounded-2xl bg-muted" }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { s, index: i }, s.id)) })
  ] });
}
function ServiceCard({ s, index }) {
  const ref = useScrollAnimation();
  const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services/$id", params: { id: s.id }, className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { ref, className: `zoom-in ${delays[index % 4]} group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: s.image_url,
          alt: `${s.title} - Clean Tank Nepal professional cleaning service in Kathmandu`,
          className: "h-full w-full object-cover transition group-hover:scale-105"
        }
      ),
      s.video_url && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-1 text-[10px] text-white", children: "▶ Video" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "line-clamp-1 font-bold text-foreground", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex items-center justify-between text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14, className: "fill-[var(--rating)] text-[var(--rating)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: s.rating.toFixed(1) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
          "(",
          s.reviews,
          ")"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-base font-bold text-[var(--price)]", children: s.price }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 line-clamp-2 text-sm text-muted-foreground", children: s.description })
    ] })
  ] }) });
}
function StatCounter({ n, l }) {
  const isNumeric = /^\d+/.test(n);
  const numericPart = parseInt(n.replace(/\D/g, "")) || 0;
  const suffix = n.replace(/^\d+/, "");
  const { count, ref } = useCounter(isNumeric ? numericPart : 0, 1500);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: "text-4xl font-extrabold text-[var(--accent)]", children: isNumeric ? `${count}${suffix}` : n }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-white/80", children: l })
  ] });
}
function Stats() {
  const stats = [
    { n: "5000", suffix: "+", l: "Tanks cleaned" },
    { n: "12", suffix: "+", l: "Years experience" },
    { n: "4.6", suffix: "★", l: "Average rating" },
    { n: "24", suffix: "/7", l: "Emergency support" }
  ];
  const ref = useScrollAnimation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-to-r from-[var(--brand-deep)] to-[var(--brand)] py-12 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: "fade-up mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatCounter, { n: s.n, l: s.l }, s.l)) }) });
}
function CTA({ services }) {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-lg sm:p-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-2 lg:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: leftRef, className: "fade-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-extrabold sm:text-4xl", children: "Need cleaning today?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Call or message us — we'll dispatch a verified crew anywhere in Kathmandu within hours." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 18, className: "text-[var(--brand)]" }),
          " +977 9812330094"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 18, className: "text-[var(--brand)]" }),
          " netrashrestha0309@gmail.com"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 18, className: "text-[var(--brand)]" }),
          " Kathmandu, Nepal"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { ref: rightRef, className: "fade-right space-y-3 rounded-2xl bg-muted/50 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "rounded-lg border border-border bg-background px-3 py-2 text-sm", placeholder: "Your name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "rounded-lg border border-border bg-background px-3 py-2 text-sm", placeholder: "Phone" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Select a service" }),
        services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: s.title }, s.title))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm", rows: 3, placeholder: "Address / message" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "w-full rounded-lg bg-[var(--accent)] py-3 font-semibold text-accent-foreground transition hover:opacity-90", children: "Request a Quote" })
    ] })
  ] }) }) });
}
function WhatsAppButton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: "https://wa.me/9779812330094",
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "12px",
        background: "white",
        borderRadius: "16px",
        padding: "10px 16px",
        boxShadow: "0 8px 32px rgba(37,211,102,0.35), 0 2px 8px rgba(0,0,0,0.15)",
        border: "2px solid #25D366",
        textDecoration: "none",
        transition: "transform 0.2s"
      },
      onMouseEnter: (e) => e.currentTarget.style.transform = "scale(1.07)",
      onMouseLeave: (e) => e.currentTarget.style.transform = "scale(1)",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 44, height: 44, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 32 32", width: "24", height: "24", fill: "white", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.5L4 29l7.75-1.813A11.94 11.94 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm5.894 16.472c-.247.693-1.443 1.32-1.97 1.374-.497.05-1.07.07-1.726-.108-.398-.108-.91-.28-1.557-.548-2.738-1.17-4.527-3.94-4.664-4.123-.138-.184-1.12-1.49-1.12-2.842 0-1.352.71-2.017 1.005-2.29.276-.253.607-.315.81-.315.203 0 .405.002.582.01.187.01.437-.07.684.522.253.604.86 2.088.935 2.24.075.15.125.327.025.527-.1.2-.15.323-.298.498-.148.176-.312.393-.445.528-.148.148-.302.308-.13.604.173.296.767 1.263 1.646 2.047 1.131 1.008 2.084 1.32 2.38 1.47.297.148.47.124.643-.074.173-.198.74-.863.937-1.16.198-.295.396-.247.668-.148.27.1 1.717.81 2.012.957.296.148.493.222.566.346.074.123.074.714-.173 1.407z" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { position: "absolute", top: 0, right: 0, width: 12, height: 12, background: "#25D366", borderRadius: "50%", border: "2px solid white", animation: "pulse 1.5s infinite" } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 14, fontWeight: 700, color: "#111" }, children: "WhatsApp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 12, color: "#555" }, children: "9812330094" })
        ] })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border bg-[var(--brand-deep)] text-white/80", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "शुभ आरम्भ Cleaning" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm", children: "Kathmandu's trusted name for tank, sewer & plumbing cleaning." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "rounded-full bg-white/10 p-2 hover:bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { size: 16 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "rounded-full bg-white/10 p-2 hover:bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 16 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "rounded-full bg-white/10 p-2 hover:bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 16 }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-white", children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Overhead Tank Cleaning" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Reserve Tank Cleaning" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Septic Tank Cleaning" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Sewage & Drainage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Plumbing Repair" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-white", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "About Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Why Choose Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Reviews" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Careers" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-white", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "+977 9812330094" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "netrashrestha0309@gmail.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Kathmandu, Nepal" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/10 py-4 text-center text-xs text-white/60", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " शुभ आरम्भ Cleaning Service. All rights reserved."
    ] })
  ] });
}
const Route = createFileRoute("/services/$id")({
  component: ServiceDetail
});
const TIME_SLOTS = ["8AM-9AM", "9AM-10AM", "10AM-11AM", "11AM-12PM", "12PM-1PM", "1PM-2PM", "2PM-3PM", "3PM-4PM", "4PM-5PM", "5PM-6PM", "6PM-7PM", "7PM-8PM"];
const PROMO_CODES = { FREE20: 20, CLEAN10: 10, NEPAL15: 15 };
function getDates() {
  return Array.from({ length: 7 }, (_, i) => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() + i);
    return d;
  });
}
function ServiceDetail() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const [service, setService] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [selectedDate, setSelectedDate] = reactExports.useState(0);
  const [selectedSlot, setSelectedSlot] = reactExports.useState("8AM-9AM");
  const [promo, setPromo] = reactExports.useState("");
  const [promoApplied, setPromoApplied] = reactExports.useState(null);
  const [promoError, setPromoError] = reactExports.useState("");
  const dates = getDates();
  reactExports.useEffect(() => {
    supabase.from("services").select("*").eq("id", id).single().then(({ data }) => {
      setService(data);
      setLoading(false);
    });
  }, [id]);
  function applyPromo() {
    const discount = PROMO_CODES[promo.toUpperCase()];
    if (discount) {
      setPromoApplied(discount);
      setPromoError("");
    } else {
      setPromoError("Invalid promo code");
      setPromoApplied(null);
    }
  }
  function getBasePrice() {
    if (!service) return 0;
    const match = service.price.match(/[\d,]+/);
    return match ? parseInt(match[0].replace(/,/g, "")) : 0;
  }
  function getFinalPrice() {
    const base = getBasePrice();
    return promoApplied ? base - Math.round(base * promoApplied / 100) : base;
  }
  function handleBookNow() {
    if (!service) return;
    const dateStr = dates[selectedDate].toLocaleDateString("en", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    const line = "─────────────────────────";
    const msg = [
      `┌${line}┐`,
      `│  🧹 *BOOKING REQUEST*      │`,
      `└${line}┘`,
      ``,
      `🏷️ *Service*`,
      `› ${service.title}`,
      ``,
      `📅 *Date*`,
      `› ${dateStr}`,
      ``,
      `⏰ *Time Slot*`,
      `› ${selectedSlot}`,
      ``,
      `💰 *Amount*`,
      `› Rs ${getFinalPrice().toLocaleString()}${promoApplied ? ` _(${promoApplied}% off — ${promo.toUpperCase()})_` : ""}`,
      ``,
      `📍 *Location*`,
      `› Kathmandu, Nepal`,
      ``,
      line,
      `✅ Please *confirm* my booking!`,
      `📞 +977 9812330094`,
      line
    ].join("\n");
    window.open(`https://wa.me/9779812330094?text=${encodeURIComponent(msg)}`, "_blank");
  }
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 animate-spin rounded-full border-4 border-[var(--brand)] border-t-transparent" }) });
  if (!service) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center text-muted-foreground", children: "Service not found." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand)] text-primary-foreground shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { size: 22 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-[var(--brand-deep)]", children: "शुभ आरम्भ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Cleaning Service" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-3 sm:flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14 }),
          " Kathmandu"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+9779812330094", className: "flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-accent-foreground shadow-md transition hover:opacity-90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16 }),
          " Call Now"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mb-4 flex flex-wrap items-center gap-2 text-sm text-[var(--brand)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "hover:underline", children: "Home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "/" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#services", className: "hover:underline", children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "/" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground line-clamp-1", children: service.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => navigate({ to: "/" }), className: "mb-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16 }),
        " Back to Services"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-[1fr_380px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl border border-border bg-card shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: service.image_url, alt: service.title, className: "h-72 w-full object-cover sm:h-96" }),
          service.video_url && /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: service.video_url, controls: true, className: "w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-extrabold", children: service.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-1 rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-orange-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { size: 15 }),
                " Verified"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-2", children: [
              [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 16, className: i < Math.round(service.rating) ? "fill-[var(--rating)] text-[var(--rating)]" : "text-muted" }, i)),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: service.rating.toFixed(1) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                "(",
                service.reviews,
                " reviews)"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-xl bg-muted/50 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold", children: "About this service" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: service.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: "Our professional team uses advanced machinery and eco-friendly disinfectants to remove dirt, algae, and bacteria. Ideal for households, apartments, and offices across Kathmandu, Lalitpur and Bhaktapur." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3", children: ["Verified Workers", "Eco-friendly", "Same-day", "Insurance covered", "Free inspection", "24/7 support"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { size: 13, className: "text-[var(--brand)]" }),
              " ",
              f
            ] }, f)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:sticky lg:top-24 lg:self-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-extrabold text-[var(--price)]", children: service.price }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 flex items-center gap-1 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 12 }),
            " Fixed rate — will not change."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold", children: "Select Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto pb-1", children: dates.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setSelectedDate(i),
                className: `flex shrink-0 flex-col items-center rounded-xl px-3 py-2 text-xs font-semibold transition ${selectedDate === i ? "bg-[var(--brand)] text-white" : "border border-border hover:border-[var(--brand)]"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: d.toLocaleDateString("en", { weekday: "short" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-extrabold", children: d.getDate() }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: d.toLocaleDateString("en", { month: "short" }) })
                ]
              },
              i
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold", children: "Choose a Time Slot" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: TIME_SLOTS.map((slot) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setSelectedSlot(slot),
                className: `rounded-lg py-1.5 text-xs font-semibold transition ${selectedSlot === slot ? "bg-[var(--accent)] text-accent-foreground" : "border border-border hover:border-[var(--accent)]"}`,
                children: slot
              },
              slot
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center gap-1 text-sm font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: 13 }),
              " Promo Code"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  value: promo,
                  onChange: (e) => {
                    setPromo(e.target.value);
                    setPromoError("");
                  },
                  placeholder: "e.g. FREE20",
                  className: "flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm uppercase"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: applyPromo, className: "rounded-lg bg-[var(--brand)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90", children: "Apply" })
            ] }),
            promoApplied && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs font-medium text-green-600", children: [
              "✅ ",
              promoApplied,
              "% discount applied!"
            ] }),
            promoError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-500", children: promoError })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-1 rounded-xl bg-muted/50 p-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Service charge" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Rs ",
                getBasePrice().toLocaleString()
              ] })
            ] }),
            promoApplied && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-green-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Discount (",
                promoApplied,
                "%)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "- Rs ",
                Math.round(getBasePrice() * promoApplied / 100).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex justify-between border-t border-border pt-1 text-base font-extrabold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[var(--price)]", children: [
                "Rs ",
                getFinalPrice().toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-xl border border-[var(--brand)]/30 bg-[var(--brand)]/5 p-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-[var(--brand-deep)]", children: "📋 Your Booking Summary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 space-y-1 text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                "📅 ",
                dates[selectedDate].toLocaleDateString("en", { weekday: "long", month: "long", day: "numeric" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                "⏰ ",
                selectedSlot
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                "💰 Rs ",
                getFinalPrice().toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleBookNow,
              className: "mt-5 w-full rounded-xl bg-[var(--accent)] py-3 text-base font-extrabold text-accent-foreground shadow-lg transition hover:opacity-90 active:scale-95",
              children: "📲 Book Now via WhatsApp"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-center text-xs text-muted-foreground", children: "Clicking will open WhatsApp with your booking details pre-filled" })
        ] }) })
      ] })
    ] })
  ] });
}
const AdminRoute = Route$2.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$3
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$3
});
const ServicesIdRoute = Route.update({
  id: "/services/$id",
  path: "/services/$id",
  getParentRoute: () => Route$3
});
const rootRouteChildren = {
  IndexRoute,
  AdminRoute,
  ServicesIdRoute
};
const routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
