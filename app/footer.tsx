export function Footer() {
  return <footer className="footer"><div className="wrap">
    <div className="footer-grid">
      <div><a className="brand" href="#home">Eric Appiah Owusu<span className="brand-dot">●</span></a><p>Enterprise IT, identity, automation, and software engineering.</p></div>
      <div><h3>Navigate</h3><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#certification">Certification</a><a href="#skills">Skills</a></div>
      <div><h3>Connect</h3><a href="https://github.com/appiah233" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/eric-owusu-66b2b0256/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="#contact">Contact</a></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Eric Appiah Owusu</span><span>Designed to make complexity useful.</span></div>
  </div></footer>
}
