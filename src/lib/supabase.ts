/**
 * Supabase Client Configuration for Next.js & Vercel
 * Works safely with or without active Supabase credentials
 */
import { createClient, SupabaseClient, User, Session } from '@supabase/supabase-js';

export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    SUPABASE_URL &&
    SUPABASE_ANON_KEY &&
    SUPABASE_URL.startsWith('https://') &&
    !SUPABASE_URL.includes('your-project')
  );
};

// Singleton client instance (with auth + realtime)
let clientInstance: SupabaseClient | null = null;

export const getSupabase = (): SupabaseClient | null => {
  if (!isSupabaseConfigured()) return null;
  if (!clientInstance) {
    clientInstance = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        storageKey: 'msy-admin-auth',
      },
      realtime: {
        params: { eventsPerSecond: 10 },
      },
    });
  }
  return clientInstance;
};

// Legacy export (kept for supabaseService.ts compatibility)
export const supabase = isSupabaseConfigured()
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : (null as unknown as SupabaseClient);

// ============================================================
// AUTH HELPERS
// ============================================================

export type AuthResult =
  | { success: true; user: User; session: Session }
  | { success: false; error: string };

/**
 * Login admin pakai email + password via Supabase Auth.
 * Session disimpan otomatis di localStorage (persistSession: true).
 */
export async function signInAdmin(email: string, password: string): Promise<AuthResult> {
  const client = getSupabase();
  if (!client) return { success: false, error: 'Supabase belum dikonfigurasi. Isi NEXT_PUBLIC_SUPABASE_URL dan NEXT_PUBLIC_SUPABASE_ANON_KEY di .env.local' };

  const { data, error } = await client.auth.signInWithPassword({ email, password });

  if (error || !data.user || !data.session) {
    return { success: false, error: error?.message ?? 'Login gagal.' };
  }
  return { success: true, user: data.user, session: data.session };
}

/** Logout dan hapus session. */
export async function signOutAdmin(): Promise<void> {
  const client = getSupabase();
  if (client) await client.auth.signOut();
}

/**
 * Ambil session aktif dari storage (tidak network call).
 * Kembalikan null kalau belum login atau session expired.
 */
export async function getAdminSession(): Promise<Session | null> {
  const client = getSupabase();
  if (!client) return null;
  const { data } = await client.auth.getSession();
  return data.session ?? null;
}

/** Subscribe ke perubahan auth state (login/logout/token refresh). */
export function onAuthStateChange(callback: (session: Session | null) => void) {
  const client = getSupabase();
  if (!client) return { unsubscribe: () => {} };
  const { data } = client.auth.onAuthStateChange((_event, session) => callback(session));
  return data.subscription;
}


// ============================================================
// SESSION COOKIE HELPER (untuk Next.js middleware)
// Middleware tidak bisa baca localStorage, jadi kita sync
// session ke cookie saat login/logout.
// ============================================================

const SESSION_COOKIE_NAME = 'msy-admin-session';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 hari

export function setSessionCookie(token: string) {
  if (typeof document === 'undefined') return;
  document.cookie = `${SESSION_COOKIE_NAME}=${token}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Strict`;
}

export function clearSessionCookie() {
  if (typeof document === 'undefined') return;
  document.cookie = `${SESSION_COOKIE_NAME}=; path=/; max-age=0`;
}
