/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar, NavTab } from './components/Navbar';
import { WeddingHeroHeader } from './components/WeddingHeroHeader';
import { InteractiveVenueMap } from './components/InteractiveVenueMap';
import { ZoneDetailsDrawer } from './components/ZoneDetailsDrawer';
import { RundownSection } from './components/RundownSection';
import { GuestSeatingSection } from './components/GuestSeatingSection';
import { CateringFnbSection } from './components/CateringFnbSection';
import { VendorHtSection } from './components/VendorHtSection';
import { WeddingCalculatorSection } from './components/WeddingCalculatorSection';

import { 
  INITIAL_WEDDING_CONFIG, 
  INITIAL_ZONES, 
  RUNDOWN_TIMELINE, 
  GUEST_LIST, 
  VENDORS_LIST 
} from './data/weddingData';
import { VenueZone, ZoneCategory, FloorLevel, GuestItem, RundownEvent, VendorContact, WeddingConfig } from './types';
import { CheckCircle2, Bell, MapPin, Sparkles, CloudCheck, Cloud } from 'lucide-react';
import { isSupabaseConfigured } from './lib/supabase';
import { 
  fetchWeddingConfigFromSupabase, 
  saveWeddingConfigToSupabase,
  fetchZonesFromSupabase, 
  saveZonesToSupabase, 
  deleteZoneFromSupabase,
  fetchRundownFromSupabase, 
  saveRundownToSupabase, 
  deleteRundownFromSupabase,
  fetchGuestsFromSupabase, 
  saveGuestsToSupabase, 
  deleteGuestFromSupabase,
  fetchVendorsFromSupabase, 
  saveVendorsToSupabase, 
  deleteVendorFromSupabase 
} from './services/supabaseService';

