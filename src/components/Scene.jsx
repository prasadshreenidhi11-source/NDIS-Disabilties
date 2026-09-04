import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

// A "circle of care": soft satellites orbit a warm core and lean toward the cursor.
const ORBIT = [
  { r: 2.1, speed: 0.22, size: 0.34, y: 0.4, color: '#dceff5', offset: 0 },
  { r: 2.4, speed: 0.18, size: 0.26, y: -0.5, color: '#ffffff', offset: 1.1 },
  { r: 1.8, speed: 0.28, size: 0.22, y: 0.9, color: '#ffd66b', offset: 2.3 },
  { r: 2.6, speed: 0.15, size: 0.3, y: 0.1, color: '#8fd3da', offset: 3.4 },
  { r: 2.0, speed: 0.25, size: 0.18, y: -0.9, color: '#ffffff', offset: 4.6 },
  { r: 2.3, speed: 0.2, size: 0.24, y: 0.6, color: '#dceff5', offset: 5.5 },
]

function Core({ pointer, reduced }) {
  const ref = useRef()
  useFrame((state, delta) => {
    if (!ref.current) return
    const target = reduced ? { x: 0, y: 0 } : pointer.current
    ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, target.x * 0.6, 3, delta)
    ref.current.rotation.x = THREE.MathUtils.damp(ref.current.rotation.x, -target.y * 0.4, 3, delta)
  })
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.05, 8]} />
      <MeshDistortMaterial
        color="#ffb703"
        roughness={0.3}
        metalness={0.05}
        distort={reduced ? 0 : 0.25}
        speed={reduced ? 0 : 1.2}
      />
    </mesh>
  )
}

function Satellite({ cfg, pointer, reduced }) {
  const ref = useRef()
  useFrame((state, delta) => {
    if (!ref.current) return
    const t = reduced ? cfg.offset : state.clock.elapsedTime * cfg.speed + cfg.offset
    const px = pointer.current.x
    const py = pointer.current.y
    const x = Math.cos(t) * cfg.r
    const z = Math.sin(t) * cfg.r
    const y = cfg.y + Math.sin(t * 1.7) * 0.18
    ref.current.position.x = THREE.MathUtils.damp(ref.current.position.x, x + px * 0.5, 4, delta)
    ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, y + py * 0.35, 4, delta)
    ref.current.position.z = z
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[cfg.size, 24, 24]} />
      <meshStandardMaterial color={cfg.color} roughness={0.4} metalness={0.02} />
    </mesh>
  )
}

function Ring({ reduced }) {
  const ref = useRef()
  useFrame((state) => {
    if (!ref.current || reduced) return
    ref.current.rotation.z = state.clock.elapsedTime * 0.08
  })
  return (
    <mesh ref={ref} rotation={[Math.PI / 2.4, 0, 0]} position={[0, -0.1, 0]}>
      <torusGeometry args={[2.25, 0.02, 8, 96]} />
      <meshStandardMaterial color="#8fd3da" transparent opacity={0.45} roughness={0.6} />
    </mesh>
  )
}

function Rig({ pointer, reduced }) {
  useFrame((state, delta) => {
    const target = reduced ? { x: 0, y: 0 } : pointer.current
    state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, target.x * 0.8, 2.5, delta)
    state.camera.position.y = THREE.MathUtils.damp(state.camera.position.y, 0.6 + target.y * 0.5, 2.5, delta)
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export default function Scene({ reduced = false }) {
  const pointer = useRef({ x: 0, y: 0 })
  const wrap = useRef(null)
  const [visible, setVisible] = useState(true)

  // Stop rendering entirely once the hero is scrolled away.
  useEffect(() => {
    const el = wrap.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.05 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const onPointerMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    pointer.current.x = ((e.clientX - r.left) / r.width - 0.5) * 2
    pointer.current.y = -((e.clientY - r.top) / r.height - 0.5) * 2
  }
  const onPointerLeave = () => {
    pointer.current.x = 0
    pointer.current.y = 0
  }

  const frameloop = !visible ? 'never' : reduced ? 'demand' : 'always'

  return (
    <div
      ref={wrap}
      className="hero-scene"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      aria-hidden="true"
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.6, 6.4], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        frameloop={frameloop}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 6, 5]} intensity={1.6} />
        <pointLight position={[-4, -2, -3]} intensity={0.8} color="#0e7c86" />
        <hemisphereLight args={['#dceff5', '#0e7c86', 0.7]} />
        <Float speed={reduced ? 0 : 1.2} rotationIntensity={0.2} floatIntensity={reduced ? 0 : 0.6}>
          <Core pointer={pointer} reduced={reduced} />
        </Float>
        {ORBIT.map((cfg, i) => (
          <Satellite key={i} cfg={cfg} pointer={pointer} reduced={reduced} />
        ))}
        <Ring reduced={reduced} />
        <Rig pointer={pointer} reduced={reduced} />
      </Canvas>
      <span className="hero-scene-shadow" aria-hidden="true" />
      <span className="hero-scene-caption">Move your cursor: our team gathers around you</span>
    </div>
  )
}
