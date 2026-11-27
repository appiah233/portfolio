import type { MetadataRoute } from 'next'
import { SITE_URL } from './site-url'

export default function robots(): MetadataRoute.Robots {
  return {
    sitemap: new URL('/sitemap.xml', SITE_URL).href,
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
  }
}
