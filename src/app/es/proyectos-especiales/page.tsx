import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proyectos Especiales',
  description:
    'Diseno de monumentos de entrada, instalacion de jardines de flores, programas de color estacional y elementos paisajisticos personalizados para comunidades HOA y propiedades comerciales en San Antonio, TX.',
}

const tiposDeProyecto = [
  'Diseno y construccion de monumentos de entrada',
  'Diseno e instalacion de jardines de flores',
  'Rotaciones de color estacional',
  'Renovacion y rediseno de paisaje',
  'Elementos de hardscape (andadores, bordes, muros de retencion)',
  'Instalacion de arboles y arbustos grandes',
  'Soluciones de control de erosion',
  'Mejoras de drenaje',
]

const pasos = [
  {
    number: '01',
    title: 'Consulta',
    description:
      'Nos reunimos en el sitio para hablar sobre su vision, presupuesto y cronograma.',
  },
  {
    number: '02',
    title: 'Diseno y Propuesta',
    description:
      'Nuestro equipo prepara un plan de proyecto detallado con especificaciones de materiales y desglose de costos.',
  },
  {
    number: '03',
    title: 'Revision de la Junta Directiva',
    description:
      'Para proyectos de HOA, presentamos la propuesta ante su junta directiva y gestionamos las revisiones.',
  },
  {
    number: '04',
    title: 'Construccion',
    description:
      'Nuestro equipo ejecuta el proyecto segun el cronograma con minima interrupcion para residentes e inquilinos.',
  },
]

const preguntas = [
  {
    question: 'Cuanto tiempo toma un proyecto especial tipico?',
    answer:
      'Los plazos dependen del alcance. Una instalacion de jardin de flores puede completarse en unos dias. Los monumentos de entrada y proyectos de hardscape mas grandes generalmente toman de dos a cuatro semanas desde la aprobacion hasta la finalizacion.',
  },
  {
    question: 'Pueden trabajar dentro del proceso de aprobacion de presupuesto de un HOA?',
    answer:
      'Por supuesto. Presentamos propuestas regularmente ante juntas directivas de HOA y podemos estructurar proyectos en fases para alinearnos con su ciclo presupuestario.',
  },
  {
    question: 'Proporcionan representaciones de diseno?',
    answer:
      'Para proyectos mas grandes, proporcionamos maquetas visuales y muestras de materiales para que pueda ver el producto final antes de que comencemos.',
  },
  {
    question: 'Manejan los permisos?',
    answer:
      'Si. Si su proyecto requiere permisos municipales o revision arquitectonica del HOA, nosotros gestionamos el proceso de solicitud.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Landscape Design and Construction',
    provider: {
      '@type': 'LocalBusiness',
      name: 'GreatView Landscapes',
      url: 'https://greatviewlandscapes.com',
    },
    areaServed: {
      '@type': 'City',
      name: 'San Antonio',
    },
    description:
      'Proyectos paisajisticos personalizados para comunidades HOA y propiedades comerciales en San Antonio, incluyendo monumentos de entrada, instalacion de jardines de flores, color estacional y elementos de hardscape.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: preguntas.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  },
]

export default function PaginaProyectosEspeciales() {
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
            <Link href="/es" className="hover:text-white transition-colors">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Proyectos Especiales</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Proyectos Especiales
          </h1>
          <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl">
            Monumentos de entrada, jardines de flores, color estacional y elementos
            paisajisticos personalizados que distinguen su propiedad.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight">
              Elementos Paisajisticos que Causan una Gran Impresion
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Mas alla del mantenimiento rutinario, el paisaje de su propiedad cuenta una
              historia. GreatView Landscapes disena y construye elementos paisajisticos
              personalizados que crean primeras impresiones impactantes y valor a largo
              plazo. Trabajamos con juntas directivas de HOA y administradores de propiedades
              para planificar, presupuestar y ejecutar proyectos desde el concepto hasta
              la finalizacion.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Los monumentos de entrada definen a una comunidad. Los jardines de flores
              establecen el tono de toda una propiedad. El color estacional mantiene todo
              fresco. Nosotros nos encargamos de todo esto, y lo hacemos bien.
            </p>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="section-padding bg-brand-cream">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-10">
            Lo Que Construimos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tiposDeProyecto.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-lg p-5 border border-gray-100">
                <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-gray-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-12">
            Como Trabajamos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pasos.map((step) => (
              <div key={step.number}>
                <span className="text-4xl font-bold text-brand-gold/30">{step.number}</span>
                <h3 className="mt-3 text-lg font-semibold text-brand-navy">{step.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-brand-cream">
        <div className="container-default max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-10">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-8">
            {preguntas.map((faq, i) => (
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
            Tiene un Proyecto en Mente?
          </h2>
          <p className="mt-4 text-emerald-100/80 text-lg max-w-2xl mx-auto">
            Desde monumentos de entrada hasta programas de color estacional, estamos listos
            para hacer realidad su vision. Cuentenos en que esta trabajando.
          </p>
          <Link
            href="/es/contacto"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-brand-gold px-8 py-3.5 text-sm font-semibold text-brand-navy shadow-lg hover:bg-brand-gold-light transition-colors duration-200"
          >
            Iniciemos una Conversacion
          </Link>
        </div>
      </section>
    </>
  )
}
