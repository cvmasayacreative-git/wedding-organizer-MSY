import React from 'react';
import { motion } from 'motion/react';
import { WeddingConfig } from '../types';
import { 
  Calendar, MapPin, Users, Utensils, CheckCircle2, 
  Sparkles, Radio, ShieldCheck, HeartHandshake, Eye
} from 'lucide-react';

interface WeddingHeroHeaderProps {
  config: WeddingConfig;
  activeMode: 'organizer' | 'guest' | 'admin';
  onChangeMode: (mode: 'organizer' | 'guest' | 'admin') => void;
  onOpenMap: () => void;
}

export const WeddingHeroHeader: React.FC<WeddingHeroHeaderProps> = ({
  config,
  activeMode,
  onChangeMode,
  onOpenMap,
}) => {
  const checkInRate = config.totalGuests > 0 
    ? Math.min(100, Math.round((config.attendedGuests / config.totalGuests) * 100)) 
    : 0;

  const displayCoupleName = config.coupleName || 'Pernikahan Anda';
  const displaySubnames = (config.groomName || config.brideName) 
    ? `${config.groomName || 'Mempelai Pria'} & ${config.brideName || 'Mempelai Wanita'}`
    : 'Atur nama mempelai di Mode Admin';
  const displayDate = config.dateStr || 'Tanggal Acara Belum Diatur';
  const displayVenue = config.ballroomHall || config.venueName || 'Lokasi Venue Belum Diatur';

  return (
    <div className="relative overflow-hidden pt-24 pb-8 px-4 sm:px-6 lg:px-8 border-b border-[#E5DACD] dark:border-[#2C242E] bg-gradient-to-b from-[#F5EDE1]/60 via-[#FAF7F2] to-[#FAF7F2] dark:from-[#1E1721] dark:via-[#161217] dark:to-[#161217]">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Badges & Live Status */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-200 border border-amber-300 dark:border-amber-700/60 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              LIVE EVENT RUNNING
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#EFE7DC] dark:bg-[#28212C] text-[#635349] dark:text-[#D5C7BD] border border-[#DFCFC0] dark:border-[#382C3D]">
              <Radio className="w-3.5 h-3.5 text-[#B8860B]" />
              Fase Aktif: <strong className="font-semibold">{config.activePhase}</strong>
            </span>
          </div>


        </div>

        {/* Wedding Title & Event Details */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#865D36] dark:text-[#D4AF37] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              The Royal Wedding Celebration
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#221A18] dark:text-[#FFF7EE] tracking-tight">
              {displayCoupleName}
            </h1>
            <div className="text-sm sm:text-base text-[#685B54] dark:text-[#C5B7AE] font-light italic">
              {displaySubnames}
            </div>
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-[#786A63] dark:text-[#B6A69D] pt-1">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#B8860B]" />
                {displayDate}
              </span>
              <span className="hidden sm:inline opacity-40">•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#B8860B]" />
                {displayVenue}
              </span>
            </div>
          </div>

          {/* Quick Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenMap}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-[#B8860B] to-[#996515] text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              <span>Buka Peta Layout Gedung</span>
            </button>
          </div>
        </div>

        {/* Real-time KPI Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
          {/* Card 1: Tamu Hadir */}
          <div className="p-4 rounded-2xl bg-white/80 dark:bg-[#1C1720]/80 backdrop-blur-md border border-[#E5DACD] dark:border-[#2C242E] shadow-sm">
            <div className="flex items-center justify-between text-[#8A796F] dark:text-[#A79890] text-xs font-medium mb-1">
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#B8860B]" /> Kehadiran Tamu
              </span>
              <span className="font-mono text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                {checkInRate}% Check-in
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-bold font-display text-[#221A18] dark:text-[#FFF7EE]">
              {config.attendedGuests} <span className="text-xs font-normal text-[#8A796F]">/ {config.totalGuests} Undangan</span>
            </div>
            <div className="w-full h-1.5 bg-[#EFE7DC] dark:bg-[#2C242E] rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${checkInRate}%` }}
              />
            </div>
          </div>

          {/* Card 2: Meja & Kapasitas */}
          <div className="p-4 rounded-2xl bg-white/80 dark:bg-[#1C1720]/80 backdrop-blur-md border border-[#E5DACD] dark:border-[#2C242E] shadow-sm">
            <div className="flex items-center justify-between text-[#8A796F] dark:text-[#A79890] text-xs font-medium mb-1">
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-[#B8860B]" /> Meja & VIP
              </span>
              <span className="font-mono text-[11px] text-amber-600 dark:text-amber-400 font-bold">
                Semua Meja VIP Siap
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-bold font-display text-[#221A18] dark:text-[#FFF7EE]">
              {config.totalTables} <span className="text-xs font-normal text-[#8A796F]">Round Tables</span>
            </div>
            <div className="text-[11px] text-[#786A63] dark:text-[#A79890] mt-1.5 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>VIP 1-4 & Reguler A1-B6</span>
            </div>
          </div>

          {/* Card 3: Katering & Porsi */}
          <div className="p-4 rounded-2xl bg-white/80 dark:bg-[#1C1720]/80 backdrop-blur-md border border-[#E5DACD] dark:border-[#2C242E] shadow-sm">
            <div className="flex items-center justify-between text-[#8A796F] dark:text-[#A79890] text-xs font-medium mb-1">
              <span className="flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-[#B8860B]" /> Logistik Porsi
              </span>
              <span className="font-mono text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                Aman 100%
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-bold font-display text-[#221A18] dark:text-[#FFF7EE]">
              {config.cateringPax} <span className="text-xs font-normal text-[#8A796F]">Total Porsi</span>
            </div>
            <div className="text-[11px] text-[#786A63] dark:text-[#A79890] mt-1.5">
              Buffet 2 Line + 4 Live Stalls
            </div>
          </div>

          {/* Card 4: Status Rundown Acara */}
          <div className="p-4 rounded-2xl bg-white/80 dark:bg-[#1C1720]/80 backdrop-blur-md border border-[#E5DACD] dark:border-[#2C242E] shadow-sm">
            <div className="flex items-center justify-between text-[#8A796F] dark:text-[#A79890] text-xs font-medium mb-1">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#B8860B]" /> Agenda Terkini
              </span>
              <span className="text-[11px] px-1.5 py-0.5 rounded bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 font-bold">
                NOW
              </span>
            </div>
            <div className="text-sm font-bold text-[#221A18] dark:text-[#FFF7EE] truncate">
              {config.currentEvent}
            </div>
            <div className="text-[11px] text-[#786A63] dark:text-[#A79890] mt-1.5">
              Spot: Pelaminan & Red Carpet
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
