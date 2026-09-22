import Link from 'next/link'
import {
  Code2,
  GraduationCap,
  Rocket,
  PlayCircle,
  ArrowUpRight,
} from 'lucide-react'

import { departments } from '@/lib/content'
import { Reveal } from './reveal'

const icons = {
  programming: Code2,
  'higher-ed': GraduationCap,
  startup: Rocket,
  social: PlayCircle,
} as const

const routes = {
  programming: '/programming',
  'higher-ed': '/higher-education',
  startup: '/research-startups',
  social: '/social-media',
} as const

export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-4 py-24 md:px-6"
    >
      <div className="mb-12 text-center">
        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-primary">
          // club domains
        </p>

        <h2 className="font-mono text-4xl font-bold tracking-tight md:text-5xl">
          CIPHERS
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Four departments. One network. Choose a domain to explore its
          activities, leadership, and members.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {departments.map((department, index) => {
          const Icon = icons[department.key as keyof typeof icons]
          const href = routes[department.key as keyof typeof routes]

          return (
            <Reveal key={department.key} delay={index * 100}>
              <Link
                href={href}
                className="
                  rgb-card group block h-full rounded-lg
                  border border-border bg-card/50 p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-accent/60
                  hover:bg-card
                  hover:shadow-[0_0_28px_rgba(255,214,10,0.08)]
                "
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="
                      flex size-12 items-center justify-center rounded-md
                      border border-border bg-background text-primary
                      transition-all duration-300
                      group-hover:border-accent/50
                      group-hover:text-accent
                      group-hover:shadow-[0_0_18px_rgba(255,214,10,0.15)]
                    "
                  >
                    <Icon className="size-6" aria-hidden="true" />
                  </div>

                  <ArrowUpRight
                    className="
                      size-4 text-muted-foreground
                      transition-all duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-accent
                    "
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  {department.key}
                </p>

                <h3 className="mt-2 font-mono text-lg font-semibold text-foreground">
                  {department.name}
                </h3>

                <p className="mt-3 font-mono text-xs leading-5 text-primary/80">
                  {department.tagline}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {department.blurb}
                </p>

                <div className="mt-5 border-t border-border pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-accent">
                    Open department →
                  </span>
                </div>
              </Link>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}