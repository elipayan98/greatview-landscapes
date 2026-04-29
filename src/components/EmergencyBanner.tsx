'use client'

import { useState } from 'react'
import Link from 'next/link'

// Toggle this to true during storm season or weather emergencies
const SHOW_BANNER = false

export default function EmergencyBanner() {
  const [dismissed, setDismissed] = useState(false)

  if (!SHOW_BANNER || dismissed) return null

  return (
    <div className="bg-amber-600 text-white print:hidden">
      <div className="container-default py-2 sm:py-2.5 flex items-start sm:items-center justify-between gap-2 sm:gap-4">
        <p className="text-xs sm:text-sm font-medium">
          <span className="font-bold">Storm damage?</span>{' '}
          24-hour emergency landscape response.{' '}
          <Link
            href="/contact"
            className="underline underline-offset-2 hover:text-amber-100"
          >
            Contact us now
          </Link>
        </p>
        <button
          onClick={() => setDismissed(true)}
          className="flex-shrink-0 p-1.5 hover:bg-amber-700 rounded transition-colors mt-0.5 sm:mt-0"
          aria-label="Dismiss banner"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
