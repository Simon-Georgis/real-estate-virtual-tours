import { createFileRoute, Link } from "@tanstack/react-router";
import heroPeninsula from "@/assets/hero-peninsula.jpg";
import { getAllProperties } from "@/data/properties";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "DigiRise — Real Estate Media, Melbourne" },
      {
        name: "description",
        content:
          "Premium real estate photography, drone, and 360° Matterport tours by Simon at DigiRise. Based in Melbourne, shooting Australia-wide.",
      },
      { property: "og:title", content: "DigiRise — Real Estate Media" },
      {
        property: "og:description",
        content:
          "Photography, drone, and 360° Matterport tours for high-end property listings.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  const featured = getAllProperties().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="px-6 py-12 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid items-end gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="font-serif text-5xl leading-[1.05] text-brand-black md:text-7xl lg:text-8xl">
                Capturing the <span className="italic">Art</span> of Space.
              </h1>
              <p className="mt-8 max-w-md text-base leading-relaxed text-brand-black/70 md:text-lg">
                Simon is a solo operator specialising in premium real estate media —
                from cinematic drone sequences to immersive Matterport experiences.
              </p>
              <div className="mt-10 flex flex-wrap gap-6 text-xs uppercase tracking-[0.2em]">
                <Link
                  to="/properties"
                  className="border-b border-brand-black pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors"
                >
                  View Properties
                </Link>
                <Link
                  to="/services"
                  className="border-b border-brand-black/30 pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="hidden md:block text-right">
              <div className="inline-block border-l border-brand-black/20 pl-8 py-2 text-left">
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-black/50">
                  Based in
                </p>
                <p className="mt-2 text-sm">Melbourne, Australia</p>
              </div>
            </div>
          </div>

          <img
            src={heroPeninsula}
            alt="Cinematic dusk view of a modern waterfront residence"
            width={1920}
            height={1080}
            className="w-full aspect-[21/9] rounded-sm object-cover outline outline-1 -outline-offset-1 outline-brand-black/5"
          />
        </div>
      </section>

      {/* Selected Shoots */}
      <section className="bg-white px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-3xl italic md:text-4xl">Selected Shoots</h2>
            <Link
              to="/properties"
              className="border-b border-brand-black pb-1 text-xs uppercase tracking-[0.2em] hover:text-brand-gold hover:border-brand-gold transition-colors"
            >
              View All Properties
            </Link>
          </div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-12">
            {featured.map((p) => (
              <Link
                key={p.slug}
                to="/properties/$slug"
                params={{ slug: p.slug }}
                className="group block"
              >
                <div className="mb-6 aspect-[4/5] w-full overflow-hidden rounded-sm outline outline-1 -outline-offset-1 outline-brand-black/5">
                  <img
                    src={p.cover}
                    alt={p.address}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg text-brand-black">{p.address}</h3>
                    {p.suburb && (
                      <p className="mt-1 text-xs uppercase tracking-wider text-brand-black/50">
                        {p.suburb}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-brand-black/5 px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <h2 className="mb-6 text-xs font-medium uppercase tracking-[0.3em] italic text-brand-gold">
              Services
            </h2>
            <p className="text-sm font-light leading-relaxed text-brand-black/60">
              Precision media designed to move high-value real estate faster.
            </p>
            <Link
              to="/services"
              className="mt-8 inline-block border-b border-brand-black pb-1 text-xs uppercase tracking-[0.2em] hover:text-brand-gold hover:border-brand-gold transition-colors"
            >
              All services
            </Link>
          </div>
          <div className="md:col-span-3">
            <div className="grid gap-12 md:grid-cols-2">
              {SERVICES.map((s) => (
                <div key={s.title}>
                  <h4 className="mb-3 font-serif text-xl">{s.title}</h4>
                  <p className="text-sm leading-relaxed text-brand-black/70">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-brand-black px-6 py-24 text-brand-cream md:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl">Let's shoot your next listing.</h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-cream/60">
            Address, dates, brief — send them across and Simon will come back with
            availability and a quote.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs uppercase tracking-[0.2em]">
            <a
              href="tel:+61432436658"
              className="border-b border-brand-cream pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors"
            >
              0432 436 658
            </a>
            <a
              href="mailto:info@digirise.com.au"
              className="border-b border-brand-cream pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors"
            >
              info@digirise.com.au
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

const SERVICES = [
  {
    title: "Interior & Exterior Stills",
    body: "Ultra-wide and detail shots using natural light and HDR blending for magazine-quality property photography.",
  },
  {
    title: "Drone Photo & Video",
    body: "CASA-certified aerial operations for breathtaking 4K site context and dramatic low-altitude reveals.",
  },
  {
    title: "360° Matterport Tours",
    body: "Industry-standard immersive walkthroughs that let buyers explore every corner from their own device.",
  },
  {
    title: "Cinematic Video",
    body: "Stabilised walk-through films edited with licensed music to create an emotional connection with buyers.",
  },
];
