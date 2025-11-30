'use client'

import { useState, FormEvent } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

const supabase = createClient(supabaseUrl, supabaseAnonKey)

interface WaitlistFormProps {
  currency: string
}

type UseCase = 'school' | 'high-school' | 'college-admissions' | 'research-paper' | 'graduate-thesis' | 'other'
type WritingTool = 'microsoft-word' | 'google-docs' | 'libre-office' | 'notion' | 'scrivener' | 'latex' | 'markdown' | 'other'
type Urgency = 'now' | 'this-semester' | 'next-semester'

export default function WaitlistForm({ currency }: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [useCase, setUseCase] = useState<UseCase | ''>('')
  const [otherUseCase, setOtherUseCase] = useState('')
  const [writingTools, setWritingTools] = useState<WritingTool[]>([])
  const [otherTool, setOtherTool] = useState('')
  const [falselyAccused, setFalselyAccused] = useState<boolean | null>(null)
  const [friendsFamilyAccused, setFriendsFamilyAccused] = useState<boolean | null>(null)
  const [anonymousComment, setAnonymousComment] = useState('')
  const [urgency, setUrgency] = useState<Urgency | ''>('')
  const [referralSource, setReferralSource] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const toggleWritingTool = (tool: WritingTool) => {
    if (writingTools.includes(tool)) {
      setWritingTools(writingTools.filter(t => t !== tool))
    } else {
      setWritingTools([...writingTools, tool])
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    // Validate at least one writing tool is selected
    if (writingTools.length === 0) {
      setErrorMessage('Please select at least one writing tool.')
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    try {
      // Get user agent
      const userAgent = navigator.userAgent

      // Detect country (simple approach using timezone)
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
      let countryCode = 'EU' // default
      if (timezone.includes('America/New_York') || timezone.includes('America/Los_Angeles') || timezone.includes('America/Chicago')) {
        countryCode = 'US'
      }

      const { data, error } = await supabase
        .from('authorly_waitlist')
        .insert([
          {
            email,
            use_case: useCase,
            other_use_case: useCase === 'other' ? otherUseCase : null,
            current_writing_tools: writingTools,
            other_writing_tool: writingTools.includes('other') ? otherTool : null,
            falsely_accused: falselyAccused,
            friends_family_accused: friendsFamilyAccused,
            anonymous_comment: falselyAccused ? anonymousComment : null,
            urgency,
            referral_source: referralSource,
            country_code: countryCode,
            detected_currency: currency,
            user_agent: userAgent,
          },
        ])

      if (error) {
        if (error.code === '23505') {
          // Duplicate email
          setErrorMessage('This email is already on the waitlist!')
        } else {
          setErrorMessage('Something went wrong. Please try again.')
        }
        setSubmitStatus('error')
      } else {
        setSubmitStatus('success')
        // Reset form
        setEmail('')
        setUseCase('')
        setOtherUseCase('')
        setWritingTools([])
        setOtherTool('')
        setFalselyAccused(null)
        setFriendsFamilyAccused(null)
        setAnonymousComment('')
        setUrgency('')
        setReferralSource('')
      }
    } catch (err) {
      setErrorMessage('Failed to submit. Please check your connection and try again.')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">You're on the list!</h3>
        <p className="text-gray-600 mb-4">
          We'll send you an email when Authorly launches. Keep an eye on your inbox!
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="text-primary-600 hover:text-primary-700 font-medium"
        >
          Submit another email
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="you@example.com"
        />
      </div>

      {/* Use Case */}
      <div>
        <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 mb-2">
          You need Authorly for: *
        </label>
        <select
          id="useCase"
          value={useCase}
          onChange={(e) => setUseCase(e.target.value as UseCase)}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
        >
          <option value="">Select an option</option>
          <option value="school">School (K-8)</option>
          <option value="high-school">High School</option>
          <option value="college-admissions">College Admissions</option>
          <option value="research-paper">Research Paper</option>
          <option value="graduate-thesis">Graduate Thesis</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Other Use Case (conditional) */}
      {useCase === 'other' && (
        <div>
          <label htmlFor="otherUseCase" className="block text-sm font-medium text-gray-700 mb-2">
            Please specify:
          </label>
          <input
            type="text"
            id="otherUseCase"
            value={otherUseCase}
            onChange={(e) => setOtherUseCase(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="e.g., Professional writing, journalism, etc."
          />
        </div>
      )}

      {/* Current Writing Tools - Multi-select */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          What do you use for writing now? * <span className="text-gray-500 text-xs">(Select all that apply)</span>
        </label>
        <div className="space-y-2">
          {[
            { value: 'microsoft-word', label: 'Microsoft Word' },
            { value: 'google-docs', label: 'Google Docs' },
            { value: 'libre-office', label: 'LibreOffice' },
            { value: 'notion', label: 'Notion' },
            { value: 'scrivener', label: 'Scrivener' },
            { value: 'latex', label: 'LaTeX' },
            { value: 'markdown', label: 'Markdown' },
            { value: 'other', label: 'Other' },
          ].map((tool) => (
            <label key={tool.value} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={writingTools.includes(tool.value as WritingTool)}
                onChange={() => toggleWritingTool(tool.value as WritingTool)}
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <span className="text-gray-700">{tool.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Other Tool (conditional) */}
      {writingTools.includes('other') && (
        <div>
          <label htmlFor="otherTool" className="block text-sm font-medium text-gray-700 mb-2">
            Please specify other tool:
          </label>
          <input
            type="text"
            id="otherTool"
            value={otherTool}
            onChange={(e) => setOtherTool(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="e.g., Pages, Ulysses, etc."
          />
        </div>
      )}

      {/* Falsely Accused */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Have you been falsely accused of using AI? *
        </label>
        <div className="space-y-2">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="falselyAccused"
              checked={falselyAccused === true}
              onChange={() => setFalselyAccused(true)}
              required
              className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
            />
            <span className="text-gray-700">Yes</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="falselyAccused"
              checked={falselyAccused === false}
              onChange={() => setFalselyAccused(false)}
              required
              className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
            />
            <span className="text-gray-700">No</span>
          </label>
        </div>
      </div>

      {/* Friends/Family Accused */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Have your friends or family been falsely accused of using AI? *
        </label>
        <div className="space-y-2">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="friendsFamilyAccused"
              checked={friendsFamilyAccused === true}
              onChange={() => setFriendsFamilyAccused(true)}
              required
              className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
            />
            <span className="text-gray-700">Yes</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="friendsFamilyAccused"
              checked={friendsFamilyAccused === false}
              onChange={() => setFriendsFamilyAccused(false)}
              required
              className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
            />
            <span className="text-gray-700">No</span>
          </label>
        </div>
      </div>

      {/* Anonymous Comment (conditional) */}
      {falselyAccused === true && (
        <div>
          <label htmlFor="anonymousComment" className="block text-sm font-medium text-gray-700 mb-2">
            Share your story (optional - will be made public anonymously; don't use real names)
          </label>
          <textarea
            id="anonymousComment"
            value={anonymousComment}
            onChange={(e) => setAnonymousComment(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
            placeholder="Your comment will help others understand the real impact of false AI accusations. No personal information will be shared."
          />
          <p className="text-xs text-gray-500 mt-1">
            This will be displayed publicly but completely anonymously to help raise awareness.
          </p>
        </div>
      )}

      {/* Urgency */}
      <div>
        <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
          When do you need this? *
        </label>
        <select
          id="urgency"
          value={urgency}
          onChange={(e) => setUrgency(e.target.value as Urgency)}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
        >
          <option value="">Select an option</option>
          <option value="now">Now</option>
          <option value="this-semester">This semester</option>
          <option value="next-semester">Next semester</option>
        </select>
      </div>

      {/* Referral Source */}
      <div>
        <label htmlFor="referralSource" className="block text-sm font-medium text-gray-700 mb-2">
          How did you hear about Authorly? *
        </label>
        <input
          type="text"
          id="referralSource"
          value={referralSource}
          onChange={(e) => setReferralSource(e.target.value)}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="e.g., Twitter, Reddit, friend, search engine, etc."
        />
      </div>

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800 text-sm">{errorMessage}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-lg"
      >
        {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        We respect your privacy. No spam, ever. Unsubscribe anytime.
      </p>
    </form>
  )
}
