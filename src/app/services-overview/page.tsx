'use client'

import Link from 'next/link'

const landscapingServices = [
  'Weekly or biweekly mowing, edging, and string trimming',
  'Hedge and shrub pruning on a scheduled rotation',
  'Seasonal cleanup: spring preparation and fall leaf removal',
  'Mulch replenishment and bed maintenance',
  'Weed control in beds and common areas',
  'Tree pruning and hazardous limb removal',
  'Seasonal color installation and rotation',
  'Turf renovation and overseeding',
]

const irrigationServices = [
  'Irrigation system design and installation',
  'System audits and efficiency assessments',
  'Sprinkler head repair and replacement',
  'Mainline and lateral line repairs',
  'Controller programming and smart controller upgrades',
  'Drip irrigation conversions',
  'Backflow preventer testing and replacement',
  'Winterization and spring startup',
  'Rain and freeze sensor installation',
  'SAWS rebate application assistance',
]

const specialProjectServices = [
  'Entry monument design and installation',
  'Flower bed construction and renovation',
  'Hardscape installation: walkways, retaining walls, and borders',
  'Drainage solutions: French drains, grading, and catch basins',
  'Landscape lighting design and installation',
  'Sod installation and turf replacement',
  'Tree planting and transplanting',
  'Custom landscape design for common areas',
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
  'Alamo Ranch',
  'Stone Oak',
]

export default function ServicesOverviewPage() {
  return (
    <>
      {/* Print Styles */}
      <style>{`
        @media print {
          header, footer, nav, .no-print {
            display: none !important;
          }
          main {
            padding-top: 0 !important;
          }
          section {
            break-inside: avoid;
          }
        }
      `}</style>

      {/* Page Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-default py-12 md:py-16">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
                GreatView Landscapes
              </h1>
              <p className="mt-2 text-gray-600 text-lg">
                Commercial Landscaping, Irrigation, and Special Projects
              </p>
              <div className="mt-4 flex flex-col sm:flex-row sm:gap-6 text-sm text-gray-500">
                <span>San Antonio, TX</span>
                <span>info@greatviewlandscapes.com</span>
                <span>(210) 555-0100</span>
              </div>
            </div>
            <button
              onClick={() => window.print()}
              className="no-print flex-shrink-0 inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18.75 7.131H5.25" />
              </svg>
              Print This Page
            </button>
          </div>
        </div>
      </section>

      {/* Landscaping Contracts */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-2">
            Landscaping Contracts
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 max-w-3xl">
            Ongoing grounds maintenance for HOA common areas, commercial campuses, and
            multi-family properties. Contracts are structured on a monthly basis with a
            defined scope of work and visit schedule.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            {landscapingServices.map((service) => (
              <li key={service} className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed">
                <svg className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <hr className="border-gray-200" />

      {/* Irrigation Services */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-2">
            Irrigation Services
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 max-w-3xl">
            Complete irrigation management including system design, installation, repair, and
            seasonal maintenance. We also assist with SAWS rebate applications for qualifying
            water-efficiency upgrades.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            {irrigationServices.map((service) => (
              <li key={service} className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed">
                <svg className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <hr className="border-gray-200" />

      {/* Special Projects */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-2">
            Special Projects
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 max-w-3xl">
            One-time landscape construction, renovation, and enhancement projects. Each
            project includes a detailed proposal with scope, timeline, materials, and pricing.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            {specialProjectServices.map((service) => (
              <li key={service} className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed">
                <svg className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <hr className="border-gray-200" />

      {/* Service Area */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-6">
            Service Area
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
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
      </section>

      <hr className="border-gray-200" />

      {/* Contact Info */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-6">
            Contact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <div>
              <p className="text-sm font-semibold text-brand-navy mb-1">Phone</p>
              <p className="text-gray-600 text-sm">(210) 555-0100</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-brand-navy mb-1">Email</p>
              <p className="text-gray-600 text-sm">info@greatviewlandscapes.com</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-brand-navy mb-1">Website</p>
              <Link href="/" className="text-brand-green text-sm hover:text-brand-green-light transition-colors no-print">
                greatviewlandscapes.com
              </Link>
              <p className="text-gray-600 text-sm hidden print:block">greatviewlandscapes.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
