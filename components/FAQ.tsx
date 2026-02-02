'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Is WordMaster free to use?',
    answer: 'Yes, WordMaster is completely free! No hidden costs, no premium features locked behind paywalls. Download it now from the App Store and start mastering vocabulary immediately.',
  },
  {
    question: 'Does WordMaster show ads?',
    answer: 'No, WordMaster is completely ad-free. We believe in an uninterrupted learning experience where you can focus on mastering vocabulary without distractions.',
  },
  {
    question: 'Can I use WordMaster offline?',
    answer: 'Yes! All word collections, definitions, images, and audio files are downloaded to your device. You can learn vocabulary anytime, anywhere without an internet connection.',
  },
  {
    question: 'Which word lists are available?',
    answer: 'WordMaster includes three professional collections: Oxford 3000 (essential vocabulary), Cambridge CEFR (proficiency levels), and Longman 3000 (core words). Each contains carefully curated vocabulary at different difficulty levels.',
  },
  {
    question: 'How does Car Mode work?',
    answer: 'Car Mode enables hands-free learning while driving. Listen to word pronunciations, definitions, and example sentences. Respond with a simple tap or voice command without needing to look at the screen.',
  },
  {
    question: 'Can I track my learning progress?',
    answer: 'Absolutely! WordMaster tracks which words you\'ve learned, your daily streaks, and learning statistics. Review your progress anytime to stay motivated and identify areas for improvement.',
  },
  {
    question: 'Is there a Russian-English dictionary?',
    answer: 'Yes. WordMaster includes a smart bilingual dictionary with English-Russian translations and Russian-English for faster understanding, especially helpful when learning complex concepts.',
  },
  {
    question: 'How accurate is the pronunciation audio?',
    answer: 'Our audio is recorded by native English speakers and includes IPA (International Phonetic Alphabet) guides. This ensures you learn authentic pronunciation and perfect your accent.',
  },
  {
    question: 'Do you sell my data?',
    answer: 'No. We never sell your data. WordMaster stores most data locally on your device. We\'re privacy-first, and you have full control over your information.',
  },
  {
    question: 'What if I want to delete my account?',
    answer: 'You can request data deletion anytime from the Data Deletion page. We\'ll process your request within 30 days and permanently remove your account and all associated data.',
  },
]

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="section-container bg-gradient-to-b from-primary-50 to-transparent">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg">
          Часто задаваемые вопросы о WordMaster
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary-300 transition-colors"
          >
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-primary-50 transition-colors text-left"
              aria-expanded={expandedIndex === index}
            >
              <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
              <svg
                className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform ${
                  expandedIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                expandedIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <p className="px-6 py-4 text-gray-600 bg-primary-50 border-t border-gray-200">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-8 border border-primary-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Didn't find what you're looking for?</h3>
        <p className="text-gray-600 mb-6">
          Our support team is here to help. Reach out anytime with questions, feedback, or suggestions.
        </p>
        <a
          href="mailto:support@wordmaster.app"
          className="btn-primary"
        >
          Contact Support
        </a>
      </div>
    </section>
  )
}
