"use client";

import { useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, RoundedBox } from "@react-three/drei";

export type ColorTheme = "cyber" | "violet" | "emerald";

export const THEMES: Record<
  ColorTheme,
  {
    name: string;
    crystal: string;
    core: string;
    wire: string;
    ring1: string;
    ring2: string;
    accent1: string;
    accent2: string;
    particle: string;
    badgeBg: string;
  }
> = {
  cyber: {
    name: "Cyber Cyan",
    crystal: "#e0f2fe",
    core: "#00d4ff",
    wire: "#38bdf8",
    ring1: "#818cf8",
    ring2: "#06b6d4",
    accent1: "#38bdf8",
    accent2: "#d946ef",
    particle: "#38bdf8",
    badgeBg: "from-cyan-500 to-blue-600",
  },
  violet: {
    name: "Electric Violet",
    crystal: "#f5d0fe",
    core: "#c084fc",
    wire: "#e879f9",
    ring1: "#ec4899",
    ring2: "#a855f7",
    accent1: "#c084fc",
    accent2: "#38bdf8",
    particle: "#e879f9",
    badgeBg: "from-purple-500 to-pink-600",
  },
  emerald: {
    name: "Hyper Emerald",
    crystal: "#d1fae5",
    core: "#34d399",
    wire: "#6ee7b7",
    ring1: "#06b6d4",
    ring2: "#10b981",
    accent1: "#34d399",
    accent2: "#38bdf8",
    particle: "#6ee7b7",
    badgeBg: "from-emerald-500 to-teal-600",
  },
};

// 1. Centerpiece: Prismatic Holographic Crystal + Pulsing Energy Star + Cyber Matrix
function QuantumCrystal({ theme, pulseIntensity }: { theme: ColorTheme; pulseIntensity: number }) {
  const crystalRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const cageRef = useRef<THREE.Mesh>(null);
  const t = THEMES[theme];

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    if (crystalRef.current) {
      crystalRef.current.rotation.x = Math.sin(time * 0.4) * 0.2;
      crystalRef.current.rotation.y += delta * 0.35;
    }
    if (cageRef.current) {
      cageRef.current.rotation.y -= delta * 0.5;
      cageRef.current.rotation.z += delta * 0.3;
    }
    if (coreRef.current) {
      const pulse = 1 + Math.sin(time * 3.5) * 0.15 + pulseIntensity * 0.45;
      coreRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <group ref={crystalRef}>
      {/* Outer Faceted Glass Crystal Shell */}
      <RoundedBox args={[1.35, 1.35, 1.35]} radius={0.22} smoothness={5}>
        <meshPhysicalMaterial
          color={t.crystal}
          emissive={t.core}
          emissiveIntensity={0.2}
          transmission={0.65}
          roughness={0.04}
          metalness={0.12}
          clearcoat={1.0}
          clearcoatRoughness={0.04}
          ior={1.55}
          reflectivity={0.9}
          iridescence={1}
          iridescenceIOR={1.4}
          transparent={true}
          opacity={0.88}
        />
      </RoundedBox>

      {/* Cybernetic Wireframe Matrix inside crystal */}
      <mesh ref={cageRef}>
        <icosahedronGeometry args={[0.88, 0]} />
        <meshBasicMaterial color={t.wire} wireframe transparent opacity={0.6} />
      </mesh>

      {/* Pulsing Luminous Quantum Energy Core */}
      <mesh ref={coreRef}>
        <octahedronGeometry args={[0.42, 0]} />
        <meshStandardMaterial
          color={t.core}
          emissive={t.core}
          emissiveIntensity={3.5 + pulseIntensity * 4}
          roughness={0.1}
          metalness={0.4}
        />
        {/* Dynamic internal point light radiating outward */}
        <pointLight color={t.core} intensity={12 + pulseIntensity * 25} distance={5} decay={2} />
      </mesh>
    </group>
  );
}

