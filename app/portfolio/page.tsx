import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PortfolioGrid } from "@/components/PortfolioGrid";

export const metadata: Metadata = { title: "Portfolio", description: "Selected web and mobile projects by Technusoft." };

export default function Portfolio() {
  return (
    <div className="container-x py-12">
      <PageHeader eyebrow="Portfolio" title="Work that" highlight="speaks." text="A selection of sample projects. Replace these with your real case studies in lib/data.ts." />
      <PortfolioGrid />
    </div>
  );
}
