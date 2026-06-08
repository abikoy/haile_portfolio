import { Project, Service, Testimonial, TimelineItem, NavLink } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export const SKILLS = {
  frontend: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Material UI', 'HTML5', 'CSS3'],
  backend: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'PHP', 'REST APIs', 'JWT Auth'],
  database: ['MongoDB', 'MySQL', 'PostgreSQL', 'Supabase', 'pgAdmin'],
  tools: ['Git', 'GitHub', 'Docker', 'Vercel', 'n8n', 'VS Code', 'Postman'],
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: 'swiftdrop Delivery Platform',
    title: 'SwiftDrop Delivery Platform',
     image: '/images/swift.png',
    description: 'Full-stack delivery management platform with real-time tracking, messaging, and a modern dashboard.',
    longDesc: 'Enables users to create delivery requests, track deliveries in real time, and communicate with delivery personnel. Built with Next.js and Supabase for real-time capabilities.',
    type: 'fullstack',
    status: 'live',
    emoji: '🚚',
    gradient: 'from-emerald-500/20 to-green-900/20',
    highlights: [
      'Real-time delivery tracking with live status updates',
      'Secure JWT user authentication and role management',
      'Modern responsive dashboard with delivery analytics',
    ],
    tech: ['Next.js', 'Tailwind CSS', 'Supabase', 'Real-time'],
    github: 'https://github.com/abikoy/SwiftDrop',
    demo: 'https://swift-drop-beta.vercel.app/',
    featured: true,
  },
  {
    id: 2,
    slug: 'brain-coins',
    title: 'Brain Coins Admin Panel',
     image: '/images/brain-coins.png',
    description: 'Educational platform admin dashboard with AI-powered question generation via Gemini API and student analytics.',
    longDesc: 'A modern educational platform designed to help students learn more effectively through AI-generated assessments, analytics, and progress tracking.',
    type: 'fullstack',
    status: 'live',
    emoji: '🧠',
    gradient: 'from-amber-500/20 to-yellow-900/20',
    highlights: [
      'AI-powered question generation via Gemini API',
      'Student management and progress analytics',
      'Educational content management system',
      'Data visualization dashboards',
    ],
    tech: ['React', 'Next.js', 'Node.js', 'Supabase', 'Gemini AI', 'Tailwind CSS'],
    github: 'https://github.com/abikoy/Brain_Coins_Admin_Panel',
    demo: 'https://brain-coins-admin-panel-a4or.vercel.app/',

    featured: true,
  },
  {
    id: 3,
    slug: 'academic-helper',
    title: 'Academic Assignment Helper',
    image: '/images/academic-helper.png',
    description: 'RAG-powered backend for analyzing student assignments and detecting plagiarism using AI and OpenAI embeddings.',
    longDesc: 'A comprehensive backend + n8n automation system for analyzing student assignments and detecting plagiarism using AI and Retrieval Augmented Generation.',
    type: 'backend',
    status: 'backend',
    emoji: '🔍',
    gradient: 'from-teal-500/20 to-emerald-900/20',
    highlights: [
      'Plagiarism detection against academic sources',
      'JWT-secured REST API endpoints',
      'n8n workflow automation pipeline',
      'OpenAI embeddings for semantic search',
    ],
    tech: ['FastAPI', 'PostgreSQL', 'pgAdmin', 'n8n', 'Docker', 'OpenAI'],
    github: 'https://github.com/abikoy/academic-assignment-helper',
    demo: 'https://drive.google.com/file/d/192ugiJBQEQzzrg6kfRM5e3dg1w7rV9mS/view?usp=sharing',
    archDiagram: `Student → FastAPI → PostgreSQL
        │
        ▼
  n8n Workflow → OpenAI API
                 (Embeddings)`,
  },
  {
    id: 4,
    slug: 'rms',
    title: 'RMS — Resource Management',
    description: 'Complete resource management system for organizations with role-based access control and advanced reporting.',
    longDesc: 'A complete resource management solution for organizations and institutions with real-time dashboards, user roles, and comprehensive reporting.',
    type: 'fullstack',
    status: 'live',
    emoji: '📊',
    gradient: 'from-lime-500/20 to-green-900/20',
    highlights: [
      'Resource tracking with real-time dashboard',
      'Multi-level user role management',
      'Advanced reporting and analytics',
      'Full MERN stack architecture',
    ],
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Material UI'],
    github: 'https://github.com/abikoy/rms',
  },
  {
    id: 5,
    slug: 'sheba-pathways',
    title: 'Sheba Pathways',
    image: '/images/sheba-pathways.png',
    description: 'Modern responsive frontend platform focused on accessibility, performance, and user-centered design.',
    longDesc: 'A modern responsive frontend platform focused on outstanding user experience, WCAG 2.1 accessibility standards, and optimized Core Web Vitals.',
    type: 'frontend',
    status: 'live',
    emoji: '🌍',
    gradient: 'from-green-400/20 to-emerald-900/20',
    highlights: [
      'Fully responsive across all screen sizes',
      'WCAG 2.1 accessibility compliance',
      'Optimized Core Web Vitals performance',
      'User-centered interface design',
    ],
    tech: ['React', 'Material UI'],
    github: 'https://github.com/abikoy/sheba_pathways',
    demo: 'https://sheba-pathways.vercel.app/',
  },
  {
    id: 6,
    slug: 'e-shop',
    title: 'E-Shop',
    image: '/images/e-shop.png',
    description: 'Modern e-commerce UI with dynamic product catalog, shopping cart, and fully responsive mobile-first layout.',
    longDesc: 'A modern e-commerce user interface with elegant product browsing, a refined shopping experience, and a fully responsive mobile-first layout.',
    type: 'frontend',
    status: 'live',
    emoji: '🛍️',
    gradient: 'from-emerald-600/20 to-teal-900/20',
    highlights: [
      'Dynamic product catalog with filters',
      'Smooth shopping cart experience',
      'Mobile-first responsive design',
      'Modern React component architecture',
    ],
    tech: ['React', 'Tailwind CSS'],
    github: 'https://github.com/abikoy/e-shop',
    demo: 'https://e-shop-ten-cyan.vercel.app/',
  },
]

