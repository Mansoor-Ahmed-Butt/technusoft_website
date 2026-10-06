import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroScene } from "@/components/HeroScene";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { TiltCard } from "@/components/ui/TiltCard";
import { Magnetic } from "@/components/Magnetic";
import { industries, services, stats, steps } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container-x grid min-h-[calc(100vh-100px)] items-center gap-8 py-10 lg:grid-cols-12">
        <div className="lg:col-span-6 xl:col-span-6">
          <Reveal>
            <span className="glass inline-flex items-center gap-2.5 !rounded-full px-4 py-1.5 text-xs font-semibold text-muted shadow-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Top-Tier Software House: Web, Mobile & AI
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="my-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-6xl">
              We engineer <span className="grad-text">digital products</span> that scale and win.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Technusoft designs and builds custom web platforms, native mobile applications, and enterprise AI systems for ambitious startups and industry leaders.
            </p>
          </Reveal>

          {/* Interactive Magnetic CTA buttons */}
          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Magnetic>
                <Button asChild className="shadow-xl shadow-accent/20">
                  <Link href="/contact" className="flex items-center gap-2">
                    Request a free consultation
                    <ArrowRight size={17} />
                  </Link>
                </Button>
              </Magnetic>

              <Magnetic>
                <Button asChild variant="glass">
                  <Link href="/portfolio">View our work</Link>
                </Button>
              </Magnetic>
            </div>
          </Reveal>

          {/* Feature trust highlights */}
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-[var(--stroke)]/60 pt-6 text-xs font-medium text-muted">
              <span className="flex items-center gap-1.5">
                <Zap size={14} className="text-accent" />
                Ultra-fast Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-500" />
                Tested Clean Code
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-purple-400" />
                Enterprise Security
              </span>
            </div>
          </Reveal>
        </div>

        {/* 3D Interactive Hero Canvas */}
        <div className="relative lg:col-span-6 xl:col-span-6">
          <HeroScene />
        </div>
      </section>

      {/* Moveable Stats Section with 3D Tilt */}
      <section className="container-x grid grid-cols-2 gap-4 py-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.07}>
            <TiltCard tiltIntensity={10} className="p-6 text-center">
              <b className="block font-display text-3xl font-extrabold text-accent sm:text-4xl">
                {s.value}
              </b>
              <span className="mt-1 block text-xs font-medium text-muted sm:text-sm">
                {s.label}
              </span>
            </TiltCard>
          </Reveal>
        ))}
      </section>

      {/* Services Portfolio with Moveable 3D Cards */}
      <section className="container-x py-20">
        <Reveal>
          <span className="eyebrow">Service portfolio</span>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Tailored digital solutions, end to end.
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            From modern web applications to complex cloud architectures, we engineer software that drives real business metrics.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Magnetic>
            <Button asChild variant="glass">
              <Link href="/services" className="flex items-center gap-2">
                Explore all services
                <ArrowRight size={16} />
              </Link>
            </Button>
          </Magnetic>
        </div>
      </section>

      {/* Interactive Industries */}
      <section className="container-x py-14">
        <Reveal>
          <span className="eyebrow">Domain Expertise</span>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Transforming businesses across sectors.
          </h2>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-3">
          {industries.map((x, idx) => (
            <Reveal key={x} delay={idx * 0.04}>
              <TiltCard tiltIntensity={8} className="!rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-105">
                {x}
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How We Work: 4-Step Agile Delivery */}
      <section className="container-x py-20">
        <Reveal>
          <span className="eyebrow">Agile delivery</span>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Simple, transparent, fast.
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            A battle-tested 4-step engineering process designed for rapid iteration and zero surprises.
          </p>
        </Reveal>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <TiltCard tiltIntensity={12} className="group flex h-full flex-col justify-between p-7">
                <div>
                  <span className="font-display text-3xl font-extrabold text-accent transition-transform duration-300 group-hover:scale-110 inline-block">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                </div>
                <div className="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-accent to-accent2 transition-all duration-300 group-hover:w-full" />
              </TiltCard>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Interactive Bottom CTA with Magnetic Button */}
      <section className="container-x py-16">
        <Reveal>
          <TiltCard tiltIntensity={6} className="relative overflow-hidden p-10 text-center sm:p-14">
            <div className="pointer-events-none absolute -left-20 -top-20 size-60 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 size-60 rounded-full bg-purple-500/10 blur-3xl" />

            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
              Have an idea? <span className="grad-text">Let&apos;s build it.</span>
            </h2>
            <p className="mx-auto mb-8 mt-4 max-w-lg text-base text-muted sm:text-lg">
              Share your project vision and get an architecture plan and transparent estimate within 24 hours.
            </p>
            <Magnetic className="inline-block">
              <Button asChild className="shadow-2xl shadow-accent/25">
                <Link href="/contact" className="flex items-center gap-2">
                  Let&apos;s connect
                  <ArrowRight size={17} />
                </Link>
              </Button>
            </Magnetic>
          </TiltCard>
        </Reveal>
      </section>
    </>
  );
}
