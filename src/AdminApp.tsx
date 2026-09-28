import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AdminDashboardSection } from './components/AdminDashboardSection';
import { 
  INITIAL_WEDDING_CONFIG, 
  INITIAL_ZONES, 
  RUNDOWN_TIMELINE, 
  GUEST_LIST, 
  VENDORS_LIST 
} from './data/weddingData';
import { VenueZone, GuestItem, RundownEvent, VendorContact, WeddingConfig, FloorLevel } from './types';
import { isSupabaseConfigured } from './lib/supabase';
import { 
  fetchWeddingConfigFromSupabase, saveWeddingConfigToSupabase,
  fetchZonesFromSupabase, saveZonesToSupabase, deleteZoneFromSupabase,
  fetchRundownFromSupabase, saveRundownToSupabase, deleteRundownFromSupabase,
  fetchGuestsFromSupabase, saveGuestsToSupabase, deleteGuestFromSupabase,
  fetchVendorsFromSupabase, saveVendorsToSupabase, deleteVendorFromSupabase 
} from './services/supabaseService';
import { CheckCircle2, Lock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

function AdminAppContent() {
  const [weddingConfig, setWeddingConfig] = useState<WeddingConfig>(INITIAL_WEDDING_CONFIG);
  const [zones, setZones] = useState<VenueZone[]>(INITIAL_ZONES);
  const [rundown, setRundown] = useState<RundownEvent[]>(RUNDOWN_TIMELINE);
  const [guests, setGuests] = useState<GuestItem[]>(GUEST_LIST);
  const [vendors, setVendors] = useState<VendorContact[]>(VENDORS_LIST);
  const [activeFloor, setActiveFloor] = useState<FloorLevel>('grand_ballroom');
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  useEffect(() => {
    if (!isLoggedIn || !isSupabaseConfigured()) return;
    const loadFromCloud = async () => {
      try {
        const [cloudConfig, cloudZones, cloudRundown, cloudGuests, cloudVendors] = await Promise.all([
          fetchWeddingConfigFromSupabase(),
          fetchZonesFromSupabase(),
          fetchRundownFromSupabase(),
          fetchGuestsFromSupabase(),
          fetchVendorsFromSupabase(),
        ]);
        if (cloudConfig) setWeddingConfig(cloudConfig);
        if (cloudZones && cloudZones.length > 0) setZones(cloudZones);
        if (cloudRundown && cloudRundown.length > 0) setRundown(cloudRundown);
        if (cloudGuests && cloudGuests.length > 0) setGuests(cloudGuests);
        if (cloudVendors && cloudVendors.length > 0) setVendors(cloudVendors);
      } catch (err) {
        console.warn('Admin Supabase fetch fallback to local data:', err);
      }
    };
    loadFromCloud();
  }, [isLoggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Password salah. Silakan coba lagi.');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] dark:bg-[#121013] flex items-center justify-center p-4 transition-colors">
        <div className="max-w-md w-full bg-white dark:bg-[#1A161D] p-8 rounded-3xl border border-[#E5DACD] dark:border-[#2C242E] shadow-xl">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 text-[#B8860B] flex items-center justify-center">
              <Lock className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-2xl font-serif font-bold text-center text-[#221A18] dark:text-[#FFF7EE] mb-2">
            Admin Login
          </h2>
          <p className="text-sm text-center text-[#7B6E67] dark:text-[#A79890] mb-8">
            Silakan masukkan password untuk mengakses dashboard admin. (Password default: admin123)
          </p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan Password"
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] text-[#2D2422] dark:text-white focus:ring-2 focus:ring-[#B8860B] outline-none"
                required
              />
            </div>
            {error && <p className="text-rose-500 text-xs font-semibold">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#B8860B] hover:bg-[#9E7309] text-white font-bold transition-colors"
            >
              Masuk
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#865D36] dark:text-[#D4AF37] hover:underline">
              <ArrowLeft className="w-4 h-4" /> Kembali ke Aplikasi Utama
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // --- Zone Handlers ---
  const handleAddZone = (newZone: VenueZone) => {
    const updated = [...zones, newZone];
    setZones(updated);
    showToast(`Zona baru "${newZone.name}" ditambahkan!`);
    if (isSupabaseConfigured()) saveZonesToSupabase(updated);
  };
  const handleUpdateZone = (updatedZone: VenueZone) => {
    const updated = zones.map((z) => (z.id === updatedZone.id ? updatedZone : z));
    setZones(updated);
    showToast(`Zona "${updatedZone.name}" diperbarui.`);
    if (isSupabaseConfigured()) saveZonesToSupabase(updated);
  };
  const handleDeleteZone = (zoneId: string) => {
    const updated = zones.filter((z) => z.id !== zoneId);
    setZones(updated);
    showToast('Zona dihapus.');
    if (isSupabaseConfigured()) deleteZoneFromSupabase(zoneId);
  };

  // --- Rundown Handlers ---
  const handleAddRundown = (newEvent: RundownEvent) => {
    const updated = [...rundown, newEvent];
    setRundown(updated);
    showToast('Rundown ditambahkan!');
    if (isSupabaseConfigured()) saveRundownToSupabase(updated);
  };
  const handleUpdateRundown = (updatedEvent: RundownEvent) => {
    const updated = rundown.map((r) => (r.id === updatedEvent.id ? updatedEvent : r));
    setRundown(updated);
    showToast('Rundown diperbarui.');
    if (isSupabaseConfigured()) saveRundownToSupabase(updated);
  };
  const handleDeleteRundown = (eventId: string) => {
    const updated = rundown.filter((r) => r.id !== eventId);
    setRundown(updated);
    showToast('Rundown dihapus.');
    if (isSupabaseConfigured()) deleteRundownFromSupabase(eventId);
  };

  // --- Guest Handlers ---
  const handleAddGuest = (newGuest: GuestItem) => {
    const updated = [...guests, newGuest];
    setGuests(updated);
    showToast('Tamu ditambahkan!');
    if (isSupabaseConfigured()) saveGuestsToSupabase(updated);
  };
  const handleUpdateGuest = (updatedGuest: GuestItem) => {
    const updated = guests.map((g) => (g.id === updatedGuest.id ? updatedGuest : g));
    setGuests(updated);
    showToast('Tamu diperbarui.');
    if (isSupabaseConfigured()) saveGuestsToSupabase(updated);
  };
  const handleDeleteGuest = (guestId: string) => {
    const updated = guests.filter((g) => g.id !== guestId);
    setGuests(updated);
    showToast('Tamu dihapus.');
    if (isSupabaseConfigured()) deleteGuestFromSupabase(guestId);
  };

  // --- Vendor Handlers ---
  const handleAddVendor = (newVendor: VendorContact) => {
    const updated = [...vendors, newVendor];
    setVendors(updated);
    showToast('Vendor ditambahkan!');
    if (isSupabaseConfigured()) saveVendorsToSupabase(updated);
  };
  const handleUpdateVendor = (updatedVendor: VendorContact) => {
    const updated = vendors.map((v) => (v.id === updatedVendor.id ? updatedVendor : v));
    setVendors(updated);
    showToast('Vendor diperbarui.');
    if (isSupabaseConfigured()) saveVendorsToSupabase(updated);
  };
  const handleDeleteVendor = (vendorId: string) => {
    const updated = vendors.filter((v) => v.id !== vendorId);
    setVendors(updated);
    showToast('Vendor dihapus.');
    if (isSupabaseConfigured()) deleteVendorFromSupabase(vendorId);
  };

  const handleUpdateWeddingConfig = (newCfg: WeddingConfig) => {
    setWeddingConfig(newCfg);
    showToast('Informasi Pengantin berhasil disimpan!');
    if (isSupabaseConfigured()) saveWeddingConfigToSupabase(newCfg);
  };

  const handleResetAllData = () => {
    setWeddingConfig(INITIAL_WEDDING_CONFIG);
    setZones(INITIAL_ZONES);
    setRundown(RUNDOWN_TIMELINE);
    setGuests(GUEST_LIST);
    setVendors(VENDORS_LIST);
    showToast('Seluruh data di-reset ke default.');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] dark:bg-[#121013] text-[#2D2422] dark:text-[#F8F3ED] transition-colors relative">
      {/* Header bar for Admin */}
      <header className="bg-white dark:bg-[#1A161D] border-b border-[#E5DACD] dark:border-[#2C242E] px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <Link href="/" className="p-2 -ml-2 rounded-xl hover:bg-[#FAF7F2] dark:hover:bg-[#251E28] transition-colors text-[#7B6E67] dark:text-[#A79890]" title="Kembali ke Aplikasi Utama">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="font-serif font-bold text-xl text-[#221A18] dark:text-[#FFF7EE]">Admin Studio</h1>
            <p className="text-[11px] text-[#7B6E67] dark:text-[#A79890]">{weddingConfig.coupleName} Wedding</p>
          </div>
        </div>
        <button 
          onClick={() => setIsLoggedIn(false)}
          className="text-xs font-semibold px-4 py-2 rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-900/50 transition-colors"
        >
          Logout
        </button>
      </header>

      <main className="pb-16">
        <AdminDashboardSection
          weddingConfig={weddingConfig}
          onUpdateWeddingConfig={handleUpdateWeddingConfig}
          zones={zones}
          onAddZone={handleAddZone}
          onUpdateZone={handleUpdateZone}
          onDeleteZone={handleDeleteZone}
          rundown={rundown}
          onAddRundown={handleAddRundown}
          onUpdateRundown={handleUpdateRundown}
          onDeleteRundown={handleDeleteRundown}
          guests={guests}
          onAddGuest={handleAddGuest}
          onUpdateGuest={handleUpdateGuest}
          onDeleteGuest={handleDeleteGuest}
          vendors={vendors}
          onAddVendor={handleAddVendor}
          onUpdateVendor={handleUpdateVendor}
          onDeleteVendor={handleDeleteVendor}
          onResetAllData={handleResetAllData}
          onSelectZoneOnMap={() => {}}
          activeFloor={activeFloor}
          onChangeFloor={setActiveFloor}
        />
      </main>

      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-2xl bg-black/85 text-white backdrop-blur-md shadow-2xl border border-white/20 text-xs font-medium flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default function AdminApp() {
  return (
    <ThemeProvider>
      <AdminAppContent />
    </ThemeProvider>
  );
}
