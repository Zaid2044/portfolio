'use client'

import { motion } from 'framer-motion'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative z-10 py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="glow-text">// SYSTEM</span>
              <br />
              <span className="glow-blue">DOSSIER</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyber-accent to-transparent" />
          </motion.div>

          {/* Grid layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left - Stats */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass p-6">
                <h3 className="text-cyber-accent font-mono mb-4">AGE_DATA</h3>
                <p className="text-white/80 mb-2">21 years | AI ML Engineer</p>
                <p className="text-sm text-white/50">
                  Passionate about building intelligent systems that push the boundaries of what's possible.
                </p>
              </div>

              <div className="glass p-6">
                <h3 className="text-cyber-accent font-mono mb-4">SPECIALIZATIONS</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>✦ Artificial Intelligence & Machine Learning</li>
                  <li>✦ Real-Time Systems Architecture</li>
                  <li>✦ DevOps & Infrastructure</li>
                  <li>✦ Computer Vision & Neural Networks</li>
                </ul>
              </div>

              <div className="glass p-6">
                <h3 className="text-cyber-accent font-mono mb-4">STATUS</h3>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyber-accent animate-pulse" />
                  <span className="text-white/70">Active • Open to opportunities</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-dark p-8">
                <p className="text-white/70 leading-relaxed mb-4">
                  I'm a 21-year-old AI engineer obsessed with building systems that blend cutting-edge machine learning with production-grade engineering. My focus spans from training neural networks to architecting DevOps pipelines that scale.
                </p>
                <p className="text-white/70 leading-relaxed mb-4">
                  By day, I architect AI systems. By night, I'm in the gym pushing limits (currently bulking from 66kg to 75kg). I believe in the intersection of intelligent systems and real-time computing.
                </p>
                <p className="text-white/60 text-sm">
                  When I'm not coding, you'll find me optimizing training routines or exploring the latest developments in LLMs and autonomous systems.
                </p>
              </div>

              {/* Timeline preview */}
              <motion.div
                className="glass p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-cyber-accent-blue font-mono mb-4">MISSION_HISTORY</h3>
                <div className="space-y-3 text-sm text-white/60">
                  <div className="flex justify-between items-center">
                    <span>AI Engineering Journey</span>
                    <span className="text-cyber-accent">2022 → Now</span>
                  </div>
                  <div className="h-1 bg-cyber-accent/20 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-cyber-accent to-cyber-accent-blue" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
