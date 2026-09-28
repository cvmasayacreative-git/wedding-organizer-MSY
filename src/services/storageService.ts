/**
 * Supabase Storage Service
 * Handles uploading and managing files in Supabase Storage buckets
 * (e.g., 'wedding-assets' for couple/vendor photos, 'venue-floorplans' for architectural blueprints)
 */
import { getSupabase, isSupabaseConfigured } from '../lib/supabase';

export interface StorageUploadResult {
  success: boolean;
  url: string | null;
  path: string | null;
  error?: string;
}

export const STORAGE_BUCKETS = {
  ASSETS: 'wedding-assets',
  FLOORPLANS: 'venue-floorplans',
} as const;

/**
 * Upload a file to a Supabase Storage bucket
 * @param file Browser File object
 * @param bucket Target bucket ('wedding-assets' or 'venue-floorplans')
 * @param folder Subfolder path inside bucket (e.g., 'zones', 'couples')
 */
export const uploadFileToStorage = async (
  file: File,
  bucket: string = STORAGE_BUCKETS.ASSETS,
  folder: string = 'uploads'
): Promise<StorageUploadResult> => {
  if (!isSupabaseConfigured()) {
    return {
      success: false,
      url: null,
      path: null,
      error: 'Supabase belum dikonfigurasi. Masukkan NEXT_PUBLIC_SUPABASE_URL dan NEXT_PUBLIC_SUPABASE_ANON_KEY di .env.local',
    };
  }

  const client = getSupabase();
  if (!client) {
    return {
      success: false,
      url: null,
      path: null,
      error: 'Klien Supabase gagal diinisialisasi',
    };
  }

  try {
    const fileExt = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
    const filePath = folder ? `${folder}/${fileName}` : fileName;

    const { data, error } = await client.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true,
      });

    if (error) {
      return {
        success: false,
        url: null,
        path: null,
        error: error.message,
      };
    }

    // Get public URL
    const { data: publicUrlData } = client.storage
      .from(bucket)
      .getPublicUrl(data.path);

    return {
      success: true,
      url: publicUrlData.publicUrl,
      path: data.path,
    };
  } catch (err: any) {
    return {
      success: false,
      url: null,
      path: null,
      error: err?.message || 'Gagal mengunggah file ke Supabase Storage',
    };
  }
};

/**
 * Delete a file from a Supabase Storage bucket
 */
export const deleteFileFromStorage = async (
  path: string,
  bucket: string = STORAGE_BUCKETS.ASSETS
): Promise<boolean> => {
  const client = getSupabase();
  if (!client) return false;

  try {
    const { error } = await client.storage.from(bucket).remove([path]);
    return !error;
  } catch {
    return false;
  }
};
