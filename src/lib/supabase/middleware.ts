import { createServerClient } from '@supabase/ssr'
import { type NextRequest, NextResponse } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()
  const { pathname } = request.nextUrl

  const publicRoutes = ['/login', '/signup', '/forgot-password', '/auth/confirm', '/auth/callback', '/auth/auth-code-error', '/pricing', '/api/plans', '/api/lemonsqueezy-webhook', '/products', '/api/db', '/list']
  const isPublicRoute = pathname === '/' || publicRoutes.some(route => pathname.startsWith(route))

  if (pathname === '/' && request.nextUrl.searchParams.has('code')) {
    const code = request.nextUrl.searchParams.get('code') as string
    const callback = new URL('/auth/callback', request.url)
    callback.searchParams.set('code', code)
    callback.searchParams.set('next', '/home')

    return NextResponse.redirect(callback)
  }

  // Block unauthenticated users from protected routes
  if (!user && !isPublicRoute) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Redirect authenticated users away from auth pages
  if (user && ['/login', '/signup', '/forgot-password'].some(path => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL('/home', request.url))
  }

  // Only allow access to admin
  const adminIds = ['4e02a6a0-7961-4844-91e6-ce788f5005c7', '8fa9c935-5756-4854-8fea-8470457cd6b9']

  if (!adminIds.includes(user?.id ?? '') && !isPublicRoute) {
    return NextResponse.rewrite(new URL('/not-found', request.url))
  }

  if (pathname === '/') {
    return NextResponse.rewrite(new URL('/list', request.url))
  }

  return supabaseResponse
}