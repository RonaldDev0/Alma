import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import webpush from 'web-push'

export async function POST(req: NextRequest) {
  const { title, body } = await req.json()
  const supabase = await createClient()

  const { data: subs } = await supabase
    .from('push-subscriptions')
    .select('subscripcion')

  for (const sub of subs!) {
    try {
      await webpush.sendNotification(sub.subscripcion, JSON.stringify({
        title,
        body,
        icon: 'icon-192x192.png'
      }))
    } catch (err) {
      console.error('Error enviando notificacion a un uauario: ', err)
    }
  }

  return NextResponse.json({ success: true })
}