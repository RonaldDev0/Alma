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
          <TableHead>Referencia</TableHead>
          <TableHead className='hidden sm:table-cell'>Marca</TableHead>
          {/* <TableHead>Imagen</TableHead> */}
          <TableHead className='text-right'>Contacto</TableHead>
          <TableHead className='text-right'>WhatsApp</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {records.map(record => (
          <TableRow key={record.id}>
            <TableCell className='font-medium'>
              <p className='text-sm sm:text-base leading-snug whitespace-normal wrap-break-word max-w-[240px] sm:max-w-none'>
                {record.reference}
              </p>
              <p className='text-xs text-slate-500 sm:hidden mt-1'>{record.brand}</p>
            </TableCell>
            <TableCell className='hidden sm:table-cell'>{record.brand}</TableCell>
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
            <TableCell className='text-right align-middle'>
              <Link
                href={`tel:${contact.number}`}
                target='_blank'
                className='inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-slate-300 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors'
                aria-label={`Llamar al número ${contact.number}`}
              >
                Llamar
              </Link>
            </TableCell>
            <TableCell className='text-right align-middle'>
              <Link
                href={`${contact.WhatsApp}?text=${whatsappInitialMessage(record)}`}
                target='_blank'
                rel='noreferrer'
                className='inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-emerald-600 px-3 py-1.5 text-xs sm:text-sm font-medium text-white hover:bg-emerald-700 transition-colors'
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
    <main className='py-4 px-2'>
      <section className='max-w-4xl mx-auto mb-10 text-center'>
        <div className='inline-flex items-center justify-center rounded-full bg-slate-900 text-slate-50 px-5 py-2 shadow-sm'>
          <span className='text-2xl sm:text-3xl font-semibold tracking-tight'>
            Enter
          </span>
        </div>
      </section>
      <section className='mx-auto max-w-full lg:max-w-6xl'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-xl font-semibold text-slate-900'>Lista de Productos</h2>
        </div>
        <div className='overflow-x-auto'>
          <TableData records={records} />
        </div>
      </section>
    </main>
  )
}
