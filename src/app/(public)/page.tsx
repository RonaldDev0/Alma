import Hero from './hero'
import Allies from './allies'
import GetService from './get-service'
import Information from './information'
import Social from './social'

export default function Home() {
  return (
    <main className='min-h-[92dvh] flex flex-col gap-6'>
      <Hero />
      <GetService />
      <Information />
      <Allies />
      <Social />
    </main>
  )
}
