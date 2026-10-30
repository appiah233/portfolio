import Image from 'next/image'
import profilePhoto from '../Eric Profile 2.jpg.jpeg'

export function HeroPortrait() {
  return (
    <div className="hero-portrait">
      <Image className="portrait-base" src={profilePhoto} alt="Eric Appiah Owusu" fill priority sizes="(max-width: 800px) 100vw, 46vw" />
      <span className="hero-side">Cloud / Identity / Engineering</span>
    </div>
  )
}
