import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — DigiRise Real Estate Media" },
      {
        name: "description",
        content:
          "Photography, drone photo & video, 360° Matterport walkthroughs, and cinematic property video by DigiRise.",
      },
      { property: "og:title", content: "Services — DigiRise" },
      {
        property: "og:description",
        content:
          "Photography, drone, 360° Matterport walkthroughs, and cinematic property video.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const SERVICES = [
  {
    number: "01",
    title: "Interior & Exterior Photography",
    body: "Ultra-wide angle stills of every room, plus considered detail shots and exterior compositions using natural light and careful HDR blending for magazine-quality results.",
  },
  {
    number: "02",
    title: "Drone Photo & Video",
    body: "CASA-certified aerial operations for stunning 4K context shots, low-altitude reveals, and dramatic overhead compositions that show a property's true position.",
  },
  {
    number: "03",
    title: "360° Matterport 3D Tours",
    body: "Industry-standard immersive walkthroughs that let prospective buyers explore every corner of a home from any device — the closest thing to being there.",
  },
  {
    number: "04",
    title: "Cinematic Property Video",
    body: "Stabilised walk-through films, edited with licensed music and colour-graded to create an emotional connection between buyer and property.",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="px-6 pt-16 pb-8 md:px-10 md:pt-24 md:pb-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold">
            What we offer
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl md:text-7xl leading-[1.05]">
            Precision <span className="italic">media</span> for premium listings.
          </h1>
          <p className="mt-6 max-w-xl text-brand-black/70 leading-relaxed">
            A tight, considered set of services — the tools most agents actually need to
            sell a property faster.
          </p>
        </div>
      </section>

      <section className="border-t border-brand-black/5 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-x-12 gap-y-16 md:grid-cols-2">
          {SERVICES.map((s) => (
            <div key={s.number} className="border-t border-brand-black/10 pt-8">
              <p className="mb-4 font-serif text-sm italic text-brand-gold">{s.number}</p>
              <h3 className="font-serif text-2xl md:text-3xl">{s.title}</h3>
              <p className="mt-4 text-brand-black/70 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-black px-6 py-24 text-brand-cream md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl italic md:text-5xl">
            Ready to book a shoot?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-brand-cream/60">
            Turnaround is usually 24 hours from the shoot. Get in touch with the address
            and a preferred date.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs uppercase tracking-[0.2em]">
            <Link
              to="/contact"
              className="border-b border-brand-cream pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors"
            >
              Contact Simon
            </Link>
            <Link
              to="/properties"
              className="border-b border-brand-cream/40 pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors"
            >
              See recent work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
