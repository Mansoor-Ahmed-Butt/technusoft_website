"use client";
import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshTransmissionMaterial, RoundedBox } from "@react-three/drei";

function GlassCube() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, d) => {
    if (!ref.current) return;
    ref.current.rotation.x += d * 0.25;
    ref.current.rotation.y += d * 0.35;
  });
  return (
    <Float speed={2} floatIntensity={1.2} rotationIntensity={0.4}>
      <group ref={ref}>
        <RoundedBox args={[1.7, 1.7, 1.7]} radius={0.2} smoothness={6}>
          <MeshTransmissionMaterial backside samples={6} resolution={512} transmission={1} thickness={1} roughness={0.05} ior={1.4} chromaticAberration={0.08} anisotropicBlur={0.2} color="#d6ecff" />
        </RoundedBox>
        <mesh><sphereGeometry args={[0.4, 32, 32]} /><meshBasicMaterial color="#5ee7ff" /></mesh>
      </group>
    </Float>
  );
}

function Orb({ position, scale, color }: { position: [number, number, number]; scale: number; color: string }) {
  return (
    <Float speed={1.6} floatIntensity={1.6} position={position}>
      <mesh scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshTransmissionMaterial samples={4} resolution={256} transmission={1} thickness={0.8} roughness={0} ior={1.3} chromaticAberration={0.06} color={color} />
      </mesh>
    </Float>
  );
}

function Ring() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, d) => {
    if (ref.current) { ref.current.rotation.x += d * 0.4; ref.current.rotation.y += d * 0.2; }
  });
  return (
    <Float speed={1.2} floatIntensity={1} position={[2.1, 1.3, -1]}>
      <mesh ref={ref}>
        <torusGeometry args={[0.7, 0.13, 32, 100]} />
        <meshPhysicalMaterial color="#8b7bff" metalness={0.6} roughness={0.15} clearcoat={1} iridescence={1} />
      </mesh>
    </Float>
  );
}

function Scene() {
  const g = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (!g.current) return;
    g.current.rotation.y = THREE.MathUtils.lerp(g.current.rotation.y, s.pointer.x * 0.4, 0.05);
    g.current.rotation.x = THREE.MathUtils.lerp(g.current.rotation.x, -s.pointer.y * 0.25, 0.05);
  });
  return (
    <group ref={g}>
      <GlassCube />
      <Orb position={[-2.2, 1.2, -0.5]} scale={0.55} color="#ffd6f6" />
      <Orb position={[2.3, -1.2, 0.4]} scale={0.4} color="#cfe0ff" />
      <Ring />
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.75]} gl={{ alpha: true }} aria-hidden>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, -3, 2]} intensity={20} color="#d946ef" />
      <Scene />
      <Environment preset="city" />
    </Canvas>
  );
}
