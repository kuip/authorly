import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Students - Authorly | Prove Your Writing is Authentic',
  description: 'Protect yourself from false AI detection accusations. Authorly records every keystroke with cryptographic proof, providing verifiable evidence that you wrote your essays and papers. Join the waitlist for €19.99/month.',
  keywords: 'student writing verification, AI detector false positive, prove I wrote my essay, college admissions essay proof, academic integrity student, writing authentication, AI detection protection for students, essay verification tool, prevent false AI accusations',
  openGraph: {
    title: 'For Students - Prove You Wrote It | Authorly',
    description: 'Stop false AI-detection accusations. Cryptographic proof of your complete writing process from first word to final submission.',
    url: 'https://authorly.provable.dev/students',
    type: 'website',
    images: [
      {
        url: '/images/logo.png?v=2',
        width: 1200,
        height: 630,
        alt: 'Authorly - Verifiable authorship trail for students',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Students - Prove You Wrote It | Authorly',
    description: 'Stop false AI-detection accusations. Cryptographic proof of your complete writing process.',
    images: ['/images/logo.png?v=2'],
  },
  alternates: {
    canonical: '/students',
  },
}

export default function StudentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
