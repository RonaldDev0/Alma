import { Card, CardContent } from '@/components/ui/card'

type IData = {
  title: string
  text: string
}[]

const data: IData = [
  {
    title: 'Diagnóstico',
    text: 'Revisamos puestos de trabajo, red, sedes y prioridades operativas antes de proponer cualquier solución.'
  },
  {
    title: 'Diseño de solución',
    text: 'Definimos la solución adecuada y el alcance de venta, soporte o conectividad según el proyecto.'
  },
  {
    title: 'Implementación',
    text: 'Entregamos, instalamos, configuramos y dejamos el entorno listo para operar.'
  },
  {
    title: 'Seguimiento',
    text: 'Acompañamos la operación con soporte, mantenimiento y mejoras según necesidad.'
  }
]

export default function Data() {
  return (
    <section className='w-full py-20 px-6'>
      <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start'>
        
        {/* Left */}
        <div className='lg:sticky lg:top-24'>
          <span className='text-sm uppercase tracking-[0.2em] text-zinc-500'>
            Metodología
          </span>

          <h3 className='mt-4 text-4xl md:text-5xl font-bold leading-tight text-zinc-900'>
            Cómo aterrizamos cada solución y servicio en la práctica
          </h3>

          <p className='mt-6 text-lg leading-8 text-zinc-600 max-w-xl'>
            Cada proyecto pasa por un proceso estructurado de diagnóstico,
            planificación, implementación y acompañamiento para garantizar
            estabilidad operativa y resultados reales.
          </p>
        </div>

        {/* Right */}
        <div className='space-y-6'>
          {data.map(({ title, text }, index) => (
            <Card
              key={index}
              className='border-0 shadow-none bg-zinc-100 rounded-3xl'
            >
              <CardContent className='p-8'>
                <div className='flex gap-6 items-start'>
                  
                  {/* Number */}
                  <div className='min-w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center text-lg font-bold'>
                    0{index + 1}
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className='text-2xl font-semibold text-zinc-900'>
                      {title}
                    </h4>

                    <p className='mt-3 text-zinc-600 leading-7'>
                      {text}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}