'use client'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { PROJECTS } from '@/lib/data'
import { cn } from '@/lib/utils'
import Image from 'next/image'


const TYPE_BADGE = {
  fullstack: 'Full-Stack',
  frontend: 'Frontend',
  backend: 'Backend',
}
const STATUS_STYLE = {
  live: 'bg-brand-500/10 text-brand-400 border-brand-500/25',
  backend: 'bg-amber-500/10 text-amber-400 border-amber-500/25',
  dev: 'bg-ink-600 text-ink-300 border-ink-500',
}
const STATUS_LABEL = {
  live: '● Live',
  backend: '◐ Backend',
  dev: '○ Dev',
}

export default function Projects() {
  const featured = PROJECTS.filter(p => p.featured)
  const rest = PROJECTS.filter(p => !p.featured)

  return (
    <section id="projects" className="section bg-ink-900/40">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="section-tag">Featured Work</p>
          <h2 className="section-title">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-ink-400 text-sm mt-3 max-w-lg font-mono">
            Production-grade apps showcasing full-stack architecture, AI integrations, and real-world impact.
          </p>
        </motion.div>

        {/* Featured (wide cards) */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {featured.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="glass glass-hover flex flex-col group relative overflow-hidden"
            >
              {/* Gradient header banner */}
              <div className="h-36 relative overflow-hidden">
  {p.image ? (
    <Image
      src={p.image}
      alt={p.title}
      fill
      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
    />
  ) : (
    <div className={cn('w-full h-full flex items-center justify-center bg-gradient-to-br', p.gradient)}>
      <span className="text-5xl">{p.emoji}</span>
    </div>
  )}
  <div className="absolute inset-0 bg-gradient-to-t from-ink-800/80 to-transparent" />
</div>

              <div className="p-6 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs text-brand-400 bg-brand-500/8 border border-brand-500/20 px-2 py-0.5 rounded">
                    0{p.id}
                  </span>
                  <span className={cn('font-mono text-xs px-2 py-0.5 rounded border', STATUS_STYLE[p.status])}>
                    {STATUS_LABEL[p.status]}
                  </span>
                  <span className="font-mono text-xs text-ink-400 border border-ink-600 px-2 py-0.5 rounded">
                    {TYPE_BADGE[p.type]}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-brand-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-ink-400 text-sm leading-relaxed mb-4">{p.description}</p>

                <ul className="space-y-1.5 mb-5">
                  {p.highlights.map(h => (
                    <li key={h} className="flex items-start gap-2 text-ink-400 text-xs">
                      <span className="text-brand-400 mt-0.5 flex-shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                  {p.tech.map(t => (
                    <span key={t} className="font-mono text-xs bg-ink-700 border border-ink-600 text-ink-300 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-xs flex-1 justify-center"
                  >
                    <Github size={13} /> GitHub
                  </a>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs flex-1 justify-center">
                      <ExternalLink size={13} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Rest (compact cards) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {rest.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass glass-hover flex flex-col group relative overflow-hidden"
            >
              <div className={cn('h-24 relative overflow-hidden flex items-center justify-center', p.image ? 'bg-ink-900' : `bg-gradient-to-br ${p.gradient}`)}>
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover object-center"
                  />
                ) : (
                  <span className="text-3xl">{p.emoji}</span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-800/80 to-transparent" />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="font-mono text-[10px] text-brand-400">0{p.id}</span>
                  <span className={cn('font-mono text-[10px] px-1.5 py-0.5 rounded border', STATUS_STYLE[p.status])}>
                    {STATUS_LABEL[p.status]}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-white mb-2 group-hover:text-brand-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-ink-400 text-xs leading-relaxed mb-4 flex-1">{p.description}</p>

                {p.archDiagram && (
                  <pre className="code-block text-[10px] mb-4">{p.archDiagram}</pre>
                )}

                <div className="flex flex-wrap gap-1 mb-4">
                  {p.tech.slice(0, 3).map(t => (
                    <span key={t} className="font-mono text-[10px] bg-ink-700 border border-ink-600 text-ink-300 px-1.5 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 3 && (
                    <span className="font-mono text-[10px] text-ink-500">+{p.tech.length - 3}</span>
                  )}
                </div>

                <div className="flex gap-2 mt-auto">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-xs flex-1 justify-center"
                  >
                    <Github size={12} /> GitHub
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs flex-1 justify-center"
                    >
                      <ExternalLink size={12} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
