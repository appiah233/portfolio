import { ArrowDownRight, ArrowRight, ArrowUpRight, Github } from 'lucide-react'
import { CERTIFICATIONS, EXPERIENCE, PROJECTS, SKILL_GROUPS } from './data'
import { HeroPortrait } from './hero-portrait'

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
              <p className="hero-description">I build, automate, and support modern digital systems—from Microsoft cloud and identity management to full-stack applications.</p>
              <div className="hero-ctas">
                <a className="btn" href="#projects">View my work <ArrowUpRight size={16} aria-hidden="true" /></a>
                <a className="btn btn-outline" href="https://github.com/appiah233" target="_blank" rel="noopener noreferrer"><Github size={16} aria-hidden="true" /> GitHub</a>
                <a className="btn btn-outline" href="#contact">Contact me <ArrowRight size={16} aria-hidden="true" /></a>
              </div>
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
              <p>I work across enterprise IT and software engineering. My foundation in Microsoft 365 support and identity management informs the applications and automation I build today.</p>
              <p>I care about clear systems: access that is governed, workflows that remove friction, and products people can actually use.</p>
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
                <div><h3>{entry.role}</h3><p>{entry.detail}</p><small>{entry.focus}</small></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certification" className="section certification" aria-labelledby="cert-title">
        <div className="wrap cert-grid">
          <div><p className="eyebrow">Certification / Microsoft</p><h2 id="cert-title" className="display">Identity.<br /><span>Access.</span><br />Trust.</h2></div>
          <div className="cert-detail"><strong>{CERTIFICATIONS[0].name}</strong><p>A dedicated Microsoft identity and access management credential supporting my work in authentication, access, and governance.</p><span className="eyebrow">Microsoft · IAM</span></div>
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
              <div className="project-info"><span className="project-index">{String(index + 1).padStart(2, '0')} / 03</span><h3>{project.name}</h3><p>{project.description}</p><div className="project-meta">{project.tech?.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-links">{project.github && <ExternalLink href={project.github}>View repository</ExternalLink>}{project.live && <ExternalLink href={project.live}>View site</ExternalLink>}{!project.github && <span className="muted">Private project</span>}</div></div>
            </article>
          ))}
          {other.length > 0 && <div className="project-other">{other.map((project) => <article className="other-item" key={project.id}><p className="eyebrow">More work</p><h3>{project.name}</h3><p>{project.description}</p><div className="project-links">{project.github && <ExternalLink href={project.github}>Repository</ExternalLink>}{project.live && <ExternalLink href={project.live}>Live site</ExternalLink>}</div></article>)}</div>}
        </div>
      </section>

      <section id="skills" className="section skills" aria-labelledby="skills-title"><div className="wrap"><div className="section-top"><div><p className="eyebrow">Capabilities</p><h2 id="skills-title" className="display section-title">Tools of the trade.</h2></div><p className="projects-intro">A practical stack spanning Microsoft enterprise systems and modern web development.</p></div><div className="skills-grid">{SKILL_GROUPS.map((group) => <div className="skill-group" key={group.name}><h3>{group.name}</h3><div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></div></section>

      <section className="wrap" aria-labelledby="github-title"><div className="github-band"><div><p className="eyebrow">Open work</p><h2 id="github-title" className="display">Explore the code.</h2><p>Selected public repositories, experiments, and the work behind the projects above are available on GitHub.</p></div><a className="btn" href="https://github.com/appiah233" target="_blank" rel="noopener noreferrer">Visit GitHub <ArrowUpRight size={17} aria-hidden="true" /></a></div></section>

      <section id="contact" className="section contact" aria-labelledby="contact-title"><div className="wrap contact-grid"><div><p className="eyebrow">Contact</p><h2 id="contact-title" className="display"><span>Let’s make</span><span>it work.</span></h2></div><div><p>Have a role, collaboration, or technical challenge in mind? Get in touch and tell me what you’re working on.</p><a className="btn" href="https://www.linkedin.com/in/eric-owusu-66b2b0256/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn <ArrowUpRight size={17} aria-hidden="true" /></a></div></div></section>
    </main>
  )
}
