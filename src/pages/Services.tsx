import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import BlobBackground from "@/components/BlobBackground";
import { Link } from "react-router-dom";
import {
  Shield,
  Calculator,
  Briefcase,
  Building2,
  BookOpen,
  Handshake,
  Zap,
  ArrowRight,
  FileCheck,
  Search,
  Scale,
  Landmark,
  ClipboardList,
  BarChart3,
  Users,
  FileText,
  DollarSign,
  Package,
} from "lucide-react";

const serviceCategories = [
  {
    icon: Shield,
    title: "Audit & Assurance",
    desc: "Comprehensive audit services ensuring compliance and transparency.",
    items: [
      { icon: FileCheck, name: "External Audit" },
      { icon: Search, name: "Internal Audit" },
      { icon: Scale, name: "IFRS Advisory Services" },
      { icon: BarChart3, name: "Business Valuation" },
      { icon: Shield, name: "Forensic Audit & Fraud Investigation" },
      { icon: Landmark, name: "AML Compliance" },
      { icon: ClipboardList, name: "RERA Audit" },
    ],
  },
  {
    icon: Calculator,
    title: "Tax Consultancy",
    desc: "Expert tax advisory for direct and indirect tax matters in the UAE.",
    items: [
      { icon: Calculator, name: "UAE Corporate Tax" },
      { icon: Landmark, name: "International Taxation" },
      { icon: Scale, name: "Transfer Pricing" },
      { icon: DollarSign, name: "Value Added Tax (VAT)" },
      { icon: Package, name: "Excise Tax" },
      { icon: FileText, name: "Customs Services" },
    ],
  },
  {
    icon: Briefcase,
    title: "Business Advisory",
    desc: "Strategic advisory services to optimize and grow your business.",
    items: [
      { icon: BarChart3, name: "Market Research & Business Plans" },
      { icon: FileText, name: "Feasibility Studies" },
      { icon: DollarSign, name: "CFO Support Services" },
      { icon: Landmark, name: "Capital Raising Support" },
      { icon: ClipboardList, name: "Policy & Procedure Manuals" },
      { icon: Package, name: "Fixed Assets Tagging" },
      { icon: Users, name: "Human Resources Consulting" },
    ],
  },
  {
    icon: Building2,
    title: "Company Incorporations & Liquidations",
    desc: "End-to-end company formation, restructuring and liquidation support.",
    items: [
      { icon: Building2, name: "Company Incorporations" },
      { icon: Landmark, name: "Offshore Registered Agent – JAFZA" },
      { icon: FileCheck, name: "Company Liquidations Support" },
      { icon: Scale, name: "Corporate Restructuring" },
    ],
  },
  {
    icon: BookOpen,
    title: "Outsourced Accounting",
    desc: "Professional accounting and bookkeeping services tailored to your needs.",
    items: [
      { icon: BookOpen, name: "Full-cycle Bookkeeping" },
      { icon: FileText, name: "Financial Reporting" },
      { icon: BarChart3, name: "Management Accounting" },
    ],
  },
  {
    icon: Handshake,
    title: "M&A Consulting",
    desc: "Strategic merger and acquisition consulting for growth oriented businesses.",
    items: [
      { icon: Search, name: "Due Diligence" },
      { icon: Scale, name: "Deal Structuring" },
      { icon: BarChart3, name: "Valuation Advisory" },
    ],
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    desc: "Modernize your business operations with technology driven solutions.",
    items: [
      { icon: Zap, name: "Process Automation" },
      { icon: BarChart3, name: "ERP Implementation" },
      { icon: FileText, name: "Digital Strategy" },
      { icon: FileText, name: "E Commerce" },
      { icon: FileText, name: "Custom Software Development" },
    ],
  },
  {
    icon: Zap,
    title: "E commerce",
    desc: "Boost your sales potential with E commerce solutions.",
    items: [
      { icon: Zap, name: "Ecommerce Development" },
      { icon: BarChart3, name: "Amazon" },
      { icon: FileText, name: "Ebay" },
      { icon: FileText, name: "Noon" },
      { icon: FileText, name: "Etsy" },
      { icon: FileText, name: "Social Media Platforms" },
    ],
  },
  {
    icon: Zap,
    title: "ERP Solutions",
    desc: "Empower your business operations with ERP implementation, support and revamping.",
    items: [
      { icon: Zap, name: "ERP Customize Web Applications" },
      { icon: BarChart3, name: "SAP Business One" },
      { icon: FileText, name: "Odoo" },
      { icon: FileText, name: "Sage" },
      { icon: FileText, name: "QuickBooks" },
      { icon: FileText, name: "ZohoBooks" },  
      { icon: FileText, name: "Others" },
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <BlobBackground />
        <div className="container relative z-10 py-20 lg:py-28">
          <ScrollReveal>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Our Services</p>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight text-balance mb-5">
              Professional Services
              <br />Tailored For You
            </h1>
            <p className="text-white/60 max-w-xl text-lg leading-relaxed">
              From ERP, E Commerce, accounting, audit and tax to digital transformation, we provide comprehensive professional services to businesses across the UAE, Pakistan and the Gulf region.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-background">
        <div className="container py-20 lg:py-28 space-y-20">
          {serviceCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={0}>
              <div className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                {/* Info side */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <cat.icon size={36} className="text-primary mb-4" />
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">{cat.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{cat.desc}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Enquire About This Service <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Items grid */}
                <div className={`grid grid-cols-2 gap-3 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="bg-card rounded-xl p-4 border border-border hover:border-primary/20 hover:shadow-md transition-all duration-200 group"
                    >
                      <item.icon size={18} className="text-primary mb-2 group-hover:scale-110 transition-transform" />
                      <p className="text-sm font-medium text-foreground">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {i < serviceCategories.length - 1 && (
                <div className="border-t border-border mt-20" />
              )}
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted">
        <div className="container py-20 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4 text-balance">
              Need a Service Not Listed Here?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              We offer customized solutions. Get in touch and let's discuss your specific needs.
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
