import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = { title: "Contact", description: "Tell us about your project and get a plan and estimate." };

export default function Contact() {
  return (
    <div className="container-x py-12">
      <PageHeader eyebrow="Contact us" title="We are" highlight="all ears." />
      <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
        <ContactForm />
        <div className="grid gap-6">
          {[["Email", "contact@technusoft.com"], ["Call / WhatsApp", "+00 000 000 0000"], ["Office", "Your address, City, Country"]].map(([t, v]) => (
            <div key={t} className="glass p-6"><h3 className="font-display text-lg font-bold">{t}</h3><p className="text-muted">{v}</p></div>
          ))}
        </div>
      </div>
    </div>
  );
}
