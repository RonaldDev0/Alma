import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className='relative w-screen md:w-[98.9vw] h-[50vh] md:h-[70vh] min-h-[400px] md:min-h-[600px] mx-auto flex items-center justify-center overflow-hidden'>
      <Image
        src='/hero-1.jpg'
        alt='Servicio técnico de impresoras y computadores a domicilio en Bogotá - Enter CT'
        fill
        priority
        className='object-cover object-center'
      />

      <div className='absolute inset-0 bg-linear-to-b from-black/45 to-black/45' />

      <div className='absolute z-10 flex flex-col md:flex-row items-center text-center text-white gap-8 md:gap-44 px-6'>
        <div className='flex flex-col gap-6'>
          <h1 className='text-2xl md:text-3xl font-bold max-w-96'>
            Expertos en impresoras y soluciones tecnológicas
          </h1>

          <p className='text-base md:text-xl max-w-96 opacity-90'>
            Impulsamos tu productividad con soporte técnico, suministros y soluciones tecnológicas
          </p>
        </div>

        <Link
          href='/products'
          className='flex flex-col items-center gap-2 hover:scale-105 transition-transform'
        >
          <p className='text-lg md:text-xl'>Productos</p>

          <Image
            src='/icon/operaciones.png'
            width={110}
            height={110}
            alt='Productos icon'
            className='invert w-[80px] h-[80px] md:w-[110px] md:h-[110px]'
          />
        </Link>

        <Link
          href='/services'
          className='flex flex-col items-center gap-2 hover:scale-105 transition-transform'
        >
          <p className='text-lg md:text-xl'>Servicios</p>

          <Image
            src='/icon/servicio.png'
            width={110}
            height={110}
            alt='Servicios icon'
            className='invert w-[80px] h-[80px] md:w-[110px] md:h-[110px]'
          />
        </Link>
      </div>
    </section>
  )
}