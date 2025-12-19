/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState, useMemo, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { TableData, type TRecord } from '@/app/(public)/list/table'
import { TableData as TableDataConfig } from '@/app/(private)/config-list/table'
import { NewButton } from '@/app/(private)/config-list/new-button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Search, X, Filter } from 'lucide-react'

type IProps = {
  records: TRecord[]
  isConfig?: boolean
}

export function Data({ records, isConfig = false }: IProps) {
  const [input, setInput] = useState('')
  const [debouncedInput, setDebouncedInput] = useState('')
  const [selectedCategory, setCategory] = useState()

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInput(input)
    }, 300)

    return () => clearTimeout(handler)
  }, [input])

  const handleChange = ({ target: { value } }: any) => {
    setInput(value)
  }

  const filteredData = useMemo(() => {
    const lowerInput = debouncedInput?.trim().toLowerCase()
    const shouldFilterCategory = selectedCategory && selectedCategory !== 'category'

    return records.filter(record => {
      if (lowerInput) {
        const matchesInput =
          record.reference.toLowerCase().includes(lowerInput) ||
          record.brand.toLowerCase().includes(lowerInput)

        if (!matchesInput) return false
      }

      if (shouldFilterCategory) {
        return (record.family ?? '').trim() === selectedCategory
      }

      return true
    })
  }, [debouncedInput, selectedCategory, records])


  return (
    <>
      <div className='m-4 mb-12'>
        <div className='flex flex-col sm:flex-row gap-3 items-stretch sm:items-center'>
          <div className='relative flex-1'>
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground' />
            <Input
              placeholder='Buscar por referencia o marca...'
              value={input}
              onChange={handleChange}
              className={`pl-9 ${input && 'pr-9'}`}
            />
            {input && (
              <button
                onClick={() => setInput('')}
                className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground'
              >
                <X className='h-4 w-4' />
              </button>
            )}
          </div>
          <div className='flex items-center gap-2'>
            <Select
              value={selectedCategory || 'category'}
              onValueChange={(category: any) => setCategory(category)}
            >
              <SelectTrigger className='w-[160px]'>
                <Filter className='h-4 w-4 mr-2' />
                <SelectValue placeholder='Categoría' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='ACCESORIOS'>Accesorios</SelectItem>
                <SelectItem value='COMUNICACION'>Comunicación</SelectItem>
                <SelectItem value='COMPUTADOR'>Computador</SelectItem>
                <SelectItem value='IMPRESORA'>Impresora</SelectItem>
                <SelectItem value='REPUESTOS'>Repuestos</SelectItem>
                <SelectItem value='SUMINISTROS'>Suministros</SelectItem>
                <SelectItem value='OTROS'>Otros</SelectItem>
              </SelectContent>
            </Select>
            {(input || (selectedCategory && selectedCategory !== 'category')) && (
              <button
                onClick={() => {
                  setInput('')
                  setCategory('category' as any)
                }}
                className='text-sm text-muted-foreground hover:text-foreground underline'
              >
                Limpiar
              </button>
            )}
          </div>
        </div>
        <div className='mt-3 text-sm text-muted-foreground'>
          {filteredData.length} resultado{filteredData.length !== 1 ? 's' : ''} encontrado{filteredData.length !== 1 ? 's' : ''}
        </div>
      </div>
      {isConfig ? <>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-xl font-semibold text-slate-900'>Lista de Productos y Servicios</h2>
          <NewButton />
        </div>
        <TableDataConfig records={filteredData} />
      </> : <>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-xl font-semibold text-slate-900'>Lista de Productos y Servicios</h2>
        </div>
        <TableData records={filteredData} />
      </>}
    </>
  )
}
