export interface Project {
  id: number
  slug: string
  title: string
  description: string
  longDesc: string
  type: 'fullstack' | 'frontend' | 'backend'
  status: 'live' | 'backend' | 'dev'
  emoji: string
  gradient: string
  highlights: string[]
  tech: string[]
  github: string
  demo?: string
  featured?: boolean
  archDiagram?: string
  image?: string
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'database' | 'tools'
}

export interface Service {
  icon: string
  title: string
  description: string
}

export interface Testimonial {
  name: string
  role: string
  avatar: string
  text: string
  stars: number
}

export interface TimelineItem {
  date: string
  title: string
  company: string
  description: string
}

export interface NavLink {
  label: string
  href: string
}
