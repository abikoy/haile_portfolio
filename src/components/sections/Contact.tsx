'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Send, CheckCircle2 } from 'lucide-react'

const CONTACT_ITEMS = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'hailekinfu00@gmail.com',
    href: 'mailto:hailekinfu@gmail.com',
  },
  {
    icon: <Github size={18} />,
    label: 'GitHub',
    value: 'github.com/abikoy',
    href: 'https://github.com/abikoy',
  },
  {
    icon: <MapPin size={18} />,
    label: 'Location',
    value: 'Addis Ababa, Ethiopia 🇪🇹',
    href: null,
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', subject: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setLoading(true)
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  setLoading(false)
  if (res.ok) setSent(true)
  else alert('Something went wrong. Try emailing me directly.')
}
  return (
    <section id="contact" className="section">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="section-tag">Contact</p>
          <h2 className="section-title">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-ink-400 leading-relaxed mb-8 text-[15px]">
              Ready to bring your next project to life? I'm available for freelance work,
              full-time opportunities, and exciting collaborations. Let's build something great together.
            </p>

            <div className="space-y-3 mb-10">
              {CONTACT_ITEMS.map(item => (
                <div key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-ink-800 border border-ink-700 rounded-xl hover:border-brand-500/40 hover:translate-x-1 transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-mono text-xs text-ink-500">{item.label}</p>
                        <p className="font-medium text-sm text-white group-hover:text-brand-300 transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 bg-ink-800 border border-ink-700 rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-mono text-xs text-ink-500">{item.label}</p>
                        <p className="font-medium text-sm text-white">{item.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-brand-500/25 bg-brand-500/8">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse-slow" />
              <span className="font-mono text-xs text-brand-400">Currently open to opportunities</span>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass p-8"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <CheckCircle2 size={48} className="text-brand-400" />
                <h3 className="font-display font-bold text-xl text-white">Message Sent!</h3>
                <p className="text-ink-400 text-sm">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)} className="btn-outline text-sm mt-2">
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display font-bold text-lg text-white mb-6">Send a Message</h3>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'firstName', placeholder: 'First name' },
                    { name: 'lastName', placeholder: 'Last name' },
                  ].map(f => (
                    <div key={f.name}>
                      <label className="font-mono text-xs text-ink-400 block mb-1.5 capitalize">
                        {f.name.replace(/([A-Z])/g, ' $1').trim()}
                      </label>
                      <input
                        name={f.name}
                        value={(form as Record<string, string>)[f.name]}
                        onChange={handleChange}
                        required
                        placeholder={f.placeholder}
                        className="w-full bg-ink-900 border border-ink-700 rounded-xl px-4 py-3 text-sm text-white placeholder-ink-500 font-mono focus:outline-none focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/20 transition-all"
                      />
                    </div>
                  ))}
                </div>

                {[
                  { name: 'email', placeholder: 'your@email.com', label: 'Email', type: 'email' },
                  { name: 'subject', placeholder: 'Project Collaboration', label: 'Subject', type: 'text' },
                ].map(f => (
                  <div key={f.name}>
                    <label className="font-mono text-xs text-ink-400 block mb-1.5">{f.label}</label>
                    <input
                      name={f.name}
                      type={f.type}
                      value={(form as Record<string, string>)[f.name]}
                      onChange={handleChange}
                      required
                      placeholder={f.placeholder}
                      className="w-full bg-ink-900 border border-ink-700 rounded-xl px-4 py-3 text-sm text-white placeholder-ink-500 font-mono focus:outline-none focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/20 transition-all"
                    />
                  </div>
                ))}

                <div>
                  <label className="font-mono text-xs text-ink-400 block mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full bg-ink-900 border border-ink-700 rounded-xl px-4 py-3 text-sm text-white placeholder-ink-500 font-mono focus:outline-none focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center py-3.5 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-ink-950/40 border-t-ink-950 rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
