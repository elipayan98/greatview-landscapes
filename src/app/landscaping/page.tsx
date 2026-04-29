import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Landscaping Contracts',
  description:
    'Commercial landscaping maintenance contracts for HOA communities and commercial properties in San Antonio, TX. Weekly mowing, pruning, seasonal cleanup, and more.',
}

const included = [
  'Weekly mowing and edging',
  'Shrub and hedge trimming',
  'Tree trimming (under 15 feet)',
  'Leaf and debris removal',
  'Seasonal flower bed maintenance',
  'Weed control and pre-emergent applications',
  'Mulch installation and top-dressing',
  'Post-storm cleanup',
  'Walkway and parking area sweeping',
]

const steps = [
  {
    number: '01',
    title: 'Property Assessment',
    description:
      'We walk the property with you, document current conditions, and identify priorities.',
  },
  {
    number: '02',
    title: 'Custom Proposal',
    description:
      'You receive a detailed scope of work, service schedule, and transparent pricing.',
  },
  {
    number: '03',
    title: 'Onboarding',
    description:
      'We assign a crew lead, set up communication channels, and begin service.',
  },
  {
    number: '04',
    title: 'Ongoing Management',
    description:
      'Regular quality checks, seasonal adjustments, and monthly reporting keep your property on track.',
  },
]

const faqs = [
  {
    question: 'What types of properties do you service?',
    answer:
      'We work with HOA communities, commercial office parks, retail centers, multi-family complexes, and municipal properties across the San Antonio metro.',
  },
  {
    question: 'How are your contracts structured?',
    answer:
      'We offer 12-month contracts with monthly billing. Contract terms are flexible and can be adjusted to fit your property\'s budget cycle.',
  },
  {
    question: 'Do you handle irrigation as part of a landscape contract?',
    answer:
      'Irrigation can be bundled into your landscape contract or managed as a separate agreement. We recommend bundling for streamlined communication and scheduling.',
  },
  {
    question: 'What happens if we are not satisfied with the work?',
    answer:
      'We have a 24-hour resolution policy. If an issue is reported, a crew lead will be on-site within one business day to address it.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Commercial Landscaping Maintenance',
    provider: {
      '@type': 'LocalBusiness',
      name: 'GreatView Landscapes',
      url: 'https://greatviewlandscapes.com',
    },
    areaServed: {
      '@type': 'City',
      name: 'San Antonio',
    },
    description:
      'Full-service landscape maintenance contracts for HOA communities and commercial properties in San Antonio, including mowing, pruning, seasonal cleanup, and more.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  },
]

export default function LandscapingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-green-dark to-brand-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container-default py-14 sm:py-20 md:py-28">
          <nav className="text-sm text-emerald-200/70 mb-4 sm:mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Landscaping Contracts</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Landscaping Contracts
          </h1>
          <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl">
            Consistent, reliable grounds maintenance for HOA communities and commercial
            properties across the San Antonio metro.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight">
              Grounds Maintenance Built Around Your Property
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              GreatView Landscapes provides full-service landscape maintenance contracts tailored
              to the specific needs of your property. We work with HOA boards, property managers,
              and commercial facility teams to keep grounds clean, safe, and professionally
              maintained year-round.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Every contract starts with a detailed property assessment. We build a custom
              service plan around your property&apos;s size, layout, plant material, and traffic
              patterns. No cookie-cutter programs.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-brand-cream">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-10">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-lg p-5 border border-gray-100">
                <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-gray-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-12">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number}>
                <span className="text-4xl font-bold text-brand-gold/30">{step.number}</span>
                <h3 className="mt-3 text-lg font-semibold text-brand-navy">{step.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-brand-cream">
        <div className="container-default max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-brand-navy">{faq.question}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-brand-green-dark to-brand-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container-default py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Get a Custom Maintenance Proposal
          </h2>
          <p className="mt-4 text-emerald-100/80 text-lg max-w-2xl mx-auto">
            Tell us about your property and we will put together a scope of work and pricing
            that fits your needs.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-brand-gold px-8 py-3.5 text-sm font-semibold text-brand-navy shadow-lg hover:bg-brand-gold-light transition-colors duration-200"
          >
            Request a Proposal
          </Link>
        </div>
      </section>
    </>
  )
}
