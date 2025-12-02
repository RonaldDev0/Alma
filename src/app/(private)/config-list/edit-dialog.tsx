'use client'

import { useState, useEffect } from 'react'
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
import { createClient } from '@/lib/supabase/client'
import type { TRecord } from './table'
import type { ReactNode } from 'react'

type EditDialogProps = {
  record: TRecord
  trigger: ReactNode
}

export function EditDialog({ record, trigger }: EditDialogProps) {
  const router = useRouter()
  const supabase = createClient()

  const [reference, setReference] = useState(record.reference)
  const [brand, setBrand] = useState(record.brand)
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Update form values when record changes
  useEffect(() => {
    setReference(record.reference)
    setBrand(record.brand)
  }, [record])

  const handleSubmit = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { error: updateError } = await supabase
        .from('product-list')
        .update({
          reference: reference.trim(),
          brand: brand.trim()
        })
        .eq('id', record.id)

      if (updateError) {
        throw updateError
      }

      // Success: Close dialog and refresh page
      setIsOpen(false)
      router.refresh()
    } catch (err) {
      console.error('Error updating product:', err)
      setError(
        err instanceof Error
          ? err.message
          : 'Error al actualizar el producto. Por favor intenta de nuevo.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    // Reset to original values
    setReference(record.reference)
    setBrand(record.brand)
    setError(null)
    setIsOpen(false)
  }

  const handleDelete = async () => {
    setIsDeleting(true)
    setError(null)

    try {
      const { error: deleteError } = await supabase
        .from('product-list')
        .delete()
        .eq('id', record.id)

      if (deleteError) {
        throw deleteError
      }

      // Success: Close dialogs and refresh page
      setShowDeleteConfirm(false)
      setIsOpen(false)
      router.refresh()
    } catch (err) {
      console.error('Error deleting product:', err)
      setError(
        err instanceof Error
          ? err.message
          : 'Error al eliminar el producto. Por favor intenta de nuevo.'
      )
      setIsDeleting(false)
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent className='sm:max-w-[425px]'>
        <AlertDialogHeader>
          <AlertDialogTitle>Editar producto</AlertDialogTitle>
          <AlertDialogDescription>
            Modifica los campos que deseas actualizar del producto.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className='grid gap-4 py-4'>
          {error && (
            <div className='rounded-md bg-destructive/15 p-3 text-sm text-destructive'>
              {error}
            </div>
          )}
          <div className='grid gap-2'>
            <Label htmlFor={`edit-reference-${record.id}`}>
              Referencia <span className='text-destructive'>*</span>
            </Label>
            <Input
              id={`edit-reference-${record.id}`}
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
            <Label htmlFor={`edit-brand-${record.id}`}>
              Marca <span className='text-destructive'>*</span>
            </Label>
            <Input
              id={`edit-brand-${record.id}`}
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
        </div>
        <AlertDialogFooter className='flex-col sm:flex-row gap-2'>
          <div className='flex-1'>
            <Button
              type='button'
              variant='destructive'
              onClick={() => setShowDeleteConfirm(true)}
              disabled={isLoading || isDeleting}
              className='w-full sm:w-auto'
            >
              Eliminar
            </Button>
          </div>
          <div className='flex gap-2'>
            <AlertDialogCancel onClick={handleCancel} disabled={isLoading || isDeleting}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleSubmit}
              disabled={!reference.trim() || !brand.trim() || isLoading || isDeleting}
            >
              {isLoading ? 'Guardando...' : 'Guardar cambios'}
            </AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <AlertDialogContent className='sm:max-w-[425px]'>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar producto?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. Se eliminará permanentemente el producto{' '}
              <span className='font-semibold'>{record.reference}</span> de{' '}
              <span className='font-semibold'>{record.brand}</span>.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className='grid gap-4 py-4'>
            {error && (
              <div className='rounded-md bg-destructive/15 p-3 text-sm text-destructive'>
                {error}
              </div>
            )}
          </div>
          <AlertDialogFooter className='flex-col sm:flex-row gap-2'>
            <div className='flex-1' />
            <div className='flex gap-2'>
              <Button
                type='button'
                variant='outline'
                onClick={() => {
                  setShowDeleteConfirm(false)
                  setError(null)
                }}
                disabled={isDeleting}
              >
                Cancelar
              </Button>
              <Button
                type='button'
                variant='destructive'
                onClick={handleDelete}
                disabled={isDeleting}
              >
                {isDeleting ? 'Eliminando...' : 'Eliminar'}
              </Button>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AlertDialog>
  )
}
