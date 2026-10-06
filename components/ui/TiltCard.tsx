"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  tiltIntensity?: number; // How much it tilts (default 12)
  glareEffect?: boolean;
}

export function TiltCard({
  children,
  className,
  tiltIntensity = 10,
  glareEffect = true,
  ...props
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  // Spring physics for buttery smooth motion
  const x = useSpring(0, { stiffness: 260, damping: 25 });
  const y = useSpring(0, { stiffness: 260, damping: 25 });

  const rotateX = useTransform(y, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);

    if (glareEffect) {
      setGlarePos({
        x: (mouseX / rect.width) * 100,
        y: (mouseY / rect.height) * 100,
        opacity: 0.22,
      });
    }
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  }

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "glass relative h-full overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:border-cyan-400/40",
          className
        )}
        {...(props as any)}
      >
        {/* Dynamic Holographic Glare that follows the cursor */}
        {glareEffect && (
          <div
            className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
            style={{
              opacity: glarePos.opacity,
              background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.35), transparent 70%)`,
            }}
          />
        )}
        <div style={{ transform: "translateZ(10px)" }} className="relative z-0 h-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
