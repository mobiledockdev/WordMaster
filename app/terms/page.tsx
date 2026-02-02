import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use - WordMaster',
  description: 'WordMaster Terms of Use. Review the terms and conditions for using our app.',
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Terms of Use</h1>
      <p className="text-gray-600 mb-8">Last updated: January 2026</p>
      <p className="text-gray-600 mb-8 italic">Условия использования</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p>
            By downloading, installing, and using the WordMaster application ("App"), you agree to be bound by these Terms of Use. If you do not agree to any part of these terms, please do not use the App.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. License Grant</h2>
          <p>
            WordMaster grants you a limited, non-exclusive, non-transferable, revocable license to use the App solely for your personal, non-commercial vocabulary learning purposes. You may not:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Reverse engineer, decompile, or disassemble the App</li>
            <li>Modify, adapt, translate, or create derivative works</li>
            <li>Distribute, sell, rent, or lease the App</li>
            <li>Remove or alter any proprietary notices or labels</li>
            <li>Use the App for commercial purposes without permission</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property Rights</h2>
          <p>
            All content in WordMaster, including text, graphics, logos, images, audio files, and software code, is the property of WordMaster or licensed from third parties. These materials are protected by copyright and international trademark laws.
          </p>
          <p className="mt-4">
            <strong>Word Collections:</strong> Professional word lists (Oxford 3000, Cambridge CEFR, Longman 3000) are used under license from their respective publishers for educational purposes only.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Content</h2>
          <p>
            Any notes, annotations, or custom flashcards you create within WordMaster are owned by you. However, you grant WordMaster a non-exclusive license to use this content to improve the App's features and performance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Acceptable Use</h2>
          <p>You agree not to use the App to:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Harass, abuse, or harm any person or animal</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on anyone's intellectual property rights</li>
            <li>Transmit malware, viruses, or malicious code</li>
            <li>Attempt to gain unauthorized access to systems or accounts</li>
            <li>Spam, phish, or engage in deceptive practices</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimer of Warranties</h2>
          <p>
            <strong>AS IS BASIS:</strong> WordMaster is provided "as is" without warranty of any kind, express or implied. We do not warrant that:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>The App will be error-free or uninterrupted</li>
            <li>The App will meet your specific requirements</li>
            <li>Defects in the App will be corrected</li>
          </ul>
          <p className="mt-4">
            While we strive for accuracy in word definitions and pronunciations, we do not guarantee their accuracy or completeness.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, WordMaster shall not be liable for:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Loss of data or learning progress</li>
            <li>Indirect, incidental, consequential, or punitive damages</li>
            <li>Any damages arising from use or inability to use the App</li>
          </ul>
          <p className="mt-4">
            Your sole remedy for dissatisfaction with WordMaster is to stop using it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless WordMaster from any claims, damages, or costs arising from your use of the App, violation of these Terms, or infringement of any third-party rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to WordMaster at any time, with or without cause. Upon termination, your right to use the App ceases immediately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Third-Party Services</h2>
          <p>
            WordMaster may include links to third-party websites and services. We are not responsible for their content, privacy practices, or availability. Use of third-party services is at your own risk and subject to their terms of use.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
          <p>
            These Terms of Use are governed by and construed in accordance with the laws of the jurisdiction where WordMaster is incorporated, without regard to its conflict of law principles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
          <p>
            We may modify these Terms of Use at any time. Changes are effective immediately upon posting. Your continued use of the App constitutes acceptance of modified terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact</h2>
          <p>
            For questions about these Terms, contact us at:
          </p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p><strong>Email:</strong> <a href="mailto:legal@wordmaster.app" className="text-primary-600 hover:underline">legal@wordmaster.app</a></p>
          </div>
        </section>
      </div>
    </div>
  )
}
