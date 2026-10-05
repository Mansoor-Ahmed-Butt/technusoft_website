import { Reveal } from "./Reveal";

export function PageHeader({ eyebrow, title, highlight, text }: { eyebrow: string; title: string; highlight: string; text?: string }) {
  return (
    <Reveal>
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="my-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">{title} <span className="grad-text">{highlight}</span></h1>
      {text && <p className="max-w-xl text-lg text-muted">{text}</p>}
    </Reveal>
  );
}
