import { CardInformation, type IData } from './card'

const data: IData[] = [
  {
    img: '',
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
    img: '',
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
    img: '',
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
    <section className='flex flex-col justify-center mt-16 px-72 space-y-8'>
      <h2 className='text-xl font-bold'>Soluciones Integrales para Impresoras</h2>
      <div className='flex justify-between gap-8'>
        {data.map((item, index) =>
          <CardInformation key={index} item={item} />
        )}
      </div>
    </section>
  )
}