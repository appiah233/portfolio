'use client'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 400)
    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  if (!visible) return null

  return (
    <button
      className="scroll-to-top"
      type="button"
      aria-label="Scroll to top"
      title="Back to top"
      onClick={() => {
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        window.scrollTo({ top: 0, behavior: reducedMotion ? 'instant' : 'smooth' })
        document.querySelector<HTMLElement>('#main-content')?.focus({ preventScroll: true })
      }}
    >
      <ArrowUp size={22} aria-hidden="true" />
    </button>
  )
}
