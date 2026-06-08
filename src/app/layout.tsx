import type { Metadata } from 'next'
import './globals.css'
/* eslint-disable @next/next/no-page-custom-font */

export const metadata: Metadata = {
  title: 'Haile Kinfu | Full-Stack Software Engineer',
  description: 'Full-Stack Software Engineer & Mobile Application Developer based in Addis Ababa, Ethiopia. Building scalable web applications, educational platforms, and modern user experiences.',
  keywords: ['Haile Kinfu', 'Full-Stack Developer', 'Software Engineer', 'React', 'Next.js', 'Node.js', 'Addis Ababa', 'Ethiopia'],
  authors: [{ name: 'Haile Kinfu' }],
  openGraph: {
    title: 'Haile Kinfu | Full-Stack Software Engineer',
    description: 'Building scalable web applications and modern user experiences.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haile Kinfu | Full-Stack Software Engineer',
    description: 'Building scalable web applications from Addis Ababa, Ethiopia.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;500;700;800;900&family=Satoshi:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-body antialiased`}>
        {children}
      </body>
    </html>
  )
}
