import { createFileRoute } from "@tanstack/react-router";
import { ServiceLanding, type LandingFaq } from "@/components/service-landing";
import { buildLandingHead } from "@/lib/seo";

const faqs: LandingFaq[] = [
  {
    q: "Do you serve Thimi, Suryabinayak and Madhyapur Thimi?",
    a: "Yes. We cover all of Bhaktapur district, including Thimi, Suryabinayak, Madhyapur Thimi, Balkot, Katunje and the area around Durbar Square. Tell us the ward and nearest landmark when booking.",
  },
  {
    q: "Can your equipment reach narrow lanes?",
    a: "Yes. We bring compact jetting and rodding equipment for lanes that a large tanker cannot enter, and we can run hose from the main road where needed. For septic work we confirm vehicle access on the phone before dispatch.",
  },
  {
    q: "How much does drain cleaning cost in Bhaktapur?",
    a: "A single blocked drain starts at Rs 2,000. Main line jetting is Rs 2,500 to Rs 4,500 depending on length and access. There is no extra charge for travelling within Bhaktapur.",
  },
  {
    q: "Will cleaning damage old brick drains?",
    a: "No. Older brick and clay lines are cleaned at reduced pressure and with rodding first. We assess the pipe condition before jetting so the drain is cleared without breaking the structure.",
  },
  {
    q: "Do you work in the heritage area near Durbar Square?",
    a: "Yes, but with extra care. In heritage and dense old-town areas we avoid heavy vehicles, protect surfaces and use manual methods where equipment access is restricted.",
  },
];

export const Route = createFileRoute("/drain-cleaning-bhaktapur")({
  head: () =>
    buildLandingHead({
      title: "Drain Cleaning in Bhaktapur | Thimi, Suryabinayak & Madhyapur",
      description:
        "Blocked drain and sewer cleaning in Bhaktapur, including Thimi, Suryabinayak and Madhyapur Thimi. Same-day service at a fixed price. Call +977 9812330094.",
      path: "/drain-cleaning-bhaktapur",
      serviceName: "Drain Cleaning",
      city: "Bhaktapur",
      breadcrumbLabel: "Drain Cleaning in Bhaktapur",
      faqs,
    }),
  component: DrainCleaningBhaktapur,
});

function DrainCleaningBhaktapur() {
  return (
    <ServiceLanding
      kicker="Drain & Sewer Clearing · Bhaktapur"
      h1="Drain Cleaning in Bhaktapur"
      intro={[
        "Bhaktapur's older neighbourhoods have narrow lanes, brick-lined drains and long runs to the main sewer, so a small blockage can flood a courtyard quickly. We clear blocked drains and sewer lines across Bhaktapur with equipment that fits tight access, and we take care around heritage buildings and paved lanes.",
        "From Thimi and Madhyapur Thimi to Suryabinayak and the old town, our crews reach most locations the same day. Call with your ward and nearest landmark for a fixed price.",
      ]}
      sections={[
        {
          heading: "Why drains block in Bhaktapur's older areas",
          paragraphs: [
            "Many lanes in the old town still rely on brick or stone channels that were built for a smaller population. Grease, kitchen waste and silt build up along the flat sections, and once the flow slows, solid waste settles and hardens. During the monsoon, run-off from paved lanes carries grit straight into the drain.",
            "In dense areas the access covers are often buried under paving or built over, which is why repeated clearing without proper inspection rarely solves the problem. Our team locates the nearest working chamber, checks flow and clears from the correct point instead of guessing.",
          ],
          bullets: [
            "Water standing in the courtyard or lane",
            "Bad smell from open or covered drains",
            "Slow drainage in kitchens and bathrooms",
            "Sewage rising after rain",
            "Repeated blockages in the same stretch",
            "Water backing up into ground-floor rooms",
          ],
        },
        {
          heading: "Working in narrow lanes and heritage areas",
          paragraphs: [
            "Large jetting trucks cannot enter most old-town lanes. We bring compact equipment, long hose runs and manual rodding tools so the work can be done from the street without blocking the lane or damaging paving. Where a vehicle cannot get close, the hose is run from the nearest accessible point.",
            "Near Durbar Square and other protected areas we take extra care: no unnecessary digging, no heavy machinery in pedestrian zones, and all waste is carried out rather than left in the open drain.",
          ],
          bullets: [
            "Compact jetting and rodding equipment for tight access",
            "Long hose runs from the nearest road access",
            "No heavy vehicles in pedestrian or heritage zones",
            "Waste removed from site, not left in lanes",
            "Careful handling around brick and stone channels",
          ],
        },
        {
          heading: "What the service includes",
          paragraphs: [
            "We lift the inspection chamber, confirm the direction of flow and identify where the line is blocked. The section is cleared with rodding and high-pressure jetting, and the waste is flushed to the nearest manhole and removed. We finish with a flow test and disinfect the affected area.",
            "If the drain blocks again within a short period, we recommend a camera inspection. Repeat blockages usually mean a broken joint, root intrusion or a section of pipe that has collapsed, and no amount of jetting will fix a structural defect.",
          ],
        },
        {
          heading: "Preventive cleaning before the monsoon",
          paragraphs: [
            "For homes, shops and guest houses in Bhaktapur, the cheapest option is a preventive clean in the dry months. Clearing silt and grease before the rains means the drain has full capacity when the heavy weather arrives, which is when most overflows happen.",
            "We also offer maintenance schedules for restaurants and guest houses around the old town, where kitchen grease builds up faster than in a normal home.",
          ],
        },
      ]}
      priceHeading="Drain cleaning price in Bhaktapur"
      prices={[
        {
          service: "Single blocked drain / floor trap",
          price: "Rs 2,000",
          note: "Standard clearance",
        },
        {
          service: "Main line jetting",
          price: "Rs 2,500 – 4,500",
          note: "Based on length and access",
        },
        {
          service: "Kitchen waste line clearing",
          price: "Rs 1,800",
          note: "Grease removal included",
        },
        { service: "Camera inspection", price: "Rs 1,500", note: "Free with booked cleaning" },
        {
          service: "Pre-monsoon maintenance visit",
          price: "Rs 2,500 +",
          note: "Whole-property check",
        },
      ]}
      faqs={faqs}
      related={[
        {
          href: "/drainage-cleaning-kathmandu",
          label: "Drainage Cleaning in Kathmandu",
          description: "Blocked drains, sewer lines and kitchen waste pipes across Kathmandu.",
        },
        {
          href: "/septic-tank-cleaning-kathmandu",
          label: "Septic Tank Cleaning",
          description: "Septic pumping, washing and approved disposal for homes and businesses.",
        },
        {
          href: "/water-tank-cleaning-lalitpur",
          label: "Water Tank Cleaning in Lalitpur",
          description: "Overhead and underground tank cleaning for Patan and nearby areas.",
        },
        {
          href: "/services",
          label: "All Cleaning Services",
          description: "See every tank, drain and plumbing service we offer.",
        },
      ]}
      coverage={[
        "Bhaktapur Durbar Square",
        "Thimi",
        "Madhyapur Thimi",
        "Suryabinayak",
        "Balkot",
        "Katunje",
        "Sipadol",
        "Chyamasingh",
        "Dadhikot",
        "Jhaukhel",
        "Nagarkot Road",
        "Bode",
      ]}
    />
  );
}
