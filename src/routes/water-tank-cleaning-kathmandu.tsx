import { createFileRoute } from "@tanstack/react-router";
import { ServiceLanding, type LandingFaq } from "@/components/service-landing";
import { buildLandingHead } from "@/lib/seo";

const faqs: LandingFaq[] = [
  {
    q: "How often should water tanks be cleaned in Kathmandu?",
    a: "Overhead tanks should be cleaned every six months, and underground reserve tanks at least once a year. After the monsoon it is worth cleaning both, because rain and pipeline disturbance push sediment into the supply. Buildings with many residents should clean more often.",
  },
  {
    q: "How much does water tank cleaning cost?",
    a: "Overhead tank cleaning starts at Rs 1,500 and underground reserve tanks at Rs 2,500. The price covers draining, scrubbing, food-grade disinfection and a final rinse. Very large tanks or tanks with difficult access are quoted after a quick look.",
  },
  {
    q: "Is the disinfectant safe for drinking water?",
    a: "Yes. We use a food-grade disinfectant at the correct dilution, then rinse the tank thoroughly before it is refilled. We do not use cleaning chemicals that leave a residue or smell in the water.",
  },
  {
    q: "Do I need to empty the tank before you arrive?",
    a: "No. We drain it as part of the service, which also lets us pump out the sediment that collects at the bottom. If the tank has a working outlet valve, emptying is quick; if not, we use a pump.",
  },
  {
    q: "Can you clean tanks in apartment buildings?",
    a: "Yes. We clean shared overhead and underground tanks for apartment societies and hostels, and we can work around the water supply schedule so residents are not left without water for long. Bulk pricing is available for multiple tanks at one address.",
  },
];

export const Route = createFileRoute("/water-tank-cleaning-kathmandu")({
  head: () =>
    buildLandingHead({
      title: "Water Tank Cleaning in Kathmandu | Overhead & Underground Tanks",
      description:
        "Water tank cleaning in Kathmandu for overhead and underground tanks. Draining, scrubbing, food-grade disinfection and rinse from Rs 1,500. Call +977 9812330094.",
      path: "/water-tank-cleaning-kathmandu",
      serviceName: "Water Tank Cleaning",
      city: "Kathmandu",
      breadcrumbLabel: "Water Tank Cleaning in Kathmandu",
      faqs,
    }),
  component: WaterTankCleaningKathmandu,
});

function WaterTankCleaningKathmandu() {
  return (
    <ServiceLanding
      kicker="Overhead & Underground Tank Cleaning · Kathmandu"
      h1="Water Tank Cleaning in Kathmandu"
      intro={[
        "A tank that looks clean from the outside can still hold a layer of silt, rust particles and biofilm on the bottom and walls. That is what gives stored water a muddy taste, stains bathroom fittings and causes stomach problems in the household. Our team drains, scrubs and disinfects water tanks across Kathmandu so the water you store stays safe to use.",
        "We clean both overhead tanks on rooftops and underground reserve tanks, including sumps that have not been opened for years. Book a visit and we will confirm the price and time slot on the phone.",
      ]}
      sections={[
        {
          heading: "Why water tanks need regular cleaning",
          paragraphs: [
            "Water supplied in the valley carries fine sediment, especially after rain and whenever the main line is repaired. That sediment settles at the bottom of the tank and becomes a breeding layer for bacteria and algae. Rust from old fittings adds colour and metallic taste, and the warm, dark inside of an overhead tank is ideal for biofilm to form on the walls.",
            "Because the tank is out of sight, the problem is easy to ignore until the water smells, tastes odd or leaves stains in the bathroom. Cleaning on a fixed schedule keeps the water clear and protects the pump, geyser and filters from sediment damage.",
          ],
          bullets: [
            "Muddy or metallic taste and smell in tap water",
            "Brown stains in washbasins, buckets and toilets",
            "Visible silt at the bottom of the tank",
            "Slimy film on the tank walls or lid",
            "Water filters clogging faster than before",
            "No cleaning in the last 12 months",
          ],
        },
        {
          heading: "Overhead tanks and underground sumps",
          paragraphs: [
            "Overhead rooftop tanks are usually quicker to clean but harder to access, so the team works with safety harnesses and proper ladders. Underground reserve tanks hold more sludge and often need a pump to empty them before scrubbing can start.",
            "Both types are cleaned with the same method: complete draining, manual scrubbing of walls and floor, removal of settled sludge, disinfection with a food-grade product, and a final rinse so no residue is left behind. The inlet, outlet and overflow are checked while the tank is open.",
          ],
        },
        {
          heading: "The cleaning process, step by step",
          paragraphs: [
            "We begin by disconnecting the pump and draining the tank. Once the water level is low enough, the remaining sludge is pumped or scooped out and the walls, floor and lid are scrubbed. The tank is then flushed, disinfected at the correct dilution, rinsed and inspected before refilling.",
            "Where possible we take before-and-after photos so you can see the condition of the tank. If we find a cracked lid, a loose inlet or a damaged float valve, we point it out before closing up — small repairs at that stage prevent contamination later.",
          ],
          bullets: [
            "Draining and sludge removal",
            "Walls, floor, lid and fittings scrubbed",
            "Food-grade disinfection at correct dilution",
            "Thorough rinse before refilling",
            "Inlet, outlet, overflow and float checked",
            "Before-and-after photos on request",
          ],
        },
        {
          heading: "How often should you book?",
          paragraphs: [
            "For most homes, clean the overhead tank every six months and the underground tank once a year. If your building stores water for many families, or if the supply is intermittent and the tank sits half-full for long periods, clean more often — stagnant water at warm temperatures builds biofilm quickly.",
            "The best times are just before the monsoon and again in autumn after the rains. Cleaning after the monsoon removes the silt that entered during the wet months, so the water going into winter is clear.",
          ],
        },
      ]}
      priceHeading="Water tank cleaning price in Kathmandu"
      prices={[
        { service: "Overhead tank cleaning", price: "Rs 1,500", note: "Standard rooftop tank" },
        { service: "Underground reserve tank", price: "Rs 2,500", note: "Includes sludge pumping" },
        { service: "Disinfection and final rinse", price: "Included", note: "Food-grade product" },
        {
          service: "Multiple tanks at one address",
          price: "Bulk quote",
          note: "Apartments and hostels",
        },
        { service: "Post-monsoon deep clean", price: "Rs 1,800 +", note: "Heavy silt removal" },
      ]}
      faqs={faqs}
      related={[
        {
          href: "/water-tank-cleaning-lalitpur",
          label: "Water Tank Cleaning in Lalitpur",
          description: "Tank cleaning for Patan, Jawalakhel, Bhaisepati and surrounding areas.",
        },
        {
          href: "/septic-tank-cleaning-kathmandu",
          label: "Septic Tank Cleaning",
          description: "Pumping and sludge disposal for homes, hostels and restaurants.",
        },
        {
          href: "/drainage-cleaning-kathmandu",
          label: "Drainage Cleaning",
          description: "Blocked drains and sewer lines cleared with high-pressure jetting.",
        },
        {
          href: "/services",
          label: "All Cleaning Services",
          description: "Every service we offer across Kathmandu, Lalitpur and Bhaktapur.",
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
        "Swayambhu",
        "Patan",
      ]}
    />
  );
}
