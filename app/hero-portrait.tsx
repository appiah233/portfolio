'use client'

import Image from 'next/image'
import { useRef, useState, type PointerEvent } from 'react'
import profilePhoto from '../Eric Profile 2.jpg.jpeg'

export function HeroPortrait() {
  const portraitRef = useRef<HTMLDivElement>(null)
  const [revealing, setRevealing] = useState(false)

  const moveReveal = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return
    const bounds = event.currentTarget.getBoundingClientRect()
    portraitRef.current?.style.setProperty('--reveal-x', `${event.clientX - bounds.left}px`)
    portraitRef.current?.style.setProperty('--reveal-y', `${event.clientY - bounds.top}px`)
    if (!revealing) setRevealing(true)
  }

  return (
    <div
      ref={portraitRef}
      className={`hero-portrait${revealing ? ' is-revealing' : ''}`}
      onPointerEnter={moveReveal}
      onPointerMove={moveReveal}
      onPointerLeave={() => setRevealing(false)}
    >
      <div className="hero-red" aria-hidden="true" />
      <Image className="portrait-base" src={profilePhoto} alt="Eric Appiah Owusu" fill priority sizes="(max-width: 800px) 100vw, 46vw" />
      <div className="portrait-reveal" aria-hidden="true">
        <Image src={profilePhoto} alt="" fill sizes="(max-width: 800px) 100vw, 46vw" />
      </div>
      <span className="hero-side">Cloud / Identity / Engineering</span>
    </div>
  )
}
