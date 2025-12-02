import { createClient } from '@/lib/supabase/server'
import { Data } from '@/components/list-search'
import { type TRecord } from './table'

export default async function List() {
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
    <main className='py-4 px-2'>
      <section className='max-w-4xl mx-auto sm:my-16 text-center'>
        <div className='inline-flex items-center justify-center rounded-full bg-slate-900 text-slate-50 px-5 py-2 shadow-sm'>
          <span className='text-2xl sm:text-3xl font-semibold tracking-tight'>
            Enter
          </span>
        </div>
      </section>
      <section className='mx-auto max-w-full lg:max-w-6xl'>
        <div className='overflow-x-auto'>
          <Data records={records} />
        </div>
      </section>
    </main>
  )
}
