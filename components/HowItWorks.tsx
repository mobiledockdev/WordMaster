'use client'

import Image from 'next/image'
import { useState } from 'react'

const steps = [
  {
    number: '1',
    title: 'Choose a Collection',
    description: 'Select from professional word lists (Oxford 3000, Cambridge CEFR, or Longman 3000) based on your level and goals.',
    image: '/screenshot-1.png',
  },
  {
    number: '2',
    title: 'Learn with Visuals',
    description: 'Study words with definitions, example sentences, visual mnemonics, and native speaker pronunciation guides.',
    image: '/screenshot-2.png',
  },
  {
    number: '3',
    title: 'Practice Smart',
    description: 'Use car mode for hands-free practice, or review words with spaced repetition algorithms for optimal retention.',
    image: '/screenshot-3.png',
  },
  {
    number: '4',
    title: 'Track Progress',
    description: 'Monitor your learning journey with detailed statistics, streak tracking, and milestone achievements.',
    image: '/screenshot-1.png',
  },
]

export default function HowItWorks() {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({})

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }))
  }

  return (
    <section id="how-it-works" className="section-container bg-gradient-to-b from-transparent to-primary-50">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          How It Works
        </h2>
        <p className="text-gray-600 text-lg">
          Как это работает — четыре простых шага
        </p>
      </div>

      <div className="space-y-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
              index % 2 === 1 ? 'lg:grid-cols-2 lg:direction-rtl' : ''
            }`}
          >
            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold text-lg mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {step.description}
              </p>
              <div className="flex gap-4">
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Intuitive interface</span>
                </div>
              </div>
            </div>

            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
              <div className="relative w-full max-w-xs mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-300 to-primary-100 blur-2xl opacity-20 rounded-3xl"></div>
                <div className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
                  {imageErrors[index] ? (
                    <div className="w-full aspect-[280/580] bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center shadow-md">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={step.image}
                      alt={`Step ${step.number}: ${step.title}`}
                      width={280}
                      height={580}
                      className="w-full h-auto"
                      onError={() => handleImageError(index)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
