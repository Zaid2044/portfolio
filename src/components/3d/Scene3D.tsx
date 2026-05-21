'use client'

import { Canvas } from '@react-three/fiber'
import { Stars, PerspectiveCamera } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface Mouse {
  x: number
  y: number
}

export default function Scene3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = useState<Mouse>({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 -z-10 w-full h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Canvas>
        <PerspectiveCamera position={[0, 0, 5]} fov={75} near={0.1} far={1000} />
        
        {/* Stars background */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        {/* Ambient light */}
        <ambientLight intensity={0.5} color="#0099ff" />

        {/* Point lights */}
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ff88" />
        <pointLight position={[-10, -10, 10]} intensity={0.8} color="#aa00ff" />

        {/* Fog for depth */}
        <fog attach="fog" args={['#050812', 10, 100]} />
      </Canvas>

      {/* Overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-darker/40 to-cyber-darker/80" />

        {/* Scan line effect */}
        <div className="absolute inset-0 opacity-5 bg-repeat scan-line" />
      </div>
    </motion.div>
  )
}
