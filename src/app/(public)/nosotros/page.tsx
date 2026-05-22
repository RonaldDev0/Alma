import Image from 'next/image'

export default function Nosotros() {
  return (
    <div className='w-full'>
      {/* Hero */}
      <section className='relative w-full h-[280px] md:h-[380px] overflow-hidden'>
        <Image
          src='/icon/nosotros-img.png'
          alt='Quiénes Somos'
          fill
          priority
          className='object-cover'
        />

        {/* Overlay opcional para mejorar lectura */}
        <div className='absolute inset-0 bg-black/40' />

        <div className='relative z-10 flex h-full items-center justify-center px-6 text-center'>
          <h1 className='text-3xl md:text-5xl font-bold text-white'>
            Quiénes Somos
          </h1>
        </div>
      </section>

      {/* Contenido */}
      <section className='max-w-6xl mx-auto px-6 py-14'>
        <div className='grid gap-8 md:grid-cols-[220px_1fr]'>
          <div>
            <h2 className='text-2xl md:text-3xl font-bold text-primary'>
              Comercial Tecnológica
            </h2>
          </div>

          <div className='space-y-5 text-muted-foreground leading-7 text-base md:text-lg'>
            <p>
              Somos una empresa especializada en servicio técnico,
              mantenimiento y venta de suministros para impresoras.
              Contamos con experiencia brindando soluciones tecnológicas
              confiables para hogares, negocios y empresas.
            </p>

            <p>
              Nos enfocamos en ofrecer un servicio rápido, eficiente y de
              calidad, trabajando con personal técnico capacitado y
              utilizando suministros y repuestos de las mejores marcas del
              mercado.
            </p>

            <p>
              Atendemos servicios a domicilio en Bogotá, Chía, Cajicá,
              Funza, Madrid y Mosquera, además de realizar despachos a
              nivel nacional, garantizando acompañamiento y soporte
              oportuno para cada cliente.
            </p>

            <p>
              En Comercial Tecnológica trabajamos con compromiso,
              confianza y responsabilidad para mantener sus equipos
              funcionando de manera óptima y asegurar la continuidad de
              sus actividades diarias.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}