import Image from 'next/image'

export function SiteLogo() {
  return <a className="site-logo" href="#home" aria-label="Eric Appiah Owusu, back to home">
    <Image src="/brands/eao.png" alt="EAO" width={512} height={512} className="site-logo-image" priority />
  </a>
}
