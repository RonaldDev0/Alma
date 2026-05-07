interface IAllie {
  name: string
  color: string
}

const allies: IAllie[] = [
  { name: 'HP', color: 'bg-[#0096D6]' }, // HP Blue
  { name: 'DELL', color: 'bg-[#007DB8]' }, // Dell Blue
  { name: 'Lenovo', color: 'bg-[#E2231A]' }, // Lenovo Red
  { name: 'Microsoft', color: 'bg-[#7FBA00]' }, // Microsoft Green
  { name: 'EPSON', color: 'bg-[#003399]' }, // Epson Blue
  { name: 'TOSHIBA', color: 'bg-[#E60012]' }, // Toshiba Red
  { name: 'RICOH', color: 'bg-[#D6001C]' }, // Ricoh Red
  { name: 'ZEBRA', color: 'bg-black' }, // Zebra Black
  { name: 'Apple', color: 'bg-black' }, // Apple Black
  { name: 'Logitech', color: 'bg-[#00B8FC]' } // Logitech Cyan
]

const duplicatedAllies = Array.from({ length: allies.length * 5 }, (_, i) => allies[i % allies.length])

export default function Allies() {
  return (
    <section className='space-y-8 py-16 bg-linear-to-b from-background to-muted dark:to-muted/20' aria-labelledby='allies-heading'>
      {/* Header Section */}
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center space-y-4'>
          <h2 id='allies-heading' className='text-3xl md:text-4xl font-bold bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent'>
            Nuestros Aliados
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto text-lg'>
            Trabajamos con las marcas más reconocidas del mercado para ofrecerle las mejores soluciones tecnológicas
          </p>
          <div className='w-24 h-1 bg-linear-to-r from-primary to-primary/70 mx-auto rounded-full' />
        </div>
      </div>

      {/* Allies Marquee */}
      <div className='relative overflow-hidden py-8'>
        {/* Gradient overlays for smooth fade effect */}
        <div className='absolute left-0 top-0 w-32 h-full bg-linear-to-r from-background via-background/80 to-transparent z-10 pointer-events-none' />
        <div className='absolute right-0 top-0 w-32 h-full bg-linear-to-l from-background via-background/80 to-transparent z-10 pointer-events-none' />

        <div
          className='flex animate-scroll-seamless whitespace-nowrap px-8 hover:paused transition-all duration-300'
          role='marquee'
          aria-label='Marcas aliadas en movimiento continuo'
        >
          {duplicatedAllies.map(({ name, color }, index) => (
            <div
              key={`${name}-${index}`}
              className='group mx-6 shrink-0 transition-all duration-300 hover:scale-110'
            >
              <span
                className={`font-bold text-4xl md:text-5xl lg:text-6xl group-hover:drop-shadow-lg transition-all duration-300 ease-out bg-clip-text text-transparent cursor-default select-none ${color}`}
                aria-label={`Marca aliada: ${name}`}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Additional info section */}
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center'>
          <p className='text-sm text-muted-foreground/80 font-medium'>
            + de {duplicatedAllies.length} marcas líderes confían en nosotros
          </p>
        </div>
      </div>
    </section>
  )
}