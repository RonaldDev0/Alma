import { createClient } from '@/lib/supabase/server'
import { ListClient } from './list-client'
import { type TRecord } from './table'
import { InstallPrompt } from '@/components/install-prompt'

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
    <main className='py-4 px-2'>
      <InstallPrompt />
      <section className='mx-auto max-w-full lg:max-w-6xl'>
        <div className='overflow-x-auto'>
          <ListClient initialRecords={initialRecords} />
        </div>
      </section>
    </main>
  )
}