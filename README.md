# 💍 NuptialVibe — Wedding Organizer Suite & Interactive Floor Plan

Aplikasi manajemen Wedding Organizer (WO) profesional yang dilengkapi dengan **Peta Layout & Denah Interaktif Gedung Pernikahan**, manajemen meja & tamu, pengaturan susunan *rundown*, direktori tim vendor & HT, kalkulator rasio katering, serta sinkronisasi database **Supabase (PostgreSQL Realtime)** dan deployment **Next.js di Vercel**.

---

## 🚀 Panduan Cepat Deploy ke Vercel & Supabase

### 1. Setup Database Supabase
1. Buat project baru di [supabase.com](https://supabase.com).
2. Masuk ke menu **SQL Editor** > **New Query**.
3. Buka file [`supabase/schema.sql`](./supabase/schema.sql), salin seluruh isinya, dan klik **Run**.
   - Ini akan membuat seluruh tabel: `wedding_config`, `venue_zones`, `rundown_events`, `guest_list`, dan `vendor_contacts` beserta aturan keamanan RLS dan channel realtime.
4. Buka menu **Project Settings > API**, salin:
   - **Project URL**
   - **anon / public key**

### 2. Push Kode ke GitHub
Pastikan repositori git Anda terhubung ke remote GitHub:
```bash
git add .
git commit -m "feat: Next.js + Supabase + Vercel deployment ready"
git push origin main
```

### 3. Deploy di Vercel
1. Buka [vercel.com](https://vercel.com) dan klik **Add New... > Project**.
2. Pilih repositori GitHub Anda.
3. Vercel akan otomatis mengenali framework **Next.js**.
4. Sebelum klik *Deploy*, buka bagian **Environment Variables** dan tambahkan:
   - `NEXT_PUBLIC_SUPABASE_URL`: `https://your-project.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
5. Klik **Deploy**! Aplikasi Anda siap digunakan secara live dalam hitungan detik.

---

## 💻 Menjalankan di Komputer Lokal

### Menggunakan Next.js:
```bash
npm install
npm run dev:next # atau npx next dev -p 3000
```

### Menggunakan Vite:
```bash
npm install
npm run dev
```

Buka `http://localhost:3000` di peramban Anda.

---

## 📂 Struktur Proyek

```text
├── app/                        # Next.js 15 App Router Entry Points
│   ├── layout.tsx              # Root HTML Layout, Metadata & Web Fonts
│   ├── page.tsx                # Client Page Entry Point
│   └── globals.css             # Tailwind CSS & Typography
├── src/
│   ├── components/             # Komponen UI Modular
│   │   ├── InteractiveVenueMap.tsx    # Peta Arsitektur Denah Gedung SVG
│   │   ├── FloorPlanDesigner.tsx      # Studio Gambar & Edit Denah (Mode Admin)
│   │   ├── ZoneDetailsDrawer.tsx      # Laci Rincian & Status Meja/Zona
│   │   ├── AdminDashboardSection.tsx  # Master Control Panel & Supabase Hub
│   │   ├── RundownSection.tsx         # Manajemen Jadwal Susunan Acara
│   │   ├── GuestSeatingSection.tsx    # Daftar Undangan & Alokasi Meja
│   │   ├── CateringFnbSection.tsx     # Monitor Porsi Buffet & Gubukan
│   │   ├── VendorHtSection.tsx        # Direktori Kontak Vendor & Saluran HT
│   │   ├── WeddingCalculatorSection.tsx # Simulasi Kebutuhan Resepsi
│   │   ├── WeddingHeroHeader.tsx      # Banner Mempelai & Cue Acara Terkini
│   │   └── Navbar.tsx                 # Navigasi & Status Cloud Database
│   ├── data/                   # Data Awal Standar Hari-H
│   ├── lib/
│   │   └── supabase.ts         # Inisialisasi Supabase Client (Next.js & Vite)
│   ├── services/
│   │   └── supabaseService.ts  # CRUD & Sinkronisasi Realtime Supabase
│   ├── types.ts                # TypeScript Data Models
│   └── App.tsx                 # Aplikasi Utama
├── supabase/
│   └── schema.sql              # Skrip SQL Lengkap untuk Supabase PostgreSQL
├── next.config.mjs             # Konfigurasi Next.js
├── vercel.json                 # Konfigurasi Deployment Vercel
└── .env.example                # Template Variabel Lingkungan
```

---

## 🛡️ Fitur Unggulan

- **Realtime Cloud Sync**: Data layout denah, meja, susunan acara, dan tamu langsung tersinkronisasi ke cloud Supabase.
- **Offline Fallback**: Aplikasi tetap dapat berjalan mulus menggunakan local storage jika kredensial Supabase belum dimasukkan.
- **Visual Studio Designer**: Kemampuan menggambar, menambah, mengubah posisi, dan menghapus elemen layout secara langsung di kanvas.
- **Dual Runtime Ready**: Berjalan sempurna di Vite maupun Next.js untuk fleksibilitas deploy maksimal.
