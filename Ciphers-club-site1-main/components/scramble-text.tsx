'use client'

import { useEffect, useRef, useState } from 'react'

const GLYPHS = '!<>-_\\/[]{}—=+*^?#01ABCDEF'

type ScrambleTextProps = {
  text: string
  className?: string
  /** ms between reveal steps */
  speed?: number
  /** delay before starting, ms */
  startDelay?: number
  as?: 'span' | 'h1' | 'h2' | 'p'
}

/**
 * Decrypts text into place: characters cycle through random glyphs and
 * resolve left-to-right, echoing the "cipher" theme. Respects reduced motion.
 */
export function ScrambleText({
  text,
  className,
  speed = 45,
  startDelay = 0,
  as = 'span',
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text)
  const frame = useRef(0)
  const Tag = as

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) {
      setDisplay(text)
      return
    }

    let revealed = 0
    let raf = 0
    let interval: ReturnType<typeof setInterval> | null = null

    const start = () => {
      interval = setInterval(() => {
        revealed += 1
        if (revealed > text.length) {
          if (interval) clearInterval(interval)
        }
      }, speed)

      const tick = () => {
        frame.current += 1
        const next = text
          .split('')
          .map((char, i) => {
            if (i < revealed || char === ' ') return char
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          })
          .join('')
        setDisplay(next)
        if (revealed <= text.length) {
          raf = requestAnimationFrame(tick)
        } else {
          setDisplay(text)
        }
      }
      tick()
    }

    const timeout = setTimeout(start, startDelay)

    return () => {
      clearTimeout(timeout)
      if (interval) clearInterval(interval)
      cancelAnimationFrame(raf)
    }
  }, [text, speed, startDelay])

  return (
    <Tag className={className} aria-label={text}>
      <span aria-hidden="true">{display}</span>
    </Tag>
  )
}
