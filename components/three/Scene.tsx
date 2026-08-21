"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { Mesh } from "three";

function Cube() {
  const cubeRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!cubeRef.current) return;

    cubeRef.current.rotation.x += 0.003;
    cubeRef.current.rotation.y += 0.005;

    cubeRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 1.5) * 0.15;
  });

  return (
    <mesh ref={cubeRef} rotation={[0.4, 0.6, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#22d3ee" />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={1} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <Cube />

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}