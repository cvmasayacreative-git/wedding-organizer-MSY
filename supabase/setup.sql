-- =========================================================================
-- COMPLETE ALL-IN-ONE SETUP SCRIPT (DATABASE + STORAGE + REALTIME + RLS)
-- Project: NuptialVibe Wedding Organizer & Interactive Floor Plan
-- Platform: Supabase (PostgreSQL 15+)
-- 
-- CARA PENGGUNAAN:
-- 1. Buka dashboard Supabase Anda (https://app.supabase.com)
-- 2. Pilih project Anda > Masuk ke tab "SQL Editor" di bilah kiri
-- 3. Klik "New query", paste seluruh isi file ini, lalu klik "Run" (atau Ctrl+Enter)
-- 4. Semua tabel database, storage bucket, dan hak akses RLS akan langsung aktif!
-- =========================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =========================================================================
-- BAGIAN 1: TABEL-TABEL UTAMA APLIKASI
-- =========================================================================

-- 1. Config Pengantin & Acara
CREATE TABLE IF NOT EXISTS public.wedding_config (
  id TEXT PRIMARY KEY DEFAULT 'default_wedding',
  couple_name TEXT NOT NULL DEFAULT '',
  groom_name TEXT NOT NULL DEFAULT '',
  bride_name TEXT NOT NULL DEFAULT '',
  date_str TEXT NOT NULL DEFAULT '',
  wedding_date TEXT DEFAULT '',
  venue_name TEXT NOT NULL DEFAULT '',
  ballroom_hall TEXT NOT NULL DEFAULT '',
  active_phase TEXT NOT NULL DEFAULT 'Persiapan & Setup',
  current_event TEXT NOT NULL DEFAULT 'Belum dimulai',
  total_guests INTEGER NOT NULL DEFAULT 0,
  attended_guests INTEGER NOT NULL DEFAULT 0,
  total_tables INTEGER NOT NULL DEFAULT 0,
  catering_pax INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO public.wedding_config (id, couple_name, groom_name, bride_name, date_str, venue_name, ballroom_hall)
VALUES ('default_wedding', 'Pernikahan Baru', 'Mempelai Pria', 'Mempelai Wanita', 'Tanggal Pernikahan', 'Nama Gedung / Hotel', 'Grand Ballroom')
ON CONFLICT (id) DO NOTHING;

-- 2. Denah Zona & Tata Letak Meja/Panggung
CREATE TABLE IF NOT EXISTS public.venue_zones (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  short_code TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('stage_vip', 'catering', 'dining', 'entertainment', 'reception_ops', 'outdoor_ceremony')),
  floor TEXT NOT NULL DEFAULT 'grand_ballroom' CHECK (floor IN ('grand_ballroom', 'garden_terrace')),
  status TEXT NOT NULL DEFAULT 'ready' CHECK (status IN ('ready', 'in_progress', 'standby', 'attention')),
  coordinates JSONB NOT NULL,
  capacity TEXT NOT NULL DEFAULT '0 Pax',
  dimensions TEXT NOT NULL DEFAULT '0m x 0m',
  pic JSONB NOT NULL DEFAULT '{"name": "", "role": "", "phone": "", "htChannel": ""}'::jsonb,
  description TEXT DEFAULT '',
  image TEXT,
  equipment JSONB DEFAULT '[]'::jsonb,
  checklist JSONB DEFAULT '[]'::jsonb,
  timeline JSONB DEFAULT '[]'::jsonb,
  notes TEXT DEFAULT '',
  guest_count INTEGER DEFAULT 0,
  assigned_guests JSONB DEFAULT '[]'::jsonb,
  fnb_details JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_venue_zones_floor ON public.venue_zones(floor);
CREATE INDEX IF NOT EXISTS idx_venue_zones_category ON public.venue_zones(category);
CREATE INDEX IF NOT EXISTS idx_venue_zones_status ON public.venue_zones(status);

-- 3. Susunan Rundown Acara
CREATE TABLE IF NOT EXISTS public.rundown_events (
  id TEXT PRIMARY KEY,
  time TEXT NOT NULL,
  end_time TEXT,
  title TEXT NOT NULL,
  phase TEXT NOT NULL CHECK (phase IN ('persiapan', 'akad', 'kirab', 'resepsi', 'closing')),
  zone_id TEXT,
  zone_name TEXT,
  status TEXT NOT NULL DEFAULT 'upcoming' CHECK (status IN ('completed', 'current', 'upcoming')),
  pic TEXT NOT NULL DEFAULT '',
  ht_channel TEXT NOT NULL DEFAULT 'CH-01',
  cues TEXT DEFAULT '',
  music_track TEXT DEFAULT '',
  details TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_rundown_phase ON public.rundown_events(phase);
CREATE INDEX IF NOT EXISTS idx_rundown_time ON public.rundown_events(time);

-- 4. Daftar Undangan Tamu & Meja
CREATE TABLE IF NOT EXISTS public.guest_list (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'VIP Keluarga' CHECK (category IN ('VIP Keluarga', 'VVIP Pejabat', 'Keluarga Pria', 'Keluarga Wanita', 'Sahabat', 'Rekan Bisnis')),
  assigned_zone_id TEXT,
  table_name TEXT NOT NULL DEFAULT '',
  pax INTEGER NOT NULL DEFAULT 1,
  status TEXT NOT NULL DEFAULT 'Menunggu' CHECK (status IN ('Hadir', 'Terkonfirmasi', 'Menunggu')),
  dietary TEXT DEFAULT 'Normal / Halal Standard',
  souvenir_given BOOLEAN DEFAULT FALSE,
  seat_number TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_guest_name ON public.guest_list(name);
CREATE INDEX IF NOT EXISTS idx_guest_category ON public.guest_list(category);
CREATE INDEX IF NOT EXISTS idx_guest_status ON public.guest_list(status);

-- 5. Direktori Vendor & Kanal HT
CREATE TABLE IF NOT EXISTS public.vendor_contacts (
  id TEXT PRIMARY KEY,
  category TEXT NOT NULL CHECK (category IN ('Dekorasi', 'Katering', 'MUA & Busana', 'Fotografi & Video', 'Sound & Lighting', 'Entertainment & Band', 'MC & Host', 'Venue Manager')),
  company TEXT NOT NULL,
  pic_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  assigned_zones JSONB DEFAULT '[]'::jsonb,
  ht_channel TEXT NOT NULL DEFAULT 'CH-01',
  readiness_percent INTEGER DEFAULT 100,
  status TEXT NOT NULL DEFAULT 'Ready' CHECK (status IN ('Ready', 'On Site', 'Standby')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_vendor_category ON public.vendor_contacts(category);

-- =========================================================================
-- BAGIAN 2: ROW LEVEL SECURITY (RLS) POLICIES
-- =========================================================================
ALTER TABLE public.wedding_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.venue_zones ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rundown_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.guest_list ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vendor_contacts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow anon select wedding_config" ON public.wedding_config;
CREATE POLICY "Allow anon select wedding_config" ON public.wedding_config FOR SELECT USING (true);
DROP POLICY IF EXISTS "Allow anon all wedding_config" ON public.wedding_config;
CREATE POLICY "Allow anon all wedding_config" ON public.wedding_config FOR ALL USING (true);

DROP POLICY IF EXISTS "Allow anon select venue_zones" ON public.venue_zones;
CREATE POLICY "Allow anon select venue_zones" ON public.venue_zones FOR SELECT USING (true);
DROP POLICY IF EXISTS "Allow anon all venue_zones" ON public.venue_zones;
CREATE POLICY "Allow anon all venue_zones" ON public.venue_zones FOR ALL USING (true);

DROP POLICY IF EXISTS "Allow anon select rundown_events" ON public.rundown_events;
CREATE POLICY "Allow anon select rundown_events" ON public.rundown_events FOR SELECT USING (true);
DROP POLICY IF EXISTS "Allow anon all rundown_events" ON public.rundown_events;
CREATE POLICY "Allow anon all rundown_events" ON public.rundown_events FOR ALL USING (true);

DROP POLICY IF EXISTS "Allow anon select guest_list" ON public.guest_list;
CREATE POLICY "Allow anon select guest_list" ON public.guest_list FOR SELECT USING (true);
DROP POLICY IF EXISTS "Allow anon all guest_list" ON public.guest_list;
CREATE POLICY "Allow anon all guest_list" ON public.guest_list FOR ALL USING (true);

DROP POLICY IF EXISTS "Allow anon select vendor_contacts" ON public.vendor_contacts;
CREATE POLICY "Allow anon select vendor_contacts" ON public.vendor_contacts FOR SELECT USING (true);
DROP POLICY IF EXISTS "Allow anon all vendor_contacts" ON public.vendor_contacts;
CREATE POLICY "Allow anon all vendor_contacts" ON public.vendor_contacts FOR ALL USING (true);

-- =========================================================================
-- BAGIAN 3: SUPABASE STORAGE BUCKETS & POLICIES
-- =========================================================================
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES 
  (
    'wedding-assets',
    'wedding-assets',
    true,
    10485760, -- 10 MB per file limit
    ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml', 'image/gif']
  ),
  (
    'venue-floorplans',
    'venue-floorplans',
    true,
    15728640, -- 15 MB per file limit
    ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml']
  )
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;

DROP POLICY IF EXISTS "Public can view wedding assets" ON storage.objects;
CREATE POLICY "Public can view wedding assets"
ON storage.objects FOR SELECT
USING (bucket_id IN ('wedding-assets', 'venue-floorplans'));

DROP POLICY IF EXISTS "Allow anon upload to wedding assets" ON storage.objects;
CREATE POLICY "Allow anon upload to wedding assets"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id IN ('wedding-assets', 'venue-floorplans'));

DROP POLICY IF EXISTS "Allow anon update in wedding assets" ON storage.objects;
CREATE POLICY "Allow anon update in wedding assets"
ON storage.objects FOR UPDATE
USING (bucket_id IN ('wedding-assets', 'venue-floorplans'));

DROP POLICY IF EXISTS "Allow anon delete in wedding assets" ON storage.objects;
CREATE POLICY "Allow anon delete in wedding assets"
ON storage.objects FOR DELETE
USING (bucket_id IN ('wedding-assets', 'venue-floorplans'));

-- =========================================================================
-- BAGIAN 4: REALTIME REPLICATION
-- =========================================================================
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'wedding_config'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.wedding_config;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'venue_zones'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.venue_zones;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'rundown_events'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.rundown_events;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'guest_list'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.guest_list;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'vendor_contacts'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.vendor_contacts;
  END IF;
END $$;
