import Image from 'next/image'

export function BrandIcon({ brand, size = 20 }: { brand: 'GitHub' | 'LinkedIn' | 'X'; size?: number }) {
  if (brand === 'X') return <span aria-hidden="true" style={{ fontSize: size, fontWeight: 700, lineHeight: 1 }}>𝕏</span>
  return <Image src={brand === 'GitHub' ? '/brands/github.svg' : '/brands/linkedin.png'} alt="" aria-hidden="true" width={size} height={size} className="brand-icon" unoptimized />
}
