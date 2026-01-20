import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Venta de Impresoras y Equipos de Cómputo',
  description:
    'Compra impresoras láser, multifuncionales, equipos de inyección de tinta y computadores. Venta con garantía y soporte técnico en Bogotá. Envíos a toda Colombia.',
  keywords: [
    'venta impresoras Bogotá',
    'comprar impresora láser',
    'multifuncional HP',
    'impresora Epson',
    'equipos de cómputo Colombia',
    'impresoras para empresas',
    'impresoras para oficina'
  ],
  openGraph: {
    title: 'Venta de Impresoras y Equipos | Enter CT',
    description:
      'Impresoras láser, multifuncionales y equipos de cómputo con garantía. Soporte técnico incluido.',
    url: 'https://enterct.com/products',
    type: 'website'
  }
}

const mockProducts = [
  {
    id: 1,
    name: 'Impresora Láser A1',
    description: 'Equipo robusto para oficinas con alto volumen.',
    imageUrl: 'https://placehold.co/400x300?text=Impresora+A1'
  },
  {
    id: 2,
    name: 'Multifuncional Pro',
    description: 'Imprime, escanea y copia con conectividad Wi‑Fi.',
    imageUrl: 'https://placehold.co/400x300?text=Multifuncional+Pro'
  },
  {
    id: 3,
    name: 'Inyección de Tinta Compacta',
    description: 'Ideal para puntos de venta y espacios reducidos.',
    imageUrl: 'https://placehold.co/400x300?text=Inyeccion+Compacta'
  },
  {
    id: 4,
    name: 'Suministro de Tóner XL',
    description: 'Cartucho de larga duración compatible con serie A.',
    imageUrl: 'https://placehold.co/400x300?text=Toner+XL'
  }
]

export default function Products() {
  return (
    <main className='w-full min-h-screen bg-slate-50 py-16 px-6 lg:px-12'>
      <Card className='max-w-4xl mx-auto mb-12 text-center'>
        <CardHeader className='gap-3'>
          <CardDescription className='text-xs uppercase tracking-[0.35em] text-purple-500 font-semibold'>
            Impresoras & suministros
          </CardDescription>
          <CardTitle className='text-3xl sm:text-4xl text-slate-900'>
            Soluciones listas para instalar
          </CardTitle>
          <CardDescription className='text-base text-slate-600'>
            Catálogo base sin precios. Actualiza las imágenes y descripciones cuando tengas la información oficial.
          </CardDescription>
        </CardHeader>
      </Card>

      <section className='max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {mockProducts.map(product => (
          <Link href={process.env.NEXT_PUBLIC_SITE + 'products/' + product.id} key={product.id}>
            <Card className='h-full overflow-hidden border-slate-200'>
              <CardContent className='p-0'>
                <div className='relative w-full bg-slate-100'>
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={640}
                    height={480}
                    className='h-56 w-full object-cover'
                    priority={product.id === 1}
                  />
                </div>
              </CardContent>
              <CardHeader className='gap-2'>
                <CardTitle className='text-xl text-slate-900'>{product.name}</CardTitle>
                <CardDescription className='text-sm text-slate-600'>
                  {product.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </section>
    </main>
  )
}