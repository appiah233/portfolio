import { Mail, ArrowUpRight } from 'lucide-react'
import { SocialLinks } from './social-links'
import { CONTACT } from './data'
import { SiteLogo } from './site-logo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top-banner">
          <div>
            <span className="footer-banner-eyebrow">Project enquiries</span>
            <h3 className="footer-banner-title">Let’s start a conversation.</h3>
          </div>
          <a className="btn footer-cta-btn" href="#contact">
            Get in touch <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="footer-grid">
          <div className="footer-brand-col">
            <SiteLogo />
            <p className="footer-name">Eric Appiah Owusu</p>
            <p className="footer-desc">
              Microsoft 365, identity, automation, AWS cloud delivery, and full-stack software engineering.
            </p>
          </div>
          <div>
            <h3>Navigate</h3>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#certification">Certification</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h3>Connect</h3>
            <a href={`mailto:${CONTACT.email}`} className="footer-email-link">
              <Mail size={14} aria-hidden="true" /> Email
            </a>
            <a href="https://github.com/appiah233" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/eric-owusu-66b2b0256/" target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a href="https://x.com/eric0wusu" target="_blank" rel="noopener noreferrer">
              X (Twitter) ↗
            </a>
            <div className="footer-socials-wrapper">
              <SocialLinks />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Eric Appiah Owusu. All rights reserved.</span>
          <span>Engineered with precision &amp; purpose.</span>
        </div>
      </div>
    </footer>
  )
}
