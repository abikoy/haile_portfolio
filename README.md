# Haile Kinfu — Developer Portfolio

 portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## 🎨 Design System

**Color Palette** (custom developer theme — deep forest-green + electric amber):
- Primary: `#22c55e` (brand green)
- Accent: `#fbbf24` (amber)
- Background: `#060d0a` (near-black green-tinted ink)
- Surface: `#0f2318` glassmorphism cards

**Typography:**
- Display: Cabinet Grotesk (headings)
- Body: Satoshi (paragraphs)
- Mono: Geist Mono (code, labels)

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript
- **Fonts:** Google Fonts (Cabinet Grotesk, Satoshi) + Geist Mono

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout, metadata, fonts
│   ├── page.tsx         # Main page (assembles all sections)
│   └── globals.css      # Tailwind directives + global styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx   # Sticky nav with mobile menu
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx         # Typing animation, profile card
│       ├── About.tsx        # Bio + highlight cards
│       ├── Skills.tsx       # Tech stack by category
│       ├── Projects.tsx     # 6 projects with real GitHub links
│       ├── Experience.tsx   # Timeline
│       ├── Services.tsx     # Service offering cards
│       ├── Github.tsx       # Live GitHub stats images
│       ├── Testimonials.tsx
│       └── Contact.tsx      # Form with loading/success state
├── lib/
│   ├── data.ts          # All portfolio content (projects, skills, etc.)
│   └── utils.ts         # cn() utility
└── types/
    └── index.ts         # TypeScript interfaces
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

## 📝 Customization

All content lives in **`src/lib/data.ts`** — edit it to update:
- Project descriptions, GitHub links, tech stacks
- Skills per category
- Timeline entries
- Testimonials
- Services

To update contact email, edit `src/components/sections/Contact.tsx`.

To add your CV file, drop `cv.pdf` into the `public/` folder. The Download CV button already points to `/cv.pdf`.





## ✅ Features

- [x] Dark mode (custom green-ink palette)
- [x] Fully responsive (mobile, tablet, desktop)
- [x] Framer Motion scroll animations
- [x] Typing text animation in hero
- [x] Glassmorphism cards
- [x] Live GitHub stats (readme-stats API)
- [x] Contact form with loading/success state
- [x] SEO metadata (title, description, og, twitter)
- [x] TypeScript throughout
- [x] Vercel-ready deployment

---

Built with 💚 by Haile Kinfu — Addis Ababa, Ethiopia 🇪🇹
