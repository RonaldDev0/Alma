import Link from 'next/link'
import Image from 'next/image'

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
  reference: string
  brand: string
  image: string
}

type IContact = {
  WhatsApp: string
  number: string
}

const contact: IContact = {
  WhatsApp: 'https://wa.me/573132006606',
  number: '3132006606'
}

const records: TRecord[] = [
  {
    reference: 'IM430',
    brand: 'Ricoh',
    image: 'IM430'
  },
  {
    reference: 'MP305',
    brand: 'Ricoh',
    image: 'MP305'
  },
  {
    reference: 'IM600',
    brand: 'Ricoh',
    image: 'IM600'
  }
]

function whatsappInitialMessage ({ reference, brand }: TRecord) {
  return encodeURIComponent(
    `Hola, vi la lista de productos y quiero más información sobre ${brand} ${reference}.`
  )
}

export function TableData() {
  return (
    <Table>
      <TableCaption>Lista de productos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>Referencia</TableHead>
          <TableHead>Marca</TableHead>
          {/* <TableHead>Imagen</TableHead> */}
          <TableHead className='text-right'>Contacto</TableHead>
          <TableHead className='text-right'>WhatsApp</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {records.map((record, index) => (
          <TableRow key={index}>
            <TableCell className='font-medium'>{record.reference}</TableCell>
            <TableCell>{record.brand}</TableCell>
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
                className='inline-flex items-center justify-center rounded-full border border-slate-300 px-3 py-1 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors'
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
                className='inline-flex items-center justify-center rounded-full bg-emerald-600 px-3 py-1 text-xs sm:text-sm font-medium text-white hover:bg-emerald-700 transition-colors'
                aria-label='Abrir chat de WhatsApp'
              >
                WhatsApp
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className='text-right'>$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  )
}

export default function List() {
  return (
    <main className='w-full min-h-screen bg-slate-50 py-16 px-6 lg:px-12'>
      <section className='max-w-4xl mx-auto mb-12 text-center'>
        <div className='inline-flex items-center justify-center rounded-full bg-slate-900 text-slate-50 px-5 py-2 shadow-sm'>
          <span className='text-2xl sm:text-3xl font-semibold tracking-tight'>
            Enter
          </span>
        </div>
      </section>
      <div className='max-w-4xl mx-auto overflow-x-auto'>
        <TableData />
      </div>
    </main>
  )
}
