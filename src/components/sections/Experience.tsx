'use client'
import { motion } from 'framer-motion'
import { TIMELINE } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="section-tag">Experience</p>
          <h2 className="section-title">
            Career <span className="text-gradient">Timeline</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500 via-brand-400 to-amber-500 opacity-30" />

            <div className="space-y-12">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative pl-14"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-ink-800 border-2 border-brand-500 flex items-center justify-center shadow-glow-green">
                    <div className="w-2 h-2 rounded-full bg-brand-400" />
                  </div>

                  <div className="glass glass-hover p-6 group">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-mono text-xs text-brand-400 bg-brand-500/8 border border-brand-500/20 px-2.5 py-1 rounded-full">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-brand-300 transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="font-mono text-xs text-amber-400 mb-3">{item.company}</p>
                    <p className="text-ink-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
