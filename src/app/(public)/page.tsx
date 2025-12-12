import Whatsapp from '@/components/whatsapp'
import Hero from './hero'
import GetService from './get-service'

export default function Home() {
  return (
    <main className='min-h-[92dvh]'>
      <Whatsapp />
      <Hero />
      <GetService />
      <div className='h-dvh' />
    </main>
  )
}