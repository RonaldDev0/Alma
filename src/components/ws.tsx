import Link from 'next/link'
import Image from 'next/image'
import number from '@/app/consts'

export default function Ws() {
  return (
    <Link
      target='_blank'
      rel='noopener noreferrer'
      href={`https://wa.me/57${number}?text=Hola%2C%20vi%20la%20p%C3%A1gina%20y%20estoy%20interesado.%20%C2%BFPodr%C3%ADas%20brindarme%20m%C3%A1s%20informaci%C3%B3n%3F`}
      className='flex gap-8 items-center fixed z-50 bottom-4 left-4'
    >
      <Image
        src='/icon/whatsapp.png'
        width={80}
        height={80}
        alt='ws-icon'
        className=''
      />
      <p className='bg-green-700/90 text-white p-2 rounded-xl hidden md:block'>
        Asesoría para compra inmediata
      </p>
    </Link>
  )
}
