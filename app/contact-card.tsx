'use client'

import { useState } from 'react'
import { Mail, Copy, Check, MapPin, Sparkles } from 'lucide-react'
import { CONTACT } from './data'
import { SocialLinks } from './social-links'

export function ContactCard() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Fallback
      setCopied(false)
    }
  }

  return (
    <div className="contact-card">
      <div className="contact-card-header">
        <div className="contact-badge">
          <span className="contact-pulse" aria-hidden="true" />
          <span>Project enquiries</span>
        </div>
        <h3 className="contact-card-title">Let’s discuss your next project.</h3>
        <p className="contact-card-subtitle">
          For Microsoft 365, identity and access, automation, or application development, share a brief outline of what you need.
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
          aria-label="Copy email address to clipboard"
        >
          {copied ? (
            <>
              <Check size={16} aria-hidden="true" /> Copied!
            </>
          ) : (
            <>
              <Copy size={16} aria-hidden="true" /> Copy Address
            </>
          )}
        </button>
      </div>

      <div className="contact-card-meta">
        <div className="meta-item">
          <MapPin size={16} aria-hidden="true" />
          <span>Accra, Ghana (GMT / UTC+0) · Remote worldwide</span>
        </div>
        <div className="meta-item">
          <Sparkles size={16} aria-hidden="true" />
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

