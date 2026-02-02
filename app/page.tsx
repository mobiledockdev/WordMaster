import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import FAQ from '@/components/FAQ'

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
    </>
  )
}
