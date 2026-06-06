import { createFileRoute } from "@tanstack/react-router";
import {
  Phone, Mail, MapPin, Star, BadgeCheck, Droplets, Wrench, Truck,
  Waves, ShieldCheck, Clock, ArrowRight,
  Facebook, Instagram, MessageCircle,
} from "lucide-react";

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

type Service = {
  title: string;
  vendor: string;
  price: string;
  rating: number;
  reviews: number;
  description: string;
  imageUrl: string;
};

const services: Service[] = [
  {
    title: "Over head Tank Cleaning (1000 ltrs.)",
    vendor: "Clean Services",
    price: "Rs 1,500.00",
    rating: 4.6, reviews: 8,
    description: "Ensure your family's health with safe and hygienic water! Our overhead tank cleaning…",
    imageUrl: "/images/Screenshot 2026-06-03 230648.png",
  },
  {
    title: "Reserve Tank Cleaning",
    vendor: "Clean Services",
    price: "Rs 2,400.00",
    rating: 4.6, reviews: 8,
    description: "Keep your water safe and hygienic with our expert reserve tank cleaning service in…",
    imageUrl: "/images/Screenshot 2026-06-03 230703.png",
  },
  {
    title: "Overhead Tank Cleaning (Up to 2000 ltrs.)",
    vendor: "Clean Services",
    price: "Rs 2,000.00",
    rating: 4.6, reviews: 8,
    description: "Ensure safe and hygienic water for your home or business with professional…",
    imageUrl: "/images/Screenshot 2026-06-03 230715.png",
  },
  {
    title: "Overhead Tank Cleaning (Up to 3000 ltrs.)",
    vendor: "Clean Services",
    price: "Rs 3,000.00",
    rating: 4.6, reviews: 8,
    description: "Protect your family's health and ensure clean, safe water with Overhead Tank…",
    imageUrl: "/images/Screenshot 2026-06-03 230723.png",
  },
  {
    title: "Over head Tank Cleaning ( 5000 ltrs.)",
    vendor: "Clean Services",
    price: "Rs 4,000.00",
    rating: 4.6, reviews: 8,
    description: "Ensure your water remains safe and hygienic with a thorough deep-clean service…",
    imageUrl: "/images/Screenshot 2026-06-03 230730.png",
  },
  {
    title: "Septic Tank Cleaning",
    vendor: "Valley Clean Nepal",
    price: "From Rs 5,500.00",
    rating: 1.0, reviews: 1,
    description: "Maintain hygiene and prevent sewage backups with our professional septic tank…",
    imageUrl: "/images/Screenshot 2026-06-03 230737.png",
  },
  {
    title: "Sewage & Drainage Cleaning Service",
    vendor: "Valley Clean Nepal",
    price: "From Rs 500.00",
    rating: 1.0, reviews: 1,
    description: "Blocked pipes, clogged drains, or sewage backflow? We unclog and restore flow fast.",
    imageUrl: "/images/Screenshot 2026-06-03 230743.png",
  },
  {
    title: "Plumbing Repair & Installation",
    vendor: "शुभ आरम्भ Cleaning",
    price: "From Rs 800.00",
    rating: 4.8, reviews: 12,
    description: "Leaks, pipe bursts, fittings and full installation — certified plumbers at your door.",
    imageUrl: "/images/Screenshot 2026-06-03 230648.png",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <ServicesSection />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand)] text-primary-foreground shadow-lg">
            <Droplets size={22} />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold text-[var(--brand-deep)]">शुभ आरम्भ</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Cleaning Service</div>
          </div>
        </a>
        <nav className="hidden gap-8 text-sm font-medium md:flex">
          <a href="#services" className="hover:text-[var(--brand)]">Services</a>
          <a href="#features" className="hover:text-[var(--brand)]">Why Us</a>
          <a href="#contact" className="hover:text-[var(--brand)]">Contact</a>
        </nav>
        <a href="tel:+9779812330094" className="hidden items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-accent-foreground shadow-md transition hover:opacity-90 sm:inline-flex">
          <Phone size={16} /> Book Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden text-primary-foreground">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Septic-tank-cleaning-in-Lalitpur-1-1024x538.webp')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-deep)]/95 via-[var(--brand)]/90 to-sky-500/85" />
      
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
            <BadgeCheck size={14} /> Trusted in Kathmandu Valley
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Clean Tank Nepal — Sewer, Tank &amp; Plumbing Cleaning <span className="text-[var(--accent)]">Done Right.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            Hygienic water tank cleaning, septic & sewage clearing, and professional plumbing services across Kathmandu — booked in minutes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-accent-foreground shadow-xl transition hover:opacity-90">
              View Services <ArrowRight size={16} />
            </a>
            <a href="tel:+9779812330094" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold backdrop-blur hover:bg-white/20">
              <Phone size={16} /> +977 9812330094
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2"><ShieldCheck size={18} /> Verified workers</div>
            <div className="flex items-center gap-2"><Clock size={18} /> Same-day service</div>
            <div className="flex items-center gap-2"><Star size={18} className="fill-[var(--accent)] text-[var(--accent)]" /> 4.6 rated</div>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute -right-10 top-10 h-72 w-72 rounded-full bg-[var(--accent)]/30 blur-3xl" />
          <div className="relative grid grid-cols-2 gap-4">
            {[
              { I: Droplets, label: "Tank Cleaning" },
              { I: Truck, label: "Septic" },
              { I: Wrench, label: "Plumbing" },
              { I: Waves, label: "Sewage" },
            ].map(({ I, label }, i) => (
              <div key={i} className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md transition hover:scale-105 hover:bg-white/20">
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

function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <nav className="mb-3 flex items-center gap-2 text-sm text-[var(--brand)]">
        <a href="#" className="hover:underline">Home</a> <span className="text-muted-foreground">/</span>
        <a href="#" className="hover:underline">Tank Cleaning Service</a> <span className="text-muted-foreground">/</span>
        <span className="text-muted-foreground">View Service</span>
      </nav>
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Services</h2>
        <a href="#" className="hidden text-sm font-semibold text-[var(--brand)] hover:underline sm:inline">View all →</a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((s) => <ServiceCard key={s.title} s={s} />)}
      </div>
    </section>
  );
}

