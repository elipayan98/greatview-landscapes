import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GreatView Landscapes | Jardineria Comercial en San Antonio TX',
  description:
    'Servicios completos de jardineria comercial, irrigacion y proyectos especiales para comunidades HOA y propiedades comerciales en San Antonio, TX. Sirviendo al area metropolitana desde 2022.',
}

const services = [
  {
    title: 'Contratos de Jardineria',
    href: '/es/jardineria',
    description:
      'Mantenimiento continuo de areas verdes para comunidades HOA y propiedades comerciales. Corte de cesped, podas, limpieza estacional y todo lo necesario para mantener sus terrenos impecables.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Servicios de Irrigacion',
    href: '/es/irrigacion',
    description:
      'Diseno, instalacion, reparacion y manejo estacional de sistemas de riego. Mantenemos su paisaje saludable y sus costos de agua bajo control.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Proyectos Especiales',
    href: '/es/proyectos-especiales',
    description:
      'Monumentos de entrada, instalacion de jardines de flores, programas de color estacional y elementos paisajisticos personalizados que elevan la imagen de su propiedad.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
]

const reasons = [
  {
    title: 'Comunicacion Consistente',
    description:
      'Siempre tendra noticias nuestras. Actualizaciones regulares, cronogramas claros y un punto de contacto dedicado para cada cuenta.',
  },
  {
    title: 'Operaciones Escalables',
    description:
      'Ya sea que administre una propiedad o veinte, nuestros sistemas estan disenados para mantener la calidad a cualquier escala.',
  },
  {
    title: 'Experiencia Local',
    description:
      'Conocemos el suelo, el clima y las restricciones de agua de San Antonio. Nuestras recomendaciones estan disenadas para esta region.',
  },
  {
    title: 'Licenciados y Asegurados',
    description:
      'Completamente licenciados, asegurados y en cumplimiento con todas las regulaciones de Texas para trabajo comercial de jardineria e irrigacion.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://greatviewlandscapes.com',
  name: 'GreatView Landscapes',
  description:
    'Servicios completos de jardineria comercial, irrigacion y proyectos especiales para comunidades HOA y propiedades comerciales en San Antonio, Texas.',
  url: 'https://greatviewlandscapes.com/es',
  telephone: '+12105550100',
  email: 'info@greatviewlandscapes.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'San Antonio',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 29.4241,
    longitude: -98.4936,
  },
  foundingDate: '2022',
  areaServed: [
    { '@type': 'City', name: 'San Antonio' },
    { '@type': 'City', name: 'New Braunfels' },
    { '@type': 'City', name: 'Boerne' },
    { '@type': 'City', name: 'Schertz' },
    { '@type': 'City', name: 'Cibolo' },
    { '@type': 'City', name: 'Helotes' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '07:00',
    closes: '17:00',
  },
  priceRange: '$$',
  serviceType: ['Commercial Landscaping', 'Irrigation Services', 'Landscape Design'],
}

export default function PaginaInicio() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* English Version Banner */}
      <div className="bg-brand-navy text-center py-2.5 px-4">
        <Link href="/" className="text-sm text-emerald-200/80 hover:text-white transition-colors">
          English version available
          <svg className="inline-block ml-1.5 w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-green-dark to-brand-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container-default py-28 md:py-36 lg:py-44 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Su Socio en Gestion de
            <br className="hidden sm:block" />
            Paisajismo Comercial en San Antonio
          </h1>
          <p className="mt-6 text-lg md:text-xl text-emerald-100/80 max-w-3xl mx-auto leading-relaxed">
            Servicios completos de jardineria, irrigacion y proyectos especiales para
            comunidades HOA y propiedades comerciales en el area metropolitana de San Antonio.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/es/contacto"
              className="inline-flex items-center justify-center rounded-md bg-brand-gold px-7 py-3.5 text-sm font-semibold text-brand-navy shadow-lg hover:bg-brand-gold-light transition-colors duration-200"
            >
              Solicite una Propuesta
            </Link>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors duration-200"
            >
              Nuestros Servicios
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brand-cream border-y border-gray-200">
        <div className="container-default py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-green">
                Sirviendo a San Antonio Desde 2022
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-green">
                Propiedades HOA y Comerciales
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-green">
                Soluciones Integrales de Paisajismo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="section-padding bg-white">
        <div className="container-default">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
              Nuestros Servicios
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Tres areas de servicio disenadas para cubrir cada aspecto de las necesidades
              paisajisticas de su propiedad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative rounded-xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md hover:border-brand-green/30 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-brand-green-50 text-brand-green mb-5 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center text-sm font-medium text-brand-green group-hover:text-brand-green-light transition-colors">
                  Mas informacion
                  <svg className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-brand-cream">
        <div className="container-default">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
              Por Que los Administradores Eligen GreatView
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reasons.map((reason, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-green flex items-center justify-center mt-0.5">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-1.5">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding bg-white">
        <div className="container-default text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
            Sirviendo al Area Metropolitana de San Antonio
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            GreatView Landscapes ofrece servicios de jardineria comercial en toda el area
            metropolitana de San Antonio. Nuestros equipos atienden propiedades en San Antonio,
            New Braunfels, Boerne, Schertz, Cibolo, Helotes, Converse, Universal City,
            Selma, Garden Ridge y Fair Oaks Ranch.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-brand-green-dark to-brand-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container-default py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Listo para Hablar Sobre su Propiedad?
          </h2>
          <p className="mt-4 text-emerald-100/80 text-lg max-w-2xl mx-auto">
            Ya sea que necesite un contrato de mantenimiento, trabajo de irrigacion o un
            proyecto personalizado, estamos listos para preparar una propuesta.
          </p>
          <Link
            href="/es/contacto"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-brand-gold px-8 py-3.5 text-sm font-semibold text-brand-navy shadow-lg hover:bg-brand-gold-light transition-colors duration-200"
          >
            Contactenos
          </Link>
        </div>
      </section>
    </>
  )
}
