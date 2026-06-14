import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { s as supabase } from "./supabase-iFuljuaK.mjs";
import { R as Route } from "./router-azkyeWCT.mjs";
import { D as Droplets, g as MapPin, b as Phone, i as ArrowLeft, d as Star, B as BadgeCheck, c as Clock, j as Tag } from "../_libs/lucide-react.mjs";
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
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const TIME_SLOTS = ["8AM-9AM", "9AM-10AM", "10AM-11AM", "11AM-12PM", "12PM-1PM", "1PM-2PM", "2PM-3PM", "3PM-4PM", "4PM-5PM", "5PM-6PM", "6PM-7PM", "7PM-8PM"];
const PROMO_CODES = {
  FREE20: 20,
  CLEAN10: 10,
  NEPAL15: 15
};
function getDates() {
  return Array.from({
    length: 7
  }, (_, i) => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() + i);
    return d;
  });
}
function ServiceDetail() {
  const {
    id
  } = Route.useParams();
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
    supabase.from("services").select("*").eq("id", id).single().then(({
      data
    }) => {
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
    const msg = [`┌${line}┐`, `│  🧹 *BOOKING REQUEST*      │`, `└${line}┘`, ``, `🏷️ *Service*`, `› ${service.title}`, ``, `🏢 *Provider*`, `› ${service.vendor} ✅`, ``, `📅 *Date*`, `› ${dateStr}`, ``, `⏰ *Time Slot*`, `› ${selectedSlot}`, ``, `💰 *Amount*`, `› Rs ${getFinalPrice().toLocaleString()}${promoApplied ? ` _(${promoApplied}% off — ${promo.toUpperCase()})_` : ""}`, ``, `📍 *Location*`, `› Kathmandu, Nepal`, ``, line, `✅ Please *confirm* my booking!`, `📞 +977 9812330094`, line].join("\n");
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => navigate({
        to: "/"
      }), className: "mb-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16 }),
        " Back to Services"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-[1fr_380px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl border border-border bg-card shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: service.image_url, alt: service.title, className: "h-72 w-full object-cover sm:h-96" }),
          service.video_url && /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: service.video_url, controls: true, className: "w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-extrabold", children: service.title }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-2", children: [
              [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 16, className: i < Math.round(service.rating) ? "fill-[var(--rating)] text-[var(--rating)]" : "text-muted" }, i)),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: service.rating.toFixed(1) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                "(",
                service.reviews,
                " reviews)"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-4", children: service.description.replace(/\r/g, "").split(/\n+/).map((l) => l.trim()).filter((l) => l).map((trimmed, i) => {
              const isHeading = trimmed.startsWith("Service Overview") || trimmed.startsWith("Why ") || trimmed.startsWith("Problems ") || trimmed.startsWith("What's Included") || trimmed.startsWith("Our service includes");
              if (isHeading) {
                return /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-foreground mt-4 first:mt-0", children: trimmed }, i);
              }
              if (trimmed.match(/^\d+\.\s/)) {
                return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: trimmed }, i);
              }
              if (trimmed.startsWith("• ")) {
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-relaxed", children: trimmed.slice(2) })
                ] }, i);
              }
              return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: trimmed }, i);
            }) }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto pb-1", children: dates.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSelectedDate(i), className: `flex shrink-0 flex-col items-center rounded-xl px-3 py-2 text-xs font-semibold transition ${selectedDate === i ? "bg-[var(--brand)] text-white" : "border border-border hover:border-[var(--brand)]"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: d.toLocaleDateString("en", {
                weekday: "short"
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-extrabold", children: d.getDate() }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: d.toLocaleDateString("en", {
                month: "short"
              }) })
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold", children: "Choose a Time Slot" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: TIME_SLOTS.map((slot) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedSlot(slot), className: `rounded-lg py-1.5 text-xs font-semibold transition ${selectedSlot === slot ? "bg-[var(--accent)] text-accent-foreground" : "border border-border hover:border-[var(--accent)]"}`, children: slot }, slot)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center gap-1 text-sm font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: 13 }),
              " Promo Code"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: promo, onChange: (e) => {
                setPromo(e.target.value);
                setPromoError("");
              }, placeholder: "e.g. FREE20", className: "flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm uppercase" }),
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
                dates[selectedDate].toLocaleDateString("en", {
                  weekday: "long",
                  month: "long",
                  day: "numeric"
                })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleBookNow, className: "mt-5 w-full rounded-xl bg-[var(--accent)] py-3 text-base font-extrabold text-accent-foreground shadow-lg transition hover:opacity-90 active:scale-95", children: "📲 Book Now via WhatsApp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-center text-xs text-muted-foreground", children: "Clicking will open WhatsApp with your booking details pre-filled" })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  ServiceDetail as component
};
