"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Sphere,
  MeshTransmissionMaterial,
  Float,
  Environment,
  Torus,
} from "@react-three/drei";
import * as THREE from "three";

// ── Atom node ─────────────────────────────────────────────────────
function AtomNode({
  position,
  radius = 0.18,
  color = "#6366f1",
  emissiveIntensity = 0.4,
}: {
  position: [number, number, number];
  radius?: number;
  color?: string;
  emissiveIntensity?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.material; // ensure type
    const t = state.clock.elapsedTime;
    meshRef.current.scale.setScalar(1 + Math.sin(t * 2 + position[0]) * 0.06);
  });

  return (
    <Sphere ref={meshRef} args={[radius, 32, 32]} position={position}>
      <meshPhysicalMaterial
        color={color}
        emissive={color}
        emissiveIntensity={emissiveIntensity}
        metalness={0.1}
        roughness={0.05}
        transmission={0.6}
        thickness={0.5}
        ior={1.5}
        transparent
        opacity={0.92}
      />
    </Sphere>
  );
}

// ── Bond stick ────────────────────────────────────────────────────
function Bond({
  from,
  to,
}: {
  from: [number, number, number];
  to: [number, number, number];
}) {
  const start = new THREE.Vector3(...from);
  const end = new THREE.Vector3(...to);
  const mid = start.clone().lerp(end, 0.5);
  const dir = end.clone().sub(start);
  const length = dir.length();
  const quaternion = new THREE.Quaternion();
  quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());

  return (
    <mesh position={mid} quaternion={quaternion}>
      <cylinderGeometry args={[0.024, 0.024, length, 8]} />
      <meshPhysicalMaterial
        color="#a5b4fc"
        metalness={0.2}
        roughness={0.1}
        transmission={0.5}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

// ── Orbiting ring ─────────────────────────────────────────────────
function OrbitRing({
  radius = 1.8,
  rotationX = 0,
  rotationZ = 0,
  speed = 0.4,
  color = "#8b5cf6",
}: {
  radius?: number;
  rotationX?: number;
  rotationZ?: number;
  speed?: number;
  color?: string;
}) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.y = state.clock.elapsedTime * speed;
  });

  return (
    <Torus
      ref={ringRef}
      args={[radius, 0.018, 16, 120]}
      rotation={[rotationX, 0, rotationZ]}
    >
      <meshPhysicalMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        metalness={0.3}
        roughness={0.0}
        transmission={0.7}
        transparent
        opacity={0.65}
      />
    </Torus>
  );
}

// ── Central nucleus ────────────────────────────────────────────────
function Nucleus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.y = t * 0.25;
    meshRef.current.rotation.x = t * 0.15;
  });

  return (
    <Sphere ref={meshRef} args={[0.42, 64, 64]}>
      <MeshTransmissionMaterial
        color="#e0e7ff"
        backside
        backsideThickness={0.3}
        samples={8}
        resolution={512}
        transmission={1}
        roughness={0.0}
        thickness={0.6}
        ior={1.5}
        chromaticAberration={0.04}
        anisotropy={0.1}
        distortion={0.0}
        distortionScale={0.3}
        temporalDistortion={0.0}
        clearcoat={1}
        attenuationDistance={1}
        attenuationColor="#8b5cf6"
      />
    </Sphere>
  );
}

// ── Floating molecule group ────────────────────────────────────────
function MoleculeGroup({ mouse }: { mouse: React.RefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null);

  // Bond pairs (index into atomPositions)
  const atomPositions: [number, number, number][] = useMemo(
    () => [
      [0, 0, 0],      // center (not rendered)
      [1.0, 0.3, 0.2],
      [-1.0, 0.1, -0.2],
      [0.3, 1.0, 0.2],
      [-0.2, -1.0, 0.1],
      [0.5, -0.3, 1.0],
      [-0.6, 0.4, -0.9],
      [0.8, 0.6, -0.7],
    ],
    []
  );

  const bonds: Array<[number, number]> = useMemo(
    () => [
      [1, 2], [1, 3], [1, 5],
      [2, 4], [2, 6],
      [3, 7], [4, 5],
      [6, 7],
    ],
    []
  );

  const atomColors = ["#6366f1", "#8b5cf6", "#3b82f6", "#818cf8", "#a78bfa", "#60a5fa", "#c4b5fd"];

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = t * 0.12;
    groupRef.current.rotation.x = t * 0.06;

    // Mouse parallax
    if (mouse.current) {
      groupRef.current.rotation.y += mouse.current.x * 0.3;
      groupRef.current.rotation.x += mouse.current.y * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Nucleus />
      {atomPositions.slice(1).map((pos, i) => (
        <AtomNode
          key={i}
          position={pos}
          radius={0.12 + (i % 3) * 0.04}
          color={atomColors[i % atomColors.length]}
          emissiveIntensity={0.3 + (i % 3) * 0.15}
        />
      ))}
      {bonds.map(([a, b], i) => (
        <Bond key={i} from={atomPositions[a]} to={atomPositions[b]} />
      ))}
      <OrbitRing radius={1.85} rotationX={Math.PI / 2} rotationZ={0.3} speed={0.35} color="#6366f1" />
      <OrbitRing radius={1.65} rotationX={0.4} rotationZ={Math.PI / 3} speed={-0.28} color="#8b5cf6" />
      <OrbitRing radius={1.95} rotationX={-0.6} rotationZ={Math.PI / 5} speed={0.22} color="#3b82f6" />
    </group>
  );
}

// ── Camera reactive to mouse ───────────────────────────────────────
function CameraController({ mouse }: { mouse: React.RefObject<{ x: number; y: number }> }) {
  const { camera } = useThree();

  useFrame(() => {
    if (!mouse.current) return;
    camera.position.x += (mouse.current.x * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (mouse.current.y * -0.3 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// ── Main exported canvas ───────────────────────────────────────────
export default function MoleculeCanvas({
  mouseRef,
}: {
  mouseRef: React.RefObject<{ x: number; y: number }>;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      style={{ background: "transparent" }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#e0e7ff" />
      <directionalLight position={[-5, -3, -5]} intensity={0.6} color="#c4b5fd" />
      <pointLight position={[3, 3, 2]} intensity={0.8} color="#6366f1" />
      <pointLight position={[-3, -2, -3]} intensity={0.5} color="#8b5cf6" />

      <Environment preset="city" />

      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.5}>
        <MoleculeGroup mouse={mouseRef} />
      </Float>

      <CameraController mouse={mouseRef} />
    </Canvas>
  );
}
