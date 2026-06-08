'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github as GithubIcon, ExternalLink } from 'lucide-react'

const GH_USER = 'abikoy'

const STATS = [
  { val: '6+', label: 'Repositories' },
  { val: 'React', label: 'Top Language' },
  { val: 'JS/TS', label: 'Primary Stack' },
  { val: 'Active', label: 'Contribution Status' },
]

export default function Github() {
  return (
    <section id="github" className="section">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="section-tag">Open Source</p>
          <h2 className="section-title">
            GitHub <span className="text-gradient">Activity</span>
          </h2>
          <p className="text-ink-400 text-sm mt-3 font-mono">
            Consistent contributions across personal and professional projects.
          </p>
        </motion.div>

        <div className="glass p-8 md:p-10">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-8 border-b border-ink-700">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-500/15 border border-brand-500/25 flex items-center justify-center">
                <GithubIcon size={18} className="text-brand-400" />
              </div>
              <div>
                <p className="font-display font-bold text-white">@{GH_USER}</p>
                <p className="font-mono text-xs text-ink-400">Full-Stack · Open Source</p>
              </div>
            </div>
            <a
              href={`https://github.com/${GH_USER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm self-start sm:self-auto"
            >
              <GithubIcon size={14} /> View Profile <ExternalLink size={12} />
            </a>
          </div>

          {/* Quick stat boxes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-ink-900 border border-ink-700 hover:border-brand-500/30 rounded-xl p-4 text-center transition-colors"
              >
                <div className="font-display font-black text-2xl text-gradient-subtle mb-1">{s.val}</div>
                <div className="font-mono text-xs text-ink-400">{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* GitHub readme stats images */}
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden border border-ink-700 hover:border-brand-500/30 transition-colors"
            >
              <Image
                src={`https://github-readme-stats.vercel.app/api?username=${GH_USER}&show_icons=true&theme=transparent&hide_border=true&title_color=22c55e&icon_color=4ade80&text_color=94a3b8&bg_color=0f2318`}
                alt="GitHub Stats"
                width={495}
                height={195}
                className="w-full"
                unoptimized
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl overflow-hidden border border-ink-700 hover:border-brand-500/30 transition-colors"
            >
              <Image
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GH_USER}&layout=compact&theme=transparent&hide_border=true&title_color=22c55e&text_color=94a3b8&bg_color=0f2318`}
                alt="Top Languages"
                width={495}
                height={195}
                className="w-full"
                unoptimized
              />
            </motion.div>
          </div>

          {/* Activity graph */}
          {/* <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="rounded-xl overflow-hidden border border-ink-700 hover:border-brand-500/30 transition-colors"
          >
            <Image
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${GH_USER}&theme=react-dark&hide_border=true&color=22c55e&line=4ade80&point=fbbf24&bg_color=0a1a12`}
              alt="Contribution Activity Graph"
              width={1200}
              height={300}
              className="w-full"
              unoptimized
            />
          </motion.div> */}
        </div>
      </div>
    </section>
  )
}
