import Whatsapp from '@/components/whatsapp'
import Hero from './hero'
import GetService from './get-service'
import Information from './information'

export default function Home() {
  return (
    <main className='min-h-[92dvh] flex flex-col gap-6'>
      <Whatsapp />
      <Hero />
      <GetService />
      <Information />
      <div className='h-dvh' />
    </main>
  )
}