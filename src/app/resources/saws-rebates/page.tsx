import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SAWS Rebate Programs',
  description:
    'Learn about SAWS WaterSaver rebate programs for commercial properties. GreatView Landscapes helps you qualify for rebates on smart controllers, drip irrigation, rain sensors, and more.',
  keywords: [
    'SAWS rebates',
    'SAWS WaterSaver rebates',
    'San Antonio water rebates',
    'smart irrigation rebate',
    'drip irrigation rebate San Antonio',
    'SAWS commercial rebate program',
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SAWS Rebate Application Assistance',
  description:
    'GreatView Landscapes helps commercial properties and HOA communities qualify for and receive SAWS WaterSaver rebates for water-efficient landscape and irrigation improvements.',
  provider: {
    '@type': 'Organization',
    name: 'GreatView Landscapes',
    url: 'https://greatviewlandscapes.com',
  },
  areaServed: {
    '@type': 'City',
    name: 'San Antonio',
    containedInPlace: {
      '@type': 'State',
      name: 'Texas',
    },
  },
}

const eligibleImprovements = [
  'WaterSense-labeled smart irrigation controllers',
  'Drip irrigation conversions (spray-to-drip)',
  'Rain and freeze sensors',
  'High-efficiency rotary nozzles',
  'Pressure-regulated spray heads',
  'Matched precipitation rate nozzles',
  'Check valve spray bodies to prevent low-head drainage',
  'Irrigation system tune-ups and audits',
]

const faqs = [
  {
    question: 'How much can my property receive in SAWS rebates?',
    answer:
      'Rebate amounts vary by improvement type and property classification. Commercial and HOA accounts typically qualify for higher rebate amounts than residential accounts. Smart controller rebates, for example, can cover a significant portion of the equipment cost. Specific rebate amounts are set by SAWS and are subject to funding availability each year.',
  },
  {
    question: 'Does the work need to be completed before applying?',
    answer:
      'Most SAWS rebate programs require pre-approval before work begins. This means you submit an application describing the planned improvements, receive approval from SAWS, then complete the installation and submit documentation for reimbursement. We handle the application timeline so that your project is not delayed.',
  },
  {
    question: 'How long does the rebate process take?',
    answer:
      'From application to reimbursement, the process typically takes four to eight weeks. The pre-approval step usually takes one to two weeks. After installation is complete and documentation is submitted, SAWS processes the rebate within two to six weeks. We track the status throughout and keep you informed.',
  },
]

export default function SAWSRebatesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-green-dark to-brand-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container-default py-20 md:py-28">
          <nav className="text-sm text-emerald-200/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Resources</span>
            <span className="mx-2">/</span>
            <span className="text-white">SAWS Rebates</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            SAWS Rebate Programs
          </h1>
          <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl">
            San Antonio Water System offers rebates for water-efficient landscape improvements.
            We can help you qualify.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight">
              WaterSaver Rebate Programs
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              SAWS operates WaterSaver rebate programs designed to encourage property owners to
              invest in water-efficient irrigation and landscape improvements. These programs
              offset the cost of upgrading outdated irrigation equipment, converting spray
              systems to drip irrigation, and installing smart controllers that reduce water
              waste.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              For commercial properties and HOA communities, these rebates represent a meaningful
              reduction in project costs. Many of the improvements that qualify for rebates also
              reduce long-term water bills, so the financial benefit extends well beyond the
              initial reimbursement.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Rebate availability is subject to annual funding from SAWS. Programs may change or
              close when funding is exhausted, so properties that plan ahead have a better chance
              of securing available rebates.
            </p>
          </div>
        </div>
      </section>

      {/* Eligible Improvements */}
      <section className="section-padding bg-brand-cream">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-8">
            Eligible Improvements
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
            The following irrigation and landscape improvements are commonly eligible for SAWS
            WaterSaver rebates. Specific eligibility depends on your property type, current
            system configuration, and available program funding.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            {eligibleImprovements.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-8">
              How We Help
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Navigating the SAWS rebate process can be time-consuming, especially for property
              managers handling multiple properties. GreatView Landscapes manages the full process so
              you can focus on your other responsibilities.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy">System Assessment</h3>
                  <p className="mt-1 text-gray-600 text-sm leading-relaxed">
                    We evaluate your current irrigation system and identify which upgrades will
                    qualify for SAWS rebates while delivering the greatest water savings for your
                    property.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy">Application and Pre-Approval</h3>
                  <p className="mt-1 text-gray-600 text-sm leading-relaxed">
                    We prepare and submit the rebate application to SAWS on your behalf, including
                    all required documentation and system specifications. Work begins after
                    pre-approval is confirmed.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy">Installation</h3>
                  <p className="mt-1 text-gray-600 text-sm leading-relaxed">
                    Our team completes the approved improvements according to SAWS specifications
                    and manufacturer requirements. All work is documented with photos and
                    installation records.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy">Rebate Processing</h3>
                  <p className="mt-1 text-gray-600 text-sm leading-relaxed">
                    After installation, we submit the completion documentation to SAWS and track
                    the rebate through to reimbursement. You receive status updates at each step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-brand-cream">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-10">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-semibold text-brand-navy">
                  {faq.question}
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
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
            Find Out If Your Property Qualifies
          </h2>
          <p className="mt-4 text-emerald-100/80 text-lg max-w-2xl mx-auto">
            We can assess your irrigation system, identify eligible improvements, and handle
            the SAWS rebate application from start to finish.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-brand-gold px-8 py-3.5 text-sm font-semibold text-brand-navy shadow-lg hover:bg-brand-gold-light transition-colors duration-200"
          >
            Contact Us About Rebates
          </Link>
        </div>
      </section>
    </>
  )
}
