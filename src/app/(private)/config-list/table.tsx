import Link from 'next/link'
import { EditDialog } from './edit-dialog'
import { Button } from '@/components/ui/button'
import { EllipsisVertical } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import number from '../../consts'

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
      <Table>
        <TableCaption>Lista de productos.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Referencia</TableHead>
            <TableHead>Marca</TableHead>
            <TableHead className='text-right'>Contacto</TableHead>
            <TableHead className='text-right'>WhatsApp</TableHead>
            <TableHead className='text-right'>Ajustes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map(record => (
            <TableRow key={record.id}>
              <TableCell className='font-medium text-[13px]'>{record.reference}</TableCell>
              <TableCell className='text-[13px]'>{record.brand}</TableCell>
              <TableCell className='text-right'>
                <Link
                  href={`tel:${contact.number}`}
                  target='_blank'
                  className='inline-flex items-center justify-center rounded-full border border-slate-300 px-2 py-1 text-[11px] text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors'
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
                  className='inline-flex items-center justify-center rounded-full bg-emerald-600 px-2 py-1 text-[11px] text-xs font-medium text-white hover:bg-emerald-700 transition-colors'
                  aria-label='Abrir chat de WhatsApp'
                >
                  WhatsApp
                </Link>
              </TableCell>
              <TableCell className='text-right'>
                <EditDialog
                  record={record}
                  trigger={
                    <Button
                      variant='ghost'
                      size='sm'
                      className='h-8 w-8 p-0'
                      aria-label={`Editar ${record.reference}`}
                    >
                      <EllipsisVertical />
                    </Button>
                  }
                />
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
    </>
  )
}