"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/data";
import { Reveal } from "./Reveal";
import { TiltCard } from "./ui/TiltCard";

const cats = ["All", "Web", "Mobile"];

export function PortfolioGrid() {
  const [f, setF] = useState("All");
  const list = projects.filter((p) => f === "All" || p.cat === f);

  return (
    <>
      {/* Category filters */}
      <div className="mt-8 flex flex-wrap gap-2.5" role="group" aria-label="Filter projects">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setF(c)}
            aria-pressed={f === c}
            className={cn(
              "relative min-h-11 rounded-full px-6 text-sm font-semibold transition-all duration-300",
              f === c
                ? "bg-gradient-to-r from-accent to-accent2 text-white shadow-lg shadow-accent/25"
                : "border border-[var(--stroke)] bg-[var(--glass2)] text-muted hover:bg-[var(--glass)] hover:text-fg"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid of 3D Moveable Project Cards */}
      <div className="mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.div
              key={p.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="h-full"
            >
              <TiltCard tiltIntensity={11} className="group flex h-full flex-col justify-between overflow-hidden">
                <div>
                  {/* Decorative Banner with floating 3D orb */}
                  <div
                    className="relative h-48 w-full overflow-hidden transition-transform duration-500 group-hover:scale-105"
                    style={{ background: `linear-gradient(135deg, ${p.g})` }}
                  >
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
                    {/* Floating 3D glassy orb */}
                    <div
                      className="absolute right-6 top-6 size-24 rounded-full border border-white/40 bg-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-125 group-hover:-translate-y-2"
                      style={{
                        backgroundImage: "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.7), transparent 50%)",
                      }}
                    />
                    <div className="absolute bottom-4 left-5 flex items-center gap-2">
                      <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                        {p.cat}
                      </span>
                      <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                        {p.sector}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-display text-xl font-bold transition-colors group-hover:text-accent">
                          {p.name}
                        </h3>
                        <p className="mt-1 text-sm text-muted">{p.text}</p>
                      </div>
                      <span className="grid size-9 place-items-center rounded-full border border-[var(--stroke)] bg-[var(--glass2)] text-muted transition-colors group-hover:border-accent group-hover:text-accent">
                        <ExternalLink size={15} />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 border-t border-[var(--stroke)]/50 pt-4">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--stroke)] bg-[var(--glass2)] px-3 py-1 text-xs font-medium text-fg/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
