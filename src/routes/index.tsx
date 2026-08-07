import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { getAllProperties } from "@/data/properties";
import { Lightbox } from "@/components/Lightbox";

const SHOWCASE_SHOTS = [
  {
    src: "/properties/welcome.jpg",
    alt: "Aerial view of a recent DigiRise property shoot with nearby points of interest marked",
    width: 4032,
    height: 3024,
  },
  {
    src: "/properties/welcome2-site-plan.jpg",
    alt: "Site plan and floor plan overlay for a recent DigiRise property shoot",
    width: 4032,
    height: 3024,
  },
  {
    src: "/properties/8-corona-rd-annotated.jpg",
    alt: "Aerial view with the property boundary line highlighted",
    width: 8064,
    height: 6048,
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "DigiRise — Real Estate Photography, Fairfield & Western Sydney" },
      {
        name: "description",
        content:
          "Real estate photography, drone & 360° Matterport tours for Fairfield, Canley Heights, Cabramatta, Bossley Park, Smithfield & Wetherill Park. English, Arabic & Assyrian spoken.",
      },
      { property: "og:title", content: "DigiRise — Real Estate Photography, Fairfield & Western Sydney" },
      {
        property: "og:description",
        content:
          "Real estate photography, drone & 360° Matterport tours for Fairfield, Canley Heights, Cabramatta, Bossley Park, Smithfield & Wetherill Park. English, Arabic & Assyrian spoken.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  const featured = getAllProperties().slice(0, 3);
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({
    open: false,
    index: 0,
  });
  const [signOpen, setSignOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="px-6 py-12 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid items-end gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="font-serif text-2xl leading-[1.4] text-brand-black md:text-4xl lg:text-5xl">
                We capture the <span className="italic text-brand-gold">DETAILS.</span> you close the <span className="italic text-brand-gold">DEAL</span>.
              </h1>
              <p className="mt-8 max-w-md text-base leading-relaxed text-brand-black/70 md:text-lg">
                Your All-In-One Media Partner. From Ground to Air to 360°- We Handle It All
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-brand-black/50">
                Fairfield · Canley Heights · Cabramatta · Bossley Park · Smithfield · Wetherill Park
              </p>
              <div className="mt-6 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-brand-gold/30 px-4 py-2 text-sm text-brand-black/80">
                <span className="text-brand-black/50">We speak</span>
                <span className="font-medium">English</span>
                <span className="text-brand-black/30">·</span>
                <span className="font-medium">Arabic</span>
                <span className="text-brand-black/30">·</span>
                <span className="font-medium">Assyrian</span>
              </div>
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
                <p className="mt-2 text-sm">Fairfield, Western Sydney</p>
              </div>
            </div>
          </div>

          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-brand-gold">
            One Shoot, Fully Mapped — Aerial · Boundary Lines · Floor Plan
          </p>
          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {SHOWCASE_SHOTS.map((shot, i) => (
              <button
                key={shot.src}
                type="button"
                onClick={() => setLightbox({ open: true, index: i })}
                className="group overflow-hidden rounded-sm outline outline-1 -outline-offset-1 outline-brand-black/5"
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  loading={i === 0 ? undefined : "lazy"}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* As used by local agents */}
      <section className="border-t border-brand-black/5 bg-white px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold">
              As Used By Local Agents
            </p>
            <h2 className="mt-3 font-serif text-xl leading-[1.35] italic md:text-2xl lg:text-3xl">
              From drone shot to sold sign.
            </h2>
            <p className="mt-4 max-w-md text-brand-black/70 leading-relaxed">
              The aerial photo, boundary lines and 360° tour on this listing were shot
              and mapped by DigiRise, then used directly by Richard Chhor at
              Professionals Cabramatta to market 57 Earl Street, Canley Heights — QR
              code included, linking straight to the tour inside.
            </p>
            <p className="mt-4 max-w-md text-brand-black/70 leading-relaxed">
              DigiRise can design, print and install the yard sign too — with a QR code
              leading buyers straight to your listing or the 360° tour we shot.
            </p>
            <Link
              to="/signage-styles"
              className="mt-6 inline-block border-b border-brand-black pb-1 text-xs uppercase tracking-[0.2em] hover:text-brand-gold hover:border-brand-gold transition-colors"
            >
              See Signage Style Options
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setSignOpen(true)}
            className="group mx-auto w-full max-w-xs overflow-hidden rounded-sm outline outline-1 -outline-offset-1 outline-brand-black/5"
          >
            <img
              src="/signage/57-earl-st-sign.jpg"
              alt="57 Earl Street, Canley Heights — For Sale sign by Professionals Cabramatta featuring DigiRise aerial photography and 360° tour QR code"
              width={1698}
              height={2400}
              loading="lazy"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </button>
        </div>
      </section>

      {/* Selected Shoots */}
      <section className="bg-white px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-xl leading-[1.35] italic md:text-2xl lg:text-3xl">Selected Shoots</h2>
            <Link
              to="/properties"
              className="border-b border-brand-black pb-1 text-xs uppercase tracking-[0.2em] hover:text-brand-gold hover:border-brand-gold transition-colors"
            >
              View All Properties
            </Link>
          </div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-12">
            {featured.map((p) => (
              <Link key={p.slug} to="/properties/$slug" params={{ slug: p.slug }} className="group block">
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
              Precision media that helps Fairfield &amp; Western Sydney agents move listings faster.
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
                  <h4 className="mb-3 font-serif text-xl leading-[1.35] md:text-2xl lg:text-3xl">{s.title}</h4>
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
          <h2 className="font-serif text-xl leading-[1.35] md:text-2xl lg:text-3xl">Let's shoot your next listing.</h2>
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

      <Lightbox
        open={lightbox.open}
        startIndex={lightbox.index}
        images={SHOWCASE_SHOTS.map((s) => s.src)}
        onClose={() => setLightbox({ open: false, index: 0 })}
        alt="DigiRise property mapping showcase"
      />

      <Lightbox
        open={signOpen}
        startIndex={0}
        images={["/signage/57-earl-st-sign.jpg"]}
        onClose={() => setSignOpen(false)}
        alt="57 Earl Street, Canley Heights — For Sale sign by Professionals Cabramatta"
      />
    </>
  );
}

const SERVICES = [
  {
    title: "360° Matterport Tours",
    body: "Industry-standard immersive walkthroughs that let buyers explore every corner from their own device.",
  },
  {
    title: "Interior & Exterior Stills",
    body: "Ultra-wide and detail shots using natural light and HDR blending for magazine-quality property photography.",
  },
  {
    title: "Drone Photo & Video",
    body: "CASA-certified aerial operations for breathtaking 4K site context and dramatic low-altitude reveals.",
  },
  {
    title: "Cinematic Video",
    body: "Stabilised walk-through films edited with licensed music to create an emotional connection with buyers.",
  },
];
