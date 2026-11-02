import { createFileRoute } from "@tanstack/react-router";
import { ServiceLanding, type LandingFaq } from "@/components/service-landing";
import { buildLandingHead } from "@/lib/seo";

const faqs: LandingFaq[] = [
  {
    q: "Do you cover all of Lalitpur?",
    a: "Yes. We regularly clean tanks in Patan, Pulchowk, Jawalakhel, Lagankhel, Kupondole, Gwarko, Bhaisepati, Hattiban and nearby wards. Tell us your location when you call and we will confirm the earliest slot.",
  },
  {
    q: "How much does water tank cleaning cost in Lalitpur?",
    a: "Overhead tank cleaning starts at Rs 1,500 and underground reserve tanks at Rs 2,500, the same as the rest of the valley. Bulk pricing is available for apartment buildings and housing societies with several tanks.",
  },
  {
    q: "Can you clean a shared tank in an apartment building?",
    a: "Yes. We work with building managers and committees to plan the cleaning around the water supply schedule so residents lose water for as short a time as possible. We can clean the overhead and underground tanks on the same visit.",
  },
  {
    q: "Why does the water in our building look brown after the line is repaired?",
    a: "Repairs disturb sediment in the main line, and that sediment travels into your tank. If the water stays brown after running for a few minutes, the tank itself is holding silt and needs draining and cleaning.",
  },
  {
    q: "How long does the cleaning take?",
    a: "A single overhead tank usually takes one to two hours. Underground tanks and multiple-tank buildings take longer, and we give an estimated time when booking so you can plan the water cut.",
  },
];

export const Route = createFileRoute("/water-tank-cleaning-lalitpur")({
  head: () =>
    buildLandingHead({
      title: "Water Tank Cleaning in Lalitpur | Patan, Jawalakhel & Bhaisepati",
      description:
        "Water tank cleaning in Lalitpur for homes, apartments and housing societies. Overhead and underground tanks, food-grade disinfection. Call +977 9812330094.",
      path: "/water-tank-cleaning-lalitpur",
      serviceName: "Water Tank Cleaning",
      city: "Lalitpur",
      breadcrumbLabel: "Water Tank Cleaning in Lalitpur",
      faqs,
    }),
  component: WaterTankCleaningLalitpur,
});

function WaterTankCleaningLalitpur() {
  return (
    <ServiceLanding
      kicker="Tank Cleaning for Homes & Apartments · Lalitpur"
      h1="Water Tank Cleaning in Lalitpur"
      intro={[
        "Lalitpur depends heavily on stored water, and most buildings store it in the same rooftop and underground tanks year after year without opening them. Sediment from tanker deliveries and the main line settles at the bottom, while a slimy layer forms on the walls. The result is water that tastes muddy and leaves stains in bathrooms.",
        "We provide water tank cleaning in Lalitpur for individual homes, apartment buildings and housing societies — draining, scrubbing, food-grade disinfection and rinsing, with a fixed price confirmed before the team arrives.",
      ]}
      sections={[
        {
          heading: "Why Lalitpur buildings need regular tank cleaning",
          paragraphs: [
            "Much of Lalitpur is supplied by tankers and borewells alongside the municipal line, and each source brings its own sediment. Tankers are not always flushed between deliveries, and borewell water carries fine grit that settles as soon as it reaches a still tank.",
            "In apartment buildings the problem multiplies: a large shared tank sits half-full for long periods, warm and dark, which is exactly the condition that lets algae and biofilm grow. Residents then notice the smell or the brown stains long after the tank should have been cleaned.",
          ],
          bullets: [
            "Muddy taste or smell in stored water",
            "Brown stains in buckets, basins and toilets",
            "Thick silt at the bottom of the tank",
            "Water filters clogging within weeks",
            "Tank not cleaned since the building was completed",
            "Slimy walls or algae visible on the lid",
          ],
        },
        {
          heading: "Homes, apartments and societies",
          paragraphs: [
            "For a family home, cleaning one overhead tank takes about one to two hours. For apartments and societies we clean the shared overhead and underground tanks together, plan the water cut with the building manager, and keep the downtime as short as possible.",
            "Old sumps often have covers sealed under tiles or a layer of hardened sludge that needs pumping before scrubbing. We bring the pump and equipment needed for that, so the job is completed in one visit rather than being left half-done.",
          ],
          bullets: [
            "Overhead and underground tanks cleaned on the same visit",
            "Water-supply schedule planned with the building manager",
            "Pump provided for sumps with no working outlet",
            "Bulk pricing for multiple tanks at one address",
          ],
        },
        {
          heading: "What the cleaning includes",
          paragraphs: [
            "The tank is drained, the settled sludge is removed, and the walls, floor and lid are scrubbed by hand. We disinfect with a food-grade product at the correct dilution, rinse thoroughly so no residue remains, and check the inlet, outlet, overflow and float valve before refilling.",
            "Where access is difficult, the team uses safety equipment rather than sending someone in without protection. Photos of the tank before and after cleaning are available on request, which is useful for building committees and landlords.",
          ],
        },
        {
          heading: "How often to schedule cleaning in Lalitpur",
          paragraphs: [
            "Homes should clean the overhead tank every six months and the underground tank once a year. Apartments and hostels should clean both tanks every six months because of the higher number of users. If your building received particularly silty tanker water or the supply was interrupted for repairs, book a clean sooner than the usual interval.",
          ],
        },
      ]}
      priceHeading="Water tank cleaning price in Lalitpur"
      prices={[
        { service: "Overhead tank cleaning", price: "Rs 1,500", note: "Standard rooftop tank" },
        { service: "Underground reserve tank", price: "Rs 2,500", note: "Sludge pumping included" },
        {
          service: "Apartment / society (2+ tanks)",
          price: "Bulk quote",
          note: "Per-building pricing",
        },
        { service: "Disinfection and rinse", price: "Included", note: "Food-grade product" },
        { service: "Post-monsoon deep clean", price: "Rs 1,800 +", note: "Heavy silt removal" },
      ]}
      faqs={faqs}
      related={[
        {
          href: "/water-tank-cleaning-kathmandu",
          label: "Water Tank Cleaning in Kathmandu",
          description:
            "Overhead and underground tank cleaning across the Kathmandu side of the valley.",
        },
        {
          href: "/drain-cleaning-bhaktapur",
          label: "Drain Cleaning in Bhaktapur",
          description: "Drain and sewer clearing for Thimi, Suryabinayak and Madhyapur.",
        },
        {
          href: "/septic-tank-cleaning-kathmandu",
          label: "Septic Tank Cleaning",
          description: "Septic tank pumping, washing and approved sludge disposal.",
        },
        {
          href: "/services",
          label: "All Cleaning Services",
          description: "Tank, drain, sewage and plumbing services across the valley.",
        },
      ]}
      coverage={[
        "Patan",
        "Pulchowk",
        "Jawalakhel",
        "Lagankhel",
        "Kupondole",
        "Gwarko",
        "Bhaisepati",
        "Hattiban",
        "Satdobato",
        "Ekantakuna",
        "Balkumari",
        "Sanepa",
      ]}
    />
  );
}
