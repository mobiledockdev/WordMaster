'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-primary-500 flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg transition-shadow">
              W
            </div>
            <span className="font-bold text-xl text-gray-900 hidden sm:inline">WordMaster</span>
          </Link>

          <button
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-6 absolute md:static top-full left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 md:items-center border-b md:border-0 border-gray-100`}>
            <Link href="/#features" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              How it Works
            </Link>
            <Link href="/#faq" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              FAQ
            </Link>
            <Link href="/support" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Support
            </Link>
            <a
              href="https://apps.apple.com/app/wordmaster"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download App
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
