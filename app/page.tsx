'use client'

import { useState, useEffect } from 'react'
import WaitlistForm from '@/components/WaitlistForm'

export default function Home() {
  const [pricing, setPricing] = useState({ currency: 'EUR', amount: '19.99' })

  useEffect(() => {
    // Detect user location and set pricing
    const detectLocation = async () => {
      try {
        // Try to get user's timezone
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

        // Simple detection based on timezone
        // For production, you might want to use a proper geolocation API
        if (timezone.includes('America')) {
          setPricing({ currency: 'USD', amount: '21.99' })
        } else {
          setPricing({ currency: 'EUR', amount: '19.99' })
        }
      } catch (error) {
        // Default to EUR
        setPricing({ currency: 'EUR', amount: '19.99' })
      }
    }

    detectLocation()
  }, [])

  const scrollToForm = () => {
    const formElement = document.getElementById('waitlist-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Prove You Wrote It
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Stop false AI-detection accusations. Cryptographically prove your writing is authentic with a complete, verifiable authorship trail.
          </p>

          <div className="mb-12">
            <button
              onClick={scrollToForm}
              className="inline-block bg-primary-50 border-2 border-primary-200 rounded-lg px-6 py-3 hover:bg-primary-100 hover:border-primary-300 transition-all duration-200 cursor-pointer transform hover:scale-105"
            >
              <p className="text-2xl font-bold text-primary-700">
                Only <span className="text-3xl">{pricing.currency === 'USD' ? '$' : '€'}{pricing.amount}</span>/month
              </p>
              <p className="text-sm text-primary-600 mt-1">Launch price - Lock it in forever</p>
            </button>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">

            {/* Core Message */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6 mb-8">
              <p className="text-lg md:text-xl font-semibold text-gray-900 text-center">
                AI detectors are fundamentally flawed. AI models are trained on literary works. Good writing looks like AI because AI learned from good writing.
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Institutions */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-gray-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  For Institutions
                </h3>
                <p className="text-gray-700">
                  Schools and universities using AI detectors are exposing themselves to <strong>class action lawsuits</strong>.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                  <li>Discrimination against non-native speakers</li>
                  <li>Bias against students with learning differences</li>
                  <li>Wrongful accusations without due process</li>
                  <li>Reputational damage to the institution</li>
                </ul>
                <p className="text-sm text-gray-600 italic mt-4">
                  AI detectors provide a false sense of security based on misunderstanding of how they work.
                </p>
              </div>

              {/* Students */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  For Students
                </h3>
                <p className="text-gray-700">
                  Students are being falsely accused of using AI, facing serious consequences:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                  <li>Failed assignments and lower grades</li>
                  <li>Rejected college applications</li>
                  <li>Academic integrity violations</li>
                  <li>Damaged reputations and mental health impact</li>
                </ul>
                <p className="text-sm text-gray-600 italic mt-4">
                  The better your writing, the more likely you'll be flagged.
                </p>
              </div>
            </div>

            <p className="text-xl font-bold text-primary-700 mt-8 text-center">
              You wrote it. Now you can prove it.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            How Authorly Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Write Naturally</h3>
              <p className="text-gray-600">
                Use our writing editor just like any other tool. Every keystroke, edit, and revision is captured in real-time.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Build Your Proof</h3>
              <p className="text-gray-600">
                We create a cryptographically-secured trail of your writing process, including typing patterns and revision history.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collaborate & Track</h3>
              <p className="text-gray-600">
                Share your work with others and continue the authorship trail. See exact percentages of effort by each contributor.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Export & Share</h3>
              <p className="text-gray-600">
                Generate an authorship certificate with replay capability. Show your teachers, admissions officers, or anyone who needs proof.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What You Get
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-gray-700"><strong>Real-time writing capture</strong> - Every keystroke and edit tracked</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-gray-700"><strong>Mathematical verification</strong> - Cryptographically tamper-proof evidence</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-gray-700"><strong>Writing replay</strong> - Show your complete writing process from start to finish</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-gray-700"><strong>Typing pattern analysis</strong> - Unique behavioral signature that's hard to fake</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-gray-700"><strong>Authorship certificates</strong> - Professional PDF reports for submission</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-gray-700"><strong>Version history</strong> - Track and annotate your revision process</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Waitlist Form */}
        <div id="waitlist-form" className="max-w-2xl mx-auto scroll-mt-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-primary-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Join the Waitlist
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Be among the first to get access. Lock in the launch price of {pricing.currency === 'USD' ? '$' : '€'}{pricing.amount}/month forever.
            </p>

            <WaitlistForm currency={pricing.currency} />
          </div>
        </div>

        {/* Social Proof / Trust */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Authorly is built for students, by people who understand the AI detection crisis.
            Your privacy is protected - we never share your writing or personal information.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2025 Authorly. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
