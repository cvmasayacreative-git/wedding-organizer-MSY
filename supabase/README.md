# Panduan Setup Supabase Database & Storage untuk NuptialVibe

Aplikasi ini menggunakan **Next.js (App Router)**, **Supabase PostgreSQL & Storage**, dan siap dideploy langsung ke **Vercel**.

---

## 🚀 1. Setup Database & Storage di Supabase (Hanya 1 Langkah)

1. Buka dashboard [Supabase](https://supabase.com/dashboard) dan pilih Project Anda (atau buat project baru).
2. Di bilah menu kiri, buka tab **SQL Editor**.
3. Klik tombol **New query**.
4. Buka file [`supabase/setup.sql`](./setup.sql) di repositori ini, salin seluruh kodenya, dan paste ke SQL Editor Supabase.
5. Klik **Run** (atau tekan `Ctrl + Enter`).
6. Selesai! Script tersebut otomatis membuat:
   - **5 Tabel Database**:
     - `public.wedding_config`: Info mempelai, tanggal, gedung, dan fase acara aktif.
     - `public.venue_zones`: Koordinat denah interaktif, panggung, meja bundar, katering.
     - `public.rundown_events`: Susunan acara hari-H, audio/cues, PIC HT.
     - `public.guest_list`: Manajemen RSVP tamu, alokasi meja & kursi.
     - `public.vendor_contacts`: Direktori vendor & alokasi frekuensi radio HT.
   - **2 Storage Buckets Publik**:
     - `wedding-assets`: Untuk foto pengantin, dekorasi panggung, foto zona, logo vendor (limit 10MB).
     - `venue-floorplans`: Untuk file denah blueprint arsitektur gedung & layout (limit 15MB).
   - **Row Level Security (RLS)**: Hak akses read & write aman untuk anon key.
   - **Realtime Replication**: Pembaruan sinkron langsung ke seluruh gawai kru/panitia.

---

## 🔑 2. Konfigurasi Environment Variables

Buka **Project Settings > API** di dashboard Supabase Anda, lalu salin:
1. **Project URL**
2. **Project API Keys (`anon` / `public`)**

Buat file `.env.local` di folder root project:
```bash
NEXT_PUBLIC_SUPABASE_URL="https://your-project-id.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

---

## 🌐 3. Deploy ke Vercel

1. **Push ke GitHub**:
   ```bash
   git add .
   git commit -m "feat: setup Next.js Supabase deployment"
   git push origin main
   ```
2. **Import di Vercel**:
   - Buka [Vercel](https://vercel.com) > **Add New Project** > pilih repositori GitHub Anda.
   - Framework Preset akan otomatis terdeteksi sebagai **Next.js**.
   - Di bagian **Environment Variables**, tambahkan:
     - `NEXT_PUBLIC_SUPABASE_URL` = URL Supabase Anda
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = Anon Key Supabase Anda
3. Klik **Deploy**!
