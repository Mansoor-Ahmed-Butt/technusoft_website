import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { TechTabs } from "@/components/TechTabs";

export const metadata: Metadata = { title: "Technologies", description: "The technology stack Technusoft uses to build products." };

export default function Technologies() {
  return (
    <div className="container-x py-12">
      <PageHeader eyebrow="Technologies" title="Cutting-edge" highlight="stack." text="We pick the right tool for the job: proven, maintainable and scalable." />
      <TechTabs />
    </div>
  );
}
