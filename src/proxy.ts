import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { TOKEN_NAME, ADMIN_DEFAULT_REDIRECT_URL } from '@/config/constant'

export function proxy(request: NextRequest) {
  const token = request.cookies.get(TOKEN_NAME)?.value
  const { pathname } = request.nextUrl

  const loginPath = '/admin'

  if (pathname.startsWith('/admin') && pathname !== loginPath) {
    if (!token) {
      const loginUrl = new URL(loginPath, request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  if (pathname === loginPath && token) {
    const dashboardUrl = new URL(ADMIN_DEFAULT_REDIRECT_URL, request.url)
    return NextResponse.redirect(dashboardUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
