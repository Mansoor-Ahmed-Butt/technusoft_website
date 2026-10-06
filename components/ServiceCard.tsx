"use client";

import {
  Bot,
  Cloud,
  Code2,
  Globe,
  PenTool,
  ShieldCheck,
  Smartphone,
  Users,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { TiltCard } from "./ui/TiltCard";
import type { Service } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  globe: Globe,
  phone: Smartphone,
  code: Code2,
  pen: PenTool,
  cloud: Cloud,
  bot: Bot,
  shield: ShieldCheck,
  users: Users,
};

export function ServiceCard({ s, i = 0 }: { s: Service; i?: number }) {
  const Icon = icons[s.icon] ?? Globe;
  return (
    <Reveal delay={(i % 3) * 0.08} className="h-full">
      <TiltCard tiltIntensity={12} className="group h-full p-7 flex flex-col justify-between">
        <div>
          {/* Top row with 3D icon and arrow indicator */}
          <div className="mb-5 flex items-center justify-between">
            <div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent2 text-white shadow-lg shadow-accent/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <Icon size={26} aria-hidden />
            </div>
            <span className="flex size-9 items-center justify-center rounded-full border border-[var(--stroke)] bg-[var(--glass2)] text-muted transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </div>

          <h3 className="font-display text-xl font-bold transition-colors duration-300 group-hover:text-accent">
            {s.title}
          </h3>
          <p className="mb-2 mt-1 text-sm font-semibold text-accent/90">{s.tagline}</p>
          <p className="mb-5 text-sm leading-relaxed text-muted">{s.desc}</p>
        </div>

        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-1.5 border-t border-[var(--stroke)]/50 pt-4">
          {s.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--stroke)] bg-[var(--glass2)] px-2.5 py-1 text-xs font-medium text-fg/80 transition-colors hover:border-accent hover:text-accent"
            >
              {t}
            </span>
          ))}
        </div>
      </TiltCard>
    </Reveal>
  );
}
