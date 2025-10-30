import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {

    const token = request.cookies.get('accessToken')?.value;

    const { pathname } = request.nextUrl;

    const protectedPaths = ['/dashboard', '/profile', '/services', '/appointments']; /// ekhane exjectly route path gulai bolte hobe.

    const authRoutes = ['/login', '/register', '/forgot-password'];

    const isProtectedPath = protectedPaths.some((path) => { // some => protectedPaths er kono route er sate mile kina dekhbe
       return pathname.startsWith(path);
    })

    // current path auth route or not
    const isAuthRoute = authRoutes.some((route)=>
        pathname === route
    )

    if(isProtectedPath && !token){
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if(isAuthRoute && token){
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard/:path*', '/services/:path*', '/login', '/register', '/forgot-password'],
}