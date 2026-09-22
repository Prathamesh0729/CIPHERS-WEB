import { Suspense } from 'react'
import { About } from '@/components/about'
import { Achievements } from '@/components/achievements'
import { Contact } from '@/components/contact'
import { Events } from '@/components/events'
import { Gallery } from '@/components/gallery'
import { Hero } from '@/components/hero'
import { SiteNav } from '@/components/site-nav'
import { Team } from '@/components/team'

export default function Home() {
  return (
    <Suspense fallback={null}>
      <main>
        <SiteNav />
        <Hero />
        <About />
        <Achievements />
        <Events />
        <Team />
        <Gallery />
        <Contact />
      </main>
    </Suspense>
  )
}
