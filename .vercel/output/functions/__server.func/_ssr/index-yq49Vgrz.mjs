import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as supabase } from "./supabase-iFuljuaK.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { D as Droplets, b as Phone, B as BadgeCheck, A as ArrowRight, S as ShieldCheck, c as Clock, d as Star, e as Truck, W as Wrench, f as Waves, M as Mail, g as MapPin, F as Facebook, I as Instagram, h as MessageCircle } from "../_libs/lucide-react.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
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
function Index() {
  const [services, setServices] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    supabase.from("services").select("*").order("created_at").then(({
      data
    }) => {
      if (data) setServices(data);
      setLoading(false);
    });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesSection, { services, loading }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AboutUs, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, { services }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppButton, {})
  ] });
}
function AboutUs() {
  const ref = useScrollAnimation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "fade-up grid gap-12 lg:grid-cols-2 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/Septic-tank-cleaning-in-Lalitpur-1-1024x538.webp", alt: "Clean Tank Nepal - Professional Cleaning Team", className: "rounded-3xl shadow-2xl object-cover", style: {
        height: "450px",
        width: "100%"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -right-6 bg-[var(--accent)] text-white rounded-2xl p-6 shadow-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-extrabold", children: "12+" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Years Experience" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-[var(--brand)] uppercase tracking-wider", children: "About Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-extrabold sm:text-4xl", children: "Kathmandu's Most Trusted Cleaning Service" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "At शुभ आरम्भ Cleaning, we've been keeping Kathmandu's water tanks, septic systems, and plumbing clean and hygienic for over 12 years. Our mission is to provide reliable, affordable, and eco-friendly cleaning services that protect your family's health." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 bg-card rounded-2xl border border-border shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { size: 24 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Verified Workers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "All our staff are background-checked and trained" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 bg-card rounded-2xl border border-border shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 24 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Fully Insured" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Your property is protected with full insurance" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 bg-card rounded-2xl border border-border shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 24 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Same-Day Service" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "We can dispatch a team within hours" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 bg-card rounded-2xl border border-border shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Waves, { size: 24 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Eco-Friendly" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "We use safe, biodegradable cleaning products" })
          ] })
        ] })
      ] })
    ] })
  ] }) });
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", className: "hover:text-[var(--brand)]", children: "About Us" }),
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
  const {
    displayed,
    done
  } = useTypewriter("Clean Tank Nepal", 70, 300);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden text-primary-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: {
      backgroundImage: "url('/images/Septic-tank-cleaning-in-Lalitpur-1-1024x538.webp')"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[var(--brand-deep)]/95 via-[var(--brand)]/90 to-sky-500/85" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20", style: {
      backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
      backgroundSize: "60px 60px"
    } }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative grid grid-cols-2 gap-4", children: [{
          I: Droplets,
          label: "Tank Cleaning"
        }, {
          I: Truck,
          label: "Septic"
        }, {
          I: Wrench,
          label: "Plumbing"
        }, {
          I: Waves,
          label: "Sewage"
        }].map(({
          I,
          label
        }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `blur-up-${i + 1} rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md transition hover:scale-105 hover:bg-white/20`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(I, { size: 32, className: "text-[var(--accent)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-bold", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white/70", children: "Pro service" })
        ] }, i)) })
      ] })
    ] })
  ] });
}
function ServicesSection({
  services,
  loading
}) {
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
function ServiceCard({
  s,
  index
}) {
  const ref = useScrollAnimation();
  const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services/$id", params: {
    id: s.id
  }, className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { ref, className: `zoom-in ${delays[index % 4]} group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.image_url, alt: `${s.title} - Clean Tank Nepal professional cleaning service in Kathmandu`, className: "h-full w-full object-cover transition group-hover:scale-105" }),
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
function StatCounter({
  n,
  l
}) {
  const isNumeric = /^\d+/.test(n);
  const numericPart = parseInt(n.replace(/\D/g, "")) || 0;
  const suffix = n.replace(/^\d+/, "");
  const {
    count,
    ref
  } = useCounter(isNumeric ? numericPart : 0, 1500);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: "text-4xl font-extrabold text-[var(--accent)]", children: isNumeric ? `${count}${suffix}` : n }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-white/80", children: l })
  ] });
}
function Stats() {
  const stats = [{
    n: "5000",
    suffix: "+",
    l: "Tanks cleaned"
  }, {
    n: "12",
    suffix: "+",
    l: "Years experience"
  }, {
    n: "4.6",
    suffix: "★",
    l: "Average rating"
  }, {
    n: "24",
    suffix: "/7",
    l: "Emergency support"
  }];
  const ref = useScrollAnimation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-to-r from-[var(--brand-deep)] to-[var(--brand)] py-12 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: "fade-up mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatCounter, { n: s.n, l: s.l }, s.l)) }) });
}
function CTA({
  services
}) {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/9779812330094", target: "_blank", rel: "noopener noreferrer", style: {
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
  }, onMouseEnter: (e) => e.currentTarget.style.transform = "scale(1.07)", onMouseLeave: (e) => e.currentTarget.style.transform = "scale(1)", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      position: "relative"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 32 32", width: "24", height: "24", fill: "white", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.5L4 29l7.75-1.813A11.94 11.94 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm5.894 16.472c-.247.693-1.443 1.32-1.97 1.374-.497.05-1.07.07-1.726-.108-.398-.108-.91-.28-1.557-.548-2.738-1.17-4.527-3.94-4.664-4.123-.138-.184-1.12-1.49-1.12-2.842 0-1.352.71-2.017 1.005-2.29.276-.253.607-.315.81-.315.203 0 .405.002.582.01.187.01.437-.07.684.522.253.604.86 2.088.935 2.24.075.15.125.327.025.527-.1.2-.15.323-.298.498-.148.176-.312.393-.445.528-.148.148-.302.308-.13.604.173.296.767 1.263 1.646 2.047 1.131 1.008 2.084 1.32 2.38 1.47.297.148.47.124.643-.074.173-.198.74-.863.937-1.16.198-.295.396-.247.668-.148.27.1 1.717.81 2.012.957.296.148.493.222.566.346.074.123.074.714-.173 1.407z" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
        position: "absolute",
        top: 0,
        right: 0,
        width: 12,
        height: 12,
        background: "#25D366",
        borderRadius: "50%",
        border: "2px solid white",
        animation: "pulse 1.5s infinite"
      } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        fontSize: 14,
        fontWeight: 700,
        color: "#111"
      }, children: "WhatsApp" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        fontSize: 12,
        color: "#555"
      }, children: "9812330094" })
    ] })
  ] });
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
export {
  Index as component
};
