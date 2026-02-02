import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Deletion Request - WordMaster',
  description: 'Request deletion of your WordMaster account and personal data. Simple process to protect your privacy.',
}

export default function DataDeletionPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Data Deletion Request</h1>
      <p className="text-gray-600 mb-8 text-lg">How to request permanent deletion of your WordMaster account and data</p>

      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mb-12 border border-red-200">
        <h2 className="text-xl font-bold text-red-900 mb-2">⚠️ Important</h2>
        <p className="text-red-800">
          This action is permanent and cannot be undone. Once you request data deletion, all your learning progress, preferences, and account information will be permanently removed from our systems within 30 days.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Delete Your Data?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          WordMaster respects your right to data privacy. You may want to delete your account for various reasons:
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-3">
            <span className="text-primary-600">✓</span>
            <span>You no longer use the app and want to remove your presence</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary-600">✓</span>
            <span>Privacy concerns or changes in personal circumstances</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary-600">✓</span>
            <span>You want a fresh start with new learning progress</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary-600">✓</span>
            <span>You prefer not to store learning data anywhere</span>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step Deletion Guide</h2>
        
        <div className="space-y-6">
          <div className="bg-white border-l-4 border-primary-600 p-6 rounded-lg">
            <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Send Deletion Request Email</h3>
                <p className="text-gray-700 mb-4">
                  Send an email to <strong>vladislavpshenyanik@gmail.com</strong> with the subject line:
                </p>
                <div className="bg-gray-100 p-4 rounded font-mono text-sm mb-4 text-gray-800">
                  Subject: Account and Data Deletion Request
                </div>
                <p className="text-gray-600">
                  Include your email address associated with the app account in the email body.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-l-4 border-primary-600 p-6 rounded-lg">
            <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Verify Your Identity</h3>
                <p className="text-gray-700 mb-4">
                  We will send you a confirmation email to verify your identity. Click the confirmation link provided in the email to authorize the deletion request.
                </p>
                <p className="text-gray-600 text-sm">
                  This verification step protects your account from unauthorized deletion requests.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-l-4 border-primary-600 p-6 rounded-lg">
            <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Data Processing</h3>
                <p className="text-gray-700 mb-4">
                  Once verified, we will begin the data deletion process. All your data will be permanently removed within 30 days as required by CCPA and GDPR regulations.
                </p>
                <p className="text-gray-600 text-sm">
                  We will not send reminder emails after deletion is complete.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-l-4 border-primary-600 p-6 rounded-lg">
            <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Deletion Complete</h3>
                <p className="text-gray-700 mb-4">
                  Once complete, you may delete the WordMaster app from your device. Your account will not be recoverable.
                </p>
                <p className="text-gray-600 text-sm">
                  You can re-download the app anytime to create a new account with a fresh start.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What Gets Deleted?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <h3 className="font-bold text-red-900 mb-4">✓ Permanently Deleted</h3>
            <ul className="space-y-2 text-red-800">
              <li>• Your account information</li>
              <li>• Learning progress & history</li>
              <li>• Stored preferences</li>
              <li>• Any custom notes or annotations</li>
              <li>• Email address from our database</li>
              <li>• Analytics data associated with your account</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="font-bold text-blue-900 mb-4">📱 Local Device Data</h3>
            <ul className="space-y-2 text-blue-800">
              <li>• Uninstall the app to remove local data</li>
              <li>• Local data is not connected to cloud</li>
              <li>• No sync needed</li>
              <li>• Reinstalling the app creates fresh data</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Deletion Timeline</h2>
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-8 rounded-xl border border-primary-200">
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <div className="text-2xl">📧</div>
              <div>
                <h3 className="font-bold text-gray-900">Request Submitted</h3>
                <p className="text-gray-600 text-sm">Immediate</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="text-2xl">✉️</div>
              <div>
                <h3 className="font-bold text-gray-900">Confirmation Email Sent</h3>
                <p className="text-gray-600 text-sm">Within 1-2 business days</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="text-2xl">⏳</div>
              <div>
                <h3 className="font-bold text-gray-900">Data Processing</h3>
                <p className="text-gray-600 text-sm">Up to 30 days from verification</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="text-2xl">✓</div>
              <div>
                <h3 className="font-bold text-gray-900">Deletion Complete</h3>
                <p className="text-gray-600 text-sm">Account fully removed from all systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-blue-50 rounded-xl p-8 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance & Legal</h2>
        <p className="text-gray-700 mb-4">
          Our data deletion process complies with:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>✓ California Consumer Privacy Act (CCPA)</li>
          <li>✓ General Data Protection Regulation (GDPR)</li>
          <li>✓ Apple App Store Data Deletion Requirements</li>
          <li>✓ Privacy by Design principles</li>
        </ul>
      </section>

      <section className="bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Delete Your Account?</h2>
        <p className="text-primary-100 mb-6 text-lg">
          Send your data deletion request to:
        </p>
        <a
          href="mailto:vladislavpshenyanik@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          vladislavpshenyanik@gmail.com
        </a>

        <p className="text-primary-100 mt-8 text-sm">
          Subject: Account and Data Deletion Request
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Can I cancel my deletion request?</h3>
            <p className="text-gray-700">
              Yes, until you verify the confirmation email. Once verified, the deletion process begins and cannot be canceled.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Will my learning history be restored?</h3>
            <p className="text-gray-700">
              No. Deleted data cannot be recovered. If you reinstall the app, you'll start with a fresh account.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">How long does deletion take?</h3>
            <p className="text-gray-700">
              After you verify your request, deletion processing takes up to 30 days as required by law. You won't receive a confirmation email when complete.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">What if I don't receive the verification email?</h3>
            <p className="text-gray-700">
              Check your spam/junk folder. If you still don't see it, reply to the original email requesting a resend.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Is there any way to recover deleted data?</h3>
            <p className="text-gray-700">
              No. Our deletion process is permanent and irreversible. Please ensure you want to delete before submitting a request.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
