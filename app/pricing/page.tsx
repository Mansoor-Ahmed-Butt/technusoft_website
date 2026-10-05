import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { pricing } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Pricing", description: "Flexible engagement models: fixed price, time and material, dedicated team." };

export default function Pricing() {
  return (
    <div className="container-x py-12">
      <PageHeader eyebrow="Pricing models" title="Flexible ways to" highlight="work together." />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {pricing.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08} className="h-full">
            <div className={cn("glass flex h-full flex-col p-8", p.hot && "ring-2 ring-accent")}>
              <h2 className="font-display text-2xl font-bold">{p.name}</h2>
              <p className="mt-2 text-muted">{p.text}</p>
              <ul className="my-5 list-disc space-y-1 pl-5 text-muted">{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
              <Button asChild variant={p.hot ? "primary" : "glass"} className="mt-auto"><Link href="/contact">Get a quote</Link></Button>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
