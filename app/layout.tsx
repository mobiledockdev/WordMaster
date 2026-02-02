import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://wordmaster.app'),
  title: 'WordMaster: Ultimate Vocabulary Builder for iOS',
  description: 'Master English vocabulary with curated word lists, visual learning, audio pronunciation, and smart dictionary. Download WordMaster on App Store.',
  keywords: 'vocabulary builder, English learning, word lists, iOS app, language learning',
  authors: [{ name: 'WordMaster Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wordmaster.app',
    title: 'WordMaster: Ultimate Vocabulary Builder',
    description: 'Master English vocabulary with curated word lists, visual learning, and audio pronunciation',
    siteName: 'WordMaster',
    images: [
      {
        url: '/app-icon.png',
        width: 180,
        height: 180,
        alt: 'WordMaster App Icon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WordMaster: Ultimate Vocabulary Builder',
    description: 'Master English vocabulary with curated word lists and audio pronunciation',
    images: ['/app-icon.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0284c7" />
        <link rel="canonical" href="https://wordmaster.app" />
      </head>
      <body className="antialiased bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
