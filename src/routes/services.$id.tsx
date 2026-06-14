import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase, type Service } from "@/lib/supabase";
import { Star, BadgeCheck, Phone, MapPin, Droplets, ArrowLeft, Clock, Tag } from "lucide-react";

export const Route = createFileRoute("/services/$id")({
  component: ServiceDetail,
});

const TIME_SLOTS = ["8AM-9AM","9AM-10AM","10AM-11AM","11AM-12PM","12PM-1PM","1PM-2PM","2PM-3PM","3PM-4PM","4PM-5PM","5PM-6PM","6PM-7PM","7PM-8PM"];
const PROMO_CODES: Record<string, number> = { FREE20: 20, CLEAN10: 10, NEPAL15: 15 };

function getDates() {
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d;
  });
}

function ServiceDetail() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState("8AM-9AM");
  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState<number | null>(null);
  const [promoError, setPromoError] = useState("");
  const dates = getDates();

  useEffect(() => {
    supabase.from("services").select("*").eq("id", id).single().then(({ data }) => {
      setService(data);
      setLoading(false);
    });
  }, [id]);

  function applyPromo() {
    const discount = PROMO_CODES[promo.toUpperCase()];
    if (discount) { setPromoApplied(discount); setPromoError(""); }
    else { setPromoError("Invalid promo code"); setPromoApplied(null); }
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
      weekday: "long", year: "numeric", month: "long", day: "numeric"
    });
    const line  = "─────────────────────────";
    const msg = [
      `┌${line}┐`,
      `│  🧹 *BOOKING REQUEST*      │`,
      `└${line}┘`,
      ``,
      `🏷️ *Service*`,
      `› ${service.title}`,
      ``,
      `🏢 *Provider*`,
      `› ${service.vendor} ✅`,
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
      line,
    ].join("\n");
    window.open(`https://wa.me/9779812330094?text=${encodeURIComponent(msg)}`, "_blank");
  }

  if (loading) return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-[var(--brand)] border-t-transparent" />
    </div>
  );

  if (!service) return (
    <div className="flex min-h-screen items-center justify-center text-muted-foreground">Service not found.</div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand)] text-primary-foreground shadow-lg">
              <Droplets size={22} />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold text-[var(--brand-deep)]">शुभ आरम्भ</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Cleaning Service</div>
            </div>
          </a>
          <div className="hidden items-center gap-3 sm:flex">
            <div className="flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground">
              <MapPin size={14} /> Kathmandu
            </div>
            <a href="tel:+9779812330094" className="flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-accent-foreground shadow-md transition hover:opacity-90">
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-4 flex flex-wrap items-center gap-2 text-sm text-[var(--brand)]">
          <a href="/" className="hover:underline">Home</a>
          <span className="text-muted-foreground">/</span>
          <a href="/#services" className="hover:underline">Services</a>
          <span className="text-muted-foreground">/</span>
          <span className="text-muted-foreground line-clamp-1">{service.title}</span>
        </nav>

        <button onClick={() => navigate({ to: "/" })} className="mb-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft size={16} /> Back to Services
        </button>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* LEFT */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow">
            <img src={service.image_url} alt={service.title} className="h-72 w-full object-cover sm:h-96" />
            {service.video_url && <video src={service.video_url} controls className="w-full" />}
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h1 className="text-2xl font-extrabold">{service.title}</h1>
              </div>
              <div className="mt-3 flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < Math.round(service.rating) ? "fill-[var(--rating)] text-[var(--rating)]" : "text-muted"} />
                ))}
                <span className="text-sm font-semibold">{service.rating.toFixed(1)}</span>
                <span className="text-sm text-muted-foreground">({service.reviews} reviews)</span>
              </div>
              <div className="mt-4 space-y-4">
                {service.description
                  .replace(/\r/g, '')
                  .split(/\n+/)
                  .map(l => l.trim())
                  .filter(l => l)
                  .map((trimmed, i) => {
                    const isHeading = 
                      trimmed.startsWith("Service Overview") || 
                      trimmed.startsWith("Why ") || 
                      trimmed.startsWith("Problems ") ||
                      trimmed.startsWith("What's Included") ||
                      trimmed.startsWith("Our service includes");
                    
                    if (isHeading) {
                      return (
                        <h2 key={i} className="text-xl font-bold text-foreground mt-4 first:mt-0">{trimmed}</h2>
                      );
                    }
                    
                    if (trimmed.match(/^\d+\.\s/)) {
                      return (
                        <p key={i} className="text-muted-foreground leading-relaxed">{trimmed}</p>
                      );
                    }
                    
                    if (trimmed.startsWith("• ")) {
                      return (
                        <div key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                          <span className="leading-relaxed">{trimmed.slice(2)}</span>
                        </div>
                      );
                    }
                    
                    return (
                      <p key={i} className="text-muted-foreground leading-relaxed">
                        {trimmed}
                      </p>
                    );
                  })}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {["Verified Workers","Eco-friendly","Same-day","Insurance covered","Free inspection","24/7 support"].map(f => (
                  <div key={f} className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs font-medium">
                    <BadgeCheck size={13} className="text-[var(--brand)]" /> {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Booking Widget */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
              <div className="text-2xl font-extrabold text-[var(--price)]">{service.price}</div>
              <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                <Clock size={12} /> Fixed rate — will not change.
              </p>

              {/* Date Picker */}
              <div className="mt-5">
                <div className="mb-2 text-sm font-semibold">Select Date</div>
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {dates.map((d, i) => (
                    <button key={i} onClick={() => setSelectedDate(i)}
                      className={`flex shrink-0 flex-col items-center rounded-xl px-3 py-2 text-xs font-semibold transition ${selectedDate === i ? "bg-[var(--brand)] text-white" : "border border-border hover:border-[var(--brand)]"}`}>
                      <span>{d.toLocaleDateString("en", { weekday: "short" })}</span>
                      <span className="text-base font-extrabold">{d.getDate()}</span>
                      <span>{d.toLocaleDateString("en", { month: "short" })}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div className="mt-5">
                <div className="mb-2 text-sm font-semibold">Choose a Time Slot</div>
                <div className="grid grid-cols-3 gap-2">
                  {TIME_SLOTS.map(slot => (
                    <button key={slot} onClick={() => setSelectedSlot(slot)}
                      className={`rounded-lg py-1.5 text-xs font-semibold transition ${selectedSlot === slot ? "bg-[var(--accent)] text-accent-foreground" : "border border-border hover:border-[var(--accent)]"}`}>
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Promo Code */}
              <div className="mt-5">
                <div className="mb-2 flex items-center gap-1 text-sm font-semibold"><Tag size={13} /> Promo Code</div>
                <div className="flex gap-2">
                  <input value={promo} onChange={e => { setPromo(e.target.value); setPromoError(""); }}
                    placeholder="e.g. FREE20"
                    className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm uppercase" />
                  <button onClick={applyPromo} className="rounded-lg bg-[var(--brand)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90">Apply</button>
                </div>
                {promoApplied && <p className="mt-1 text-xs font-medium text-green-600">✅ {promoApplied}% discount applied!</p>}
                {promoError && <p className="mt-1 text-xs text-red-500">{promoError}</p>}
              </div>

              {/* Price Summary */}
              <div className="mt-5 space-y-1 rounded-xl bg-muted/50 p-3 text-sm">
                <div className="flex justify-between"><span>Service charge</span><span>Rs {getBasePrice().toLocaleString()}</span></div>
                {promoApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({promoApplied}%)</span>
                    <span>- Rs {Math.round(getBasePrice() * promoApplied / 100).toLocaleString()}</span>
                  </div>
                )}
                <div className="mt-1 flex justify-between border-t border-border pt-1 text-base font-extrabold">
                  <span>Total</span><span className="text-[var(--price)]">Rs {getFinalPrice().toLocaleString()}</span>
                </div>
              </div>

              {/* Selected summary */}
              <div className="mt-4 rounded-xl border border-[var(--brand)]/30 bg-[var(--brand)]/5 p-3 text-sm">
                <div className="font-semibold text-[var(--brand-deep)]">📋 Your Booking Summary</div>
                <div className="mt-1 space-y-1 text-muted-foreground">
                  <div>📅 {dates[selectedDate].toLocaleDateString("en", { weekday: "long", month: "long", day: "numeric" })}</div>
                  <div>⏰ {selectedSlot}</div>
                  <div>💰 Rs {getFinalPrice().toLocaleString()}</div>
                </div>
              </div>

              <button
                onClick={handleBookNow}
                className="mt-5 w-full rounded-xl bg-[var(--accent)] py-3 text-base font-extrabold text-accent-foreground shadow-lg transition hover:opacity-90 active:scale-95"
              >
                📲 Book Now via WhatsApp
              </button>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                Clicking will open WhatsApp with your booking details pre-filled
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
