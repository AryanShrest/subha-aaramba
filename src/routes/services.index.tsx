import { createFileRoute } from "@tanstack/react-router";
import { ServiceLanding, type LandingFaq } from "@/components/service-landing";
import { buildLandingHead } from "@/lib/seo";

const faqs: LandingFaq[] = [
  {
    q: "Which areas do you serve?",
    a: "We work across the Kathmandu Valley: Kathmandu, Lalitpur and Bhaktapur, including Baneshwor, Chabahil, Boudha, Kalanki, Balaju, Patan, Jawalakhel, Bhaisepati, Thimi, Suryabinayak and Madhyapur Thimi.",
  },
  {
    q: "Do you charge for an inspection?",
    a: "No. Inspection and a price estimate are free when you book a cleaning job. For camera inspection of a drain without booking the cleaning, there is a charge of Rs 1,500.",
  },
  {
    q: "How quickly can a team arrive?",
    a: "Most bookings made before 2 PM are handled the same day. Emergency drain and sewage call-outs are available in the evening and at night for a small additional charge.",
  },
  {
    q: "How can I pay?",
    a: "You pay after the work is done, once you have seen the result. We accept cash and mobile wallet payments. We do not ask for advance payment for standard residential jobs.",
  },
];

export const Route = createFileRoute("/services/")({
  head: () =>
    buildLandingHead({
      title: "Cleaning Services in Kathmandu | Drainage, Septic & Tank Cleaning",
      description:
        "Drainage, septic tank, water tank, sewage and plumbing cleaning services in Kathmandu, Lalitpur and Bhaktapur. Fixed prices from Rs 1,500. Call +977 9812330094.",
      path: "/services",
      serviceName: "Cleaning Services",
      city: "Kathmandu",
      breadcrumbLabel: "All Services",
      faqs,
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <ServiceLanding
      kicker="Drainage, Septic, Tank & Plumbing · Kathmandu Valley"
      h1="Cleaning Services in Kathmandu Valley"
      intro={[
        "Drainage Cleaning Nepal provides drainage, septic tank, water tank, sewage and plumbing cleaning for homes, apartments and businesses across Kathmandu, Lalitpur and Bhaktapur. Every job is quoted before work starts, and you pay only after you have seen the result.",
        "Choose a service below to see what is included, the starting price and the areas we cover. If you are not sure which service you need, call us and describe the problem — we will tell you honestly whether it is a drain issue, a full tank or a plumbing repair.",
      ]}
      sections={[
        {
          heading: "What we clean",
          paragraphs: [
            "Our work falls into four main groups: drains and sewer lines, septic tanks, water tanks, and plumbing repairs. Most of the calls we receive are for blocked drains and full septic tanks, but tank cleaning and plumbing work are equally important for keeping a building healthy.",
          ],
          bullets: [
            "Drainage cleaning and blocked drain clearing",
            "Septic tank pumping, washing and disposal",
            "Overhead and underground water tank cleaning",
            "Sewage line and sewage pit cleaning",
            "Plumbing repair and leak fixing",
            "Emergency call-outs during the monsoon",
          ],
        },
        {
          heading: "Drainage and sewage cleaning",
          paragraphs: [
            "Blocked drains are cleared with high-pressure jetting and rodding, and the waste is removed rather than pushed further down the line. We handle kitchen waste pipes, floor traps, courtyard drains, main sewer lines and commercial grease traps. Read the full guide to drainage cleaning in Kathmandu for prices, causes and the warning signs.",
          ],
        },
        {
          heading: "Septic tank cleaning",
          paragraphs: [
            "A full septic tank forces solids into the soak pit and eventually back into the building. We pump the tank completely, scrub the walls and baffles, inspect the inlet and outlet, and dispose of the sludge at an approved site. Most family homes need this every two to three years.",
          ],
        },
        {
          heading: "Water tank cleaning",
          paragraphs: [
            "Overhead and underground tanks collect silt, rust and biofilm that affect the taste and safety of stored water. We drain, scrub, disinfect with a food-grade product and rinse the tank before refilling. Homes should book every six months; apartments and hostels more often.",
          ],
        },
        {
          heading: "Plumbing repairs",
          paragraphs: [
            "Leaking pipes, faulty float valves, blocked traps and damaged fittings are handled by the same team. Fixing a small leak early prevents water damage to walls and ceilings, and it keeps the tank and drainage system working as it should.",
          ],
        },
        {
          heading: "Why customers choose us",
          paragraphs: [
            "We give a fixed price before starting, arrive when we say we will, and clean up after the job. The team is trained, insured and equipped for both residential and commercial work. If a problem needs more than cleaning — a collapsed pipe, a saturated soak pit or a structural repair — we say so instead of repeating the same cleaning every month.",
          ],
        },
      ]}
      priceHeading="Starting prices across the valley"
      prices={[
        {
          service: "Overhead water tank cleaning",
          price: "Rs 1,500",
          note: "Scrub, disinfect, rinse",
        },
        { service: "Underground reserve tank", price: "Rs 2,500", note: "Sludge pumping included" },
        { service: "Septic tank cleaning", price: "Rs 3,500", note: "Up to 1,000 litres" },
        { service: "Blocked drain clearing", price: "Rs 2,000", note: "Single drain point" },
        {
          service: "Main sewer line jetting",
          price: "Rs 2,500 – 4,500",
          note: "Length and access",
        },
        { service: "Plumbing repair / leak fix", price: "Rs 1,000 +", note: "After inspection" },
      ]}
      faqs={faqs}
      related={[
        {
          href: "/drainage-cleaning-kathmandu",
          label: "Drainage Cleaning in Kathmandu",
          description: "Blocked drains, sewer lines and kitchen waste pipes cleared same day.",
        },
        {
          href: "/septic-tank-cleaning-kathmandu",
          label: "Septic Tank Cleaning in Kathmandu",
          description: "Pumping, washing, inspection and approved sludge disposal.",
        },
        {
          href: "/water-tank-cleaning-kathmandu",
          label: "Water Tank Cleaning in Kathmandu",
          description: "Overhead and underground tank cleaning with food-grade disinfection.",
        },
        {
          href: "/drain-cleaning-bhaktapur",
          label: "Drain Cleaning in Bhaktapur",
          description: "Narrow-lane and heritage-area drain clearing in Bhaktapur district.",
        },
      ]}
      coverage={[
        "Kathmandu",
        "Lalitpur",
        "Bhaktapur",
        "Baneshwor",
        "Chabahil",
        "Boudha",
        "Kalanki",
        "Balaju",
        "Gongabu",
        "Patan",
        "Jawalakhel",
        "Bhaisepati",
        "Thimi",
        "Suryabinayak",
      ]}
    />
  );
}
