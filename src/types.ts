export type ZoneCategory = 
  | 'all'
  | 'stage_vip' 
  | 'catering' 
  | 'dining' 
  | 'entertainment' 
  | 'reception_ops' 
  | 'outdoor_ceremony';

export type FloorLevel = 'grand_ballroom' | 'garden_terrace';

export type ZoneStatus = 'ready' | 'in_progress' | 'standby' | 'attention';

export interface ZoneChecklistItem {
  id: string;
  text: string;
  done: boolean;
}

export interface ZoneTimelineItem {
  time: string;
  activity: string;
  status: 'done' | 'active' | 'upcoming';
}

export interface AssignedGuest {
  name: string;
  pax: number;
  rsvp: 'confirmed' | 'pending' | 'attended';
  vipNote?: string;
}

export interface FnbDetails {
  menu: string[];
  currentPortions: number;
  maxPortions: number;
  refillStatus: 'aman' | 'siaga' | 'habis';
  chefInCharge: string;
}

export interface VenueZone {
  id: string;
  name: string;
  shortCode: string;
  category: 'stage_vip' | 'catering' | 'dining' | 'entertainment' | 'reception_ops' | 'outdoor_ceremony';
  floor: FloorLevel;
  status: ZoneStatus;
  coordinates: {
    x: number; // percentage in viewBox (0-100)
    y: number; // percentage in viewBox (0-100)
    width: number;
    height: number;
    shape?: 'rect' | 'circle' | 'pill';
    rotation?: number;
  };
  capacity: string;
  dimensions: string;
  pic: {
    name: string;
    role: string;
    phone: string;
    htChannel: string;
  };
  description: string;
  image?: string;
  equipment: string[];
  checklist: ZoneChecklistItem[];
  timeline: ZoneTimelineItem[];
  notes: string;
  guestCount?: number;
  assignedGuests?: AssignedGuest[];
  fnbDetails?: FnbDetails;
}

export interface RundownEvent {
  id: string;
  time: string;
  endTime: string;
  title: string;
  phase: 'persiapan' | 'akad' | 'kirab' | 'resepsi' | 'closing';
  zoneId: string;
  zoneName: string;
  pic: string;
  htChannel: string;
  status: 'completed' | 'current' | 'upcoming';
  cues: string;
  musicTrack: string;
  details: string;
}

export interface GuestItem {
  id: string;
  name: string;
  category: 'VIP Keluarga' | 'VVIP Pejabat' | 'Keluarga Pria' | 'Keluarga Wanita' | 'Sahabat' | 'Rekan Bisnis';
  assignedZoneId: string;
  tableName: string;
  pax: number;
  status: 'Hadir' | 'Terkonfirmasi' | 'Menunggu';
  dietary: string;
  souvenirGiven: boolean;
  seatNumber?: string;
}

export interface VendorContact {
  id: string;
  category: 'Dekorasi' | 'Katering' | 'MUA & Busana' | 'Fotografi & Video' | 'Sound & Lighting' | 'Entertainment & Band' | 'MC & Host' | 'Venue Manager';
  company: string;
  picName: string;
  phone: string;
  htChannel: string;
  assignedZones: string[];
  readinessPercent: number;
  status: 'Ready' | 'On Site' | 'Standby';
}

export interface WeddingConfig {
  coupleName: string;
  groomName: string;
  brideName: string;
  dateStr: string;
  venueName: string;
  ballroomHall: string;
  totalGuests: number;
  attendedGuests: number;
  totalTables: number;
  cateringPax: number;
  activePhase: string;
  currentEvent: string;
}
