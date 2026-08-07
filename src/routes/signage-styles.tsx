import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Lightbox } from "@/components/Lightbox";

export const Route = createFileRoute("/signage-styles")({
  component: SignageStylesPage,
  head: () => ({
    meta: [
      { title: "Signage Styles — DigiRise" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

const TEMPLATES = [
  {
    src: "/signage/template-modern-house.jpg",
    alt: "Signage style — Modern House For Sale, blue sky exterior",
  },
  {
    src: "/signage/template-shodwe-estate.jpg",
    alt: "Signage style — Shodwe Estate, brown and white apartment layout",
  },
  {
    src: "/signage/template-urban-properties.jpg",
    alt: "Signage style — Urban Properties, black and gold house for sale",
  },
  {
    src: "/signage/template-rimberio-living.jpg",
    alt: "Signage style — Rimberio Living, modern pool house",
  },
  {
    src: "/signage/template-salford-tower.jpg",
    alt: "Signage style — Salford Tower, apartment tower elevate everyday living",
  },
];

function SignageStylesPage() {
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({
    open: false,
    index: 0,
  });

  return (
    <>
      <section className="px-6 pt-16 pb-12 md:px-10 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold">
            For Agent Meetings
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-xl leading-[1.35] md:text-2xl lg:text-3xl">
            Signage style options.
          </h1>
          <p className="mt-6 max-w-xl text-brand-black/70 leading-relaxed">
            A few layout directions to choose from — any of these can be rebuilt
            into a yard sign around your own listing photos, agency branding and a
            QR code linking to the 360° tour.
          </p>
        </div>
      </section>

      <section className="border-t border-brand-black/5 px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {TEMPLATES.map((t, i) => (
              <button
                key={t.src}
                type="button"
                onClick={() => setLightbox({ open: true, index: i })}
                className="group overflow-hidden rounded-sm outline outline-1 -outline-offset-1 outline-brand-black/5"
              >
                <img
                  src={t.src}
                  alt={t.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        open={lightbox.open}
        startIndex={lightbox.index}
        images={TEMPLATES.map((t) => t.src)}
        onClose={() => setLightbox({ open: false, index: 0 })}
        alt="DigiRise signage style option"
      />
    </>
  );
}
