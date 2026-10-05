import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/data";

export const metadata: Metadata = { title: "Services", description: "Web, mobile, custom software, design, cloud, AI, QA and outsourcing services." };

export default function Services() {
  return (
    <div className="container-x py-12">
      <PageHeader eyebrow="Services" title="Everything you need to" highlight="ship." text="From first sketch to production support, our team covers the full product lifecycle." />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{services.map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}</div>
    </div>
  );
}
