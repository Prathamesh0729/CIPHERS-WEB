'use client'

import Image from 'next/image'
import Link from 'next/link'
import { WebGLShader } from '@/components/ui/web-gl-shader'

export function CiphersIntro() {
  return (
    <section
      className="fixed inset-0 z-[100] overflow-hidden bg-black"
      aria-label="Ciphers Club introduction"
    >
      <WebGLShader />

      <div className="absolute inset-0 bg-black/45" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.32)_55%,rgba(0,0,0,0.84)_100%)]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center overflow-y-auto px-5 py-10">
        <div className="w-full max-w-3xl text-center">

          {/* Centered logo row */}
          <div className="mb-6 flex items-center justify-center gap-5 sm:gap-7">

            {/* AISSMS COE Logo */}
            <div className="relative rounded-full bg-black/30 p-2 backdrop-blur-sm">
              <Image
                src="/ciphers-logo.jpeg"
                alt="AISSMS College of Engineering"
                width={110}
                height={110}
                priority
                className="h-20 w-20 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] sm:h-24 sm:w-24"
              />
            </div>

            {/* CIPHERS Logo */}
            <div className="relative rounded-xl border border-white/10 bg-black/25 p-2 backdrop-blur-md">
              <Image
                src="/aissms-coe-logo.png"
                alt="CIPHERS"
                width={110}
                height={110}
                priority
                className="h-20 w-20 object-contain drop-shadow-[0_0_18px_rgba(255,214,10,0.35)] sm:h-24 sm:w-24"
              />
            </div>

          </div>

          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-white/55 sm:text-[11px] sm:tracking-[0.45em]">
              AISSMS College of Engineering presents
            </p>

            <p className="mx-auto mt-3 max-w-2xl font-mono text-[8px] font-medium uppercase leading-5 tracking-[0.18em] text-[#FFD60A]/85 drop-shadow-[0_0_10px_rgba(255,214,10,0.45)] sm:text-[10px] sm:tracking-[0.25em]">
              Club for Innovation, Programming, Higher Education, Research and Startups
            </p>
          </div>

          <h1 className="mt-8 font-sans text-6xl font-black tracking-[-0.07em] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.12)] sm:text-7xl md:text-8xl lg:text-[9rem]">
            CIPHERS
          </h1>

          <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#FFC300]/70 to-transparent" />

          <p className="mx-auto mt-6 max-w-xl font-mono text-xs leading-6 tracking-wide text-white/50 sm:text-sm">
<<<<<<< HEAD
            Decode. Defend. Deploy. — CIPHERS — CIPHERS — CIPHERS
=======
            Decode. Defend. Deploy. — CIPHERS — CIPHERS — CIPHERS — CIPHERS — CIPHERS — CIPHERS — CIPHERS — CIPHERS — CIPHERS — CIPHERS
>>>>>>> 40a8c7b (test: update CIPHERS intro)
            <br />
          </p>

          {/* Action buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

            {/* Enter the Ciphers → Home */}
            <Link
              href="/home"
              className="group relative overflow-hidden rounded-full border border-white/25 bg-white/[0.07] px-9 py-4 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-[#FFD60A]/60 hover:bg-white/[0.12] hover:shadow-[0_0_35px_rgba(255,214,10,0.20)] active:scale-[0.98]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative flex items-center gap-3">
                <span>Enter the Ciphers</span>
                <span className="text-[#FFD60A] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>

            {/* Login → Login Page */}
            <Link
              href="/login"
              className="rounded-full border border-[#FFD60A]/50 bg-[#FFD60A]/[0.06] px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#FFD60A] backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-[#FFD60A] hover:bg-[#FFD60A]/[0.12] hover:shadow-[0_0_30px_rgba(255,214,10,0.15)] active:scale-[0.98]"
            >
              LOGIN
            </Link>

          </div>

        </div>
      </div>
    </section>
  )
}