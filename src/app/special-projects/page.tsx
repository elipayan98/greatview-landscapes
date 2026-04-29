import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Special Projects',
  description:
    'Entry monument design, flower bed installation, seasonal color programs, and custom landscape features for HOA communities and commercial properties in San Antonio, TX.',
}

const projectTypes = [
  'Entry monument design and construction',
  'Flower bed design and installation',
  'Seasonal color rotations',
  'Landscape renovation and redesign',
  'Hardscape features (walkways, borders, retaining walls)',
  'Tree and large shrub installation',
  'Erosion control solutions',
  'Drainage improvements',
]

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We meet on-site to discuss your vision, budget, and timeline.',
  },
  {
    number: '02',
    title: 'Design and Proposal',
    description:
      'Our team prepares a detailed project plan with material specifications and cost breakdown.',
  },
  {
    number: '03',
    title: 'Board or Stakeholder Review',
    description:
      'For HOA projects, we present the proposal to your board and handle revisions.',
  },
  {
    number: '04',
    title: 'Build',
    description:
      'Our crew executes the project on schedule with minimal disruption to residents and tenants.',
  },
]

const faqs = [
  {
    question: 'How long does a typical special project take?',
    answer:
      'Timelines depend on scope. A flower bed installation can be completed in a few days. Entry monuments and larger hardscape projects typically take two to four weeks from approval to completion.',
  },
  {
    question: 'Can you work within an HOA\'s budget approval process?',
    answer:
      'Absolutely. We regularly present proposals to HOA boards and can structure projects in phases to align with your budget cycle.',
  },
  {
    question: 'Do you provide design renderings?',
    answer:
      'For larger projects, we provide visual mockups and material samples so you can see the final product before we begin.',
  },
  {
    question: 'Do you handle permitting?',
    answer:
      'Yes. If your project requires city permits or HOA architectural review, we manage the application process.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Landscape Design and Construction',
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
      'Custom landscape projects for HOA communities and commercial properties in San Antonio, including entry monuments, flower bed installations, seasonal color, and hardscape features.',
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

export default function SpecialProjectsPage() {
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
            <span className="text-white">Special Projects</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Special Projects
          </h1>
          <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl">
            Entry monuments, flower beds, seasonal color, and custom landscape features
            that set your property apart.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight">
              Landscape Features That Make an Impression
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Beyond routine maintenance, your property&apos;s landscape tells a story.
              GreatView Landscapes designs and builds custom landscape features that create
              strong first impressions and long-term value. We work with HOA boards and
              property managers to plan, budget, and execute projects from concept through
              completion.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Entry monuments define a community. Flower beds set the tone for an entire
              property. Seasonal color keeps things fresh. We handle all of it, and we
              handle it well.
            </p>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="section-padding bg-brand-cream">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-10">
            What We Build
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectTypes.map((item) => (
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
            Have a Project in Mind?
          </h2>
          <p className="mt-4 text-emerald-100/80 text-lg max-w-2xl mx-auto">
            From entry monuments to seasonal color programs, we are ready to bring your
            vision to life. Let us know what you are working on.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-brand-gold px-8 py-3.5 text-sm font-semibold text-brand-navy shadow-lg hover:bg-brand-gold-light transition-colors duration-200"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
