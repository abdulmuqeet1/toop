import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/5">
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-end gap-6 container py-1.5 text-xs text-white/60">
        <a href="tel:+971553643659" className="flex items-center gap-1.5 hover:text-primary transition-colors">
          <Phone size={12} /> +971 55 364 3659
        </a>
        <a href="mailto:fgconsultingfze@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
          <Mail size={12} /> fgconsultingfze@gmail.com
        </a>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src="/fg_consulting-logo.png" alt="FG Consulting Logo" className="w-10" />
          <span className="font-display text-lg font-semibold text-white tracking-tight">
            FG Consulting
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === link.to
                  ? "text-primary bg-white/5"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-teal-dark transition-colors active:scale-[0.97]"
          >
            Enquire Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/80 p-2 hover:bg-white/5 rounded-lg transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t border-white/5 bg-navy/98 backdrop-blur-md animate-reveal">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-primary bg-white/5"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold text-center"
            >
              Enquire Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
