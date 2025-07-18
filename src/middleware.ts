import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicAuthPages = [
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/otp',
];

const protectedRoutes = [
  '/dashboard',
  '/account-settings',
  '/booking',
  '/chat',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authCookie = request.cookies.get('auth');

  const isAuthenticated = authCookie?.value === 'authenticated';
  const isAuthPage = publicAuthPages.some((route) => pathname.startsWith(route));
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

  // ✅ If logged in and trying to access '/', redirect to '/dashboard'
  if (isAuthenticated && pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  // ✅ Block access to auth pages if already logged in
  if (isAuthenticated && isAuthPage) {
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  // ✅ Block access to protected routes if not logged in
  if (isProtectedRoute && !isAuthenticated) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
