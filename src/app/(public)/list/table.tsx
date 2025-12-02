import Link from 'next/link'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { ContactDialog } from './contact-dialog'

export type TRecord = {
  id: number
  reference: string
  brand: string
  stock: number
  family: 'SUMINISTROS' | 'REPUESTOS'
}

type IContact = {
  WhatsApp: string
  number: string
}


const contact: IContact = {
  WhatsApp: 'https://wa.me/573132006606',
  number: '3132006606'
}

function whatsappInitialMessage({ reference, brand }: TRecord) {
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
          <TableHead className='text-right'>Contacto</TableHead>
          <TableHead className='text-right hidden sm:table-cell'>WhatsApp</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {records.map(record => (
          <TableRow key={record.id}>
            <TableCell className='font-medium'>
              <p className='text-sm sm:text-base leading-snug whitespace-normal wrap-break-word max-w-[220px] sm:max-w-none'>
                {record.reference}
              </p>
              <p className='text-xs text-slate-500 sm:hidden mt-1'>{record.brand}</p>
            </TableCell>
            <TableCell className='hidden sm:table-cell'>{record.brand}</TableCell>
            <TableCell className='text-right align-middle hidden sm:table-cell'>
              <Link
                href={`tel:${contact.number}`}
                target='_blank'
                className='inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-slate-300 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors'
                aria-label={`Llamar al número ${contact.number}`}
              >
                Llamar
              </Link>
            </TableCell>
            <TableCell className='text-right align-middle sm:hidden'>
              <ContactDialog
                whatsappInitialMessage={whatsappInitialMessage(record)}
                contact={contact}
                trigger={
                  <p
                    className='inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-slate-300 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors'
                    aria-label={`Llamar al número ${contact.number}`}
                  >
                    Contactar
                  </p>
                } />
            </TableCell>
            <TableCell className='text-right align-middle hidden sm:table-cell'>
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