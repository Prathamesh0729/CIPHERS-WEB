'use client'

import { ArrowRight, ShieldCheck } from 'lucide-react'

import { club } from '@/lib/content'

import { ScrambleText } from './scramble-text'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Cinematic hero background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://cdn.21st.dev/assets/mirror/a8/a8cf38f65f7315f95eba8c803c4a80a9d78cb2ea36fbfee49828396e4a0b9737.jpg')",
        }}
      />

      {/* Dark cinematic overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/35" />

      {/* Warm red/orange atmospheric glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_52%,rgba(255,80,20,0.18),transparent_38%)]" />

      {/* Dark edge vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.78)_100%)]" />

      {/* Existing grid */}
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* Ambient CIPHERS glow */}
      <div className="pointer-events-none absolute left-[8%] top-1/3 size-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-[8%] size-72 rounded-full bg-accent/5 blur-3xl" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-20 text-center md:px-6">
        {/* College badge */}
        <div className="rgb-card inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary shadow-[0_0_10px_rgba(255,195,0,0.55)]" />
          </span>

          <span>{club.college}</span>
        </div>

        {/* Main CIPHERS title */}
        <h1 className="mt-6 font-mono text-6xl font-bold tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="text-glow text-white">
            {/* C — inactive */}
            <span>C</span>

            {/* I — Startups & Innovation */}
            <a
              href="/research-startups"
              aria-label="Startups and Innovation"
              title="Startups & Innovation"
              className="inline-block cursor-pointer text-white transition-all duration-300 hover:-translate-y-1 hover:text-accent hover:drop-shadow-[0_0_20px_rgba(255,214,10,0.75)]"
            >
              I
            </a>

            {/* P — Programming */}
            <a
              href="/programming"
              aria-label="Programming"
              title="Programming"
              className="inline-block cursor-pointer text-white transition-all duration-300 hover:-translate-y-1 hover:text-accent hover:drop-shadow-[0_0_20px_rgba(255,214,10,0.75)]"
            >
              P
            </a>

            {/* H — Higher Education */}
            <a
              href="/higher-education"
              aria-label="Higher Education"
              title="Higher Education"
              className="inline-block cursor-pointer text-white transition-all duration-300 hover:-translate-y-1 hover:text-accent hover:drop-shadow-[0_0_20px_rgba(255,214,10,0.75)]"
            >
              H
            </a>

            {/* E — Higher Education */}
            <a
              href="/higher-education"
              aria-label="Higher Education"
              title="Higher Education"
              className="inline-block cursor-pointer text-white transition-all duration-300 hover:-translate-y-1 hover:text-accent hover:drop-shadow-[0_0_20px_rgba(255,214,10,0.75)]"
            >
              E
            </a>

            {/* R — Research & Startups */}
            <a
              href="/research-startups"
              aria-label="Research and Startups"
              title="Research & Startups"
              className="inline-block cursor-pointer text-white transition-all duration-300 hover:-translate-y-1 hover:text-accent hover:drop-shadow-[0_0_20px_rgba(255,214,10,0.75)]"
            >
              R
            </a>

            {/* S — Social Media and Event Coordination */}
            <a
              href="/social-media"
              aria-label="Social Media and Event Coordination"
              title="Social Media and Event Coordination"
              className="inline-block cursor-pointer text-white transition-all duration-300 hover:-translate-y-1 hover:text-accent hover:drop-shadow-[0_0_20px_rgba(255,214,10,0.75)]"
            >
              S
            </a>
          </span>
        </h1>

        {/* Tagline */}
        <ScrambleText
          as="p"
          text={club.tagline}
          startDelay={600}
          className="mt-4 font-mono text-xl text-accent md:text-2xl"
        />

        {/* Introduction */}
        <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {club.intro}
        </p>

        {/* Actions */}
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="rgb-button group inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-mono text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
          >
            Join Us
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#events"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/50 px-6 py-3 font-mono text-sm font-semibold text-foreground backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent hover:shadow-[0_0_20px_rgba(255,214,10,0.10)]"
          >
            <ShieldCheck className="size-4" />
            Explore Events
          </a>
        </div>

        {/* Terminal */}
        <div className="rgb-card mt-16 w-full max-w-md rounded-lg border border-border bg-card/60 p-4 text-left font-mono text-sm backdrop-blur transition-all duration-300 hover:border-accent/40">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="size-3 rounded-full bg-secondary/70 shadow-[0_0_8px_rgba(0,53,102,0.40)]" />
            <span className="size-3 rounded-full bg-accent/70 shadow-[0_0_8px_rgba(255,214,10,0.40)]" />
            <span className="size-3 rounded-full bg-primary/70 shadow-[0_0_8px_rgba(255,195,0,0.40)]" />

            <span className="ml-2 text-xs text-muted-foreground">
              ~/ciphers — bash
            </span>
          </div>

          <p className="text-muted-foreground">
            <span className="text-primary">$</span> whoami
          </p>

          <p className="text-foreground">
            a curious engineer who likes breaking &amp; building
          </p>

          <p className="mt-1 text-muted-foreground">
            <span className="text-primary">$</span> ./join --club ciphers
            <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-primary shadow-[0_0_8px_rgba(255,195,0,0.45)]" />
          </p>
        </div>
      </div>
    </section>
  )
}