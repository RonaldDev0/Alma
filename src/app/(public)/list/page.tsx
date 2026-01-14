import { createClient } from '@/lib/supabase/server'
import { ListClient } from './list-client'
import type { TRecord } from './table'
import { InstallPrompt } from './install-prompt'
import Image from 'next/image'

export default async function List() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('product-list')
    .select('id, reference, brand, stock, family')
    .order('reference', { ascending: true })

  if (error) {
    console.error('Error fetching product-list:', error.message)
  }

  const initialRecords = (data ?? []) as TRecord[]

  return (
    <main className='px-2'>
      <InstallPrompt />
      <div className='w-full flex justify-center mt-6'>
        <Image
          src='/qr-enterct3.png'
          width='350'
          height='100'
          alt='qr enterct'
        />
      </div>
      <section className='mx-auto max-w-full lg:max-w-6xl'>
        <div className='overflow-x-auto'>
          <ListClient initialRecords={initialRecords} />
        </div>
      </section>
    </main>
  )
}