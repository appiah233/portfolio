import Image from 'next/image'

export function BrandIcon({ brand, size = 20 }: { brand: 'GitHub' | 'LinkedIn'; size?: number }) {
  return <Image src={brand === 'GitHub' ? '/brands/github.svg' : '/brands/linkedin.png'} alt="" aria-hidden="true" width={size} height={size} className="brand-icon" unoptimized />
}