export const SERVICES: Service[] = [
  { icon: '🌐', title: 'Full-Stack Development', description: 'End-to-end web apps with React, Next.js, Node.js and modern databases — from design to deployment.' },
  { icon: '🎨', title: 'Frontend Development', description: 'Pixel-perfect, responsive interfaces with animations, accessibility compliance, and outstanding UX.' },
  { icon: '⚙️', title: 'Backend Development', description: 'Scalable server architecture, REST APIs, authentication systems and microservice design.' },
  { icon: '📱', title: 'Mobile App Development', description: 'Cross-platform mobile apps with native-like performance and seamless backend integration.' },
  { icon: '🔌', title: 'API Development', description: 'REST API design, AI API integrations (Gemini, OpenAI), and secure authentication systems.' },
  { icon: '🗄️', title: 'Database Design', description: 'Efficient schema design, query optimization, and architecture for PostgreSQL, MongoDB, and Supabase.' },
]

export const TIMELINE: TimelineItem[] = [
  {
    date: '2024 – Present',
    title: 'Full-Stack Software Engineer',
    company: 'Freelance / Independent',
    description: 'Building production-grade applications for clients across industries. Delivering end-to-end solutions from architecture design to deployment, specializing in React/Next.js, Node.js, and AI-integrated platforms.',
  },
  {
    date: '2023 – 2024',
    title: 'Web Developer & API Engineer',
    company: 'Project-Based Development',
    description: 'Developed multiple full-stack applications including delivery platforms, educational systems, and e-commerce interfaces. Deep expertise in Supabase, PostgreSQL, and real-time application architecture.',
  },
  {
    date: '2022 – 2023',
    title: 'Frontend Engineer',
    company: 'Early Career',
    description: 'Built responsive React applications and mastered modern CSS frameworks. Transitioned into full-stack development, establishing a strong foundation in software architecture and backend engineering.',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Abreham Bekele',
    role: 'Startup Founder · Addis Ababa',
    avatar: 'AB',
    text: 'Haile delivered an exceptional delivery management platform. His real-time feature implementation and clean architecture were outstanding. The code is truly production-ready.',
    stars: 5,
  },
  {
    name: 'Sara Demissie',
    role: 'EdTech Product Manager',
    avatar: 'SD',
    text: 'The educational platform Haile built transformed student engagement completely. The AI question generation feature alone saved us hundreds of hours of manual work.',
    stars: 5,
  },
  {
    name: 'Tigist Girma',
    role: 'University Tech Lead',
    avatar: 'TG',
    text: 'Outstanding backend architecture on our RAG system. The plagiarism detection accuracy and API performance exceeded all expectations. Highly recommended.',
    stars: 5,
  },
]
