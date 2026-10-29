import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from 'next-themes'
import { Header } from './header'
import { Footer } from './footer'
import './globals.css'

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#f8f7f3' }

export const metadata: Metadata = {
  title: 'Eric Appiah Owusu — IT, Identity & Software Engineering',
  description: 'Eric Appiah Owusu works across Microsoft 365, identity and access management, automation, cloud, and software engineering.',
  openGraph: { type: 'website', title: 'Eric Appiah Owusu', description: 'Enterprise IT meets software engineering.' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><ThemeProvider attribute="class" defaultTheme="system" enableSystem><div className="site-shell"><Header />{children}<Footer /></div></ThemeProvider></body></html>
}
