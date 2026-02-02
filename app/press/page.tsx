import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Press Kit - WordMaster',
  description: 'WordMaster Press Kit. Download logos, screenshots, and media assets for press coverage.',
}

export default function PressPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Press Kit</h1>
      <p className="text-gray-600 mb-8 text-lg">Media resources and information about WordMaster</p>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About WordMaster</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          WordMaster is a free, privacy-first vocabulary learning app for iOS that helps language learners master English vocabulary through professional word collections, visual learning, audio pronunciation, and innovative features like Car Mode for hands-free practice.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Built with educators and language learners in mind, WordMaster combines scientifically-backed learning methods with a beautiful, intuitive interface to make vocabulary learning effective and enjoyable.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-primary-600 text-lg mb-2">📱 Platform</h3>
            <p className="text-gray-700">iOS 14.0+</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-primary-600 text-lg mb-2">💰 Pricing</h3>
            <p className="text-gray-700">Completely Free</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-primary-600 text-lg mb-2">🎯 Primary Feature</h3>
            <p className="text-gray-700">Professional vocabulary collections with audio & visuals</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-primary-600 text-lg mb-2">🔐 Privacy</h3>
            <p className="text-gray-700">Data stored locally on device, no tracking</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Features</h2>
        <ul className="space-y-4">
          <li className="flex gap-4">
            <span className="text-2xl">📚</span>
            <div>
              <h3 className="font-bold text-gray-900">Professional Word Collections</h3>
              <p className="text-gray-600 mt-1">Oxford 3000, Cambridge CEFR, and Longman 3000 curated by language experts</p>
            </div>
          </li>

          <li className="flex gap-4">
            <span className="text-2xl">🚗</span>
            <div>
              <h3 className="font-bold text-gray-900">Car Mode</h3>
              <p className="text-gray-600 mt-1">Hands-free learning while driving safely</p>
            </div>
          </li>

          <li className="flex gap-4">
            <span className="text-2xl">🎨</span>
            <div>
              <h3 className="font-bold text-gray-900">Visual Learning</h3>
              <p className="text-gray-600 mt-1">Memory aids and mnemonics for faster retention</p>
            </div>
          </li>

          <li className="flex gap-4">
            <span className="text-2xl">🎵</span>
            <div>
              <h3 className="font-bold text-gray-900">Native Pronunciation</h3>
              <p className="text-gray-600 mt-1">Crystal-clear audio by native speakers with IPA guides</p>
            </div>
          </li>

          <li className="flex gap-4">
            <span className="text-2xl">🔤</span>
            <div>
              <h3 className="font-bold text-gray-900">Bilingual Dictionary</h3>
              <p className="text-gray-600 mt-1">English-Russian translations for clarity</p>
            </div>
          </li>

          <li className="flex gap-4">
            <span className="text-2xl">⚡</span>
            <div>
              <h3 className="font-bold text-gray-900">Smart Tracking</h3>
              <p className="text-gray-600 mt-1">Spaced repetition algorithms for optimal learning</p>
            </div>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Media Assets</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">App Icon</h3>
            <div className="flex items-center gap-6">
              <img src="/app-icon.png" alt="WordMaster App Icon" className="w-24 h-24 rounded-lg" />
              <a href="/app-icon.png" download className="text-primary-600 hover:text-primary-700 font-semibold">
                Download 180x180px PNG
              </a>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Logo</h3>
            <div className="flex items-center gap-6">
              <img src="/logo.svg" alt="WordMaster Logo" className="w-24 h-24" />
              <a href="/logo.svg" download className="text-primary-600 hover:text-primary-700 font-semibold">
                Download SVG Logo
              </a>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Screenshots</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <img src="/screenshot-1.png" alt="Learning Interface" className="w-full rounded-lg mb-2" />
                <a href="/screenshot-1.png" download className="text-primary-600 hover:text-primary-700 text-sm font-semibold">
                  Download Screenshot 1
                </a>
              </div>
              <div>
                <img src="/screenshot-2.png" alt="Audio Learning" className="w-full rounded-lg mb-2" />
                <a href="/screenshot-2.png" download className="text-primary-600 hover:text-primary-700 text-sm font-semibold">
                  Download Screenshot 2
                </a>
              </div>
              <div>
                <img src="/screenshot-3.png" alt="Car Mode" className="w-full rounded-lg mb-2" />
                <a href="/screenshot-3.png" download className="text-primary-600 hover:text-primary-700 text-sm font-semibold">
                  Download Screenshot 3
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Information</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-900 text-lg">App Name</h3>
              <p className="text-gray-700">WordMaster: Ultimate Vocabulary Builder</p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 text-lg">Category</h3>
              <p className="text-gray-700">Education, Language Learning</p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 text-lg">Developer</h3>
              <p className="text-gray-700">WordMaster Team</p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 text-lg">Website</h3>
              <a href="https://wordmaster.app" className="text-primary-600 hover:underline">
                https://wordmaster.app
              </a>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 text-lg">App Store Link</h3>
              <a href="https://apps.apple.com/app/wordmaster" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Available on Apple App Store
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-4">Press Inquiries</h2>
        <p className="text-primary-100 mb-6 text-lg">
          For press coverage, interviews, or media inquiries, please contact us at:
        </p>
        <a
          href="mailto:vladislavpshenyanik@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          press@wordmaster.app
        </a>
      </section>
    </div>
  )
}
