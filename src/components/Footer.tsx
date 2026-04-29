import Link from 'next/link'

const services = [
  { name: 'Landscaping Contracts', href: '/landscaping' },
  { name: 'Irrigation Services', href: '/irrigation' },
  { name: 'Special Projects', href: '/special-projects' },
]

const resources = [
  { name: 'Blog', href: '/blog' },
  { name: 'Our Work', href: '/portfolio' },
  { name: 'SAWS Rebates', href: '/resources/saws-rebates' },
  { name: 'Services Overview', href: '/services-overview' },
]

const company = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
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
]

export default function Footer() {
  return (
    <footer className="bg-brand-navy print:hidden">
      <div className="container-default py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-baseline gap-1.5 mb-5">
              <span className="text-xl font-bold tracking-tight text-white">GREATVIEW</span>
              <span className="text-xl font-light tracking-tight text-brand-gold">
                LANDSCAPES
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Commercial landscaping, irrigation, and special project solutions for HOA
              communities and commercial properties in San Antonio.
            </p>
            <Link
              href="/es"
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <span>Tambien disponible en</span>
              <span className="font-medium text-brand-gold">Espanol</span>
            </Link>
          </div>

          {/* Services + Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold mt-8 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + Service Areas */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-5">
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold mt-8 mb-5">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm text-gray-400">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="tel:+12105550100"
                  className="hover:text-white transition-colors duration-200"
                >
                  (210) 555-0100
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@greatviewlandscapes.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  info@greatviewlandscapes.com
                </a>
              </li>
              <li className="pt-1">Monday through Friday</li>
              <li>7:00 AM to 5:00 PM</li>
              <li className="pt-1">San Antonio, Texas</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} GreatView Landscapes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
