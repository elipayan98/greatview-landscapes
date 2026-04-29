import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'GreatView Landscapes is a commercial landscaping company serving HOA communities and commercial properties in San Antonio, TX since 2022. Learn about our team, values, and service area.',
}

const values = [
  {
    title: 'Reliability',
    description:
      'We show up on schedule, every time. Our clients can count on consistent service without chasing us down.',
  },
  {
    title: 'Communication',
    description:
      'Every account has a dedicated point of contact. We send updates, respond to requests quickly, and keep you informed.',
  },
  {
    title: 'Quality',
    description:
      'We hold our crews to a clear standard. Regular quality inspections ensure your property looks sharp week after week.',
  },
  {
    title: 'Efficiency',
    description:
      'We use smart scheduling, efficient routing, and water-saving irrigation practices to deliver value without waste.',
  },
]

const serviceAreas = [
  'San Antonio',
  'New Braunfels',
  'Boerne',
  'Schertz',
  'Cibolo',
  'Helotes',
  'Converse',
  'Universal City',
  'Selma',
  'Garden Ridge',
  'Fair Oaks Ranch',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-green-dark to-brand-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container-default py-14 sm:py-20 md:py-28">
          <nav className="text-sm text-emerald-200/70 mb-4 sm:mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">About</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            About GreatView Landscapes
          </h1>
          <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl">
            Serving the San Antonio metro since 2022 with a focus on quality, consistency,
            and clear communication.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight">
              Our Story
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              GreatView Landscapes was founded in San Antonio in 2022 to fill a gap in the
              commercial landscaping market: reliable service with real communication. Too
              many property managers deal with missed schedules, unreturned calls, and
              inconsistent work. We built this company to be different.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our focus is on HOA communities and commercial properties that need a landscaping
              partner, not just a vendor. We provide full-service landscape maintenance,
              irrigation management, and special project execution with the operational
              consistency that property managers count on.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We know this market because we work in it every day. San Antonio is growing fast,
              and the properties here deserve landscape management that keeps pace. That is what
              we deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-brand-cream">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-12">
            What We Stand On
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-brand-navy mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-6">
              Where We Work
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              GreatView Landscapes serves the greater San Antonio metro and the surrounding
              Texas Hill Country communities. Our crews are based locally and know the soil,
              climate, and water regulations specific to this region.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 text-sm text-gray-700 font-medium"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0" />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-brand-green-dark to-brand-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container-default py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Work With Us
          </h2>
          <p className="mt-4 text-emerald-100/80 text-lg max-w-2xl mx-auto">
            If you manage an HOA community or commercial property in the San Antonio area,
            we would like to hear from you.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-brand-gold px-8 py-3.5 text-sm font-semibold text-brand-navy shadow-lg hover:bg-brand-gold-light transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
