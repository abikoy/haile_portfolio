import { Github } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-brand-500/10 py-10 px-6 md:px-12">
      <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-display font-black text-xl text-gradient">HK.</span>
          <p className="text-ink-400 text-xs font-mono mt-1">© {year} Haile Kinfu. All rights reserved.</p>
        </div>
        <div className="flex gap-6 text-ink-400 font-mono text-xs">
          {['About','Projects','Skills','Contact'].map(s => (
            <a key={s} href={`#${s.toLowerCase()}`} className="hover:text-brand-400 transition-colors">{s}</a>
          ))}
        </div>
        <a
          href="https://github.com/abikoy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-ink-400 hover:text-brand-400 transition-colors text-sm"
        >
          <Github size={16} />
          <span className="font-mono text-xs">github.com/abikoy</span>
        </a>
      </div>
    </footer>
  )
}
