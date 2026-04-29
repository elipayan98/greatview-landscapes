import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios de Irrigacion',
  description:
    'Servicios comerciales de irrigacion en San Antonio, TX. Diseno de sistemas, reparacion de aspersores, instalacion de controladores inteligentes, pruebas de backflow y manejo estacional para propiedades HOA y comerciales.',
}

const servicios = [
  'Diseno e instalacion de sistemas de irrigacion',
  'Reparacion y reemplazo de cabezales de aspersores',
  'Programacion de controladores y actualizaciones inteligentes',
  'Deteccion de fugas y reparacion de lineas',
  'Pruebas y certificacion de valvulas de prevencion de contraflujo',
  'Puesta en marcha estacional y preparacion para invierno',
  'Auditorias de agua y evaluaciones de eficiencia',
  'Instalacion de riego por goteo',
  'Instalacion de sensores de lluvia y humedad del suelo',
]

const pasos = [
  {
    number: '01',
    title: 'Evaluacion del Sistema',
    description:
      'Evaluamos su infraestructura de irrigacion actual, identificamos ineficiencias y documentamos necesidades de reparacion.',
  },
  {
    number: '02',
    title: 'Recomendaciones',
    description:
      'Usted recibe un plan de accion priorizado con costos claros para cada partida.',
  },
  {
    number: '03',
    title: 'Ejecucion',
    description:
      'Nuestros tecnicos de irrigacion realizan todo el trabajo, desde reemplazo de valvulas hasta instalaciones completas de sistemas.',
  },
  {
    number: '04',
    title: 'Manejo Estacional',
    description:
      'Ajustamos tiempos de riego, verificamos la cobertura y realizamos mantenimiento preventivo cada temporada.',
  },
]

const preguntas = [
  {
    question: 'Trabajan con sistemas de irrigacion existentes o solo instalan nuevos?',
    answer:
      'Ambos. La mayor parte de nuestro trabajo consiste en reparar, actualizar y optimizar sistemas existentes. Tambien disenamos e instalamos sistemas nuevos para propiedades que los necesitan.',
  },
  {
    question: 'Pueden ayudar a reducir los costos de agua de nuestra propiedad?',
    answer:
      'Si. Realizamos auditorias de agua para detectar desperdicio, instalamos controladores inteligentes y sensores de lluvia, y ajustamos las zonas de cobertura para eliminar el exceso de riego y el escurrimiento. La mayoria de las propiedades observan una reduccion medible en el consumo de agua durante la primera temporada.',
  },
  {
    question: 'Manejan pruebas de backflow?',
    answer:
      'Si. Estamos certificados para realizar pruebas anuales de valvulas de prevencion de contraflujo y enviamos la documentacion requerida a SAWS en su nombre.',
  },
  {
    question: 'Con que marcas de irrigacion trabajan?',
    answer:
      'Trabajamos con todas las marcas principales incluyendo Hunter, Rain Bird, Toro y Weathermatic. Podemos dar servicio e integrar piezas de cualquier fabricante.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Commercial Irrigation Services',
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
      'Servicios completos de irrigacion para propiedades comerciales y HOA en San Antonio, incluyendo diseno de sistemas, reparacion, instalacion de controladores inteligentes, pruebas de backflow y manejo estacional.',
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

export default function PaginaIrrigacion() {
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
            <span className="text-white">Irrigacion</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Servicios de Irrigacion
          </h1>
          <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl">
            Diseno, reparacion y manejo de sistemas que mantienen su paisaje saludable
            y sus costos de agua bajo control.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight">
              Gestion del Agua para Propiedades Comerciales
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              El agua es la base de todo paisaje saludable. GreatView Landscapes ofrece
              servicios completos de irrigacion para propiedades comerciales y HOA, desde
              el diseno de nuevos sistemas hasta el manejo estacional continuo. Trabajamos
              con todas las marcas principales de sistemas y nos especializamos en soluciones
              eficientes en el uso del agua, disenadas para el clima de San Antonio.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Las regulaciones de agua en San Antonio son estrictas, y con buena razon.
              Nuestro equipo se mantiene actualizado con los requisitos de SAWS y disena
              sistemas que mantienen su propiedad verde mientras cumplen las normativas
              y optimizan los costos.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-brand-cream">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-10">
            Lo Que Hacemos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicios.map((item) => (
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
            Programe una Evaluacion de Irrigacion
          </h2>
          <p className="mt-4 text-emerald-100/80 text-lg max-w-2xl mx-auto">
            Permitanos evaluar su sistema y preparar un plan para mejorar la cobertura,
            reducir el desperdicio y disminuir sus costos de agua.
          </p>
          <Link
            href="/es/contacto"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-brand-gold px-8 py-3.5 text-sm font-semibold text-brand-navy shadow-lg hover:bg-brand-gold-light transition-colors duration-200"
          >
            Solicite una Propuesta
          </Link>
        </div>
      </section>
    </>
  )
}
