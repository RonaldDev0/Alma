import { Button } from '@/components/ui/button'
import { Select } from '@/components/ui/select'

export default function GetService() {
  return (
    <section className='flex flex-col items-center justify-center mt-4 text-center'>
      <h2 className='font-bold text-3xl'>
        A Domicilio Mantenimiento de Impresoras
      </h2>
      <span className='max-w-2xl opacity-75'>
        Ofrecemos servicios de reparación y mantenimiento de impresoras, directamente en tu empresa y hogar. Nuestro equipo de técnicos ofrece un servicio rápido.
      </span>
      <div className='mt-4'>
        <Button>Solicitar servicio</Button>
      </div>
    </section>
  )
}