function WeddingApp() {
  const [weddingConfig, setWeddingConfig] = useState<WeddingConfig>(INITIAL_WEDDING_CONFIG);
  const [zones, setZones] = useState<VenueZone[]>(INITIAL_ZONES);
  const [rundown, setRundown] = useState<RundownEvent[]>(RUNDOWN_TIMELINE);
  const [guests, setGuests] = useState<GuestItem[]>(GUEST_LIST);
  const [vendors, setVendors] = useState<VendorContact[]>(VENDORS_LIST);
  const [isCloudSynced, setIsCloudSynced] = useState<boolean>(false);

  const [selectedZone, setSelectedZone] = useState<VenueZone | null>(null);
  const [activeFloor, setActiveFloor] = useState<FloorLevel>('grand_ballroom');
  const [activeCategory, setActiveCategory] = useState<ZoneCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<NavTab>('layout');
  const [activeMode, setActiveMode] = useState<'organizer' | 'guest'>('organizer');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Initial sync from Supabase Cloud if configured
  useEffect(() => {
    if (!isSupabaseConfigured()) return;
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
        setIsCloudSynced(true);
      } catch (err) {
        console.warn('Supabase fetch fallback to local data:', err);
      }
    };
    loadFromCloud();
  }, []);

  // --- Zone Handlers ---
  const handleAddZone = (newZone: VenueZone) => {
    const updated = [...zones, newZone];
    setZones(updated);
    showToast(`Zona baru "${newZone.name}" berhasil ditambahkan ke denah!`);
    if (isSupabaseConfigured()) {
      saveZonesToSupabase(updated);
    }
  };

  const handleUpdateZone = (updatedZone: VenueZone) => {
    const updated = zones.map((z) => (z.id === updatedZone.id ? updatedZone : z));
    setZones(updated);
    setSelectedZone(updatedZone);
    showToast(`Zona "${updatedZone.name}" berhasil diperbarui.`);
    if (isSupabaseConfigured()) {
      saveZonesToSupabase(updated);
    }
  };

  const handleDeleteZone = (zoneId: string) => {
    const updated = zones.filter((z) => z.id !== zoneId);
    setZones(updated);
    if (selectedZone?.id === zoneId) setSelectedZone(null);
    showToast('Zona berhasil dihapus dari denah.');
    if (isSupabaseConfigured()) {
      deleteZoneFromSupabase(zoneId);
    }
  };

  // --- Rundown Handlers ---
  const handleAddRundown = (newEvent: RundownEvent) => {
    const updated = [...rundown, newEvent];
    setRundown(updated);
    showToast(`Mata acara "${newEvent.title}" berhasil ditambahkan!`);
    if (isSupabaseConfigured()) {
      saveRundownToSupabase(updated);
    }
  };

  const handleUpdateRundown = (updatedEvent: RundownEvent) => {
    const updated = rundown.map((r) => (r.id === updatedEvent.id ? updatedEvent : r));
    setRundown(updated);
    showToast(`Rundown "${updatedEvent.title}" berhasil diperbarui.`);
    if (isSupabaseConfigured()) {
      saveRundownToSupabase(updated);
    }
  };

  const handleDeleteRundown = (eventId: string) => {
    const updated = rundown.filter((r) => r.id !== eventId);
    setRundown(updated);
    showToast('Mata acara berhasil dihapus.');
    if (isSupabaseConfigured()) {
      deleteRundownFromSupabase(eventId);
    }
  };

  // --- Guest Handlers ---
  const handleAddGuest = (newGuest: GuestItem) => {
    const updated = [...guests, newGuest];
    setGuests(updated);
    showToast(`Tamu "${newGuest.name}" berhasil didaftarkan!`);
    if (isSupabaseConfigured()) {
      saveGuestsToSupabase(updated);
    }
  };

  const handleUpdateGuest = (updatedGuest: GuestItem) => {
    const updated = guests.map((g) => (g.id === updatedGuest.id ? updatedGuest : g));
    setGuests(updated);
    showToast(`Data tamu "${updatedGuest.name}" berhasil diperbarui.`);
    if (isSupabaseConfigured()) {
      saveGuestsToSupabase(updated);
    }
  };

  const handleDeleteGuest = (guestId: string) => {
    const updated = guests.filter((g) => g.id !== guestId);
    setGuests(updated);
    showToast('Data tamu berhasil dihapus.');
    if (isSupabaseConfigured()) {
      deleteGuestFromSupabase(guestId);
    }
  };

  const handleToggleGuestStatus = (guestId: string) => {
    const updated = guests.map((g) => {
      if (g.id === guestId) {
        const newStatus: 'Hadir' | 'Terkonfirmasi' | 'Menunggu' = 
          g.status === 'Hadir' ? 'Terkonfirmasi' : 'Hadir';
        return { ...g, status: newStatus };
      }
      return g;
    });
    setGuests(updated);
    if (isSupabaseConfigured()) {
      saveGuestsToSupabase(updated);
    }
    // Update attended guests count
    setTimeout(() => {
      setGuests((currentGuests) => {
        const count = currentGuests.filter((g) => g.status === 'Hadir').reduce((acc, c) => acc + c.pax, 0);
        setWeddingConfig((cfg) => {
          const newCfg = { ...cfg, attendedGuests: count };
          if (isSupabaseConfigured()) saveWeddingConfigToSupabase(newCfg);
          return newCfg;
        });
        return currentGuests;
      });
    }, 50);
    showToast('Status kehadiran tamu berhasil diperbarui.');
  };

  // --- Vendor Handlers ---
  const handleAddVendor = (newVendor: VendorContact) => {
    const updated = [...vendors, newVendor];
    setVendors(updated);
    showToast(`Mitra vendor "${newVendor.company}" berhasil didaftarkan!`);
    if (isSupabaseConfigured()) {
      saveVendorsToSupabase(updated);
    }
  };

  const handleUpdateVendor = (updatedVendor: VendorContact) => {
    const updated = vendors.map((v) => (v.id === updatedVendor.id ? updatedVendor : v));
    setVendors(updated);
    showToast(`Vendor "${updatedVendor.company}" diperbarui.`);
    if (isSupabaseConfigured()) {
      saveVendorsToSupabase(updated);
    }
  };

  const handleDeleteVendor = (vendorId: string) => {
    const updated = vendors.filter((v) => v.id !== vendorId);
    setVendors(updated);
    showToast('Vendor berhasil dihapus dari direktori.');
    if (isSupabaseConfigured()) {
      deleteVendorFromSupabase(vendorId);
    }
  };

  const handleUpdateWeddingConfig = (newCfg: WeddingConfig) => {
    setWeddingConfig(newCfg);
    showToast('Informasi Pengantin & Venue berhasil disimpan!');
    if (isSupabaseConfigured()) {
      saveWeddingConfigToSupabase(newCfg);
    }
  };

  // --- Reset All Data ---
  const handleResetAllData = () => {
    setWeddingConfig(INITIAL_WEDDING_CONFIG);
    setZones(INITIAL_ZONES);
    setRundown(RUNDOWN_TIMELINE);
    setGuests(GUEST_LIST);
    setVendors(VENDORS_LIST);
    showToast('Seluruh data berhasil di-reset ke setelan awal default hari-H.');
  };

  const handleSelectZoneById = (zoneId: string) => {
    const target = zones.find((z) => z.id === zoneId);
    if (target) {
      setActiveFloor(target.floor);
      setActiveTab('layout');
      setSelectedZone(target);
      window.scrollTo({ top: 380, behavior: 'smooth' });
    }
  };

  const handleRefillRequest = (zoneName: string) => {
    showToast(`Panggilan Refill dikirim ke Chef Plataran untuk: ${zoneName}`);
  };

  const cateringZones = zones.filter((z) => z.category === 'catering');

  const handleModeChange = (mode: 'organizer' | 'guest') => {
    setActiveMode(mode);
    if (mode === 'guest') {
      setActiveTab('layout');
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FAF7F2] dark:bg-[#121013] text-[#2D2422] dark:text-[#F8F3ED] font-sans antialiased selection:bg-[#E8D5C4] dark:selection:bg-[#382C3D] selection:text-[#2D2422] dark:selection:text-[#F8F3ED] transition-colors duration-300">
      <Navbar
        activeTab={activeTab}
        onSelectTab={(t) => {
          if (t === 'admin') window.location.href = '/admin';
          else setActiveTab(t);
        }}
        coupleName={weddingConfig.coupleName}
      />

      {/* Hero Header with Live Event Stats */}
      <WeddingHeroHeader
        config={weddingConfig}
        activeMode={activeMode}
        onChangeMode={handleModeChange}
        onOpenMap={() => {
          setActiveTab('layout');
          window.scrollTo({ top: 380, behavior: 'smooth' });
        }}
      />

      {/* Main Dynamic Workspace by Tab */}
      <main className="w-full">
        {activeTab === 'layout' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
            {/* Section description */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E5DACD] dark:border-[#2C242E] pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#221A18] dark:text-[#FFF7EE] flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#B8860B]" />
                  <span>Peta Layout Interaktif Gedung Pernikahan</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#7B6E67] dark:text-[#A79890] mt-0.5">
                  Klik pada bagian/zona mana pun untuk melihat rincian spesifikasi, person in charge (PIC), menu katering, dan checklist kesiapan.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/admin"
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#B8860B] text-white hover:bg-[#9E7309] shadow-sm flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Atur Denah di Mode Admin</span>
                </a>
                <div className="text-xs text-[#865D36] dark:text-[#D4AF37] font-semibold bg-[#FAF4ED] dark:bg-[#201923] px-3 py-1.5 rounded-xl border border-[#DFCFC0] dark:border-[#382C3D]">
                  Total: {zones.filter(z => z.floor === activeFloor).length} Zona Terpetakan
                </div>
              </div>
            </div>

            {/* Interactive Floor Plan Map */}
            <InteractiveVenueMap
              zones={zones}
              selectedZone={selectedZone}
              onSelectZone={setSelectedZone}
              activeFloor={activeFloor}
              onChangeFloor={setActiveFloor}
              activeCategory={activeCategory}
              onChangeCategory={setActiveCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />

            {/* Quick Grid of all zones for fast direct access */}
            <div className="pt-6 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#865D36] dark:text-[#D4AF37]">
                Direktori Cepat Zona Gedung ({activeFloor === 'grand_ballroom' ? 'Grand Ballroom' : 'Glasshouse Garden'})
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {zones
                  .filter((z) => z.floor === activeFloor)
                  .map((zone) => {
                    const isSelected = selectedZone?.id === zone.id;
                    return (
                      <button
                        key={zone.id}
                        onClick={() => setSelectedZone(zone)}
                        className={`p-3 rounded-2xl text-left border transition-all ${
                          isSelected
                            ? 'bg-[#FEF3C7] dark:bg-[#382C3D] border-[#B8860B] ring-2 ring-[#B8860B]/50'
                            : 'bg-white dark:bg-[#1A161D] border-[#E5DACD] dark:border-[#2C242E] hover:border-[#B8860B]/50'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#865D36] dark:text-[#D4AF37] mb-1">
                          <span>{zone.shortCode}</span>
                          <span className={`w-2 h-2 rounded-full ${
                            zone.status === 'ready' ? 'bg-emerald-500' : zone.status === 'in_progress' ? 'bg-amber-500' : 'bg-rose-500'
                          }`} />
                        </div>
                        <div className="text-xs font-bold text-[#221A18] dark:text-[#FFF7EE] truncate">
                          {zone.name}
                        </div>
                        <div className="text-[11px] text-[#7B6E67] dark:text-[#A79890] truncate mt-0.5">
                          {zone.pic.name}
                        </div>
                      </button>
                    );
                  })}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'rundown' && (
          <RundownSection
            rundown={rundown}
            onSelectZoneId={handleSelectZoneById}
          />
        )}

        {activeTab === 'guests' && (
          <GuestSeatingSection
            guests={guests}
            onHighlightZone={handleSelectZoneById}
          />
        )}

        {activeTab === 'catering' && (
          <CateringFnbSection
            cateringZones={cateringZones}
            onSelectZoneId={handleSelectZoneById}
            onRefillRequest={handleRefillRequest}
          />
        )}

        {activeTab === 'vendors' && (
          <VendorHtSection
            vendors={vendors}
            onSelectZoneId={handleSelectZoneById}
          />
        )}

        {activeTab === 'calculator' && (
          <WeddingCalculatorSection />
        )}


      </main>

      {/* Floating Side Drawer for Zone Details (The Inspector) */}
      <ZoneDetailsDrawer
        zone={selectedZone}
        onClose={() => setSelectedZone(null)}
        onHighlightZoneOnMap={handleSelectZoneById}
      />

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-2xl bg-black/85 text-white backdrop-blur-md shadow-2xl border border-white/20 text-xs font-medium flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-16 border-t border-[#E5DACD] dark:border-[#2C242E] bg-white/50 dark:bg-[#161217]/50 backdrop-blur-sm py-8 px-4 text-center text-xs text-[#7B6E67] dark:text-[#A79890]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-[#221A18] dark:text-[#FFF7EE]">NuptialVibe</span>
            <span>•</span>
            <span>Aplikasi Wedding Organizer & Peta Layout Gedung Interaktif</span>
          </div>
          <div>
            The Wedding of {weddingConfig.coupleName} • {weddingConfig.venueName}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <WeddingApp />
    </ThemeProvider>
  );
}
