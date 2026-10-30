'use client'

import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X, ArrowUpRight } from 'lucide-react'
import { useTheme } from 'next-themes'

const links = [
  ['home', 'Home'], ['about', 'About'],
  ['projects', 'Projects'], ['certification', 'Certification'],
  ['skills', 'Skills'], ['services', 'Hire Me'], ['booking', 'Book a Meeting'],
] as const

export function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  useEffect(() => {
    const update = () => {
      let current = 'home'
      for (const [id] of links) {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= 140) current = id
      }
      setActive(current)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return <>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:p-3 focus:text-black">Skip to main content</a>
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="brand" href="#home" aria-label="Eric Appiah Owusu, back to home">Eric Appiah Owusu<span className="brand-dot">●</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">{links.map(([id, label]) => <a className="nav-link" href={`#${id}`} key={id} aria-current={active === id ? 'location' : undefined}>{label}</a>)}</nav>
        <div className="header-actions">
          <button className="icon-button" type="button" onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} aria-label={mounted ? `Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme` : 'Switch theme'}>{mounted && resolvedTheme === 'dark' ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}</button>
          <a className="btn header-cta" href="#services">Hire me <ArrowUpRight size={15} aria-hidden="true" /></a>
          <button className="icon-button mobile-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}</button>
        </div>
      </div>
      {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} aria-current={active === id ? 'location' : undefined}>{label}</a>)}</nav>}
    </header>
  </>
}
