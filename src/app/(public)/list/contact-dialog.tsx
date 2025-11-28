'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'

import type { ReactNode } from 'react'

type EditDialogProps = {
  trigger: ReactNode,
  whatsappInitialMessage: string,
  contact: {
    WhatsApp: string
    number: string
  }
}

export function ContactDialog({ contact, whatsappInitialMessage, trigger }: EditDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent className='sm:max-w-[425px]'>
        <AlertDialogHeader>
          <AlertDialogTitle>Contactar</AlertDialogTitle>
          <AlertDialogDescription>
            Elige cómo deseas contactarnos.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className='grid gap-4 py-4'>
          <Link
            href={`${contact.WhatsApp}?text=${whatsappInitialMessage}`}
            target='_blank'
            rel='noreferrer'
            className='inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-emerald-600 px-4 py-3 text-sm font-medium text-white hover:bg-emerald-700 transition-colors'
            aria-label='Abrir chat de WhatsApp'
          >
            WhatsApp
          </Link>

          <Link
            href={`tel:${contact.number}`}
            target='_blank'
            className='inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors'
            aria-label={`Llamar al número ${contact.number}`}
          >
            Llamar
          </Link>
        </div>

        <AlertDialogFooter className='flex-col sm:flex-row gap-2'>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            Cancelar
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
