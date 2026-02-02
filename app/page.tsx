import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import FAQ from '@/components/FAQ'
import { APP_STORE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'WordMaster: Ultimate Vocabulary Builder for iOS',
  description: 'Master English vocabulary with curated word lists, visual learning, audio pronunciation, and smart dictionary. Download WordMaster on App Store.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Privacy-First Learning Platform
          </h2>
          <p className="text-primary-100 text-lg mb-2">
            Your vocabulary learning, your control
          </p>
          <p className="text-primary-100 text-lg mb-6">
            Ваше обучение, ваш контроль
          </p>
          <p className="max-w-2xl mx-auto text-primary-100 mb-6 leading-relaxed">
            WordMaster stores most of your learning data locally on your device. We don't track your activity, sell your data, or share your information with third parties. Your privacy is our top priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/privacy" className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              Read Privacy Policy
            </a>
            <a href="/data-deletion" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Request Data Deletion
            </a>
          </div>
        </div>
      </section>

      <FAQ />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start Mastering Vocabulary Today
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Начните овладевать словарным запасом уже сегодня
          </p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg justify-center inline-flex"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.05 13.5c-.91 0-1.82.55-2.25 1.45.99.32 1.95 1.1 1.95 2.05 0 1.54-1.34 2.5-2.59 2.5-.82 0-1.67-.4-2.1-1.06-.35-.5-.41-1.22-.41-1.75v-4.59c0-1.02-.23-2.11-1.36-2.11-.68 0-1.59.13-2.42.13V7.07c1.5 0 2.78-.5 3.64-1.25.86.75 2.14 1.25 3.64 1.25v2.07c.83 0 1.74-.13 2.42-.13 1.13 0 1.36 1.09 1.36 2.11v4.59c0 .53-.06 1.25-.41 1.75-.43.66-1.28 1.06-2.1 1.06z" />
            </svg>
            Download on App Store
          </a>
        </div>
      </section>
    </>
  )
}
