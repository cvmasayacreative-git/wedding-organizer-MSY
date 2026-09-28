/**
 * Supabase Data Service
 * Provides CRUD and Realtime synchronization for wedding management
 */
import { getSupabase, isSupabaseConfigured } from '../lib/supabase';
import { 
  WeddingConfig, 
  VenueZone, 
  RundownEvent, 
  GuestItem, 
  VendorContact 
} from '../types';

export interface SupabaseSyncStatus {
  connected: boolean;
  message: string;
  lastSyncedAt: string | null;
}

// Test Supabase connection
export const testSupabaseConnection = async (): Promise<{ success: boolean; message: string }> => {
  if (!isSupabaseConfigured()) {
    return {
      success: false,
      message: 'Supabase URL atau Anon Key belum dikonfigurasi di file .env',
    };
  }
  const client = getSupabase();
  if (!client) {
    return { success: false, message: 'Gagal inisialisasi Supabase client' };
  }

  try {
    const { error } = await client.from('wedding_config').select('id').limit(1);
    if (error) {
      if (error.code === '42P01') {
        return {
          success: false,
          message: 'Terkoneksi ke Supabase, namun tabel belum dibuat. Harap jalankan script schema.sql di Supabase SQL Editor.',
        };
      }
      return { success: false, message: `Error Supabase: ${error.message}` };
    }
    return { success: true, message: 'Koneksi ke database Supabase berhasil aktif!' };
  } catch (err: any) {
    return { success: false, message: err?.message || 'Gagal menghubungi server Supabase' };
  }
};

// --- WEDDING CONFIG ---
export const fetchWeddingConfigFromSupabase = async (): Promise<WeddingConfig | null> => {
  const client = getSupabase();
  if (!client) return null;

  try {
    const { data, error } = await client
      .from('wedding_config')
      .select('*')
      .limit(1)
      .single();

    if (error || !data) return null;
    return {
      coupleName: data.couple_name,
      groomName: data.groom_name,
      brideName: data.bride_name,
      dateStr: data.date_str || data.wedding_date || 'Sabtu, 24 Oktober 2026',
      venueName: data.venue_name,
      ballroomHall: data.ballroom_hall,
      activePhase: data.active_phase,
      currentEvent: data.current_event,
      totalGuests: data.total_guests,
      attendedGuests: data.attended_guests,
      totalTables: data.total_tables || 48,
      cateringPax: data.catering_pax,
    };
  } catch {
    return null;
  }
};

export const saveWeddingConfigToSupabase = async (config: WeddingConfig): Promise<boolean> => {
  const client = getSupabase();
  if (!client) return false;

  try {
    const payload = {
      id: 'default_wedding',
      couple_name: config.coupleName,
      groom_name: config.groomName,
      bride_name: config.brideName,
      date_str: config.dateStr,
      venue_name: config.venueName,
      ballroom_hall: config.ballroomHall,
      active_phase: config.activePhase,
      current_event: config.currentEvent,
      total_guests: config.totalGuests,
      attended_guests: config.attendedGuests,
      total_tables: config.totalTables,
      catering_pax: config.cateringPax,
      updated_at: new Date().toISOString(),
    };

    const { error } = await client.from('wedding_config').upsert(payload);
    return !error;
  } catch {
    return false;
  }
};

// --- VENUE ZONES ---
export const fetchZonesFromSupabase = async (): Promise<VenueZone[] | null> => {
  const client = getSupabase();
  if (!client) return null;

  try {
    const { data, error } = await client
      .from('venue_zones')
      .select('*')
      .order('created_at', { ascending: true });

    if (error || !data || data.length === 0) return null;

    return data.map((item: any) => ({
      id: item.id,
      name: item.name,
      shortCode: item.short_code,
      category: item.category,
      floor: item.floor,
      status: item.status,
      coordinates: item.coordinates,
      capacity: item.capacity,
      dimensions: item.dimensions,
      pic: item.pic,
      description: item.description,
      equipment: item.equipment || [],
      checklist: item.checklist || [],
      timeline: item.timeline || [],
      notes: item.notes || '',
      guestCount: item.guest_count,
      assignedGuests: item.assigned_guests,
      fnbDetails: item.fnb_details,
    }));
  } catch {
    return null;
  }
};

export const saveZonesToSupabase = async (zones: VenueZone[]): Promise<boolean> => {
  const client = getSupabase();
  if (!client) return false;

  try {
    const records = zones.map((z) => ({
      id: z.id,
      name: z.name,
      short_code: z.shortCode,
      category: z.category,
      floor: z.floor,
      status: z.status,
      coordinates: z.coordinates,
      capacity: z.capacity,
      dimensions: z.dimensions,
      pic: z.pic,
      description: z.description,
      equipment: z.equipment,
      checklist: z.checklist,
      timeline: z.timeline,
      notes: z.notes,
      guest_count: z.guestCount,
      assigned_guests: z.assignedGuests,
      fnb_details: z.fnbDetails,
      updated_at: new Date().toISOString(),
    }));

    const { error } = await client.from('venue_zones').upsert(records);
    return !error;
  } catch {
    return false;
  }
};

export const deleteZoneFromSupabase = async (zoneId: string): Promise<boolean> => {
  const client = getSupabase();
  if (!client) return false;

  try {
    const { error } = await client.from('venue_zones').delete().eq('id', zoneId);
    return !error;
  } catch {
    return false;
  }
};

