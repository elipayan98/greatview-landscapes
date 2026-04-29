import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Landscaping in Boerne, TX | GreatView Landscapes',
  description:
    'Commercial landscaping services for HOA communities and commercial properties in Boerne, TX. Native plant landscaping, water conservation, and premium grounds maintenance in Kendall County.',
}

const services = [
  {
    title: 'Landscaping Contracts',
    href: '/landscaping',
    description:
      'Premium grounds maintenance for Boerne communities and commercial properties. Tailored service plans that respect the natural Hill Country aesthetic while maintaining a polished, professional appearance.',
    items: [
      'Weekly mowing and edging',
      'Native plant bed maintenance',
      'Tree and ornamental pruning',
      'Seasonal cleanup and leaf removal',
    ],
  },
  {
    title: 'Irrigation Services',
    href: '/irrigation',
    description:
      'Water-conscious irrigation management for Kendall County properties. Efficient system design, drip irrigation for native beds, and smart controllers that minimize water use on rocky Hill Country terrain.',
    items: [
      'Drip irrigation for native beds',
      'Smart controller installation',
      'System audits and efficiency upgrades',
      'Seasonal adjustments and winterization',
    ],
  },
  {
    title: 'Special Projects',
    href: '/special-projects',
    description:
      'Custom landscape features that complement the Hill Country setting. Natural stone work, native plantings, and entry features designed to blend with the Boerne aesthetic.',
    items: [
      'Native landscape design',
      'Natural stone features',
      'Entry monument construction',
      'Erosion control on slopes',
    ],
  },
]

const faqs = [
  {
    question: 'Should our HOA use native plants or traditional landscaping in Boerne?',
    answer:
      'For most Boerne properties, a blend works best. Native plants like Texas sage, flame acanthus, and Lindheimer muhly thrive in the rocky, alkaline soils of Kendall County with minimal supplemental water. They also align with the Hill Country character that residents expect. We recommend using natives in common areas, medians, and slopes, while incorporating select adapted ornamentals in high-visibility areas like entry monuments and amenity centers where more color variety is desired.',
  },
  {
    question: 'How do you approach water conservation for Boerne commercial properties?',
    answer:
      'Water conservation is central to every landscape plan we build in Boerne. We start with plant selections that require less irrigation, then design efficient watering zones with drip irrigation for beds and properly spaced rotary heads for turf areas. Smart controllers with weather-based adjustments reduce waste automatically. For properties on well water or with limited municipal allocation, we can design landscapes that function with minimal or no supplemental irrigation once established.',
  },
  {
    question: 'Can you work with the rocky terrain common in Boerne developments?',
    answer:
      'Yes. Rocky terrain is standard in Kendall County, and our crews are equipped and experienced for it. Irrigation trenching in rock requires specialized equipment, and planting in shallow soil over limestone calls for specific techniques including soil amendment, raised bed construction, and careful species selection. We account for these conditions in every proposal so there are no surprises during installation.',
  },
  {
    question: 'Do you maintain properties in the Boerne area year-round?',
    answer:
      'Yes. While service frequency adjusts seasonally, we maintain properties in Boerne throughout the year. Winter months include dormant pruning, leaf removal, pre-emergent weed applications, and irrigation winterization. Spring through fall is full-service maintenance with weekly mowing, irrigation monitoring, and seasonal color rotations where applicable.',
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
      name: 'Boerne',
      containedInPlace: {
        '@type': 'State',
        name: 'Texas',
      },
    },
    description:
      'Premium commercial landscaping for HOA communities and commercial properties in Boerne, TX. Native plant landscaping, water conservation, and year-round grounds maintenance in Kendall County.',
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

export default function BoerneLandscapingPage() {
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
            <span className="text-white">Boerne Landscaping</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Commercial Landscaping in Boerne, TX
          </h1>
          <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl">
            Native-focused landscaping, water-efficient irrigation, and premium
            grounds maintenance for Kendall County&apos;s upscale communities.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight">
              Landscape Services for the Hill Country
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Boerne is one of the most desirable communities in the greater San Antonio
              area. Known for its Hill Country charm, upscale neighborhoods, and strong
              sense of place, Boerne attracts homeowners and businesses that expect a
              higher standard. The landscape should reflect that. GreatView Landscapes provides
              commercial grounds maintenance and landscape services tailored to the specific
              character and conditions of Kendall County.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Properties in Boerne benefit from a landscape approach that works with the
              natural environment rather than against it. The Hill Country terrain, native
              vegetation, and limited water resources all point toward designs that emphasize
              native and adapted plant material, efficient irrigation, and sustainable
              maintenance practices. Our team understands these priorities and builds service
              plans around them.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We serve HOA communities, commercial office properties, retail centers, and
              mixed-use developments throughout Boerne and the surrounding Kendall County area.
              Every property receives a customized maintenance plan based on its unique soil
              conditions, sun exposure, and community standards.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-brand-cream">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-10">
            Our Services in Boerne
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
              Local Expertise: Kendall County Landscape Conditions
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Kendall County sits at a higher elevation than San Antonio, with thinner soils,
              more exposed limestone, and steeper topography. These conditions significantly
              affect how landscapes perform and how maintenance should be approached. Turf
              areas in Boerne tend to be smaller and more targeted than in suburban San Antonio,
              with a greater emphasis on natural areas, rock features, and native plant beds.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Water availability is a defining factor for Boerne landscapes. Many properties
              rely on the Trinity Aquifer or are served by smaller water utilities with
              limited capacity. Conservation is not optional here. Our landscape designs
              prioritize species that perform well on natural rainfall once established,
              including Texas mountain laurel, agarito, blackfoot daisy, and native grasses
              like sideoats grama. For irrigated areas, we use high-efficiency drip systems
              and matched-precipitation rotary heads to deliver water precisely where it is
              needed.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Deer pressure is another consideration unique to Boerne and surrounding Hill
              Country properties. We select plant material with deer resistance in mind and
              can advise on protective measures for new installations until plants are
              established enough to tolerate browsing.
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
            Elevate Your Boerne Property
          </h2>
          <p className="mt-4 text-emerald-100/80 text-lg max-w-2xl mx-auto">
            Let us build a landscape maintenance plan that matches the quality your
            community expects. Contact us for a site visit and custom proposal.
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
