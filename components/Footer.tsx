import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { Logo } from "./Navbar";

const navLinks = [
  { label: "Company", links: [["/about", "About Us"], ["/portfolio", "Portfolio"], ["/pricing", "Pricing Models"]] },
  { label: "Services", links: [["/services", "Web Development"], ["/services", "Mobile Apps"], ["/services", "AI & Data"]] },
  { label: "Contact", links: [["/contact", "Contact Form"], ["mailto:contact@technusoft.com", "Email Us"], ["/about", "Our Team"]] },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--stroke)]">
      <div className="container-x py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Premium software engineering for ambitious startups and global enterprises.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="mailto:contact@technusoft.com"
                className="grid size-9 place-items-center rounded-full border border-[var(--stroke)] bg-[var(--glass2)] text-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {navLinks.map(({ label, links }) => (
            <div key={label}>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-accent">{label}</h4>
              <ul className="space-y-2">
                {links.map(([href, text]) => (
                  <li key={text}>
                    <Link
                      href={href}
                      className="group flex items-center gap-1 text-sm text-muted transition-colors hover:text-fg"
                    >
                      <ArrowUpRight size={13} className="opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--stroke)]">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-muted sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Technusoft &middot; All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with{" "}
            <span className="font-semibold text-accent">Next.js & Three.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
