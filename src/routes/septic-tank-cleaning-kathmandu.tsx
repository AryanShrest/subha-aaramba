import { createFileRoute } from "@tanstack/react-router";
import { ServiceLanding, type LandingFaq } from "@/components/service-landing";
import { buildLandingHead } from "@/lib/seo";

const faqs: LandingFaq[] = [
  {
    q: "How often should a septic tank be cleaned in Kathmandu?",
    a: "A normal family home should be pumped every two to three years. Restaurants, guest houses, hostels and apartment buildings usually need cleaning once a year because of higher usage. If the tank smells or drains are slow well before that, call us rather than waiting — early pumping is cheaper than a backup.",
  },
  {
    q: "How much does septic tank cleaning cost?",
    a: "Pumping and cleaning starts at Rs 3,500 for tanks up to about 1,000 litres. Larger tanks are quoted at Rs 4,500 to Rs 6,500 depending on capacity and how much sludge has to be removed. Access, distance from the road and disposal volume can affect the final price, which we confirm before starting.",
  },
  {
    q: "Where does the sludge go?",
    a: "Sludge is pumped into a sealed tanker and taken to an approved disposal point. It is never dumped in a river, open ground or roadside drain. If you need documentation for a housing society or commercial building, tell us when booking.",
  },
  {
    q: "Do you need to break the floor to open the tank?",
    a: "Usually not. Most tanks have a lid or inspection cover that can be lifted. If the cover is buried or sealed under tiles, we locate it first and explain any small opening needed before touching anything.",
  },
  {
    q: "Can a full septic tank damage the building?",
    a: "Yes. When the tank is full, solids carry into the soak pit or drain field and block it. Wastewater then backs up into floor traps, and repeated overflow can damage foundations and ground-floor walls. Pumping on time avoids that repair entirely.",
  },
];

export const Route = createFileRoute("/septic-tank-cleaning-kathmandu")({
  head: () =>
    buildLandingHead({
      title: "Septic Tank Cleaning in Kathmandu | Pumping & Sludge Removal",
      description:
        "Professional septic tank cleaning in Kathmandu: pumping, sludge removal, washing and approved disposal. Fixed price from Rs 3,500. Call +977 9812330094.",
      path: "/septic-tank-cleaning-kathmandu",
      serviceName: "Septic Tank Cleaning",
      city: "Kathmandu",
      breadcrumbLabel: "Septic Tank Cleaning in Kathmandu",
      faqs,
    }),
  component: SepticTankCleaningKathmandu,
});

function SepticTankCleaningKathmandu() {
  return (
    <ServiceLanding
      kicker="Septic Tank Pumping & Cleaning · Kathmandu"
      h1="Septic Tank Cleaning in Kathmandu"
      intro={[
        "A septic tank that is never pumped fills with sludge until solids escape into the soak pit. Once that happens, wastewater backs up into the bathrooms and the repair bill grows quickly. Our team pumps, washes and inspects septic tanks across Kathmandu and disposes of the sludge at an approved site.",
        "We handle homes, rental buildings, guest houses, hostels and restaurants, with tankers and equipment sized for both narrow lanes and large compounds. Call with your location and tank size for a fixed quote.",
      ]}
      sections={[
        {
          heading: "Signs your septic tank needs cleaning",
          paragraphs: [
            "Most tanks give warning before they fail. A smell in the yard, slow-draining toilets and gurgling pipes are the early signs. Later, wastewater backs up into the lowest floor trap, and the ground above the tank may stay wet or grow unusually green even in dry weather.",
            "If any of these appear, pump the tank instead of pouring more chemicals down the drain. Chemical additives do not remove sludge; they only mask the smell while the solids keep building up.",
          ],
          bullets: [
            "Sewage smell around the yard or near the tank cover",
            "Toilets and floor traps draining slowly",
            "Gurgling when water passes through the pipes",
            "Wastewater backing up on the ground floor",
            "Soft or unusually green patch above the tank",
            "It has been more than two years since the last pump-out",
          ],
        },
        {
          heading: "How the cleaning is done",
          paragraphs: [
            "The tank cover is located and lifted carefully, and the sludge level is checked before pumping. We then pump the liquid and sludge into a sealed tanker, break down the compacted layer at the bottom, and wash the walls and baffles so the tank can work properly again.",
            "After cleaning we inspect the inlet, outlet and baffle for cracks or blockages, refill the tank with clean water so the bacterial process can restart, and confirm that flow through the outlet is normal. If the soak pit is already saturated, we tell you on the spot instead of leaving you with a tank that will back up again in a month.",
          ],
          bullets: [
            "Lid located and opened without unnecessary damage",
            "Complete pumping of liquid and settled sludge",
            "Walls, base and baffles scraped and washed",
            "Inlet and outlet checked for cracks or blockage",
            "Tank refilled so digestion can restart",
            "Sludge transported to an approved disposal site",
          ],
        },
        {
          heading: "Choosing the right cleaning interval",
          paragraphs: [
            "For a family of four or five, pumping every two to three years is usually enough. Buildings with many users — hostels, guest houses, restaurants and apartment blocks — should be cleaned every 12 months. Tanks that receive a lot of kitchen waste fill faster because grease forms a hard crust that reduces the working volume.",
            "If your property is in a low-lying area and the tank overflowed during the last monsoon, clean it before the next rainy season rather than after. Doing the work in the dry months is easier, faster and usually cheaper.",
          ],
        },
        {
          heading: "Safe handling and disposal",
          paragraphs: [
            "Septic waste is a health hazard, so the job is done with protective gear and sealed equipment. The tanker is closed before it leaves your property, and the sludge is delivered to an approved treatment or disposal point — not emptied into a river or open ground.",
            "We also clean up the area around the cover after pumping and disinfect the surface so the smell does not linger in the courtyard or driveway.",
          ],
        },
      ]}
      priceHeading="Septic tank cleaning price in Kathmandu"
      prices={[
        {
          service: "Tank up to 1,000 litres",
          price: "Rs 3,500",
          note: "Pumping, washing, disposal",
        },
        {
          service: "Tank 1,000 – 2,000 litres",
          price: "Rs 4,500 – 6,500",
          note: "Based on capacity",
        },
        {
          service: "Inspection and sludge-level check",
          price: "Free",
          note: "With booked cleaning",
        },
        { service: "Soak pit assessment", price: "Included", note: "Reported on site" },
        { service: "Emergency overflow call-out", price: "Rs 4,000 +", note: "Same-day priority" },
      ]}
      faqs={faqs}
      related={[
        {
          href: "/drainage-cleaning-kathmandu",
          label: "Drainage Cleaning",
          description: "Blocked drains, sewer lines and kitchen waste pipes cleared the same day.",
        },
        {
          href: "/water-tank-cleaning-kathmandu",
          label: "Water Tank Cleaning",
          description: "Overhead and underground drinking-water tank cleaning and disinfection.",
        },
        {
          href: "/services",
          label: "All Cleaning Services",
          description: "See the full list of tank, drain and plumbing services we provide.",
        },
        {
          href: "/water-tank-cleaning-lalitpur",
          label: "Water Tank Cleaning in Lalitpur",
          description:
            "Tank cleaning for apartments and homes in Patan, Jawalakhel and nearby areas.",
        },
      ]}
      coverage={[
        "Baneshwor",
        "Chabahil",
        "Boudha",
        "Lazimpat",
        "Kalanki",
        "Balaju",
        "Gongabu",
        "Koteshwor",
        "Maharajgunj",
        "Budhanilkantha",
        "Swayambhu",
        "Patan",
      ]}
    />
  );
}
