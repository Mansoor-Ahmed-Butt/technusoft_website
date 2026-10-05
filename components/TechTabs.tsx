"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { techs } from "@/lib/data";

export function TechTabs() {
  const keys = Object.keys(techs);
  const [k, setK] = useState(keys[0]);
  return (
    <>
      <div className="mt-6 flex flex-wrap gap-3" role="tablist">
        {keys.map((x) => (
          <button key={x} role="tab" aria-selected={k === x} onClick={() => setK(x)} className={cn("min-h-11 rounded-full border border-[var(--stroke)] px-5 font-medium", k === x ? "bg-gradient-to-br from-accent to-accent2 text-[var(--bt)]" : "bg-[var(--glass2)]")}>{x}</button>
        ))}
      </div>
      <motion.div key={k} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {techs[k].map((t) => <div key={t} className="glass p-5 text-center font-semibold">{t}</div>)}
      </motion.div>
    </>
  );
}
