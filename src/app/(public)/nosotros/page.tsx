import Image from 'next/image'

export default function Nosotros() {
  return (
    <div className='w-full'>
      {/* Hero */}
      <section className='relative w-full h-70 md:h-150 overflow-hidden'>
        <Image
          src='/icon/nosotros-img.png'
          alt='Quiénes Somos'
          fill
          priority
          className='object-cover'
        />
        <div className='absolute inset-0 bg-black/45' />
      </section>

      {/* Contenido */}
      <section className='max-w-6xl mx-auto px-6 py-14'>
        <div className='grid gap-12 md:grid-cols-[220px_1fr]'>
          <div className='flex items-center'>
            <h2 className='text-2xl md:text-3xl font-bold text-primary whitespace-nowrap'>
              Quiénes somos
            </h2>
          </div>

          <div className='space-y-5 text-muted-foreground leading-7 text-base md:text-lg'>
            <p>
              Somos una empresa especializada en servicio técnico,
              mantenimiento, venta de suministros para impresoras.
              Contamos con experiencia brindando soluciones tecnológicas
              confiables para hogares, negocios, empresas.
            </p>
            <p>
              Nos enfocamos en ofrecer un servicio rápido, eficiente, de
              calidad, trabajando con personal técnico capacitado,
              utilizando suministros, repuestos de las mejores marcas del
              mercado.
            </p>
            <p>
              Atendemos servicios a domicilio en Bogotá, Chía, Cajicá,
              Funza, Madrid, Mosquera. También realizamos despachos a
              nivel nacional, garantizando acompañamiento, soporte
              oportuno para cada cliente.
            </p>
            <p>
              En Comercial Tecnológica trabajamos con compromiso,
              confianza, responsabilidad para mantener sus equipos
              funcionando de manera óptima, asegurar la continuidad de
              sus actividades diarias.
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}