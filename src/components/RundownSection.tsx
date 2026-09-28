import React, { useState } from 'react';
import { RundownEvent } from '../types';
import { 
  Clock, MapPin, Music, Radio, CheckCircle2, 
  Sparkles, Filter, ChevronRight
} from 'lucide-react';

interface RundownSectionProps {
  rundown: RundownEvent[];
  onSelectZoneId: (zoneId: string) => void;
}

export const RundownSection: React.FC<RundownSectionProps> = ({
  rundown,
  onSelectZoneId,
}) => {
  const [activePhase, setActivePhase] = useState<string>('all');

  const filteredRundown = rundown.filter((item) => {
    if (activePhase === 'all') return true;
    return item.phase === activePhase;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E5DACD] dark:border-[#2C242E] pb-5">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#865D36] dark:text-[#D4AF37] flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" /> Rundown & Master Cue Sheet
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#221A18] dark:text-[#FFF7EE] mt-1">
            Jadwal Rangkaian Acara Hari-H
          </h2>
          <p className="text-xs sm:text-sm text-[#7B6E67] dark:text-[#A79890] mt-1">
            Sinkronisasi seluruh kapten tim, MC, tata suara, dan pergerakan zona panggung secara langsung.
          </p>
        </div>

        {/* Phase Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: 'all', label: 'Semua Sesi' },
            { id: 'persiapan', label: 'Persiapan' },
            { id: 'akad', label: 'Akad Nikah' },
            { id: 'kirab', label: 'Kirab Pengantin' },
            { id: 'resepsi', label: 'Resepsi' },
            { id: 'closing', label: 'Penutupan' },
          ].map((phase) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(phase.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activePhase === phase.id
                  ? 'bg-[#B8860B] text-white shadow-sm'
                  : 'bg-white dark:bg-[#251E28] text-[#6C5E56] dark:text-[#A79890] hover:bg-[#F2ECE1] dark:hover:bg-[#322738] border border-[#DFCFC0] dark:border-[#382C3D]'
              }`}
            >
              {phase.label}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline List */}
      <div className="space-y-4">
        {filteredRundown.length === 0 ? (
          <div className="py-16 text-center rounded-3xl border-2 border-dashed border-[#DFCFC0] dark:border-[#382C3D] p-8 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-[#B8860B] flex items-center justify-center mx-auto">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#221A18] dark:text-[#FFF7EE]">Belum Ada Susunan Acara Rundown</h3>
            <p className="text-xs text-[#7B6E67] dark:text-[#A79890] max-w-md mx-auto">
              Tambahkan mata acara rundown hari-H melalui Tab Dashboard Admin atau sinkronkan langsung dengan tabel Supabase <code>rundown_events</code>.
            </p>
          </div>
        ) : (
          filteredRundown.map((item, index) => {
          const isCurrent = item.status === 'current';
          const isDone = item.status === 'completed';

          return (
            <div
              key={item.id}
              className={`p-4 sm:p-5 rounded-3xl border transition-all ${
                isCurrent
                  ? 'bg-gradient-to-r from-amber-50 to-orange-50/50 dark:from-[#2A2016] dark:to-[#1C161D] border-amber-400 dark:border-amber-600 shadow-md ring-2 ring-amber-300/40'
                  : isDone
                  ? 'bg-white/60 dark:bg-[#18141A]/60 border-[#E5DACD] dark:border-[#2C242E] opacity-80'
                  : 'bg-white dark:bg-[#1E1921] border-[#E5DACD] dark:border-[#2C242E] hover:border-[#B8860B]/50'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Time & Title Info */}
                <div className="flex items-start gap-3.5">
                  <div className="flex flex-col items-center">
                    <div
                      className={`px-3 py-1 rounded-xl font-mono text-xs font-bold ${
                        isCurrent
                          ? 'bg-amber-600 text-white animate-pulse'
                          : isDone
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-[#EFE7DC] dark:bg-[#2B232D] text-[#6A5A50] dark:text-[#C5B7AE]'
                      }`}
                    >
                      {item.time} - {item.endTime}
                    </div>
                    {isCurrent && (
                      <span className="text-[10px] uppercase font-bold text-red-600 dark:text-red-400 tracking-wider mt-1">
                        ● LIVE NOW
                      </span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base sm:text-lg font-bold text-[#221A18] dark:text-[#FFF7EE]">
                        {item.title}
                      </h3>
                      <span className="text-[11px] px-2 py-0.5 rounded-full capitalize font-medium bg-[#EFE7DC] dark:bg-[#28212C] text-[#865D36] dark:text-[#D4AF37]">
                        Fase: {item.phase}
                      </span>
                    </div>
                    <p className="text-xs text-[#5E514B] dark:text-[#B6A69D] max-w-2xl">
                      {item.details}
                    </p>
                  </div>
                </div>

                {/* Badges & Actions */}
                <div className="flex items-center gap-3 flex-wrap md:flex-nowrap justify-between md:justify-end border-t md:border-t-0 pt-3 md:pt-0 border-[#EFE7DC] dark:border-[#2C242E]">
                  {/* PIC & HT Info */}
                  <div className="text-right text-xs space-y-0.5">
                    <div className="font-semibold text-[#2D2422] dark:text-[#FAF4ED] flex items-center gap-1 justify-end">
                      <Radio className="w-3.5 h-3.5 text-[#B8860B]" />
                      <span>{item.pic}</span>
                    </div>
                    <div className="font-mono text-[11px] text-[#7B6E67] dark:text-[#A79890]">
                      HT: {item.htChannel}
                    </div>
                  </div>

                  {/* Locate on Map Button */}
                  <button
                    onClick={() => onSelectZoneId(item.zoneId)}
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#FAF4ED] dark:bg-[#2A222D] hover:bg-[#F2ECE1] dark:hover:bg-[#382C3D] text-[#865D36] dark:text-[#F3DFC8] border border-[#DFCFC0] dark:border-[#382C3D] transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
                    <span>{item.zoneName}</span>
                    <ChevronRight className="w-3 h-3 text-[#B8860B]" />
                  </button>
                </div>
              </div>

              {/* Music track & cue box */}
              <div className="mt-3 pt-3 border-t border-[#EFE7DC] dark:border-[#2C242E]/70 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2 text-[#7B6E67] dark:text-[#A79890]">
                  <Music className="w-3.5 h-3.5 text-[#B8860B] flex-shrink-0" />
                  <span className="truncate"><strong>Music:</strong> {item.musicTrack}</span>
                </div>
                <div className="flex items-center gap-2 text-[#7B6E67] dark:text-[#A79890]">
                  <Sparkles className="w-3.5 h-3.5 text-[#B8860B] flex-shrink-0" />
                  <span className="truncate"><strong>Cue Lighting/MC:</strong> {item.cues}</span>
                </div>
              </div>
            </div>
          );
        })
        )}
      </div>
    </div>
  );
};
