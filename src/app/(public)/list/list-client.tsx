'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Data } from '@/components/list-search'
import { type TRecord } from './table'

interface ListClientProps {
  initialRecords: TRecord[]
}

export function ListClient({ initialRecords }: ListClientProps) {
  const [records, setRecords] = useState<TRecord[]>(initialRecords)

  useEffect(() => {
    const supabase = createClient()

    const channel = supabase
      .channel('product-list-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'product-list' },
        payload => {
          setRecords(prev => {
            if (payload.eventType === 'DELETE') {
              return prev.filter(item => item.id !== payload.old.id)
            }
            
            const filtered = prev.filter(item => item.id !== payload.new.id)
            return [...filtered, payload.new as TRecord].sort((a, b) => 
              a.reference.localeCompare(b.reference)
            )
          })
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  return <Data records={records} />
}