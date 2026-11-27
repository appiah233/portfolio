'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, Copy, Check, MapPin, BriefcaseBusiness } from 'lucide-react'
import { CONTACT } from './data'
import { SocialLinks } from './social-links'

export function ContactCard() {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'failed'>('idle')
  const resetTimer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(resetTimer.current), [])

  const copyEmail = async () => {
    window.clearTimeout(resetTimer.current)
    try {
      await navigator.clipboard.writeText(CONTACT.email)
      setCopyStatus('copied')
      resetTimer.current = window.setTimeout(() => setCopyStatus('idle'), 2500)
    } catch {
      setCopyStatus('failed')
    }
  }

  return (
    <div className="contact-card">
      <div className="contact-card-header">
        <div className="contact-badge">
          <span className="contact-pulse" aria-hidden="true" />
          <span>Work &amp; project enquiries</span>
        </div>
        <h3 className="contact-card-title">Let’s talk about working together.</h3>
        <p className="contact-card-subtitle">
          For hiring or project enquiries about Microsoft 365, identity and access, automation, or application development, email me a brief outline.
        </p>
      </div>

      <div className="contact-email-box">
        <span className="contact-email-label">Email</span>
        <a className="contact-email-link" href={`mailto:${CONTACT.email}`}>
          <Mail size={22} aria-hidden="true" />
          <span>{CONTACT.email}</span>
        </a>
      </div>

      <div className="contact-card-actions">
        <button
          type="button"
          className="btn btn-outline"
          onClick={copyEmail}
        >
          {copyStatus === 'copied' ? (
            <>
              <Check size={16} aria-hidden="true" /> Copied!
            </>
          ) : (
            <>
              <Copy size={16} aria-hidden="true" /> Copy Address
            </>
          )}
        </button>
        <p role="status" className={copyStatus === 'failed' ? 'muted' : 'sr-only'}>
          {copyStatus === 'failed' ? 'Copy unavailable. Select the email address above or open it in your mail app.' : copyStatus === 'copied' ? 'Email address copied.' : ''}
        </p>
      </div>

      <div className="contact-card-meta">
        <div className="meta-item">
          <MapPin size={16} aria-hidden="true" />
          <span>Accra, Ghana (GMT / UTC+0) · Remote worldwide</span>
        </div>
        <div className="meta-item">
          <BriefcaseBusiness size={16} aria-hidden="true" />
          <span>Consulting, implementations &amp; contract development</span>
        </div>
      </div>

      <div className="contact-card-footer">
        <span className="contact-footer-label">Connect on professional networks</span>
        <SocialLinks />
      </div>
    </div>
  )
}

