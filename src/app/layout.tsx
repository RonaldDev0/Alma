import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Poppins } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  preload: true
})

const siteUrl = process.env.NEXT_PUBLIC_SITE || 'https://enterct.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Reparación de Impresoras y Computadores en Bogotá | Enter CT',
    template: '%s | Enter CT'
  },

  description:
    'Reparación, mantenimiento y venta de impresoras y computadores en Bogotá. Servicio técnico a domicilio, rápido y garantizado. ¡Agenda hoy con Enter CT!',

  keywords: [
    'reparación de impresoras Bogotá',
    'servicio técnico impresoras',
    'mantenimiento de computadores Bogotá',
    'técnico de impresoras a domicilio',
    'venta de impresoras',
    'soporte técnico computadores',
    'Enter CT'
  ],

  manifest: '/manifest.json',

  icons: {
    icon: [
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' }
    ]
  },

  openGraph: {
    type: 'website',
    siteName: 'Enter CT',
    title: 'Reparación de Impresoras y Computadores en Bogotá | Enter CT',
    description:
      'Servicio técnico profesional de impresoras y computadores a domicilio en Bogotá. Reparación, mantenimiento y venta con garantía.',
    url: siteUrl,
    locale: 'es_CO',
    images: [
      {
        url: 'https://enterct.com/preview.png',
        width: 1200,
        height: 630,
        alt: 'Servicio técnico de impresoras y computadores en Bogotá - Enter CT'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Servicio Técnico de Impresoras y Computadores en Bogotá | Enter CT',
    description:
      'Reparación y mantenimiento de impresoras y computadores a domicilio en Bogotá. Atención rápida y garantizada.',
    images: ['https://enterct.com/preview.png']
  }
}

const schemaLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'ComputerRepair',
  'name': 'Enter CT - Comercial Tecnológica',
  'alternateName': 'Enter CT',
  'image': 'https://enterct.com/preview.png',
  'logo': 'https://enterct.com/icon-512x512.png',
  'url': 'https://enterct.com',
  'telephone': '+573222166288',
  'email': 'ventas@enterct.com',
  'priceRange': '$$',
  'currenciesAccepted': 'COP',
  'paymentAccepted': 'Efectivo, Transferencia, Tarjeta de crédito',
  'address': [
    {
      '@type': 'PostalAddress',
      'streetAddress': 'Carrera 10 #20 - 39',
      'addressLocality': 'Bogotá',
      'addressRegion': 'Cundinamarca',
      'postalCode': '111711',
      'addressCountry': 'CO'
    },
    {
      '@type': 'PostalAddress',
      'streetAddress': 'Carrera 29 #39 - 47',
      'addressLocality': 'Bogotá',
      'addressRegion': 'Cundinamarca',
      'postalCode': '111311',
      'addressCountry': 'CO'
    }
  ],
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 4.6097,
    'longitude': -74.0817
  },
  'areaServed': [
    { '@type': 'City', 'name': 'Bogotá' },
    { '@type': 'City', 'name': 'Chía' },
    { '@type': 'City', 'name': 'Cajicá' },
    { '@type': 'City', 'name': 'Funza' },
    { '@type': 'City', 'name': 'Madrid' },
    { '@type': 'City', 'name': 'Mosquera' }
  ],
  'openingHoursSpecification': [
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      'opens': '07:00',
      'closes': '17:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': 'Saturday',
      'opens': '09:00',
      'closes': '14:00'
    }
  ],
  'description':
    'Servicio técnico profesional de impresoras y computadores en Bogotá. Reparación, mantenimiento y venta a domicilio con garantía.',
  'sameAs': [
    'https://www.facebook.com/MakrosoftColombia',
    'https://www.instagram.com/makrosoftdecolombia/',
    'https://wa.me/573222166288'
  ],
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Servicios de Enter CT',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Reparación de impresoras',
          'description': 'Servicio técnico especializado para impresoras de todas las marcas'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Mantenimiento de computadores',
          'description': 'Mantenimiento preventivo y correctivo de equipos de cómputo'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Venta de suministros',
          'description': 'Toners, tintas, cartuchos y repuestos para impresoras'
        }
      }
    ]
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='es-CO'>
      <head>
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/icon-192x192.png' />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js', { scope: '/' })
                    .then(function(registration) {
                      console.log('Service Worker registrado:', registration.scope);
                      // Forzar actualización del service worker
                      registration.update();
                    })
                    .catch(function(error) {
                      console.error('Error al registrar Service Worker:', error);
                    });
                });
              }
            `
          }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaLocalBusiness)
          }}
        />
      </head>
      <body className={`${poppins.className} antialiased`}>
        {children}
        <Toaster position='top-center' richColors />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
