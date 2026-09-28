import React, { useState } from 'react';
import { GuestItem } from '../types';
import { 
  Users, Search, MapPin, CheckCircle2, Clock, 
  Filter, Gift, AlertCircle, ChevronRight 
} from 'lucide-react';

interface GuestSeatingSectionProps {
  guests: GuestItem[];
  onHighlightZone: (zoneId: string) => void;
}

export const GuestSeatingSection: React.FC<GuestSeatingSectionProps> = ({
  guests,
  onHighlightZone,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Semua Kategori' },
    { id: 'VIP Keluarga', label: '👑 VIP Keluarga' },
    { id: 'VVIP Pejabat', label: '🎖️ VVIP Pejabat' },
    { id: 'Sahabat', label: '🥂 Sahabat' },
    { id: 'Rekan Bisnis', label: '💼 Rekan Bisnis' },
  ];

  const filteredGuests = guests.filter((g) => {
    if (selectedCategory !== 'all' && g.category !== selectedCategory) return false;
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      return (
        g.name.toLowerCase().includes(q) ||
        g.tableName.toLowerCase().includes(q) ||
        g.dietary.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const totalPax = guests.reduce((acc, curr) => acc + curr.pax, 0);
  const attendedPax = guests.filter(g => g.status === 'Hadir').reduce((acc, curr) => acc + curr.pax, 0);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E5DACD] dark:border-[#2C242E] pb-5">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#865D36] dark:text-[#D4AF37] flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" /> Seating Chart & Guest Management
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#221A18] dark:text-[#FFF7EE] mt-1">
            Daftar Tamu & Alokasi Meja
          </h2>
          <p className="text-xs sm:text-sm text-[#7B6E67] dark:text-[#A79890] mt-1">
            Cari nama tamu, pantau status check-in, dan temukan nomor meja pada peta layout dengan satu klik.
          </p>
        </div>

        {/* Stats Pill */}
        <div className="flex items-center gap-2 p-2 rounded-2xl bg-white dark:bg-[#1E1921] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm text-xs">
          <div className="px-3 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-semibold flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Hadir: {attendedPax} Pax</span>
          </div>
          <div className="px-3 py-1 rounded-xl bg-[#F4EDE4] dark:bg-[#2B232D] text-[#6A5A50] dark:text-[#C5B7AE] font-semibold">
            Total Alokasi: {totalPax} Pax
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative w-full sm:flex-1">
          <Search className="w-4 h-4 text-[#9E9086] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari nama tamu, meja, atau catatan..."
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-2xl bg-white dark:bg-[#1E1921] border border-[#DFCFC0] dark:border-[#382C3D] text-[#2D2422] dark:text-[#F8F3ED] placeholder-[#A89A90] focus:outline-none focus:ring-1 focus:ring-[#B8860B]"
          />
        </div>

        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#B8860B] text-white shadow-sm'
                  : 'bg-white dark:bg-[#251E28] text-[#6C5E56] dark:text-[#A79890] hover:bg-[#F2ECE1] dark:hover:bg-[#322738] border border-[#DFCFC0] dark:border-[#382C3D]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Guest Table Grid */}
      <div className="rounded-3xl bg-white dark:bg-[#1A161D] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#FAF7F2] dark:bg-[#201923] text-[#7B6E67] dark:text-[#A79890] font-semibold border-b border-[#E5DACD] dark:border-[#2C242E]">
              <tr>
                <th className="px-5 py-3.5">Nama Tamu & Rombongan</th>
                <th className="px-4 py-3.5">Kategori</th>
                <th className="px-4 py-3.5">Alokasi Meja</th>
                <th className="px-4 py-3.5 text-center">Pax</th>
                <th className="px-4 py-3.5">Dietary / Catatan</th>
                <th className="px-4 py-3.5 text-center">Status</th>
                <th className="px-5 py-3.5 text-right">Aksi Layout</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EFE7DC] dark:divide-[#2C242E]">
              {filteredGuests.map((guest) => {
                const isAttended = guest.status === 'Hadir';

                return (
                  <tr
                    key={guest.id}
                    className="hover:bg-[#FBF9F6] dark:hover:bg-[#241C27] transition-colors"
                  >
                    <td className="px-5 py-3.5">
                      <div className="font-bold text-sm text-[#2D2422] dark:text-[#FAF4ED]">
                        {guest.name}
                      </div>
                      {guest.seatNumber && (
                        <div className="text-[11px] font-mono text-[#B8860B]">
                          Kursi: {guest.seatNumber}
                        </div>
                      )}
                    </td>

                    <td className="px-4 py-3.5">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#EFE7DC] dark:bg-[#2B232D] text-[#865D36] dark:text-[#D4AF37]">
                        {guest.category}
                      </span>
                    </td>

                    <td className="px-4 py-3.5">
                      <div className="font-semibold text-[#2D2422] dark:text-[#FAF4ED] flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
                        <span>{guest.tableName}</span>
                      </div>
                    </td>

                    <td className="px-4 py-3.5 text-center font-mono font-bold">
                      {guest.pax}
                    </td>

                    <td className="px-4 py-3.5 text-[#6A5A50] dark:text-[#C5B7AE]">
                      {guest.dietary}
                    </td>

                    <td className="px-4 py-3.5 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-bold inline-block ${
                          isAttended
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 ring-1 ring-emerald-300 dark:ring-emerald-800'
                            : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 ring-1 ring-amber-300 dark:ring-amber-800'
                        }`}
                      >
                        {guest.status}
                      </span>
                    </td>

                    <td className="px-5 py-3.5 text-right">
                      <button
                        onClick={() => onHighlightZone(guest.assignedZoneId)}
                        className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#FAF4ED] dark:bg-[#2A222D] hover:bg-[#F2ECE1] dark:hover:bg-[#382C3D] text-[#865D36] dark:text-[#F3DFC8] border border-[#DFCFC0] dark:border-[#382C3D] transition-colors inline-flex items-center gap-1.5"
                      >
                        <MapPin className="w-3 h-3 text-[#B8860B]" />
                        <span>Sorot Meja</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
