import type { Metadata } from "next";
import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { pricing } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Flexible engagement models: fixed price, time and material, dedicated team.",
};

export default function Pricing() {
  return (
    <div className="container-x py-12">
      <PageHeader
        eyebrow="Pricing models"
        title="Flexible ways to"
        highlight="collaborate."
        text="Choose the engagement model that best fits your project scope, speed, and budget."
      />
      <div className="mt-12 grid gap-7 lg:grid-cols-3">
        {pricing.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08} className="h-full">
            <TiltCard
              tiltIntensity={12}
              className={cn(
                "relative flex h-full flex-col justify-between p-8",
                p.hot && "border-accent/60 shadow-xl shadow-accent/10"
              )}
            >
              {p.hot && (
                <div className="absolute -top-3.5 right-6 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent to-accent2 px-3.5 py-1 text-xs font-bold text-white shadow-md">
                  <Sparkles size={12} />
                  Most Popular
                </div>
              )}

              <div>
                <h2 className="font-display text-2xl font-bold">{p.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>

                <div className="my-6 border-t border-[var(--stroke)]/60 pt-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">Key Highlights</span>
                  <ul className="mt-4 space-y-3">
                    {p.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-sm text-fg/90">
                        <span className="grid size-5 place-items-center rounded-full bg-accent/15 text-accent">
                          <Check size={13} strokeWidth={2.5} />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild variant={p.hot ? "primary" : "glass"} className="w-full">
                  <Link href="/contact">Get a free proposal</Link>
                </Button>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
