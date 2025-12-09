/* eslint-disable @typescript-eslint/no-explicit-any */
import { promises as fs } from 'fs'
import path from 'path'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // file where save the subscription
    const filePath = path.join(process.cwd(), 'subscriptions.json')

    // save in the file, if exist add more
    let subs = []
    try {
      const data = await fs.readFile(filePath, 'utf-8')
      subs = JSON.parse(data)
    } catch {
      subs = []
    }

    // remove duplicates
    const already = subs.find((s: any) => s.endpoint == body.endpoint)
    if (!already) subs.push(body)

    await fs.writeFile(filePath, JSON.stringify(subs, null, 2))
    return NextResponse.json({ ok: true })
  } catch (e: any) {
    console.error('Error guardando suscripcion', e)
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 })
  }
}