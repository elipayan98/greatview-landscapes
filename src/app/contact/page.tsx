'use client'

import Link from 'next/link'
import { useState } from 'react'

const propertyTypes = ['HOA Community', 'Commercial Property', 'Multi-Family Complex', 'Other']
const serviceInterests = [
  'Landscaping Contract',
  'Irrigation Services',
  'Special Project',
  'Multiple Services',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-green-dark to-brand-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container-default py-14 sm:py-20 md:py-28">
          <nav className="text-sm text-emerald-200/70 mb-4 sm:mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl">
            Ready to discuss your property&apos;s needs? Reach out for a consultation
            or proposal.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">

            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-8">
                Request a Proposal
              </h2>

              {submitted ? (
                <div className="rounded-xl bg-brand-green-50 border border-brand-green/20 p-8 text-center">
                  <svg className="w-12 h-12 text-brand-green mx-auto mb-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">
                    Thank you for reaching out.
                  </h3>
                  <p className="text-gray-600">
                    We will review your information and get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors"
                        placeholder="(210) 555-0100"
                      />
                    </div>
                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Property Type
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        required
                        className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors bg-white"
                      >
                        <option value="">Select type</option>
                        {propertyTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors bg-white"
                    >
                      <option value="">Select service</option>
                      {serviceInterests.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors resize-vertical"
                      placeholder="Tell us about your property and what you are looking for."
                    />
                  </div>

                  <button
                    type="submit"
                    className="rounded-md bg-brand-green px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-green-light transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-2">
                    Phone
                  </h3>
                  <a href="tel:+12105550100" className="text-gray-700 hover:text-brand-green transition-colors">
                    (210) 555-0100
                  </a>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-2">
                    Email
                  </h3>
                  <a href="mailto:info@greatviewlandscapes.com" className="text-gray-700 hover:text-brand-green transition-colors">
                    info@greatviewlandscapes.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-2">
                    Hours
                  </h3>
                  <p className="text-gray-700">Monday through Friday</p>
                  <p className="text-gray-700">7:00 AM to 5:00 PM</p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-2">
                    Service Area
                  </h3>
                  <p className="text-gray-700">
                    San Antonio and surrounding communities including New Braunfels, Boerne,
                    Schertz, Cibolo, Helotes, and the greater Texas Hill Country region.
                  </p>
                </div>
              </div>

              <div className="mt-10 rounded-xl bg-brand-cream border border-gray-200 p-6">
                <h3 className="text-sm font-semibold text-brand-navy mb-2">
                  What to expect
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green font-bold mt-0.5">1.</span>
                    We review your inquiry within one business day.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green font-bold mt-0.5">2.</span>
                    We schedule a property walk-through at your convenience.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green font-bold mt-0.5">3.</span>
                    You receive a detailed proposal with scope and pricing.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-brand-cream">
        <div className="container-default py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-6">
            Our Service Area
          </h2>
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              title="GreatView Landscapes Service Area - San Antonio, TX"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222383.97042721945!2d-98.63627453125!3d29.45876225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58af04d00eaf%3A0x856e8b57a9f4d42!2sSan%20Antonio%2C%20TX!5e0!3m2!1sen!2sus!4v1714400000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              className="sm:h-[400px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