// 2. Gyroscopic Gimbal Orbital Rings with Neon-Glow satellite beads
function GyroRings({ theme, pulseIntensity }: { theme: ColorTheme; pulseIntensity: number }) {
  const ring1Ref = useRef<THREE.Group>(null);
  const ring2Ref = useRef<THREE.Group>(null);
  const t = THEMES[theme];

  useFrame((_, delta) => {
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.45;
      ring1Ref.current.rotation.y += delta * 0.25;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.35;
      ring2Ref.current.rotation.z += delta * 0.4;
    }
  });

  return (
    <>
      {/* Orbital Ring 1 */}
      <group ref={ring1Ref} rotation={[Math.PI / 3.8, 0, 0]}>
        <mesh>
          <torusGeometry args={[1.85, 0.045, 24, 90]} />
          <meshStandardMaterial
            color={t.ring1}
            metalness={0.7}
            roughness={0.12}
            emissive={t.ring1}
            emissiveIntensity={0.65 + pulseIntensity * 1.2}
          />
        </mesh>
        {/* Orbital Satellite Bead 1 */}
        <mesh position={[1.85, 0, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive={t.ring1} emissiveIntensity={5} />
          <pointLight color={t.ring1} intensity={3} distance={2} decay={2} />
        </mesh>
      </group>

      {/* Orbital Ring 2 (Perpendicular Gyro) */}
      <group ref={ring2Ref} rotation={[-Math.PI / 3, Math.PI / 5, 0]}>
        <mesh>
          <torusGeometry args={[2.15, 0.04, 24, 90]} />
          <meshStandardMaterial
            color={t.ring2}
            metalness={0.7}
            roughness={0.12}
            emissive={t.ring2}
            emissiveIntensity={0.7 + pulseIntensity * 1.2}
          />
        </mesh>
        {/* Orbital Satellite Bead 2 */}
        <mesh position={[0, 2.15, 0]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive={t.ring2} emissiveIntensity={5} />
          <pointLight color={t.ring2} intensity={3} distance={2} decay={2} />
        </mesh>
      </group>
    </>
  );
}

// 3. Moveable Interactive Satellites (Multiple Luminous 3D Objects with Zero Dark Silhouettes)
function FloatingSatellites({ theme }: { theme: ColorTheme }) {
  const t = THEMES[theme];
  const sat1 = useRef<THREE.Mesh>(null);
  const sat2 = useRef<THREE.Mesh>(null);
  const sat3 = useRef<THREE.Mesh>(null);
  const sat4 = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (sat1.current) {
      sat1.current.rotation.x += delta * 0.6;
      sat1.current.rotation.y += delta * 0.8;
    }
    if (sat2.current) {
      sat2.current.rotation.y -= delta * 0.5;
    }
    if (sat3.current) {
      sat3.current.rotation.x += delta * 0.4;
      sat3.current.rotation.z += delta * 0.5;
    }
    if (sat4.current) {
      sat4.current.rotation.y += delta * 0.7;
    }
  });

  return (
    <>
      {/* Satellite A: Floating Iridescent Octahedron (Top Left) */}
      <Float speed={2} floatIntensity={1.8} rotationIntensity={1.2} position={[-2.2, 1.2, -0.2]}>
        <mesh ref={sat1} scale={0.42}>
          <octahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial
            color={t.accent1}
            emissive={t.accent1}
            emissiveIntensity={0.4}
            metalness={0.4}
            roughness={0.1}
            clearcoat={1}
            iridescence={1}
            transmission={0.4}
            transparent
            opacity={0.92}
          />
        </mesh>
      </Float>

      {/* Satellite B: Luminous Iridescent Pearl Orb (Top Right) */}
      <Float speed={1.7} floatIntensity={1.5} rotationIntensity={0.8} position={[2.2, 1.3, -0.4]}>
        <mesh ref={sat2} scale={0.36}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshPhysicalMaterial
            color="#f1f5f9"
            emissive={t.accent2}
            emissiveIntensity={0.45}
            metalness={0.4}
            roughness={0.1}
            clearcoat={1}
            iridescence={1}
          />
        </mesh>
      </Float>

      {/* Satellite C: Floating Neon Mini-Torus (Bottom Right) */}
      <Float speed={2.2} floatIntensity={2} rotationIntensity={1.4} position={[2.0, -1.2, 0.4]}>
        <mesh ref={sat3} scale={0.38}>
          <torusGeometry args={[0.8, 0.22, 16, 36]} />
          <meshStandardMaterial
            color={t.ring2}
            emissive={t.ring2}
            emissiveIntensity={0.7}
            metalness={0.5}
            roughness={0.15}
          />
        </mesh>
      </Float>

      {/* Satellite D: Crystalline Tech Dodecahedron (Bottom Left) */}
      <Float speed={1.5} floatIntensity={1.4} rotationIntensity={1} position={[-1.9, -1.2, 0.3]}>
        <mesh ref={sat4} scale={0.34}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial
            color="#e2e8f0"
            emissive={t.ring1}
            emissiveIntensity={0.35}
            metalness={0.35}
            roughness={0.1}
            clearcoat={1}
            iridescence={1}
            transmission={0.5}
            transparent
            opacity={0.9}
          />
        </mesh>
      </Float>

      {/* Satellite E: Floating Micro Data Crystal (Far Top) */}
      <Float speed={2.5} floatIntensity={1.6} rotationIntensity={2} position={[1.5, 1.8, -0.3]}>
        <mesh scale={0.22}>
          <tetrahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive={t.accent1}
            emissiveIntensity={3.5}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
      </Float>

      {/* Satellite F: Floating Micro Spark Shard (Far Bottom) */}
      <Float speed={2.0} floatIntensity={1.8} rotationIntensity={1.6} position={[-1.6, -1.8, 0.4]}>
        <mesh scale={0.2}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive={t.accent2}
            emissiveIntensity={3.5}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
      </Float>
    </>
  );
}

