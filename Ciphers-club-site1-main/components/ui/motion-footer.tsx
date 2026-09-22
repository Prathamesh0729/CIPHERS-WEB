"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight, Terminal, UserPlus, CalendarDays } from "lucide-react"
import { cn } from "@/lib/utils"
import { footer, club } from "@/lib/content"

const ctaIcons = {
  "Join the Club": UserPlus,
  "View Events": CalendarDays,
} as const

/**
 * A magnetic wrapper: the child element eases toward the cursor while hovered.
 * Disabled automatically when the user prefers reduced motion.
 */
function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const strength = 0.4
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - (rect.left + rect.width / 2)
      const y = e.clientY - (rect.top + rect.height / 2)
      gsap.to(el, { x: x * strength, y: y * strength, duration: 0.6, ease: "power3.out" })
    }
    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" })
    }

    el.addEventListener("mousemove", onMove)
    el.addEventListener("mouseleave", onLeave)
    return () => {
      el.removeEventListener("mousemove", onMove)
      el.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return (
    <span ref={ref} className="inline-flex">
      {children}
    </span>
  )
}

export function CinematicFooter() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Reveal the heading + CTAs on scroll into view.
      gsap.from("[data-reveal]", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: root, start: "top 75%" },
      })

      // Parallax drift on the giant background word.
      gsap.to("[data-bigtext]", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: true },
      })

      // Seamless marquee loop.
      const track = root.querySelector<HTMLElement>("[data-marquee]")
      if (track) {
        gsap.to(track, {
          xPercent: -50,
          repeat: -1,
          duration: 22,
          ease: "none",
        })
      }
    }, root)

    return () => ctx.revert()
  }, [])

  const year = new Date().getFullYear()

  return (
    <footer
      ref={rootRef}
      className="relative isolate overflow-hidden border-t border-border bg-background"
      aria-labelledby="footer-heading"
    >
      {/* Giant background wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden"
      >
        <span
          data-bigtext
          className="select-none whitespace-nowrap font-mono text-[22vw] font-bold leading-none tracking-tighter text-foreground/[0.045]"
        >
          {footer.bigText}
        </span>
      </div>

      {/* subtle top glow line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col px-4 pt-20 pb-10 md:px-6">
        {/* CTA block */}
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p
              data-reveal
              className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary"
            >
              <Terminal className="size-3.5" aria-hidden="true" />
              {club.name}
            </p>
            <h2
              id="footer-heading"
              data-reveal
              className="text-balance font-mono text-4xl font-bold tracking-tight text-glow md:text-5xl"
            >
              {footer.heading}
            </h2>
            <p data-reveal className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
              {footer.subheading}
            </p>
          </div>

          <div data-reveal className="flex flex-wrap gap-4">
            {footer.ctas.map((cta) => {
              const Icon = ctaIcons[cta.label as keyof typeof ctaIcons] ?? ArrowUpRight
              const isPrimary = cta.variant === "primary"
              return (
                <Magnetic key={cta.label}>
                  <a
                    href={cta.href}
                    className={cn(
                      "group inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-sm font-medium transition-colors",
                      isPrimary
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-border bg-secondary text-secondary-foreground hover:border-primary/50 hover:text-primary",
                    )}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    {cta.label}
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </a>
                </Magnetic>
              )
            })}
          </div>
        </div>

        {/* Marquee */}
        <div
          className="relative mt-16 overflow-hidden border-y border-border py-4"
          aria-hidden="true"
        >
          <div data-marquee className="flex w-max gap-8 will-change-transform">
            {[...footer.marquee, ...footer.marquee].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-8 font-mono text-sm uppercase tracking-widest text-muted-foreground"
              >
                {item}
                <span className="text-primary">/</span>
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 md:flex-row">
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footer.links.map((link) => {
              const external = link.href.startsWith("http")
              return (
                <a
                  key={link.label}
                  href={link.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          <div className="flex flex-col items-center gap-1 text-center md:items-end md:text-right">
            <p className="font-mono text-xs text-muted-foreground">
              © {year} {club.name}. All rights reserved.
            </p>
            <a
              href={footer.credit.href}
              className="font-mono text-xs text-muted-foreground/70 transition-colors hover:text-primary"
            >
              {footer.credit.label}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
