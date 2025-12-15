/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import Link from 'next/link'

export default function GetService() {
  const [data, setData] = useState()

  const link = `https://wa.me/573132006606?text=${encodeURIComponent(
    `Hola, vi tu pagina y estoy interesado en solicitar un servicio para la ciudad de ${data}`
  )}`

  return (
    <section className='flex flex-col items-center justify-center mt-4 text-center'>
      <h2 className='font-bold text-3xl'>
        A Domicilio Mantenimiento de Impresoras
      </h2>

      <p className='max-w-full md:max-w-2xl px-4 opacity-75'>
        Ofrecemos servicios de reparación y mantenimiento de impresoras,
        directamente en tu empresa y hogar. Nuestro equipo de técnicos ofrece
        un servicio rápido.
      </p>

      <div className='my-8 flex flex-col md:flex-row gap-4 md:gap-8'>
        <Select value={data} onValueChange={city => setData(city as any)}>
          <SelectTrigger className='w-[220px]'>
            <SelectValue placeholder='Selecciona tu ciudad' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Ciudad</SelectLabel>
              <SelectItem value='Bogotá'>Bogotá</SelectItem>
              <SelectItem value='Medellín'>Medellín</SelectItem>
              <SelectItem value='Cali'>Cali</SelectItem>
              <SelectItem value='Pereira'>Pereira</SelectItem>
              <SelectItem value='Palmira'>Palmira</SelectItem>
              <SelectItem value='Dosquebradas'>Dosquebradas</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {data ? (
          <Link href={link}>
            <Button>
              Solicitar servicio
            </Button>
          </Link>
        ) : (
          <Button disabled>
            Solicitar servicio
          </Button>
        )}
      </div>

      <p className='max-w-full md:max-w-2xl px-4 opacity-75'>
        Arreglo de impresoras a domicilio en Bogotá, Medellín, Cali, Pereira,
        Palmira y Dosquebradas.
        <span className='block font-bold mt-2'>Soluciones rápidas.</span>
      </p>
    </section>
  )
}