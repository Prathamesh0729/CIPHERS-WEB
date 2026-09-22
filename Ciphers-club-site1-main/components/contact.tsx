'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Check, Mail, Send } from 'lucide-react'

import { club, departments } from '@/lib/content'
import { SectionHeading } from './section-heading'

export function Contact() {
  const searchParams = useSearchParams()
  const requestedDomain = searchParams.get('domain') ?? ''

  const selectedDomain = departments.some(
    (department) => department.name === requestedDomain,
  )
    ? requestedDomain
    : ''

  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = new FormData(e.currentTarget)

    const name = String(form.get('name') ?? '').trim()
    const email = String(form.get('email') ?? '').trim()
    const message = String(form.get('message') ?? '').trim()
    const domain = String(form.get('domain') ?? '').trim()
    const otherDomain = String(form.get('other-domain') ?? '').trim()

    const subject = `CIPHERS enquiry from ${name}`

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Primary domain: ${domain || 'Not specified'}`,
      `Other domain: ${otherDomain || 'Not specified'}`,
      '',
      'Message:',
      message,
    ].join('\n')

    window.location.href =
      `mailto:${club.email}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`

    setSent(true)

    window.setTimeout(() => {
      setSent(false)
    }, 4000)
  }

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-4 py-24 md:px-6"
    >
      <SectionHeading
        index="06"
        kicker="Contact"
        title="Ping us. We decrypt fast."
      />

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="space-y-7">
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            Want to join, collaborate, or invite us to speak? Drop a message
            or reach out on any channel below.
          </p>

          <a
            href={`mailto:${club.email}`}
            className="rgb-card group inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-4 py-3 font-mono text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
          >
            <Mail className="size-4 text-primary transition-colors group-hover:text-accent" />
            {club.email}
          </a>

          <ul className="grid grid-cols-2 gap-3">
            {club.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rgb-card group flex flex-col rounded-md border border-border bg-card/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
                >
                  <span className="font-mono text-sm font-semibold">
                    {social.label}
                  </span>

                  <span className="mt-0.5 font-mono text-xs text-muted-foreground transition-colors group-hover:text-accent">
                    {social.handle}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="rgb-card rounded-lg border border-border bg-card/30 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              // available domains
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {departments.map((department) => (
                <span
                  key={department.key}
                  className="rounded-md border border-border bg-background/60 px-2.5 py-1.5 font-mono text-[10px] text-muted-foreground"
                >
                  {department.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rgb-card h-fit space-y-5 rounded-lg border border-border bg-card/60 p-6 shadow-[0_14px_40px_rgba(0,8,20,0.22)] sm:p-7"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block font-mono text-sm text-muted-foreground"
            >
              name
            </label>

            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-all focus:border-accent/70 focus:ring-1 focus:ring-ring"
              placeholder="Ada Lovelace"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block font-mono text-sm text-muted-foreground"
            >
              email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-all focus:border-accent/70 focus:ring-1 focus:ring-ring"
              placeholder="you@college.edu"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block font-mono text-sm text-muted-foreground"
            >
              message
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-all focus:border-accent/70 focus:ring-1 focus:ring-ring"
              placeholder="I'd like to join / collaborate…"
            />
          </div>

          <div>
            <label
              htmlFor="domain"
              className="mb-1.5 block font-mono text-sm text-muted-foreground"
            >
              Which domain are you interested in?
            </label>

            <select
              id="domain"
              name="domain"
              required
              defaultValue={selectedDomain}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-all focus:border-accent/70 focus:ring-1 focus:ring-ring"
            >
              <option value="" disabled>
                Select a domain
              </option>

              {departments.map((department) => (
                <option key={department.key} value={department.name}>
                  {department.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="other-domain"
              className="mb-1.5 block font-mono text-sm text-muted-foreground"
            >
              Which other domain are you interested in?
            </label>

            <select
              id="other-domain"
              name="other-domain"
              defaultValue=""
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-all focus:border-accent/70 focus:ring-1 focus:ring-ring"
            >
              <option value="" disabled>
                None / select another
              </option>

              {departments.map((department) => (
                <option key={department.key} value={department.name}>
                  {department.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="rgb-button inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3 font-mono text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
          >
            {sent ? (
              <>
                <Check className="size-4" />
                Mail client opened
              </>
            ) : (
              <>
                <Send className="size-4" />
                Send message
              </>
            )}
          </button>

          <p className="text-center font-mono text-xs text-muted-foreground">
            // opens your mail client with the message pre-filled
          </p>
        </form>
      </div>
    </section>
  )
}
