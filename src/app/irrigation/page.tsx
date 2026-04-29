import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Irrigation Services',
  description:
    'Commercial irrigation services in San Antonio, TX. System design, sprinkler repair, smart controller installation, backflow testing, and seasonal management for HOA and commercial properties.',
}

const services = [
  'Irrigation system design and installation',
  'Sprinkler head repair and replacement',
  'Controller programming and smart upgrades',
  'Leak detection and line repair',
  'Backflow preventer testing and certification',
  'Seasonal startup and winterization',
  'Water audits and efficiency assessments',
  'Drip irrigation installation',
  'Rain and soil moisture sensor installation',
]

const steps = [
  {
    number: '01',
    title: 'System Evaluation',
    description:
      'We assess your current irrigation infrastructure, identify inefficiencies, and document repair needs.',
  },
  {
    number: '02',
    title: 'Recommendations',
    description:
      'You receive a prioritized action plan with clear costs for each line item.',
  },
  {
    number: '03',
    title: 'Execution',
    description:
      'Our irrigation technicians handle all work, from valve replacements to full system installs.',
  },
  {
    number: '04',
    title: 'Seasonal Management',
    description:
      'We adjust run times, check coverage, and perform preventive maintenance each season.',
  },
]

const faqs = [
  {
    question: 'Do you work with existing irrigation systems or only install new ones?',
    answer:
      'Both. Most of our work involves repairing, upgrading, and optimizing existing systems. We also design and install new systems for properties that need them.',
  },
  {
    question: 'Can you help reduce our property\'s water costs?',
    answer:
      'Yes. We perform water audits to find waste, install smart controllers and rain sensors, and adjust coverage zones to eliminate overspray and runoff. Most properties see a measurable reduction in water use within the first season.',
  },
  {
    question: 'Do you handle backflow testing?',
    answer:
      'Yes. We are certified to perform annual backflow preventer testing and submit the required documentation to SAWS on your behalf.',
  },
  {
    question: 'What irrigation brands do you work with?',
    answer:
      'We work with all major brands including Hunter, Rain Bird, Toro, and Weathermatic. We can service and integrate parts from any manufacturer.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Commercial Irrigation Services',
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
      'Complete irrigation services for commercial and HOA properties in San Antonio, including system design, repair, smart controller installation, backflow testing, and seasonal management.',
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

export default function IrrigationPage() {
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
            <span className="text-white">Irrigation Services</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Irrigation Services
          </h1>
          <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl">
            System design, repair, and management that keeps your landscape healthy
            and your water costs under control.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight">
              Water Management for Commercial Properties
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Water is the foundation of every healthy landscape. GreatView Landscapes provides
              complete irrigation services for commercial and HOA properties, from new system
              design to ongoing seasonal management. We work with all major system brands and
              specialize in water-efficient solutions built for the San Antonio climate.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              San Antonio water regulations are strict, and for good reason. Our team stays
              current on SAWS requirements and designs systems that keep your property green
              while staying compliant and cost-effective.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-brand-cream">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-10">
            What We Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((item) => (
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
            Schedule an Irrigation Assessment
          </h2>
          <p className="mt-4 text-emerald-100/80 text-lg max-w-2xl mx-auto">
            Let us evaluate your system and put together a plan to improve coverage,
            reduce waste, and lower your water costs.
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
