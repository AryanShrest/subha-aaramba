import { createFileRoute } from "@tanstack/react-router";
import {
  Phone, Mail, MapPin, Star, BadgeCheck, Droplets, Wrench, Truck,
  Waves, ShieldCheck, Clock, ArrowRight,
  Facebook, Instagram, MessageCircle,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTypewriter, useCounter } from "@/hooks/useTextAnimations";
import { useState, useEffect, type RefObject } from "react";
import { supabase, type Service } from "@/lib/supabase";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clean Tank Nepal | Water Tank, Septic & Plumbing Cleaning Kathmandu" },
      { name: "description", content: "Clean Tank Nepal offers professional overhead tank, reserve tank, septic tank, sewage and plumbing cleaning in Kathmandu, Lalitpur & Bhaktapur. Trusted, affordable, same-day service. Book now." },
      { property: "og:title", content: "Clean Tank Nepal | Water Tank & Plumbing Cleaning Kathmandu" },
      { property: "og:description", content: "Professional tank cleaning, septic & sewage clearing, and plumbing services across Kathmandu valley. Verified workers. Same-day service." },
    ],
  }),
  component: Index,
});

function Index() {
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
        <Hero />
        <ServicesSection services={services} loading={loading} />
        <AboutUs />
        <Stats />
        <CTA services={services} />
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
}

