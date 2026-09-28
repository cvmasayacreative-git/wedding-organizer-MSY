import React, { useState } from 'react';
import { Calculator, Utensils, Users, Gift, DollarSign, Sparkles, CheckCircle2 } from 'lucide-react';

export const WeddingCalculatorSection: React.FC = () => {
  const [invitationsCount, setInvitationsCount] = useState<number>(500);
  const [multiplier, setMultiplier] = useState<number>(2.0); // 2 pax per invitation
  const [buffetRatio, setBuffetRatio] = useState<number>(60); // 60% of total pax
  const [stallMultiplier, setStallMultiplier] = useState<number>(4.5); // 4.5 portions per pax
  const [tableCapacity, setTableCapacity] = useState<number>(8); // 8 pax per round table
  const [souvenirBuffer, setSouvenirBuffer] = useState<number>(15); // +15%

  const totalPax = Math.round(invitationsCount * multiplier);
  const buffetPortions = Math.round((totalPax * buffetRatio) / 100);
  const stallPortions = Math.round(totalPax * stallMultiplier);
  const tablesNeeded = Math.ceil(totalPax / tableCapacity);
  const totalSouvenirs = Math.round(invitationsCount * (1 + souvenirBuffer / 100));

  // Estimated average cost in IDR (millions)
  const estimatedCateringCost = Math.round((buffetPortions * 165000 + stallPortions * 45000) / 1000000);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <div className="border-b border-[#E5DACD] dark:border-[#2C242E] pb-5">
        <span className="text-xs font-bold uppercase tracking-widest text-[#865D36] dark:text-[#D4AF37] flex items-center gap-1.5">
          <Calculator className="w-3.5 h-3.5" /> Formula & Logistik WO
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#221A18] dark:text-[#FFF7EE] mt-1">
          Kalkulator Rasio Katering & Alokasi Meja
        </h2>
        <p className="text-xs sm:text-sm text-[#7B6E67] dark:text-[#A79890] mt-1">
          Simulasi ilmiah porsi prasmanan (buffet), gubukan (stall), kapasitas meja bundar, dan stok souvenir aman.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls Column */}
        <div className="lg:col-span-6 p-6 rounded-3xl bg-white dark:bg-[#1A161D] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm space-y-5">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#865D36] dark:text-[#D4AF37]">
            Parameter Undangan & Porsi
          </h3>

          {/* Input Undangan */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-[#3D302A] dark:text-[#DDD0C5]">Jumlah Undangan Fisik & Digital</span>
              <span className="font-mono text-base font-bold text-[#B8860B]">{invitationsCount} Undangan</span>
            </div>
            <input
              type="range"
              min="100"
              max="1500"
              step="50"
              value={invitationsCount}
              onChange={(e) => setInvitationsCount(Number(e.target.value))}
              className="w-full h-2 bg-[#EFE7DC] dark:bg-[#2C242E] rounded-lg appearance-none cursor-pointer accent-[#B8860B]"
            />
            <div className="flex justify-between text-[11px] text-[#86786F] dark:text-[#9A8980]">
              <span>100 Undangan (Intim)</span>
              <span>800 Undangan (Medium)</span>
              <span>1.500 Undangan (Akbar)</span>
            </div>
          </div>

          {/* Multiplier pax per undangan */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-[#3D302A] dark:text-[#DDD0C5]">Pengali Kehadiran Tamu (Pax / Undangan)</span>
              <span className="font-mono font-bold text-[#2D2422] dark:text-white">{multiplier}x (~{totalPax} Tamu)</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: '1.8x (Realistis)', val: 1.8 },
                { label: '2.0x (Standar WO)', val: 2.0 },
                { label: '2.2x (Keluarga Besar)', val: 2.2 },
              ].map((m) => (
                <button
                  key={m.val}
                  onClick={() => setMultiplier(m.val)}
                  className={`py-2 text-xs font-semibold rounded-xl border transition-all ${
                    multiplier === m.val
                      ? 'bg-[#B8860B] text-white border-[#B8860B]'
                      : 'bg-[#FAF7F2] dark:bg-[#241C27] text-[#554740] dark:text-[#C5B7AE] border-[#E5DACD] dark:border-[#382C3D]'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Rasio Buffet */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-[#3D302A] dark:text-[#DDD0C5]">Rasio Porsi Buffet Utama</span>
              <span className="font-mono font-bold text-[#B8860B]">{buffetRatio}% ({buffetPortions} Porsi)</span>
            </div>
            <input
              type="range"
              min="40"
              max="80"
              step="5"
              value={buffetRatio}
              onChange={(e) => setBuffetRatio(Number(e.target.value))}
              className="w-full h-2 bg-[#EFE7DC] dark:bg-[#2C242E] rounded-lg appearance-none cursor-pointer accent-[#B8860B]"
            />
            <span className="text-[11px] text-[#86786F] dark:text-[#9A8980]">
              *Rekomendasi WO: 50% - 60% jika live stall gubukan melimpah.
            </span>
          </div>

          {/* Rasio Gubukan */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-[#3D302A] dark:text-[#DDD0C5]">Rasio Porsi Gubukan / Live Stall</span>
              <span className="font-mono font-bold text-[#B8860B]">{stallMultiplier} Porsi/Tamu ({stallPortions} Porsi)</span>
            </div>
            <input
              type="range"
              min="3"
              max="7"
              step="0.5"
              value={stallMultiplier}
              onChange={(e) => setStallMultiplier(Number(e.target.value))}
              className="w-full h-2 bg-[#EFE7DC] dark:bg-[#2C242E] rounded-lg appearance-none cursor-pointer accent-[#B8860B]"
            />
            <span className="text-[11px] text-[#86786F] dark:text-[#9A8980]">
              *Standar pesta mewah rata-rata 4.5 s/d 5.5 porsi gubukan per tamu.
            </span>
          </div>
        </div>

        {/* Results & Blueprint Calculation Column */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#2E2421] to-[#1C1618] text-[#FDF8F2] shadow-xl space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs uppercase tracking-widest text-[#E5B54F] font-bold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Hasil Rekomendasi Hari-H
              </span>
              <span className="text-xs font-mono bg-white/10 px-2.5 py-1 rounded-lg text-emerald-400">
                Formula WO Terverifikasi
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-xs text-gray-300 flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-[#E5B54F]" /> Porsi Buffet Utama
                </span>
                <div className="text-2xl font-bold font-display text-white">
                  {buffetPortions.toLocaleString()} <span className="text-xs font-normal text-gray-400">Pax</span>
                </div>
                <p className="text-[11px] text-gray-400">Disajikan di 2 island ganda</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-xs text-gray-300 flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-[#E5B54F]" /> Total Porsi Gubukan
                </span>
                <div className="text-2xl font-bold font-display text-[#E5B54F]">
                  {stallPortions.toLocaleString()} <span className="text-xs font-normal text-gray-400">Porsi</span>
                </div>
                <p className="text-[11px] text-gray-400">Terbagi ke 5 stall variasi</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-xs text-gray-300 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#E5B54F]" /> Estimasi Meja Bundar
                </span>
                <div className="text-2xl font-bold font-display text-white">
                  {tablesNeeded} <span className="text-xs font-normal text-gray-400">Meja</span>
                </div>
                <p className="text-[11px] text-gray-400">Format {tableCapacity} kursi/meja</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-xs text-gray-300 flex items-center gap-1.5">
                  <Gift className="w-3.5 h-3.5 text-[#E5B54F]" /> Stok Souvenir Aman
                </span>
                <div className="text-2xl font-bold font-display text-white">
                  {totalSouvenirs.toLocaleString()} <span className="text-xs font-normal text-gray-400">Pcs</span>
                </div>
                <p className="text-[11px] text-gray-400">Sudah buffer safety +{souvenirBuffer}%</p>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-gray-300">Estimasi Anggaran Katering (Plataran Standard):</span>
              <span className="font-bold text-lg text-emerald-400 font-mono">
                Rp {estimatedCateringCost} Juta
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