// 4. Cosmic Stardust Particle Cloud (300 floating luminous particles)
function StardustField({ theme }: { theme: ColorTheme }) {
  const pointsRef = useRef<THREE.Points>(null);
  const t = THEMES[theme];

  const particleCount = 280;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 2.2 + Math.random() * 2.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.08;
      pointsRef.current.rotation.x += delta * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color={t.particle}
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

// Main 3D System combining all moveable objects with interactive mouse-lerp
function SystemScene({
  theme,
  pulseIntensity,
  spinBoost,
}: {
  theme: ColorTheme;
  pulseIntensity: number;
  spinBoost: number;
}) {
  const systemGroup = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!systemGroup.current) return;
    const targetX = -state.pointer.y * 0.35;
    const targetY = state.pointer.x * 0.55;
    systemGroup.current.rotation.x = THREE.MathUtils.lerp(
      systemGroup.current.rotation.x,
      targetX,
      0.06
    );
    systemGroup.current.rotation.y = THREE.MathUtils.lerp(
      systemGroup.current.rotation.y,
      targetY + spinBoost,
      0.06
    );
    systemGroup.current.rotation.y += delta * 0.15;
  });

  return (
    <group ref={systemGroup}>
      <Float speed={1.8} floatIntensity={1} rotationIntensity={0.3}>
        <QuantumCrystal theme={theme} pulseIntensity={pulseIntensity} />
        <GyroRings theme={theme} pulseIntensity={pulseIntensity} />
      </Float>
      <FloatingSatellites theme={theme} />
      <StardustField theme={theme} />
    </group>
  );
}

