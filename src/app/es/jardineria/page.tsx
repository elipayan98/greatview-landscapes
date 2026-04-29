import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contratos de Jardineria',
  description:
    'Contratos de mantenimiento de jardineria comercial para comunidades HOA y propiedades comerciales en San Antonio, TX. Corte semanal, podas, limpieza estacional y mas.',
}

const incluidos = [
  'Corte y bordeado semanal',
  'Recorte de arbustos y setos',
  'Poda de arboles (menos de 15 pies)',
  'Recoleccion de hojas y desechos',
  'Mantenimiento estacional de jardines de flores',
  'Control de maleza y aplicaciones pre-emergentes',
  'Instalacion de mantillo y recubrimiento',
  'Limpieza despues de tormentas',
  'Barrido de andadores y areas de estacionamiento',
]

const pasos = [
  {
    number: '01',
    title: 'Evaluacion de la Propiedad',
    description:
      'Recorremos la propiedad con usted, documentamos las condiciones actuales e identificamos las prioridades.',
  },
  {
    number: '02',
    title: 'Propuesta Personalizada',
    description:
      'Usted recibe un alcance de trabajo detallado, calendario de servicio y precios transparentes.',
  },
  {
    number: '03',
    title: 'Incorporacion',
    description:
      'Asignamos un lider de equipo, establecemos canales de comunicacion e iniciamos el servicio.',
  },
  {
    number: '04',
    title: 'Gestion Continua',
    description:
      'Inspecciones regulares de calidad, ajustes estacionales e informes mensuales mantienen su propiedad en optimas condiciones.',
  },
]

const preguntas = [
  {
    question: 'Que tipos de propiedades atienden?',
    answer:
      'Trabajamos con comunidades HOA, parques de oficinas comerciales, centros comerciales, complejos multifamiliares y propiedades municipales en toda el area metropolitana de San Antonio.',
  },
  {
    question: 'Como se estructuran sus contratos?',
    answer:
      'Ofrecemos contratos de 12 meses con facturacion mensual. Los terminos del contrato son flexibles y pueden ajustarse al ciclo presupuestario de su propiedad.',
  },
  {
    question: 'Manejan la irrigacion como parte de un contrato de jardineria?',
    answer:
      'La irrigacion puede incluirse en su contrato de jardineria o gestionarse como un acuerdo separado. Recomendamos incluirla para una comunicacion y programacion mas eficientes.',
  },
  {
    question: 'Que sucede si no estamos satisfechos con el trabajo?',
    answer:
      'Contamos con una politica de resolucion de 24 horas. Si se reporta un problema, un lider de equipo estara en el sitio dentro de un dia habil para resolverlo.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Commercial Landscaping Maintenance',
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
      'Contratos de mantenimiento de jardineria comercial para comunidades HOA y propiedades comerciales en San Antonio, incluyendo corte, podas, limpieza estacional y mas.',
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

export default function PaginaJardineria() {
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
            <span className="text-white">Jardineria</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Contratos de Jardineria
          </h1>
          <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl">
            Mantenimiento de areas verdes confiable y consistente para comunidades HOA
            y propiedades comerciales en el area metropolitana de San Antonio.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight">
              Mantenimiento de Areas Verdes Disenado para su Propiedad
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              GreatView Landscapes ofrece contratos de mantenimiento de jardineria comercial
              adaptados a las necesidades especificas de su propiedad. Trabajamos con juntas
              directivas de HOA, administradores de propiedades y equipos de instalaciones
              comerciales para mantener los terrenos limpios, seguros y profesionalmente
              cuidados durante todo el ano.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Cada contrato comienza con una evaluacion detallada de la propiedad. Creamos
              un plan de servicio personalizado basado en el tamano, distribucion, material
              vegetal y patrones de trafico de su propiedad. Sin programas genericos.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-brand-cream">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-10">
            Que Incluye
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {incluidos.map((item) => (
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
            Obtenga una Propuesta de Mantenimiento Personalizada
          </h2>
          <p className="mt-4 text-emerald-100/80 text-lg max-w-2xl mx-auto">
            Cuentenos sobre su propiedad y prepararemos un alcance de trabajo y precios
            que se ajusten a sus necesidades.
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
