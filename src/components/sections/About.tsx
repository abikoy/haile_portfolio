'use client'
import { motion } from 'framer-motion'

const HIGHLIGHTS = [
  { icon: '🌐', title: 'Full-Stack Web Dev', desc: 'End-to-end apps with React, Next.js, Node.js' },
  { icon: '📱', title: 'Mobile Development', desc: 'Cross-platform apps with modern frameworks' },
  { icon: '🗄️', title: 'Database Design', desc: 'PostgreSQL, MongoDB, MySQL, Supabase' },
  { icon: '🤖', title: 'AI Integration', desc: 'Gemini API, OpenAI embeddings, RAG pipelines' },
]

export default function About() {
  return (
    <section id="about" className="section bg-ink-900/40">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-tag">About Me</p>
            <h2 className="section-title mb-6">
              Building <span className="text-gradient">Scalable</span><br />Solutions
            </h2>
            <div className="space-y-4 text-ink-400 leading-relaxed text-[15px]">
              <p>
                I'm a Software Engineer specializing in <span className="text-brand-300 font-medium">Full-Stack Web Development</span> and{' '}
                <span className="text-brand-300 font-medium">Mobile Application Development</span>. I craft scalable web applications,
                business management systems, educational platforms, and delivery applications.
              </p>
              <p>
                My expertise spans the entire development lifecycle — from crafting intuitive frontend interfaces
                to architecting robust backend systems, designing efficient databases, and building
                RESTful APIs with secure authentication.
              </p>
              <p>
                Based in <span className="text-amber-400 font-medium">Addis Ababa, Ethiopia</span>, I bring a global perspective
                to my work, combining modern engineering practices with a deep understanding of real-world user needs.
              </p>
            </div>

            <div className="flex gap-3 mt-8">
              <a href="#projects" className="btn-primary text-sm">View My Work</a>
              <a href="#contact" className="btn-outline text-sm">Get In Touch</a>
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="glass glass-hover p-5 group"
              >
                <div className="text-2xl mb-3">{h.icon}</div>
                <h4 className="font-display font-bold text-sm text-white mb-1 group-hover:text-brand-300 transition-colors">
                  {h.title}
                </h4>
                <p className="font-mono text-xs text-ink-400 leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
