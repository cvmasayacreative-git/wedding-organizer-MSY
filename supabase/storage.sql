-- =========================================================================
-- SUPABASE STORAGE BUCKETS & POLICIES SETUP
-- Platform: Supabase Storage
-- Run this in Supabase Dashboard > SQL Editor > New query
-- =========================================================================

-- 1. Create Public Storage Buckets
-- 'wedding-assets': Untuk foto pengantin, dekorasi panggung, foto zona, logo vendor
-- 'venue-floorplans': Untuk gambar denah denah blueprint, sketsa arsitektur layout
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

-- 2. Storage Objects Row Level Security (RLS) Policies
-- Memastikan akses read & write file berjalan mulus menggunakan anon key

-- Policy 1: Izinkan publik/siapapun melihat (SELECT) gambar di bucket wedding-assets
DROP POLICY IF EXISTS "Public can view wedding assets" ON storage.objects;
CREATE POLICY "Public can view wedding assets"
ON storage.objects FOR SELECT
USING (bucket_id IN ('wedding-assets', 'venue-floorplans'));

-- Policy 2: Izinkan upload (INSERT) file ke bucket
DROP POLICY IF EXISTS "Allow anon upload to wedding assets" ON storage.objects;
CREATE POLICY "Allow anon upload to wedding assets"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id IN ('wedding-assets', 'venue-floorplans'));

-- Policy 3: Izinkan pembaruan (UPDATE) file
DROP POLICY IF EXISTS "Allow anon update in wedding assets" ON storage.objects;
CREATE POLICY "Allow anon update in wedding assets"
ON storage.objects FOR UPDATE
USING (bucket_id IN ('wedding-assets', 'venue-floorplans'));

-- Policy 4: Izinkan penghapusan (DELETE) file
DROP POLICY IF EXISTS "Allow anon delete in wedding assets" ON storage.objects;
CREATE POLICY "Allow anon delete in wedding assets"
ON storage.objects FOR DELETE
USING (bucket_id IN ('wedding-assets', 'venue-floorplans'));
