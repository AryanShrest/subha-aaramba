import { createFileRoute } from "@tanstack/react-router";
import { ServiceLanding, type LandingFaq } from "@/components/service-landing";
import { buildLandingHead } from "@/lib/seo";

const faqs: LandingFaq[] = [
  {
    q: "How much does drainage cleaning cost in Kathmandu?",
    a: "A single blocked drain starts at Rs 2,000. Main sewer line jetting is Rs 2,500 to Rs 4,500 depending on length and access. We confirm the full price on the phone before sending a team, and there is no inspection charge when you book the cleaning.",
  },
  {
    q: "Do you come the same day?",
    a: "Yes. We keep crews on standby across the Kathmandu Valley and most bookings before 2 PM are handled the same day. Emergency night calls are also available for a small additional charge.",
  },
  {
    q: "What causes drains to block repeatedly?",
    a: "In older Kathmandu neighbourhoods the usual causes are grease and food waste in kitchen lines, silt washed in during monsoon, tree roots in clay pipes, and partially collapsed pipe joints. If a line backs up again within weeks, we recommend a camera inspection to find the real defect instead of clearing it repeatedly.",
  },
  {
    q: "Will the cleaning damage my pipes?",
    a: "No. We use adjustable pressure and the correct nozzle for the pipe material. Older clay or concrete lines are cleaned at lower pressure with rodding first, so the pipe is cleared without being cracked.",
  },
  {
    q: "Do you clean drains for restaurants and hotels?",
    a: "Yes. We handle grease trap cleaning, kitchen waste lines and commercial sewage lines, and we can schedule monthly or quarterly maintenance so the lines never reach the point of overflowing.",
  },
];

export const Route = createFileRoute("/drainage-cleaning-kathmandu")({
  head: () =>
    buildLandingHead({
      title: "Drainage Cleaning in Kathmandu | Blocked Drain Experts",
      description:
        "Same-day drainage cleaning in Kathmandu. High-pressure jetting for blocked drains, sewer lines and kitchen waste pipes. Call +977 9812330094 for a fixed quote.",
      path: "/drainage-cleaning-kathmandu",
      serviceName: "Drainage Cleaning",
      city: "Kathmandu",
      breadcrumbLabel: "Drainage Cleaning in Kathmandu",
      faqs,
    }),
  component: DrainageCleaningKathmandu,
});

function DrainageCleaningKathmandu() {
  return (
    <ServiceLanding
      kicker="Drain & Sewer Cleaning · Kathmandu Valley"
      h1="Drainage Cleaning in Kathmandu"
      intro={[
        "A slow or smelly drain is usually the first sign of a partial blockage. Left alone, that same line will overflow into your kitchen, bathroom or courtyard within days. Drainage Cleaning Nepal clears blocked drains, sewer lines and kitchen waste pipes across Kathmandu with high-pressure jetting and proper rodding — not just a bucket of chemicals.",
        "We work seven days a week, including emergency call-outs during the monsoon. Tell us the problem and your locality on the phone, and we will give you a fixed price for drainage cleaning in Kathmandu before a crew is dispatched.",
      ]}
      sections={[
        {
          heading: "Why drains block so often in Kathmandu",
          paragraphs: [
            "Most drainage problems in the valley come down to what goes into the pipe and what the pipe is made of. Older houses in areas like Chabahil, Kalanki and Balaju still have clay or concrete lines with open joints. Grease from the kitchen cools and sticks to those joints, then food particles and hair catch on the grease until the pipe is more blocked than open.",
            "The monsoon makes it worse. Run-off carries sand and silt into courtyard drains, and a small build-up becomes a hard plug after a heavy rain. Tree roots are another common culprit: roots enter through a cracked joint looking for water and slowly fill the line.",
          ],
          bullets: [
            "Water draining slowly from sinks, showers or floors",
            "Gurgling sounds when water passes nearby",
            "Bad smell coming from floor traps or the yard",
            "Water rising in the courtyard after rain",
            "Sewage backing up into the bathroom at ground level",
          ],
        },
        {
          heading: "What our drainage cleaning service includes",
          paragraphs: [
            "Every job starts by checking where the blockage actually is. We lift the inspection chamber, test flow and decide whether the line needs rodding, jetting or both. Only then does the team start work, so you are not paying for a cleaning that does not solve the problem.",
            "For most homes we use a high-pressure jetter that scours the pipe wall and flushes grease, silt and sludge out through the nearest manhole. Hard blockages and root intrusion are broken up with a rotating cutter before jetting. The line is then flushed again and tested so we can show you the water running freely before we leave.",
          ],
          bullets: [
            "Inspection chamber and flow test before work starts",
            "High-pressure jetting of the blocked section",
            "Mechanical rodding or root cutting where needed",
            "Sludge and waste removed, not left in the yard",
            "Disinfection of the affected area after clearing",
            "Final flow test and a short explanation of what we found",
          ],
        },
        {
          heading: "Same-day drainage cleaning across the valley",
          paragraphs: [
            "Our crews cover Kathmandu, Lalitpur and Bhaktapur. If you call before 2 PM we can usually reach most valley locations the same day, and we keep evening slots for restaurants and shops that can only be cleaned after closing.",
            "For larger buildings and commercial kitchens, we recommend a maintenance visit before the monsoon and again after Dashain, when grease and festival waste build up quickly. Regular jetting costs far less than repairing a collapsed line or replacing damaged flooring.",
          ],
        },
        {
          heading: "How much does drainage cleaning cost?",
          paragraphs: [
            "Prices depend on how far the blockage is from the access point, whether the line needs root cutting, and how much sludge has to be removed. We quote a fixed starting price on the phone and confirm the final amount on site before starting. No hidden charges are added afterwards.",
          ],
        },
      ]}
      priceHeading="Drainage cleaning price in Kathmandu"
      prices={[
        {
          service: "Single blocked drain / floor trap",
          price: "Rs 2,000",
          note: "Standard clearance",
        },
        {
          service: "Main sewer line jetting",
          price: "Rs 2,500 – 4,500",
          note: "Based on length and access",
        },
        {
          service: "Kitchen or waste pipe clearing",
          price: "Rs 1,800",
          note: "Grease removal included",
        },
        { service: "Camera inspection", price: "Rs 1,500", note: "Free when cleaning is booked" },
        { service: "Emergency night call-out", price: "Rs 2,500 +", note: "After 8 PM" },
      ]}
      faqs={faqs}
      related={[
        {
          href: "/septic-tank-cleaning-kathmandu",
          label: "Septic Tank Cleaning",
          description:
            "Pumping, sludge removal and disposal for homes and commercial buildings in Kathmandu.",
        },
        {
          href: "/water-tank-cleaning-kathmandu",
          label: "Water Tank Cleaning",
          description: "Overhead and underground tank cleaning with food-grade disinfection.",
        },
        {
          href: "/drain-cleaning-bhaktapur",
          label: "Drain Cleaning in Bhaktapur",
          description: "Narrow-lane drain clearing for Thimi, Suryabinayak and Madhyapur Thimi.",
        },
        {
          href: "/services",
          label: "All Cleaning Services",
          description: "Compare every service we offer across the Kathmandu Valley.",
        },
      ]}
      coverage={[
        "Baneshwor",
        "Chabahil",
        "Boudha",
        "Lazimpat",
        "Maharajgunj",
        "Kalanki",
        "Balaju",
        "Gongabu",
        "Koteshwor",
        "Budhanilkantha",
        "Patan",
        "Bhaktapur",
      ]}
    />
  );
}
