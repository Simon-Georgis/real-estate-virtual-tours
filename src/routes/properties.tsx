import { createFileRoute, Link } from "@tanstack/react-router";
import { getAllProperties } from "@/data/properties";

export const Route = createFileRoute("/properties")({
  component: PropertiesPage,
  head: () => ({
    meta: [
      { title: "Properties — DigiRise Real Estate Media" },
      {
        name: "description",
        content:
          "Selected real estate shoots by DigiRise — photography, drone, and 360° Matterport tours.",
      },
      { property: "og:title", content: "Properties — DigiRise" },
      {
        property: "og:description",
        content: "Selected real estate shoots by DigiRise.",
      },
      { property: "og:url", content: "/properties" },
    ],
    links: [{ rel: "canonical", href: "/properties" }],
  }),
});

function PropertiesPage() {
  const items = getAllProperties();

  return (
    <section className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold">Portfolio</p>
          <h1 className="mt-4 font-serif text-xl leading-[1.35] md:text-2xl lg:text-3xl">
            Properties.
          </h1>
          <p className="mt-6 text-brand-black/70 leading-relaxed">
            Every listing tells its own story. Below is a selection of recent shoots —
            click through to see the full gallery, video, and 3D walkthrough.
          </p>
        </div>

        <div className="grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
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
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg text-brand-black group-hover:text-brand-gold transition-colors">
                    {p.address}
                  </h2>
                  {p.suburb && (
                    <p className="mt-1 text-xs uppercase tracking-wider text-brand-black/50">
                      {p.suburb}
                    </p>
                  )}
                </div>
                {p.matterportUrl && (
                  <span className="shrink-0 rounded-full bg-brand-black px-2 py-1 text-[9px] uppercase tracking-widest text-brand-cream">
                    3D Tour
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        {items.length === 0 && (
          <p className="text-brand-black/60">No properties yet — check back soon.</p>
        )}
      </div>
    </section>
  );
}
