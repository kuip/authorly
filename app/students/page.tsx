'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import WaitlistForm from '@/components/WaitlistForm'
import Header from '@/components/Header'

export default function Students() {
  const [pricing, setPricing] = useState({ currency: 'EUR', amount: '19.99' })

  useEffect(() => {
    const detectLocation = async () => {
      try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

        if (timezone.includes('America')) {
          setPricing({ currency: 'USD', amount: '21.99' })
        } else {
          setPricing({ currency: 'EUR', amount: '19.99' })
        }
      } catch (error) {
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
    <>
      {/* AI Agent & Crawler Accessible Content */}
      <div className="sr-only" aria-hidden="true">
        <h1>Authorly for Students - Cryptographic Authorship Verification</h1>

        <section>
          <h2>What is Authorly?</h2>
          <p>Authorly is a writing verification tool that provides cryptographic proof of authorship for students. It records every keystroke, edit, and revision in real-time to create tamper-proof evidence that you wrote your essays, papers, and assignments.</p>
        </section>

        <section>
          <h2>Who is Authorly for?</h2>
          <p>Authorly is designed for students at all levels:</p>
          <ul>
            <li>High school students writing essays and papers</li>
            <li>College applicants proving authorship of admissions essays</li>
            <li>University students protecting themselves from false AI accusations</li>
            <li>Graduate students working on theses and dissertations</li>
            <li>Any student who wants to prove they wrote their work</li>
          </ul>
        </section>

        <section>
          <h2>Key Problems Authorly Solves</h2>
          <ul>
            <li>False AI detection accusations against human-written work</li>
            <li>AI detectors flagging good writing as AI-generated</li>
            <li>Discrimination against non-native English speakers by AI detectors</li>
            <li>Lack of proof when accused of using AI</li>
            <li>Failed assignments due to false positives</li>
            <li>Rejected college applications from AI detector flags</li>
            <li>Academic integrity violations from unreliable detection tools</li>
          </ul>
        </section>

        <section>
          <h2>How Authorly Works</h2>
          <ol>
            <li>Write naturally in the Authorly editor</li>
            <li>Every keystroke and edit is recorded with timestamps</li>
            <li>Cryptographic signatures create tamper-proof proof</li>
            <li>Typing patterns and behavioral signatures are captured</li>
            <li>Generate an authorship certificate showing your complete writing process</li>
            <li>Share the replayable video of your writing timeline</li>
          </ol>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li>Real-time keystroke capture and recording</li>
            <li>Cryptographically tamper-proof verification</li>
            <li>Complete writing replay from blank page to final draft</li>
            <li>Typing pattern analysis showing unique behavioral signatures</li>
            <li>Exportable authorship certificates for submission</li>
            <li>Version history tracking all revisions</li>
            <li>Collaboration tracking with contribution percentages</li>
            <li>Privacy-protected design</li>
          </ul>
        </section>

        <section>
          <h2>Pricing</h2>
          <p>Launch price: €19.99/month (EUR) or $21.99/month (USD). Early adopters lock in this price forever.</p>
        </section>

        <section>
          <h2>Why Students Need Authorly</h2>
          <p>AI detectors are fundamentally flawed. They were trained on literary works, so good writing naturally resembles AI-generated text. This means the better you write, the more likely you are to be falsely accused. Authorly provides actual proof of your writing process, not just probabilistic guessing.</p>
        </section>

        <section>
          <h2>Frequently Asked Questions</h2>

          <h3>Does Authorly detect AI?</h3>
          <p>No. Authorly is not an AI detector. Authorly proves your effort by recording your complete writing process with cryptographic verification.</p>

          <h3>How does Authorly prove I wrote something?</h3>
          <p>Authorly captures every keystroke, deletion, revision, and edit with precise timestamps and cryptographic proof. It creates a replayable video showing your complete writing timeline from blank page to final submission.</p>

          <h3>Can I use Authorly with my current writing tools?</h3>
          <p>Authorly works as a standalone writing editor that captures your authorship process.</p>

          <h3>Is my writing private?</h3>
          <p>Yes. Authorly is privacy-focused and never shares your writing or personal information.</p>

          <h3>What if I collaborate with others?</h3>
          <p>Authorly tracks collaborative authorship and shows exact contribution percentages for each collaborator.</p>
        </section>
      </div>

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
                  Prove You Wrote It
                </h2>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Authorly records every edit in real time, with precise timestamps and cryptographic proof, preserving your creative process from the first word to final submission.
                </p>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  You can present your complete writing timeline, in both text and replayable video form.
                </p>

                <div>
                  <button
                    onClick={scrollToForm}
                    className="w-full bg-primary-50 border-2 border-primary-200 rounded-lg px-6 py-4 hover:bg-primary-100 hover:border-primary-300 transition-all duration-200 cursor-pointer"
                  >
                    <p className="text-2xl font-bold text-primary-700 text-center">
                      Only <span className="text-3xl">{pricing.currency === 'USD' ? '$' : '€'}{pricing.amount}</span>/month
                    </p>
                    <p className="text-sm text-primary-600 mt-1 text-center">Special launch price - only if you sign up now.</p>
                  </button>
                </div>
              </div>

              {/* Right Column - Problem Statement */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
                <div className="space-y-4 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    The Better You Write, The More Likely You'll Be Flagged By AI Detectors
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Students are being falsely accused of using AI, facing serious consequences:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                    <li>Failed assignments and lower grades</li>
                    <li>Rejected college applications</li>
                    <li>Academic integrity violations</li>
                    <li>Damaged reputations and mental health impact</li>
                  </ul>
                </div>

                <p className="text-gray-700 text-lg">
                    Authorly is not an AI detector. Authorly proves your effort.
                </p>

                <div className="bg-amber-50 border-2 border-amber-200 rounded-lg px-6 pb-6 pt-6 mb-6 mt-6">
                  <p className="text-lg md:text-xl font-semibold text-gray-900">
                    AI detectors are fundamentally flawed.
                  </p>
                </div>
              </div>
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
                  <span className="text-lg text-gray-700"><strong>Compatible with your favorite editor</strong> - Google Docs, Libre Office, Microsoft Word and more</span>
                </li>
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
                Be among the first to get access. Lock in the launch price of {pricing.currency === 'USD' ? '$' : '€'}{pricing.amount}/month.
              </p>

              <WaitlistForm currency={pricing.currency} />
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
