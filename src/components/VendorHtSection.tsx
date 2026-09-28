import React from 'react';
import { VendorContact } from '../types';
import { HT_CHANNELS } from '../data/weddingData';
import { 
  Radio, Phone, CheckCircle2, ShieldCheck, 
  MapPin, Users, Sparkles, ExternalLink 
} from 'lucide-react';

interface VendorHtSectionProps {
  vendors: VendorContact[];
  onSelectZoneId: (zoneId: string) => void;
}

export const VendorHtSection: React.FC<VendorHtSectionProps> = ({
  vendors,
  onSelectZoneId,
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="border-b border-[#E5DACD] dark:border-[#2C242E] pb-5">
        <span className="text-xs font-bold uppercase tracking-widest text-[#865D36] dark:text-[#D4AF37] flex items-center gap-1.5">
          <Radio className="w-3.5 h-3.5 text-[#B8860B] animate-pulse" /> Crew & Vendor Communications
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#221A18] dark:text-[#FFF7EE] mt-1">
          Frekuensi Radio HT & Direktori Vendor
        </h2>
        <p className="text-xs sm:text-sm text-[#7B6E67] dark:text-[#A79890] mt-1">
          Protokol komunikasi real-time antar divisi dan kontak darurat person-in-charge (PIC) seluruh vendor di lokasi.
        </p>
      </div>

      {/* HT Radio Channel Frequency Directory */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold uppercase tracking-wider text-[#865D36] dark:text-[#D4AF37] flex items-center gap-2">
          <Radio className="w-4 h-4" /> Alokasi Saluran Walkie-Talkie (HT)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {HT_CHANNELS.map((ch, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-white dark:bg-[#1E1921] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-[#B8860B] text-white">
                  {ch.channel}
                </span>
                <span className="text-[10px] font-mono text-[#7B6E67] dark:text-[#A79890]">
                  {ch.frequency}
                </span>
              </div>
              <div className="font-bold text-xs text-[#221A18] dark:text-[#FFF7EE]">
                {ch.name}
              </div>
              <div className="text-[11px] text-[#6A5A50] dark:text-[#B6A69D] leading-tight">
                {ch.user}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vendor Directory Cards */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold uppercase tracking-wider text-[#865D36] dark:text-[#D4AF37] flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" /> Direktori Mitra Vendor Resmi
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="p-4 rounded-3xl bg-white dark:bg-[#1A161D] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm flex flex-col justify-between space-y-3 hover:border-[#B8860B]/50 transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-[#EFE7DC] dark:bg-[#2B232D] text-[#865D36] dark:text-[#D4AF37]">
                    {vendor.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" /> {vendor.status}
                  </span>
                </div>

                <div className="font-bold text-sm text-[#221A18] dark:text-[#FFF7EE] line-clamp-1">
                  {vendor.company}
                </div>

                <div className="text-xs text-[#6A5A50] dark:text-[#C5B7AE]">
                  PIC: <strong className="text-[#2D2422] dark:text-white">{vendor.picName}</strong>
                </div>

                <div className="font-mono text-[11px] text-[#865D36] dark:text-[#D4AF37] flex items-center gap-1">
                  <Radio className="w-3 h-3" />
                  <span>HT: {vendor.htChannel}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#EFE7DC] dark:border-[#2C242E] flex items-center justify-between gap-2">
                <a
                  href={`tel:${vendor.phone}`}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#2D2422] dark:bg-[#F8F3ED] text-[#FAF7F2] dark:text-[#18131B] hover:opacity-90 transition-opacity flex items-center gap-1.5 flex-1 justify-center"
                >
                  <Phone className="w-3.5 h-3.5" /> Hubungi
                </a>

                {vendor.assignedZones.length > 0 && (
                  <button
                    onClick={() => onSelectZoneId(vendor.assignedZones[0])}
                    className="p-2 rounded-xl text-xs bg-[#FAF4ED] dark:bg-[#2A222D] text-[#865D36] dark:text-[#F3DFC8] border border-[#DFCFC0] dark:border-[#382C3D] hover:bg-[#F2ECE1] transition-colors"
                    title="Buka Zona Terkait di Peta Layout"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
