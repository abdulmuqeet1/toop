import { Link } from "react-router-dom";
import BlobBackground from "@/components/BlobBackground";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/Layout";
import {
  Shield,
  Calculator,
  Briefcase,
  Building2,
  BookOpen,
  Handshake,
  ArrowRight,
  Star,
  Users,
  Globe,
  Award,
  CheckCircle,
  Zap,
} from "lucide-react";

const services = [
  { icon: Shield, title: "Audit & Assurance", desc: "External audit, internal audit, IFRS advisory, forensic audit, AML compliance and RERA audit services." },
  { icon: Calculator, title: "Tax Consultancy", desc: "Corporate tax, international taxation, transfer pricing, VAT, excise tax and customs advisory." },
  { icon: Briefcase, title: "Business Advisory", desc: "Market research, feasibility studies, CFO support, capital raising and policy manuals." },
  { icon: Building2, title: "Company Incorporations", desc: "Company formation, offshore registered agents, liquidations support and corporate restructuring." },
  { icon: BookOpen, title: "Outsourced Accounting", desc: "End-to-end accounting and bookkeeping services tailored to your business needs." },
  { icon: Zap, title: "Digital Transformation", desc: "Modernize your business operations with technology-driven solutions."},
];

const coreValues = [
  "Always Do The Right Thing",
  "Ethical Conduct",
  "Quality First",
  "Continuous Learning",
  "Professional Skepticism",
  "Timely Client Commitments",
];

const stats = [
  { value: "10+", label: "Years of Excellence" },
  { value: "500+", label: "Clients Served" },
  { value: "4", label: "Regional Offices" },
  { value: "10+", label: "Expert Professionals" },
];

const testimonials = [
  { name: "Joseph George", role: "Finance Controller, D & K Holdings", text: "We have experienced a very professional approach from FG Consultant team. They have given us the right advice and direction to be in line with government regulations." },
  { name: "Jane Ashford", role: "Managing Director, Pro Partner Group", text: "We have found FG Consultant to be extremely helpful. They are very responsive and offer excellent service. We have recommended them to several of our clients." },
  { name: "Marios Petrou", role: "Managing Director, Healthy Options", text: "FG Consultant offer a first class service. Staff are professional and always willing to go the extra mile. The monthly newsletters are very much appreciated." },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden min-h-[85vh] flex items-center">
        <BlobBackground />
        <div className="container relative z-10 py-24 md:py-32">
          <div className="max-w-3xl">
            <p
              className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 animate-reveal"
              style={{ animationDelay: "100ms" }}
            >
              ERP · E-Com · Audit · Accounting · Tax · Advisory · Education · HR · Real Estate · PM
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] text-balance mb-6 animate-reveal"
              style={{ animationDelay: "200ms" }}
            >
              Always Doing
              <br />
              The Right Thing
            </h1>
            <p
              className="text-white/60 text-lg leading-relaxed max-w-xl mb-10 animate-reveal"
              style={{ animationDelay: "350ms" }}
            >
              FG Consultant is one of the leading firms in the UAE region, committed to integrity, precision, and exceptional client service.
            </p>
            <div
              className="flex flex-wrap gap-4 animate-reveal"
              style={{ animationDelay: "500ms" }}
            >
              <Link
                to="/services"
                className="px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-teal-dark transition-colors active:scale-[0.97] inline-flex items-center gap-2"
              >
                Explore Services <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-xl border border-white/15 text-white/80 font-semibold text-sm hover:bg-white/5 transition-colors active:scale-[0.97]"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-card border-b border-border">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 80}>
                <div className="text-center">
                  <p className="font-display text-3xl lg:text-4xl font-bold text-secondary tabular-nums">{s.value}</p>
                  <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-background">
        <div className="container py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">About Us</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mb-5">
                Trusted Advisors Since 2013
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                FG Consultant Accounting & Auditing is one of the leading auditing and advisory firms in the region with specialties in auditing, taxation, accounting and business advisory. Our commitment to "Always Doing the Right Thing" with integrity and values for over 10 years has enabled us to establish strong relationships with stakeholders across UAE, Kuwait, Bahrain and India.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We follow a partner-led approach to ensure personal attention. Our partners come from top organizations with wide experience across Fortune 500 companies, ably supported by qualified Chartered Accountants and Consultants.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Globe, label: "4 Regional Offices" },
                  { icon: Users, label: "10+ Team Members" },
                  { icon: Award, label: "FTA Approved Agents" },
                  { icon: CheckCircle, label: "ISO Standards" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <item.icon size={28} className="text-primary mb-3" />
                    <p className="font-display text-sm font-semibold text-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted">
        <div className="container py-20 lg:py-28">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">What We Do</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Comprehensive Professional Services
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <Link
                  to="/services"
                  className="group block bg-card rounded-2xl p-7 border border-border shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  <s.icon
                    size={32}
                    className="text-primary mb-4 group-hover:scale-105 transition-transform"
                  />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium mt-4 group-hover:gap-2.5 transition-all">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-background">
        <div className="container py-20 lg:py-28">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Our Principles</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Core Values That Guide Us
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {coreValues.map((v, i) => (
              <ScrollReveal key={v} delay={i * 60}>
                <div className="bg-accent rounded-2xl p-5 text-center h-full flex flex-col items-center justify-center min-h-[120px]">
                  <CheckCircle size={22} className="text-primary mb-2.5" />
                  <p className="font-display text-sm font-semibold text-accent-foreground leading-snug">{v}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted">
        <div className="container py-20 lg:py-28">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Client Feedback</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground text-balance">
                What Our Clients Say
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100}>
                <div className="bg-card rounded-2xl p-7 border border-border shadow-sm h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">"{t.text}"</p>
                  <div>
                    <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-navy overflow-hidden">
        <BlobBackground />
        <div className="container relative z-10 py-20 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white text-balance mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-white/60 max-w-lg mx-auto mb-8">
              Please feel free to contact us. We're happy to talk about how we can help your business grow.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-teal-dark transition-colors active:scale-[0.97]"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
