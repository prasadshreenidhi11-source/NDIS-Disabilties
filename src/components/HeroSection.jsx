import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import "./HeroSection.css";


// -----------------------------
// Main yellow planet
// -----------------------------
function MainPlanet() {
  const planetRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    planetRef.current.rotation.y = time * 0.12;
    planetRef.current.rotation.x =
      Math.sin(time * 0.3) * 0.05;
  });

  return (
    <Float
      speed={1.3}
      rotationIntensity={0.12}
      floatIntensity={0.25}
    >
      <mesh ref={planetRef}>
        <sphereGeometry args={[2.25, 64, 64]} />

        <meshStandardMaterial
          color="#E4B51A"
          roughness={0.28}
          metalness={0.08}
        />
      </mesh>
    </Float>
  );
}


// -----------------------------
// Orbit rings
// -----------------------------
function OrbitRing({ rotation = [0, 0, 0], scale = 1 }) {
  const ringRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    ringRef.current.rotation.z =
      rotation[2] + Math.sin(time * 0.4) * 0.03;

    ringRef.current.rotation.y =
      rotation[1] + Math.cos(time * 0.3) * 0.03;
  });

  return (
    <mesh
      ref={ringRef}
      rotation={rotation}
      scale={scale}
    >
      <torusGeometry args={[2.65, 0.025, 16, 160]} />

      <meshBasicMaterial
        color="#6E9AA1"
        transparent
        opacity={0.65}
      />
    </mesh>
  );
}


// -----------------------------
// Small floating planets
// -----------------------------
function SmallPlanet({
  position,
  size,
  color,
  speed = 1
}) {
  const ref = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    ref.current.position.y =
      position[1] +
      Math.sin(time * speed) * 0.15;

    ref.current.rotation.y += 0.005;
  });

  return (
    <Float
      speed={speed}
      rotationIntensity={0.4}
      floatIntensity={0.3}
    >
      <mesh
        ref={ref}
        position={position}
      >
        <sphereGeometry
          args={[size, 32, 32]}
        />

        <meshStandardMaterial
          color={color}
          roughness={0.35}
          metalness={0.05}
        />
      </mesh>
    </Float>
  );
}


// -----------------------------
// Cursor-reactive camera
// -----------------------------
function CameraMovement() {
  const { camera, pointer } = useThree();

  useFrame(() => {
    const targetX = pointer.x * 2;
    const targetY = pointer.y * 1.5;

    camera.position.x +=
      (targetX - camera.position.x) * 0.025;

    camera.position.y +=
      (targetY - camera.position.y) * 0.025;

    camera.lookAt(0, 0, 0);
  });

  return null;
}


// -----------------------------
// Complete 3D background
// -----------------------------
function SpaceScene() {
  return (
    <>
      <ambientLight intensity={1.4} />

      <directionalLight
        position={[4, 5, 6]}
        intensity={3}
      />

      <pointLight
        position={[-4, 2, 4]}
        intensity={2}
      />

      <MainPlanet />

      <OrbitRing
        rotation={[Math.PI / 2.8, 0, 0.15]}
        scale={1.15}
      />

      <OrbitRing
        rotation={[Math.PI / 2.4, 0.15, 0]}
        scale={1.2}
      />

      <SmallPlanet
        position={[-3.8, 1.2, 0]}
        size={0.55}
        color="#D9B53A"
        speed={1.2}
      />

      <SmallPlanet
        position={[-3.0, 0.2, 0.5]}
        size={0.52}
        color="#9FD4D8"
        speed={0.9}
      />

      <SmallPlanet
        position={[2.7, -1.4, 0.4]}
        size={0.32}
        color="#E8ECEC"
        speed={1.4}
      />

      <SmallPlanet
        position={[3.7, 1.0, 0]}
        size={0.85}
        color="#C8D4D6"
        speed={0.7}
      />

      <SmallPlanet
        position={[2.9, 0.1, 1]}
        size={0.28}
        color="#E8ECEC"
        speed={1.7}
      />

      <CameraMovement />
    </>
  );
}


// -----------------------------
// HERO SECTION
// -----------------------------
export default function HeroSection() {
  return (
    <section className="hero">

      {/* 3D BACKGROUND */}
      <div className="hero-3d">
        <Canvas
          camera={{
            position: [0, 0, 10],
            fov: 45
          }}
          dpr={[1, 2]}
        >
          <SpaceScene />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Canvas>
      </div>


      {/* DARK OVERLAY FOR TEXT READABILITY */}
      <div className="hero-overlay"></div>


      {/* CONTENT ON TOP OF 3D */}
      <div className="hero-content">

        <h1>
          Support that fits
          <br />
          around your life,
          <br />
          not the other
          <br />
          way round.
        </h1>

        <p>
          Brightside is a Melbourne NDIS provider
          for people who want support workers they
          actually like, plans that make sense, and
          a team that turns up when it says it will.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Book a free chat
          </button>

          <button className="secondary-btn">
            See what we offer
          </button>

        </div>

      </div>


      {/* SMALL BOTTOM TEXT */}
      <div className="hero-bottom-text">
        Move your cursor — our team gathers around you
      </div>

    </section>
  );
}