import Image from 'next/image'

export default function Servicios() {
  return (
    <div className='w-full'>
      {/* Hero */}
      <section className='relative w-full h-[280px] md:h-[570px] overflow-hidden'>
        <Image
          src='/icon/servicios-img.png'
          alt='Servicios'
          fill
          priority
          className='object-cover'
        />

        <div className='absolute inset-0 bg-black/45' />

        <div className='absolute inset-0 flex items-center justify-center px-6 text-center'>
          <div className='max-w-3xl text-white'>
            <h1 className='text-4xl md:text-6xl font-bold'>
              Soporte y mantenimiento tecnológico
            </h1>

            <p className='mt-4 text-base md:text-xl text-white/90'>
              Soluciones profesionales para mantener tus equipos y tu empresa funcionando sin interrupciones.
            </p>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className='max-w-6xl mx-auto px-6 py-16'>
        <div className='max-w-4xl'>
          <h2 className='text-3xl md:text-4xl font-bold text-zinc-900'>
            Soporte técnico profesional para empresas
          </h2>

          <p className='mt-6 text-zinc-600 leading-8'>
            En Comercial Tecnológica nos especializamos en brindar servicios profesionales de soporte técnico,
            mantenimiento preventivo y mantenimiento correctivo para computadores, portátiles, impresoras y equipos de red.
          </p>

          <p className='mt-4 text-zinc-600 leading-8'>
            Nuestro objetivo es que puedas enfocarte en tu negocio mientras nosotros nos encargamos de mantener
            tus equipos funcionando al 100%.
          </p>
        </div>

        {/* Servicios */}
        <div className='mt-14 grid md:grid-cols-2 gap-10'>
          <div className='bg-zinc-100 rounded-3xl p-8'>
            <h3 className='text-2xl font-semibold text-zinc-900'>
              Servicios que ofrecemos
            </h3>

            <ul className='mt-6 space-y-4 list-disc pl-6 text-zinc-700'>
              <li>Mantenimiento preventivo y limpieza profunda de equipos</li>
              <li>Reparación de fallas físicas y de software</li>
              <li>Diagnóstico y optimización del rendimiento</li>
              <li>Instalación y configuración de hardware y periféricos</li>
              <li>Soporte técnico remoto y presencial</li>
              <li>Gestión de redes y conectividad de impresión</li>
            </ul>
          </div>

          {/* Beneficios */}
          <div className='bg-zinc-100 rounded-3xl p-8'>
            <h3 className='text-2xl font-semibold text-zinc-900'>
              Beneficios de trabajar con nosotros
            </h3>

            <ul className='mt-6 space-y-4 list-disc pl-6 text-zinc-700'>
              <li>Atención rápida y profesional</li>
              <li>Técnicos con amplia experiencia</li>
              <li>Contratos mensuales, trimestrales o por evento</li>
              <li>Repuestos originales y garantía en todos los servicios</li>
              <li>Soporte remoto para resolver incidentes en tiempo récord</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}