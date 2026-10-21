import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface GlowingOrbProps {
  reducedMotion?: boolean;
}

export function GlowingOrb({ reducedMotion = false }: GlowingOrbProps) {
  const groupRef = useRef<THREE.Group>(null!);
  const coreRef = useRef<THREE.Mesh>(null!);
  const innerRef = useRef<THREE.Mesh>(null!);
  const shellRef = useRef<THREE.Mesh>(null!);
  const ring1Ref = useRef<THREE.Group>(null!);
  const ring2Ref = useRef<THREE.Group>(null!);
  const ring3Ref = useRef<THREE.Group>(null!);
  const particlesRef = useRef<THREE.Points>(null!);

  // Entrance scale animation state
  const scaleRef = useRef(0);

  // Pre-generate restrained particle field
  const particleCount = 200;
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);

    const cyan = new THREE.Color('#22D3EE');
    const violet = new THREE.Color('#A78BFA');
    const purple = new THREE.Color('#8B5CF6');

    for (let i = 0; i < particleCount; i++) {
      // Distribute in a spherical shell around the orb
      const radius = 2.2 + Math.random() * 2.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      // Color variation between cyan, violet, and purple
      const c = i % 3 === 0 ? cyan : i % 3 === 1 ? violet : purple;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Smooth entrance scale-up
    if (scaleRef.current < 1) {
      scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, 1, delta * 3.5);
      const s = scaleRef.current;
      groupRef.current.scale.set(s, s, s);
    }

    if (reducedMotion) {
      // Gentle static orientation with tiny mouse tilt
      groupRef.current.rotation.y = state.pointer.x * 0.1;
      groupRef.current.rotation.x = -state.pointer.y * 0.1;
      return;
    }

    const t = state.clock.getElapsedTime();

    // Subtle floating motion
    groupRef.current.position.y = Math.sin(t * 0.7) * 0.12;

    // Subtle mouse responsive rotation with dampening
    const targetRotY = state.pointer.x * 0.45;
    const targetRotX = -state.pointer.y * 0.35;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, delta * 2.5);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, delta * 2.5);

    // Continuous core slow rotation
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.2;
      coreRef.current.rotation.z += delta * 0.1;
    }

    // Inner wireframe counter-rotation
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.3;
      innerRef.current.rotation.x += delta * 0.15;
    }

    // Translucent shell breathing & rotation
    if (shellRef.current) {
      shellRef.current.rotation.y += delta * 0.12;
      const breath = 1 + Math.sin(t * 1.5) * 0.025;
      shellRef.current.scale.set(breath, breath, breath);
    }

    // Orbiting rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.22;
      ring1Ref.current.rotation.y += delta * 0.12;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x += delta * 0.18;
      ring2Ref.current.rotation.z -= delta * 0.14;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y -= delta * 0.15;
      ring3Ref.current.rotation.x -= delta * 0.1;
    }

    // Gentle particle swirl
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.05;
      particlesRef.current.rotation.x = Math.sin(t * 0.2) * 0.08;
    }
  });

  return (
    <group ref={groupRef} scale={[0, 0, 0]}>
      {/* 1. Luminous Deep Core Sphere */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[1.2, 48, 48]} />
        <meshStandardMaterial
          color="#6D28D9"
          emissive="#7C3AED"
          emissiveIntensity={1.2}
          roughness={0.25}
          metalness={0.8}
        />
      </mesh>

      {/* 2. Inner Tech/Geometric Mesh (Icosahedron Wireframe) */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.35, 2]} />
        <meshBasicMaterial
          color="#22D3EE"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* 3. Layered Translucent Glow Shell */}
      <mesh ref={shellRef}>
        <sphereGeometry args={[1.5, 48, 48]} />
        <meshPhysicalMaterial
          color="#A78BFA"
          emissive="#22D3EE"
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.1}
          transmission={0.65}
          thickness={0.8}
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* 4. Orbiting Ring 1 (Tilted Violet Ring) */}
      <group ref={ring1Ref} rotation={[0.4, 0.2, 0.8]}>
        <mesh>
          <torusGeometry args={[2.05, 0.02, 16, 100]} />
          <meshBasicMaterial color="#8B5CF6" transparent opacity={0.7} />
        </mesh>
        {/* Orbiting Satellite Bead */}
        <mesh position={[2.05, 0, 0]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshBasicMaterial color="#22D3EE" />
        </mesh>
      </group>

      {/* 5. Orbiting Ring 2 (Tilted Cyan Ring) */}
      <group ref={ring2Ref} rotation={[-0.6, 0.5, -0.3]}>
        <mesh>
          <torusGeometry args={[2.35, 0.018, 16, 100]} />
          <meshBasicMaterial color="#22D3EE" transparent opacity={0.6} />
        </mesh>
        {/* Orbiting Satellite Bead */}
        <mesh position={[-2.35, 0, 0]}>
          <sphereGeometry args={[0.065, 16, 16]} />
          <meshBasicMaterial color="#A78BFA" />
        </mesh>
      </group>

      {/* 6. Orbiting Ring 3 (Outer Subtle Ring) */}
      <group ref={ring3Ref} rotation={[1.1, -0.4, 0.2]}>
        <mesh>
          <torusGeometry args={[2.65, 0.012, 16, 100]} />
          <meshBasicMaterial color="#C084FC" transparent opacity={0.35} />
        </mesh>
      </group>

      {/* 7. Restrained Ambient Particle Cloud */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          vertexColors
          transparent
          opacity={0.75}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Atmospheric Point Light emanating from core */}
      <pointLight color="#8B5CF6" intensity={3.5} distance={7} decay={2} />
      <pointLight position={[1.5, 1, 1.5]} color="#22D3EE" intensity={2.5} distance={6} decay={2} />
    </group>
  );
}
