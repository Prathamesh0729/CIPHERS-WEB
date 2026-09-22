'use client'

import { ChevronLeft, ChevronRight, Trophy } from 'lucide-react'
import { useEffect, useState } from 'react'

import { achievements, highlights } from '@/lib/content'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const achievementImages = [
  {
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=85',
    title: 'CIPHERS Events',
    description: 'Building, competing and collaborating together.',
  },
  {
    src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=85',
    title: 'Teamwork',
    description: 'Ideas turning into projects through collaboration.',
  },
  {
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=85',
    title: 'Innovation',
    description: 'Creating solutions beyond the classroom.',
  },
  {
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85',
    title: 'Programming',
    description: 'Learning, building and solving real problems.',
  },
]

export function Achievements() {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((current) => (current + 1) % achievementImages.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const previousImage = () => {
    setActiveImage(
      (current) =>
        (current - 1 + achievementImages.length) %
        achievementImages.length,
    )
  }

  const nextImage = () => {
    setActiveImage((current) => (current + 1) % achievementImages.length)
  }

  return (
    <section
      id="achievements"
      className="relative overflow-hidden border-y border-border bg-card/20 py-24"
    >
      {/* Warm cinematic atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(255,70,20,0.10),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          index="04"
          kicker="Highlights"
          title="Wins worth decrypting."
        />

        {/* Achievement stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div
                className="
                  rgb-card group h-full rounded-lg border border-border
                  bg-background p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-accent/50
                "
              >
                <p className="font-mono text-4xl font-bold text-primary text-glow transition-colors group-hover:text-accent">
                  {stat.value}
                </p>

                <p className="mt-2 font-mono text-sm font-semibold">
                  {stat.label}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {stat.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Highlights + slideshow */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          {/* Existing highlights */}
          <div>
            <ul className="grid gap-3">
              {highlights.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 70}>
                  <div
                    className="
                      rgb-card flex items-start gap-3 rounded-lg
                      border border-border bg-background/60 p-4
                      transition-all duration-300
                      hover:border-accent/30 hover:bg-card/40
                    "
                  >
                    <Trophy
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />

                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Achievement slideshow */}
          <Reveal delay={220}>
            <div className="group relative overflow-hidden rounded-xl border border-border bg-background shadow-2xl">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                {achievementImages.map((image, index) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.title}
                    className={`
                      absolute inset-0 h-full w-full object-cover
                      transition-all duration-700
                      ${
                        index === activeImage
                          ? 'scale-100 opacity-100'
                          : 'scale-105 opacity-0'
                      }
                    `}
                  />
                ))}

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Warm glow */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,100,30,0.18),transparent_45%)]" />

                {/* Slide information */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                    CIPHERS / {String(activeImage + 1).padStart(2, '0')}
                  </p>

                  <h3 className="mt-2 font-mono text-2xl font-bold text-white text-glow">
                    {achievementImages[activeImage].title}
                  </h3>

                  <p className="mt-1 max-w-md text-sm text-white/70">
                    {achievementImages[activeImage].description}
                  </p>
                </div>

                {/* Previous */}
                <button
                  type="button"
                  onClick={previousImage}
                  aria-label="Previous achievement"
                  className="
                    absolute left-4 top-1/2 -translate-y-1/2
                    flex size-10 items-center justify-center
                    rounded-full border border-white/20
                    bg-black/40 text-white backdrop-blur
                    transition-all duration-300
                    hover:border-accent/60
                    hover:bg-black/70
                    hover:text-accent
                  "
                >
                  <ChevronLeft className="size-5" />
                </button>

                {/* Next */}
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next achievement"
                  className="
                    absolute right-4 top-1/2 -translate-y-1/2
                    flex size-10 items-center justify-center
                    rounded-full border border-white/20
                    bg-black/40 text-white backdrop-blur
                    transition-all duration-300
                    hover:border-accent/60
                    hover:bg-black/70
                    hover:text-accent
                  "
                >
                  <ChevronRight className="size-5" />
                </button>

                {/* Dots */}
                <div className="absolute right-6 top-6 flex gap-2">
                  {achievementImages.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      aria-label={`Show slide ${index + 1}`}
                      className={`
                        h-1.5 rounded-full transition-all duration-300
                        ${
                          index === activeImage
                            ? 'w-8 bg-accent shadow-[0_0_10px_rgba(255,214,10,0.65)]'
                            : 'w-2 bg-white/40 hover:bg-white/70'
                        }
                      `}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}