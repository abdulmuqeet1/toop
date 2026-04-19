import { Link } from "react-router-dom";
// import Image from "nex"
import { Phone, Mail, MapPin } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const services = [
  "Audit & Assurance",
  "Tax Consultancy",
  "Business Advisory",
  "Company Incorporations",
  "Outsourced Accounting",
  "Digital Solutions",
];

const social = [
  {"name": "facebook", "url": ""},
  {"name": "instagram", "url": ""},
  {"name": "linkedin", "url": ""},
  {"name": "x", "url": ""},
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
              <img src="/fg_consulting-logo.png" alt="FG Consulting Logo" className="w-10" />
              <span className="font-display text-lg font-semibold text-white tracking-tight">
                FG Consulting
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              One of the leading auditing and advisory firms in the region with specialties in auditing, taxation, accounting and business advisory.
            </p>
            <div className="flex gap-3">
              {social.map((s, idx) => (
                <a
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={s.url}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-xs uppercase font-semibold"
                >
                  {/* {s.name.toUpperCase()}  */}
                  <img src={`/${s.name}.png`} alt={s.name} className="w-7 h-7" />
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
                <a href="tel:+971553643659" className="hover:text-primary transition-colors">+971 55 364 3659</a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail size={15} className="mt-0.5 text-primary shrink-0" />
                <a href="mailto:fgconsultingfze@gmail.com" className="hover:text-primary transition-colors">fgconsultingfze@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={15} className="mt-0.5 text-primary shrink-0" />
                <span>CWS-1V-223131 26th Floor, Amber Gem Tower, Ajman</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container py-5 text-center text-xs text-white/40">
          © {new Date().getFullYear()} FG Consulting Global. All rights reserved. | 
          {" "}<Tooltip>
            <TooltipTrigger asChild>
              <a href="https://abdulmuqeet.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white/40 transition-colors cursor-help">
                Muqeet.dev
              </a>
            </TooltipTrigger>
            <TooltipContent>
              Developer Potfolio - Visit my website
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </footer>
  );
}
