import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { stats } from "@/lib/data";

export const metadata: Metadata = { title: "About", description: "Who we are and how Technusoft works with clients." };

const values = [["Quality", "Reviewed, tested, documented code."], ["Reliability", "Clear milestones and on-time delivery."], ["Performance", "Fast, scalable, secure by default."], ["Partnership", "Long-term support after launch."]];

export default function About() {
  return (
    <div className="container-x py-12">
      <PageHeader eyebrow="About Technusoft" title="Our clients are our" highlight="partners." text="Technusoft is a software development company helping businesses, startups and enterprises build reliable digital products with experienced engineers, modern tooling and a process built on trust." />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Reveal><div className="glass h-full p-8"><h2 className="font-display text-2xl font-bold">Our mission</h2><p className="mt-2 text-muted">Deliver technology that automates work, connects people and lets businesses thrive in a digital world.</p></div></Reveal>
        <Reveal delay={0.1}><div className="glass h-full p-8"><h2 className="font-display text-2xl font-bold">Our vision</h2><p className="mt-2 text-muted">To become a trusted global engineering partner known for software excellence.</p></div></Reveal>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map(([t, d], i) => <Reveal key={t} delay={i * 0.06}><div className="glass h-full p-6"><h3 className="font-display text-lg font-bold">{t}</h3><p className="text-muted">{d}</p></div></Reveal>)}
      </div>
      <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {stats.map((s) => <div key={s.label} className="glass p-6 text-center"><b className="block font-display text-4xl text-accent">{s.value}</b><span className="text-muted">{s.label}</span></div>)}
      </div>
    </div>
  );
}
