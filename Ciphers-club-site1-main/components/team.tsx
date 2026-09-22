import type { Person } from '@/lib/content'
import { council, faculty } from '@/lib/content'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

function PersonCard({
  person,
  index,
}: {
  person: Person
  index: number
}) {
  return (
    <Reveal delay={index * 70}>
      <article
        className="
          rgb-card group h-full rounded-lg border border-border
          bg-card/50 p-5
          transition-all duration-300
          hover:-translate-y-1
          hover:border-accent/50
        "
      >
        <div className="flex items-start gap-4">
          <div
            className="
              flex size-16 shrink-0 items-center justify-center rounded-full
              border border-border bg-background
              font-mono text-xl font-bold text-primary
              transition-all duration-300
              group-hover:border-accent/60
              group-hover:text-accent
              group-hover:shadow-[0_0_22px_rgba(255,214,10,0.18)]
            "
            aria-hidden="true"
          >
            {person.initials}
          </div>

          <div className="min-w-0 text-left">
            <h3 className="font-mono font-semibold">
              {person.name}
            </h3>

            <p className="mt-1 text-sm text-accent">
              {person.role}
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              {person.year}
            </p>
          </div>
        </div>

        <p className="mt-5 text-left text-sm leading-6 text-muted-foreground">
          {person.bio}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {person.skills.map((skill) => (
            <span
              key={skill}
              className="
                rounded-md border border-border
                bg-background/60 px-2 py-1
                font-mono text-[10px] uppercase tracking-wider
                text-muted-foreground
                transition-colors
                group-hover:border-primary/30
              "
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-4">
          {person.facts.map(([label, value]) => (
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
      </article>
    </Reveal>
  )
}

export function Team() {
  return (
    <section
      id="team"
      className="relative mx-auto max-w-6xl px-4 py-24 md:px-6"
    >
      <SectionHeading
        index="03"
        kicker="Team"
        title="The people behind the terminal."
      />

      <p className="mb-8 flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-primary">
        // faculty coordinators
      </p>

      <div className="mb-16 grid gap-5 lg:grid-cols-2">
        {faculty.map((person, i) => (
          <PersonCard
            key={person.id}
            person={person}
            index={i}
          />
        ))}
      </div>

      <p className="mb-8 flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-accent">
        // student council
      </p>

      <div className="grid gap-5 lg:grid-cols-2">
        {council.map((person, i) => (
          <PersonCard
            key={person.id}
            person={person}
            index={i + faculty.length}
          />
        ))}
      </div>
    </section>
  )
}