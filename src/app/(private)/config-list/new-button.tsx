/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { createClient } from '@/lib/supabase/client'

export function NewButton() {
  const router = useRouter()
  const supabase = createClient()

  const [reference, setReference] = useState('')
  const [brand, setBrand] = useState('')
  const [selectedCategory, setCategory] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { error: insertError } = await supabase
        .from('product-list')
        .insert([
          {
            reference: reference.trim(),
            brand: brand.trim(),
            family: selectedCategory
          }
        ])

      if (insertError) {
        throw insertError
      }

      // Success: Reset form, close dialog, and refresh page
      setReference('')
      setBrand('')
      setIsOpen(false)
      setCategory('' as any)
      router.refresh() // Refresh the page to show the new record
    } catch (err) {
      console.error('Error inserting product:', err)
      setError(
        err instanceof Error
          ? err.message
          : 'Error al agregar el producto. Por favor intenta de nuevo.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    setReference('')
    setBrand('')
    setError(null)
    setIsOpen(false)
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button className='gap-2' variant='default'>
          <span>+</span>
          Agregar Producto
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='sm:max-w-[425px]'>
        <AlertDialogHeader>
          <AlertDialogTitle>Agregar nuevo producto</AlertDialogTitle>
          <AlertDialogDescription>
            Completa los campos para agregar un nuevo producto a la lista.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className='grid gap-4 py-4'>
          {error && (
            <div className='rounded-md bg-destructive/15 p-3 text-sm text-destructive'>
              {error}
            </div>
          )}
          <div className='grid gap-2'>
            <Label htmlFor='reference'>
              Referencia <span className='text-destructive'>*</span>
            </Label>
            <Input
              id='reference'
              placeholder='Ej: IM430, MP305'
              value={reference}
              onChange={e => {
                setReference(e.target.value)
                setError(null)
              }}
              disabled={isLoading}
              required
            />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='brand'>
              Marca <span className='text-destructive'>*</span>
            </Label>
            <Input
              id='brand'
              placeholder='Ej: Ricoh, Epson'
              value={brand}
              onChange={e => {
                setBrand(e.target.value)
                setError(null)
              }}
              disabled={isLoading}
              required
            />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='brand'>
              Familia <span className='text-destructive'>*</span>
            </Label>
            <Select
              value={selectedCategory}
              onValueChange={(category: any) => setCategory(category)}
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Ej: Repuestos, Suministros' />
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
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCancel} disabled={isLoading}>
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleSubmit}
            disabled={!reference.trim() || !brand.trim() || !selectedCategory || isLoading}
          >
            {isLoading ? 'Agregando...' : 'Agregar'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
