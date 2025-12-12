import Image from 'next/image'
import Link from 'next/link'

export default function Whatsapp() {
  const phoneNumber = '573132006606'
  const message = 'Hola, vi la página y estoy interesado. ¿Podrías brindarme más información?'

  const ws = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`


  return (
    <Link
      href={ws}
      target='_blank'
      className='fixed z-50 bottom-10 right-4 w-[70px] h-[70px] rounded-full bg-white shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse border-2 border-green-500 hover:shadow-green-500/70'
    >
      <Image
        src='/ws.webp'
        width={70}
        height={70}
        alt='WhatsApp icon'
        className='rounded-full'
      />
      <span className='absolute inset-0 rounded-full animate-ping bg-green-400 opacity-20' />
    </Link>
  )
}