import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import BlobBackground from "@/components/BlobBackground";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Globe,
  Users,
  Award,
  ArrowRight,
  Target,
  Eye,
  Heart,
} from "lucide-react";



const team = [
  { name: "Fahad Ghafoor", credentials: "CBA", role: "CEO | ERP Expert | System Auditor | Accountant" },
  { name: "Kashif Iqbal", credentials: "CA Finalist", role: "Auditor | Project Manager" },
  { name: "Ali Husnain", credentials: "CA Finalist", role: "Tax Expert" },
  { name: "Naeem Abbas", credentials: "CA Final", role: "Audit & Assurance | VAT & Corporate Tax | Real State" },
  { name: "Waqas Mehmood", credentials: "CMA | MA Economic", role: "Management Accountant | E-Commerce Expert" },
  { name: "Abdul Wahab", credentials: "MS Electrical Engineering", role: "Project Manager" },
  { name: "Malik Sadaqat", credentials: "BsIT", role: "Senior Frontend Developer" },
  { name: "Abdul Muqeet", credentials: "BsIT", role: "Tech Lead" },
  { name: "Adeela Khalid", credentials: "MSc. S.Sc | M.Ed", role: "Educational Consultant & Montessori Expert" },
  { name: "Hiba Shaber", credentials: "BA", role: "Administrator" },
];

const coreValues = [
  { icon: CheckCircle, title: "Your Digital Transformation Partner", desc: "We act with integrity in every decision we make." },
  { icon: Heart, title: "Ethical Conduct", desc: "Maintaining the highest ethical standards in all interactions." },
  { icon: Award, title: "Quality First", desc: "Delivering excellence and precision in every engagement." },
  { icon: Target, title: "Continuous Learning", desc: "Staying ahead through continuous professional development." },
  { icon: Eye, title: "Professional Skepticism", desc: "Applying rigorous analysis and questioning to protect stakeholders." },
  { icon: Users, title: "Client Commitments", desc: "Meeting deadlines and exceeding expectations, always." },
];

const milestones = [
  { year: "2015", event: "Founded in Pakistan, with a vision to be your digital transformation partner" },
  { year: "2016", event: "Developed Digital Solutions for Real Estate in Pakistan" },
  { year: "2017", event: "Developed Digital Solutions for HORECA in Pakistan" },
  { year: "2018", event: "Developed Digital Solutions for Education Sector in Pakistan" },
  { year: "2019", event: "Developed Digital Solutions for Healthcare Toll Manufacturing Sector in Pakistan" },
  { year: "2020", event: "Developed Digital Solutions for E-Commerce Sector in Pakistan" },
  { year: "2021", event: "Developed Digital Solutions for FMCG in Pakistan" },
  { year: "2022", event: "Launched A Market Place for Education Industry connecting students and Tutors" },
  { year: "2023", event: "Launched AI-Powered ERP Solutions, enhancing digital transformation capabilities" },
  { year: "2024", event: "Developed Integrated and Automated Solutions for Car Auctioners in UAE" },
  { year: "2025", event: "Incorporated and Expanded Operations in UAE" },
  { year: "2026", event: "Managing the implementation of Digital Transformation Project of a well known cosmetic manufacturing company in UAE" },

];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <BlobBackground />
        <div className="container relative z-10 py-20 lg:py-28">
          <ScrollReveal>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">About Us</p>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight text-balance mb-5">
              Built on Integrity,
              <br />Driven by Excellence
            </h1>
            <p className="text-white/60 max-w-xl text-lg leading-relaxed">
              For over a decade, FG Consultant has been the trusted partner for businesses seeking digital transformatioin through ERP solutions, audit, tax, and advisory services across Pakistan and the GCC region.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-background">
        <div className="container py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Our Story</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mb-6">
                A Decade of Trusted Advisory
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  FG Consulting is one of the growing ERP digital transformation, Auditing, Accounting, Taxation and Advisory firms in the region with specialties in digital solutions and business advisory.
                </p>
                <p>
                  Our commitment to "become your digital transformation partner" with integrity and values for over 10 years has enabled us to establish strong relationships with all stakeholders, resulting in our expansion to GCC after setting up in Pakistan.
                </p>
                <p>
                  We follow a partner-led approach to ensure personal attention is delivered to our clients. The members at FG Consulting come from top organizations after spending considerable time at senior positions with a wide array of companies including multi-national and global companies. They are ably supported by a team of qualified Chartered Accountants, Tech professionals, Consultants and other professionals.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Globe, value: "2", label: "Regional Offices" },
                  { icon: Users, value: "10+", label: "Team Members" },
                  { icon: Award, value: "50+", label: "Clients Served" },
                  { icon: CheckCircle, value: "10+", label: "Years Experience" },
                ].map((s) => (
                  <div key={s.label} className="bg-card rounded-2xl p-6 border border-border shadow-sm text-center">
                    <s.icon size={24} className="text-primary mx-auto mb-2" />
                    <p className="font-display text-2xl font-bold text-foreground tabular-nums">{s.value}</p>
                    <p className="text-muted-foreground text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted">
        <div className="container py-20 lg:py-28">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Our Journey</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground text-balance">Key Milestones</h2>
            </div>
          </ScrollReveal>
          <div className="max-w-2xl mx-auto space-y-0">
            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} delay={i * 80}>
                <div className="flex gap-6 pb-8">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-display text-xs font-bold text-primary-foreground shrink-0">
                      {m.year.slice(2)}
                    </div>
                    {i < milestones.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-2">
                    <p className="font-display text-sm font-bold text-foreground">{m.year}</p>
                    <p className="text-muted-foreground text-sm mt-1">{m.event}</p>
                  </div>
                </div>
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
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground text-balance">Core Values</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreValues.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 70}>
                <div className="bg-card rounded-2xl p-6 border border-border shadow-sm h-full">
                  <v.icon size={24} className="text-primary mb-3" />
                  <h3 className="font-display text-base font-semibold text-foreground mb-1.5">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-muted">
        <div className="container py-20 lg:py-28">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Leadership</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground text-balance">Meet Our Team</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {team.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 50}>
                <div className="bg-card rounded-2xl p-5 border border-border shadow-sm text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-3 font-display font-bold text-accent-foreground text-lg">
                    {t.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </div>
                  <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
                  {t.credentials && <p className="text-xs text-primary mt-0.5">{t.credentials}</p>}
                  <p className="text-xs text-muted-foreground mt-1">{t.role}</p>
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
              Let's Build Something Together
            </h2>
            <p className="text-white/60 max-w-lg mx-auto mb-8">
              Partner with a team that puts your success first.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-teal-dark transition-colors active:scale-[0.97]"
            >
              Get In Touch <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
