'use client'
import { motion } from 'framer-motion'
import { SKILLS } from '@/lib/data'

const CATEGORIES = [
  { key: 'frontend' as const, label: 'Frontend', icon: '🎨', color: 'text-brand-400' },
  { key: 'backend' as const, label: 'Backend', icon: '⚙️', color: 'text-amber-400' },
  { key: 'database' as const, label: 'Databases', icon: '🗄️', color: 'text-brand-300' },
  { key: 'tools' as const, label: 'Tools & DevOps', icon: '🛠️', color: 'text-green-300' },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="section-tag">Tech Stack</p>
          <h2 className="section-title">
            Skills &amp; <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-ink-400 text-sm mt-3 max-w-lg font-mono">
            A comprehensive toolkit for building modern, scalable applications from frontend to backend.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="glass relative overflow-hidden group hover:border-brand-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-500 to-brand-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

              <div className="p-6">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-xl">{cat.icon}</span>
                  <span className={`font-display font-bold text-sm ${cat.color}`}>{cat.label}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {SKILLS[cat.key].map(skill => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-ink-700 border border-ink-600
                                 font-mono text-xs text-ink-300
                                 hover:border-brand-500/50 hover:text-brand-300 hover:bg-ink-600
                                 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
