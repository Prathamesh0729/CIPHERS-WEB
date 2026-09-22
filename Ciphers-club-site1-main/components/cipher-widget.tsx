'use client'

import { useState } from 'react'
import { RotateCcw } from 'lucide-react'

function caesar(text: string, shift: number) {
  const s = ((shift % 26) + 26) % 26
  return text.replace(/[a-z]/gi, (char) => {
    const base = char <= 'Z' ? 65 : 97
    return String.fromCharCode(((char.charCodeAt(0) - base + s) % 26) + base)
  })
}

/**
 * A tiny Caesar-cipher playground — a nod to the club's name.
 * Type a message, spin the shift dial, watch it encrypt live.
 */
export function CipherWidget() {
  const [text, setText] = useState('the quick brown fox')
  const [shift, setShift] = useState(3)

  return (
    <div className="rounded-lg border border-border bg-background p-5 font-mono">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm tracking-widest text-primary uppercase">
          // caesar cipher
        </p>
        <button
          type="button"
          onClick={() => {
            setText('the quick brown fox')
            setShift(3)
          }}
          className="flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
        >
          <RotateCcw className="size-3" />
          reset
        </button>
      </div>

      <label className="mb-1.5 block text-xs text-muted-foreground" htmlFor="cipher-input">
        plaintext
      </label>
      <input
        id="cipher-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full rounded-md border border-input bg-card px-3 py-2 text-sm text-foreground outline-none focus:border-primary/60 focus:ring-1 focus:ring-ring"
        placeholder="type a secret…"
      />

      <div className="mt-4 flex items-center gap-3">
        <label className="text-xs text-muted-foreground" htmlFor="cipher-shift">
          shift
        </label>
        <input
          id="cipher-shift"
          type="range"
          min={0}
          max={25}
          value={shift}
          onChange={(e) => setShift(Number(e.target.value))}
          className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-secondary accent-primary"
        />
        <span className="w-8 text-right text-sm text-primary">{shift}</span>
      </div>

      <div className="mt-4">
        <p className="mb-1.5 text-xs text-muted-foreground">ciphertext</p>
        <output className="block min-h-11 rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm break-words text-primary">
          {caesar(text, shift) || '\u00a0'}
        </output>
      </div>
    </div>
  )
}
