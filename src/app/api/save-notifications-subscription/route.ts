import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  const { subscription, user_id } = await req.json()
  const supabase = await createClient()

  const { error } = await supabase
    .from('push-subscriptions')
    .insert({
      user_id,
      subscription
    })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}