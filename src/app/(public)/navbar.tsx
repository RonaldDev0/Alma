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
import { ThemeToggle } from '@/components/ui/theme-toggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='h-[65px]' />
      <header className='fixed top-0 left-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/60'>
        <div className='container mx-auto max-w-7xl px-4'>
          <nav className='flex h-16 items-center justify-between'>
            <div className='flex items-center'>
              <Link href='/' className='flex items-center space-x-2'>
                <Image
                  src='/icon-192x192.png'
                  alt='Enter'
                  width={40}
                  height={40}
                  className='h-14 w-14 rounded-lg'
                />
                <div className='flex flex-col justify-center'>
                  <span className='font-bold text-xl'>Enter</span>
                  <span className='text-sm text-gray-700 dark:text-gray-400'>Comercial Tecnologica</span>
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
                      <Link href='/products'>
                        Productos
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link href='/support'>
                        Soporte tecnico
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right items */}
            <div className='hidden md:flex justify-center items-center'>
              <Link href='/contact' className='bg-black text-white dark:bg-white dark:text-black py-2 px-4 rounded-lg mr-2'>
                Contacto
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
                        href='/products'
                        className='py-2 font-medium transition-colors hover:text-foreground/80'
                        onClick={() => setIsOpen(false)}
                      >
                        Productos
                      </Link>
                      <Link
                        href='/support'
                        className='py-2 font-medium transition-colors hover:text-foreground/80'
                        onClick={() => setIsOpen(false)}
                      >
                        Soporte tecnico
                      </Link>
                      <Link
                        href='/contact'
                        className='py-2 font-medium transition-colors hover:text-foreground/80'
                        onClick={() => setIsOpen(false)}
                      >
                        Contacto
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