function AboutUs() {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 bg-muted/30">
      <div ref={ref} className="fade-up grid gap-12 lg:grid-cols-2 items-center">
        <div className="relative">
          <img 
            src="/images/Septic-tank-cleaning-in-Lalitpur-1-1024x538.webp" 
            alt="Clean Tank Nepal - Professional Cleaning Team" 
            className="rounded-md shadow-2xl object-cover" 
            style={{ height: '450px', width: '100%' }}
          />
          <div className="absolute -bottom-6 -right-6 bg-[var(--accent)] text-white rounded-md p-6 shadow-xl">
            <div className="text-4xl font-extrabold">12+</div>
            <div className="text-sm font-semibold">Years Experience</div>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <div className="text-sm font-semibold text-[var(--brand)] uppercase tracking-wider">About Us</div>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Kathmandu's Most Trusted Cleaning Service</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At शुभ आरम्भ Cleaning, we've been keeping Kathmandu's water tanks, septic systems, and plumbing clean and hygienic for over 12 years. Our mission is to provide reliable, affordable, and eco-friendly cleaning services that protect your family's health.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 p-4 bg-card rounded-md border border-border shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
                <BadgeCheck size={24} />
              </div>
              <div>
                <div className="font-semibold">Verified Workers</div>
                <div className="text-sm text-muted-foreground">All our staff are background-checked and trained</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-card rounded-md border border-border shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
                <ShieldCheck size={24} />
              </div>
              <div>
                <div className="font-semibold">Fully Insured</div>
                <div className="text-sm text-muted-foreground">Your property is protected with full insurance</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-card rounded-md border border-border shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
                <Clock size={24} />
              </div>
              <div>
                <div className="font-semibold">Same-Day Service</div>
                <div className="text-sm text-muted-foreground">We can dispatch a team within hours</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-card rounded-md border border-border shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
                <Waves size={24} />
              </div>
              <div>
                <div className="font-semibold">Eco-Friendly</div>
                <div className="text-sm text-muted-foreground">We use safe, biodegradable cleaning products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--brand)] text-primary-foreground shadow-lg">
            <Droplets size={22} />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold text-[var(--brand-deep)]">शुभ आरम्भ</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Cleaning Service</div>
          </div>
        </a>
        <nav className="hidden gap-8 text-sm font-medium md:flex">
          <a href="#services" className="hover:text-[var(--brand)]">Services</a>
          <a href="#about" className="hover:text-[var(--brand)]">About Us</a>
          <a href="#contact" className="hover:text-[var(--brand)]">Contact</a>
        </nav>
        <a href="tel:+9779812330094" className="hidden items-center gap-2 rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-accent-foreground shadow-md transition hover:opacity-90 sm:inline-flex">
          <Phone size={16} /> Book Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const heroRef = useScrollAnimation<HTMLDivElement>("hero-visible", 0.1);
  const { displayed, done } = useTypewriter("Clean Tank Nepal", 70, 300);
  return (
    <section className="relative overflow-hidden text-primary-foreground">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Septic-tank-cleaning-in-Lalitpur-1-1024x538.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-deep)]/95 via-[var(--brand)]/90 to-sky-500/85" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div ref={heroRef} className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
        <div>
          <div className="hero-badge inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
            <BadgeCheck size={14} /> Trusted in Kathmandu Valley
          </div>
          <h1 className="hero-title mt-4 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
            <span className={`typewriter-cursor${done ? " done" : ""}`}>{displayed}</span>
            {done && (
              <> — Sewer, Tank &amp; Plumbing Cleaning{" "}
                <span className="shimmer-text animated-underline">Done Right.</span>
              </>
            )}
          </h1>
          <p className="hero-subtitle mt-4 max-w-xl text-sm text-white/85 sm:text-base">
            Hygienic water tank cleaning, septic &amp; sewage clearing, and professional plumbing services across Kathmandu — booked in minutes.
          </p>
          <div className="hero-buttons mt-8 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-bold text-accent-foreground shadow-xl transition hover:opacity-90">
              View Services <ArrowRight size={16} />
            </a>
            <a href="tel:+9779812330094" className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold backdrop-blur hover:bg-white/20">
              <Phone size={16} /> +977 9812330094
            </a>
          </div>
          <div className="hero-badges mt-6 flex flex-wrap items-center gap-6 text-sm text-white/80">
            <div className="blur-up-1 flex items-center gap-2"><ShieldCheck size={18} /> Verified workers</div>
            <div className="blur-up-2 flex items-center gap-2"><Clock size={18} /> Same-day service</div>
            <div className="blur-up-3 flex items-center gap-2"><Star size={18} className="fill-[var(--accent)] text-[var(--accent)]" /> 4.6 rated</div>
          </div>
        </div>
        <div className="hero-cards relative hidden lg:block ml-6">
          <div className="absolute -right-10 top-10 h-72 w-72 rounded-full bg-[var(--accent)]/30 blur-3xl" />
          <div className="relative grid grid-cols-2 gap-6">
            {[
              { I: Droplets, label: "Tank Cleaning" },
              { I: Truck, label: "Septic" },
              { I: Wrench, label: "Plumbing" },
              { I: Waves, label: "Sewage" },
            ].map(({ I, label }, i) => (
              <div key={i} className={`blur-up-${i + 1} rounded-md border border-white/20 bg-white/10 p-6 backdrop-blur-md transition hover:scale-105 hover:bg-white/20`}>
                <I size={32} className="text-[var(--accent)]" />
                <div className="mt-3 font-bold">{label}</div>
                <div className="text-xs text-white/70">Pro service</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ services, loading }: { services: Service[]; loading: boolean }) {
  const titleRef = useScrollAnimation<HTMLDivElement>();
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <nav className="mb-3 flex items-center gap-2 text-sm text-[var(--brand)]">
        <a href="#" className="hover:underline">Home</a> <span className="text-muted-foreground">/</span>
        <a href="#" className="hover:underline">Tank Cleaning Service</a> <span className="text-muted-foreground">/</span>
        <span className="text-muted-foreground">View Service</span>
      </nav>
      <div ref={titleRef} className="fade-up mb-8 flex items-end justify-between">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Services</h2>
        <Link to="/services" className="hidden items-center gap-2 rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-accent-foreground shadow-md transition hover:opacity-90 sm:inline-flex">View all →</Link>
      </div>
      {loading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(4)].map((_, i) => <div key={i} className="h-64 animate-pulse rounded-md bg-muted" />)}
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

function StatCounter({ n, l }: { n: string; l: string }) {
  const isNumeric = /^\d+/.test(n);
  const numericPart = parseInt(n.replace(/\D/g, "")) || 0;
  const suffix = n.replace(/^\d+/, "");
  const { count, ref } = useCounter(isNumeric ? numericPart : 0, 1500);
  return (
    <div className="text-center">
      <div ref={ref as RefObject<HTMLDivElement>} className="text-4xl font-extrabold text-[var(--accent)]">
        {isNumeric ? `${count}${suffix}` : n}
      </div>
      <div className="mt-1 text-sm text-white/80">{l}</div>
    </div>
  );
}

function Stats() {
  const stats = [
    { n: "5000", suffix: "+", l: "Tanks cleaned" },
    { n: "12", suffix: "+", l: "Years experience" },
    { n: "4.6", suffix: "★", l: "Average rating" },
    { n: "24", suffix: "/7", l: "Emergency support" },
  ];
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <section className="bg-gradient-to-r from-[var(--brand-deep)] to-[var(--brand)] py-12 text-primary-foreground">
      <div ref={ref} className="fade-up mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s, i) => (
          <StatCounter key={s.l} n={s.n} l={s.l} />
        ))}
      </div>
    </section>
  );
}

function CTA({ services }: { services: Service[] }) {
  const leftRef = useScrollAnimation<HTMLDivElement>();
  const rightRef = useScrollAnimation<HTMLFormElement>();
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
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
          <div className="mt-4 flex gap-3">
            <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Facebook size={16} /></a>
            <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Instagram size={16} /></a>
            <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><MessageCircle size={16} /></a>
          </div>
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
