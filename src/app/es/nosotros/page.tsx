import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'GreatView Landscapes es una empresa de jardineria comercial que sirve a comunidades HOA y propiedades comerciales en San Antonio, TX desde 2022. Conozca nuestro equipo, valores y area de servicio.',
}

const valores = [
  {
    title: 'Confiabilidad',
    description:
      'Llegamos segun lo programado, siempre. Nuestros clientes pueden contar con un servicio consistente sin tener que perseguirnos.',
  },
  {
    title: 'Comunicacion',
    description:
      'Cada cuenta tiene un punto de contacto dedicado. Enviamos actualizaciones, respondemos solicitudes rapidamente y lo mantenemos informado.',
  },
  {
    title: 'Calidad',
    description:
      'Mantenemos a nuestros equipos bajo un estandar claro. Las inspecciones regulares de calidad aseguran que su propiedad luzca impecable semana tras semana.',
  },
  {
    title: 'Eficiencia',
    description:
      'Utilizamos programacion inteligente, rutas eficientes y practicas de irrigacion que ahorran agua para ofrecer valor sin desperdicio.',
  },
]

const areasDeServicio = [
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

export default function PaginaNosotros() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-green-dark to-brand-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container-default py-20 md:py-28">
          <nav className="text-sm text-emerald-200/70 mb-6">
            <Link href="/es" className="hover:text-white transition-colors">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Nosotros</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Acerca de GreatView Landscapes
          </h1>
          <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl">
            Sirviendo al area metropolitana de San Antonio desde 2022 con un enfoque en
            calidad, consistencia y comunicacion clara.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight">
              Nuestra Historia
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              GreatView Landscapes fue fundada en San Antonio en 2022 para llenar un vacio en
              el mercado de jardineria comercial: servicio confiable con comunicacion real.
              Demasiados administradores de propiedades lidian con horarios incumplidos,
              llamadas sin devolver y trabajo inconsistente. Creamos esta empresa para ser
              diferentes.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Nuestro enfoque esta en las comunidades HOA y propiedades comerciales que
              necesitan un socio en jardineria, no solo un proveedor. Proporcionamos
              mantenimiento completo de paisaje, gestion de irrigacion y ejecucion de
              proyectos especiales con la consistencia operativa que los administradores
              de propiedades necesitan.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Conocemos este mercado porque trabajamos en el todos los dias. San Antonio
              esta creciendo rapidamente, y las propiedades de esta ciudad merecen una
              gestion de paisaje que mantenga el paso. Eso es lo que ofrecemos.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-brand-cream">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-12">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {valores.map((value) => (
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
              Donde Trabajamos
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              GreatView Landscapes sirve al area metropolitana de San Antonio y las comunidades
              circundantes del Texas Hill Country. Nuestros equipos son locales y conocen
              el suelo, el clima y las regulaciones de agua especificas de esta region.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {areasDeServicio.map((area) => (
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
            Trabaje con Nosotros
          </h2>
          <p className="mt-4 text-emerald-100/80 text-lg max-w-2xl mx-auto">
            Si usted administra una comunidad HOA o propiedad comercial en el area de
            San Antonio, nos gustaria saber de usted.
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
