import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import number from '../consts'

export default function Hero() {
  const message = 'Hola, vi la página y estoy interesado en agendar un servicio. ¿Podrías brindarme más información?'

  const ws = `https://wa.me/57${number}?text=${encodeURIComponent(message)}`

  return (
    <section className='relative w-screen md:w-[98.9vw] h-[35vh] md:h-[60vh] mx-auto flex items-center justify-center overflow-hidden'>
      <Image
        src='/hero-1.jpg'
        alt='hero'
        fill
        priority
        className='object-cover object-center'
      />

      <div className='absolute inset-0 bg-black/45'>
        <div className='absolute top-4 left-4 md:top-6 md:left-8 flex flex-wrap gap-2 md:gap-3'>
          {['Suministros', 'Repuestos', 'Toners', 'Tintas'].map((item, index) => (
            <span
              key={index}
              className='inline-block px-3 md:px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs md:text-sm font-semibold shadow-lg hover:bg-white/20 transition-all duration-300'
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className='relative z-10 text-center text-white max-w-3xl flex flex-col gap-3 md:gap-4 px-4 mt-14'>
        <h1 className='text-2xl md:text-4xl font-bold'>
          Mantenimiento y venta de impresoras y computadores para empresas y hogares
        </h1>
        <span className='text-sm md:text-lg opacity-80'>
          Despachamos a todo Colombia. Servicio técnico a domicilio en Bogotá, Chía, Cajicá, Funza, Madrid y Mosquera.
        </span>
        <Link target='_blank' href={ws}>
          <Button className='bg-green-600 hover:bg-green-700 text-white text-sm md:text-base'>
            Agendar servicio
          </Button>
        </Link>
        <div className='opacity-75 mt-4 space-y-1'>
          <p className='text-xs md:text-sm'>Puntos de atencion:</p>
          <div className='flex flex-col gap-1 text-xs md:text-sm'>
            <p>Carrera 10 #20 - 39</p>
            <p>Carrera 29 #39 - 47</p>
          </div>
        </div>
      </div>
    </section>
  )
}