function ServiceCard({ s }: { s: Service }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={s.imageUrl}
          alt={`${s.title} - Clean Tank Nepal professional cleaning service in Kathmandu`}
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="line-clamp-1 font-bold text-foreground">{s.title}</h3>
        <div className="mt-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <span>{s.vendor}</span>
          </div>
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
  );
}

function Stats() {
  const stats = [
    { n: "5,000+", l: "Tanks cleaned" },
    { n: "12+", l: "Years experience" },
    { n: "4.6★", l: "Average rating" },
    { n: "24/7", l: "Emergency support" },
  ];
  return (
    <section className="bg-gradient-to-r from-[var(--brand-deep)] to-[var(--brand)] py-12 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="text-4xl font-extrabold text-[var(--accent)]">{s.n}</div>
            <div className="mt-1 text-sm text-white/80">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-lg sm:p-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Need cleaning today?</h2>
            <p className="mt-3 text-muted-foreground">Call or message us — we'll dispatch a verified crew anywhere in Kathmandu within hours.</p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3"><Phone size={18} className="text-[var(--brand)]" /> +977 9812330094</div>
              <div className="flex items-center gap-3"><Mail size={18} className="text-[var(--brand)]" /> netrashrestha0309@gmail.com</div>
              <div className="flex items-center gap-3"><MapPin size={18} className="text-[var(--brand)]" /> Kathmandu, Nepal</div>
            </div>
          </div>
          <form className="space-y-3 rounded-2xl bg-muted/50 p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              <input className="rounded-lg border border-border bg-background px-3 py-2 text-sm" placeholder="Your name" />
              <input className="rounded-lg border border-border bg-background px-3 py-2 text-sm" placeholder="Phone" />
            </div>
            <select className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm">
              <option>Select a service</option>
              {services.map(s => <option key={s.title}>{s.title}</option>)}
            </select>
            <textarea className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" rows={3} placeholder="Address / message" />
            <button type="button" className="w-full rounded-lg bg-[var(--accent)] py-3 font-semibold text-accent-foreground transition hover:opacity-90">
              Request a Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--brand-deep)] text-white/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2 text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent)]"><Droplets size={18} /></div>
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
