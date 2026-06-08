'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-ink-950/90 backdrop-blur-2xl border-b border-brand-500/10 py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container-wide px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="font-display font-black text-2xl tracking-tighter">
            <span className="text-gradient">HK.</span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActive(link.href)}
                className={cn(
                  'relative px-4 py-2 font-mono text-xs tracking-wider uppercase transition-colors duration-200',
                  active === link.href ? 'text-brand-400' : 'text-ink-400 hover:text-brand-300'
                )}
              >
                {link.label}
                {active === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-400" />
                )}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden md:flex btn-primary text-xs px-5 py-2.5">
              Hire Me
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-ink-300 hover:text-brand-400 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-ink-950/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-all duration-500',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="font-display font-black text-4xl text-ink-300 hover:text-brand-400 transition-colors"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="btn-primary mt-4"
        >
          Hire Me
        </a>
      </div>
    </>
  )
}
