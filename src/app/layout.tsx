import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Poppins } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600']
})

const siteUrl = process.env.NEXT_PUBLIC_SITE || 'https://enterct.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Enter CT',
    template: '%s | Enter CT'
  },
  description: 'Servicios especializados de venta, reparación y mantenimiento de impresoras y computadores a domicilio. Atención rápida y profesional en Bogotá.',
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
    title: 'Enter CT - Servicios de Impresoras y Computadores',
    description: 'Servicios especializados de venta, reparación y mantenimiento de impresoras y computadores a domicilio. Atención rápida y profesional en Bogotá y toda Colombia.',
    url: siteUrl,
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'Enter CT - Servicios de Impresoras y Computadores'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enter CT - Servicios de Impresoras y Computadores',
    description: 'Servicios especializados de venta, reparación y mantenimiento de impresoras y computadores a domicilio. Atención rápida y profesional en Bogotá y toda Colombia.',
    images: ['/preview.png']
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en'>
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
