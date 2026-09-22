import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, JetBrains_Mono } from 'next/font/google'

import { CinematicFooter } from '@/components/ui/motion-footer'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'CIPHERS — Coding & Cybersecurity Club',
  description:
    'CIPHERS — Club for Innovation, Programming, Higher Education, Research and Startups. Explore programming, higher education, start-up and innovation, and social media.',
  keywords: [
    'CIPHERS',
    'AISSMS College of Engineering',
    'coding club',
    'cybersecurity',
    'programming',
    'cryptography',
    'CTF',
    'innovation',
    'higher education',
    'startups',
  ],
  openGraph: {
    title: 'CIPHERS — Coding & Cybersecurity Club',
    description:
      'Decode. Defend. Deploy. Explore the CIPHERS coding and cybersecurity club.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a140f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        <CinematicFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
