import { EditDialog } from './edit-dialog'
import { Button } from '@/components/ui/button'
import { Settings } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

export type TRecord = {
  id: number
  reference: string
  brand: string
  stock: number
  family: string
}

export function TableData({ records }: { records: TRecord[] }) {
  return (
    <>
      <Table>
        <TableCaption>Lista de productos.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[40%]'>Referencia</TableHead>
            <TableHead className='w-[25%]'>Marca</TableHead>
            <TableHead className='w-[25%]'>Familia</TableHead>
            <TableHead className='text-right w-[10%]'>Ajustes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map(record => (
            <TableRow key={record.id}>
              <TableCell className='font-medium text-[13px] px-2'>{record.reference}</TableCell>
              <TableCell className='text-[13px] px-2'>{record.brand}</TableCell>
              <TableCell className='text-[13px] px-2'>{record.family}</TableCell>
              <TableCell className='text-right px-2'>
                <EditDialog
                  record={record}
                  trigger={
                    <Button
                      variant='ghost'
                      size='sm'
                      className='p-0'
                      aria-label={`Editar ${record.reference}`}
                    >
                      <Settings />
                    </Button>
                  }
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}