import type { Metadata } from "next";
import { Award, CheckCircle, ShieldCheck, Zap } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are and how Technusoft works with clients.",
};

const values = [
  { icon: ShieldCheck, title: "Quality", desc: "Reviewed, tested, documented code with zero shortcuts." },
  { icon: CheckCircle, title: "Reliability", desc: "Clear milestones, daily transparency and on-time delivery." },
  { icon: Zap, title: "Performance", desc: "Fast, scalable, and ultra-secure architecture by default." },
  { icon: Award, title: "Partnership", desc: "Long-term engineering commitment and post-launch support." },
];

export default function About() {
  return (
    <div className="container-x py-12">
      <PageHeader
        eyebrow="About Technusoft"
        title="Our clients are our"
        highlight="partners."
        text="Technusoft is a software engineering company helping high-growth startups and global enterprises build scalable digital products with experienced developers and proven delivery frameworks."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Reveal>
          <TiltCard tiltIntensity={8} className="p-8">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">Core Purpose</span>
            <h2 className="mt-2 font-display text-2xl font-bold">Our Mission</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Deliver innovative technology that automates complex processes, empowers human potential, and allows modern businesses to outpace the competition.
            </p>
          </TiltCard>
        </Reveal>

        <Reveal delay={0.1}>
          <TiltCard tiltIntensity={8} className="p-8">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">Future Outlook</span>
            <h2 className="mt-2 font-display text-2xl font-bold">Our Vision</h2>
            <p className="mt-3 leading-relaxed text-muted">
              To be the world&apos;s most dependable engineering partner, renowned for technical excellence, creative problem-solving, and client success.
            </p>
          </TiltCard>
        </Reveal>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => {
          const Icon = v.icon;
          return (
            <Reveal key={v.title} delay={i * 0.06}>
              <TiltCard tiltIntensity={12} className="group p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-accent/15 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold transition-colors group-hover:text-accent">
                  {v.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted">{v.desc}</p>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.05}>
            <TiltCard tiltIntensity={10} className="p-6 text-center">
              <b className="block font-display text-4xl text-accent">{s.value}</b>
              <span className="mt-1 block text-sm font-medium text-muted">{s.label}</span>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
