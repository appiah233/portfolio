import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from 'next-themes'
import { Header } from './header'
import { Footer } from './footer'
import { ScrollToTop } from './scroll-to-top'
import { SITE_URL } from './site-url'
import './globals.css'

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#f8f7f3' }

const title = 'Eric Appiah Owusu | Microsoft 365, Identity & Automation'
const description = 'Technical consulting in Ghana: Microsoft 365 and Exchange Online support, Microsoft Entra identity and access, workflow automation, and cloud-backed applications.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Eric Appiah Owusu',
    title,
    description,
  },
  twitter: { card: 'summary_large_image', title, description },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><ThemeProvider attribute="class" defaultTheme="system" enableSystem><div className="site-shell"><Header />{children}<Footer /><ScrollToTop /></div></ThemeProvider><Analytics /></body></html>
}
