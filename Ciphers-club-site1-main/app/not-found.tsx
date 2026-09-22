import Link from 'next/link'
import { ArrowLeft, Terminal } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

      <div className="relative z-10 w-full max-w-xl text-center">
        <div className="mx-auto mb-8 flex size-16 items-center justify-center rounded-xl border border-accent/30 bg-card/60 text-accent shadow-[0_0_30px_oklch(0.82_0.16_195_/_12%)]">
          <Terminal className="size-7" />
        </div>

        <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
          // signal lost
        </p>

        <h1 className="mt-5 font-mono text-7xl font-bold tracking-tight text-foreground sm:text-8xl">
          404
        </h1>

        <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />

        <h2 className="mt-6 font-mono text-xl font-semibold">
          Page not found.
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
          The requested route does not exist in the CIPHERS network.
          Return to the main terminal and continue exploring.
        </p>

        <div className="mt-9 flex justify-center">
          <Link
            href="/"
            className="rgb-button inline-flex items-center gap-2 rounded-md px-6 py-3 font-mono text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
          >
            <ArrowLeft className="size-4" />
            Return to CIPHERS
          </Link>
        </div>
      </div>
    </main>
  )
}
