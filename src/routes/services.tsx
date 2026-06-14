import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase, type Service } from "@/lib/supabase";
import { Link } from "@tanstack/react-router";
import { Star, Droplets, Phone, Mail, MapPin, ArrowLeft } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "All Services | Clean Tank Nepal - Water Tank & Plumbing Cleaning" },
      { name: "description", content: "View all professional cleaning services offered by Clean Tank Nepal including tank cleaning, septic tank cleaning, sewage clearing, and plumbing services." },
      { property: "og:title", content: "All Services | Clean Tank Nepal" },
      { property: "og:description", content: "Professional cleaning services in Kathmandu - tank cleaning, septic, sewage & plumbing." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from("services").select("*").order("created_at").then(({ data }) => {
      if (data) setServices(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <AllServicesSection services={services} loading={loading} />
        <CTA services={services} />
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--brand)] text-primary-foreground shadow-lg">
            <Droplets size={22} />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold text-[var(--brand-deep)]">शुभ आरम्भ</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Cleaning Service</div>
          </div>
        </a>
        <nav className="hidden gap-8 text-sm font-medium md:flex">
          <a href="/" className="hover:text-[var(--brand)]">Home</a>
          <a href="/#services" className="hover:text-[var(--brand)]">Services</a>
          <a href="/#about" className="hover:text-[var(--brand)]">About Us</a>
          <a href="/#contact" className="hover:text-[var(--brand)]">Contact</a>
        </nav>
        <a href="tel:+9779812330094" className="hidden items-center gap-2 rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-accent-foreground shadow-md transition hover:opacity-90 sm:inline-flex">
          <Phone size={16} /> Book Now
        </a>
      </div>
    </header>
  );
}

function AllServicesSection({ services, loading }: { services: Service[]; loading: boolean }) {
  const titleRef = useScrollAnimation<HTMLDivElement>();
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <nav className="mb-3 flex items-center gap-2 text-sm text-[var(--brand)]">
        <Link to="/" className="hover:underline flex items-center gap-1"><ArrowLeft size={14} /> Home</Link>
        <span className="text-muted-foreground">/</span>
        <span className="text-muted-foreground">All Services</span>
      </nav>
      <div ref={titleRef} className="fade-up mb-8">
        <h1 className="text-3xl font-extrabold sm:text-4xl">All Services</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">Browse our complete range of professional cleaning and plumbing services available across Kathmandu.</p>
      </div>
      {loading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(8)].map((_, i) => <div key={i} className="h-64 animate-pulse rounded-md bg-muted" />)}
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => <ServiceCard key={s.id} s={s} index={i} />)}
        </div>
      )}
    </section>
  );
}

