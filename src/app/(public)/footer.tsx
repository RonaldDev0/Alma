import Image from 'next/image'
import Link from 'next/link'
import number from '@/app/consts'
import { type LucideIcon, MapPin, Phone, Mail } from 'lucide-react'


type IData = {
  category: string
  data: {
    label: string
    href: string
    icon?: LucideIcon
    content?: string[]
  }[]
}[]

const data: IData = [
  {
    category: 'Enlaces Rapidos',
    data: [
      {
        label: 'Inicio',
        href: '/'
      },
      {
        label: 'Nosotros',
        href: '/nosotros'
      },
      {
        label: 'Servicios',
        href: '/servicios'
      },
      {
        label: 'Productos',
        href: '/list'
      },
      {
        label: 'Privacidad',
        href: '/privacy'
      },
      {
        label: 'Contacto',
        href: `https://wa.me/57${number}?text=Hola%2C%20vi%20la%20p%C3%A1gina%20y%20estoy%20interesado.%20%C2%BFPodr%C3%ADas%20brindarme%20m%C3%A1s%20informaci%C3%B3n%3F`
      }
    ]
  },
  {
    category: 'Productos',
    data: [
      {
        label: 'Catálogo de Toners, Tintas y Repuestos',
        href: '/list'
      }
    ]
  },
  {
    category: 'Servicios',
    data: [
      {
        label: 'Soporte técnico',
        href: `https://wa.me/57${number}?text=Hola%2C%20vi%20la%20p%C3%A1gina%20y%20estoy%20interesado.%20%C2%BFPodr%C3%ADas%20brindarme%20m%C3%A1s%20informaci%C3%B3n%3F`
      }
    ]
  },
  {
    category: 'Contacto',
    data: [
      {
        label: 'Bogotá, Colombia',
        href: 'https://maps.app.goo.gl/5WfBQsAgNGmxo8Z28',
        content: [
          'Carrera 10 #20 - 39 local #237',
          'Carrera 29 #39 - 47 La Soledad'
        ],
        icon: MapPin
      },
      {
        label: '318 388 5238',
        href: `tel:${number}`,
        icon: Phone
      },
      {
        label: 'ventas@enterct.com',
        href: 'mailto:ventas@enterct.com',
        icon: Mail
      },
      {
        label: 'soporte@enterct.com',
        href: 'mailto:soporte@enterct.com',
        icon: Mail
      }
    ]
  }
]

export default function Footer() {
  return (
    <footer className='relative w-screen md:w-[98.9vw] min-h-screen md:min-h-[600px] mx-auto mt-16 pt-28 flex justify-center'>

      {/* Background */}
      <Image
        src='/icon/footer-img.png'
        fill
        alt='footer img'
        className='object-cover object-top'
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-primary/70' />

      {/* CONTENT (NO ABSOLUTE) */}
      <div className='relative z-10 flex flex-col md:flex-row items-start text-white gap-10 2xl:gap-30 px-6 w-full'>

        {/* Logo */}
        <div className='shrink-0'>
          <Image
            src='/new-icon.png'
            width={250}
            height={100}
            alt='logo'
            className='brightness-0 invert saturate-0'
          />
        </div>

        {/* Links */}
        <div className='flex flex-col md:flex-row flex-wrap gap-10 2xl:gap-28 w-full'>

          {data.map(item => (
            <div key={item.category} className='flex flex-col gap-4 min-w-[160px]'>
              <p className='font-semibold text-lg'>
                {item.category}
              </p>

              <div className='flex flex-col gap-6'>
                {item.data.map(link => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className='flex gap-3'
                  >
                    {link.icon && <link.icon className='w-5 h-5 shrink-0' />}

                    <div className='flex flex-col gap-1'>
                      <p className='text-sm md:text-base max-w-40'>
                        {link.label}
                      </p>

                      {link.content && link.content.map(c => (
                        <p key={c} className='text-xs md:text-sm opacity-80'>
                          {c}
                        </p>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </footer>
  )
}