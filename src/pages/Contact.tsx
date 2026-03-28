import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import BlobBackground from "@/components/BlobBackground";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+971 4 354 2959", href: "tel:+97143542959" },
  { icon: Mail, label: "Email", value: "info@fgconsultant.com", href: "mailto:info@fgconsultant.com" },
  { icon: MapPin, label: "Address", value: "Office 805, Exchange Tower, Business Bay, Dubai, UAE", href: "#" },
  { icon: Clock, label: "Working Hours", value: "Sun – Thu: 9:00 AM – 6:00 PM", href: "#" },
];

const offices = [
  { country: "UAE (Head Office)", city: "Dubai", address: "Office 805, Exchange Tower, Business Bay" },
  { country: "Kuwait", city: "Kuwait City", address: "Regional Office" },
  { country: "Bahrain", city: "Manama", address: "Regional Office" },
  { country: "Pakistan", city: "Lahore", address: "Regional Office" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you shortly.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <BlobBackground />
        <div className="container relative z-10 py-20 lg:py-28">
          <ScrollReveal>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Contact Us</p>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight text-balance mb-5">
              Let's Start a
              <br />Conversation
            </h1>
            <p className="text-white/60 max-w-xl text-lg leading-relaxed">
              Have a question or need professional advice? We're here to help your business succeed.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-background">
        <div className="container py-20 lg:py-28">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                      <input
                        type="text"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                      placeholder="Tell us more about your requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-teal-dark transition-colors active:scale-[0.97]"
                  >
                    <Send size={16} /> Send Message
                  </button>
                </form>
              </ScrollReveal>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={150}>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
                <div className="space-y-5">
                  {contactInfo.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-sm transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                        <c.icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">{c.label}</p>
                        <p className="text-sm font-medium text-foreground mt-0.5">{c.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="bg-muted">
        <div className="container py-20 lg:py-28">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Our Presence</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground text-balance">Regional Offices</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {offices.map((o, i) => (
              <ScrollReveal key={o.country} delay={i * 80}>
                <div className="bg-card rounded-2xl p-6 border border-border shadow-sm h-full">
                  <MapPin size={20} className="text-primary mb-3" />
                  <h3 className="font-display text-base font-semibold text-foreground mb-1">{o.country}</h3>
                  <p className="text-sm text-muted-foreground">{o.city}</p>
                  <p className="text-xs text-muted-foreground mt-1">{o.address}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-background">
        <div className="container py-12">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1785!2d55.2644!3d25.1885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzE4LjYiTiA1NcKwMTUnNTEuOCJF!5e0!3m2!1sen!2sae!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FG Consultant Office Location"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
