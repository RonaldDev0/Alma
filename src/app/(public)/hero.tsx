import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import number from '../consts'

export default function Hero() {
  const message = 'Hola, vi la página y estoy interesado en agendar un servicio. ¿Podrías brindarme más información?'

  const ws = `https://wa.me/57${number}?text=${encodeURIComponent(message)}`

  const bannerTexts = [
    { text: 'Suministros', position: 'absolute top-2 left-2 md:top-4 md:left-6' },
    { text: 'Repuestos', position: 'absolute top-2 right-2 md:top-4 md:right-6' },
    { text: 'Toners', position: 'absolute bottom-2 left-2 md:bottom-4 md:left-6' },
    { text: 'Tintas', position: 'absolute bottom-2 right-2 md:bottom-4 md:right-6' }
  ]

  return (
    <section className='relative w-screen md:w-[98.9vw] h-[50vh] md:h-[70vh] min-h-[400px] md:min-h-[600px] mx-auto flex items-center justify-center overflow-hidden'>
      <Image
        src='/hero-1.jpg'
        alt='Servicio técnico de impresoras y computadores a domicilio en Bogotá - Enter CT'
        fill
        priority
        className='object-cover object-center'
      />

      <div className='absolute inset-0 z-0 pointer-events-none'>
        {bannerTexts.map(({ position, text }, index) => (
          <div key={index} className={position}>
            <span 
              className='text-white/40 text-2xl sm:text-3xl md:text-6xl lg:text-8xl font-black tracking-tight select-none block leading-none'
              style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
            >
              {text}
            </span>
          </div>
        ))}
      </div>

      <div className='absolute inset-0 bg-linear-to-b bg-black/45' />

      <div className='relative z-10 text-center text-white max-w-4xl mx-auto flex flex-col gap-4 md:gap-6 px-4 sm:px-6 md:px-8 py-8 md:pt-24 md:pb-0'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-tight drop-shadow-lg'>
          Mantenimiento y venta de impresoras y computadores para empresas y hogares
        </h1>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl opacity-90 leading-relaxed max-w-2xl mx-auto drop-shadow-md'>
          Despachamos a todo Colombia. Servicio técnico a domicilio en Bogotá, Chía, Cajicá, Funza, Madrid y Mosquera.
        </p>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-2'>
          <Link target='_blank' rel='noopener noreferrer' href={ws} className='w-full sm:w-auto'>
            <Button 
              size='lg'
              className='w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white text-sm md:text-base px-8 md:px-10 h-12 md:h-14 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold'
            >
              Agendar servicio
            </Button>
          </Link>
        </div>
        <div className='opacity-80 mt-4 md:mt-6 space-y-2 text-xs sm:text-sm md:text-base'>
          <p className='font-semibold'>Puntos de atención:</p>
          <div className='flex flex-col gap-1'>
            <p>Carrera 10 #20 - 39</p>
            <p>Carrera 29 #39 - 47</p>
          </div>
        </div>
      </div>
    </section>
  )
}
