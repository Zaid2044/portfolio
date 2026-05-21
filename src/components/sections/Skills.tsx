'use client'

import { motion } from 'framer-motion'

const skills = {
  'AI/ML/DL': ['TensorFlow', 'PyTorch', 'JAX', 'Hugging Face', 'Scikit-Learn'],
  'DevOps': ['Docker', 'Kubernetes', 'CI/CD', 'Git', 'Jenkins'],
  'Cloud': ['AWS', 'GCP', 'Azure', 'Lambda', 'EC2'],
  'Backend': ['Python', 'Node.js', 'FastAPI', 'Django', 'PostgreSQL'],
  'Linux': ['Bash', 'System Admin', 'Networking', 'Security'],
  'Computer Vision': ['OpenCV', 'YOLO', 'MediaPipe', 'Image Processing'],
  'LLM/Agents': ['LangChain', 'RAG', 'Prompt Engineering', 'Agent Design'],
}

export default function Skills() {
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

  return (
    <section className="relative z-10 py-32 px-4 border-t border-cyber-accent/20">
      <div className="container mx-auto max-w-6xl">
        {/* Background effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-accent-purple/5 rounded-full blur-3xl" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="glow-purple">// NEURAL</span>
              <br />
              <span className="glow-text">NETWORK</span>
            </h2>
            <p className="text-white/50 max-w-2xl">
              Skills architected as interconnected nodes of expertise
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="glass p-6 group hover:border-cyber-accent/50 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h3 className="text-cyber-accent font-mono mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyber-accent" />
                  {category}
                </h3>
                <div className="space-y-2">
                  {items.map((skill, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2 text-white/60 text-sm hover:text-cyber-accent transition-colors"
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-cyber-accent-blue">▸</span>
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Radar Section */}
          <motion.div
            variants={itemVariants}
            className="glass-dark p-8"
            whileHover={{ borderColor: '#00ff88' }}
          >
            <h3 className="text-cyber-accent-blue font-mono mb-6">PROFICIENCY_MATRIX</h3>
            <div className="space-y-6">
              {[
                { label: 'Deep Learning & Neural Networks', level: 95 },
                { label: 'Backend & API Development', level: 90 },
                { label: 'DevOps & Infrastructure', level: 85 },
                { label: 'Computer Vision & Image Processing', level: 88 },
                { label: 'LLMs & AI Agents', level: 92 },
              ].map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/70 text-sm">{skill.label}</span>
                    <span className="text-cyber-accent text-xs">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyber-accent to-cyber-accent-blue rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: false }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
