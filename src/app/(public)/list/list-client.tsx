'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Data } from '@/components/list-search'
import { type TRecord } from './table'

interface ListClientProps {
  initialRecords: TRecord[]
}

type AnimatedRecord = TRecord & {
  animation?: 'add' | 'update' | 'delete'
}

export function ListClient({ initialRecords }: ListClientProps) {
  const [records, setRecords] = useState<AnimatedRecord[]>(initialRecords)

  useEffect(() => {
    const supabase = createClient()

    const channel = supabase
      .channel('product-list-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'product-list' },
        payload => {
          const notification = new Audio('/notification.wav')
          notification.play()
          setRecords(prev => {
            if (payload.eventType === 'DELETE') {
              const updated = prev.map(item =>
                item.id === payload.old.id
                  ? { ...item, animation: 'delete' as const }
                  : item
              )
              
              setTimeout(() => {
                setRecords(current =>
                  current.filter(item => item.id !== payload.old.id)
                )
              }, 500)
              
              return updated
            }
            
            const exists = prev.find(item => item.id === payload.new.id)
            const newRecord = {
              ...payload.new as TRecord,
              animation: exists ? ('update' as const) : ('add' as const)
            }
            
            const filtered = prev.filter(item => item.id !== payload.new.id)
            const updated = [...filtered, newRecord].sort((a, b) =>
              a.reference.localeCompare(b.reference)
            )
            
            setTimeout(() => {
              setRecords(current =>
                current.map(item =>
                  item.id === newRecord.id
                    ? { ...item, animation: undefined }
                    : item
                )
              )
            }, 600)
            
            return updated
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