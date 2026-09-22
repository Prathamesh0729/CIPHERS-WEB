'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

import { navItems, club, departments } from '@/lib/content'
import { cn } from '@/lib/utils'

const departmentRoutes = {
  programming: '/programming',
  'higher-ed': '/higher-education',
  startup: '/research-startups',
  social: '/social-media',
} as const

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [departmentsOpen, setDepartmentsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[]

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const closeMenus = () => {
    setOpen(false)
    setDepartmentsOpen(false)
  }

  // Main site sections live on /home.
  // / is reserved for the CIPHERS opening page.
  const sectionHref = (href: string) => {
    return href === '#home' ? '/home' : `/home${href}`
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-accent/20 bg-background/75 shadow-[0_8px_30px_rgba(255,214,10,0.05)] backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6"
        aria-label="Primary"
      >
        <Link
          href="/home"
          onClick={closeMenus}
          className="font-mono text-lg font-bold tracking-tight transition-colors hover:text-accent"
        >
          {club.name}
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={sectionHref(item.href)}
                className={cn(
                  'rounded-md px-3 py-2 font-mono text-sm transition-colors',
                  active === item.href
                    ? 'text-accent'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li
            className="relative"
            onMouseEnter={() => setDepartmentsOpen(true)}
            onMouseLeave={() => setDepartmentsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setDepartmentsOpen((value) => !value)}
              aria-expanded={departmentsOpen}
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 font-mono text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              Departments
              <ChevronDown
                className={cn(
                  'size-3.5 transition-transform duration-200',
                  departmentsOpen && 'rotate-180',
                )}
              />
            </button>

            <div
              className={cn(
                'absolute right-0 top-full pt-2 transition-all duration-200',
                departmentsOpen
                  ? 'visible translate-y-0 opacity-100'
                  : 'invisible -translate-y-1 opacity-0',
              )}
            >
              <div className="w-64 rounded-lg border border-border bg-background/95 p-2 shadow-2xl backdrop-blur-xl">
                {departments.map((department) => {
                  const href =
                    departmentRoutes[
                      department.key as keyof typeof departmentRoutes
                    ]

                  return (
                    <Link
                      key={department.key}
                      href={href}
                      onClick={() => setDepartmentsOpen(false)}
                      className="group block rounded-md border border-transparent px-3 py-3 transition-all duration-200 hover:border-accent/20 hover:bg-accent/5"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-mono text-xs font-semibold text-foreground group-hover:text-accent">
                          {department.name}
                        </span>

                        <span className="text-xs text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent">
                          →
                        </span>
                      </div>

                      <p className="mt-1 font-mono text-[10px] leading-4 text-muted-foreground">
                        {department.tagline}
                      </p>
                    </Link>
                  )
                })}
              </div>
            </div>
          </li>

          <li>
            <Link
              href="/home#contact"
              className="rgb-card ml-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-sm font-medium text-primary transition-all duration-300 hover:border-accent/60 hover:bg-accent/10 hover:text-accent"
            >
              Join Us
            </Link>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-md p-2 text-foreground transition-colors hover:text-accent md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height] duration-300 md:hidden',
          open ? 'max-h-[42rem]' : 'max-h-0 border-t-transparent',
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={sectionHref(item.href)}
                onClick={closeMenus}
                className={cn(
                  'block rounded-md px-3 py-2 font-mono text-sm transition-colors',
                  active === item.href
                    ? 'bg-accent/10 text-accent'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li className="mt-2 border-t border-border pt-2">
            <p className="px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              // departments
            </p>

            {departments.map((department) => {
              const href =
                departmentRoutes[
                  department.key as keyof typeof departmentRoutes
                ]

              return (
                <Link
                  key={department.key}
                  href={href}
                  onClick={closeMenus}
                  className="flex items-center justify-between rounded-md px-3 py-2.5 font-mono text-sm text-muted-foreground transition-colors hover:bg-accent/5 hover:text-accent"
                >
                  {department.name}
                  <span>→</span>
                </Link>
              )
            })}
          </li>

          <li className="mt-2">
            <Link
              href="/home#contact"
              onClick={closeMenus}
              className="rgb-card block rounded-md border border-primary/40 bg-primary/10 px-3 py-2.5 text-center font-mono text-sm font-medium text-primary transition-all duration-300 hover:border-accent/60 hover:bg-accent/10 hover:text-accent"
            >
              Join Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}