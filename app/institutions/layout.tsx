import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Institutions - Authorly | Protect Against AI Detector Lawsuits',
  description: 'Replace unreliable AI detection with verifiable authorship proof. Protect your institution from discrimination lawsuits, due process violations, and legal liability. Process-based proof for academic integrity.',
  keywords: 'AI detector lawsuit, institutional AI detection, academic integrity institution, school AI detector liability, university false accusations, education authorship verification, process-based proof, AI detection legal risk',
  openGraph: {
    title: 'For Educational Institutions - Authorly',
    description: 'Replace unreliable AI detection with verifiable authorship proof. Protect your institution from legal liability and regulatory scrutiny.',
    url: 'https://authorly.provable.dev/institutions',
    type: 'website',
    images: [
      {
        url: '/images/logo.png?v=2',
        width: 1200,
        height: 630,
        alt: 'Authorly - Institutional Authorship Verification',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Educational Institutions - Authorly',
    description: 'Replace unreliable AI detection with verifiable authorship proof. Protect from legal liability.',
    images: ['/images/logo.png?v=2'],
  },
  alternates: {
    canonical: '/institutions',
  },
}

export default function InstitutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
