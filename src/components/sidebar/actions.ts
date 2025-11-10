'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

type LogoutState = {
  success: boolean,
  error?: string | null,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function logout(_prevState: LogoutState): Promise<LogoutState> {
  const supabase = await createClient()

  const { error } = await supabase.auth.signOut()

  if (error) {
    return {
      success: false,
      error: error.message,
    }
  }

  redirect('/')
}