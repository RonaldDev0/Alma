import { CardInformation, type IData } from './card'

const data: IData[] = [
  {
    img: '/information/1.webp',
    title: 'Hogar',
    description: 'Reparación sin salir',
    keypoints: [
      {
        subtitle: 'Comodidad:',
        text: 'Mantenimiento de impresoras a domicilio.'
      },
      {
        subtitle: 'Rapidez:',
        text: 'Soluciones para tu impresora en casa.'
      },
      {
        subtitle: 'Confianza:',
        text: 'Reparación de impresoras a domicilio.'
      }
    ]
  },
  {
    img: '/information/2.webp',
    title: 'Locales Comerciales',
    description: 'Atención para Negocios',
    keypoints: [
      {
        subtitle: 'Disponibilidad:',
        text: 'Respuesta rápida para impresión comercial.'
      },
      {
        subtitle: 'Abastecimiento:',
        text: 'Suministros a tiempo para que tu negocio siga funcionando.'
      },
      {
        subtitle: 'Fiabilidad:',
        text: 'Mantenimiento de impresoras para un rendimiento óptimo.'
      }
    ]
  },
  {
    img: '/information/3.webp',
    title: 'Corporativo',
    description: 'Mantenimiento para Empresas',
    keypoints: [
      {
        subtitle: 'Eficiendia:',
        text: 'Mantenimiento de impresoras para un funcionamiento continuo.'
      },
      {
        subtitle: 'Suministros:',
        text: 'Tóner, cartuchos y piezas originales siempre.'
      },
      {
        subtitle: 'Atención:',
        text: 'para oficinas y empresas.'
      }
    ]
  }
]

export default function Information() {
  return (
    <section className='flex flex-col justify-center mt-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 space-y-8'>
      <h2 className="text-xl font-bold text-center md:text-left">
        Soluciones Integrales para Impresoras
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data.map(item => (
          <CardInformation
            key={item.img}
            item={item}
          />
        ))}
      </div>
    </section>
  )
}