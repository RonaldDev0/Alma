/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState, useMemo, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { TableData, type TRecord } from './table'

type IProps = {
  records: TRecord[]
}

export function Data({ records }: IProps) {
  const [input, setInput] = useState('')
  const [debouncedInput, setDebouncedInput] = useState('')

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
    if (!debouncedInput) return records
    const lowerInput = debouncedInput.toLowerCase()
    return records.filter(
      record =>
        record.reference.toLowerCase().includes(lowerInput) ||
        record.brand.toLowerCase().includes(lowerInput)
    )
  }, [debouncedInput, records])

  return (
    <>
      <div className='m-4 mb-12'>
        <Input
          placeholder='Buscar...'
          value={input}
          onChange={handleChange}
        />
      </div>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-xl font-semibold text-slate-900'>Lista de Productos</h2>
      </div>
      <TableData records={filteredData} />
    </>
  )
}
