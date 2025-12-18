import { createClient } from '@/lib/supabase/server'
import { Data } from '@/components/list-search'
import { type TRecord } from './table'

export default async function ListConfig () {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('product-list')
    .select('id, reference, brand, stock, family')
    .order('reference', { ascending: true })

  const records = (data ?? []) as TRecord[]

  if (error) {
    console.error('Error fetching product-list:', error.message)
  }

  return (
    <main className='p-4'>
      <section className='mx-auto max-w-full lg:max-w-6xl'>
        <div className='overflow-x-auto'>
          <Data records={records} isConfig={true} />
        </div>
      </section>
    </main>
  )
}