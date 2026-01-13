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
import number from '../consts'

export default function GetService() {
  const [data, setData] = useState()

  const link = `https://wa.me/57${number}?text=${encodeURIComponent(
    `Hola, vi tu pagina y estoy interesado en solicitar un servicio ${data !== 'Otro' ? `para ${data}` : ''}`
  )}`

  return (
    <section className='flex flex-col items-center justify-center mt-4 text-center'>
      <h2 className='font-bold text-3xl'>
        A Domicilio Mantenimiento de Impresoras y computadores
      </h2>

      <p className='max-w-full md:max-w-2xl px-4 opacity-75'>
        Ofrecemos servicios de reparación y mantenimiento de impresoras y computadores
        directamente en tu empresa y hogar. Nuestro equipo de técnicos ofrece
        un servicio rápidoy eficiente.
      </p>

      <div className='my-8 flex flex-col md:flex-row gap-4 md:gap-8'>
        <Select value={data} onValueChange={city => setData(city as any)}>
          <SelectTrigger className='w-[220px]'>
            <SelectValue placeholder='Selecciona tu ubicación' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Ubicación</SelectLabel>
              <SelectItem value='Bogotá'>Bogotá</SelectItem>
              <SelectItem value='Chia'>Chia</SelectItem>
              <SelectItem value='Cajica'>Cajica</SelectItem>
              <SelectItem value='Funza'>Funza</SelectItem>
              <SelectItem value='Madrid'>Madrid</SelectItem>
              <SelectItem value='Mosquera'>Mosquera</SelectItem>
              <SelectItem value='Otro'>Otro</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {data ? (
          <Link href={link} target='_blank'>
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
        Arreglo de impresoras y computadores a nivel nacional.
        <span className='block font-bold mt-2'>Soluciones rápidas.</span>
      </p>
    </section>
  )
}