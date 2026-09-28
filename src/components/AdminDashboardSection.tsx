import React, { useState } from 'react';
import { 
  VenueZone, 
  RundownEvent, 
  GuestItem, 
  VendorContact, 
  WeddingConfig, 
  FloorLevel, 
  ZoneStatus 
} from '../types';
import { 
  Sliders, Plus, Edit2, Trash2, Save, RotateCcw, 
  CheckCircle2, AlertTriangle, Users, Utensils, 
  Clock, MapPin, Radio, Sparkles, X, ChevronRight,
  ShieldCheck, FileText, Download, Upload, Compass,
  Database, Cloud, ExternalLink, RefreshCw, Check, Copy
} from 'lucide-react';
import { FloorPlanDesigner } from './FloorPlanDesigner';
import { WeddingCalculatorSection } from './WeddingCalculatorSection';
import { isSupabaseConfigured, SUPABASE_URL } from '../lib/supabase';
import { testSupabaseConnection, seedAllDataToSupabase } from '../services/supabaseService';

interface AdminDashboardSectionProps {
  weddingConfig: WeddingConfig;
  onUpdateWeddingConfig: (newConfig: WeddingConfig) => void;
  zones: VenueZone[];
  onAddZone: (newZone: VenueZone) => void;
  onUpdateZone: (updatedZone: VenueZone) => void;
  onDeleteZone: (zoneId: string) => void;
  rundown: RundownEvent[];
  onAddRundown: (newEvent: RundownEvent) => void;
  onUpdateRundown: (updatedEvent: RundownEvent) => void;
  onDeleteRundown: (eventId: string) => void;
  guests: GuestItem[];
  onAddGuest: (newGuest: GuestItem) => void;
  onUpdateGuest: (updatedGuest: GuestItem) => void;
  onDeleteGuest: (guestId: string) => void;
  vendors: VendorContact[];
  onAddVendor: (newVendor: VendorContact) => void;
  onUpdateVendor: (updatedVendor: VendorContact) => void;
  onDeleteVendor: (vendorId: string) => void;
  onResetAllData: () => void;
  onSelectZoneOnMap: (zoneId: string) => void;
  activeFloor: FloorLevel;
  onChangeFloor: (floor: FloorLevel) => void;
}

type AdminSubTab = 'designer' | 'config' | 'zones' | 'rundown' | 'guests' | 'vendors' | 'calculator' | 'supabase';

