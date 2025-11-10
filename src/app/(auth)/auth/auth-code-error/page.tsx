'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function AuthCodeErrorPage() {
  return (
    <main className='w-full h-screen flex flex-col justify-center items-center'>
      <Card className='w-full max-w-sm'>
        <CardHeader className='text-center'>
          <CardTitle className='text-red-600'>Error de código de autenticación</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-center text-muted-foreground'>
            Se produjo un error al procesar el código de autenticación. Esto suele ocurrir cuando el código ha caducado o no es válido.
          </p>
          <div className='flex flex-col gap-2'>
            <Button asChild className='w-full'>
              <Link href='/login'>Intentar otra vez</Link>
            </Button>
            <Button variant='outline' asChild className='w-full'>
              <Link href='/'>Ir al inicio</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}