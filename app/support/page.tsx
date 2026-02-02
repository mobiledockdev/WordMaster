import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support - WordMaster',
  description: 'Get help with WordMaster. Contact our support team or browse frequently asked questions.',
}

export default function SupportPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Support Center</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-8 border border-primary-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">❓ Common Questions</h2>
          <p className="text-gray-600 mb-6">
            Find answers to frequently asked questions about WordMaster features, learning modes, and account management.
          </p>
          <a href="#support-faq" className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-2">
            Browse FAQ
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="bg-gradient-to-br from-primary-50 to-cyan-50 rounded-xl p-8 border border-primary-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📱 Getting Started</h2>
          <p className="text-gray-600 mb-6">
            New to WordMaster? Learn how to download, set up your account, and start your vocabulary journey.
          </p>
          <button className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-2">
            Quick Start Guide
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-primary-300 transition-colors">
          <h3 className="text-xl font-bold text-gray-900 mb-4">🎵 Audio & Pronunciation</h3>
          <ul className="space-y-3 text-gray-600">
            <li>• Audio not playing? Check your device volume</li>
            <li>• Learn IPA symbols for better pronunciation</li>
            <li>• Enable "Native Speaker" mode for authentic accent</li>
            <li>• Download audio offline in settings</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-primary-300 transition-colors">
          <h3 className="text-xl font-bold text-gray-900 mb-4">🚗 Car Mode Issues</h3>
          <ul className="space-y-3 text-gray-600">
            <li>• Enable Bluetooth for hands-free control</li>
            <li>• Check microphone permissions in settings</li>
            <li>• Ensure stable internet connection</li>
            <li>• Tap screen to repeat word pronunciation</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-primary-300 transition-colors">
          <h3 className="text-xl font-bold text-gray-900 mb-4">💾 Data & Backup</h3>
          <ul className="space-y-3 text-gray-600">
            <li>• All progress saved locally on your device</li>
            <li>• Data persists when updating the app</li>
            <li>• Uninstalling deletes all local data</li>
            <li>• No cloud sync available (privacy first)</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-primary-300 transition-colors">
          <h3 className="text-xl font-bold text-gray-900 mb-4">⚙️ Settings & Account</h3>
          <ul className="space-y-3 text-gray-600">
            <li>• Reset progress from Settings menu</li>
            <li>• Change dictionary language preferences</li>
            <li>• Toggle notifications on/off</li>
            <li>• Request account deletion anytime</li>
          </ul>
        </div>
      </div>

      <section className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl p-8 md:p-12 text-white mb-12">
        <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
        <p className="text-primary-100 text-lg mb-2">
          Our support team is ready to assist
        </p>
        <p className="text-primary-100 mb-6 max-w-2xl">
          Whether you have a question, found a bug, or have a feature request, we'd love to hear from you. Reach out to us anytime and we'll get back to you within 24 hours.
        </p>
        <a
          href="mailto:vladislavpshenyanik@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Email Support
        </a>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6">
          <div className="text-4xl mb-3">📧</div>
          <h3 className="font-bold text-gray-900 mb-2">Email</h3>
          <a href="mailto:vladislavpshenyanik@gmail.com" className="text-primary-600 hover:underline break-all">
            vladislavpshenyanik@gmail.com
          </a>
        </div>

        <div className="text-center p-6">
          <div className="text-4xl mb-3">🕐</div>
          <h3 className="font-bold text-gray-900 mb-2">Response Time</h3>
          <p className="text-gray-600">Within 24 hours</p>
        </div>

        <div className="text-center p-6">
          <div className="text-4xl mb-3">🌍</div>
          <h3 className="font-bold text-gray-900 mb-2">Languages</h3>
          <p className="text-gray-600">English & Russian</p>
        </div>
      </div>

      <section className="mt-12 bg-gray-50 rounded-xl p-8" id="support-faq">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Troubleshooting Tips</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-primary-500 pl-4">
            <h3 className="font-bold text-gray-900">App crashes on startup?</h3>
            <p className="text-gray-600 mt-2">Try uninstalling and reinstalling the app. This clears cache without losing your progress.</p>
          </div>

          <div className="border-l-4 border-primary-500 pl-4">
            <h3 className="font-bold text-gray-900">Words not saving?</h3>
            <p className="text-gray-600 mt-2">Ensure you have enough device storage space. WordMaster needs at least 500MB free space.</p>
          </div>

          <div className="border-l-4 border-primary-500 pl-4">
            <h3 className="font-bold text-gray-900">Audio quality poor?</h3>
            <p className="text-gray-600 mt-2">Check your speaker volume, try a different audio output (speakers vs. headphones), or restart the app.</p>
          </div>

          <div className="border-l-4 border-primary-500 pl-4">
            <h3 className="font-bold text-gray-900">Sync issues?</h3>
            <p className="text-gray-600 mt-2">WordMaster stores all data locally. No cloud sync is needed. Your data persists across app sessions.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
