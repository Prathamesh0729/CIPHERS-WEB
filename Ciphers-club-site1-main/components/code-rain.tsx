'use client'

import { useEffect, useRef } from 'react'

/**
 * Subtle matrix-style code rain rendered to a full-viewport canvas.
 * Sits behind all content at low opacity. Pauses under reduced-motion.
 */
export function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const glyphs = 'アイウエオカキ01<>{}[]#$%&*+=/ABCDEF'.split('')
    const fontSize = 16
    let columns = 0
    let drops: number[] = []
    let width = 0
    let height = 0

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      columns = Math.floor(width / fontSize)
      drops = Array(columns).fill(0).map(() => Math.random() * -50)
    }
    resize()

    let raf = 0
    let last = 0
    const interval = 70 // ms between frames — keeps it light

    const draw = (time: number) => {
      raf = requestAnimationFrame(draw)
      if (time - last < interval) return
      last = time

      ctx.fillStyle = 'rgba(0, 8, 20, 0.12)'
      ctx.fillRect(0, 0, width, height)
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = glyphs[Math.floor(Math.random() * glyphs.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize
        // leading glyph brighter than the trail
        ctx.fillStyle =
          Math.random() > 0.975 ? 'rgba(255, 214, 10, 0.9)' : 'rgba(255, 195, 0, 0.45)'
        ctx.fillText(char, x, y)

        if (y > height && Math.random() > 0.975) drops[i] = 0
        drops[i] += 1
      }
    }

    if (!prefersReduced) raf = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-[0.18]"
    />
  )
}
