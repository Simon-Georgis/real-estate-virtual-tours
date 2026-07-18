import { Link } from "@tanstack/react-router";
import logo from "@/assets/digirise-logo.png?url";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-black/5 bg-brand-cream/85 backdrop-blur-md">
      <nav className="flex items-center justify-between px-6 py-4 md:px-10 md:py-5">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="DigiRise"
            width={64}
            height={64}
            className="h-16 w-16 object-contain"
          />
          <span className="font-serif text-xl italic tracking-tight text-brand-black">
            DigiRise
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-xs font-medium uppercase tracking-[0.2em]">
          <Link
            to="/properties"
            className="text-brand-black/80 transition-colors hover:text-brand-gold"
            activeProps={{ className: "text-brand-gold" }}
          >
            Properties
          </Link>
          <Link
            to="/services"
            className="text-brand-black/80 transition-colors hover:text-brand-gold"
            activeProps={{ className: "text-brand-gold" }}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-brand-black/80 transition-colors hover:text-brand-gold"
            activeProps={{ className: "text-brand-gold" }}
          >
            Contact
          </Link>
        </div>

        <Link
          to="/contact"
          className="md:hidden text-xs font-medium uppercase tracking-[0.2em] text-brand-black/80"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
