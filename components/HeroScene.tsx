"use client";
import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false, loading: () => <div className="size-full" /> });

export function HeroScene() {
  return <div className="h-[380px] w-full md:h-[540px]"><Hero3D /></div>;
}
