'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'

// Lazy load 3D components
const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), {
  ssr: false,
  loading: () => <div className="w-full h-screen bg-cyber-darker" />,
})

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-cyber-darker">
      {/* Loading Sequence */}
      <LoadingScreen />

      {/* 3D Background Scene */}
      <Suspense fallback={<div className="w-full h-screen bg-cyber-darker" />}>
        <Scene3D />
      </Suspense>

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyber-accent/20 bg-cyber-dark/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-cyber-accent/60">
            Built with <span className="text-cyber-accent">❤️</span> by Zaid
          </p>
          <p className="text-sm text-white/30 mt-2">
            © 2026 • Next.js • Three.js • React • GSAP
          </p>
        </div>
      </footer>
    </main>
  )
}
