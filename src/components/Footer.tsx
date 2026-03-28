import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const services = [
  "Audit & Assurance",
  "Tax Consultancy",
  "Business Advisory",
  "Company Incorporations",
  "Outsourced Accounting",
  "M&A Consulting",
];

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-sm">
                PB
              </div>
              <span className="font-display text-base font-semibold text-white">FG Consultant</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              One of the leading auditing and advisory firms in the region with specialties in auditing, taxation, accounting and business advisory.
            </p>
            <div className="flex gap-3">
              {["instagram", "facebook", "twitter", "linkedin"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-xs uppercase font-semibold"
                >
                  {s[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-white text-sm font-semibold mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-white text-sm font-semibold mb-4 tracking-wide">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm hover:text-primary transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white text-sm font-semibold mb-4 tracking-wide">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Phone size={15} className="mt-0.5 text-primary shrink-0" />
                <a href="tel:+97143542959" className="hover:text-primary transition-colors">+971 4 354 2959</a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail size={15} className="mt-0.5 text-primary shrink-0" />
                <a href="mailto:info@fgconsultant.com" className="hover:text-primary transition-colors">info@fgconsultant.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={15} className="mt-0.5 text-primary shrink-0" />
                <span>Office 805, Exchange Tower, Business Bay, Dubai, UAE</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container py-5 text-center text-xs text-white/40">
          © {new Date().getFullYear()} FG Consultant Global. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