export default function Hero3D() {
  const [theme, setTheme] = useState<ColorTheme>("cyber");
  const [pulseIntensity, setPulseIntensity] = useState(0);
  const [spinBoost, setSpinBoost] = useState(0);

  const triggerPulse = () => {
    setPulseIntensity(1.5);
    setTimeout(() => setPulseIntensity(0), 700);
  };

  const triggerSpin = () => {
    setSpinBoost((prev) => prev + Math.PI * 1.5);
  };

  const t = THEMES[theme];

  return (
    <div className="relative size-full select-none">
      {/* 3D WebGL Canvas */}
      <Canvas
        camera={{ position: [0, 0, 6.4], fov: 42 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        className="cursor-grab active:cursor-grabbing"
      >
        {/* Studio 5-Point Lighting Rig */}
        <ambientLight intensity={0.9} />
        <directionalLight position={[6, 8, 5]} intensity={1.6} color="#ffffff" />
        <directionalLight position={[-6, -4, -3]} intensity={1.0} color="#e0e7ff" />
        <pointLight position={[-5, -2, 4]} intensity={25} color={t.accent1} distance={16} decay={2} />
        <pointLight position={[5, 4, 3]} intensity={22} color={t.accent2} distance={16} decay={2} />
        <pointLight position={[0, -5, 3]} intensity={18} color="#ffffff" distance={14} decay={2} />

        {/* Moveable interactive 3D cluster */}
        <SystemScene
          theme={theme}
          pulseIntensity={pulseIntensity}
          spinBoost={spinBoost}
        />

        {/* OrbitControls for direct mouse/touch dragging, rotating, and moving */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          rotateSpeed={0.85}
          dampingFactor={0.06}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.3}
        />
      </Canvas>

      {/* Floating Interactive Controls HUD */}
      <div className="pointer-events-auto absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[var(--stroke)] bg-[var(--glass)] px-3 py-1.5 backdrop-blur-md shadow-lg transition-all hover:scale-105">
        <span className="hidden items-center gap-1.5 text-xs font-semibold text-muted sm:inline-flex">
          <span className="size-2 animate-ping rounded-full bg-cyan-400" />
          Interactive 3D:
        </span>

        {/* Kinetic Spin Button */}
        <button
          onClick={triggerSpin}
          type="button"
          aria-label="Spin 3D object"
          className="flex items-center gap-1 rounded-full border border-[var(--stroke)] bg-[var(--glass2)] px-2.5 py-1 text-xs font-medium text-fg transition hover:bg-cyan-500/20 hover:text-cyan-400 active:scale-95"
        >
          🔄 Spin
        </button>

        {/* Kinetic Pulse Button */}
        <button
          onClick={triggerPulse}
          type="button"
          aria-label="Pulse energy core"
          className="flex items-center gap-1 rounded-full border border-[var(--stroke)] bg-[var(--glass2)] px-2.5 py-1 text-xs font-medium text-fg transition hover:bg-purple-500/20 hover:text-purple-400 active:scale-95"
        >
          ⚡ Pulse
        </button>

        {/* Theme / Palette Switcher */}
        <div className="flex items-center gap-1 border-l border-[var(--stroke)] pl-2">
          {(["cyber", "violet", "emerald"] as ColorTheme[]).map((c) => (
            <button
              key={c}
              onClick={() => setTheme(c)}
              type="button"
              title={THEMES[c].name}
              aria-label={`Switch to ${THEMES[c].name} theme`}
              className={`size-5 rounded-full transition-transform active:scale-90 ${
                theme === c ? "scale-125 ring-2 ring-white shadow-md" : "opacity-70 hover:opacity-100"
              } bg-gradient-to-br ${THEMES[c].badgeBg}`}
            />
          ))}
        </div>
      </div>

      {/* Drag instruction hint */}
      <div className="pointer-events-none absolute right-4 top-4 hidden items-center gap-1.5 rounded-full border border-[var(--stroke)] bg-[var(--glass2)] px-3 py-1 text-[11px] font-medium text-muted backdrop-blur-sm sm:flex">
        <span>✋ Drag to rotate in 3D</span>
      </div>
    </div>
  );
}
