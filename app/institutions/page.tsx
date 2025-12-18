'use client'

import Link from 'next/link'
import Header from '@/components/Header'

export default function Institutions() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Authorly
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            For Educational Institutions
          </h2>

          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Replace unreliable AI detection with verifiable authorship proof.<br></br>
            Protect your institution from legal liability and support academic integrity.
          </p>
        </div>

        {/* Problem Statement - Institution Focused */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
            {/* Core Message */}
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-8">
              <p className="text-lg md:text-xl font-semibold text-gray-900 text-center">
                AI detectors expose your institution to class action lawsuits and regulatory scrutiny.
              </p>
            </div>

            {/* Institutional Risks */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Legal and Reputational Risks
              </h3>
              <p className="text-gray-700 text-center mb-4">
                Schools and universities using AI detectors face significant liability:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 max-w-2xl mx-auto">
                <li><strong>Discrimination lawsuits</strong> - Bias against non-native speakers and students with learning differences</li>
                <li><strong>Due process violations</strong> - Wrongful accusations without reliable evidence</li>
                <li><strong>Reputational damage</strong> - Public backlash and loss of student trust</li>
                <li><strong>Regulatory compliance</strong> - Potential violations of educational standards and student rights</li>
              </ul>
              <p className="text-sm text-gray-600 italic mt-4 text-center">
                AI detectors provide a false sense of security based on misunderstanding of how they work.
              </p>
            </div>

            {/* Why AI Detectors Fail */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Why AI Detectors Cannot Work
              </h3>
              <p className="text-gray-700 text-center">
                AI models are trained on literary works. Good writing resembles AI-generated text <em>because AI learned from good writing</em>. This fundamental flaw makes AI detectors unreliable and discriminatory against skilled writers.
              </p>
              <div className="mt-4 text-center">
                <Link
                  href="/ai-detectors-are-flawed"
                  className="inline-block text-primary-600 hover:text-primary-700 font-semibold underline"
                >
                  Read the full analysis: Why AI detectors are fundamentally flawed →
                </Link>
              </div>
            </div>

            <p className="text-xl font-bold text-primary-700 mt-8 text-center">
              Process-based proof is the only valid method of authorship verification.
            </p>
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
        <div className="max-w-3xl mx-auto mb-16">
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
                href="mailto:contact@authorly.provable.dev"
                className="text-2xl font-bold text-primary-600 hover:text-primary-700"
              >
                contact@authorly.provable.dev
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
              <p className="text-sm text-gray-600 mb-4 text-center">
                Embedded Google Form - Add your Google Form embed code here
              </p>
              {/* TODO: Replace this div with your actual Google Form iframe embed */}
              <div className="min-h-[500px] flex items-center justify-center bg-white border-2 border-dashed border-gray-300 rounded">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-gray-500 font-medium">Google Form Placeholder</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Replace this with your Google Form iframe embed code
                  </p>
                  <p className="text-gray-400 text-xs mt-4 max-w-md">
                    Example: &lt;iframe src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true" width="100%" height="500" frameborder="0"&gt;&lt;/iframe&gt;
                  </p>
                </div>
              </div>
              {/*
                To embed your Google Form:
                1. Open your Google Form
                2. Click Send
                3. Click the embed icon (<>)
                4. Copy the iframe code
                5. Replace the placeholder div above with your iframe code

                Example:
                <iframe
                  src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  className="w-full rounded"
                >
                  Loading…
                </iframe>
              */}
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 mb-4">
            Learn more about why AI detectors fail and why process-based proof is the future:
          </p>
          <Link
            href="/ai-detectors-are-flawed"
            className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Why AI Detectors Are Fundamentally Flawed →
          </Link>
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
