"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  ["/", "Home"], ["/about", "About"], ["/services", "Services"], ["/portfolio", "Portfolio"],
  ["/technologies", "Technologies"], ["/pricing", "Pricing"], ["/contact", "Contact"],
];

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold">
      <i className="block size-4 rotate-45 rounded-[5px] bg-gradient-to-br from-accent to-accent3" />
      Technu<span className="text-accent">soft</span>
    </Link>
  );
}

export function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-3 z-50 pt-3">
      <div className="container-x">
        <nav aria-label="Main" className="glass relative flex items-center justify-between !rounded-full py-2 pl-5 pr-3">
          <Logo />
          <div className="hidden items-center gap-1 lg:flex">
            {links.map(([href, label]) => (
              <Link key={href} href={href} className={cn("flex min-h-11 items-center rounded-full px-4 font-medium text-muted transition hover:bg-[var(--glass2)] hover:text-fg", path === href && "bg-[var(--glass2)] text-fg")}>
                {label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button className="glass grid size-11 place-items-center !rounded-full lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          <AnimatePresence>
            {open && (
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="glass absolute inset-x-0 top-[calc(100%+8px)] flex flex-col p-3 lg:hidden" style={{ background: "var(--bg)" }}>
                {links.map(([href, label]) => (
                  <Link key={href} href={href} onClick={() => setOpen(false)} className="flex min-h-12 items-center rounded-2xl px-4 font-medium hover:bg-[var(--glass2)]">{label}</Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
