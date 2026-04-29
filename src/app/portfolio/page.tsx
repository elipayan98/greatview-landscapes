import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'A selection of landscaping, irrigation, and special projects completed by GreatView Landscapes across the San Antonio metro. HOA renovations, irrigation overhauls, and more.',
}

const projects = [
  {
    title: 'HOA Common Area Renovation',
    location: 'Stone Oak',
    type: 'Landscaping',
    bgClass: 'bg-emerald-50',
    description:
      'Complete renovation of common area beds, turf replacement, and new mulch installation across 12 acres of shared grounds for a 300-unit community.',
  },
  {
    title: 'Commercial Irrigation Overhaul',
    location: 'Medical Center',
    type: 'Irrigation',
    bgClass: 'bg-brand-cream',
    description:
      'Full system audit, replacement of aging mainline, conversion of 8 spray zones to drip irrigation, and installation of a smart controller with flow monitoring.',
  },
  {
    title: 'Entry Monument Installation',
    location: 'Boerne HOA',
    type: 'Special Projects',
    bgClass: 'bg-brand-navy/5',
    description:
      'Design and installation of dual entry monuments with integrated landscape beds, uplighting, and a low-maintenance native planting palette.',
  },
  {
    title: 'Seasonal Color Program',
    location: 'Alamo Ranch',
    type: 'Special Projects',
    bgClass: 'bg-emerald-50',
    description:
      'Year-round seasonal color rotation across 24 planting beds at community entrances and amenity centers. Four seasonal installations per year.',
  },
  {
    title: 'Drainage Solution',
    location: 'Schertz Office Park',
    type: 'Irrigation',
    bgClass: 'bg-brand-cream',
    description:
      'Installation of a French drain system and regrading to resolve persistent standing water issues in a parking lot perimeter and adjacent planting beds.',
  },
  {
    title: 'Landscape Maintenance Contract',
    location: 'New Braunfels HOA',
    type: 'Landscaping',
    bgClass: 'bg-brand-navy/5',
    description:
      'Full-service weekly maintenance contract covering mowing, edging, pruning, seasonal cleanup, and irrigation management for a 180-home community.',
  },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-green-dark to-brand-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container-default py-20 md:py-28">
          <nav className="text-sm text-emerald-200/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Our Work</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our Work
          </h1>
          <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl">
            A selection of landscaping, irrigation, and special projects across the San Antonio metro.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className={`h-48 ${project.bgClass} flex items-center justify-center`}>
                  <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
                <div className="p-7">
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                    {project.type}
                  </span>
                  <h3 className="text-lg font-semibold text-brand-navy mt-2 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-brand-green font-medium mb-3">
                    {project.location}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-14 text-center text-gray-500 text-sm italic">
            Photos from recent projects will be added soon.
          </p>
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
            Whether it is a full landscape renovation, irrigation upgrade, or ongoing maintenance
            contract, we are ready to discuss your property.
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
