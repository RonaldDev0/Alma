import Image from 'next/image'

export default function Hero() {
  return (
    <section className='relative w-screen md:w-[98.9vw] h-[50vh] md:h-[70vh] min-h-[400px] md:min-h-[600px] mx-auto flex items-center justify-center overflow-hidden'>
      <Image
        src='/hero-2.png'
        alt='Servicio técnico de impresoras y computadores a domicilio en Bogotá - Enter CT'
        fill
        priority
        className='object-cover object-top'
      />

      <div className='absolute inset-0 bg-black/40' />

      <div className='absolute inset-0 flex items-center justify-center px-6 text-center'>
          <div className='max-w-3xl text-white'>
            <h1 className='text-4xl md:text-6xl font-bold'>
              Expertos en
              <span className='pl-3 text-primary'>Soluciones Tecnológicas</span>
            </h1>

            <p className='mt-4 text-base md:text-xl text-white/90'>
              Soluciones profesionales para mantener tus equipos y tu empresa funcionando sin interrupciones.
            </p>
          </div>
        </div>
    </section>
  )
}