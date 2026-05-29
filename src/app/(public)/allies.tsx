import Image from 'next/image'

interface Ally {
  src: string
  name: string
  width: number
}

const allies: Ally[] = [
  { src: '/allies/apple.png',     name: 'Apple',     width: 130 },
  { src: '/allies/epson.png',     name: 'Epson',     width: 200 },
  { src: '/allies/hp.png',        name: 'HP',        width: 100 },
  { src: '/allies/lenovo.png',    name: 'Lenovo',    width: 200 },
  { src: '/allies/microsoft2.png', name: 'Microsoft', width: 220 },
  { src: '/allies/ricoh.png',     name: 'Ricoh',     width: 180 },
  { src: '/allies/toshiba.png',   name: 'Toshiba',   width: 200 },
  { src: '/allies/zebra.png',     name: 'Zebra',     width: 180 },
]

const LOGO_HEIGHT = 80

const duplicatedAllies = Array.from(
  { length: allies.length * 5 },
  (_, i) => allies[i % allies.length]
)

export default function Allies() {
  return (
    <section
      className='space-y-8 py-16 bg-linear-to-b from-background to-muted dark:to-muted/20'
      aria-labelledby='allies-heading'
    >
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center space-y-4'>
          <h2
            id='allies-heading'
            className='text-3xl md:text-4xl font-bold bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent'
          >
            Nuestros Aliados
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto text-lg'>
            Trabajamos con las marcas más reconocidas del mercado para ofrecerle las mejores soluciones tecnológicas
          </p>
          <div className='w-24 h-1 bg-linear-to-r from-primary to-primary/70 mx-auto rounded-full' />
        </div>
      </div>

      <div className='relative overflow-hidden py-8'>
        <div className='absolute left-0 top-0 w-32 h-full bg-linear-to-r from-background via-background/80 to-transparent z-10 pointer-events-none' />
        <div className='absolute right-0 top-0 w-32 h-full bg-linear-to-l from-background via-background/80 to-transparent z-10 pointer-events-none' />

        <div
          className='flex items-center animate-scroll-seamless hover:paused'
          role='marquee'
          aria-label='Marcas aliadas en movimiento continuo'
        >
          {duplicatedAllies.map(({ src, name, width }, index) => (
            <div
              key={`${name}-${index}`}
              className='mx-12 shrink-0 flex items-center justify-center'
              style={{ width, height: LOGO_HEIGHT }}
            >
              <Image
                src={src}
                alt={`Logo de ${name}`}
                width={width}
                height={LOGO_HEIGHT}
                className='object-contain max-h-full w-auto'
                draggable={false}
                priority={index < allies.length}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center'>
          <p className='text-sm text-muted-foreground/80 font-medium'>
            + de {allies.length} marcas líderes confían en nosotros
          </p>
        </div>
      </div>
    </section>
  )
}