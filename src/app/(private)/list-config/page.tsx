import { createClient } from '@/lib/supabase/server'
import { type TRecord, TableData } from './table'
import { NewButton } from './new-button'

export default async function ListConfig () {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('product-list')
    .select('id, reference, brand')
    .order('reference', { ascending: true })

  const records = (data ?? []) as TRecord[]

  if (error) {
    console.error('Error fetching product-list:', error.message)
  }

  return (
    <main className='p-4'>
      <section className='max-w-4xl mx-auto mb-10 text-center'>
        <div className='inline-flex items-center justify-center rounded-full bg-slate-900 text-slate-50 px-5 py-2 shadow-sm'>
          <span className='text-2xl sm:text-3xl font-semibold tracking-tight'>
            Enter
          </span>
        </div>
      </section>
      <section className='mx-auto max-w-full lg:max-w-6xl'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-xl font-semibold text-slate-900'>Lista de Productos</h2>
          <NewButton />
        </div>
        <div className='overflow-x-auto'>
          <TableData records={records} />
        </div>
      </section>
    </main>
  )
}