function ServiceCard({ s, index }: { s: Service; index: number }) {
  const ref = useScrollAnimation<HTMLElement>();
  const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];
  return (
    <Link to="/services/$id" params={{ id: s.id }} className="block">
      <article ref={ref} className={`zoom-in ${delays[index % 4]} group cursor-pointer overflow-hidden rounded-md border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={s.image_url}
            alt={`${s.title} - Clean Tank Nepal professional cleaning service in Kathmandu`}
            className="h-full w-full object-cover transition group-hover:scale-105"
          />
          {s.video_url && (
            <div className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-1 text-[10px] text-white">▶ Video</div>
          )}
        </div>
        <div className="p-4">
          <h3 className="line-clamp-1 font-bold text-foreground">{s.title}</h3>
          <div className="mt-2 flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-[var(--rating)] text-[var(--rating)]" />
              <span className="font-semibold">{s.rating.toFixed(1)}</span>
              <span className="text-muted-foreground">({s.reviews})</span>
            </div>
          </div>
          <div className="mt-3 text-base font-bold text-[var(--price)]">{s.price}</div>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{s.description}</p>
        </div>
      </article>
    </Link>
  );
}

function CTA({ services }: { services: Service[] }) {
  const leftRef = useScrollAnimation<HTMLDivElement>();
  const rightRef = useScrollAnimation<HTMLFormElement>();
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-md border-2 border-[var(--accent)] bg-card p-8 shadow-lg sm:p-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div ref={leftRef} className="fade-left">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Need cleaning today?</h2>
            <p className="mt-3 text-muted-foreground">Call or message us — we'll dispatch a verified crew anywhere in Kathmandu within hours.</p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3"><Phone size={18} className="text-[var(--brand)]" /> +977 9812330094</div>
              <div className="flex items-center gap-3"><Mail size={18} className="text-[var(--brand)]" /> netrashrestha0309@gmail.com</div>
              <div className="flex items-center gap-3"><MapPin size={18} className="text-[var(--brand)]" /> Kathmandu, Nepal</div>
            </div>
          </div>
          <form ref={rightRef} className="fade-right space-y-3 rounded-md bg-muted/50 p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              <input className="rounded-md border border-border bg-background px-3 py-2 text-sm" placeholder="Your name" />
              <input className="rounded-md border border-border bg-background px-3 py-2 text-sm" placeholder="Phone" />
            </div>
            <select className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm">
              <option>Select a service</option>
              {services.map(s => <option key={s.title}>{s.title}</option>)}
            </select>
            <textarea className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" rows={3} placeholder="Address / message" />
            <button type="button" className="w-full rounded-md bg-[var(--accent)] py-3 font-semibold text-accent-foreground transition hover:opacity-90">
              Request a Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9779812330094"
      target="_blank"
      rel="noopener noreferrer"
      style={{
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
        transition: "transform 0.2s",
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.07)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div style={{ position: "relative" }}>
        <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg viewBox="0 0 32 32" width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.5L4 29l7.75-1.813A11.94 11.94 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm5.894 16.472c-.247.693-1.443 1.32-1.97 1.374-.497.05-1.07.07-1.726-.108-.398-.108-.91-.28-1.557-.548-2.738-1.17-4.527-3.94-4.664-4.123-.138-.184-1.12-1.49-1.12-2.842 0-1.352.71-2.017 1.005-2.29.276-.253.607-.315.81-.315.203 0 .405.002.582.01.187.01.437-.07.684.522.253.604.86 2.088.935 2.24.075.15.125.327.025.527-.1.2-.15.323-.298.498-.148.176-.312.393-.445.528-.148.148-.302.308-.13.604.173.296.767 1.263 1.646 2.047 1.131 1.008 2.084 1.32 2.38 1.47.297.148.47.124.643-.074.173-.198.74-.863.937-1.16.198-.295.396-.247.668-.148.27.1 1.717.81 2.012.957.296.148.493.222.566.346.074.123.074.714-.173 1.407z"/>
          </svg>
        </div>
        <span style={{ position: "absolute", top: 0, right: 0, width: 12, height: 12, background: "#25D366", borderRadius: "50%", border: "2px solid white", animation: "pulse 1.5s infinite" }} />
      </div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#111" }}>WhatsApp</div>
        <div style={{ fontSize: 12, color: "#555" }}>9812330094</div>
      </div>
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--brand-deep)] text-white/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2 text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--accent)]"><Droplets size={18} /></div>
            <span className="font-bold">शुभ आरम्भ Cleaning</span>
          </div>
          <p className="mt-3 text-sm">Kathmandu's trusted name for tank, sewer & plumbing cleaning.</p>
        </div>
        <div>
          <div className="font-semibold text-white">Services</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Overhead Tank Cleaning</li>
            <li>Reserve Tank Cleaning</li>
            <li>Septic Tank Cleaning</li>
            <li>Sewage & Drainage</li>
            <li>Plumbing Repair</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>About Us</li>
            <li>Why Choose Us</li>
            <li>Reviews</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Contact</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>+977 9812330094</li>
            <li>netrashrestha0309@gmail.com</li>
            <li>Kathmandu, Nepal</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} शुभ आरम्भ Cleaning Service. All rights reserved.
      </div>
    </footer>
  );
}
