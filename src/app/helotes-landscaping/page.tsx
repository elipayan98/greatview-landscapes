import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Landscaping in Helotes, TX | GreatView Landscapes',
  description:
    'Commercial landscaping services for HOA communities and commercial properties in Helotes, TX. Hill Country terrain expertise, wildlife-resistant landscaping, and year-round maintenance in northwest San Antonio.',
}

const services = [
  {
    title: 'Landscaping Contracts',
    href: '/landscaping',
    description:
      'Year-round grounds maintenance for Helotes communities and commercial properties. Service plans designed for the unique mix of Hill Country terrain, established neighborhoods, and newer suburban developments on the northwest side.',
    items: [
      'Weekly mowing and edging',
      'Native and adapted plant maintenance',
      'Tree and brush management',
      'Seasonal cleanup and debris removal',
    ],
  },
  {
    title: 'Irrigation Services',
    href: '/irrigation',
    description:
      'Irrigation management built for Helotes terrain and water conditions. Efficient system design for rocky soil, well water compatibility, and smart controllers that respond to Hill Country weather patterns.',
    items: [
      'System design for rocky terrain',
      'Well water and municipal system service',
      'Smart controller installation',
      'Drip irrigation for slopes and beds',
    ],
  },
  {
    title: 'Special Projects',
    href: '/special-projects',
    description:
      'Custom landscape projects that work with the natural Helotes environment. Retaining walls, erosion control, native plantings, and entry features that complement the Hill Country setting.',
    items: [
      'Retaining wall construction',
      'Erosion control solutions',
      'Native landscape installation',
      'Entry monument and signage landscaping',
    ],
  },
]

const faqs = [
  {
    question: 'How do you handle the challenging Hill Country terrain in Helotes?',
    answer:
      'Helotes sits at the edge of the Texas Hill Country, where terrain can shift from relatively flat to steep and rocky within the same property. Our crews are experienced with these conditions. For slopes, we use erosion control techniques including terracing, retaining walls, and ground cover plantings that stabilize soil. Irrigation installation in rocky terrain requires specialized trenching equipment, and we design systems with zone layouts that account for elevation changes and varying sun exposure across the property.',
  },
  {
    question: 'Can you design landscapes that resist deer and wildlife damage?',
    answer:
      'Yes. Wildlife pressure is a real concern for Helotes properties, particularly deer browsing. We select plant material with deer resistance as a primary consideration, favoring species like cenizo, mountain laurel, rosemary, and lantana that deer tend to avoid. For new installations in high-pressure areas, we can install temporary protective measures until plants are established. We also avoid species that are known deer favorites, which helps reduce long-term maintenance costs and replacement needs.',
  },
  {
    question: 'Do you serve both the older and newer parts of Helotes?',
    answer:
      'Yes. Helotes has a distinct mix of established ranch-style properties, older subdivisions, and newer master-planned communities along the 1604 corridor. Each type of property has different needs. Established properties may need renovation, mature tree management, and irrigation updates. Newer developments need establishment care, builder warranty coordination, and initial maintenance program setup. We tailor our approach based on the specific property, not a one-size-fits-all template.',
  },
  {
    question: 'What water considerations should Helotes property managers know about?',
    answer:
      'Water service in Helotes varies by location. Some properties are served by SAWS, others by smaller water utilities, and some rely on private wells. Each situation has different cost structures and restrictions. Properties on well water need irrigation systems designed for lower pressure and flow rates, and plant selections should account for the mineral content common in Hill Country well water. We evaluate the water source and local restrictions for each property and build our irrigation plans accordingly.',
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
      name: 'Helotes',
      containedInPlace: {
        '@type': 'State',
        name: 'Texas',
      },
    },
    description:
      'Commercial landscaping for HOA communities and commercial properties in Helotes, TX. Hill Country terrain expertise, wildlife-resistant landscaping, and year-round grounds maintenance.',
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

export default function HelotesLandscapingPage() {
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
            <span className="text-white">Helotes Landscaping</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Commercial Landscaping in Helotes, TX
          </h1>
          <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl">
            Grounds maintenance and landscape services for communities and commercial
            properties where the Hill Country meets northwest San Antonio.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight">
              Landscaping at the Edge of the Hill Country
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Helotes sits at the northwest boundary of the San Antonio metro, where suburban
              development meets the open Hill Country. The landscape here is different from
              the rest of the metro area. Properties are often built on sloped terrain with
              rocky soil, mature oak and cedar canopy, and varying degrees of sun exposure.
              Managing landscapes in this environment takes local knowledge and the right
              approach. GreatView Landscapes has the experience to deliver both.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The Helotes area includes a distinctive mix of property types. Long-established
              neighborhoods along Old Helotes Road and Scenic Loop have mature landscapes
              that need careful management and periodic renovation. Newer communities along
              the 1604 corridor and Leslie Road are still establishing their landscape
              identity and need the kind of attentive care that helps young plantings
              develop into lasting, attractive grounds.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Commercial properties in Helotes, including retail centers, restaurants, and
              professional offices, also benefit from landscape maintenance that respects
              the community&apos;s character. Helotes has a distinct identity, and the best
              commercial landscapes here blend professional presentation with the natural
              Hill Country environment that residents value.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-brand-cream">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-10">
            Our Services in Helotes
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
              Local Expertise: Hill Country Terrain and Wildlife
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              The Helotes area presents terrain challenges that most suburban landscape
              companies are not equipped to handle. Properties frequently include significant
              elevation changes, exposed limestone, shallow root zones, and dense cedar and
              live oak canopy. These conditions affect everything from mowing patterns to
              irrigation design to plant selection. Our team evaluates each property&apos;s
              terrain individually and builds service plans that work with the natural
              landscape rather than fighting it.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Wildlife interaction is a daily reality in Helotes. Deer, rabbits, and feral
              hogs can cause significant damage to landscapes, particularly to new plantings
              and seasonal color beds. We factor wildlife pressure into every planting plan,
              selecting species with natural resistance to browsing and recommending
              protective measures where needed. For properties adjacent to undeveloped land
              or greenbelt areas, this consideration is especially important.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Cedar management is another concern specific to this area. Ashe juniper (commonly
              called mountain cedar) is aggressive in the Hill Country and can quickly encroach
              on maintained areas if not managed proactively. We include cedar and brush
              management in our maintenance programs for properties where encroachment is a
              factor, keeping property lines and common areas clear without disturbing the
              natural tree cover that gives Helotes its character.
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
            Let&apos;s Discuss Your Helotes Property
          </h2>
          <p className="mt-4 text-emerald-100/80 text-lg max-w-2xl mx-auto">
            Hill Country properties need a landscape partner who understands the terrain.
            Contact us for a site visit and a maintenance proposal built for your
            specific conditions.
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
