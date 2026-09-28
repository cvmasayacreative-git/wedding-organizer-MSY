import { VenueZone, RundownEvent, GuestItem, VendorContact, WeddingConfig } from '../types';

/**
 * Initial empty templates for Wedding Organizer application.
 * All sample data has been removed so you can develop directly using your Supabase database.
 */

export const INITIAL_WEDDING_CONFIG: WeddingConfig = {
  coupleName: '',
  groomName: '',
  brideName: '',
  dateStr: '',
  venueName: '',
  ballroomHall: '',
  totalGuests: 0,
  attendedGuests: 0,
  totalTables: 0,
  cateringPax: 0,
  activePhase: 'Persiapan & Setup',
  currentEvent: 'Belum dimulai'
};

export const INITIAL_ZONES: VenueZone[] = [];
export const RUNDOWN_TIMELINE: RundownEvent[] = [];
export const GUEST_LIST: GuestItem[] = [];
export const VENDORS_LIST: VendorContact[] = [];

export const HT_CHANNELS = [
  { channel: 'CH-01', name: 'Main WO & Show Director', frequency: '462.5625 MHz', user: 'Lead WO, MC, Stage Master, PA Pengantin' },
  { channel: 'CH-02', name: 'Catering & Banquet Service', frequency: '462.5875 MHz', user: 'Executive Chef, Catering Manager, Butler VIP' },
  { channel: 'CH-03', name: 'VIP Liaison & Family Escort', frequency: '462.6125 MHz', user: 'LO VVIP, LO Keluarga Pria, LO Wanita' },
  { channel: 'CH-04', name: 'Sound, Lighting & Media Doc', frequency: '462.6375 MHz', user: 'Audio Engineer, Lighting Director, Tim Dokumentasi' },
  { channel: 'CH-05', name: 'Security, Valet & Protokoler', frequency: '462.6625 MHz', user: 'Keamanan Gedung, Parkir Valet, Protokoler' }
];
