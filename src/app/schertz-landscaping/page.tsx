import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Landscaping in Schertz, TX | GreatView Landscapes',
  description:
    'Commercial landscaping services for HOA communities and commercial properties in Schertz, TX. Grounds maintenance, irrigation management, and landscape enhancements in Guadalupe County.',
}

const services = [
  {
    title: 'Landscaping Contracts',
    href: '/landscaping',
    description:
      'Dependable grounds maintenance for Schertz neighborhoods and commercial properties. Consistent weekly service, seasonal adjustments, and responsive communication with property managers and HOA boards.',
    items: [
      'Weekly mowing and edging',
      'Shrub and tree trimming',
      'Seasonal flower bed maintenance',
      'Leaf removal and post-storm cleanup',
    ],
  },
  {
    title: 'Irrigation Services',
    href: '/irrigation',
    description:
      'Full irrigation management for Schertz properties, from routine repairs to system overhauls. We service both newer systems in recent developments and aging infrastructure in established neighborhoods.',
    items: [
      'Sprinkler repair and head replacement',
      'Controller upgrades and programming',
      'Backflow testing and certification',
      'System evaluation and zone optimization',
    ],
  },
  {
    title: 'Special Projects',
    href: '/special-projects',
    description:
      'Landscape improvements for commercial properties and HOA common areas in Schertz. Renovation projects, new installations, and seasonal enhancements that improve curb appeal and property value.',
    items: [
      'Landscape renovation and redesign',
      'Seasonal color programs',
      'Mulch and bed refresh projects',
      'Commercial signage landscaping',
    ],
  },
]

const faqs = [
  {
    question: 'Do you provide landscape maintenance for commercial properties along I-35?',
    answer:
      'Yes. We maintain commercial properties throughout the Schertz I-35 corridor, including retail centers, office parks, medical facilities, and restaurant pads. Commercial properties along high-traffic corridors require consistent attention to maintain a professional appearance. We provide weekly maintenance, seasonal color rotations, and rapid-response cleanup after weather events to keep your frontage looking its best.',
  },
  {
    question: 'Can you renovate the landscaping on an older Schertz property?',
    answer:
      'Absolutely. Many established Schertz neighborhoods and commercial properties have landscaping that is 10 to 20 years old and showing its age. We handle full-scale renovations, including removal of overgrown or declining plant material, soil amendment, new plantings, mulch installation, and irrigation system updates. We work with property managers to phase larger projects across multiple budget cycles when needed.',
  },
  {
    question: 'How do you handle properties that span multiple counties?',
    answer:
      'Schertz is one of the few Texas cities that spans three counties: Guadalupe, Bexar, and Comal. This can mean different water utilities, different watering restrictions, and different municipal codes depending on exactly where a property sits. Our team is familiar with the regulations in all three jurisdictions and adjusts service plans accordingly. You do not need to manage those differences yourself.',
  },
  {
    question: 'What is your service area around Schertz?',
    answer:
      'We serve properties throughout Schertz and the surrounding area, including Selma, Live Oak, Universal City, and Converse. Our crews are in the northeast San Antonio metro regularly, so response times and scheduling are consistent.',
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
      name: 'Schertz',
      containedInPlace: {
        '@type': 'State',
        name: 'Texas',
      },
    },
    description:
      'Commercial landscaping for HOA communities and commercial properties in Schertz, TX. Maintenance contracts, irrigation services, and landscape improvements in Guadalupe County.',
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

export default function SchertzLandscapingPage() {
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
            <span className="text-white">Schertz Landscaping</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Commercial Landscaping in Schertz, TX
          </h1>
          <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl">
            Grounds maintenance and landscape services for established neighborhoods,
            new developments, and commercial properties across Guadalupe County.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight">
              A Growing City With Evolving Landscape Needs
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Schertz occupies a unique position in the San Antonio metro. Located northeast
              of the city along the I-35 corridor, it is home to a mix of well-established
              residential neighborhoods, newer HOA communities, and a growing commercial
              district. This diversity means that landscape needs vary significantly from
              one property to the next. GreatView Landscapes brings the flexibility and local
              knowledge to serve all of them.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Established Schertz neighborhoods often need renovation and refreshment.
              Mature trees may require pruning or removal, aging irrigation systems need
              repair or replacement, and outdated plantings may be ready for a redesign.
              Newer communities, on the other hand, need careful establishment care and
              consistent maintenance to protect the developer&apos;s investment and meet HOA
              standards from the start.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The commercial corridor along I-35 and FM 3009 continues to expand with new
              retail, medical, and office development. These properties demand consistent
              curb appeal, fast response times, and reliable crews that show up on schedule.
              That is exactly what we deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-brand-cream">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-10">
            Our Services in Schertz
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
              Local Expertise: Guadalupe County and the I-35 Corridor
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Schertz sits primarily in Guadalupe County, where the soil transitions from
              the rocky Hill Country terrain to the west to darker, heavier clay soils to
              the east. This transition zone means that properties just a few miles apart
              can have very different soil conditions, drainage patterns, and plant
              performance. Our team evaluates each property individually rather than
              applying a one-size-fits-all approach.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The I-35 corridor through Schertz has seen significant commercial development
              in recent years. Retail centers, medical offices, and mixed-use properties
              require landscape maintenance that reflects a professional image and handles
              high foot traffic. We design maintenance programs for these properties with
              an emphasis on clean lines, consistent turf appearance, and well-maintained
              entry areas that make a strong first impression.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Because Schertz spans three counties, water service and regulations can vary
              by location. Some properties are served by GVTC or other local utilities,
              while others fall under Schertz municipal water. Our team tracks the applicable
              watering restrictions for each property we maintain and adjusts irrigation
              schedules accordingly.
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
            Get a Proposal for Your Schertz Property
          </h2>
          <p className="mt-4 text-emerald-100/80 text-lg max-w-2xl mx-auto">
            From established neighborhoods to new commercial developments, we will
            build a maintenance plan that fits your property. Contact us to schedule
            a site assessment.
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
