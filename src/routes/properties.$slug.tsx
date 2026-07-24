import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getPropertyBySlug, type Property } from "@/data/properties";
import { Lightbox } from "@/components/Lightbox";
import { toEmbedUrl, isDirectVideoFile } from "@/lib/media";

export const Route = createFileRoute("/properties/$slug")({
  loader: ({ params }) => {
    const property = getPropertyBySlug(params.slug);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Property not found — DigiRise" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.property;
    const title = `${p.address}${p.suburb ? `, ${p.suburb}` : ""} — DigiRise`;
    const description =
      p.note ??
      `Real estate media shoot at ${p.address} by DigiRise — photography, drone, and 3D tour.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:image", content: p.cover },
        { property: "og:url", content: `/properties/${params.slug}` },
        { name: "twitter:image", content: p.cover },
      ],
      links: [{ rel: "canonical", href: `/properties/${params.slug}` }],
    };
  },
  component: PropertyDetail,
});

function PropertyDetail() {
  const { property } = Route.useLoaderData() as { property: Property };
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({
    open: false,
    index: 0,
  });

  return (
    <article>
      {/* Header */}
      <header className="px-6 pt-8 pb-8 md:px-10 md:pt-12 md:pb-12">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/properties"
            className="mb-8 inline-block text-xs uppercase tracking-[0.2em] text-brand-black/50 hover:text-brand-gold"
          >
            ← All Properties
          </Link>
          <div className="grid items-end gap-8 md:grid-cols-2">
            <div>
              <h1 className="font-serif text-xl leading-[1.35] md:text-2xl lg:text-3xl">
                {property.address}
              </h1>
              {property.suburb && (
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-brand-black/60">
                  {property.suburb}
                </p>
              )}
            </div>
            <div className="md:text-right">
              {property.note && (
                <p className="text-brand-black/70 leading-relaxed md:ml-auto md:max-w-sm">
                  {property.note}
                </p>
              )}
              {property.services && property.services.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2 md:justify-end">
                  {property.services.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-brand-black/15 px-3 py-1 text-[10px] uppercase tracking-widest text-brand-black/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Gallery */}
      {property.images.length > 0 && (
        <section className="px-6 py-12 md:px-10 md:py-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-8 font-serif text-xl leading-[1.35] italic md:text-2xl lg:text-3xl">Gallery</h2>
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {property.images.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  onClick={() => setLightbox({ open: true, index: i })}
                  className="group aspect-[4/5] overflow-hidden rounded-sm outline outline-1 -outline-offset-1 outline-brand-black/5"
                >
                  <img
                    src={src}
                    alt={`${property.address} — ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Video */}
      {property.videos && property.videos.length > 0 && (
        <section className="bg-white px-6 py-12 md:px-10 md:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 font-serif text-xl leading-[1.35] italic md:text-2xl lg:text-3xl">Video</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {property.videos.map((url, i) => {
                const embed = toEmbedUrl(url);
                if (embed) {
                  return (
                    <div
                      key={url + i}
                      className="relative aspect-video overflow-hidden rounded-sm bg-brand-black"
                    >
                      <iframe
                        src={embed}
                        title={`Video ${i + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                  );
                }
                if (isDirectVideoFile(url)) {
                  return (
                    <div
                      key={url + i}
                      className="relative aspect-video overflow-hidden rounded-sm bg-brand-black"
                    >
                      <video
                        src={url}
                        controls
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  );
                }
                return (
                  <a
                    key={url + i}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-brand-gold underline"
                  >
                    View video
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Matterport */}
      {property.matterportUrl && (
        <section className="bg-brand-black px-6 py-12 text-brand-cream md:px-10 md:py-16">
          <div className="mx-auto max-w-6xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold">
              Immersive Experience
            </p>
            <h2 className="mt-3 mb-8 font-serif text-xl leading-[1.35] md:text-2xl lg:text-3xl">
              3D Walkthrough
            </h2>
            <div className="relative aspect-video overflow-hidden rounded-sm border border-brand-cream/10">
              <iframe
                src={property.matterportUrl}
                title="Matterport 3D tour"
                allow="fullscreen; xr-spatial-tracking; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-xl leading-[1.35] italic md:text-2xl lg:text-3xl">Like what you see?</h2>
          <p className="mt-4 text-brand-black/60">
            Get in touch to book your own shoot.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs uppercase tracking-[0.2em]">
            <a
              href="tel:+61432436658"
              className="border-b border-brand-black pb-1 hover:text-brand-gold hover:border-brand-gold"
            >
              0432 436 658
            </a>
            <a
              href="mailto:info@digirise.com.au"
              className="border-b border-brand-black pb-1 hover:text-brand-gold hover:border-brand-gold"
            >
              info@digirise.com.au
            </a>
          </div>
        </div>
      </section>

      <Lightbox
        open={lightbox.open}
        startIndex={lightbox.index}
        images={property.images.length ? property.images : [property.cover]}
        onClose={() => setLightbox({ open: false, index: 0 })}
        alt={property.address}
      />
    </article>
  );
}
