import { Link } from "@tanstack/react-router";
import logo from "@/assets/digirise-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-black/10 bg-brand-cream px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3 md:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo.url}
                alt="DigiRise"
                width={40}
                height={40}
                className="h-9 w-9 object-contain"
                loading="lazy"
              />
              <span className="font-serif text-xl italic tracking-tight">DigiRise</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl italic leading-tight text-balance">
              Ready to elevate your next listing?
            </h3>
            <p className="mt-4 max-w-xs text-sm text-brand-black/60 leading-relaxed">
              Get in touch for rates and availability. Most shoots delivered within
              24&nbsp;hours.
            </p>
          </div>

          <div className="space-y-5">
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand-black/40">
              Contact
            </p>
            <div className="space-y-2">
              <p className="text-sm text-brand-black/60">Simon</p>
              <a
                href="tel:+61432436658"
                className="block text-lg md:text-xl hover:text-brand-gold transition-colors"
              >
                0432 436 658
              </a>
              <a
                href="mailto:info@digirise.com.au"
                className="block text-lg md:text-xl hover:text-brand-gold transition-colors break-all"
              >
                info@digirise.com.au
              </a>
            </div>
            <div className="pt-4 flex gap-6 text-xs uppercase tracking-[0.2em]">
              <Link to="/properties" className="hover:text-brand-gold">
                Properties
              </Link>
              <Link to="/services" className="hover:text-brand-gold">
                Services
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-end md:items-end space-y-2">
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-black/40">
              ABN 82 302 930 360
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-black/40">
              Melbourne, AU
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-black/30 pt-4">
              © {new Date().getFullYear()} DigiRise Media
            </p>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="mt-16 text-[18vw] font-serif font-semibold leading-none text-brand-black/5 select-none pointer-events-none"
        >
          DIGIRISE
        </div>
      </div>
    </footer>
  );
}
