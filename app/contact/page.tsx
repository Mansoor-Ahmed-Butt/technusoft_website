import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us about your project and get a plan and estimate within 24 hours.",
};

const contactInfo = [
  { icon: Mail, label: "Email", value: "contact@technusoft.com", href: "mailto:contact@technusoft.com" },
  { icon: Phone, label: "Call / WhatsApp", value: "+00 000 000 0000", href: "tel:+00000000000" },
  { icon: MapPin, label: "Office", value: "Your address, City, Country", href: "#" },
];

export default function Contact() {
  return (
    <div className="container-x py-12">
      <PageHeader
        eyebrow="Contact us"
        title="We are"
        highlight="all ears."
        text="Tell us about your project. We respond to every enquiry within one business day."
      />
      <div className="mt-12 grid items-start gap-7 lg:grid-cols-2">
        <ContactForm />
        <div className="grid gap-5">
          {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
            <Reveal key={label} delay={i * 0.07}>
              <TiltCard tiltIntensity={8} className="group p-6">
                <div className="flex items-start gap-4">
                  <span className="grid size-11 place-items-center rounded-xl bg-accent/15 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-display font-bold">{label}</h3>
                    <a href={href} className="text-muted transition-colors hover:text-accent">
                      {value}
                    </a>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}

          {/* Response time promise card */}
          <Reveal delay={0.25}>
            <TiltCard tiltIntensity={6} className="p-6 text-center">
              <div className="font-display text-3xl font-extrabold text-accent">&lt; 24h</div>
              <p className="mt-1 text-sm font-medium text-muted">Average response time</p>
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted">
                <span className="inline-block size-2 rounded-full bg-emerald-500" />
                Available weekdays 9am – 6pm PKT
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
