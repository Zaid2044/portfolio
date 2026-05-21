'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-accent-purple/10 rounded-full blur-3xl animate-pulse" />

      <motion.div
        className="relative z-20 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main title */}
        <motion.div variants={itemVariants} ref={titleRef}>
          <h1 className="text-8xl md:text-9xl font-bold glow-text mb-4 tracking-tight">
            ZAID
          </h1>
        </motion.div>

        {/* Subtitle with animation */}
        <motion.div
          variants={itemVariants}
          className="space-y-3 mb-8"
        >
          <h2 className="text-2xl md:text-4xl font-light text-cyber-accent-blue tracking-wider">
            AIML Engineer
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-lg text-cyber-accent/80">
            <span className="hologram">AI Systems Developer</span>
            <span className="text-white/40">•</span>
            <span className="hologram">Real-Time Architect</span>
            <span className="text-white/40">•</span>
            <span className="hologram">DevOps Explorer</span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4 mt-12"
        >
          <motion.button
            className="cyber-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore
          </motion.button>
          <motion.button
            className="px-6 py-3 rounded-lg font-bold uppercase tracking-wider border-2 border-cyber-accent text-cyber-accent hover:bg-cyber-accent/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.button>
        </motion.div>

        {/* Metrics */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
        >
          {[
            { label: 'GitHub Commits', value: '1.2K+' },
            { label: 'Projects Built', value: '50+' },
            { label: 'AI Models', value: '20+' },
            { label: 'Current Bulk', value: '66→75kg' },
          ].map((metric, i) => (
            <motion.div
              key={i}
              className="glass p-4 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-bold text-cyber-accent">{metric.value}</div>
              <div className="text-xs text-white/50 mt-2">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-cyber-accent text-sm">↓ Scroll to explore ↓</div>
      </motion.div>
    </section>
  )
}
