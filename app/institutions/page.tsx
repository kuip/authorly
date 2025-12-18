'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'

export default function Institutions() {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact-form')
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-16 md:py-24">
          {/* Hero Section - Two Column Layout */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Hero Content */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/images/authorly.png"
                    alt="Authorly Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                    priority
                  />
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Authorly
                  </h1>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  For Educational Institutions
                </h2>

                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  Replace unreliable AI detection with verifiable authorship proof.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Protect your institution from legal liability and support academic integrity.
                </p>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Protect the academic integrity of your students.
                </p>

                <div>
                  <button
                    onClick={scrollToContact}
                    className="w-full bg-primary-50 border-2 border-primary-200 rounded-lg px-6 py-4 hover:bg-primary-100 hover:border-primary-300 transition-all duration-200 cursor-pointer"
                  >
                    <p className="text-xl font-bold text-primary-700 text-center">
                      Contact us
                    </p>
                  </button>
                </div>
              </div>

              {/* Right Column - Problem Statement */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                    <svg className="w-6 h-6 text-gray-700 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Legal and Reputational Risks
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Schools and universities using AI detectors face significant liability:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                    <li><strong>Discrimination lawsuits</strong> - Bias against non-native speakers and students with learning differences</li>
                    <li><strong>Due process violations</strong> - Wrongful accusations without reliable evidence</li>
                    <li><strong>Reputational damage</strong> - Public backlash and loss of student trust</li>
                    <li><strong>Regulatory compliance</strong> - Potential violations of educational standards and student rights</li>
                  </ul>
                </div>

                <Link href="/ai-detectors-are-flawed">
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-6 mt-6 cursor-pointer hover:bg-red-100 hover:border-red-300 transition-all duration-200">
                    <p className="text-lg md:text-xl font-semibold text-gray-900">
                      AI detectors expose your institution to class action lawsuits and regulatory scrutiny.
                    </p>
                  </div>
                </Link>

              </div>
            </div>
          </div>

        {/* How Authorly Solves This */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            How Authorly Provides Real Proof
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cryptographic Verification</h3>
              <p className="text-gray-600">
                Mathematical proof of authorship that cannot be falsified. Captures the complete writing process with tamper-proof evidence.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Process</h3>
              <p className="text-gray-600">
                Replayable writing history shows the complete authorship journey. Verifiable by anyone, including legal counsel and regulatory bodies.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Privacy Protected</h3>
              <p className="text-gray-600">
                Student writing remains private. Proof of authorship is shared without exposing the content itself.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact-form" className="max-w-3xl mx-auto mb-16 scroll-mt-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-gray-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Interested in institutional licensing or have questions about how Authorly can protect your institution?
            </p>

            {/* Contact Email */}
            <div className="text-center mb-8">
              <p className="text-gray-700 mb-2">Contact us directly:</p>
              <a
                href="mailto:authorly@mail.provable.dev"
                className="text-2xl font-bold text-primary-600 hover:text-primary-700"
              >
                authorly@mail.provable.dev
              </a>
            </div>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or use the contact form</span>
              </div>
            </div>

            {/* Google Form Embed */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">

              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe1yxjmrv0WODkh9NS43H-uewswbGw8MmuL-XuTW-rEZNWOTg/viewform?embedded=true" width="640" height="850" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
          </div>
        </div>
      </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-8 mt-16">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>&copy; 2025 Authorly. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  )
}
