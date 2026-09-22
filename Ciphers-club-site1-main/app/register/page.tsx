"use client"

import { FormEvent, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    window.location.href = "/home"
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#000814] text-white flex items-center justify-center px-6 py-10">

      {/* Animated background grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(#003566 1px, transparent 1px),
            linear-gradient(90deg, #003566 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          animation: "gridMove 12s linear infinite",
        }}
      />

      {/* Scan line */}
      <div className="absolute inset-x-0 top-0 h-px bg-[#FFC300]/60 shadow-[0_0_20px_#FFC300] animate-scan" />

      {/* Main atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#003566]/20 blur-[140px] animate-pulse" />

      {/* Floating particles */}
      <div className="absolute left-[12%] top-[20%] h-1 w-1 rounded-full bg-[#FFC300] shadow-[0_0_10px_#FFC300] animate-float" />
      <div className="absolute right-[18%] top-[30%] h-1 w-1 rounded-full bg-[#FFD60A] shadow-[0_0_10px_#FFD60A] animate-float-delayed" />
      <div className="absolute left-[25%] bottom-[22%] h-1 w-1 rounded-full bg-[#FFC300] shadow-[0_0_10px_#FFC300] animate-float-slow" />
      <div className="absolute right-[12%] bottom-[18%] h-1 w-1 rounded-full bg-[#FFD60A] shadow-[0_0_10px_#FFD60A] animate-float" />

      {/* Register section */}
      <section
        className={`relative z-10 w-full max-w-md transition-all duration-1000 ${
          mounted
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >

        {/* Terminal header */}
        <div className="mb-4 flex items-center justify-between px-2 font-mono text-[10px] tracking-[0.25em] text-[#003566]">
          <span>SYS://REGISTER</span>

          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FFC300] shadow-[0_0_8px_#FFC300]" />
            SECURE
          </span>
        </div>

        {/* Card */}
        <div className="group relative overflow-hidden rounded-2xl border border-[#003566] bg-[#000814]/90 p-8 shadow-[0_0_60px_rgba(0,53,102,0.25)] backdrop-blur-xl transition-all duration-500 hover:border-[#FFC300]/50 hover:shadow-[0_0_70px_rgba(255,195,0,0.08)]">

          {/* Card top scan */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFC300] to-transparent opacity-50" />

          {/* Corner decorations */}
          <div className="absolute left-3 top-3 h-3 w-3 border-l border-t border-[#FFC300]/50" />
          <div className="absolute right-3 top-3 h-3 w-3 border-r border-t border-[#FFC300]/50" />
          <div className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-[#FFC300]/50" />
          <div className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-[#FFC300]/50" />

          {/* Header */}
          <div className="mb-7 text-center">

            {/* Club logo */}
            <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center">

              {/* Rotating frame */}
              <div className="absolute inset-0 rotate-45 rounded-xl border border-[#FFC300]/30 animate-spin-slow" />

              {/* Secondary frame */}
              <div className="absolute inset-1 rounded-xl border border-[#003566]" />

              {/* Club logo */}
              <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[#FFC300] bg-[#001D3D]/50 shadow-[0_0_25px_rgba(255,195,0,0.15)] transition-all duration-500 group-hover:shadow-[0_0_35px_rgba(255,195,0,0.3)]">
                <Image
                  src="/aissms-coe-logo.png"
                  alt="AISSMS COE Logo"
                  width={64}
                  height={64}
                  priority
                  className="h-full w-full object-contain p-2"
                />
              </div>

            </div>

            <h1 className="font-mono text-3xl font-bold tracking-[0.25em]">
              CIPHERS
            </h1>

            <div className="mt-3 flex items-center justify-center gap-2 font-mono text-[10px] tracking-[0.3em] text-gray-500">
              <span className="h-px w-8 bg-[#003566]" />
              CREATE OPERATOR ACCOUNT
              <span className="h-px w-8 bg-[#003566]" />
            </div>
          </div>

          {/* Status */}
          <div className="mb-6 rounded-lg border border-[#003566]/70 bg-[#001D3D]/20 px-4 py-3 font-mono text-[10px] text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-[#FFC300]">&gt;</span>
              <span>INITIALIZING REGISTRATION...</span>
            </div>

            <div className="mt-1 flex items-center gap-2">
              <span className="text-[#FFC300]">&gt;</span>
              <span className="animate-pulse">
                SECURE CHANNEL ESTABLISHED
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleRegister} className="space-y-4">

            {/* Name */}
            <div className="group/input">
              <label
                htmlFor="name"
                className="mb-2 block font-mono text-[10px] font-semibold tracking-[0.25em] text-gray-500 transition-colors group-focus-within/input:text-[#FFC300]"
              >
                OPERATOR NAME
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[#003566] transition-colors group-focus-within/input:text-[#FFC300]">
                  ◆
                </span>

                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="operator"
                  className="w-full rounded-lg border border-[#003566] bg-[#001D3D]/30 py-3 pl-10 pr-4 font-mono text-sm text-white placeholder:text-gray-700 outline-none transition-all duration-300 focus:border-[#FFC300] focus:bg-[#001D3D]/50 focus:shadow-[0_0_20px_rgba(255,195,0,0.06)]"
                />
              </div>
            </div>

            {/* Email */}
            <div className="group/input">
              <label
                htmlFor="email"
                className="mb-2 block font-mono text-[10px] font-semibold tracking-[0.25em] text-gray-500 transition-colors group-focus-within/input:text-[#FFC300]"
              >
                EMAIL ADDRESS
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[#003566] transition-colors group-focus-within/input:text-[#FFC300]">
                  @
                </span>

                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="operator@ciphers.dev"
                  className="w-full rounded-lg border border-[#003566] bg-[#001D3D]/30 py-3 pl-10 pr-4 font-mono text-sm text-white placeholder:text-gray-700 outline-none transition-all duration-300 focus:border-[#FFC300] focus:bg-[#001D3D]/50 focus:shadow-[0_0_20px_rgba(255,195,0,0.06)]"
                />
              </div>
            </div>

            {/* Password */}
            <div className="group/input">
              <label
                htmlFor="password"
                className="mb-2 block font-mono text-[10px] font-semibold tracking-[0.25em] text-gray-500 transition-colors group-focus-within/input:text-[#FFC300]"
              >
                ACCESS KEY
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#003566] transition-colors group-focus-within/input:text-[#FFC300]">
                  ◆
                </span>

                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full rounded-lg border border-[#003566] bg-[#001D3D]/30 py-3 pl-10 pr-4 font-mono text-sm text-white placeholder:text-gray-700 outline-none transition-all duration-300 focus:border-[#FFC300] focus:bg-[#001D3D]/50 focus:shadow-[0_0_20px_rgba(255,195,0,0.06)]"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="group/input">
              <label
                htmlFor="confirmPassword"
                className="mb-2 block font-mono text-[10px] font-semibold tracking-[0.25em] text-gray-500 transition-colors group-focus-within/input:text-[#FFC300]"
              >
                CONFIRM ACCESS KEY
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#003566] transition-colors group-focus-within/input:text-[#FFC300]">
                  ◆
                </span>

                <input
                  id="confirmPassword"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full rounded-lg border border-[#003566] bg-[#001D3D]/30 py-3 pl-10 pr-4 font-mono text-sm text-white placeholder:text-gray-700 outline-none transition-all duration-300 focus:border-[#FFC300] focus:bg-[#001D3D]/50 focus:shadow-[0_0_20px_rgba(255,195,0,0.06)]"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="relative mt-2 w-full overflow-hidden rounded-lg border border-[#FFC300] bg-[#FFC300] px-4 py-3 font-mono text-sm font-bold tracking-[0.2em] text-[#000814] transition-all duration-300 hover:bg-[#FFD60A] hover:shadow-[0_0_30px_rgba(255,195,0,0.2)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#000814] border-t-transparent" />
                    CREATING ACCOUNT...
                  </>
                ) : (
                  <>
                    CREATE ACCOUNT
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </>
                )}
              </span>
            </button>
          </form>

          {/* Login */}
          <div className="mt-7 border-t border-[#003566]/50 pt-6 text-center">
            <p className="font-mono text-xs text-gray-600">
              ALREADY AN OPERATOR?
            </p>

            <Link
              href="/login"
              className="mt-2 inline-block font-mono text-xs font-semibold tracking-[0.2em] text-[#FFC300] transition-colors hover:text-[#FFD60A]"
            >
              RETURN TO LOGIN
            </Link>
          </div>

          {/* Back */}
          <div className="mt-5 text-center">
            <Link
              href="/"
              className="font-mono text-[10px] tracking-[0.2em] text-gray-700 transition-colors hover:text-gray-400"
            >
              ← RETURN TO INTRO
            </Link>
          </div>
        </div>

        {/* Footer status */}
        <div className="mt-4 flex items-center justify-between px-2 font-mono text-[9px] tracking-[0.2em] text-gray-700">
          <span>CIPHERS://2026</span>
          <span>END-TO-END ENCRYPTED</span>
        </div>
      </section>

      {/* Page animations */}
      <style jsx>{`
        @keyframes gridMove {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(50px);
          }
        }

        @keyframes scan {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-25px);
            opacity: 1;
          }
        }

        @keyframes floatDelayed {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.2;
          }
          50% {
            transform: translateY(30px);
            opacity: 1;
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.2;
          }
          50% {
            transform: translate(15px, -20px);
            opacity: 0.8;
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(45deg);
          }
          to {
            transform: rotate(405deg);
          }
        }

        .animate-scan {
          animation: scan 5s linear infinite;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 5s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: floatSlow 7s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spinSlow 8s linear infinite;
        }
      `}</style>
    </main>
  )
}