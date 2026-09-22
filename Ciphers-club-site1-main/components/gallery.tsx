import Image from 'next/image'

import { gallery } from '@/lib/content'
import { cn } from '@/lib/utils'

import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const spans = [
  'sm:col-span-2 sm:row-span-2',
  '',
  '',
  '',
  'sm:col-span-2',
  '',
]

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative mx-auto max-w-6xl px-4 py-24 md:px-6"
    >
      <SectionHeading
        index="05"
        kicker="Gallery"
        title="Snapshots from the field."
      />

      <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-3 md:auto-rows-[220px]">
        {gallery.map((photo, i) => (
          <Reveal
            key={photo.src}
            delay={i * 60}
            className={cn(
              'group relative overflow-hidden rounded-lg border border-border bg-card/80 shadow-[0_10px_35px_rgba(0,8,20,0.22)]',
              'transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_14px_40px_rgba(0,8,20,0.35)]',
              spans[i % spans.length],
            )}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div
              className="
                absolute inset-0
                bg-gradient-to-t from-background/85
                via-background/10 to-transparent
                opacity-0 transition-opacity duration-300
                group-hover:opacity-100
              "
            />

            <div
              className="
                absolute inset-x-0 bottom-0 translate-y-2 p-4
                opacity-0 transition-all duration-300
                group-hover:translate-y-0 group-hover:opacity-100
              "
            >
              <p className="font-mono text-xs leading-5 text-foreground">
                {photo.alt}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        // ciphers in motion
      </p>
    </section>
  )
}