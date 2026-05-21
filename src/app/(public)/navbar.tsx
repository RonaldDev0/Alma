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
                      <Link href='/privacy'>
                        Privacidad
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
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