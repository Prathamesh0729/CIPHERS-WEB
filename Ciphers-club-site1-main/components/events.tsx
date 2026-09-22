import { CalendarDays } from 'lucide-react'
import { pastEvents, upcomingEvents } from '@/lib/content'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

function EventStats({
  figures,
}: {
  figures: [string, string][]
}) {
  return (
    <div className="mt-6 grid grid-cols-3 gap-2 border-t border-border pt-4">
      {figures.map(([label, value]) => (
        <div key={label} className="min-w-0">
          <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
            {label}
          </p>
          <p className="mt-1 truncate font-mono text-xs text-foreground">
            {value}
          </p>
        </div>
      ))}
    </div>
  )
}

export function Events() {
  return (
    <section
      id="events"
      className="relative border-y border-border bg-card/20 py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          index="02"
          kicker="Events"
          title="Workshops, sessions & hackathons."
        />

        {upcomingEvents.length > 0 && (
          <div className="mb-16 sm:mb-20">
            <p className="mb-4 flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-accent">
              <span className="size-2 animate-pulse rounded-full bg-accent shadow-[0_0_10px_rgba(255,214,10,0.60)]" />
              Upcoming
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              {upcomingEvents.map((event, i) => (
                <Reveal key={event.title} delay={i * 100}>
                  <article
                    className="
                      rgb-card group h-full rounded-lg
                      border border-accent/25 bg-background p-6
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-accent/70
                      hover:shadow-[0_0_28px_rgba(255,214,10,0.08)]
                    "
                  >
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                      <span className="rounded-md bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent">
                        {event.type}
                      </span>

                      <time className="font-mono text-xs text-muted-foreground">
                        {formatDate(event.date)}
                      </time>
                    </div>

                    <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-primary">
                      {event.by}
                    </p>

                    <h3 className="font-mono text-xl font-semibold">
                      {event.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {event.description}
                    </p>

                    <EventStats figures={event.figs} />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Past events */}
        <div>
          <p className="mb-7 flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-muted-foreground">
            <CalendarDays className="size-4 text-accent" />
            Past events
          </p>

          {/* Scrollable past-events container */}
          <div
            className="
              max-h-[560px]
              overflow-y-auto
              overflow-x-hidden
              pr-4
              scrollbar-thin
              scrollbar-track-transparent
              scrollbar-thumb-[#6b2414]
              hover:scrollbar-thumb-[#ffc300]
            "
          >
            <ol className="relative ml-3 border-l border-border">
              {pastEvents.map((event, i) => (
                <Reveal
                  as="li"
                  key={event.title}
                  delay={i * 80}
                  className="mb-8 pl-6 last:mb-0"
                >
                  <span
                    className="
                      absolute -left-[7px] mt-1.5 size-3 rounded-full
                      border-2 border-background bg-primary/70
                      shadow-[0_0_10px_rgba(255,195,0,0.40)]
                    "
                    aria-hidden="true"
                  />

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <time className="font-mono text-xs text-accent">
                      {formatDate(event.date)}
                    </time>

                    <span className="font-mono text-xs text-muted-foreground">
                      · {event.type}
                    </span>

                    <span className="font-mono text-xs text-primary">
                      · {event.by}
                    </span>
                  </div>

                  <h3 className="mt-1 font-mono text-lg font-semibold">
                    {event.title}
                  </h3>

                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {event.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                    {event.figs.map(([label, value]) => (
                      <span
                        key={label}
                        className="font-mono text-[10px] text-muted-foreground"
                      >
                        <span className="text-foreground">{value}</span>{' '}
                        {label}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}