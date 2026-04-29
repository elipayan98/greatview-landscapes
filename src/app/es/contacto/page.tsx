'use client'

import Link from 'next/link'
import { useState } from 'react'

const tiposDePropiedad = ['Comunidad HOA', 'Propiedad Comercial', 'Complejo Multifamiliar', 'Otro']
const interesesDeServicio = [
  'Contrato de Jardineria',
  'Servicios de Irrigacion',
  'Proyecto Especial',
  'Multiples Servicios',
]

export default function PaginaContacto() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-green-dark to-brand-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container-default py-20 md:py-28">
          <nav className="text-sm text-emerald-200/70 mb-6">
            <Link href="/es" className="hover:text-white transition-colors">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contacto</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Contactenos
          </h1>
          <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl">
            Listo para hablar sobre las necesidades de su propiedad? Comuniquese con
            nosotros para una consulta o propuesta.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-8">
                Solicite una Propuesta
              </h2>

              {submitted ? (
                <div className="rounded-xl bg-brand-green-50 border border-brand-green/20 p-8 text-center">
                  <svg className="w-12 h-12 text-brand-green mx-auto mb-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">
                    Gracias por comunicarse con nosotros.
                  </h3>
                  <p className="text-gray-600">
                    Revisaremos su informacion y le responderemos dentro de un dia habil.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors"
                        placeholder="Su nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Correo Electronico
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors"
                        placeholder="usted@empresa.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Telefono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors"
                        placeholder="(210) 555-0100"
                      />
                    </div>
                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Tipo de Propiedad
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        required
                        className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors bg-white"
                      >
                        <option value="">Seleccione el tipo</option>
                        {tiposDePropiedad.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Servicio de Interes
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors bg-white"
                    >
                      <option value="">Seleccione el servicio</option>
                      {interesesDeServicio.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors resize-vertical"
                      placeholder="Cuentenos sobre su propiedad y lo que esta buscando."
                    />
                  </div>

                  <button
                    type="submit"
                    className="rounded-md bg-brand-green px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-green-light transition-colors duration-200"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-8">
                Comuniquese con Nosotros
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-2">
                    Telefono
                  </h3>
                  <a href="tel:+12105550100" className="text-gray-700 hover:text-brand-green transition-colors">
                    (210) 555-0100
                  </a>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-2">
                    Correo Electronico
                  </h3>
                  <a href="mailto:info@greatviewlandscapes.com" className="text-gray-700 hover:text-brand-green transition-colors">
                    info@greatviewlandscapes.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-2">
                    Horario
                  </h3>
                  <p className="text-gray-700">Lunes a viernes</p>
                  <p className="text-gray-700">7:00 AM a 5:00 PM</p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-2">
                    Area de Servicio
                  </h3>
                  <p className="text-gray-700">
                    San Antonio y comunidades circundantes incluyendo New Braunfels, Boerne,
                    Schertz, Cibolo, Helotes y la region del Texas Hill Country.
                  </p>
                </div>
              </div>

              <div className="mt-10 rounded-xl bg-brand-cream border border-gray-200 p-6">
                <h3 className="text-sm font-semibold text-brand-navy mb-2">
                  Que puede esperar
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green font-bold mt-0.5">1.</span>
                    Revisamos su consulta dentro de un dia habil.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green font-bold mt-0.5">2.</span>
                    Programamos un recorrido de la propiedad a su conveniencia.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green font-bold mt-0.5">3.</span>
                    Usted recibe una propuesta detallada con alcance y precios.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
