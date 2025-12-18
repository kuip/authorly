import type { Metadata } from 'next'
import { Roboto_Condensed } from 'next/font/google'
import './globals.css'

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '700']
})

export const metadata: Metadata = {
  title: 'Authorly - Prove You Wrote It | Cryptographic Authorship Verification',
  description: 'Stop false AI-detection accusations with cryptographic proof. Authorly captures your complete writing process with blockchain verification, typing patterns, and replayable authorship trails for students and institutions.',
  keywords: 'AI detection, false AI accusations, academic integrity, writing verification, authorship proof, essay writing, college admissions, student writing protection, AI detector false positives, prove human writing, blockchain authorship',
  authors: [{ name: 'Authorly' }],
  creator: 'Authorly',
  publisher: 'Authorly',
  metadataBase: new URL('https://authorly.provable.dev'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Authorly - Prove You Wrote It',
    description: 'Stop false AI-detection accusations. Cryptographically prove your writing is authentic with a complete, verifiable authorship trail.',
    type: 'website',
    url: 'https://authorly.provable.dev',
    siteName: 'Authorly',
    images: [
      {
        url: '/images/logo.png?v=2',
        width: 1200,
        height: 630,
        alt: 'Authorly - Cryptographic Authorship Verification',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Authorly - Prove You Wrote It',
    description: 'Stop false AI-detection accusations. Cryptographically prove your writing is authentic.',
    images: ['/images/logo.png?v=2'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Authorly',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '19.99',
      priceCurrency: 'EUR',
    },
    description: 'Cryptographic authorship verification tool that proves you wrote your essays and documents. Protects students from false AI-detection accusations.',
    operatingSystem: 'Web',
    url: 'https://authorly.provable.dev',
    image: 'https://authorly.provable.dev/images/logo.png?v=2',
    publisher: {
      '@type': 'Organization',
      name: 'Authorly',
    },
    potentialAction: {
      '@type': 'RegisterAction',
      target: 'https://authorly.provable.dev/#waitlist-form',
      name: 'Join Waitlist',
    },
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
        <meta property="og:image" content="https://authorly.provable.dev/images/logo.png?v=2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${robotoCondensed.className} min-h-screen flex flex-col`}>{children}</body>
    </html>
  )
}
