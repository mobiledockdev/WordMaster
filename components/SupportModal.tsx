'use client'

import { useState } from 'react'

interface SupportModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SupportModal({ isOpen, onClose }: SupportModalProps) {
  if (!isOpen) return null

  const handleSendEmail = () => {
    window.location.href = 'mailto:vladislavpshenyanik@gmail.com?subject=WordMaster%20Support&body=Describe%20your%20issue...'
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full mx-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Support</h2>
        <p className="text-gray-600 mb-6">
          Email us and we'll help you with WordMaster.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="text-sm font-medium text-gray-700 mb-2">Support Email:</p>
          <p className="text-primary-600 font-semibold break-all">
            vladislavpshenyanik@gmail.com
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleSendEmail}
            className="flex-1 px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Send Email
          </button>
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
