import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - WordMaster',
  description: 'WordMaster Privacy Policy. Learn how we protect your data and respect your privacy.',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-gray-600 mb-8">Last updated: January 2026</p>
      <p className="text-gray-600 mb-8 italic">Политика конфиденциальности</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
          <p>
            At WordMaster ("we," "us," "our," or "Company"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App").
          </p>
          <p className="text-gray-600 italic mt-2">
            В WordMaster мы привержены защите вашей конфиденциальности.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data We Collect</h2>
          <p>WordMaster collects minimal data, primarily stored locally on your device:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li><strong>Learning Data:</strong> Words you've learned, progress, scores, and preferences. This data is stored locally on your device.</li>
            <li><strong>Usage Analytics:</strong> Crash reports and error logs (completely anonymized) to improve app stability.</li>
            <li><strong>Device Information:</strong> Device type, OS version, and app version for compatibility purposes.</li>
            <li><strong>Contact Information:</strong> Only if you voluntarily contact support or request data deletion.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Data</h2>
          <p>We use collected data to:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Provide and personalize the WordMaster experience</li>
            <li>Improve app stability and performance</li>
            <li>Respond to your support requests</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Storage & Security</h2>
          <p>
            <strong>Local Storage:</strong> Your learning data, progress, and preferences are stored locally on your device. You have full control over this data and can delete it anytime by uninstalling the app.
          </p>
          <p className="mt-4">
            <strong>Server Data:</strong> Minimal server data (crash logs, anonymized analytics) is encrypted in transit and at rest using industry-standard SSL/TLS encryption.
          </p>
          <p className="text-gray-600 italic mt-2">
            Локальное хранение: ваши данные обучения хранятся на вашем устройстве.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Sharing & Third Parties</h2>
          <p>
            <strong>We do NOT sell your data.</strong> We do not share, sell, rent, or otherwise disclose your personal information to third parties for their marketing purposes.
          </p>
          <p className="mt-4">
            We may share data with:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li><strong>Service Providers:</strong> Analytics platforms and crash reporting services (all bound by confidentiality agreements)</li>
            <li><strong>Legal Requirements:</strong> When required by law or court order</li>
            <li><strong>App Store:</strong> Basic analytics required by Apple for app store presence</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights & Control</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li><strong>Access:</strong> Request information about what data we hold</li>
            <li><strong>Delete:</strong> Request deletion of your account and all associated data</li>
            <li><strong>Opt-out:</strong> Disable analytics and crash reporting in app settings</li>
            <li><strong>Portability:</strong> Export your learning data in standard formats</li>
          </ul>
          <p className="mt-4">
            To exercise these rights, email us at <a href="mailto:privacy@wordmaster.app" className="text-primary-600 hover:underline">privacy@wordmaster.app</a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children's Privacy</h2>
          <p>
            WordMaster does not knowingly collect personal information from children under 13. If we learn we have collected such information, we will delete it immediately. Parents/guardians who believe their child has provided information to WordMaster should contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant changes via the app or email. Your continued use of WordMaster after changes constitutes your acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
          <p>
            For privacy concerns or inquiries, contact us at:
          </p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p><strong>Email:</strong> <a href="mailto:privacy@wordmaster.app" className="text-primary-600 hover:underline">privacy@wordmaster.app</a></p>
            <p className="mt-2"><strong>Legal:</strong> <a href="mailto:legal@wordmaster.app" className="text-primary-600 hover:underline">legal@wordmaster.app</a></p>
          </div>
        </section>
      </div>
    </div>
  )
}
