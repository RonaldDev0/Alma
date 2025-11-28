/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState, useMemo, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { TableData, type TRecord } from './table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type IProps = {
  records: TRecord[]
}

export function Data({ records }: IProps) {
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
    const lowerInput = debouncedInput?.toLowerCase()
    const shouldFilterCategory = selectedCategory && selectedCategory !== 'category'
    
    return records.filter(record => {
      if (lowerInput) {
        const matchesInput = 
          record.reference.toLowerCase().includes(lowerInput) ||
          record.brand.toLowerCase().includes(lowerInput)
        
        if (!matchesInput) return false
      }
      
      if (shouldFilterCategory) {
        return record.family.trim() === selectedCategory
      }
      
      return true
    })
  }, [debouncedInput, selectedCategory, records])
  

  return (
    <>
      <div className='m-4 mb-12'>
        <Input
          placeholder='Buscar...'
          value={input}
          onChange={handleChange}
          className='mb-3'
        />
        <Select
          defaultValue='category'
          onValueChange={(category: any) => setCategory(category)}
        >
          <SelectTrigger className='w-[150px]'>
            <SelectValue placeholder='Categoria' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='category'>Categoria</SelectItem>
            <SelectItem value='REPUESTOS'>Repuestos</SelectItem>
            <SelectItem value='SUMINISTROS'>Suministros</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-xl font-semibold text-slate-900'>Lista de Productos</h2>
      </div>
      <TableData records={filteredData} />
    </>
  )
}
