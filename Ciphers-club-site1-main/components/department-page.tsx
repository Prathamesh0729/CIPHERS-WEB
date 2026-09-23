import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CalendarDays, Mail, Users } from 'lucide-react'

import type { Department } from '@/lib/content'

const maleNames = new Set([
  'Dr. A. Kulkarni',
  'Prof. S. Deshmukh',
  'Rohan Shinde',
  'Karan Patil',
  'Ankit More',
  'Vivek Dhage',
  'Harsh Sawant',
  'Manas Gokhale',
  'Aman Ansari',
  'Siddharth Kamat',
  'Om Pawar',
  'Varun Iyer',
  'Saurabh Nikam',
  'Farhan Syed',
  'Ajinkya Kadam',
  'Arjun Bhide',
  'Nikhil Thorat',
  'Devang Gupta',
])

const maleImages = Array.from(
  { length: 15 },
  (_, index) => `/team/team-${String(index + 1).padStart(2, '0')}.jpg`,
)

const femaleImages = Array.from(
  { length: 15 },
  (_, index) => `/team/team-${String(index + 16).padStart(2, '0')}.jpg`,
)

function getProfileImage(name: string, index: number) {
  const images = maleNames.has(name) ? maleImages : femaleImages
  return images[index % images.length]
}

type DepartmentPageProps = {
  department: Department
}

export function DepartmentPage({ department }: DepartmentPageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-background" />

        <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />

        <div className="absolute left-[8%] top-[18%] size-72 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute bottom-[12%] right-[8%] size-80 rounded-full bg-accent/5 blur-3xl" />

        <div className="absolute left-1/2 top-1/3 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <nav className="flex items-center justify-between gap-3">
          <Link
            href="/home"
            className="
              inline-flex items-center gap-2 rounded-md
              border border-border bg-card/50 px-4 py-2
              font-mono text-xs text-muted-foreground
              backdrop-blur transition-all duration-300
              hover:border-accent/60 hover:text-accent
            "
          >
            <ArrowLeft className="size-3.5" />
            CIPHERS
          </Link>

          <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:block">
            Department / {department.key}
          </span>
        </nav>

        <header className="pb-12 pt-20 sm:pb-16 sm:pt-32">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-accent sm:text-xs sm:tracking-[0.4em]">
            CIPHERS Department
          </p>

          <h1 className="max-w-5xl font-mono text-4xl font-bold leading-[0.95] tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl">
            {department.name}
          </h1>

          <div className="mt-7 h-px w-40 bg-gradient-to-r from-accent via-primary to-transparent" />

          <p className="mt-6 max-w-2xl font-mono text-sm leading-6 text-muted-foreground sm:mt-7 sm:text-base sm:leading-7">
            {department.tagline}
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground sm:mt-5 sm:leading-7">
            {department.blurb}
          </p>
        </header>

        <section className="grid gap-3 sm:gap-4 md:grid-cols-2">
          <article className="rgb-card rounded-lg border border-border bg-card/60 p-5 shadow-[0_10px_30px_rgba(0,8,20,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 sm:p-6">
            <div className="mb-5 flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary shadow-[0_0_10px_rgba(255,195,0,0.50)]" />
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                What we do
              </p>
            </div>

            <ul className="space-y-4">
              {department.points.map((point, index) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-6 text-muted-foreground"
                >
                  <span className="font-mono text-xs text-accent">
                    0{index + 1}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rgb-card rounded-lg border border-border bg-card/60 p-5 shadow-[0_10px_30px_rgba(0,8,20,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 sm:p-6">
            <div className="mb-5 flex items-center gap-2">
              <CalendarDays className="size-4 text-accent" />
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Department info
              </p>
            </div>

            <div className="space-y-4">
              {department.meta.map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 border-b border-border pb-3 last:border-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {label}
                  </span>

                  <span className="font-mono text-xs text-foreground sm:text-right">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-16 sm:mt-20">
          <div className="mb-8">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              // department leadership
            </p>

            <h2 className="mt-2 font-mono text-xl font-semibold text-white sm:mt-3 sm:text-2xl">
              Heads &amp; co-heads
            </h2>
          </div>

          <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
            {[department.head, department.cohead].map((person) => (
              <article
                key={person.id}
                className="rgb-card rounded-lg border border-border bg-card/60 p-5 shadow-[0_10px_30px_rgba(0,8,20,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="
                      relative size-16 shrink-0 overflow-hidden rounded-full
                      border border-border bg-background
                      transition-all duration-300
                      group
                    "
                  >
                    <Image
                      src={getProfileImage(person.name, person.name.length)}
                      alt={`${person.name} profile`}
                      fill
                      sizes="64px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div>
                    <h3 className="font-mono font-semibold text-white">
                      {person.name}
                    </h3>

                    <p className="mt-1 font-mono text-xs text-accent">
                      {person.role}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {person.year}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-muted-foreground">
                  {person.bio}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {person.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-background/60 px-2 py-1 font-mono text-[10px] text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={`mailto:${person.email}`}
                  className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-accent transition-colors hover:text-primary"
                >
                  <Mail className="size-3.5" />
                  {person.email}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 pb-16 sm:mt-20 sm:pb-20">
          <div className="mb-7 flex items-end justify-between gap-4 sm:mb-9">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                // active members
              </p>

              <h2 className="mt-2 font-mono text-xl font-semibold text-white sm:mt-3 sm:text-2xl">
                Department roster
              </h2>
            </div>

            <Users className="size-5 text-primary" />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {department.members.map((member) => (
              <article
                key={member.name}
                className="
                  rgb-card group rounded-lg border border-border
                  bg-card/50 p-4 transition-all duration-300
                  hover:-translate-y-0.5 hover:border-accent/50
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      relative size-11 shrink-0 overflow-hidden rounded-full
                      border border-border bg-background
                      transition-all duration-300
                      group-hover:border-accent/60
                      group-hover:shadow-[0_0_18px_rgba(255,214,10,0.18)]
                    "
                  >
                    <Image
                      src={getProfileImage(member.name, member.name.length)}
                      alt={`${member.name} profile`}
                      fill
                      sizes="44px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate font-mono text-sm font-semibold">
                      {member.name}
                    </h3>

                    <p className="mt-1 truncate font-mono text-[10px] text-muted-foreground">
                      {member.year}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12 sm:mb-16">
          <div className="rgb-card relative overflow-hidden rounded-lg border border-accent/40 bg-card/60 p-6 shadow-[0_14px_40px_rgba(0,8,20,0.24)] sm:p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-accent/5 blur-3xl" />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  // join the network
                </p>

                <h2 className="mt-2 font-mono text-xl font-semibold text-white sm:mt-3 sm:text-2xl">
                  Interested in {department.name}?
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                  Tell us what you want to build, learn, or contribute.
                  The CIPHERS team will take it from there.
                </p>
              </div>

              <Link
                href={`/home?domain=${encodeURIComponent(department.name)}#contact`}
                className="rgb-button inline-flex w-full shrink-0 items-center justify-center rounded-md px-5 py-3 font-mono text-xs font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
              >
                Join {department.name} →
              </Link>
            </div>
          </div>
        </section>

        <footer className="border-t border-border py-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              CIPHERS · {department.name}
            </p>

            <Link
              href="/home"
              className="font-mono text-xs text-accent transition-colors hover:text-primary"
            >
              Return to main terminal →
            </Link>
          </div>
        </footer>
      </div>
    </main>
  )
}
