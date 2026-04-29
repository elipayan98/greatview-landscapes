import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EmergencyBanner from '@/components/EmergencyBanner'
import TextUsButton from '@/components/TextUsButton'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://greatviewlandscapes.com'),
  title: {
    default: 'GreatView Landscapes | Commercial Landscaping San Antonio TX',
    template: '%s | GreatView Landscapes',
  },
  description:
    'Full-service commercial landscaping, irrigation, and special projects for HOA communities and commercial properties in San Antonio, TX. Serving the metro since 2022.',
  keywords: [
    'commercial landscaping San Antonio',
    'HOA landscaping San Antonio',
    'irrigation services San Antonio',
    'landscape maintenance Texas',
    'entry monument landscaping',
    'flower bed installation San Antonio',
    'commercial landscape contractor',
    'HOA landscape management',
  ],
  openGraph: {
    title: 'GreatView Landscapes | Commercial Landscaping San Antonio TX',
    description:
      'Full-service commercial landscaping, irrigation, and special projects for HOA communities and commercial properties in San Antonio.',
    url: 'https://greatviewlandscapes.com',
    siteName: 'GreatView Landscapes',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    languages: {
      en: '/',
      es: '/es',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <EmergencyBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <TextUsButton />
      </body>
    </html>
  )
}
