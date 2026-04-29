'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Landscaping', href: '/landscaping' },
  { name: 'Irrigation', href: '/irrigation' },
  { name: 'Special Projects', href: '/special-projects' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isSpanish = pathname.startsWith('/es')

  return (
    <div className="sticky top-0 z-50">
      <div className="h-1 bg-brand-gold" />
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <nav className="container-default">
          <div className="flex h-20 items-center justify-between">
            <Link href={isSpanish ? '/es' : '/'} className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold tracking-tight text-brand-navy">
                GREATVIEW
              </span>
              <span className="text-2xl font-light tracking-tight text-brand-green">
                LANDSCAPES
              </span>
            </Link>

            <div className="hidden lg:flex lg:items-center lg:gap-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? 'text-brand-green'
                      : 'text-gray-600 hover:text-brand-green'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="flex items-center gap-1 text-xs font-medium text-gray-400 border-l border-gray-200 pl-6">
                <Link
                  href="/"
                  className={`px-1.5 py-0.5 rounded transition-colors ${
                    !isSpanish
                      ? 'text-brand-green font-semibold'
                      : 'hover:text-gray-600'
                  }`}
                >
                  EN
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  href="/es"
                  className={`px-1.5 py-0.5 rounded transition-colors ${
                    isSpanish
                      ? 'text-brand-green font-semibold'
                      : 'hover:text-gray-600'
                  }`}
                >
                  ES
                </Link>
              </div>

              <Link
                href="/contact"
                className="rounded-md bg-brand-green px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-green-light transition-colors duration-200"
              >
                Get a Proposal
              </Link>
            </div>

            <button
              type="button"
              className="lg:hidden -m-2.5 p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 pb-6 pt-4">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block rounded-md py-2.5 px-3 text-base font-medium transition-colors ${
                      pathname === item.href
                        ? 'bg-brand-green-50 text-brand-green'
                        : 'text-gray-700 hover:bg-brand-green-50 hover:text-brand-green'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-500">
                  <Link
                    href="/"
                    className={!isSpanish ? 'font-semibold text-brand-green' : 'hover:text-gray-700'}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    English
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link
                    href="/es"
                    className={isSpanish ? 'font-semibold text-brand-green' : 'hover:text-gray-700'}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Espanol
                  </Link>
                </div>
                <Link
                  href="/contact"
                  className="mt-4 block rounded-md bg-brand-green px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-brand-green-light transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Proposal
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  )
}
