import { ArrowRight, BadgeCheck, Check, Clock, MapPin, Phone, Star } from "lucide-react";
import { BUSINESS } from "@/lib/seo";
import { Header, Footer, WhatsAppButton, ContactBlock } from "./site-chrome";

export type LandingSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LandingPrice = {
  service: string;
  price: string;
  note?: string;
};

export type LandingFaq = {
  q: string;
  a: string;
};

export type LandingRelated = {
  href: string;
  label: string;
  description: string;
};

export type ServiceLandingProps = {
  kicker: string;
  h1: string;
  intro: string[];
  sections: LandingSection[];
  prices: LandingPrice[];
  priceHeading: string;
  faqs: LandingFaq[];
  related: LandingRelated[];
  coverage: string[];
  image?: string;
};

export function ServiceLanding({
  kicker,
  h1,
  intro,
  sections,
  prices,
  priceHeading,
  faqs,
  related,
  coverage,
  image = "/images/Septic-tank-cleaning-in-Lalitpur-1-1024x538.webp",
}: ServiceLandingProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="relative overflow-hidden text-primary-foreground">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-deep)]/95 via-[var(--brand)]/90 to-sky-500/85" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <nav
            className="mb-4 flex flex-wrap items-center gap-2 text-xs text-white/80"
            aria-label="Breadcrumb"
          >
            <a href="/" className="hover:underline">
              Home
            </a>
            <span>/</span>
            <a href="/services" className="hover:underline">
              Services
            </a>
            <span>/</span>
            <span className="text-white">{h1}</span>
          </nav>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/80">
            {kicker}
          </div>
          <h1 className="mt-2 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            {h1}
          </h1>
          <div className="mt-4 max-w-3xl space-y-3 text-sm text-white/90 sm:text-base">
            {intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-bold text-accent-foreground shadow-xl transition hover:opacity-90"
            >
              <Phone size={16} /> Call {BUSINESS.phone}
            </a>
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold backdrop-blur hover:bg-white/20"
            >
              WhatsApp for a quote <ArrowRight size={16} />
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-white/85 sm:text-sm">
            <span className="flex items-center gap-2">
              <ShieldCheckIcon /> Verified, insured team
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} /> Same-day dispatch
            </span>
            <span className="flex items-center gap-2">
              <Star size={16} className="fill-[var(--accent)] text-[var(--accent)]" /> 4.6 average
              rating
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_340px] lg:px-8">
        <article className="space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-extrabold text-foreground">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-3 leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm text-muted-foreground"
                    >
                      <Check size={16} className="mt-0.5 shrink-0 text-[var(--brand)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-extrabold text-foreground">{priceHeading}</h2>
            <div className="mt-4 overflow-hidden rounded-md border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/60 text-foreground">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Service</th>
                    <th className="px-4 py-3 font-semibold">Starting price</th>
                    <th className="hidden px-4 py-3 font-semibold sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {prices.map((row) => (
                    <tr key={row.service} className="border-t border-border">
                      <td className="px-4 py-3 font-medium text-foreground">{row.service}</td>
                      <td className="px-4 py-3 font-bold text-[var(--price)]">{row.price}</td>
                      <td className="hidden px-4 py-3 text-muted-foreground sm:table-cell">
                        {row.note ?? "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Final price depends on tank size, access and sludge volume. We confirm the total on
              the phone before the team leaves.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground">Areas we cover</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Our crews work across the Kathmandu Valley. Regular coverage includes:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {coverage.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  <MapPin size={12} className="text-[var(--brand)]" /> {area}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground">Frequently asked questions</h2>
            <div className="mt-4 space-y-3">
              {faqs.map((faq) => (
                <details key={faq.q} className="group rounded-md border border-border bg-card p-4">
                  <summary className="cursor-pointer list-none font-semibold text-foreground marker:hidden">
                    {faq.q}
                  </summary>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground">Related services</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {related.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group rounded-md border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-[var(--brand)] hover:shadow-md"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-bold text-foreground">{item.label}</span>
                    <ArrowRight
                      size={16}
                      className="text-[var(--brand)] transition group-hover:translate-x-0.5"
                    />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </a>
              ))}
            </div>
          </section>

          <section className="rounded-md border-2 border-[var(--accent)] bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-foreground">Book a crew today</h2>
            <p className="mt-2 text-muted-foreground">
              Call {BUSINESS.phone} or message us on WhatsApp with your location. We confirm the
              price and send a team, often the same day.
            </p>
            <div className="mt-4">
              <ContactBlock />
            </div>
          </section>
        </article>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-md border border-border bg-card p-5 shadow-sm">
            <div className="text-sm font-semibold text-foreground">Need help right now?</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Tell us the problem and your area — we will confirm the price and arrival window.
            </p>
            <a
              href={BUSINESS.phoneHref}
              className="mt-4 flex items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-4 py-3 text-sm font-bold text-accent-foreground transition hover:opacity-90"
            >
              <Phone size={16} /> {BUSINESS.phone}
            </a>
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-semibold transition hover:border-[var(--brand)]"
            >
              Chat on WhatsApp
            </a>
            <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
              <li className="flex items-center gap-2">
                <BadgeCheck size={14} className="text-[var(--brand)]" /> Verified workers and
                insured jobs
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-[var(--brand)]" /> Same-day and emergency slots
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-[var(--brand)]" /> Fixed quote before work starts
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function ShieldCheckIcon() {
  return <BadgeCheck size={16} />;
}
