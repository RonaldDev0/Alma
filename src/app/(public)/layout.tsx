import type { ReactNode } from 'react'
import Navbar from './navbar'

export default async function PrivateLayout({ children }: Readonly<{ children: ReactNode }>) {

  return (
    <>
      <Navbar />
      {children}
    </>
  )
}