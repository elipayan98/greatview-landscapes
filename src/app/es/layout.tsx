import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'GreatView Landscapes | Jardineria Comercial en San Antonio TX',
    template: '%s | GreatView Landscapes',
  },
  description:
    'Servicios completos de jardineria comercial, irrigacion y proyectos especiales para comunidades HOA y propiedades comerciales en San Antonio, TX. Sirviendo al area metropolitana desde 2022.',
  alternates: {
    languages: {
      en: '/',
      es: '/es',
    },
  },
}

export default function SpanishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
