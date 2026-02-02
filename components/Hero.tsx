'use client'

import Image from 'next/image'

export default function Hero() {
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
                href="https://apps.apple.com/app/wordmaster"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 13.5c-.91 0-1.82.55-2.25 1.45.99.32 1.95 1.1 1.95 2.05 0 1.54-1.34 2.5-2.59 2.5-.82 0-1.67-.4-2.1-1.06-.35-.5-.41-1.22-.41-1.75v-4.59c0-1.02-.23-2.11-1.36-2.11-.68 0-1.59.13-2.42.13V7.07c1.5 0 2.78-.5 3.64-1.25.86.75 2.14 1.25 3.64 1.25v2.07c.83 0 1.74-.13 2.42-.13 1.13 0 1.36 1.09 1.36 2.11v4.59c0 .53-.06 1.25-.41 1.75-.43.66-1.28 1.06-2.1 1.06z" />
                </svg>
                Download on App Store
              </a>
              <a
                href="#features"
                className="btn-secondary justify-center"
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
                <Image
                  src="/screenshot-1.png"
                  alt="WordMaster Learning Interface"
                  width={393}
                  height={804}
                  priority
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
