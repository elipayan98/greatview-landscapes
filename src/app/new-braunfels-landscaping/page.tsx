import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Landscaping in New Braunfels, TX | GreatView Landscapes',
  description:
    'Commercial landscaping services for HOA communities and commercial properties in New Braunfels, TX. New construction landscapes, ongoing maintenance, and irrigation services in Comal County.',
}

const services = [
  {
    title: 'Landscaping Contracts',
    href: '/landscaping',
    description:
      'Reliable grounds maintenance for New Braunfels communities and commercial properties. From newly established neighborhoods to mature developments, we keep your property maintained year-round.',
    items: [
      'Weekly mowing and edging',
      'Shrub and hedge trimming',
      'New planting establishment care',
      'Weed control and pre-emergent treatments',
    ],
  },
  {
    title: 'Irrigation Services',
    href: '/irrigation',
    description:
      'Irrigation system installation and management for new and existing properties in New Braunfels. Smart controllers, efficient zone design, and ongoing seasonal adjustments.',
    items: [
      'New system design and installation',
      'Smart controller programming',
      'Leak detection and line repair',
      'Seasonal startup and winterization',
    ],
  },
  {
    title: 'Special Projects',
    href: '/special-projects',
    description:
      'Custom landscape features for New Braunfels HOA communities. Entry monuments, amenity center landscaping, and streetscape enhancements for new and established neighborhoods.',
    items: [
      'Entry monument construction',
      'Amenity center landscaping',
      'Seasonal color installations',
      'Erosion control and drainage',
    ],
  },
]

const faqs = [
  {
    question: 'Do you handle landscaping for newly built HOA communities?',
    answer:
      'Yes. We work with builders, developers, and newly formed HOA boards to establish landscape programs from the ground up. This includes initial planting plans, irrigation system installation, and the transition from builder-grade landscaping to a long-term maintenance contract. We understand the specific needs of new construction landscapes, including soil amendment, establishment watering schedules, and warranty plant replacement.',
  },
  {
    question: 'How do you help new HOA communities set up a landscape maintenance program?',
    answer:
      'We start with a full property assessment and work directly with the HOA board or management company to define scope, budget, and service frequency. For new communities still in the builder transition phase, we coordinate with the developer to ensure a smooth handoff. We also help boards understand what to budget for seasonal work, irrigation repairs, and common area enhancements.',
  },
  {
    question: 'What makes landscaping in New Braunfels different from San Antonio?',
    answer:
      'New Braunfels sits in the heart of the Hill Country, where soil is generally rockier and shallower than in San Antonio. Many properties are built on limestone substrate with minimal topsoil, which affects plant selection, drainage, and irrigation design. The city also has its own water utility (NBU) with separate watering restrictions from SAWS. Our team is familiar with local conditions and regulations specific to Comal County.',
  },
  {
    question: 'Can you work with properties that are still under construction?',
    answer:
      'Yes. We regularly coordinate with builders and general contractors to phase landscape installation around construction schedules. We can install common area landscaping, irrigation systems, and entry features while residential construction is still underway in other phases of the development.',
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
      name: 'New Braunfels',
      containedInPlace: {
        '@type': 'State',
        name: 'Texas',
      },
    },
    description:
      'Commercial landscaping services for HOA communities and commercial properties in New Braunfels, TX. Maintenance contracts, irrigation services, and special projects in Comal County.',
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

export default function NewBraunfelsLandscapingPage() {
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
            <span className="text-white">New Braunfels Landscaping</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Commercial Landscaping in New Braunfels, TX
          </h1>
          <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl">
            Grounds maintenance, irrigation, and landscape construction for the
            fastest-growing city in the San Antonio metro.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight">
              Keeping Up With New Braunfels&apos; Growth
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              New Braunfels has consistently ranked among the fastest-growing cities in Texas.
              Dozens of new master-planned communities have broken ground in the last several
              years, and with them comes a growing need for professional landscape services.
              GreatView Landscapes works with HOA boards, property managers, and commercial
              developers across Comal County to establish and maintain high-quality landscapes
              from day one.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Many of the properties we serve in New Braunfels are brand-new communities
              transitioning from builder control to HOA management. This transition period is
              critical. Landscapes installed during construction often need immediate attention:
              soil amendment, irrigation adjustments, and replacement of plant material that
              did not survive the establishment period. We specialize in taking over these
              properties and building them into mature, well-maintained communities.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              For established commercial properties and retail centers along the I-35 corridor,
              we provide consistent weekly maintenance and seasonal enhancements that keep
              storefronts and office parks looking professional year-round.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-brand-cream">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-10">
            Our Services in New Braunfels
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
              Local Expertise: Hill Country Terrain and Comal County Conditions
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              New Braunfels is located squarely in the Texas Hill Country, and the terrain
              reflects it. Properties here sit on rocky, limestone-based soil with limited
              topsoil depth. This creates challenges for planting, irrigation, and drainage
              that do not exist in flatter areas to the south and east. Trenching for
              irrigation lines often requires specialized equipment, and plant selections
              must account for shallow root zones and alkaline soil chemistry.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Water service in New Braunfels is managed by New Braunfels Utilities (NBU),
              which enforces its own watering schedule separate from SAWS in San Antonio.
              Our team stays current on NBU restrictions and programs irrigation systems
              accordingly. We also work with the Edwards Aquifer Authority regulations that
              affect water availability across the region.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The rapid pace of construction in New Braunfels means that many landscapes
              are young and still establishing. We understand the difference between
              maintaining a mature property and nurturing a new one, and we adjust our
              approach accordingly. New plantings need more frequent irrigation, closer
              monitoring for stress, and targeted fertilization schedules to develop strong
              root systems before their first full summer.
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
            New Braunfels Property? Let&apos;s Talk.
          </h2>
          <p className="mt-4 text-emerald-100/80 text-lg max-w-2xl mx-auto">
            Whether your community is brand new or well established, we will put together
            a maintenance plan that fits your property and your budget.
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
