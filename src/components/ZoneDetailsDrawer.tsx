import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VenueZone, ZoneStatus } from '../types';
import { 
  X, CheckCircle2, Clock, Users, Maximize2, Radio, Phone, 
  AlertTriangle, Utensils, Sparkles, CheckSquare, Plus, Edit3, MapPin, Trash2
} from 'lucide-react';

interface ZoneDetailsDrawerProps {
  zone: VenueZone | null;
  onClose: () => void;
  onHighlightZoneOnMap?: (zoneId: string) => void;
  onUpdateZone?: (updatedZone: VenueZone) => void;
  onDeleteZone?: (zoneId: string) => void;
}

export const ZoneDetailsDrawer: React.FC<ZoneDetailsDrawerProps> = ({
  zone,
  onClose,
  onUpdateZone,
  onDeleteZone,
}) => {
  const [newChecklistText, setNewChecklistText] = useState('');
  const [isEditingNotes, setIsEditingNotes] = useState(false);
  const [tempNotes, setTempNotes] = useState('');
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  if (!zone) return null;

  const toggleChecklist = (checkId: string) => {
    const updatedChecklist = zone.checklist.map((item) =>
      item.id === checkId ? { ...item, done: !item.done } : item
    );
    if (onUpdateZone) {
        onUpdateZone({ ...zone, checklist: updatedChecklist });
      }
  };

  const addChecklistItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChecklistText.trim()) return;
    const newItem = {
      id: `check-${Date.now()}`,
      text: newChecklistText.trim(),
      done: false,
    };
    if (onUpdateZone) {
        onUpdateZone({ ...zone, checklist: [...zone.checklist, newItem] });
      }
    setNewChecklistText('');
  };

  const handleStatusChange = (newStatus: ZoneStatus) => {
    if (onUpdateZone) {
        onUpdateZone({ ...zone, status: newStatus });
      }
  };

  const saveNotes = () => {
    if (onUpdateZone) {
        onUpdateZone({ ...zone, notes: tempNotes });
      }
    setIsEditingNotes(false);
  };

  const getStatusBadge = (status: ZoneStatus) => {
    switch (status) {
      case 'ready':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5" /> Siap (Ready)
          </span>
        );
      case 'in_progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
            <Clock className="w-3.5 h-3.5 animate-spin" /> Sedang Disiapkan
          </span>
        );
      case 'attention':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950/70 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
            <AlertTriangle className="w-3.5 h-3.5" /> Perlu Perhatian
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-950/70 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800">
            <Sparkles className="w-3.5 h-3.5" /> Standby
          </span>
        );
    }
  };

  const completedChecklist = zone.checklist.filter(c => c.done).length;
  const totalChecklist = zone.checklist.length;
  const checklistPercent = totalChecklist > 0 ? Math.round((completedChecklist / totalChecklist) * 100) : 100;

  return (
    <AnimatePresence>
      <motion.aside
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 80 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="fixed top-0 right-0 h-full w-full sm:w-[480px] lg:w-[520px] bg-[#FAF7F2] dark:bg-[#161317] border-l border-[#E5DACD] dark:border-[#2C242E] shadow-2xl z-50 flex flex-col overflow-hidden text-[#2D2422] dark:text-[#F8F3ED]"
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#E5DACD] dark:border-[#2C242E] bg-white/70 dark:bg-[#1C181E]/70 backdrop-blur-md flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono tracking-wider font-bold bg-[#EFE7DC] dark:bg-[#2A232D] text-[#865D36] dark:text-[#E0BC95]">
                {zone.shortCode}
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#865D36] dark:text-[#D4AF37]">
                {zone.category.replace('_', ' ')}
              </span>
              {getStatusBadge(zone.status)}
            </div>
            <h2 className="text-xl font-bold font-display tracking-tight text-[#221A18] dark:text-[#FFF7EE]">
              {zone.name}
            </h2>
            <p className="text-xs text-[#7B6E67] dark:text-[#A79890] mt-0.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
              {zone.floor === 'grand_ballroom' ? 'Lantai 2 - Grand Ballroom (Indoor)' : 'Lantai 1 - Glasshouse Garden (Outdoor)'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#EFE7DC] dark:hover:bg-[#2C242E] text-[#6A5E57] dark:text-[#BFB0A6] transition-colors"
            title="Tutup Panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {/* Visual Photo (if available) */}
          {zone.image && (
            <div className="relative rounded-2xl overflow-hidden h-44 shadow-md border border-[#E5DACD] dark:border-[#2C242E] group">
              <img
                src={zone.image}
                alt={zone.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                <div className="text-white text-xs space-y-1">
                  <div className="font-semibold text-sm drop-shadow">{zone.name}</div>
                  <div className="opacity-90 flex items-center gap-3">
                    <span>Dimensi: {zone.dimensions}</span>
                    <span>•</span>
                    <span>Kapasitas: {zone.capacity}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quick Status Controller Bar */}
          <div className="p-3.5 rounded-2xl bg-white dark:bg-[#1E1921] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#8C7B70] dark:text-[#A09287] mb-2 flex items-center justify-between">
              <span>Status Operasional Zona</span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div
                className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 ${
                  zone.status === 'ready'
                    ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-400'
                    : zone.status === 'in_progress'
                    ? 'bg-amber-600 text-white shadow-sm ring-2 ring-amber-400'
                    : zone.status === 'attention'
                    ? 'bg-rose-600 text-white shadow-sm ring-2 ring-rose-400'
                    : 'bg-[#F4EDE4] dark:bg-[#28212C] text-[#554740] dark:text-[#C5B7AE]'
                }`}
              >
                {zone.status === 'ready' ? <CheckCircle2 className="w-3.5 h-3.5" /> : zone.status === 'in_progress' ? <Clock className="w-3.5 h-3.5" /> : zone.status === 'attention' ? <AlertTriangle className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
                {zone.status === 'ready' ? 'Siap' : zone.status === 'in_progress' ? 'Proses' : zone.status === 'attention' ? 'Atensi' : 'Standby'}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="text-sm leading-relaxed text-[#4A3E39] dark:text-[#D5C7BD]">
            {zone.description}
          </div>

          {/* Key Specs Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-2xl bg-white dark:bg-[#1E1921] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm">
              <div className="flex items-center gap-2 text-xs font-medium text-[#7B6E67] dark:text-[#A79890] mb-1">
                <Users className="w-4 h-4 text-[#C28C47]" /> Kapasitas
              </div>
              <div className="text-sm font-bold text-[#2A201C] dark:text-[#FFF7EE]">
                {zone.capacity}
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white dark:bg-[#1E1921] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm">
              <div className="flex items-center gap-2 text-xs font-medium text-[#7B6E67] dark:text-[#A79890] mb-1">
                <Maximize2 className="w-4 h-4 text-[#C28C47]" /> Dimensi Area
              </div>
              <div className="text-sm font-bold text-[#2A201C] dark:text-[#FFF7EE]">
                {zone.dimensions}
              </div>
            </div>
          </div>

          {/* PIC & Walkie Talkie Channel Box */}
          <div className="p-4 rounded-2xl bg-[#F4EDE4] dark:bg-[#1F1922] border border-[#DFCFC0] dark:border-[#352A3B] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-wider text-[#865D36] dark:text-[#D4AF37]">
                Penanggung Jawab (PIC)
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold font-mono bg-[#E0D0BE] dark:bg-[#2E2433] text-[#4A321E] dark:text-[#F3DFC8]">
                <Radio className="w-3.5 h-3.5 text-[#B8860B] animate-pulse" />
                HT: {zone.pic.htChannel}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-base font-bold text-[#2D2422] dark:text-[#FAF4ED]">{zone.pic.name}</div>
                <div className="text-xs text-[#7B6E67] dark:text-[#A79890]">{zone.pic.role}</div>
              </div>
              <a
                href={`tel:${zone.pic.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-[#2D2422] text-[#FAF7F2] dark:bg-[#F8F3ED] dark:text-[#18131B] hover:opacity-90 transition-opacity shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" /> Call
              </a>
            </div>
          </div>

          {/* F&B Catering Specific Section */}
          {zone.fnbDetails && (
            <div className="p-4 rounded-2xl bg-white dark:bg-[#1E1921] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#865D36] dark:text-[#D4AF37] flex items-center gap-1.5">
                  <Utensils className="w-4 h-4" /> Status Katering & Porsi
                </span>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold uppercase ${
                  zone.fnbDetails.refillStatus === 'aman'
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                    : zone.fnbDetails.refillStatus === 'siaga'
                    ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                    : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                }`}>
                  Status: {zone.fnbDetails.refillStatus}
                </span>
              </div>

              {/* Progress bar */}
              <div>
                <div className="flex justify-between text-xs mb-1 font-medium">
                  <span className="text-[#6C5F57] dark:text-[#A79890]">Sisa Porsi Terdisplay</span>
                  <span className="font-bold text-[#2A201C] dark:text-[#FFF7EE]">
                    {zone.fnbDetails.currentPortions} / {zone.fnbDetails.maxPortions} Pax
                  </span>
                </div>
                <div className="w-full h-2.5 bg-[#EFE7DC] dark:bg-[#2B232D] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      zone.fnbDetails.refillStatus === 'aman' ? 'bg-emerald-500' : 'bg-amber-500'
                    }`}
                    style={{ width: `${(zone.fnbDetails.currentPortions / zone.fnbDetails.maxPortions) * 100}%` }}
                  />
                </div>
              </div>

              {/* Menu items */}
              <div>
                <div className="text-xs font-semibold text-[#7B6E67] dark:text-[#A79890] mb-1.5">
                  Daftar Sajian Menu:
                </div>
                <ul className="space-y-1 text-xs text-[#3E322D] dark:text-[#DDD1C7]">
                  {zone.fnbDetails.menu.map((menuItem, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C28C47] mt-1.5 flex-shrink-0" />
                      <span>{menuItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Assigned Guests / Table Seating */}
          {zone.assignedGuests && zone.assignedGuests.length > 0 && (
            <div className="p-4 rounded-2xl bg-white dark:bg-[#1E1921] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#865D36] dark:text-[#D4AF37] flex items-center gap-1.5">
                  <Users className="w-4 h-4" /> Daftar Tamu Meja ({zone.assignedGuests.length} Data)
                </span>
              </div>
              <div className="divide-y divide-[#EFE7DC] dark:divide-[#2B232D] text-xs">
                {zone.assignedGuests.map((guest, idx) => (
                  <div key={idx} className="py-2 flex items-center justify-between gap-2">
                    <div>
                      <div className="font-semibold text-[#2D2422] dark:text-[#FAF4ED]">{guest.name}</div>
                      {guest.vipNote && (
                        <div className="text-[11px] text-[#B8860B] font-medium">{guest.vipNote}</div>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] px-2 py-0.5 rounded bg-[#F4EDE4] dark:bg-[#2B232D] font-mono">
                        {guest.pax} Pax
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                        guest.rsvp === 'attended'
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                      }`}>
                        {guest.rsvp === 'attended' ? 'Hadir' : 'Konfirmasi'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Checklist Hari-H */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#1E1921] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#865D36] dark:text-[#D4AF37] flex items-center gap-1.5">
                <CheckSquare className="w-4 h-4" /> Checklist Kesiapan ({completedChecklist}/{totalChecklist})
              </span>
              <span className="text-xs font-mono font-semibold text-[#865D36] dark:text-[#D4AF37]">
                {checklistPercent}%
              </span>
            </div>

            {/* Checklist progress bar */}
            <div className="w-full h-1.5 bg-[#EFE7DC] dark:bg-[#2B232D] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#B8860B] rounded-full transition-all duration-300"
                style={{ width: `${checklistPercent}%` }}
              />
            </div>
            <div className="space-y-2 pt-1">
              {zone.checklist.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleChecklist(item.id)}
                  className="w-full flex items-start gap-3 p-2.5 rounded-xl bg-[#F9F5EE] dark:bg-[#251E28] hover:bg-[#EFE7DC] dark:hover:bg-[#2E2533] transition-colors cursor-pointer text-left"
                >
                  <div className={`mt-0.5 w-4 h-4 flex-shrink-0 flex items-center justify-center rounded border transition-colors ${
                    item.done
                      ? 'bg-[#B8860B] border-[#B8860B]'
                      : 'border-[#C5B5A5] dark:border-[#4B3F50]'
                  }`}>
                    {item.done && <CheckCircle2 className="w-3 h-3 text-white" />}
                  </div>
                  <span
                    className={`text-xs leading-relaxed transition-all ${
                      item.done
                        ? 'line-through text-[#9E9086] dark:text-[#766A7B]'
                        : 'text-[#3E322D] dark:text-[#EDE3DA]'
                    }`}
                  >
                    {item.text}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Kegiatan di Zona Ini */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#1E1921] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#865D36] dark:text-[#D4AF37] flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> Rundown Spesifik Zona Ini
            </span>
            <div className="relative pl-4 space-y-3 border-l-2 border-[#E5DACD] dark:border-[#2C242E]">
              {zone.timeline.map((event, idx) => (
                <div key={idx} className="relative group">
                  <div
                    className={`absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full ring-4 ${
                      event.status === 'active'
                        ? 'bg-[#B8860B] ring-[#F4EDE4] dark:ring-[#352A3B] animate-ping'
                        : event.status === 'done'
                        ? 'bg-emerald-500 ring-[#F4EDE4] dark:ring-[#352A3B]'
                        : 'bg-[#C5B5A5] dark:bg-[#4E4154] ring-[#F4EDE4] dark:ring-[#352A3B]'
                    }`}
                  />
                  <div className="text-[11px] font-mono font-semibold text-[#865D36] dark:text-[#D4AF37]">
                    {event.time}
                  </div>
                  <div className={`text-xs font-medium ${
                    event.status === 'active' ? 'text-[#B8860B] font-bold' : 'text-[#3E322D] dark:text-[#DDD1C7]'
                  }`}>
                    {event.activity}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment & Logistik List */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#1E1921] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#865D36] dark:text-[#D4AF37]">
              Peralatan & Fasilitas Terpasang
            </span>
            <ul className="space-y-1.5 text-xs text-[#4A3E39] dark:text-[#D5C7BD]">
              {zone.equipment.map((eq, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#B8860B] font-bold">•</span>
                  <span>{eq}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-[#1E1921] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#865D36] dark:text-[#D4AF37] flex items-center gap-1.5">
                <Edit3 className="w-3.5 h-3.5" /> Catatan Khusus WO
              </span>
            </div>

            <p className="text-xs italic text-[#5E514B] dark:text-[#C5B7AE] bg-[#FBF9F6] dark:bg-[#171319] p-3 rounded-xl border border-[#EFE7DC] dark:border-[#2C242E]">
              &quot;{zone.notes || 'Belum ada catatan khusus.'}&quot;
            </p>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-[#E5DACD] dark:border-[#2C242E] bg-white/80 dark:bg-[#1C181E]/80 backdrop-blur-md space-y-2">
          <div className="flex items-center justify-between gap-3">
            <div className="text-[11px] text-[#7B6E67] dark:text-[#A79890]">
              Terakhir dicek: <span className="font-semibold text-[#2D2422] dark:text-[#FAF4ED]">18:45 WIB</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-semibold bg-[#2D2422] dark:bg-[#F8F3ED] text-[#FAF7F2] dark:text-[#18131B] hover:opacity-90 transition-opacity cursor-pointer"
            >
              Tutup Panel
            </button>
          </div>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
};
