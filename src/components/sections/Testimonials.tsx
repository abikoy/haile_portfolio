'use client'
import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/data'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-ink-900/40">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="section-tag">Testimonials</p>
          <h2 className="section-title">
            What People <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="glass glass-hover p-7 flex flex-col group"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <span key={si} className="text-amber-400 text-sm">★</span>
                ))}
              </div>

              {/* Big quote mark */}
              <div className="font-display font-black text-5xl text-brand-500/20 leading-none mb-2 select-none">&quot;</div>

              <p className="text-ink-300 text-sm leading-relaxed italic flex-1 mb-6">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-ink-700">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center font-display font-bold text-sm text-ink-950 flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-display font-bold text-sm text-white group-hover:text-brand-300 transition-colors">
                    {t.name}
                  </p>
                  <p className="font-mono text-xs text-ink-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