// --- RUNDOWN EVENTS ---
export const fetchRundownFromSupabase = async (): Promise<RundownEvent[] | null> => {
  const client = getSupabase();
  if (!client) return null;

  try {
    const { data, error } = await client
      .from('rundown_events')
      .select('*')
      .order('time', { ascending: true });

    if (error || !data || data.length === 0) return null;

    return data.map((item: any) => ({
      id: item.id,
      time: item.time,
      endTime: item.end_time || '',
      title: item.title,
      phase: item.phase,
      zoneId: item.zone_id,
      zoneName: item.zone_name,
      status: item.status,
      pic: item.pic || item.pic_name || '',
      htChannel: item.ht_channel,
      cues: item.cues || '',
      musicTrack: item.music_track || '',
      details: item.details || item.notes || '',
    }));
  } catch {
    return null;
  }
};

export const saveRundownToSupabase = async (events: RundownEvent[]): Promise<boolean> => {
  const client = getSupabase();
  if (!client) return false;

  try {
    const records = events.map((ev) => ({
      id: ev.id,
      time: ev.time,
      end_time: ev.endTime,
      title: ev.title,
      phase: ev.phase,
      zone_id: ev.zoneId,
      zone_name: ev.zoneName,
      status: ev.status,
      pic: ev.pic,
      ht_channel: ev.htChannel,
      cues: ev.cues,
      music_track: ev.musicTrack,
      details: ev.details,
      updated_at: new Date().toISOString(),
    }));

    const { error } = await client.from('rundown_events').upsert(records);
    return !error;
  } catch {
    return false;
  }
};

export const deleteRundownFromSupabase = async (eventId: string): Promise<boolean> => {
  const client = getSupabase();
  if (!client) return false;

  try {
    const { error } = await client.from('rundown_events').delete().eq('id', eventId);
    return !error;
  } catch {
    return false;
  }
};

// --- GUESTS ---
export const fetchGuestsFromSupabase = async (): Promise<GuestItem[] | null> => {
  const client = getSupabase();
  if (!client) return null;

  try {
    const { data, error } = await client.from('guest_list').select('*').order('name', { ascending: true });
    if (error || !data || data.length === 0) return null;

    return data.map((g: any) => ({
      id: g.id,
      name: g.name,
      category: g.category,
      assignedZoneId: g.assigned_zone_id || g.table_zone_id || '',
      tableName: g.table_name || g.assigned_table || '',
      pax: g.pax,
      status: g.status,
      dietary: g.dietary,
      souvenirGiven: g.souvenir_given,
      seatNumber: g.seat_number,
    }));
  } catch {
    return null;
  }
};

export const saveGuestsToSupabase = async (guests: GuestItem[]): Promise<boolean> => {
  const client = getSupabase();
  if (!client) return false;

  try {
    const records = guests.map((g) => ({
      id: g.id,
      name: g.name,
      category: g.category,
      assigned_zone_id: g.assignedZoneId,
      table_name: g.tableName,
      pax: g.pax,
      status: g.status,
      dietary: g.dietary,
      souvenir_given: g.souvenirGiven,
      seat_number: g.seatNumber,
      updated_at: new Date().toISOString(),
    }));

    const { error } = await client.from('guest_list').upsert(records);
    return !error;
  } catch {
    return false;
  }
};

export const deleteGuestFromSupabase = async (guestId: string): Promise<boolean> => {
  const client = getSupabase();
  if (!client) return false;

  try {
    const { error } = await client.from('guest_list').delete().eq('id', guestId);
    return !error;
  } catch {
    return false;
  }
};

// --- VENDORS ---
export const fetchVendorsFromSupabase = async (): Promise<VendorContact[] | null> => {
  const client = getSupabase();
  if (!client) return null;

  try {
    const { data, error } = await client.from('vendor_contacts').select('*');
    if (error || !data || data.length === 0) return null;

    return data.map((v: any) => ({
      id: v.id,
      category: v.category,
      company: v.company,
      picName: v.pic_name,
      phone: v.phone,
      assignedZones: v.assigned_zones || [],
      htChannel: v.ht_channel,
      readinessPercent: v.readiness_percent,
      status: v.status || 'Ready',
    }));
  } catch {
    return null;
  }
};

export const saveVendorsToSupabase = async (vendors: VendorContact[]): Promise<boolean> => {
  const client = getSupabase();
  if (!client) return false;

  try {
    const records = vendors.map((v) => ({
      id: v.id,
      category: v.category,
      company: v.company,
      pic_name: v.picName,
      phone: v.phone,
      assigned_zones: v.assignedZones,
      ht_channel: v.htChannel,
      readiness_percent: v.readinessPercent,
      status: v.status,
      updated_at: new Date().toISOString(),
    }));

    const { error } = await client.from('vendor_contacts').upsert(records);
    return !error;
  } catch {
    return false;
  }
};

export const deleteVendorFromSupabase = async (vendorId: string): Promise<boolean> => {
  const client = getSupabase();
  if (!client) return false;

  try {
    const { error } = await client.from('vendor_contacts').delete().eq('id', vendorId);
    return !error;
  } catch {
    return false;
  }
};

// --- MASS SEED TO SUPABASE ---
export const seedAllDataToSupabase = async (
  config: WeddingConfig,
  zones: VenueZone[],
  rundown: RundownEvent[],
  guests: GuestItem[],
  vendors: VendorContact[]
): Promise<{ success: boolean; message: string }> => {
  if (!isSupabaseConfigured()) {
    return { success: false, message: 'Supabase belum dikonfigurasi di .env' };
  }

  try {
    await saveWeddingConfigToSupabase(config);
    await saveZonesToSupabase(zones);
    await saveRundownToSupabase(rundown);
    await saveGuestsToSupabase(guests);
    await saveVendorsToSupabase(vendors);
    return { success: true, message: 'Seluruh data berhasil di-upload dan disinkronkan ke Supabase Cloud!' };
  } catch (err: any) {
    return { success: false, message: err?.message || 'Gagal melakukan seed data ke Supabase' };
  }
};
