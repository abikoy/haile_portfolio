'use client'
import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/data'

export default function Services() {
  return (
    <section id="services" className="section bg-ink-900/40">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="section-tag">Services</p>
          <h2 className="section-title">
            What I <span className="text-gradient">Build</span>
          </h2>
          <p className="text-ink-400 text-sm mt-3 max-w-lg font-mono">
            Comprehensive engineering services from concept to production deployment.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass group relative overflow-hidden hover:border-brand-500/30 hover:-translate-y-1 transition-all duration-300 p-7 cursor-default"
            >
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-500 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

              <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <h3 className="font-display font-bold text-base text-white mb-2 group-hover:text-brand-300 transition-colors">
                {s.title}
              </h3>
              <p className="text-ink-400 text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
