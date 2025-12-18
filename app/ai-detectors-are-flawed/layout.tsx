import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why AI Detectors Are Fundamentally Flawed | Authorly',
  description: 'A technical analysis of why AI detectors cannot establish authorship intent. Learn why good writing looks like AI, why detectors violate due process, and why process-based proof is the only valid method.',
  keywords: 'AI detector flaws, AI detection false positive rate, why AI detectors fail, AI detector discrimination, probabilistic AI detection, authorship verification method, process-based proof, AI detector legal issues, AI detection bias',
  openGraph: {
    title: 'Why AI Detectors Are Fundamentally Flawed',
    description: 'Technical analysis: Why text classification cannot establish authorship, and why process-based proof is the only valid method.',
    url: 'https://authorly.provable.dev/ai-detectors-are-flawed',
    type: 'article',
    images: [
      {
        url: '/images/logo.png?v=2',
        width: 1200,
        height: 630,
        alt: 'Why AI Detectors Are Fundamentally Flawed',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why AI Detectors Are Fundamentally Flawed',
    description: 'Why text classification cannot establish authorship, and why process-based proof is the only valid method.',
    images: ['/images/logo.png?v=2'],
  },
  alternates: {
    canonical: '/ai-detectors-are-flawed',
  },
}

export default function AIDetectorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Why AI Detectors Are Fundamentally Flawed',
    description: 'A technical analysis of why text classification cannot establish authorship intent, and why process-based proof is the only valid method of authorship verification.',
    author: {
      '@type': 'Organization',
      name: 'Authorly',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Authorly',
      logo: {
        '@type': 'ImageObject',
        url: 'https://authorly.provable.dev/images/logo.png',
      },
    },
    datePublished: '2025-01-01',
    dateModified: '2025-01-01',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://authorly.provable.dev/ai-detectors-are-flawed',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
