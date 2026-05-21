import type { ReactNode } from 'react'
import Navbar from './navbar'
import Ws from '@/components/ws'

export default async function PrivateLayout({ children }: Readonly<{ children: ReactNode }>) {

  return (
    <>
      <Navbar />
      {children}
      <Ws />
    </>
  )
}