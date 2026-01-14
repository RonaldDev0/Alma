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

export const metadata: Metadata = {
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
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:image' content='/preview.png' />
        <meta property='twitter:title' content='Enter CT - Servicios de Impresoras y Computadores' />
        <meta property='twitter:description' content='Servicios especializados de venta, reparación y mantenimiento de impresoras y computadores a domicilio. Atención rápida y profesional en Bogotá y toda Colombia.' />

        <meta property='og:type' content='website' />
        <meta property='og:title' content='Enter CT - Servicios de Impresoras y Computadores' />
        <meta property='og:description' content='Servicios especializados de venta, reparación y mantenimiento de impresoras y computadores a domicilio. Atención rápida y profesional en Bogotá y toda Colombia.' />
        <meta property='og:image' content='/preview.png' />
        <meta property='og:site_name' content='Enter CT' />

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
