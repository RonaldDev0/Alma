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
import number from '../../consts'

export type TRecord = {
  id: number
  reference: string
  brand: string
  stock: number
  family: 'SUMINISTROS' | 'REPUESTOS'
  animation?: 'add' | 'update' | 'delete'
}

type IContact = {
  WhatsApp: string
  number: string
}

const contact: IContact = {
  WhatsApp: 'https://wa.me/57' + number,
  number
}

function whatsappInitialMessage({ reference, brand }: TRecord) {
  return encodeURIComponent(
    `Hola, vi la lista de productos y quiero más información sobre ${brand} ${reference}.`
  )
}

export function TableData({ records }: { records: TRecord[] }) {
  return (
    <>
      <style jsx global>{`
        @keyframes slideInFromRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes pulseGreen {
          0%, 100% {
            background-color: transparent;
          }
          50% {
            background-color: rgba(34, 197, 94, 0.2);
          }
        }

        @keyframes pulseBlue {
          0%, 100% {
            background-color: transparent;
          }
          50% {
            background-color: rgba(59, 130, 246, 0.2);
          }
        }

        @keyframes slideOutToLeft {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        .row-add {
          animation: slideInFromRight 0.5s ease-out, pulseGreen 0.6s ease-in-out;
        }

        .row-update {
          animation: pulseBlue 0.6s ease-in-out;
        }

        .row-delete {
          animation: slideOutToLeft 0.5s ease-in forwards;
        }
      `}</style>

      <Table>
        <TableCaption>Lista de productos y servicios.</TableCaption>
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
            <TableRow
              key={record.id}
              className={
                record.animation === 'add'
                  ? 'row-add'
                  : record.animation === 'update'
                  ? 'row-update'
                  : record.animation === 'delete'
                  ? 'row-delete'
                  : ''
              }
            >
              <TableCell className='font-medium'>
                <p className='text-[12px] sm:text-[13px] leading-snug whitespace-normal wrap-break-word max-w-[220px] sm:max-w-none'>
                  {record.reference}
                </p>
                <p className='text-xs text-slate-500 sm:hidden mt-1'>{record.brand}</p>
              </TableCell>
              <TableCell className='hidden sm:table-cell text-[13px]'>{record.brand}</TableCell>
              <TableCell className='text-right align-middle hidden sm:table-cell'>
                <Link
                  href={`tel:${contact.number}`}
                  target='_blank'
                  className='inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-slate-300 px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors'
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
                      className='inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-slate-300 px-2 py-1 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors'
                      aria-label={`Llamar al número ${contact.number}`}
                    >
                      Contactar
                    </p>
                  }
                />
              </TableCell>
              <TableCell className='text-right align-middle hidden sm:table-cell'>
                <Link
                  href={`${contact.WhatsApp}?text=${whatsappInitialMessage(record)}`}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-emerald-600 px-2 py-1 text-xs font-medium text-white hover:bg-emerald-700 transition-colors'
                  aria-label='Abrir chat de WhatsApp'
                >
                  WhatsApp
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}