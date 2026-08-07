import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — DigiRise Real Estate Media" },
      {
        name: "description",
        content:
          "Contact Simon at DigiRise — phone 0432 436 658, email info@digirise.com.au. Real estate photography, drone & 360° Matterport tours for Fairfield and Western Sydney. English, Arabic & Assyrian spoken.",
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
          areaServed: [
            "Fairfield NSW",
            "Canley Heights NSW",
            "Cabramatta NSW",
            "Bossley Park NSW",
            "Smithfield NSW",
            "Wetherill Park NSW",
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Fairfield",
            addressRegion: "NSW",
            addressCountry: "AU",
          },
          knowsLanguage: ["en", "ar", "aii"],
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
          <h1 className="mt-4 max-w-3xl font-serif text-xl leading-[1.35] md:text-2xl lg:text-3xl">
            Let's shoot your <span className="italic">next</span> listing.
          </h1>
          <p className="mt-6 max-w-xl text-brand-black/70 leading-relaxed">
            Send through the address, preferred date, and what you need — We will come
            back with availability and a quote.
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
              Fairfield, Western Sydney
              <br />
              English, Arabic &amp; Assyrian spoken
              <br />
              ABN 82 302 930 360
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-xl leading-[1.35] italic md:text-2xl lg:text-3xl text-brand-black">
            Prefer email?
          </h2>
          <p className="mt-4 text-brand-black/60">
            Tap the button below to open a fresh message.
          </p>
          <a
            href="mailto:info@digirise.com.au?subject=Property%20shoot%20enquiry"
            className="mt-8 inline-block bg-brand-black px-8 py-4 text-xs uppercase tracking-[0.2em] text-brand-cream hover:bg-brand-gold hover:text-brand-black transition-colors"
          >
            Email Us
          </a>
        </div>
      </section>
    </>
  );
}
