import { createFileRoute } from "@tanstack/react-router";
import {
  Phone, Mail, MapPin, Star, BadgeCheck, Droplets, Wrench, Truck,
  ShowerHead, Waves, Hammer, ShieldCheck, Clock, Users, ArrowRight,
  Facebook, Instagram, MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "शुभ आरम्भ Cleaning Service | Sewer, Tank & Plumbing Cleaning Kathmandu" },
      { name: "description", content: "Professional sewer, water tank, septic and plumbing cleaning services in Kathmandu. Trusted, hygienic, affordable. Book online today." },
      { property: "og:title", content: "शुभ आरम्भ Cleaning Service | Kathmandu" },
      { property: "og:description", content: "Sewer, tank & plumbing cleaning specialists serving Kathmandu valley." },
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
  Icon: typeof Droplets;
  gradient: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Overhead Tank Cleaning (1000 ltrs.)",
    vendor: "Clean Services",
    price: "Rs 1,500.00",
    rating: 4.6, reviews: 8,
    description: "Ensure your family's health with safe and hygienic water! Our overhead tank cleaning…",
    Icon: Droplets,
    gradient: "from-sky-400 to-blue-600",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Reserve Tank Cleaning",
    vendor: "Clean Services",
    price: "Rs 2,400.00",
    rating: 4.6, reviews: 8,
    description: "Keep your water safe and hygienic with our expert reserve tank cleaning service in…",
    Icon: Waves,
    gradient: "from-orange-400 to-amber-600",
    image: "https://images.unsplash.com/photo-1607472586893-edc57bbc5fab?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Overhead Tank Cleaning (Up to 2000 ltrs.)",
    vendor: "Clean Services",
    price: "Rs 2,000.00",
    rating: 4.6, reviews: 8,
    description: "Ensure safe and hygienic water for your home or business with professional…",
    Icon: ShowerHead,
    gradient: "from-cyan-400 to-blue-700",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Overhead Tank Cleaning (Up to 3000 ltrs.)",
    vendor: "Clean Services",
    price: "Rs 3,000.00",
    rating: 4.6, reviews: 8,
    description: "Protect your family's health and ensure clean, safe water with Overhead Tank…",
    Icon: Droplets,
    gradient: "from-yellow-400 to-orange-500",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Overhead Tank Cleaning ( 5000 ltrs.)",
    vendor: "Clean Services",
    price: "Rs 4,000.00",
    rating: 4.6, reviews: 8,
    description: "Ensure your water remains safe and hygienic with a thorough deep-clean service…",
    Icon: ShieldCheck,
    gradient: "from-teal-400 to-cyan-700",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Septic Tank Cleaning",
    vendor: "शुभ आरम्भ Cleaning",
    price: "Rs 5,500.00",
    rating: 1.0, reviews: 1,
    description: "Maintain hygiene and prevent sewage backups with our professional septic tank…",
    Icon: Truck,
    gradient: "from-emerald-500 to-green-700",
    image: "https://images.unsplash.com/photo-1597007030739-6d2e7172ee6c?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Sewage & Drainage Cleaning Service",
    vendor: "शुभ आरम्भ Cleaning",
    price: "From Rs 500.00",
    rating: 1.0, reviews: 1,
    description: "Blocked pipes, clogged drains, or sewage backflow? We unclog and restore flow fast.",
    Icon: Wrench,
    gradient: "from-slate-500 to-slate-800",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Plumbing Repair & Installation",
    vendor: "शुभ आरम्भ Cleaning",
    price: "From Rs 800.00",
    rating: 4.8, reviews: 12,
    description: "Leaks, pipe bursts, fittings and full installation — certified plumbers at your door.",
    Icon: Hammer,
    gradient: "from-indigo-500 to-purple-700",
    image: "https://images.unsplash.com/photo-1606613666510-3d1f7e8d8b40?auto=format&fit=crop&w=800&q=70",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Features />
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
        <a href="tel:+9779800000000" className="hidden items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-accent-foreground shadow-md transition hover:opacity-90 sm:inline-flex">
          <Phone size={16} /> Book Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--brand-deep)] via-[var(--brand)] to-sky-500 text-primary-foreground">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
            <BadgeCheck size={14} /> Trusted in Kathmandu Valley
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Sewer, Tank & Plumbing Cleaning <span className="text-[var(--accent)]">Done Right.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            Hygienic water tank cleaning, septic & sewage clearing, and professional plumbing services across Kathmandu — booked in minutes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-accent-foreground shadow-xl transition hover:opacity-90">
              View Services <ArrowRight size={16} />
            </a>
            <a href="tel:+9779800000000" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold backdrop-blur hover:bg-white/20">
              <Phone size={16} /> +977 98-0000-0000
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

function Features() {
  const items = [
    { I: ShieldCheck, t: "100% Hygienic", d: "Eco-safe disinfectants and tested equipment on every job." },
    { I: Clock, t: "Same-Day Service", d: "Book before 2 PM and get serviced the same day." },
    { I: Users, t: "Trained Crew", d: "Background-checked, uniformed, insured professionals." },
    { I: BadgeCheck, t: "Transparent Pricing", d: "No hidden fees. See the rate before you book." },
  ];
  return (
    <section id="features" className="border-b border-border bg-muted/40 py-14">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map(({ I, t, d }) => (
          <div key={t} className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
              <I size={24} />
            </div>
            <div className="mt-4 font-bold">{t}</div>
            <div className="mt-1 text-sm text-muted-foreground">{d}</div>
          </div>
        ))}
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
  const { Icon } = s;
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${s.gradient}`}>
        <img
          src={s.image}
          alt={s.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
        />
        <Icon size={64} strokeWidth={1.5} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/40" />
        <div className="absolute right-3 top-3 rounded-full bg-white/95 px-2 py-1 text-[11px] font-bold text-[var(--brand-deep)]">
          {s.vendor.includes("शुभ") ? "Our Service" : "Partner"}
        </div>
      </div>
      <div className="p-4">
        <h3 className="line-clamp-1 font-bold text-foreground">{s.title}</h3>
        <div className="mt-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <span>{s.vendor}</span>
            <BadgeCheck size={14} className="fill-[var(--verified)] text-white" />
          </div>
          <div className="flex items-center gap-1">
            <Star size={14} className="fill-[var(--rating)] text-[var(--rating)]" />
            <span className="font-semibold">{s.rating.toFixed(1)}</span>
            <span className="text-muted-foreground">({s.reviews})</span>
          </div>
        </div>
        <div className="mt-3 text-base font-bold text-[var(--price)]">{s.price}</div>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{s.description}</p>
        <button className="mt-4 w-full rounded-lg bg-[var(--brand)] py-2 text-sm font-semibold text-primary-foreground transition hover:bg-[var(--brand-deep)]">
          Book Now
        </button>
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
              <div className="flex items-center gap-3"><Phone size={18} className="text-[var(--brand)]" /> +977 98-0000-0000</div>
              <div className="flex items-center gap-3"><Mail size={18} className="text-[var(--brand)]" /> hello@shubharambh.np</div>
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
            <li>+977 98-0000-0000</li>
            <li>hello@shubharambh.np</li>
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
