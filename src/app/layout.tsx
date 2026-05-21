'use client'

import { ReactNode } from 'react'
import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zaid | AIML Engineer & Real-Time Systems Developer',
  description: 'Cinematic portfolio of Zaid - AIML engineer, AI systems builder, DevOps learner, and real-time systems developer.',
  openGraph: {
    title: 'Zaid | Futuristic AI Portfolio',
    description: 'Interactive cinematic portfolio experience',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050812" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cyber-darker text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
