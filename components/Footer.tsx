import Link from "next/link";
import { Logo } from "./Navbar";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--stroke)] py-12">
      <div className="container-x grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div><Logo /><p className="mt-3 text-muted">Custom software, web and mobile development for ambitious businesses.</p></div>
        <div><h4 className="mb-3 font-display font-bold">Company</h4>{[["/about", "About"], ["/portfolio", "Portfolio"], ["/pricing", "Pricing"]].map(([h, l]) => <Link key={h} href={h} className="block py-1 text-muted hover:text-fg">{l}</Link>)}</div>
        <div><h4 className="mb-3 font-display font-bold">Services</h4>{["Web Development", "Mobile Apps", "Custom Software"].map((l) => <Link key={l} href="/services" className="block py-1 text-muted hover:text-fg">{l}</Link>)}</div>
        <div><h4 className="mb-3 font-display font-bold">Get in touch</h4><a href="mailto:contact@technusoft.com" className="block py-1 text-muted hover:text-fg">contact@technusoft.com</a><Link href="/contact" className="block py-1 text-muted hover:text-fg">Contact form</Link></div>
      </div>
      <p className="mt-8 text-center text-sm text-muted">&copy; {new Date().getFullYear()} Technusoft &middot; technusoft.com</p>
    </footer>
  );
}
