import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <main className='w-full h-screen flex flex-col justify-center items-center gap-6'>
      <div className='text-center space-y-4'>
        <h1 className='text-4xl font-bold text-primary'>404</h1>
        <h2 className='text-2xl font-semibold'>Página no encontrada</h2>
        <p className='text-muted-foreground max-w-md'>
          Lo sentimos, la página que busca no existe o ha sido movida.
        </p>
      </div>

      <div className='flex flex-col sm:flex-row gap-3'>
        <Button asChild>
          <Link href='/home'>Ir al inicio</Link>
        </Button>
        <Button variant='outline' asChild>
          <Link href='/login'>Iniciar sesión</Link>
        </Button>
      </div>
    </main>
  )
}