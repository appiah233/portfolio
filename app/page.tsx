import { ArrowDownRight, ArrowRight, ArrowUpRight } from 'lucide-react'
import { CERTIFICATIONS, CONTACT, EXPERIENCE, PROJECTS, SERVICES, SKILL_GROUPS } from './data'
import { HeroPortrait } from './hero-portrait'
import { SocialLinks } from './social-links'
import { BrandIcon } from './brand-icon'

const meetingEmail = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Consultation request')}&body=${encodeURIComponent('Hello Eric,\n\nI would like to discuss:\n\nMy goals or project details:\n\nPreferred meeting times (two options):\n\nMy time zone:\n\nMy name and organisation:\n\nThank you.')}`

const featured = PROJECTS.filter((project) => project.featured)
const other = PROJECTS.filter((project) => !project.featured)

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="text-link" href={href} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={15} aria-hidden="true" /></a>
}

export default function Page() {
  return (
    <main id="main-content">
      <section id="home" className="hero" aria-labelledby="hero-title">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-role">Eric Appiah Owusu / IT professional &amp; software engineer</p>
              <h1 id="hero-title" className="display"><span>Secure.</span><span>Automate.</span><span className="accent-word">Build.</span></h1>
              <div className="hero-stroke" aria-hidden="true" />
              <p className="hero-description">I’m Eric Appiah Owusu, an IT professional and software engineer based in Ghana. I help teams manage Microsoft 365, strengthen identity and access, automate everyday work, and build practical web applications.</p>
              <div className="hero-ctas">
                <a className="btn" href="#services">Hire me <ArrowUpRight size={16} aria-hidden="true" /></a>
                <a className="btn btn-outline" href="https://github.com/appiah233" target="_blank" rel="noopener noreferrer"><BrandIcon brand="GitHub" size={16} /> GitHub</a>
                <a className="btn btn-outline" href="#booking">Book a consultation <ArrowRight size={16} aria-hidden="true" /></a>
              </div>
              <p className="hero-specialties">Microsoft 365 · Identity &amp; access · Power Automate · Full-stack development</p>
              <SocialLinks />
            </div>
            <HeroPortrait />
          </div>
          <div className="hero-foot"><span>Based in Ghana · Working across cloud &amp; code</span><span>Scroll to explore ↓</span></div>
        </div>
      </section>

      <section id="about" className="section" aria-labelledby="about-title">
        <div className="wrap about-grid">
          <div>
            <p className="eyebrow">About me</p>
            <h2 id="about-title" className="about-heading">Technology should make work simpler, safer, and more useful.</h2>
            <div className="about-copy">
              <p>My work connects enterprise IT with software engineering. I bring experience in Microsoft 365 administration, Exchange Online support, identity and access management, and workflow automation to the applications I build.</p>
              <p>My Microsoft identity and access management certification supports a practical approach to secure, useful systems. Whether you need help with an existing Microsoft environment or a new web application, I start with the problem, agree on the scope, and build toward a clear outcome.</p>
            </div>
          </div>
          <div className="about-aside">
            <strong>IT × CODE</strong>
            <p>One practice connecting administration, security, cloud operations, automation, and product development.</p>
            <div className="domain-list"><span>Microsoft 365</span><span>Identity &amp; access</span><span>Automation</span><span>Cloud &amp; DevOps</span><span>Full-stack web</span><span>Technical support</span></div>
          </div>
        </div>
      </section>

      <section id="experience" className="section experience" aria-labelledby="experience-title">
        <div className="wrap experience-grid">
          <div className="experience-intro">
            <p className="eyebrow">Experience</p>
            <h2 id="experience-title" className="display section-title">A connected path.</h2>
            <p className="muted">From supporting Microsoft environments to building and shipping software.</p>
          </div>
          <div>
            {[...EXPERIENCE].reverse().map((entry, index) => (
              <div className="experience-row" key={entry.id}>
                <span className="experience-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div><span className="experience-area">{entry.period}</span><h3>{entry.role}</h3><p>{entry.detail}</p><small>{entry.focus}</small></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certification" className="section certification" aria-labelledby="cert-title">
        <div className="wrap cert-grid">
          <div><p className="eyebrow">Certification / Microsoft</p><h2 id="cert-title" className="display">Identity.<br /><span>Access.</span><br />Trust.</h2></div>
          <div className="cert-detail">{CERTIFICATIONS.map((certification) => <article key={certification.id}><span className="eyebrow">{certification.issuer} certification</span><h3>{certification.name}</h3><p>Supporting my work in user access, authentication, and identity governance across Microsoft environments.</p></article>)}</div>
        </div>
      </section>

      <section id="projects" className="section" aria-labelledby="projects-title">
        <div className="wrap">
          <div className="section-top"><div><p className="eyebrow">Selected work</p><h2 id="projects-title" className="display section-title">Projects with purpose.</h2></div><p className="projects-intro">Products and tools at the intersection of business needs, thoughtful engineering, and reliable delivery.</p></div>
          {featured.map((project, index) => (
            <article className={`project-feature ${index % 2 ? 'reverse' : ''}`} key={project.id}>
              <div className={`project-art ${project.id}`} role="img" aria-label={`${project.name} typographic project visual`}>
                <div className="project-art-inner"><span className="art-kicker">Selected project / {String(index + 1).padStart(2, '0')}</span><strong className="art-name">{project.name}</strong><span className="art-bottom"><span>{project.role}</span><ArrowDownRight size={24} aria-hidden="true" /></span></div>
              </div>
              <div className="project-info"><span className="project-index">{String(index + 1).padStart(2, '0')} / {String(featured.length).padStart(2, '0')}</span><span className="project-status">{project.status === 'live' ? 'Live project' : 'In development'}</span><h3>{project.name}</h3><p>{project.description}</p><div className="project-meta">{project.tech?.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-links">{project.github && <ExternalLink href={project.github}>View repository</ExternalLink>}{project.live && <ExternalLink href={project.live}>View site</ExternalLink>}{!project.github && <span className="muted">Private project</span>}</div></div>
            </article>
          ))}
          {other.length > 0 && <div className="project-other">{other.map((project) => <article className="other-item" key={project.id}><p className="eyebrow">More work</p><h3>{project.name}</h3><p>{project.description}</p><div className="project-links">{project.github && <ExternalLink href={project.github}>Repository</ExternalLink>}{project.live && <ExternalLink href={project.live}>Live site</ExternalLink>}</div></article>)}</div>}
        </div>
      </section>

      <section id="services" className="section services" aria-labelledby="services-title">
        <div className="wrap">
          <div className="section-top"><div><p className="eyebrow">Services / Hire me</p><h2 id="services-title" className="display section-title">Your next step,<br />made practical.</h2></div><p className="projects-intro">Need hands-on technical support, a workflow that saves time, or an application built around your business? Let’s discuss the work and agree on a focused scope.</p></div>
          <div className="services-grid">{SERVICES.map((service, index) => <article className="service-card" key={service.name}><span className="service-number">0{index + 1}</span><h3>{service.name}</h3><p>{service.description}</p><ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul><a className="text-link" href="#booking">Discuss this service <ArrowUpRight size={16} aria-hidden="true" /></a></article>)}</div>
          <div className="work-together"><strong>How we’ll work together</strong><ol><li><span>01</span> Share your challenge and goals.</li><li><span>02</span> Agree on scope, timing, and next steps.</li><li><span>03</span> Build, review, and hand over the work.</li></ol></div>
        </div>
      </section>

      <section id="skills" className="section skills" aria-labelledby="skills-title"><div className="wrap"><div className="section-top"><div><p className="eyebrow">Capabilities</p><h2 id="skills-title" className="display section-title">Tools of the trade.</h2></div><p className="projects-intro">A practical stack spanning Microsoft enterprise systems and modern web development.</p></div><div className="skills-grid">{SKILL_GROUPS.map((group) => <div className="skill-group" key={group.name}><h3>{group.name}</h3><div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></div></section>

      <section id="github" className="wrap" aria-labelledby="github-title"><div className="github-band"><div><p className="eyebrow">Open work</p><h2 id="github-title" className="display">Explore the code.</h2><p>Selected public repositories, experiments, and the work behind the projects above are available on GitHub.</p></div><a className="btn" href="https://github.com/appiah233" target="_blank" rel="noopener noreferrer">Visit GitHub <ArrowUpRight size={17} aria-hidden="true" /></a></div></section>

      <section id="booking" className="section booking" aria-labelledby="booking-title">
        <div className="wrap booking-grid">
          <div className="booking-intro"><p className="eyebrow">Book a meeting</p><h2 id="booking-title" className="display section-title">Let’s talk<br />through it.</h2><p>A focused conversation about your Microsoft environment, an automation idea, or a web application. Share the challenge and we’ll work out a useful next step.</p><p>Based in Ghana · GMT / UTC+0 · Remote consultations</p></div>
          <div className="booking-details"><h3>{CONTACT.bookingUrl ? 'Choose a meeting time' : 'Request a consultation'}</h3><p>{CONTACT.bookingUrl ? 'Use my booking page to choose an available time and share what you would like to discuss.' : 'Send a meeting request with a little context. We’ll agree on a time directly before the meeting is confirmed.'}</p><ol><li>Tell me your topic and what you want to achieve.</li><li>Suggest two suitable times and include your time zone.</li><li>Include any useful project details or questions.</li></ol><a className="btn" href={CONTACT.bookingUrl || (CONTACT.email ? meetingEmail : CONTACT.linkedin)} target={CONTACT.bookingUrl || !CONTACT.email ? '_blank' : undefined} rel={CONTACT.bookingUrl || !CONTACT.email ? 'noopener noreferrer' : undefined}>{CONTACT.bookingUrl ? 'Book a meeting' : CONTACT.email ? 'Request a meeting by email' : 'Request a meeting on LinkedIn'}<ArrowUpRight size={17} aria-hidden="true" /></a></div>
        </div>
      </section>

      <section id="contact" className="section contact" aria-labelledby="contact-title">
        <div className="wrap contact-grid">
          <div><p className="eyebrow">Contact / Let’s work together</p><h2 id="contact-title" className="display"><span>Let’s make</span><span>it work.</span></h2></div>
          <div><p>Looking for an IT professional, a developer, or support with Microsoft technologies? Tell me about your project, consulting needs, or role.</p>{CONTACT.email && <a className="contact-email" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>}<div className="contact-actions"><a className="btn" href={CONTACT.email ? `mailto:${CONTACT.email}?subject=Project%20enquiry` : CONTACT.linkedin} target={CONTACT.email ? undefined : '_blank'} rel={CONTACT.email ? undefined : 'noopener noreferrer'}>{CONTACT.email ? 'Email me' : 'Contact me on LinkedIn'}<ArrowUpRight size={17} aria-hidden="true" /></a><a className="btn" href="#booking">Book a consultation <ArrowRight size={17} aria-hidden="true" /></a></div><SocialLinks /></div>
        </div>
      </section>
    </main>
  )
}
