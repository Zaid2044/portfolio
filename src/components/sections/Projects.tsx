'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    title: 'Real-Time AI Vision System',
    description: 'Production-grade computer vision pipeline with object detection, tracking, and real-time processing',
    tags: ['PyTorch', 'YOLO', 'FastAPI', 'Docker', 'Kubernetes'],
    status: 'Active',
    link: '#',
  },
  {
    title: 'LLM-Powered AI Agent',
    description: 'Autonomous agent system with memory, reasoning, and tool integration capabilities',
    tags: ['LangChain', 'GPT-4', 'RAG', 'Python', 'PostgreSQL'],
    status: 'Deployed',
    link: '#',
  },
  {
    title: 'DevOps Infrastructure',
    description: 'End-to-end CI/CD pipeline with Kubernetes orchestration and automated scaling',
    tags: ['Kubernetes', 'Docker', 'Jenkins', 'AWS', 'Terraform'],
    status: 'Production',
    link: '#',
  },
  {
    title: 'Neural Network Training Pipeline',
    description: 'Distributed training system for large-scale deep learning models',
    tags: ['TensorFlow', 'JAX', 'Distributed', 'GPU', 'Cloud'],
    status: 'Active',
    link: '#',
  },
  {
    title: 'Real-Time Systems Framework',
    description: 'Low-latency framework for real-time ML inference and decision making',
    tags: ['C++', 'Python', 'CUDA', 'Real-Time', 'Systems'],
    status: 'Development',
    link: '#',
  },
  {
    title: 'ML Ops Platform',
    description: 'End-to-end platform for model versioning, monitoring, and deployment',
    tags: ['MLflow', 'Prometheus', 'Grafana', 'Python', 'FastAPI'],
    status: 'Active',
    link: '#',
  },
]

export default function Projects() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative z-10 py-32 px-4 border-t border-cyber-accent/20">
      <div className="container mx-auto max-w-6xl">
        {/* Background glow */}
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyber-accent-blue/5 rounded-full blur-3xl" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="glow-blue">// PROJECT</span>
              <br />
              <span className="glow-text">CAPSULES</span>
            </h2>
            <p className="text-white/50 max-w-2xl">
              Production-grade systems spanning AI, DevOps, and real-time computing
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative glass p-6 hover:border-cyber-accent/50 transition-all overflow-hidden"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <motion.span
                    className={`text-xs font-mono px-3 py-1 rounded-full border ${
                      project.status === 'Active'
                        ? 'bg-cyber-accent/10 border-cyber-accent text-cyber-accent'
                        : project.status === 'Deployed'
                          ? 'bg-cyber-accent-blue/10 border-cyber-accent-blue text-cyber-accent-blue'
                          : 'bg-white/5 border-white/20 text-white/50'
                    }`}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                  >
                    {project.status}
                  </motion.span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 pr-24 group-hover:text-cyber-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) => (
                    <motion.span
                      key={j}
                      className="text-xs bg-cyber-accent/10 text-cyber-accent px-2 py-1 rounded border border-cyber-accent/30"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Link */}
                <motion.div
                  className="mt-4 pt-4 border-t border-white/10"
                  whileHover={{ x: 5 }}
                >
                  <Link href={project.link} className="text-cyber-accent-blue text-sm font-mono hover:text-cyber-accent transition-colors">
                    Explore Project →
                  </Link>
                </motion.div>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-accent/0 via-cyber-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* View all button */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-16"
          >
            <motion.button
              className="cyber-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects on GitHub
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
