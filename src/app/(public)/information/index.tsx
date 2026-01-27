import { CardInformation, type IData } from './card'

const data: IData[] = [
  {
    img: '/information/1.webp',
    title: 'Hogar',
    description: 'Reparación sin salir',
    keypoints: [
      {
        subtitle: 'Comodidad:',
        text: 'Instalacion de software y mantenimiento de impresoras y computadores a domicilio.'
      },
      {
        subtitle: 'Rapidez:',
        text: 'Soluciones de equipos tecnologicos para su impresora en casa.'
      },
      {
        subtitle: 'Confianza:',
        text: 'Reparación de impresoras a domicilio 100% confiable tecnicos especializados'
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
        text: 'Respuesta rápida, tecnicos disponibles.'
      },
      {
        subtitle: 'Abastecimiento:',
        text: 'Suministro de tintas y toners a domicilio para que su negocio siga funcionando.'
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
        subtitle: 'Eficiencia:',
        text: 'Mantenimiento de impresoras y computadores eficiente y con caragantia.'
      },
      {
        subtitle: 'Suministros:',
        text: 'Suministro de toner, cartuchos y repuestos originales con garantia.'
      },
      {
        subtitle: 'Atención:',
        text: 'Para oficinas y empresas en horario habil.'
      }
    ]
  }
]

export default function Information() {
  return (
    <section className='flex flex-col justify-center mt-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 space-y-8'>
      <h2 className="text-xl font-bold text-center md:text-left">
        Soluciones Integrales para Computadores e Impresoras
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