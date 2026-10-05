import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroScene } from "@/components/HeroScene";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { industries, services, stats, steps } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="container-x grid min-h-[calc(100vh-110px)] items-center gap-4 py-8 md:grid-cols-2">
        <div>
          <span className="glass inline-flex items-center gap-2 !rounded-full px-4 py-1.5 text-sm text-muted"><b className="size-2 rounded-full bg-green-500" />Software house: web, mobile and AI</span>
          <h1 className="my-4 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">We engineer <span className="grad-text">digital products</span> that move your business forward.</h1>
          <p className="max-w-xl text-lg text-muted">Technusoft designs and builds custom software, websites and mobile apps for startups and enterprises, with clean architecture, honest communication and on-time delivery.</p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Button asChild><Link href="/contact">Request a free consultation</Link></Button>
            <Button asChild variant="glass"><Link href="/portfolio">View our work</Link></Button>
          </div>
        </div>
        <HeroScene />
      </section>

      <section className="container-x grid grid-cols-2 gap-5 py-6 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="glass p-6 text-center"><b className="block font-display text-4xl text-accent">{s.value}</b><span className="text-muted">{s.label}</span></div>
          </Reveal>
        ))}
      </section>

      <section className="container-x py-20">
        <Reveal><span className="eyebrow">Service portfolio</span><h2 className="mt-2 font-display text-3xl font-bold sm:text-5xl">Tailored IT solutions, end to end.</h2></Reveal>
        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{services.slice(0, 6).map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}</div>
        <div className="mt-8"><Button asChild variant="glass"><Link href="/services">Explore all services</Link></Button></div>
      </section>

      <section className="container-x py-12">
        <Reveal><span className="eyebrow">Industries</span><h2 className="mt-2 font-display text-3xl font-bold sm:text-5xl">Transforming businesses across sectors.</h2></Reveal>
        <Reveal className="mt-8 flex flex-wrap gap-3">{industries.map((x) => <span key={x} className="glass !rounded-full px-5 py-3">{x}</span>)}</Reveal>
      </section>

      <section className="container-x py-20">
        <Reveal><span className="eyebrow">How we work</span><h2 className="mt-2 font-display text-3xl font-bold sm:text-5xl">Simple, transparent, fast.</h2></Reveal>
        <ol className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <li className="glass list-none p-6"><span className="font-display text-3xl font-bold text-accent">0{i + 1}</span><h3 className="font-display text-xl font-bold">{s.title}</h3><p className="mt-1 text-muted">{s.text}</p></li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="container-x py-12">
        <Reveal><div className="glass p-10 text-center"><h2 className="font-display text-3xl font-bold sm:text-4xl">Have an idea? Let&apos;s build it.</h2><p className="mx-auto mb-6 mt-3 max-w-lg text-muted">Tell us what you need and get a plan and estimate within 24 hours.</p><Button asChild><Link href="/contact">Let&apos;s connect</Link></Button></div></Reveal>
      </section>
    </>
  );
}