export const AdminDashboardSection: React.FC<AdminDashboardSectionProps> = ({
  weddingConfig,
  onUpdateWeddingConfig,
  zones,
  onAddZone,
  onUpdateZone,
  onDeleteZone,
  rundown,
  onAddRundown,
  onUpdateRundown,
  onDeleteRundown,
  guests,
  onAddGuest,
  onUpdateGuest,
  onDeleteGuest,
  vendors,
  onAddVendor,
  onUpdateVendor,
  onDeleteVendor,
  onResetAllData,
  onSelectZoneOnMap,
  activeFloor,
  onChangeFloor,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<AdminSubTab>('designer');

  // Form states for Editing or Adding Zone
  const [editingZone, setEditingZone] = useState<VenueZone | null>(null);
  const [isAddingZone, setIsAddingZone] = useState(false);

  // Form states for Editing or Adding Rundown Event
  const [editingRundown, setEditingRundown] = useState<RundownEvent | null>(null);
  const [isAddingRundown, setIsAddingRundown] = useState(false);

  // Form states for Editing or Adding Guest
  const [editingGuest, setEditingGuest] = useState<GuestItem | null>(null);
  const [isAddingGuest, setIsAddingGuest] = useState(false);

  // Form states for Editing or Adding Vendor
  const [editingVendor, setEditingVendor] = useState<VendorContact | null>(null);
  const [isAddingVendor, setIsAddingVendor] = useState(false);

  // General Wedding Config Local Draft
  const [configDraft, setConfigDraft] = useState<WeddingConfig>({ ...weddingConfig });

  // Custom In-App Confirmation Modal State (replaces window.confirm which is blocked in iframes)
  const [confirmDialog, setConfirmDialog] = useState<{
    title: string;
    message: string;
    confirmText?: string;
    onConfirm: () => void;
  } | null>(null);

  // Supabase Sync States
  const [isTestingSupabase, setIsTestingSupabase] = useState(false);
  const [supabaseTestResult, setSupabaseTestResult] = useState<{ success: boolean; message: string } | null>(null);
  const [isSeedingSupabase, setIsSeedingSupabase] = useState(false);
  const [supabaseSeedResult, setSupabaseSeedResult] = useState<{ success: boolean; message: string } | null>(null);
  const [copiedEnv, setCopiedEnv] = useState(false);

  const handleTestConnection = async () => {
    setIsTestingSupabase(true);
    setSupabaseTestResult(null);
    const res = await testSupabaseConnection();
    setSupabaseTestResult(res);
    setIsTestingSupabase(false);
  };

  const handleSeedAllData = async () => {
    setIsSeedingSupabase(true);
    setSupabaseSeedResult(null);
    const res = await seedAllDataToSupabase(weddingConfig, zones, rundown, guests, vendors);
    setSupabaseSeedResult(res);
    setIsSeedingSupabase(false);
  };

  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateWeddingConfig(configDraft);
  };

  // Export JSON backup
  const handleExportJson = () => {
    const backupData = {
      weddingConfig,
      zones,
      rundown,
      guests,
      vendors,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Wedding_Data_${weddingConfig.coupleName.replace(/\s+/g, '_')}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Top Banner Admin */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#2A2016] via-[#1E1721] to-[#121013] text-[#FAF7F2] border border-[#B8860B]/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wider bg-[#B8860B] text-white flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> MASTER ADMIN CONTROL
            </span>
            <span className="text-xs text-amber-200/80">
              Hak akses penuh: Manajemen Pengantin, Denah Zona, Rundown, Tamu, & Vendor
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Pusat Pengaturan & Konfigurasi Acara
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl">
            Semua perubahan di mode admin ini langsung memperbarui peta denah interaktif, perhitungan rasio katering, daftar meja tamu, dan monitor kru.
          </p>
        </div>

        {/* Global Reset & Export Buttons */}
        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={handleExportJson}
            className="px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-amber-400" />
            <span>Export Data Backup</span>
          </button>
          <button
            onClick={() => {
              setConfirmDialog({
                title: 'Reset Seluruh Data Default',
                message: 'Yakin ingin mereset seluruh data kembali ke kondisi default hari-H? Perubahan yang belum di-backup akan dikembalikan ke setelan awal.',
                confirmText: 'Ya, Reset Data',
                onConfirm: onResetAllData,
              });
            }}
            className="px-4 py-2.5 rounded-2xl bg-rose-600/30 hover:bg-rose-600/50 text-rose-200 border border-rose-500/40 text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Data Default</span>
          </button>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#E5DACD] dark:border-[#2C242E]">
        {[
          { id: 'designer', label: '📐 Studio Gambar Denah', icon: Compass, badge: 'Visual Editor' },
          { id: 'config', label: '💍 Informasi Pengantin & Venue', icon: Sliders },
          { id: 'zones', label: `🗺️ Tabel Zona (${zones.length})`, icon: MapPin },
          { id: 'rundown', label: `⏱️ Master Rundown (${rundown.length})`, icon: Clock },
          { id: 'guests', label: `👥 Daftar Tamu & Kursi (${guests.length})`, icon: Users },
          { id: 'vendors', label: `📻 Vendor & Tim HT (${vendors.length})`, icon: Radio },
          { id: 'calculator', label: '📊 Kalkulator Logistik', icon: FileText },
          { id: 'supabase', label: '⚡ Supabase & Vercel', icon: Database, badge: 'Cloud DB' },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as AdminSubTab)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-[#B8860B] text-white shadow-md'
                  : 'bg-white dark:bg-[#1E1921] text-[#6C5E56] dark:text-[#A79890] hover:bg-[#F2ECE1] dark:hover:bg-[#322738] border border-[#DFCFC0] dark:border-[#382C3D]'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              {tab.badge && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                  isActive ? 'bg-white/20 text-white' : 'bg-[#FAF4ED] dark:bg-[#2A222D] text-[#B8860B]'
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* SUB-TAB 0: INTERACTIVE VISUAL FLOOR PLAN DESIGNER (STUDIO GAMBAR DENAH) */}
      {activeSubTab === 'designer' && (
        <FloorPlanDesigner
          zones={zones}
          onAddZone={onAddZone}
          onUpdateZone={onUpdateZone}
          onDeleteZone={onDeleteZone}
          activeFloor={activeFloor}
          onChangeFloor={onChangeFloor}
        />
      )}

      {/* SUB-TAB 1: CONFIGURATION OF WEDDING & EVENT */}
      {activeSubTab === 'config' && (
        <form onSubmit={handleSaveConfig} className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1A161D] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-[#E5DACD] dark:border-[#2C242E] pb-4">
            <div>
              <h3 className="text-lg font-bold text-[#221A18] dark:text-[#FFF7EE]">
                Informasi Pokok Pernikahan & Venue
              </h3>
              <p className="text-xs text-[#7B6E67] dark:text-[#A79890]">
                Ubah identitas mempelai, tanggal hari-H, lokasi ballroom, dan fase aktif acara.
              </p>
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-2xl bg-[#B8860B] hover:bg-[#9E7309] text-white text-xs font-semibold shadow-md flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>Simpan Perubahan</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#4B3C35] dark:text-[#DDD0C5]">Nama Panggilan Pengantin</label>
              <input
                type="text"
                value={configDraft.coupleName}
                onChange={(e) => setConfigDraft({ ...configDraft, coupleName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] text-sm text-[#2D2422] dark:text-white focus:ring-1 focus:ring-[#B8860B] outline-none"
                placeholder="Arya & Nadira"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#4B3C35] dark:text-[#DDD0C5]">Tanggal & Hari Acara</label>
              <input
                type="text"
                value={configDraft.dateStr}
                onChange={(e) => setConfigDraft({ ...configDraft, dateStr: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] text-sm text-[#2D2422] dark:text-white focus:ring-1 focus:ring-[#B8860B] outline-none"
                placeholder="Sabtu, 24 Oktober 2026"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#4B3C35] dark:text-[#DDD0C5]">Nama Lengkap Pengantin Pria</label>
              <input
                type="text"
                value={configDraft.groomName}
                onChange={(e) => setConfigDraft({ ...configDraft, groomName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] text-sm text-[#2D2422] dark:text-white focus:ring-1 focus:ring-[#B8860B] outline-none"
                placeholder="Raden Arya Wirawan, B.Eng"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#4B3C35] dark:text-[#DDD0C5]">Nama Lengkap Pengantin Wanita</label>
              <input
                type="text"
                value={configDraft.brideName}
                onChange={(e) => setConfigDraft({ ...configDraft, brideName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] text-sm text-[#2D2422] dark:text-white focus:ring-1 focus:ring-[#B8860B] outline-none"
                placeholder="Nadira Anindita, M.Ds"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#4B3C35] dark:text-[#DDD0C5]">Nama Gedung / Hotel Venue</label>
              <input
                type="text"
                value={configDraft.venueName}
                onChange={(e) => setConfigDraft({ ...configDraft, venueName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] text-sm text-[#2D2422] dark:text-white focus:ring-1 focus:ring-[#B8860B] outline-none"
                placeholder="The Grand Ballroom & Glasshouse Garden"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#4B3C35] dark:text-[#DDD0C5]">Hall / Level Lokasi</label>
              <input
                type="text"
                value={configDraft.ballroomHall}
                onChange={(e) => setConfigDraft({ ...configDraft, ballroomHall: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] text-sm text-[#2D2422] dark:text-white focus:ring-1 focus:ring-[#B8860B] outline-none"
                placeholder="Level 2, Grand Hotel Kempinski Jakarta"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#4B3C35] dark:text-[#DDD0C5]">Fase Acara Sedang Berlangsung (Live Banner)</label>
              <input
                type="text"
                value={configDraft.activePhase}
                onChange={(e) => setConfigDraft({ ...configDraft, activePhase: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] text-sm text-[#2D2422] dark:text-white focus:ring-1 focus:ring-[#B8860B] outline-none"
                placeholder="Resepsi Sesi 1 (Dinner & Ramah Tamah)"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#4B3C35] dark:text-[#DDD0C5]">Agenda Spesifik Terkini (Current Cue)</label>
              <input
                type="text"
                value={configDraft.currentEvent}
                onChange={(e) => setConfigDraft({ ...configDraft, currentEvent: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] text-sm text-[#2D2422] dark:text-white focus:ring-1 focus:ring-[#B8860B] outline-none"
                placeholder="Kirab Pengantin & Grand Toast"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#4B3C35] dark:text-[#DDD0C5]">Total Undangan Tersebar</label>
              <input
                type="number"
                value={configDraft.totalGuests}
                onChange={(e) => setConfigDraft({ ...configDraft, totalGuests: Number(e.target.value) })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] text-sm text-[#2D2422] dark:text-white focus:ring-1 focus:ring-[#B8860B] outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#4B3C35] dark:text-[#DDD0C5]">Target Porsi Katering (Pax)</label>
              <input
                type="number"
                value={configDraft.cateringPax}
                onChange={(e) => setConfigDraft({ ...configDraft, cateringPax: Number(e.target.value) })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] text-sm text-[#2D2422] dark:text-white focus:ring-1 focus:ring-[#B8860B] outline-none"
              />
            </div>
          </div>
        </form>
      )}

      {/* SUB-TAB 2: ZONES & VENUE LAYOUT MANAGEMENT */}
      {activeSubTab === 'zones' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-[#221A18] dark:text-[#FFF7EE]">
                Daftar & Penataan Zona Denah
              </h3>
              <p className="text-xs text-[#7B6E67] dark:text-[#A79890]">
                Tambah panggung baru, atur koordinat posisi di denah (X, Y, Width, Height), ubah status, serta PIC.
              </p>
            </div>
            <button
              onClick={() => {
                const emptyZone: VenueZone = {
                  id: `zone-${Date.now()}`,
                  name: 'Zona Baru Tambahan',
                  shortCode: `ZN-${zones.length + 1}`,
                  category: 'dining',
                  floor: 'grand_ballroom',
                  status: 'ready',
                  coordinates: { x: 50, y: 50, width: 14, height: 12, shape: 'rect' },
                  capacity: '10 Orang',
                  dimensions: '3.0m x 3.0m',
                  pic: { name: 'Kru Lapangan', role: 'Usher / Floor Team', phone: '+62 812-0000-1111', htChannel: 'CH-01' },
                  description: 'Deskripsi zona baru yang ditambahkan dari panel admin.',
                  equipment: ['Kursi Tiffany', 'Meja Kayu'],
                  checklist: [{ id: 'chk-1', text: 'Pemeriksaan kebersihan & posisi', done: true }],
                  timeline: [{ time: '18:00 - 22:00', activity: 'Standby pelayanan', status: 'active' }],
                  notes: 'Ditambahkan via Admin Mode',
                };
                setEditingZone(emptyZone);
                setIsAddingZone(true);
              }}
              className="px-4 py-2.5 rounded-2xl bg-[#B8860B] hover:bg-[#9E7309] text-white text-xs font-semibold shadow-md flex items-center gap-2 self-start"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Zona Baru ke Denah</span>
            </button>
          </div>

          {/* Zones Table List */}
          <div className="rounded-3xl bg-white dark:bg-[#1A161D] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FAF7F2] dark:bg-[#201923] text-[#7B6E67] dark:text-[#A79890] font-semibold border-b border-[#E5DACD] dark:border-[#2C242E]">
                  <tr>
                    <th className="px-5 py-3.5">Kode & Nama Zona</th>
                    <th className="px-4 py-3.5">Lantai / Denah</th>
                    <th className="px-4 py-3.5">Kategori</th>
                    <th className="px-4 py-3.5">Koordinat (X, Y)</th>
                    <th className="px-4 py-3.5">PIC & HT</th>
                    <th className="px-4 py-3.5 text-center">Status</th>
                    <th className="px-5 py-3.5 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFE7DC] dark:divide-[#2C242E]">
                  {zones.map((zone) => (
                    <tr key={zone.id} className="hover:bg-[#FBF9F6] dark:hover:bg-[#241C27] transition-colors">
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-[#B8860B] bg-[#FAF4ED] dark:bg-[#28212C] px-2 py-0.5 rounded">
                            {zone.shortCode}
                          </span>
                          <div>
                            <div className="font-bold text-[#2D2422] dark:text-white">{zone.name}</div>
                            <div className="text-[11px] text-[#7B6E67] dark:text-[#A79890]">{zone.capacity}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3.5">
                        <span className="capitalize">{zone.floor.replace('_', ' ')}</span>
                      </td>
                      <td className="px-4 py-3.5">
                        <span className="px-2 py-0.5 rounded-full text-[10px] bg-[#EFE7DC] dark:bg-[#2C242E] capitalize font-medium">
                          {zone.category.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 font-mono text-[11px]">
                        X:{zone.coordinates.x}%, Y:{zone.coordinates.y}% ({zone.coordinates.width}x{zone.coordinates.height})
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="font-medium text-[#2D2422] dark:text-white">{zone.pic.name}</div>
                        <div className="text-[11px] text-[#B8860B] font-mono">{zone.pic.htChannel}</div>
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                          zone.status === 'ready'
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                            : zone.status === 'in_progress'
                            ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                            : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                        }`}>
                          {zone.status}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-right space-x-1.5 whitespace-nowrap">
                        <button
                          onClick={() => onSelectZoneOnMap(zone.id)}
                          className="p-1.5 rounded-lg bg-[#FAF4ED] dark:bg-[#2A222D] text-[#865D36] hover:bg-[#F2ECE1]"
                          title="Lihat di Layout"
                        >
                          <MapPin className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            setEditingZone(zone);
                            setIsAddingZone(false);
                          }}
                          className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 hover:bg-blue-100"
                          title="Edit Zona"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            setConfirmDialog({
                              title: 'Hapus Zona dari Denah',
                              message: `Yakin ingin menghapus zona "${zone.name}" (${zone.shortCode}) dari denah layout gedung?`,
                              confirmText: 'Ya, Hapus Zona',
                              onConfirm: () => onDeleteZone(zone.id),
                            });
                          }}
                          className="p-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-300 hover:bg-rose-100 cursor-pointer"
                          title="Hapus Zona"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 3: MASTER RUNDOWN MANAGEMENT */}
      {activeSubTab === 'rundown' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-[#221A18] dark:text-[#FFF7EE]">
                Manajemen Jadwal Rundown Acara
              </h3>
              <p className="text-xs text-[#7B6E67] dark:text-[#A79890]">
                Tambah jadwal baru, ubah urutan jam, ganti lagu pengiring, atau pindah fase acara.
              </p>
            </div>
            <button
              onClick={() => {
                const newRd: RundownEvent = {
                  id: `rd-${Date.now()}`,
                  time: '20:00',
                  endTime: '20:30',
                  title: 'Acara Tambahan',
                  phase: 'resepsi',
                  zoneId: zones[0]?.id || 'zone-pelaminan',
                  zoneName: zones[0]?.name || 'Pelaminan Utama',
                  pic: 'Bagas WO',
                  htChannel: 'CH-01',
                  status: 'upcoming',
                  cues: 'Lampu sorot ke panggung',
                  musicTrack: 'Pop Romance Acoustic',
                  details: 'Rincian kegiatan baru yang ditambahkan oleh admin.',
                };
                setEditingRundown(newRd);
                setIsAddingRundown(true);
              }}
              className="px-4 py-2.5 rounded-2xl bg-[#B8860B] hover:bg-[#9E7309] text-white text-xs font-semibold shadow-md flex items-center gap-2 self-start"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Jadwal Rundown</span>
            </button>
          </div>

          <div className="space-y-3">
            {rundown.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-white dark:bg-[#1A161D] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <div className="px-3 py-1 rounded-xl bg-[#FAF4ED] dark:bg-[#2A222D] font-mono text-xs font-bold text-[#B8860B]">
                    {item.time} - {item.endTime}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm text-[#221A18] dark:text-white">{item.title}</h4>
                      <span className="text-[10px] px-2 py-0.5 rounded-full capitalize bg-[#EFE7DC] dark:bg-[#2C242E] font-medium">
                        Fase: {item.phase}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                        item.status === 'completed'
                          ? 'bg-emerald-100 text-emerald-800'
                          : item.status === 'current'
                          ? 'bg-amber-100 text-amber-800 animate-pulse'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs text-[#7B6E67] dark:text-[#A79890] mt-0.5">{item.details}</p>
                    <div className="text-[11px] text-[#B8860B] flex items-center gap-2 mt-1">
                      <span>Zona: {item.zoneName}</span>
                      <span>•</span>
                      <span>PIC: {item.pic} ({item.htChannel})</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end md:self-center">
                  <button
                    onClick={() => {
                      setEditingRundown(item);
                      setIsAddingRundown(false);
                    }}
                    className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 hover:bg-blue-100"
                    title="Edit Item"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      setConfirmDialog({
                        title: 'Hapus Mata Acara',
                        message: `Yakin ingin menghapus mata acara "${item.title}" (${item.time}) dari susunan rundown?`,
                        confirmText: 'Ya, Hapus Acara',
                        onConfirm: () => onDeleteRundown(item.id),
                      });
                    }}
                    className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-300 hover:bg-rose-100 cursor-pointer"
                    title="Hapus Item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 4: GUEST & SEATING MANAGEMENT */}
      {activeSubTab === 'guests' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-[#221A18] dark:text-[#FFF7EE]">
                Daftar Tamu & Alokasi Meja
              </h3>
              <p className="text-xs text-[#7B6E67] dark:text-[#A79890]">
                Tambah tamu undangan baru, ubah nomor kursi, tentukan catatan alergi/diet, atau hapus data.
              </p>
            </div>
            <button
              onClick={() => {
                const newGuest: GuestItem = {
                  id: `g-${Date.now()}`,
                  name: 'Tamu Undangan Baru',
                  category: 'Sahabat',
                  assignedZoneId: zones[0]?.id || 'zone-tables-a',
                  tableName: 'Meja A1',
                  pax: 2,
                  status: 'Terkonfirmasi',
                  dietary: 'Normal',
                  souvenirGiven: false,
                  seatNumber: 'Seat-1',
                };
                setEditingGuest(newGuest);
                setIsAddingGuest(true);
              }}
              className="px-4 py-2.5 rounded-2xl bg-[#B8860B] hover:bg-[#9E7309] text-white text-xs font-semibold shadow-md flex items-center gap-2 self-start"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Tamu Baru</span>
            </button>
          </div>

          <div className="rounded-3xl bg-white dark:bg-[#1A161D] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FAF7F2] dark:bg-[#201923] text-[#7B6E67] dark:text-[#A79890] font-semibold border-b border-[#E5DACD] dark:border-[#2C242E]">
                  <tr>
                    <th className="px-5 py-3.5">Nama Tamu</th>
                    <th className="px-4 py-3.5">Kategori</th>
                    <th className="px-4 py-3.5">Meja & Kursi</th>
                    <th className="px-4 py-3.5 text-center">Pax</th>
                    <th className="px-4 py-3.5">Diet / Catatan</th>
                    <th className="px-4 py-3.5 text-center">Status</th>
                    <th className="px-5 py-3.5 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFE7DC] dark:divide-[#2C242E]">
                  {guests.map((g) => (
                    <tr key={g.id} className="hover:bg-[#FBF9F6] dark:hover:bg-[#241C27] transition-colors">
                      <td className="px-5 py-3.5 font-bold text-[#2D2422] dark:text-white">
                        {g.name}
                      </td>
                      <td className="px-4 py-3.5">
                        <span className="px-2 py-0.5 rounded bg-[#FAF4ED] dark:bg-[#28212C] text-[#865D36] dark:text-[#D4AF37]">
                          {g.category}
                        </span>
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="font-semibold">{g.tableName}</div>
                        {g.seatNumber && <div className="text-[11px] text-gray-500 font-mono">{g.seatNumber}</div>}
                      </td>
                      <td className="px-4 py-3.5 text-center font-bold font-mono">
                        {g.pax}
                      </td>
                      <td className="px-4 py-3.5 text-[#6A5A50] dark:text-[#C5B7AE]">
                        {g.dietary}
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          g.status === 'Hadir' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {g.status}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-right space-x-1.5 whitespace-nowrap">
                        <button
                          onClick={() => {
                            setEditingGuest(g);
                            setIsAddingGuest(false);
                          }}
                          className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            setConfirmDialog({
                              title: 'Hapus Data Tamu',
                              message: `Yakin ingin menghapus data tamu "${g.name}" (${g.category}) dari daftar undangan?`,
                              confirmText: 'Ya, Hapus Tamu',
                              onConfirm: () => onDeleteGuest(g.id),
                            });
                          }}
                          className="p-1.5 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 cursor-pointer"
                          title="Hapus Tamu"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 5: VENDORS & HT MANAGEMENT */}
      {activeSubTab === 'vendors' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-[#221A18] dark:text-[#FFF7EE]">
                Direktori Vendor & Kru Lapangan
              </h3>
              <p className="text-xs text-[#7B6E67] dark:text-[#A79890]">
                Atur kontak vendor, alokasi channel HT, dan status kesiapan vendor hari-H.
              </p>
            </div>
            <button
              onClick={() => {
                const newVendor: VendorContact = {
                  id: `v-${Date.now()}`,
                  category: 'Dekorasi',
                  company: 'Vendor Baru',
                  picName: 'Nama PIC',
                  phone: '+62 812-9988-7766',
                  htChannel: 'CH-01',
                  assignedZones: [zones[0]?.id || 'zone-pelaminan'],
                  readinessPercent: 100,
                  status: 'Ready',
                };
                setEditingVendor(newVendor);
                setIsAddingVendor(true);
              }}
              className="px-4 py-2.5 rounded-2xl bg-[#B8860B] hover:bg-[#9E7309] text-white text-xs font-semibold shadow-md flex items-center gap-2 self-start"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Mitra Vendor</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vendors.map((v) => (
              <div
                key={v.id}
                className="p-5 rounded-3xl bg-white dark:bg-[#1A161D] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm flex flex-col justify-between space-y-3"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#FAF4ED] dark:bg-[#28212C] text-[#B8860B]">
                      {v.category}
                    </span>
                    <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {v.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-base text-[#221A18] dark:text-white">{v.company}</h4>
                  <div className="text-xs text-[#6A5A50] dark:text-[#C5B7AE]">
                    PIC: <strong className="text-[#2D2422] dark:text-white">{v.picName}</strong>
                  </div>
                  <div className="text-xs font-mono text-[#865D36] dark:text-[#D4AF37]">
                    Telepon: {v.phone}
                  </div>
                  <div className="text-xs font-mono font-bold text-[#B8860B]">
                    HT: {v.htChannel}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#EFE7DC] dark:border-[#2C242E] flex items-center justify-end gap-2">
                  <button
                    onClick={() => {
                      setEditingVendor(v);
                      setIsAddingVendor(false);
                    }}
                    className="p-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100"
                    title="Edit Vendor"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      setConfirmDialog({
                        title: 'Hapus Mitra Vendor',
                        message: `Yakin ingin menghapus mitra vendor "${v.company}" dari direktori dan alokasi HT?`,
                        confirmText: 'Ya, Hapus Vendor',
                        onConfirm: () => onDeleteVendor(v.id),
                      });
                    }}
                    className="p-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 cursor-pointer"
                    title="Hapus Vendor"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 6: WEDDING CALCULATOR */}
      {activeSubTab === 'calculator' && (
        <div className="bg-white dark:bg-[#1A161D] rounded-3xl border border-[#E5DACD] dark:border-[#2C242E] shadow-sm overflow-hidden">
          <WeddingCalculatorSection />
        </div>
      )}

      {/* SUB-TAB 7: SUPABASE & VERCEL INTEGRATION */}
      {activeSubTab === 'supabase' && (
        <div className="space-y-6">
          {/* Header Banner */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-[#18231C] via-[#1A2624] to-[#121A15] border border-emerald-600/30 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-600 text-white flex items-center gap-1.5 shadow-sm">
                  <Database className="w-3.5 h-3.5" /> SUPABASE + NEXT.JS + VERCEL
                </span>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                  isSupabaseConfigured()
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                }`}>
                  {isSupabaseConfigured() ? '● Terhubung ke Cloud DB' : '○ Mode Lokal (Offline)'}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Pusat Sinkronisasi Supabase & Kesiapan Vercel
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
                Aplikasi ini telah disesuaikan agar siap dideploy ke <strong>Vercel</strong> menggunakan <strong>Next.js 15 (App Router)</strong> dan database <strong>Supabase PostgreSQL Realtime</strong>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <button
                type="button"
                onClick={handleTestConnection}
                disabled={isTestingSupabase}
                className="px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 text-emerald-400 ${isTestingSupabase ? 'animate-spin' : ''}`} />
                <span>{isTestingSupabase ? 'Menguji...' : 'Uji Koneksi Supabase'}</span>
              </button>

              <button
                type="button"
                onClick={handleSeedAllData}
                disabled={isSeedingSupabase || !isSupabaseConfigured()}
                className="px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Cloud className="w-4 h-4" />
                <span>{isSeedingSupabase ? 'Mengunggah...' : 'Upload & Seed Data ke Cloud'}</span>
              </button>
            </div>
          </div>

          {/* Test & Seed Result Alerts */}
          {supabaseTestResult && (
            <div className={`p-4 rounded-2xl border text-xs flex items-center gap-3 animate-fadeIn ${
              supabaseTestResult.success
                ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200'
                : 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-200'
            }`}>
              {supabaseTestResult.success ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0" />
              )}
              <div className="flex-1 font-medium">{supabaseTestResult.message}</div>
              <button
                type="button"
                onClick={() => setSupabaseTestResult(null)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {supabaseSeedResult && (
            <div className={`p-4 rounded-2xl border text-xs flex items-center gap-3 animate-fadeIn ${
              supabaseSeedResult.success
                ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200'
                : 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-200'
            }`}>
              {supabaseSeedResult.success ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
              )}
              <div className="flex-1 font-medium">{supabaseSeedResult.message}</div>
              <button
                type="button"
                onClick={() => setSupabaseSeedResult(null)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Grid: Status Kredensial & Checklist Deploy GitHub / Vercel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Box 1: Status Environment Variables & Koneksi */}
            <div className="p-5 rounded-3xl bg-white dark:bg-[#1A161D] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-[#E5DACD] dark:border-[#2C242E] pb-3">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-bold text-[#2D2422] dark:text-white">
                    Konfigurasi Environment Supabase
                  </span>
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                  isSupabaseConfigured() ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-700'
                }`}>
                  {isSupabaseConfigured() ? 'TERPASANG' : 'BELUM AKTIF'}
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="font-semibold text-gray-500 dark:text-gray-400 block mb-1">
                    Supabase Project URL:
                  </label>
                  <div className="p-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#221A25] font-mono text-[11px] text-[#2D2422] dark:text-gray-200 border border-[#DFCFC0] dark:border-[#382C3D] break-all">
                    {SUPABASE_URL || 'Belum diisi (Tambahkan NEXT_PUBLIC_SUPABASE_URL di file .env)'}
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-gray-500 dark:text-gray-400 block mb-1">
                    Status Skrip SQL Schema:
                  </label>
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-300 text-xs">
                    ✅ File <code>/supabase/schema.sql</code> telah dibuat otomatis di repositori ini, mencakup tabel:
                    <ul className="mt-1 list-disc list-inside text-[11px] space-y-0.5">
                      <li><code>public.wedding_config</code> (Pengantin & Venue)</li>
                      <li><code>public.venue_zones</code> (Denah & Meja/Panggung)</li>
                      <li><code>public.rundown_events</code> (Susunan Acara)</li>
                      <li><code>public.guest_list</code> (Undangan & Meja)</li>
                      <li><code>public.vendor_contacts</code> (Direktori Vendor)</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#4B3C35] dark:text-[#DDD0C5] mb-1.5">
                    <span>Contoh File .env.local untuk Next.js / Vercel:</span>
                    <button
                      type="button"
                      onClick={() => {
                        const envContent = `NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"\nNEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key-here"`;
                        navigator.clipboard?.writeText(envContent);
                        setCopiedEnv(true);
                        setTimeout(() => setCopiedEnv(false), 2500);
                      }}
                      className="text-[#B8860B] hover:underline flex items-center gap-1 text-[11px] cursor-pointer"
                    >
                      {copiedEnv ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedEnv ? 'Tersalin!' : 'Salin Snippet'}</span>
                    </button>
                  </div>
                  <pre className="p-3 rounded-xl bg-[#201A24] text-amber-200 font-mono text-[11px] overflow-x-auto leading-relaxed border border-[#3A2D40]">
{`NEXT_PUBLIC_SUPABASE_URL="https://xxx.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJh..."`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Box 2: Langkah Push ke GitHub & Deploy Vercel */}
            <div className="p-5 rounded-3xl bg-white dark:bg-[#1A161D] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-[#E5DACD] dark:border-[#2C242E] pb-3">
                <div className="flex items-center gap-2">
                  <Cloud className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-bold text-[#2D2422] dark:text-white">
                    Checklist Sebelum Push ke GitHub & Vercel
                  </span>
                </div>
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded">
                  4 LANGKAH
                </span>
              </div>

              <div className="space-y-3.5 text-xs text-[#554740] dark:text-[#C5B7AE]">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#FAF7F2] dark:bg-[#201924] border border-[#DFCFC0] dark:border-[#382C3D]">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h5 className="font-bold text-[#2D2422] dark:text-white">Eksekusi SQL di Supabase</h5>
                    <p className="text-[11px] mt-0.5 text-gray-500 dark:text-gray-400">
                      Buka <em>Dashboard Supabase &gt; SQL Editor</em>, lalu salin dan jalankan seluruh isi file <code>supabase/schema.sql</code> untuk membuat seluruh tabel & RLS.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#FAF7F2] dark:bg-[#201924] border border-[#DFCFC0] dark:border-[#382C3D]">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <div>
                    <h5 className="font-bold text-[#2D2422] dark:text-white">Push Kode ke GitHub</h5>
                    <p className="text-[11px] mt-0.5 text-gray-500 dark:text-gray-400">
                      Jalankan perintah git standar di terminal komputer Anda:
                    </p>
                    <code className="block mt-1 font-mono text-[10px] bg-black/80 text-emerald-300 p-2 rounded-lg">
                      git add .<br />
                      git commit -m "feat: Next.js + Supabase wedding suite"<br />
                      git push origin main
                    </code>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#FAF7F2] dark:bg-[#201924] border border-[#DFCFC0] dark:border-[#382C3D]">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <div>
                    <h5 className="font-bold text-[#2D2422] dark:text-white">Import Repository di Vercel</h5>
                    <p className="text-[11px] mt-0.5 text-gray-500 dark:text-gray-400">
                      Vercel otomatis mendeteksi <strong>Next.js (App Router)</strong> berkat file <code>vercel.json</code>, <code>next.config.mjs</code>, dan direktori <code>app/</code>.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#FAF7F2] dark:bg-[#201924] border border-[#DFCFC0] dark:border-[#382C3D]">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                    4
                  </span>
                  <div>
                    <h5 className="font-bold text-[#2D2422] dark:text-white">Set Environment Variables di Vercel</h5>
                    <p className="text-[11px] mt-0.5 text-gray-500 dark:text-gray-400">
                      Di halaman <em>Settings &gt; Environment Variables</em> Vercel, tambahkan <code>NEXT_PUBLIC_SUPABASE_URL</code> dan <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* MODAL EDIT / ADD ZONE */}
      {editingZone && (
        <div className="fixed inset-0 z-[100] bg-[#FAF7F2] dark:bg-[#1A161D] overflow-y-auto">
          <div className="w-full max-w-4xl mx-auto p-6 sm:p-10 space-y-6 min-h-screen flex flex-col">
            <div className="flex items-center justify-between border-b border-[#E5DACD] dark:border-[#2C242E] pb-3">
              <h3 className="font-bold text-lg text-[#221A18] dark:text-white">
                {isAddingZone ? 'Tambah Zona Baru ke Denah' : `Edit Zona: ${editingZone.name}`}
              </h3>
              <button onClick={() => setEditingZone(null)} className="p-1 rounded-full hover:bg-gray-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold">Kode Zona (Singkat di Denah)</label>
                <input
                  type="text"
                  value={editingZone.shortCode}
                  onChange={(e) => setEditingZone({ ...editingZone, shortCode: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                  placeholder="Contoh: STAGE-01, VIP-01, BUF-01"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold">Nama Lengkap Zona</label>
                <input
                  type="text"
                  value={editingZone.name}
                  onChange={(e) => setEditingZone({ ...editingZone, name: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                  placeholder="Pelaminan Utama & Royal Stage"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold">Lantai / Denah</label>
                <select
                  value={editingZone.floor}
                  onChange={(e) => setEditingZone({ ...editingZone, floor: e.target.value as FloorLevel })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                >
                  <option value="grand_ballroom">Grand Ballroom (Indoor Reception)</option>
                  <option value="garden_terrace">Glasshouse Garden (Outdoor Akad)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold">Kategori Zona</label>
                <select
                  value={editingZone.category}
                  onChange={(e) => setEditingZone({ ...editingZone, category: e.target.value as any })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                >
                  <option value="stage_vip">👑 Pelaminan & VIP</option>
                  <option value="catering">🍽️ Katering & Gubukan</option>
                  <option value="dining">🪑 Meja Tamu Reguler</option>
                  <option value="entertainment">🎶 Musik & Hiburan</option>
                  <option value="reception_ops">📋 Registrasi & Operasional</option>
                  <option value="outdoor_ceremony">🌿 Akad Outdoor</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold">Posisi Koordinat X (0% - 100%)</label>
                <input
                  type="number"
                  min="5"
                  max="95"
                  value={editingZone.coordinates.x}
                  onChange={(e) => setEditingZone({
                    ...editingZone,
                    coordinates: { ...editingZone.coordinates, x: Number(e.target.value) }
                  })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold">Posisi Koordinat Y (0% - 100%)</label>
                <input
                  type="number"
                  min="5"
                  max="95"
                  value={editingZone.coordinates.y}
                  onChange={(e) => setEditingZone({
                    ...editingZone,
                    coordinates: { ...editingZone.coordinates, y: Number(e.target.value) }
                  })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold">Lebar di Denah (Width)</label>
                <input
                  type="number"
                  min="6"
                  max="50"
                  value={editingZone.coordinates.width}
                  onChange={(e) => setEditingZone({
                    ...editingZone,
                    coordinates: { ...editingZone.coordinates, width: Number(e.target.value) }
                  })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold">Tinggi di Denah (Height)</label>
                <input
                  type="number"
                  min="6"
                  max="40"
                  value={editingZone.coordinates.height}
                  onChange={(e) => setEditingZone({
                    ...editingZone,
                    coordinates: { ...editingZone.coordinates, height: Number(e.target.value) }
                  })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold">Bentuk Bentang (Shape)</label>
                <select
                  value={editingZone.coordinates.shape || 'rect'}
                  onChange={(e) => setEditingZone({
                    ...editingZone,
                    coordinates: { ...editingZone.coordinates, shape: e.target.value as any }
                  })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                >
                  <option value="rect">Kotak (Rectangular Stage)</option>
                  <option value="circle">Bulat (Round Table / Feature)</option>
                  <option value="pill">Lonjong (Pill / Island)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold">Status Operasional</label>
                <select
                  value={editingZone.status}
                  onChange={(e) => setEditingZone({ ...editingZone, status: e.target.value as ZoneStatus })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                >
                  <option value="ready">✅ Siap (Ready)</option>
                  <option value="in_progress">⏳ Sedang Disiapkan (In Progress)</option>
                  <option value="attention">⚠️ Perlu Atensi (Attention)</option>
                  <option value="standby">🟣 Standby</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold">Kapasitas</label>
                <input
                  type="text"
                  value={editingZone.capacity}
                  onChange={(e) => setEditingZone({ ...editingZone, capacity: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                  placeholder="Contoh: 10 Kursi, 800 Porsi"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold">Dimensi Fisik Asli</label>
                <input
                  type="text"
                  value={editingZone.dimensions}
                  onChange={(e) => setEditingZone({ ...editingZone, dimensions: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                  placeholder="Contoh: 14.0m x 4.5m"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold">Nama PIC Penanggung Jawab</label>
                <input
                  type="text"
                  value={editingZone.pic.name}
                  onChange={(e) => setEditingZone({
                    ...editingZone,
                    pic: { ...editingZone.pic, name: e.target.value }
                  })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold">Saluran HT PIC</label>
                <input
                  type="text"
                  value={editingZone.pic.htChannel}
                  onChange={(e) => setEditingZone({
                    ...editingZone,
                    pic: { ...editingZone.pic, htChannel: e.target.value }
                  })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                  placeholder="CH-01 / CH-02 / CH-03"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold">Deskripsi Zona</label>
                <textarea
                  value={editingZone.description}
                  onChange={(e) => setEditingZone({ ...editingZone, description: e.target.value })}
                  rows={3}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="font-bold">Checklist Kesiapan (Pisahkan dengan baris baru)</label>
                <textarea
                  value={editingZone.checklist.map(c => c.text).join('\n')}
                  onChange={(e) => {
                    const lines = e.target.value.split('\n').filter(l => l.trim() !== '');
                    const newChecklist = lines.map((text, i) => {
                      const existing = editingZone.checklist.find(c => c.text === text);
                      return existing || { id: Date.now().toString() + i, text, done: false };
                    });
                    setEditingZone({ ...editingZone, checklist: newChecklist });
                  }}
                  rows={3}
                  placeholder="Contoh:&#10;Cek Sound System&#10;Kembang Meja&#10;Buku Tamu"
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 pt-3 border-t border-[#E5DACD] dark:border-[#2C242E]">
              {!isAddingZone ? (
                <button
                  type="button"
                  onClick={() => {
                    const zoneToDelete = editingZone;
                    setConfirmDialog({
                      title: 'Hapus Zona dari Denah',
                      message: `Yakin ingin menghapus zona "${zoneToDelete.name}" (${zoneToDelete.shortCode}) dari denah gedung?`,
                      confirmText: 'Ya, Hapus Zona',
                      onConfirm: () => {
                        onDeleteZone(zoneToDelete.id);
                        setEditingZone(null);
                      },
                    });
                  }}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/60 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900/50 flex items-center gap-1.5 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Hapus Zona</span>
                </button>
              ) : <div />}
              <div className="flex-1" />
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setEditingZone(null)}
                  className="px-6 py-3 rounded-xl text-sm font-semibold bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (isAddingZone) {
                      onAddZone(editingZone);
                    } else {
                      onUpdateZone(editingZone);
                    }
                    setEditingZone(null);
                  }}
                  className="px-8 py-3 rounded-xl text-sm font-bold bg-[#B8860B] hover:bg-[#9E7309] text-white shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  <Save className="w-5 h-5" />
                  <span>Simpan Zona</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL EDIT / ADD RUNDOWN */}
      {editingRundown && (
        <div className="fixed inset-0 z-[100] bg-[#FAF7F2] dark:bg-[#1A161D] overflow-y-auto">
          <div className="w-full max-w-4xl mx-auto p-6 sm:p-10 space-y-6 min-h-screen flex flex-col">
            <div className="flex items-center justify-between border-b border-[#E5DACD] dark:border-[#2C242E] pb-3">
              <h3 className="font-bold text-lg text-[#221A18] dark:text-white">
                {isAddingRundown ? 'Tambah Mata Acara Baru' : `Edit Rundown: ${editingRundown.title}`}
              </h3>
              <button onClick={() => setEditingRundown(null)} className="p-1 rounded-full hover:bg-gray-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold">Jam Mulai (WIB)</label>
                <input
                  type="text"
                  value={editingRundown.time}
                  onChange={(e) => setEditingRundown({ ...editingRundown, time: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                  placeholder="19:00"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold">Jam Selesai (WIB)</label>
                <input
                  type="text"
                  value={editingRundown.endTime}
                  onChange={(e) => setEditingRundown({ ...editingRundown, endTime: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                  placeholder="19:15"
                  required
                />
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="font-bold">Judul Acara</label>
                <input
                  type="text"
                  value={editingRundown.title}
                  onChange={(e) => setEditingRundown({ ...editingRundown, title: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                  placeholder="Kirab Agung Pengantin & Grand Entrance"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold">Fase Acara</label>
                <select
                  value={editingRundown.phase}
                  onChange={(e) => setEditingRundown({ ...editingRundown, phase: e.target.value as any })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                >
                  <option value="persiapan">Persiapan</option>
                  <option value="akad">Akad Nikah</option>
                  <option value="kirab">Kirab Pengantin</option>
                  <option value="resepsi">Resepsi</option>
                  <option value="closing">Penutupan (Closing)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold">Status Acara</label>
                <select
                  value={editingRundown.status}
                  onChange={(e) => setEditingRundown({ ...editingRundown, status: e.target.value as any })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                >
                  <option value="completed">Selesai (Completed)</option>
                  <option value="current">Sedang Berlangsung (Current / LIVE)</option>
                  <option value="upcoming">Akan Datang (Upcoming)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold">Zona Lokasi Terkait</label>
                <select
                  value={editingRundown.zoneId}
                  onChange={(e) => {
                    const z = zones.find(item => item.id === e.target.value);
                    setEditingRundown({
                      ...editingRundown,
                      zoneId: e.target.value,
                      zoneName: z?.name || 'Zona Terpilih'
                    });
                  }}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                >
                  {zones.map((z) => (
                    <option key={z.id} value={z.id}>
                      [{z.shortCode}] {z.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold">PIC Lapangan & HT</label>
                <input
                  type="text"
                  value={editingRundown.pic}
                  onChange={(e) => setEditingRundown({ ...editingRundown, pic: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                  placeholder="Bagas WO / Dimas"
                />
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="font-bold">Soundtrack / Music Track</label>
                <input
                  type="text"
                  value={editingRundown.musicTrack}
                  onChange={(e) => setEditingRundown({ ...editingRundown, musicTrack: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                  placeholder="A Thousand Years - Live Orchestra Strings"
                />
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="font-bold">Petunjuk Teknis (Cues Lighting/MC)</label>
                <input
                  type="text"
                  value={editingRundown.cues}
                  onChange={(e) => setEditingRundown({ ...editingRundown, cues: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                  placeholder="Blackout 30%, Follow spot menyala, Cold spark saat suapan"
                />
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="font-bold">Rincian Kegiatan</label>
                <textarea
                  value={editingRundown.details}
                  onChange={(e) => setEditingRundown({ ...editingRundown, details: e.target.value })}
                  rows={2}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-3 border-t border-[#E5DACD] dark:border-[#2C242E]">
              <button
                onClick={() => setEditingRundown(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  if (isAddingRundown) {
                    onAddRundown(editingRundown);
                  } else {
                    onUpdateRundown(editingRundown);
                  }
                  setEditingRundown(null);
                }}
                className="px-5 py-2 rounded-xl text-xs font-semibold bg-[#B8860B] hover:bg-[#9E7309] text-white shadow-md flex items-center gap-1.5"
              >
                <Save className="w-4 h-4" />
                <span>Simpan Rundown</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL EDIT / ADD GUEST */}
      {editingGuest && (
        <div className="fixed inset-0 z-[100] bg-[#FAF7F2] dark:bg-[#1A161D] overflow-y-auto">
          <div className="w-full max-w-4xl mx-auto p-6 sm:p-10 space-y-6 min-h-screen flex flex-col">
            <div className="flex items-center justify-between border-b border-[#E5DACD] dark:border-[#2C242E] pb-3">
              <h3 className="font-bold text-lg text-[#221A18] dark:text-white">
                {isAddingGuest ? 'Tambah Tamu Baru' : `Edit Tamu: ${editingGuest.name}`}
              </h3>
              <button onClick={() => setEditingGuest(null)} className="p-1 rounded-full hover:bg-gray-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1 sm:col-span-2">
                <label className="font-bold">Nama Tamu & Rombongan</label>
                <input
                  type="text"
                  value={editingGuest.name}
                  onChange={(e) => setEditingGuest({ ...editingGuest, name: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold">Kategori Tamu</label>
                <select
                  value={editingGuest.category}
                  onChange={(e) => setEditingGuest({ ...editingGuest, category: e.target.value as any })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                >
                  <option value="VIP Keluarga">👑 VIP Keluarga</option>
                  <option value="VVIP Pejabat">🎖️ VVIP Pejabat</option>
                  <option value="Keluarga Pria">Keluarga Pria</option>
                  <option value="Keluarga Wanita">Keluarga Wanita</option>
                  <option value="Sahabat">🥂 Sahabat</option>
                  <option value="Rekan Bisnis">💼 Rekan Bisnis</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold">Jumlah Tamu (Pax)</label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={editingGuest.pax}
                  onChange={(e) => setEditingGuest({ ...editingGuest, pax: Number(e.target.value) })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold">Alokasi Zona Meja</label>
                <select
                  value={editingGuest.assignedZoneId}
                  onChange={(e) => {
                    const z = zones.find(item => item.id === e.target.value);
                    setEditingGuest({
                      ...editingGuest,
                      assignedZoneId: e.target.value,
                      tableName: z?.name || 'Meja'
                    });
                  }}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                >
                  {zones.map((z) => (
                    <option key={z.id} value={z.id}>
                      [{z.shortCode}] {z.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold">Nomor Meja / Label</label>
                <input
                  type="text"
                  value={editingGuest.tableName}
                  onChange={(e) => setEditingGuest({ ...editingGuest, tableName: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                  placeholder="VIP Table 01 / Meja A1"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold">Nomor Kursi (Opsional)</label>
                <input
                  type="text"
                  value={editingGuest.seatNumber || ''}
                  onChange={(e) => setEditingGuest({ ...editingGuest, seatNumber: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                  placeholder="Seat A-1"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold">Status Kehadiran</label>
                <select
                  value={editingGuest.status}
                  onChange={(e) => setEditingGuest({ ...editingGuest, status: e.target.value as any })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                >
                  <option value="Hadir">Hadir</option>
                  <option value="Terkonfirmasi">Terkonfirmasi</option>
                  <option value="Menunggu">Menunggu</option>
                </select>
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="font-bold">Catatan Makanan / Dietary</label>
                <input
                  type="text"
                  value={editingGuest.dietary}
                  onChange={(e) => setEditingGuest({ ...editingGuest, dietary: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                  placeholder="No Seafood / Halal Only / Teh Hangat"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-3 border-t border-[#E5DACD] dark:border-[#2C242E]">
              <div className="flex-1" />
              <button
                onClick={() => setEditingGuest(null)}
                className="px-6 py-3 rounded-xl text-sm font-semibold bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  if (isAddingGuest) {
                    onAddGuest(editingGuest);
                  } else {
                    onUpdateGuest(editingGuest);
                  }
                  setEditingGuest(null);
                }}
                className="px-8 py-3 rounded-xl text-sm font-bold bg-[#B8860B] hover:bg-[#9E7309] text-white shadow-md flex items-center gap-1.5"
              >
                <Save className="w-5 h-5" />
                <span>Simpan Tamu</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL EDIT / ADD VENDOR */}
      {editingVendor && (
        <div className="fixed inset-0 z-[100] bg-[#FAF7F2] dark:bg-[#1A161D] overflow-y-auto">
          <div className="w-full max-w-4xl mx-auto p-6 sm:p-10 space-y-6 min-h-screen flex flex-col">
            <div className="flex items-center justify-between border-b border-[#E5DACD] dark:border-[#2C242E] pb-3">
              <h3 className="font-bold text-lg text-[#221A18] dark:text-white">
                {isAddingVendor ? 'Tambah Mitra Vendor' : `Edit Vendor: ${editingVendor.company}`}
              </h3>
              <button onClick={() => setEditingVendor(null)} className="p-1 rounded-full hover:bg-gray-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1 sm:col-span-2">
                <label className="font-bold">Nama Perusahaan / Vendor</label>
                <input
                  type="text"
                  value={editingVendor.company}
                  onChange={(e) => setEditingVendor({ ...editingVendor, company: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold">Kategori Layanan</label>
                <select
                  value={editingVendor.category}
                  onChange={(e) => setEditingVendor({ ...editingVendor, category: e.target.value as any })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                >
                  <option value="Dekorasi">Dekorasi</option>
                  <option value="Katering">Katering</option>
                  <option value="MUA & Busana">MUA & Busana</option>
                  <option value="Fotografi & Video">Fotografi & Video</option>
                  <option value="Sound & Lighting">Sound & Lighting</option>
                  <option value="Entertainment & Band">Entertainment & Band</option>
                  <option value="MC & Host">MC & Host</option>
                  <option value="Venue Manager">Venue Manager</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold">Saluran HT</label>
                <input
                  type="text"
                  value={editingVendor.htChannel}
                  onChange={(e) => setEditingVendor({ ...editingVendor, htChannel: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                  placeholder="CH-01 / CH-02"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold">Nama PIC Lapangan</label>
                <input
                  type="text"
                  value={editingVendor.picName}
                  onChange={(e) => setEditingVendor({ ...editingVendor, picName: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold">Nomor Handphone / WA</label>
                <input
                  type="text"
                  value={editingVendor.phone}
                  onChange={(e) => setEditingVendor({ ...editingVendor, phone: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                  placeholder="+62 812-..."
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-3 border-t border-[#E5DACD] dark:border-[#2C242E]">
              <div className="flex-1" />
              <button
                onClick={() => setEditingVendor(null)}
                className="px-6 py-3 rounded-xl text-sm font-semibold bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  if (isAddingVendor) {
                    onAddVendor(editingVendor);
                  } else {
                    onUpdateVendor(editingVendor);
                  }
                  setEditingVendor(null);
                }}
                className="px-8 py-3 rounded-xl text-sm font-bold bg-[#B8860B] hover:bg-[#9E7309] text-white shadow-md flex items-center gap-1.5"
              >
                <Save className="w-5 h-5" />
                <span>Simpan Vendor</span>
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Global In-App Confirmation Modal (Safe for Iframes) */}
      {confirmDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md p-6 rounded-3xl bg-white dark:bg-[#1A161D] border border-rose-300 dark:border-rose-900/60 shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-100 dark:bg-rose-950/70 text-rose-600 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#2D2422] dark:text-white">
                  {confirmDialog.title}
                </h4>
                <p className="text-xs text-[#7B6E67] dark:text-[#A79890] mt-1 leading-relaxed">
                  {confirmDialog.message}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-[#EFE7DC] dark:border-[#2C242E]">
              <button
                type="button"
                onClick={() => setConfirmDialog(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 cursor-pointer"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => {
                  confirmDialog.onConfirm();
                  setConfirmDialog(null);
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>{confirmDialog.confirmText || 'Ya, Lanjutkan Hapus'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
