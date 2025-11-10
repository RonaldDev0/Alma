'use client'

import { signup } from './actions'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { toast } from 'sonner'
import { useActionState, useEffect } from 'react'

export default function SignupPage() {
  const [state, formAction, isPending] = useActionState(signup, { success: false, error: null })

  useEffect(() => {
    if (state.success) {
      toast.success('Cuenta creada exitosamente 🎉', {
        description: 'revisa tu correo electrónico'
      })
    }
    if (state.error) toast.error(state.error)
  }, [state])

  return (
    <main className='w-full h-screen flex flex-col justify-center items-center'>
      <Card className='w-full max-w-sm'>
        <CardHeader className='text-center'>
          <div className='mb-2'>
            <h1 className='text-2xl font-bold text-primary'>Alma</h1>
          </div>
          <CardTitle>Crear una cuenta</CardTitle>
        </CardHeader>
        <form action={formAction} className='space-y-6'>
          <CardContent className='space-y-6'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Nombre de usuario</Label>
              <Input
                id='username'
                name='username'
                type='text'
                placeholder='u123'
                required
                defaultValue={state.values?.username}
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='m@example.com'
                required
                defaultValue={state.values?.email}
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='password'>Contraseña</Label>
              <Input
                id='password'
                name='password'
                type='password'
                required
                defaultValue={state.values?.password}
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='password'>Confirmar Contraseña</Label>
              <Input
                id='confirmPassword'
                name='confirmPassword'
                type='password'
                required
                defaultValue={state.values?.confirmPassword}
              />
            </div>
          </CardContent>

          <CardFooter className='flex flex-col gap-3'>
            <Button
              type='submit'
              className='w-full'
              disabled={isPending}
            >
              {isPending ? 'Creando...' : 'Regístrate'}
            </Button>
            <div className='w-full text-center text-sm opacity-70'>
              ¿Ya tienes una cuenta?{' '}
              <Link href='/login' className='underline-offset-4 hover:underline'>
                Iniciar sesión
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </main>
  )
}