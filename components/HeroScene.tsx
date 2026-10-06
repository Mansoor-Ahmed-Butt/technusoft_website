"use client";

import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
  loading: () => (
    <div className="flex size-full items-center justify-center">
      <div className="relative flex size-40 items-center justify-center">
        <div className="absolute size-32 animate-ping rounded-full bg-cyan-500/20 duration-1000" />
        <div className="size-20 rounded-2xl border border-cyan-400/40 bg-cyan-500/10 backdrop-blur-md animate-pulse" />
      </div>
    </div>
  ),
});

export function HeroScene() {
  return (
    <div className="relative h-[420px] w-full md:h-[580px]">
      {/* Soft radial backdrop aura for enhanced 3D contrast */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="size-[320px] rounded-full bg-gradient-to-tr from-cyan-500/15 via-purple-500/10 to-transparent blur-3xl md:size-[460px]" />
      </div>
      <Hero3D />
    </div>
  );
}
