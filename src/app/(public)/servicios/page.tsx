import Image from 'next/image'

export default function Servicios() {
  return (
    <div className='w-full'>
      {/* Hero */}
      <section className='relative w-full h-[280px] md:h-[690px] overflow-hidden'>
        <Image
          src='/icon/servicios-img.png'
          alt='Quiénes Somos'
          fill
          priority
          className='object-cover'
        />
      </section>

      {/* Contenido */}

    </div>
  )
}