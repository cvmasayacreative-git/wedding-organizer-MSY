
/**
 * Next.js Middleware — proteksi route /admin server-side.
 * Cek Supabase session cookie. Redirect ke /admin/login kalau tidak ada.
 *
 * Catatan: middleware berjalan di Edge Runtime (tidak ada Node.js APIs).
 * Kita cek cookie "msy-admin-auth" yang di-set oleh @supabase/supabase-js
 * (persistSession: true, storageKey: 'msy-admin-auth').
 */
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PROTECTED_PREFIX = '/admin';
const LOGIN_PATH = '/admin/login';
// Supabase menyimpan session di localStorage dengan key ini.
// Di SSR/middleware kita tidak bisa akses localStorage,
// jadi kita set cookie manual dari client (lihat catatan setup di bawah).
const SESSION_COOKIE = 'msy-admin-session';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Hanya proteksi /admin (bukan /admin/login itu sendiri)
  if (!pathname.startsWith(PROTECTED_PREFIX) || pathname === LOGIN_PATH) {
    return NextResponse.next();
  }

  const sessionCookie = request.cookies.get(SESSION_COOKIE);
  if (!sessionCookie?.value) {
    // Redirect ke login, simpan URL tujuan untuk redirect balik setelah login
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = LOGIN_PATH;
    loginUrl.searchParams.set('next', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
