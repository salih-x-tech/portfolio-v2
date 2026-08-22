"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import type { Mesh } from "three";

function Cube() {
  const cubeRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!cubeRef.current) return;

    cubeRef.current.rotation.x += 0.003;
    cubeRef.current.rotation.y += 0.005;

    cubeRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 1.5) * 0.15;

    cubeRef.current.rotation.x += state.pointer.y * 0.001;
    cubeRef.current.rotation.y += state.pointer.x * 0.001;
    });

  return (
    <mesh ref={cubeRef} rotation={[0.4, 0.6, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#22d3ee"
        metalness={0.7}
        roughness={0.25}
      />
    </mesh>
  );
}


function Sphere() {
  const sphereRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!sphereRef.current) return;

    sphereRef.current.rotation.x += 0.004;
    sphereRef.current.rotation.y += 0.006;

    sphereRef.current.position.y =
      0.4 + Math.sin(state.clock.elapsedTime * 2) * 0.25;
  });

  return (
    <mesh ref={sphereRef} position={[2.2, 0.4, -0.5]}>
      <sphereGeometry args={[0.55, 32, 32]} />
      <meshStandardMaterial
        color="#ffffff"
        metalness={0.4}
        roughness={0.2}
      />
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

      <pointLight
        position={[-3, 2, 4]}
        intensity={15}
        distance={10}
      />

      <Stars
        radius={8}
        depth={5}
        count={80}
        factor={1.5}
        saturation={0}
        fade
        speed={0.5}
      />

      <Cube />

      <Sphere />

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}