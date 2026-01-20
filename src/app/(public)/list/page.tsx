import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { ListClient } from './list-client'
import type { TRecord } from './table'
import { InstallPrompt } from './install-prompt'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Catálogo de Toners, Tintas y Repuestos para Impresoras',
  description:
    'Encuentra toners, tintas, cartuchos y repuestos para impresoras HP, Epson, Brother, Samsung y más. Stock disponible con envío a toda Colombia. Precios competitivos.',
  keywords: [
    'toner impresora Bogotá',
    'tintas para impresora',
    'cartuchos HP',
    'repuestos impresoras',
    'suministros impresoras Colombia',
    'toner compatible',
    'tinta Epson',
    'cartuchos Brother'
  ],
  openGraph: {
    title: 'Catálogo de Suministros para Impresoras | Enter CT',
    description:
      'Toners, tintas y repuestos para todas las marcas. Stock disponible con envío nacional.',
    url: 'https://enterct.com/list',
    type: 'website'
  }
}

export default async function List() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('product-list')
    .select('id, reference, brand, stock, family')
    .order('reference', { ascending: true })

  if (error) {
    console.error('Error fetching product-list:', error.message)
  }

  const initialRecords = (data ?? []) as TRecord[]

  return (
    <main className='px-2'>
      <InstallPrompt />
      <div className='w-full flex flex-col items-center mt-6 space-y-4'>
        <h1 className='text-2xl md:text-3xl font-bold text-center'>
          Catálogo de Toners, Tintas y Repuestos
        </h1>
        <p className='text-muted-foreground text-center max-w-2xl'>
          Encuentra suministros para impresoras HP, Epson, Brother, Samsung y más marcas. Stock disponible con envío a toda Colombia.
        </p>
        <Image
          src='/qr-enterct3.png'
          width='350'
          height='100'
          alt='Código QR para acceder al catálogo de Enter CT'
        />
      </div>
      <section className='mx-auto max-w-full lg:max-w-6xl mt-6'>
        <div className='overflow-x-auto'>
          <ListClient initialRecords={initialRecords} />
        </div>
      </section>
    </main>
  )
}