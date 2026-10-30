import { BrandIcon } from './brand-icon'
import { CONTACT_LINKS } from './data'

export function SocialLinks() {
  return (
    <nav className="social-links" aria-label="Social media">
      {CONTACT_LINKS.map(({ label, link }) => {
        const brand = label === 'GitHub' ? 'GitHub' : 'LinkedIn'
        return (
          <a key={label} href={link} target="_blank" rel="noopener noreferrer" aria-label={`${label} profile (opens in a new tab)`} title={label}>
            <BrandIcon brand={brand} />
          </a>
        )
      })}
    </nav>
  )
}
