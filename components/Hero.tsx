'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Hero() {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <section className="gradient-bg pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Master English <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">vocabulary</span> with ease
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-2">
              Master English vocabulary with curated lists, visuals, and audio
            </p>
            <p className="text-gray-500 text-sm mb-8 italic">
              Овладейте английским словарным запасом с помощью кураторских списков
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Learn with professional word collections (Oxford 3000, Cambridge CEFR, Longman 3000), visual mnemonics, native pronunciation audio, and car mode for hands-free practice anywhere.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#features"
                className="btn-primary justify-center"
              >
                Learn More
              </a>
            </div>

            <div className="flex gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                100% Free
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No Ads
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-xs">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-300 to-primary-100 blur-3xl opacity-30 rounded-3xl"></div>
              <div className="relative bg-white rounded-3xl border-8 border-gray-300 overflow-hidden shadow-2xl">
                {imageError ? (
                  <div className="w-full aspect-[393/804] bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <Image
                    src="/screenshot-1.png"
                    alt="WordMaster Learning Interface"
                    width={393}
                    height={804}
                    priority
                    className="w-full h-auto"
                    onError={handleImageError}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
