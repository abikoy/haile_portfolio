'use client'
import { useEffect, useState, useRef } from 'react'
import { Download, ArrowRight, Github, MapPin } from 'lucide-react'
import Image from 'next/image'

const ROLES = [
  'Software Engineer',
    'Full-Stack Developer',
  'Mobile App Builder',
  'AI Integration Dev',
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIdx, setCharIdx] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const current = ROLES[roleIdx]
    if (!deleting) {
      if (charIdx < current.length) {
        timerRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx + 1))
          setCharIdx(c => c + 1)
        }, 70)
      } else {
        timerRef.current = setTimeout(() => setDeleting(true), 2000)
      }
    } else {
      if (charIdx > 0) {
        timerRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx - 1))
          setCharIdx(c => c - 1)
        }, 40)
      } else {
        setDeleting(false)
        setRoleIdx(r => (r + 1) % ROLES.length)
      }
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [charIdx, deleting, roleIdx])

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden section">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="orb w-[600px] h-[600px] bg-brand-500/8 top-[-100px] left-[-100px]" />
      <div className="orb w-[400px] h-[400px] bg-amber-500/5 bottom-0 right-[-50px]" />

      <div className="container-wide relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-brand-500/25 bg-brand-500/8 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse-slow" />
              <span className="font-mono text-xs text-brand-400 tracking-wider">Available for opportunities</span>
            </div>

            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] mb-6">
              Hi, I'm{' '}
              <span className="text-gradient block mt-1">Haile Kinfu</span>
            </h1>

            <div className="flex items-center gap-2 mb-6 h-9">
              <span className="font-mono text-brand-400 text-sm tracking-wide">&gt;_</span>
              <span className="font-mono text-lg text-green-200 min-w-[280px]">
                {displayed}
                <span className="cursor-blink text-brand-400">|</span>
              </span>
            </div>

            <p className="text-ink-400 text-base leading-relaxed max-w-lg mb-8">
              Building scalable web applications, business management systems, educational platforms,
              and delivery apps — from{' '}
              <span className="text-brand-300 font-medium inline-flex items-center gap-1">
                <MapPin size={13} />Addis Ababa, Ethiopia
              </span>.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <a href="#projects" className="btn-primary">
                View Projects <ArrowRight size={15} />
              </a>
              <a href="#contact" className="btn-outline">
                Hire Me
              </a>
              <a href="/cv.pdf" download className="btn-ghost">
                <Download size={14} /> CV
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 pt-8 border-t border-ink-700">
              {[
                { val: '6+', label: 'Projects' },
                { val: '15+', label: 'Technologies' },
                { val: '3+', label: 'Years Coding' },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-display font-black text-3xl text-gradient-subtle">{s.val}</div>
                  <div className="font-mono text-xs text-ink-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Profile card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main card */}
              <div className="w-[320px] glass p-8 flex flex-col items-center gap-4 shadow-card relative z-10">
                {/* Top bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-brand-500 via-brand-300 to-amber-400" />

                {/* Avatar */}
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center font-display font-black text-3xl text-ink-950 shadow-glow-green overflow-hidden">
                  <Image
                    src="/images/haile.png"
                    alt="Haile Kinfu"
                    width={112}
                    height={112}
                    className="object-cover rounded-full"
                  />
                </div>


                <div className="text-center">
                  <h3 className="font-display font-bold text-lg text-white">Haile Kinfu</h3>
                  <p className="font-mono text-xs text-brand-400 mt-1">Full-Stack · Mobile Dev</p>
                  <p className="font-mono text-xs text-ink-400 mt-1 flex items-center justify-center gap-1">
                    <MapPin size={11} /> Addis Ababa, Ethiopia 🇪🇹
                  </p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {['Next.js','React','Node.js','TypeScript','Supabase','Python'].map(t => (
                    <span key={t} className="px-2 py-1 rounded-md bg-ink-700 border border-ink-600 font-mono text-xs text-ink-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub link */}
                <a
                  href="https://github.com/abikoy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-ink-600 hover:border-brand-500/50 hover:text-brand-300 text-ink-400 transition-all duration-200 text-sm"
                >
                  <Github size={15} />
                  <span className="font-mono text-xs">github.com/abikoy</span>
                </a>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-3 -right-10 glass px-3 py-2 text-xs font-mono text-brand-300 flex items-center gap-2 animate-float shadow-card z-20">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-slow" />
                Open to work
              </div>
              <div className="absolute -bottom-3 -left-10 glass px-3 py-2 text-xs font-mono text-amber-400 flex items-center gap-2 animate-float shadow-card z-20" style={{ animationDelay: '2s' }}>
                ⚡ Full-Stack
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
