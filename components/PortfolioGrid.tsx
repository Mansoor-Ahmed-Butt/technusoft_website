"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/data";
import { Reveal } from "./Reveal";

const cats = ["All", "Web", "Mobile"];

export function PortfolioGrid() {
  const [f, setF] = useState("All");
  const list = projects.filter((p) => f === "All" || p.cat === f);
  return (
    <>
      <div className="mt-6 flex flex-wrap gap-3" role="group" aria-label="Filter projects">
        {cats.map((c) => (
          <button key={c} onClick={() => setF(c)} aria-pressed={f === c} className={cn("min-h-11 rounded-full border border-[var(--stroke)] px-5 font-medium", f === c ? "bg-gradient-to-br from-accent to-accent2 text-[var(--bt)]" : "bg-[var(--glass2)]")}>{c}</button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
            <article className="glass overflow-hidden">
              <div className="relative h-44" style={{ background: `linear-gradient(135deg,${p.g})` }}>
                <span className="absolute right-6 top-8 size-24 rounded-full border border-white/50 bg-white/25" style={{ backgroundImage: "radial-gradient(circle at 30% 25%,rgba(255,255,255,.6),transparent 40%)" }} />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-accent">{p.sector}</p>
                <h3 className="font-display text-xl font-bold">{p.name}</h3>
                <p className="mb-3 text-muted">{p.text}</p>
                <div className="flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="rounded-full border border-[var(--stroke)] bg-[var(--glass2)] px-3 py-1 text-sm">{t}</span>)}</div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}
