import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  const phoneNumber = '573132006606'
  const message = 'Hola, vi la página y estoy interesado en agendar un servicio. ¿Podrías brindarme más información?'

  const ws = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <section className='relative w-screen md:w-[98.9vw] h-[35vh] md:h-[60vh] mx-auto flex items-center justify-center overflow-hidden'>
      <Image
        src='/hero-1.webp'
        alt='hero'
        fill
        priority
        className='object-cover object-center'
      />

      <div className='absolute inset-0 bg-black/45' />

      <div className='relative z-10 text-center text-white max-w-2xl flex flex-col gap-3 md:gap-4 px-4'>
        <h1 className='text-2xl md:text-4xl font-bold'>
          Mantenimiento de impresoras para Empresas y Hogar
        </h1>
        <span className='text-sm md:text-lg'>
          Atendemos en Bogotá, Cali, Palmira, Medellín, Pereira y Dosquebradas.
        </span>
        <Link target='_blank' href={ws}>
          <Button className='bg-green-600 hover:bg-green-700 text-white text-sm md:text-base'>
            Agendar servicio
          </Button>
        </Link>
      </div>
    </section>

  )
}
