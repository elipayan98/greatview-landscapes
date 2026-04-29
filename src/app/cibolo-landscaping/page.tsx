import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Landscaping in Cibolo, TX | GreatView Landscapes',
  description:
    'Commercial landscaping services for HOA communities in Cibolo, TX. New community landscape establishment, ongoing maintenance, and irrigation management for residential developments in Guadalupe County.',
}

const services = [
  {
    title: 'Landscaping Contracts',
    href: '/landscaping',
    description:
      'Year-round grounds maintenance designed for newer Cibolo communities. Establishment care for young landscapes, consistent weekly service, and proactive seasonal adjustments that keep HOA common areas looking their best.',
    items: [
      'Weekly mowing and edging',
      'New planting establishment care',
      'Common area bed maintenance',
      'Seasonal weed control programs',
    ],
  },
  {
    title: 'Irrigation Services',
    href: '/irrigation',
    description:
      'Irrigation system management for Cibolo developments. From programming new systems installed by builders to repairing and upgrading systems as communities mature, we keep water delivery efficient and reliable.',
    items: [
      'New system programming and optimization',
      'Sprinkler head adjustments and repairs',
      'Controller upgrades and smart technology',
      'Seasonal startup and winterization',
    ],
  },
  {
    title: 'Special Projects',
    href: '/special-projects',
    description:
      'Landscape enhancements for Cibolo HOA communities. Entry features, amenity center landscaping, playground surrounds, and seasonal color programs that add value to family-focused developments.',
    items: [
      'Entry monument landscaping',
      'Amenity and pool area planting',
      'Playground and trail landscaping',
      'Seasonal color installations',
    ],
  },
]

const faqs = [
  {
    question: 'How do you help a new HOA community establish its landscape program?',
    answer:
      'We work with newly formed HOA boards and management companies to build a complete landscape program from scratch. This starts with a property walk to assess the condition of builder-installed landscaping, identify areas that need immediate attention, and develop a realistic annual budget. We then create a detailed scope of work that covers weekly maintenance, seasonal services, irrigation management, and a capital improvement plan for future enhancements. For communities still under builder control, we coordinate the transition timeline so there is no gap in service.',
  },
  {
    question: 'What seasonal maintenance do new landscapes in Cibolo need?',
    answer:
      'New landscapes require more attention than established ones, especially in their first two years. In spring, we focus on fertilization, pre-emergent weed control, and irrigation system activation. Summer means increased mowing frequency, close irrigation monitoring to prevent stress on young plants, and targeted pest and disease treatment. Fall includes aeration, overseeding where appropriate, and preparing beds for winter. Winter is the time for dormant pruning, irrigation winterization, and planning any spring installations or renovations.',
  },
  {
    question: 'Do you work with property management companies in Cibolo?',
    answer:
      'Yes. We work directly with several property management companies that oversee HOA communities in Cibolo and the surrounding area. We provide monthly service reports, attend board meetings when requested, and coordinate closely with community managers on scheduling, scope changes, and budget planning. Our reporting process is designed to give management companies the documentation they need without creating extra work.',
  },
  {
    question: 'How quickly can you start service on a new Cibolo property?',
    answer:
      'For most properties, we can begin service within two weeks of contract signing. We start with a site assessment and irrigation audit, assign a dedicated crew lead, and schedule our first service visit. For larger communities or properties requiring immediate renovation work, we can often mobilize faster. Contact us with details about your property and we will provide a specific timeline.',
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
      name: 'Cibolo',
      containedInPlace: {
        '@type': 'State',
        name: 'Texas',
      },
    },
    description:
      'Commercial landscaping for HOA communities in Cibolo, TX. New community establishment, ongoing maintenance, and irrigation services for residential developments in Guadalupe County.',
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

export default function CiboloLandscapingPage() {
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
            <span className="text-white">Cibolo Landscaping</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Commercial Landscaping in Cibolo, TX
          </h1>
          <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl">
            Professional landscape services for Cibolo&apos;s growing roster of HOA
            communities and family-oriented developments.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight">
              Growing Communities Deserve Reliable Landscape Partners
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Cibolo has transformed over the past decade from a small town into one of the
              most active residential development areas northeast of San Antonio. New
              master-planned communities continue to open, each with its own amenity centers,
              trail systems, common areas, and landscape standards. These communities need a
              landscape partner who understands the specific demands of new development and
              can deliver consistent, professional results as neighborhoods fill in and mature.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              GreatView Landscapes specializes in working with newer HOA communities during the
              critical transition from builder to homeowner association control. Builder-grade
              landscaping often needs immediate attention: irrigation systems that were never
              properly programmed, turf that was installed without adequate soil preparation,
              and plant material that may not be suited to the site conditions. We identify
              these issues early and address them before they become costly problems.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our approach in Cibolo is built around long-term partnership. We work closely
              with HOA boards and management companies to develop realistic budgets, plan
              seasonal enhancements, and maintain the community standards that homeowners
              expect. From the first mowing visit to multi-year landscape improvement plans,
              we are committed to helping Cibolo communities look and perform their best.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-brand-cream">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-10">
            Our Services in Cibolo
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
              Local Expertise: New Development in Guadalupe County
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Cibolo sits in Guadalupe County on the eastern edge of the San Antonio metro,
              where the terrain is generally flatter and the soil is a mix of dark clay and
              loam. Compared to the rocky Hill Country to the west, this soil is more
              forgiving for planting and irrigation installation, but it brings its own
              challenges. Heavy clay expands when wet and contracts when dry, which can
              shift hardscape, crack foundations, and stress root systems. Our maintenance
              programs account for these soil dynamics with appropriate watering schedules
              and plant selections.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Because most Cibolo properties are relatively new, the landscapes are young.
              Young landscapes have different needs than mature ones. Turf may still be
              developing a deep root system, trees need formative pruning to establish strong
              structure, and shrubs need time to fill in. Rushing the process with excessive
              fertilization or overwatering creates more problems than it solves. Our team
              takes a measured approach to establishment care, giving young landscapes what
              they need to develop properly.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Cibolo communities also tend to be family-oriented, with amenity centers,
              playgrounds, and trail systems that require specialized maintenance. We
              maintain these high-traffic areas with safety and appearance in mind, including
              proper sight-line maintenance around play areas and regular attention to
              mulch levels and ground cover in common spaces.
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
            Starting a Landscape Program in Cibolo?
          </h2>
          <p className="mt-4 text-emerald-100/80 text-lg max-w-2xl mx-auto">
            Whether your community is newly built or transitioning landscape providers,
            we will deliver a clear proposal with a realistic scope and budget.
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
