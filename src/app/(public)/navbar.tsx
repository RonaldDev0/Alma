'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
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
import number from '@/app/consts'

type IMenuButton = {
  label: string
  href: string
}

const items: IMenuButton[] = [
  {
    label: 'Inicio',
    href: '/'
  },
  {
    label: 'Nosotros',
    href: '/nosotros'
  },
  {
    label: 'Productos',
    href: '/list'
  },
  {
    label: 'Servicios',
    href: '/servicios'
  },
  {
    label: 'Privacidad',
    href: '/privacy'
  },
  {
    label: 'Contacto',
    href: `https://wa.me/57${number}?text=Hola%2C%20vi%20la%20p%C3%A1gina%20y%20estoy%20interesado.%20%C2%BFPodr%C3%ADas%20brindarme%20m%C3%A1s%20informaci%C3%B3n%3F`
  }
]

function MenuItem({ label, href }: { label: string, href: string }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
        <Link href={href}>
          {label}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>

      {/* Spacer - Ajusta para mobile (top bar + navbar) y desktop (solo navbar) */}
      <div className='h-[65px]' />

      <header className='fixed top-0 left-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/60'>
        <div className='container mx-auto max-w-7xl px-4'>
          <nav className='flex h-16 items-center justify-between'>
            <div className='flex items-center'>
              <Link href='/' className='flex items-center space-x-2'>
                <Image
                  src='/new-icon.png'
                  alt='Enter CT - Logo de servicio técnico de impresoras'
                  width={400}
                  height={400}
                  className='h-40 w-44 rounded-lg'
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex flex-1 items-center justify-center'>
              <NavigationMenu>
                <NavigationMenuList>
                  {items.map(item => (
                    <MenuItem
                      key={item.href}
                      href={item.href}
                      label={item.label}
                    />
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Mobile Navigation */}
            <div className='flex items-center space-x-2 md:hidden'>
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
                      {items.map(item => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className='py-2 font-medium transition-colors hover:text-foreground/80'
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
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