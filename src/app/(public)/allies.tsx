const allies: string[] = [
  'HP',
  'DELL',
  'Lenovo',
  'Microsoft',
  'EPSON',
  'TOSHIBA',
  'RICOH',
  'ZEBRA',
  'Apple',
  'Logitech'
]

const duplicatedAllies = Array.from({ length: allies.length * 4 }, (_, i) => allies[i % allies.length])

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
            Trabajamos con las marcas más reconocidas del mercado para ofrecerte las mejores soluciones tecnológicas
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
          {duplicatedAllies.map((ally, index) => (
            <div
              key={`${ally}-${index}`}
              className='group mx-6 shrink-0 transition-all duration-300 hover:scale-110'
            >
              <span
                className='font-bold text-4xl md:text-5xl lg:text-6xl group-hover:drop-shadow-lg transition-all duration-300 ease-out bg-linear-to-br from-muted-foreground/60 to-muted-foreground/40 group-hover:from-primary group-hover:to-primary/70 bg-clip-text text-transparent cursor-default select-none'
                aria-label={`Marca aliada: ${ally}`}
              >
                {ally}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Additional info section */}
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