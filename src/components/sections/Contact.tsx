'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    console.log('Form submitted:', formData)
  }

  return (
    <section className="relative z-10 py-32 px-4 border-t border-cyber-accent/20">
      <div className="container mx-auto max-w-6xl">
        {/* Background effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-accent/5 rounded-full blur-3xl" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="glow-purple">// COMMAND</span>
              <br />
              <span className="glow-text">CENTER</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Initiate transmission. Connect. Collaborate. Build the future together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass p-6">
                <h3 className="text-cyber-accent font-mono mb-4">CONTACT_INFO</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-white/50 text-sm mb-1">EMAIL</p>
                    <Link
                      href="mailto:zaid@example.com"
                      className="text-cyber-accent hover:text-cyber-accent-blue transition-colors"
                    >
                      contact@zaid.dev
                    </Link>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">LOCATION</p>
                    <p className="text-white/70">Planet Earth 🌍</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">AVAILABILITY</p>
                    <p className="text-cyber-accent">Always Online</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass p-6">
                <h3 className="text-cyber-accent-blue font-mono mb-4">SOCIAL_NETWORKS</h3>
                <div className="space-y-3">
                  {[
                    { label: 'GitHub', url: 'https://github.com/Zaid2044' },
                    { label: 'LinkedIn', url: 'https://linkedin.com/in/zaid2044' },
                    { label: 'Twitter', url: 'https://twitter.com/Zaid2044' },
                  ].map((social, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 10 }}
                    >
                      <Link
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyber-accent-blue hover:text-cyber-accent transition-colors flex items-center gap-2"
                      >
                        <span className="text-cyber-accent">→</span>
                        {social.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="glass p-8 space-y-4"
            >
              <h3 className="text-cyber-accent font-mono mb-6">TRANSMISSION_PROTOCOL</h3>

              <div>
                <label className="text-white/60 text-sm block mb-2">NAME</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-white placeholder-white/30 focus:border-cyber-accent focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-white/60 text-sm block mb-2">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-white placeholder-white/30 focus:border-cyber-accent focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="text-white/60 text-sm block mb-2">SUBJECT</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-white placeholder-white/30 focus:border-cyber-accent focus:outline-none transition-colors"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label className="text-white/60 text-sm block mb-2">MESSAGE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-white placeholder-white/30 focus:border-cyber-accent focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              {submitted && (
                <motion.div
                  className="bg-cyber-accent/20 border border-cyber-accent text-cyber-accent px-4 py-2 rounded text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  ✓ Message transmitted successfully!
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="cyber-button w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Transmit Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
