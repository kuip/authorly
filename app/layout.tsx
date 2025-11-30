import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Authorly - Prove You Wrote It',
  description: 'Stop false AI-detection accusations. Cryptographically prove your writing is authentic with a complete, verifiable authorship trail.',
  keywords: 'AI detection, academic integrity, writing verification, authorship proof, essay writing, college admissions',
  openGraph: {
    title: 'Authorly - Prove You Wrote It',
    description: 'Stop false AI-detection accusations. Cryptographically prove your writing is authentic.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
