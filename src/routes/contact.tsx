import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — DigiRise Real Estate Media" },
      {
        name: "description",
        content:
          "Contact Simon at DigiRise — phone 0432 436 658, email info@digirise.com.au. Real estate photography, drone, and 360° Matterport tours.",
      },
      { property: "og:title", content: "Contact — DigiRise" },
      {
        property: "og:description",
        content: "Get in touch with Simon at DigiRise to book a real estate shoot.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "DigiRise Real Estate Media",
          telephone: "+61432436658",
          email: "info@digirise.com.au",
          areaServed: "AU",
          address: { "@type": "PostalAddress", addressCountry: "AU" },
          identifier: { "@type": "PropertyValue", name: "ABN", value: "82 302 930 360" },
        }),
      },
    ],
  }),
});

function ContactPage() {
  return (
    <>
      <section className="px-6 pt-16 pb-12 md:px-10 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold">
            Get in touch
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl md:text-7xl leading-[1.05]">
            Let's shoot your <span className="italic">next</span> listing.
          </h1>
          <p className="mt-6 max-w-xl text-brand-black/70 leading-relaxed">
            Send through the address, preferred date, and what you need — Simon will come
            back with availability and a quote.
          </p>
        </div>
      </section>

      <section className="border-t border-brand-black/5 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-3">
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand-black/40">
              Phone
            </p>
            <a
              href="tel:+61432436658"
              className="block font-serif text-3xl md:text-4xl hover:text-brand-gold transition-colors"
            >
              0432 436 658
            </a>
            <p className="pt-2 text-sm text-brand-black/60">Call or text — 7 days.</p>
          </div>

          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand-black/40">
              Email
            </p>
            <a
              href="mailto:info@digirise.com.au"
              className="block break-all font-serif text-3xl md:text-4xl hover:text-brand-gold transition-colors"
            >
              info@digirise.com.au
            </a>
            <p className="pt-2 text-sm text-brand-black/60">
              Best for briefs, quotes, and delivery.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand-black/40">
              Business
            </p>
            <p className="font-serif text-3xl md:text-4xl">DigiRise</p>
            <p className="pt-2 text-sm text-brand-black/60">
              Real Estate Media
              <br />
              Simon — Principal Operator
              <br />
              Melbourne, Australia
              <br />
              ABN 82 302 930 360
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl italic md:text-4xl text-brand-black">
            Prefer email?
          </h2>
          <p className="mt-4 text-brand-black/60">
            Tap the button below to open a fresh message.
          </p>
          <a
            href="mailto:info@digirise.com.au?subject=Property%20shoot%20enquiry"
            className="mt-8 inline-block bg-brand-black px-8 py-4 text-xs uppercase tracking-[0.2em] text-brand-cream hover:bg-brand-gold hover:text-brand-black transition-colors"
          >
            Email Simon
          </a>
        </div>
      </section>
    </>
  );
}
