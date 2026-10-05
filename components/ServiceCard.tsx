import { Bot, Cloud, Code2, Globe, PenTool, ShieldCheck, Smartphone, Users, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import type { Service } from "@/lib/data";

const icons: Record<string, LucideIcon> = { globe: Globe, phone: Smartphone, code: Code2, pen: PenTool, cloud: Cloud, bot: Bot, shield: ShieldCheck, users: Users };

export function ServiceCard({ s, i = 0 }: { s: Service; i?: number }) {
  const Icon = icons[s.icon] ?? Globe;
  return (
    <Reveal delay={(i % 3) * 0.08} className="h-full">
      <article className="glass h-full p-7 transition hover:-translate-y-1.5">
        <div className="mb-4 grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent2 text-[var(--bt)] shadow-lg"><Icon size={26} aria-hidden /></div>
        <h3 className="font-display text-xl font-bold">{s.title}</h3>
        <p className="mb-2 mt-1 text-sm font-semibold text-accent">{s.tagline}</p>
        <p className="mb-4 text-muted">{s.desc}</p>
        <div className="flex flex-wrap gap-2">{s.tags.map((t) => <span key={t} className="rounded-full border border-[var(--stroke)] bg-[var(--glass2)] px-3 py-1 text-sm">{t}</span>)}</div>
      </article>
    </Reveal>
  );
}
