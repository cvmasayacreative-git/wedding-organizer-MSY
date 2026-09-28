import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Sun, Moon, MapPin, Clock, Users, Utensils, 
  Radio, Calculator, Sparkles, HeartHandshake, ShieldCheck, Database 
} from 'lucide-react';
import { isSupabaseConfigured } from '../lib/supabase';

export type NavTab = 'layout' | 'rundown' | 'guests' | 'catering' | 'vendors' | 'calculator' | 'admin';

interface NavbarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  coupleName: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  coupleName,
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#FAF7F2]/85 dark:bg-[#161217]/85 backdrop-blur-xl border-b border-[#E5DACD] dark:border-[#2C242E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Brand & Event Tag */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#B8860B] to-[#7B5300] flex items-center justify-center text-white shadow-md">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-[#221A18] dark:text-[#FFF7EE]">
                NuptialVibe
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-widest bg-[#EFE7DC] dark:bg-[#2B232D] text-[#865D36] dark:text-[#D4AF37]">
                WO Suite
              </span>
            </div>
            <div className="text-[11px] text-[#786A63] dark:text-[#A79890] flex items-center gap-1">
              <span className="font-medium text-[#2D2422] dark:text-white">{coupleName}</span>
              <span>•</span>
              <span>Grand Ballroom</span>
            </div>
          </div>
        </div>

        {/* Center Nav Tabs */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-2xl bg-[#EFE7DC]/60 dark:bg-[#201923]/60 border border-[#E5DACD] dark:border-[#382C3D]">
          {[
            { id: 'layout', label: 'Peta Layout', icon: MapPin },
            { id: 'rundown', label: 'Rundown Acara', icon: Clock },
            { id: 'guests', label: 'Tamu & Meja', icon: Users },
            { id: 'catering', label: 'Katering & Stall', icon: Utensils },
            { id: 'vendors', label: 'Kru & HT', icon: Radio },
            { id: 'calculator', label: 'Kalkulator', icon: Calculator },
            { id: 'admin', label: 'Mode Admin', icon: ShieldCheck, highlight: true },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id as NavTab)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  isActive
                    ? tab.highlight 
                      ? 'bg-[#B8860B] text-white shadow-sm ring-1 ring-amber-300'
                      : 'bg-white dark:bg-[#342738] text-[#865D36] dark:text-[#F3DFC8] shadow-sm'
                    : tab.highlight
                    ? 'text-amber-700 dark:text-amber-400 hover:bg-amber-100/50 dark:hover:bg-amber-950/40 font-bold'
                    : 'text-[#6C5E56] dark:text-[#A79890] hover:text-[#2D2422] dark:hover:text-white'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : tab.highlight ? 'text-[#B8860B]' : ''}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action: Dark/Light Mode & Quick Indicator */}
        <div className="flex items-center gap-2">
          {/* Mobile Tab Quick Switcher */}
          <div className="lg:hidden flex items-center">
            <select
              value={activeTab}
              onChange={(e) => onSelectTab(e.target.value as NavTab)}
              className="text-xs py-1.5 px-2.5 rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] font-medium text-[#2D2422] dark:text-[#F8F3ED] focus:outline-none"
            >
              <option value="layout">🗺️ Peta Layout</option>
              <option value="rundown">⏱️ Rundown</option>
              <option value="guests">👥 Tamu & Meja</option>
              <option value="catering">🍽️ Katering</option>
              <option value="vendors">📻 Kru & HT</option>
              <option value="calculator">🧮 Kalkulator</option>
              <option value="admin">⚙️ Mode Admin (Atur Semua)</option>
            </select>
          </div>

          {/* Cloud DB Status Pill */}
          <button
            onClick={() => onSelectTab('admin')}
            className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[11px] font-semibold border transition-all cursor-pointer ${
              isSupabaseConfigured()
                ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800'
                : 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-800'
            }`}
            title={isSupabaseConfigured() ? 'Supabase Terhubung (Klik untuk buka pengaturan DB)' : 'Mode Penyimpanan Lokal (Klik untuk koneksi Supabase)'}
          >
            <Database className="w-3.5 h-3.5" />
            <span>{isSupabaseConfigured() ? 'Supabase Cloud' : 'DB Lokal'}</span>
            <span className={`w-1.5 h-1.5 rounded-full ${isSupabaseConfigured() ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
          </button>

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-2xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] text-[#6C5E56] dark:text-[#A79890] hover:text-[#2D2422] dark:hover:text-white transition-colors shadow-sm"
            title={theme === 'dark' ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-[#E5B54F]" /> : <Moon className="w-4 h-4 text-[#865D36]" />}
          </button>
        </div>
      </div>
    </header>
  );
};
