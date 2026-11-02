import { Droplets, Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";
import { BUSINESS, SERVICE_PAGES } from "@/lib/seo";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/drainage-cleaning-kathmandu", label: "Drainage Kathmandu" },
  { href: "/septic-tank-cleaning-kathmandu", label: "Septic Tank" },
  { href: "/#about", label: "About Us" },
  { href: "/#contact", label: "Contact" },
];

const FOOTER_SERVICES = [
  { href: "/services/1", label: "Overhead Water Tank Cleaning" },
  { href: "/services/2", label: "Underground Reserve Tank Cleaning" },
  { href: "/services/3", label: "Septic Tank Cleaning" },
  { href: "/services/4", label: "Sewage & Drainage Clearing" },
  { href: "/services", label: "All services" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2" aria-label="Drainage Cleaning Nepal home">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--brand)] text-primary-foreground shadow-lg">
            <Droplets size={22} />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold text-[var(--brand-deep)]">शुभ आरम्भ</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Cleaning Service
            </div>
          </div>
        </a>
        <nav className="hidden gap-6 text-sm font-medium lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[var(--brand)]">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={BUSINESS.phoneHref}
          className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-accent-foreground shadow-md transition hover:opacity-90"
        >
          <Phone size={16} /> <span className="hidden sm:inline">Book Now</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--brand-deep)] text-white/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2 text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--accent)]">
              <Droplets size={18} />
            </div>
            <span className="font-bold">शुभ आरम्भ Cleaning</span>
          </div>
          <p className="mt-3 text-sm">
            Kathmandu's trusted name for tank, septic, sewer and drainage cleaning across the
            valley.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Drainage Cleaning Nepal on Instagram"
              className="rounded-full bg-white/10 p-2 hover:bg-white/20"
            >
              <Instagram size={16} />
            </a>
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="rounded-full bg-white/10 p-2 hover:bg-white/20"
            >
              <MessageCircle size={16} />
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Drainage+Cleaning+Nepal+Kathmandu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Find us on Google Maps"
              className="rounded-full bg-white/10 p-2 hover:bg-white/20"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>
        <div>
          <div className="font-semibold text-white">Services</div>
          <ul className="mt-3 space-y-2 text-sm">
            {FOOTER_SERVICES.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Service Areas</div>
          <ul className="mt-3 space-y-2 text-sm">
            {SERVICE_PAGES.map((page) => (
              <li key={page.path}>
                <a href={page.path} className="hover:text-white hover:underline">
                  {page.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/sitemap.xml" className="hover:text-white hover:underline">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Contact</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={BUSINESS.phoneHref} className="hover:text-white hover:underline">
                {BUSINESS.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="break-all hover:text-white hover:underline"
              >
                {BUSINESS.email}
              </a>
            </li>
            <li>Kathmandu, Lalitpur &amp; Bhaktapur</li>
            <li>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline"
              >
                WhatsApp us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {BUSINESS.alternateName}. All rights reserved.
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={BUSINESS.whatsapp}
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
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.07)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div style={{ position: "relative" }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "#25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            viewBox="0 0 32 32"
            width="24"
            height="24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.5L4 29l7.75-1.813A11.94 11.94 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm5.894 16.472c-.247.693-1.443 1.32-1.97 1.374-.497.05-1.07.07-1.726-.108-.398-.108-.91-.28-1.557-.548-2.738-1.17-4.527-3.94-4.664-4.123-.138-.184-1.12-1.49-1.12-2.842 0-1.352.71-2.017 1.005-2.29.276-.253.607-.315.81-.315.203 0 .405.002.582.01.187.01.437-.07.684.522.253.604.86 2.088.935 2.24.075.15.125.327.025.527-.1.2-.15.323-.298.498-.148.176-.312.393-.445.528-.148.148-.302.308-.13.604.173.296.767 1.263 1.646 2.047 1.131 1.008 2.084 1.32 2.38 1.47.297.148.47.124.643-.074.173-.198.74-.863.937-1.16.198-.295.396-.247.668-.148.27.1 1.717.81 2.012.957.296.148.493.222.566.346.074.123.074.714-.173 1.407z" />
          </svg>
        </div>
        <span
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 12,
            height: 12,
            background: "#25D366",
            borderRadius: "50%",
            border: "2px solid white",
            animation: "pulse 1.5s infinite",
          }}
        />
      </div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#111" }}>WhatsApp</div>
        <div style={{ fontSize: 12, color: "#555" }}>9812330094</div>
      </div>
    </a>
  );
}

export function ContactBlock() {
  return (
    <div className="grid gap-3 text-sm sm:grid-cols-3">
      <a
        href={BUSINESS.phoneHref}
        className="flex items-center gap-3 rounded-md border border-border bg-card px-4 py-3 hover:border-[var(--brand)]"
      >
        <Phone size={18} className="text-[var(--brand)]" /> {BUSINESS.phone}
      </a>
      <a
        href={`mailto:${BUSINESS.email}`}
        className="flex items-center gap-3 rounded-md border border-border bg-card px-4 py-3 hover:border-[var(--brand)]"
      >
        <Mail size={18} className="text-[var(--brand)]" />{" "}
        <span className="truncate">{BUSINESS.email}</span>
      </a>
      <div className="flex items-center gap-3 rounded-md border border-border bg-card px-4 py-3">
        <MapPin size={18} className="text-[var(--brand)]" /> Kathmandu Valley, Nepal
      </div>
    </div>
  );
}
