import React, { useState } from 'react';
import { VenueZone } from '../types';
import { 
  Utensils, AlertTriangle, CheckCircle2, Clock, 
  MapPin, RefreshCw, ChefHat, Bell, ChevronRight 
} from 'lucide-react';

interface CateringFnbSectionProps {
  cateringZones: VenueZone[];
  onSelectZoneId: (zoneId: string) => void;
  onRefillRequest: (zoneName: string) => void;
}

export const CateringFnbSection: React.FC<CateringFnbSectionProps> = ({
  cateringZones,
  onSelectZoneId,
  onRefillRequest,
}) => {
  const [refillSent, setRefillSent] = useState<string | null>(null);

  const handleRefillClick = (zone: VenueZone) => {
    onRefillRequest(zone.name);
    setRefillSent(zone.id);
    setTimeout(() => setRefillSent(null), 3000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E5DACD] dark:border-[#2C242E] pb-5">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#865D36] dark:text-[#D4AF37] flex items-center gap-1.5">
            <Utensils className="w-3.5 h-3.5" /> Food & Beverage Management
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#221A18] dark:text-[#FFF7EE] mt-1">
            Logistik Katering, Buffet & Live Stalls
          </h2>
          <p className="text-xs sm:text-sm text-[#7B6E67] dark:text-[#A79890] mt-1">
            Pantau ketersediaan porsi, status rotasi makanan hangat, dan kirim panggilan refill ke kapten dapur.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-2xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-1.5 border border-emerald-300 dark:border-emerald-800">
            <CheckCircle2 className="w-4 h-4" />
            <span>Manajemen F&B & Logistik</span>
          </div>
        </div>
      </div>

      {/* Grid of Food Stations */}
      {cateringZones.length === 0 ? (
        <div className="py-16 text-center rounded-3xl border-2 border-dashed border-[#DFCFC0] dark:border-[#382C3D] p-8 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-[#B8860B] flex items-center justify-center mx-auto">
            <Utensils className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-[#221A18] dark:text-[#FFF7EE]">Belum Ada Zona Katering / Food Stall</h3>
          <p className="text-xs text-[#7B6E67] dark:text-[#A79890] max-w-md mx-auto">
            Tambahkan zona buffet atau stall makanan di tab Studio Denah atau Dashboard Admin untuk memantau ketersediaan logistik porsi.
          </p>
        </div>
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cateringZones.map((zone) => {
          const fnb = zone.fnbDetails;
          if (!fnb) return null;

          const percentage = Math.round((fnb.currentPortions / fnb.maxPortions) * 100);
          const isWarning = percentage < 50;

          return (
            <div
              key={zone.id}
              className="p-5 rounded-3xl bg-white dark:bg-[#1A161D] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                {/* Station header */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#B8860B] bg-[#FAF4ED] dark:bg-[#2A222D] px-2 py-0.5 rounded">
                      {zone.shortCode}
                    </span>
                    <h3 className="text-base font-bold text-[#221A18] dark:text-[#FFF7EE] mt-1">
                      {zone.name}
                    </h3>
                  </div>

                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                      fnb.refillStatus === 'aman'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                    }`}
                  >
                    {fnb.refillStatus}
                  </span>
                </div>

                {/* Progress bar of portions */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#7B6E67] dark:text-[#A79890]">Sisa Porsi Display</span>
                    <span className="font-bold text-[#221A18] dark:text-[#FFF7EE]">
                      {fnb.currentPortions} / {fnb.maxPortions} Pax ({percentage}%)
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[#EFE7DC] dark:bg-[#2B232D] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isWarning ? 'bg-amber-500' : 'bg-emerald-500'
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>

                {/* Chef & HT */}
                <div className="flex items-center justify-between text-xs text-[#6A5A50] dark:text-[#C5B7AE] pt-1 border-t border-[#EFE7DC] dark:border-[#2C242E]">
                  <div className="flex items-center gap-1.5">
                    <ChefHat className="w-3.5 h-3.5 text-[#B8860B]" />
                    <span>{fnb.chefInCharge}</span>
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-[#865D36] dark:text-[#D4AF37]">
                    HT: {zone.pic.htChannel}
                  </span>
                </div>

                {/* Menu list */}
                <div className="text-xs space-y-1 pt-1">
                  <span className="font-semibold text-[#7B6E67] dark:text-[#A79890] block">
                    Menu Unggulan:
                  </span>
                  <ul className="space-y-1 text-[#483B34] dark:text-[#DDD0C5]">
                    {fnb.menu.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 truncate">
                        <span className="text-[#B8860B] font-bold">•</span>
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                    {fnb.menu.length > 3 && (
                      <li className="text-[11px] text-[#B8860B] italic">
                        +{fnb.menu.length - 3} menu lainnya
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-[#EFE7DC] dark:border-[#2C242E] flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectZoneId(zone.id)}
                  className="px-3 py-2 rounded-xl text-xs font-semibold bg-[#FAF4ED] dark:bg-[#2A222D] hover:bg-[#F2ECE1] dark:hover:bg-[#382C3D] text-[#865D36] dark:text-[#F3DFC8] transition-colors flex items-center gap-1"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
                  <span>Sorot di Layout</span>
                </button>

                <button
                  onClick={() => handleRefillClick(zone)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    refillSent === zone.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#B8860B] hover:bg-[#9B7008] text-white shadow-sm'
                  }`}
                >
                  <Bell className="w-3.5 h-3.5" />
                  <span>{refillSent === zone.id ? 'Terkirim!' : 'Panggil Refill'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      )}
    </div>
  );
};
