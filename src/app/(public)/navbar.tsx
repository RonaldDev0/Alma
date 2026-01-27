'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Phone } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import number from '../consts'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile WhatsApp Top Bar - Solo visible en mobile */}
      <div className='md:hidden fixed top-0 left-0 z-50 w-full'>
        <Link
          target='_blank'
          rel='noopener noreferrer'
          href={`https://wa.me/57${number}?text=Hola%2C%20vi%20la%20p%C3%A1gina%20y%20estoy%20interesado.%20%C2%BFPodr%C3%ADas%20brindarme%20m%C3%A1s%20informaci%C3%B3n%3F`}
          className='flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-3 px-4 w-full font-semibold text-sm transition-colors'
        >
          <Image
            src='/ws.webp'
            width={28}
            height={28}
            alt='WhatsApp'
            className='rounded-full bg-white p-0.5'
          />
          <span>¡Contáctanos ahora por WhatsApp!</span>
        </Link>
      </div>

      {/* Spacer - Ajusta para mobile (top bar + navbar) y desktop (solo navbar) */}
      <div className='h-[110px] md:h-[65px]' />
      
      <header className='fixed top-[44px] md:top-0 left-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/60'>
        <div className='container mx-auto max-w-7xl px-4'>
          <nav className='flex h-16 items-center justify-between'>
            <div className='flex items-center'>
              <Link href='/' className='flex items-center space-x-2'>
                <Image
                  src='/icon-192x192.png'
                  alt='Enter CT - Logo de servicio técnico de impresoras'
                  width={40}
                  height={40}
                  className='h-14 w-14 rounded-lg'
                />
                <div className='flex flex-col justify-center'>
                  <span className='font-bold text-xl'>Enter</span>
                  <span className='text-sm text-gray-700 dark:text-gray-400'>
                    <span className='text-red-800 text-lg font-bold'>C</span>
                    omercial {' '}
                    <span className='text-red-800 text-lg font-bold'>T</span>
                    ecnológica
                    </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex flex-1 items-center justify-center'>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link href='/'>
                        Inicio
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link href='/list'>
                        Productos
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link href='/#privacy'>
                        Privacidad
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link href={`tel:` + number} target='_blank' rel='noopener noreferrer'>
                        <div className='flex items-center gap-2'>
                          <Phone />
                          <span> LLame ya al {number}</span>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right items */}
            <div className='hidden md:flex justify-center items-center'>
              <Link target='_blank' rel='noopener noreferrer' href={`https://wa.me/57${number}?text=Hola%2C%20vi%20la%20p%C3%A1gina%20y%20estoy%20interesado.%20%C2%BFPodr%C3%ADas%20brindarme%20m%C3%A1s%20informaci%C3%B3n%3F`} className='bg-black text-white dark:bg-white dark:text-black py-2 px-4 rounded-lg mr-2 flex gap-4 items-center justify-center'>
                <Image
                  src='/ws.webp'
                  width={30}
                  height={30}
                  alt='Contactar por WhatsApp'
                  className='rounded-full'
                />
                Chatee con nosotros
              </Link>
              <ThemeToggle />
            </div>

            {/* Mobile Navigation */}
            <div className='flex items-center space-x-2 md:hidden'>
              <ThemeToggle />
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant='ghost' size='icon'>
                    <Menu className='h-5 w-5' />
                    <span className='sr-only'>Abrir menú</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
                  <SheetHeader>
                    <SheetTitle>Navegación</SheetTitle>
                    <SheetDescription>
                      Explora nuestros servicios y productos
                    </SheetDescription>
                  </SheetHeader>
                  <div className='mt-6 px-4 flex flex-col space-y-4'>
                    <div className='flex flex-col space-y-3'>
                      <Link
                        href='/'
                        className='py-2 font-medium transition-colors hover:text-foreground/80'
                        onClick={() => setIsOpen(false)}
                      >
                        Inicio
                      </Link>
                      <Link
                        href='/list'
                        className='py-2 font-medium transition-colors hover:text-foreground/80'
                        onClick={() => setIsOpen(false)}
                      >
                        Productos
                      </Link>
                      <Link
                        href='/#privacy'
                        className='py-2 font-medium transition-colors hover:text-foreground/80'
                        onClick={() => setIsOpen(false)}
                      >
                        Privacidad
                      </Link>

                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}