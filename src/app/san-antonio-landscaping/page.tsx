import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Landscaping in San Antonio, TX | GreatView Landscapes',
  description:
    'Commercial landscaping services for HOA communities and commercial properties in San Antonio, TX. SAWS-compliant water management, year-round maintenance, and irrigation services across Bexar County.',
}

const services = [
  {
    title: 'Landscaping Contracts',
    href: '/landscaping',
    description:
      'Year-round grounds maintenance built for San Antonio properties. Weekly mowing, seasonal cleanups, and proactive care that keeps your community looking sharp through triple-digit summers.',
    items: [
      'Weekly mowing and edging',
      'Shrub and hedge trimming',
      'Seasonal flower bed rotations',
      'Weed control and pre-emergent applications',
    ],
  },
  {
    title: 'Irrigation Services',
    href: '/irrigation',
    description:
      'Water-efficient irrigation management designed around SAWS restrictions. System repairs, smart controller upgrades, and seasonal adjustments to keep landscapes healthy without wasting water.',
    items: [
      'Sprinkler repair and optimization',
      'Smart controller installation',
      'Backflow testing and certification',
      'Water audits and SAWS compliance',
    ],
  },
  {
    title: 'Special Projects',
    href: '/special-projects',
    description:
      'Custom landscape enhancements for San Antonio HOA communities and commercial properties. Entry monuments, seasonal color programs, and renovation projects that elevate curb appeal.',
    items: [
      'Entry monument design',
      'Seasonal color programs',
      'Landscape renovation',
      'Hardscape installation',
    ],
  },
]

const faqs = [
  {
    question: 'How do you handle SAWS watering restrictions for commercial properties?',
    answer:
      'We design irrigation schedules and plant selections around current SAWS stage restrictions. Our smart controllers automatically adjust run times based on watering day assignments, and we select drought-tolerant materials that perform well even under Stage 2 or Stage 3 limits. We also handle all required backflow testing and submit documentation to SAWS directly.',
  },
  {
    question: 'What do you do to protect landscapes during San Antonio summers?',
    answer:
      'San Antonio summers regularly exceed 100 degrees, and that kind of heat stresses turf, shrubs, and irrigation systems. We adjust mowing heights to reduce turf stress, shift service times to early morning, increase irrigation monitoring, and apply targeted treatments to prevent heat-related disease. Our summer protocols are built specifically for Bexar County conditions.',
  },
  {
    question: 'Do you work with large master-planned HOA communities?',
    answer:
      'Yes. A significant portion of our work is with master-planned communities across San Antonio, including neighborhoods with multiple phases, amenity centers, and extensive common area acreage. We coordinate with HOA boards and management companies to maintain consistent quality across the entire property.',
  },
  {
    question: 'What areas of San Antonio do you serve?',
    answer:
      'We serve properties throughout the San Antonio metro, including the far north side, northwest, northeast, and surrounding suburbs. Our crews are based locally, so response times are fast and we are on-site consistently throughout the week.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Commercial Landscaping',
    provider: {
      '@type': 'LocalBusiness',
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
    description:
      'Full-service commercial landscaping for HOA communities and commercial properties in San Antonio, TX. Landscaping maintenance, irrigation services, and special projects.',
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

export default function SanAntonioLandscapingPage() {
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
            <span className="text-white">San Antonio Landscaping</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Commercial Landscaping in San Antonio, TX
          </h1>
          <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl">
            Full-service grounds maintenance, irrigation management, and landscape
            enhancements for HOA communities and commercial properties across Bexar County.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight">
              San Antonio&apos;s Commercial Landscape Partner
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              San Antonio is one of the fastest-growing metros in the country, and that growth
              brings new HOA communities, commercial developments, and property management demands
              every year. GreatView Landscapes has served the San Antonio market since 2022, providing
              professional grounds maintenance and irrigation services to properties across the city.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The San Antonio climate presents a unique set of challenges. Summers are long and
              intense, with extended stretches above 100 degrees. Soil conditions vary widely
              across Bexar County, from limestone-heavy caliche on the north side to black clay
              in the south and east. Water is a limited resource, and SAWS enforces some of the
              strictest municipal watering restrictions in the state. Every landscape plan we
              build accounts for these realities.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Whether you manage a 500-home master-planned community, a retail center, or a
              multi-building office park, GreatView Landscapes delivers consistent, reliable
              service with transparent reporting and responsive communication.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-brand-cream">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-10">
            Our Services in San Antonio
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-lg border border-gray-100 p-8 flex flex-col">
                <h3 className="text-lg font-semibold text-brand-navy">{service.title}</h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{service.description}</p>
                <ul className="mt-5 space-y-3 flex-1">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="mt-6 text-sm font-semibold text-brand-green hover:text-brand-green-dark transition-colors"
                >
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight">
              Local Expertise: Bexar County Conditions
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              San Antonio sits at the southern edge of the Texas Hill Country, where the
              Edwards Plateau meets the Gulf Coastal Plains. This transition zone creates
              highly variable soil conditions across the metro. Properties on the north side
              often sit on shallow caliche over limestone, which limits root depth and drainage.
              Properties further south and east deal with heavy black clay that expands and
              contracts with moisture levels, creating challenges for both turf and hardscape.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Water management is a central concern for every commercial landscape in
              San Antonio. SAWS enforces year-round watering rules, and during drought
              conditions, restrictions can escalate quickly. Our irrigation team designs
              systems and schedules that maximize plant health while staying within compliance.
              We prioritize drought-tolerant plant material, efficient sprinkler head placement,
              and smart controller technology to reduce consumption without sacrificing appearance.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              San Antonio also has specific tree ordinances, particularly regarding heritage
              trees and protected species. Our team is familiar with city code requirements and
              can advise on permitting when tree work or landscape renovation is needed.
            </p>
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
            Ready to Improve Your San Antonio Property?
          </h2>
          <p className="mt-4 text-emerald-100/80 text-lg max-w-2xl mx-auto">
            Contact us for a property assessment and custom maintenance proposal.
            We will walk your site, identify priorities, and deliver a clear scope
            of work with transparent pricing.
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
