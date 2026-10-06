"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { techs } from "@/lib/data";
import { TiltCard } from "./ui/TiltCard";

export function TechTabs() {
  const keys = Object.keys(techs);
  const [k, setK] = useState(keys[0]);

  return (
    <div className="mt-8">
      {/* Category Pills */}
      <div className="flex flex-wrap gap-2.5" role="tablist">
        {keys.map((x) => (
          <button
            key={x}
            role="tab"
            aria-selected={k === x}
            onClick={() => setK(x)}
            className={cn(
              "relative min-h-11 rounded-full px-5 text-sm font-semibold transition-all duration-300",
              k === x
                ? "bg-gradient-to-r from-accent to-accent2 text-white shadow-lg shadow-accent/25"
                : "border border-[var(--stroke)] bg-[var(--glass2)] text-muted hover:bg-[var(--glass)] hover:text-fg"
            )}
          >
            {x}
          </button>
        ))}
      </div>

      {/* Interactive 3D Tech Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={k}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4"
        >
          {techs[k].map((t, index) => (
            <TiltCard
              key={t}
              tiltIntensity={14}
              className="group flex flex-col justify-between p-5 transition-all duration-300 hover:border-accent/50"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-8 place-items-center rounded-xl bg-accent/15 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Terminal size={15} />
                </span>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-muted/70 group-hover:text-accent transition-colors">
                  <Sparkles size={11} />
                  Tier 1
                </span>
              </div>
              <div className="mt-4">
                <h4 className="font-display text-lg font-bold transition-colors group-hover:text-accent">
                  {t}
                </h4>
                <p className="mt-0.5 text-xs text-muted">Production-ready</p>
              </div>
            </TiltCard>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
