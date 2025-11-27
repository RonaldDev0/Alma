import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

type TRecord = {
  id: number
  reference: string
  brand: string
  stock: number
}

type IContact = {
  WhatsApp: string
  number: string
}

const contact: IContact = {
  WhatsApp: 'https://wa.me/573132006606',
  number: '3132006606'
}

function whatsappInitialMessage ({ reference, brand }: TRecord) {
  return encodeURIComponent(
    `Hola, vi la lista de productos y quiero más información sobre ${brand} ${reference}.`
  )
}

export function TableData({ records }: { records: TRecord[] }) {
  return (
    <Table>
      <TableCaption>Lista de productos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[90px] sm:w-[150px]'>Referencia</TableHead>
          <TableHead className='w-[80px] sm:w-[100px]'>Marca</TableHead>
          {/* <TableHead>Imagen</TableHead> */}
          <TableHead className='text-right'>Contacto</TableHead>
          <TableHead className='text-right'>WhatsApp</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {records.map(record => (
          <TableRow key={record.id}>
            <TableCell className='font-medium w-[120px] sm:w-[200px] whitespace-normal wrap-break-word text-xs sm:text-sm leading-tight'>
              {record.reference}
            </TableCell>
            <TableCell className='w-[80px] sm:w-[100px] text-xs sm:text-sm'>{record.brand}</TableCell>
            {/* <TableCell>
              <div className='flex justify-center'>
                <Image
                  src={`/toners/${record.image}.png`}
                  alt={`${record.brand} ${record.reference}`}
                  width={64}
                  height={64}
                  className='h-12 w-auto object-contain'
                />
              </div>
            </TableCell> */}
            <TableCell className='text-right'>
              <Link
                href={`tel:${contact.number}`}
                target='_blank'
                className='inline-flex items-center justify-center rounded-full border border-slate-300 px-2 py-1 text-[11px] sm:text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors'
                aria-label={`Llamar al número ${contact.number}`}
              >
                Llamar
              </Link>
            </TableCell>
            <TableCell className='text-right'>
              <Link
                href={`${contact.WhatsApp}?text=${whatsappInitialMessage(record)}`}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center justify-center rounded-full bg-emerald-600 px-2 py-1 text-[11px] sm:text-xs font-medium text-white hover:bg-emerald-700 transition-colors'
                aria-label='Abrir chat de WhatsApp'
              >
                WhatsApp
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default async function List() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('product-list')
    .select('id, reference, brand, stock')
    .order('reference', { ascending: true })

  const records = (data ?? []) as TRecord[]

  if (error) {
    console.error('Error fetching product-list:', error.message)
  }

  return (
    <main className='w-full min-h-screen bg-slate-50 py-10 px-3 sm:py-12 sm:px-4 lg:py-16 lg:px-12'>
      <section className='max-w-4xl mx-auto mb-10 text-center'>
        <div className='inline-flex items-center justify-center rounded-full bg-slate-900 text-slate-50 px-5 py-2 shadow-sm'>
          <span className='text-2xl sm:text-3xl font-semibold tracking-tight'>
            Enter
          </span>
        </div>
      </section>
      <section className='mx-auto max-w-full lg:max-w-4xl'>
        <h2 className='text-xl font-semibold text-slate-900 mb-4'>Lista de Productos</h2>
        <div className='overflow-x-auto'>
          <TableData records={records} />
        </div>
      </section>
    </main>
  )
}
