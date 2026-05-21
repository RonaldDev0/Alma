import Link from 'next/link'
import Image from 'next/image'

type Iicon = {
  icon: string
  href: string
}

const icons: Iicon[] = [
  {
    icon: '/icon/facebook.png',
    href: 'https://www.facebook.com/profile.php?id=61587720706843'
  },
  {
    icon: '/icon/instagram.png',
    href: 'https://www.instagram.com/enter.ct0/'
  },
  {
    icon: '/icon/linkedin.png',
    href: 'https://www.linkedin.com/in/comercial-tecnol%C3%B3gica-5216b2410/'
  },
  {
    icon: '/icon/tik-tok.png',
    href: 'https://www.tiktok.com/@enterct'
  }
]

export default function Social() {
  return (
    <section className='mx-auto pt-24 px-4 sm:px-6 md:px-8 space-y-8 text-center flex flex-col items-center max-w-xl '>
      <h2 className='text-primary font-extrabold text-3xl'>Redes sociales</h2>
      <p>Conoce tips, servicios técnicos y recomendaciones para mantener tus equipos en perfecto estado.</p>
      <div className='flex gap-4'>
        {icons.map(({ icon, href }) => (
          <Link
            key={href}
            href={href}
          >
            <Image
              src={icon}
              width={50}
              height={50}
              alt='icon'
            />
          </Link>
        ))}
      </div>
    </section>
  )
}