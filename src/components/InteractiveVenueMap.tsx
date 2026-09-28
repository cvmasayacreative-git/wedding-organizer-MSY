import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VenueZone, ZoneCategory, FloorLevel, ZoneStatus } from '../types';
import {
  ZoomIn, ZoomOut, RotateCcw, Maximize, Search, Eye, Sparkles,
  Users, Utensils, Music, Shield, Heart, MapPin, CheckCircle2,
  AlertTriangle, Clock, Info, Compass, Moon, SunMedium, Layers
} from 'lucide-react';

interface InteractiveVenueMapProps {
  zones: VenueZone[];
  selectedZone: VenueZone | null;
  onSelectZone: (zone: VenueZone) => void;
  activeFloor: FloorLevel;
  onChangeFloor: (floor: FloorLevel) => void;
  activeCategory: ZoneCategory;
  onChangeCategory: (category: ZoneCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const InteractiveVenueMap: React.FC<InteractiveVenueMapProps> = ({
  zones,
  selectedZone,
  onSelectZone,
  activeFloor,
  onChangeFloor,
  activeCategory,
  onChangeCategory,
  searchQuery,
  onSearchChange,
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isNightAmbiance, setIsNightAmbiance] = useState(true);
  const [showDensityHeatmap, setShowDensityHeatmap] = useState(false);
  const [hoveredZone, setHoveredZone] = useState<VenueZone | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);

  // Filter zones by active floor, category, and search query
  const filteredZones = zones.filter((zone) => {
    if (zone.floor !== activeFloor) return false;
    if (activeCategory !== 'all' && zone.category !== activeCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = zone.name.toLowerCase().includes(q);
      const matchCode = zone.shortCode.toLowerCase().includes(q);
      const matchPic = zone.pic.name.toLowerCase().includes(q);
      const matchDesc = zone.description.toLowerCase().includes(q);
      return matchName || matchCode || matchPic || matchDesc;
    }
    return true;
  });

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.2));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.8));
  const handleResetZoom = () => setZoomLevel(1);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const getStatusColor = (status: ZoneStatus) => {
    switch (status) {
      case 'ready':
        return { fill: '#10B981', ring: 'rgba(16, 185, 129, 0.4)', text: 'text-emerald-500' };
      case 'in_progress':
        return { fill: '#F59E0B', ring: 'rgba(245, 158, 11, 0.4)', text: 'text-amber-500' };
      case 'attention':
        return { fill: '#EF4444', ring: 'rgba(239, 68, 68, 0.4)', text: 'text-rose-500' };
      default:
        return { fill: '#8B5CF6', ring: 'rgba(139, 92, 246, 0.4)', text: 'text-purple-500' };
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'stage_vip':
        return <Heart className="w-3.5 h-3.5" />;
      case 'catering':
        return <Utensils className="w-3.5 h-3.5" />;
      case 'dining':
        return <Users className="w-3.5 h-3.5" />;
      case 'entertainment':
        return <Music className="w-3.5 h-3.5" />;
      case 'reception_ops':
        return <Shield className="w-3.5 h-3.5" />;
      default:
        return <Compass className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-3xl overflow-hidden bg-white/70 dark:bg-[#161217]/80 backdrop-blur-xl border border-[#E5DACD] dark:border-[#2C242E] shadow-xl flex flex-col transition-all duration-300"
    >
      {/* Top Map Control Bar */}
      <div className="p-4 sm:p-5 border-b border-[#E5DACD] dark:border-[#2C242E] flex flex-wrap items-center justify-between gap-4 bg-gradient-to-r from-[#FAF7F2] to-white dark:from-[#1A161C] dark:to-[#161217]">
        {/* Floor Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#EFE7DC] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D]">
          <button
            onClick={() => onChangeFloor('grand_ballroom')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeFloor === 'grand_ballroom'
                ? 'bg-white dark:bg-[#382C3D] text-[#865D36] dark:text-[#F8E7D5] shadow-sm'
                : 'text-[#6C5E56] dark:text-[#A79890] hover:text-[#2D2422] dark:hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#C28C47]" />
            <span>Grand Ballroom (Indoor)</span>
          </button>
          <button
            onClick={() => onChangeFloor('garden_terrace')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeFloor === 'garden_terrace'
                ? 'bg-white dark:bg-[#382C3D] text-[#865D36] dark:text-[#F8E7D5] shadow-sm'
                : 'text-[#6C5E56] dark:text-[#A79890] hover:text-[#2D2422] dark:hover:text-white'
            }`}
          >
            <Compass className="w-4 h-4 text-[#C28C47]" />
            <span>Glasshouse Garden (Akad)</span>
          </button>
        </div>

        {/* Search input & ambiance toggles */}
        <div className="flex items-center gap-2 flex-1 sm:flex-initial justify-end">
          <div className="relative min-w-[200px] max-w-xs flex-1">
            <Search className="w-4 h-4 text-[#9E9086] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Cari zona, meja, atau menu..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-white dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] text-[#2D2422] dark:text-[#F8F3ED] placeholder-[#A89A90] focus:outline-none focus:ring-1 focus:ring-[#B8860B]"
            />
          </div>

          {/* Toggle Ambiance Lighting */}
          <button
            onClick={() => setIsNightAmbiance(!isNightAmbiance)}
            title={isNightAmbiance ? "Beralih ke Mode Terang" : "Beralih ke Mode Suasana Malam (Night Ambiance)"}
            className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
              isNightAmbiance
                ? 'bg-[#2A232D] text-[#F3DFC8] border-[#B8860B]/40 shadow-sm ring-1 ring-[#B8860B]/50'
                : 'bg-white dark:bg-[#251E28] text-[#6C5E56] dark:text-[#A79890] border-[#DFCFC0] dark:border-[#382C3D]'
            }`}
          >
            {isNightAmbiance ? <Moon className="w-4 h-4 text-[#E5B54F]" /> : <SunMedium className="w-4 h-4 text-[#C28C47]" />}
            <span className="hidden md:inline">{isNightAmbiance ? 'Ambiance Malam' : 'Mode Terang'}</span>
          </button>

          {/* Density Heatmap Toggle */}
          <button
            onClick={() => setShowDensityHeatmap(!showDensityHeatmap)}
            title="Tampilkan Kepadatan Tamu / Density"
            className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
              showDensityHeatmap
                ? 'bg-amber-600 text-white border-amber-500 shadow-sm'
                : 'bg-white dark:bg-[#251E28] text-[#6C5E56] dark:text-[#A79890] border-[#DFCFC0] dark:border-[#382C3D]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span className="hidden lg:inline">Heatmap Kepadatan</span>
          </button>
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="px-5 py-2.5 bg-[#FAF7F2]/60 dark:bg-[#1A161C]/60 border-b border-[#E5DACD] dark:border-[#2C242E] flex items-center gap-2 overflow-x-auto scrollbar-none">
        <span className="text-xs font-semibold text-[#8C7B70] dark:text-[#9A8980] flex items-center gap-1 flex-shrink-0 mr-1">
          <Eye className="w-3.5 h-3.5" /> Filter Zona:
        </span>
        {[
          { id: 'all', label: 'Semua Zona' },
          { id: 'stage_vip', label: '👑 Pelaminan & VIP' },
          { id: 'catering', label: '🍽️ Katering & Gubukan' },
          { id: 'dining', label: '🪑 Meja Tamu Reguler' },
          { id: 'entertainment', label: '🎶 Musik & Foto 360' },
          { id: 'reception_ops', label: '📋 Registrasi & Kru WO' },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => onChangeCategory(cat.id as ZoneCategory)}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              activeCategory === cat.id
                ? 'bg-[#B8860B] text-white shadow-sm'
                : 'bg-white dark:bg-[#261F2A] text-[#66574F] dark:text-[#BDB0A6] hover:bg-[#F2ECE1] dark:hover:bg-[#332A38] border border-[#E5DACD] dark:border-[#382C3D]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Main Floor Canvas Container */}
      <div className="relative flex-1 min-h-[480px] sm:min-h-[580px] lg:min-h-[640px] overflow-hidden flex items-center justify-center p-3 sm:p-6 select-none">
        {/* Dynamic Background Pattern */}
        <div
          className={`absolute inset-0 transition-colors duration-500 pointer-events-none ${
            isNightAmbiance
              ? 'bg-[#18131B] opacity-95'
              : 'bg-[#F9F6F0] dark:bg-[#171318] opacity-100'
          }`}
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, ${
              isNightAmbiance ? 'rgba(212, 163, 115, 0.08)' : 'rgba(184, 134, 11, 0.04)'
            } 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Ambient Mood Overlay (Simulating Ballroom Fairy Lights & Grand Chandelier) */}
        {isNightAmbiance && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Stage Spotlight Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-amber-500/15 rounded-full blur-3xl" />
            {/* Center Chandelier Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#C28C47]/10 rounded-full blur-2xl" />
          </div>
        )}

        {/* Map SVG Canvas with Smooth Zoom & Pan Scaling */}
        <motion.div
          animate={{ scale: zoomLevel }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="relative w-full max-w-[960px] aspect-[16/10] shadow-2xl rounded-2xl overflow-hidden border border-[#D5C6B5] dark:border-[#3C3042] bg-[#FAF8F5] dark:bg-[#1C1720]"
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full cursor-crosshair"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setTooltipPos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              });
            }}
            onMouseLeave={() => setHoveredZone(null)}
          >
            {/* Defs for gradients, patterns, and filters */}
            <defs>
              <linearGradient id="redCarpetGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#7F1D1D" />
                <stop offset="50%" stopColor="#991B1B" />
                <stop offset="100%" stopColor="#7F1D1D" />
              </linearGradient>

              <radialGradient id="stageGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
              </radialGradient>

              <radialGradient id="danceFloorGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFBEB" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#FEF3C7" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#D97706" stopOpacity="0.4" />
              </radialGradient>

              <pattern id="parquetPattern" width="4" height="4" patternUnits="userSpaceOnUse">
                <path d="M 0 0 L 4 4 M 4 0 L 0 4" stroke="#E2D4C3" strokeWidth="0.1" opacity="0.3" />
              </pattern>
            </defs>

            {/* --- ARCHITECTURAL BACKGROUND (WALLS & COLUMNS) --- */}
            {activeFloor === 'grand_ballroom' ? (
              <g id="ballroom-architecture">
                {/* Ballroom Floor Parquet */}
                <rect x="2" y="2" width="96" height="96" rx="4" fill="url(#parquetPattern)" />
                <rect x="2" y="2" width="96" height="96" rx="4" fill="none" stroke="#B8860B" strokeWidth="0.8" strokeDasharray="1.5, 1" opacity="0.5" />

                {/* Grand Entrance Double Doors (Bottom) */}
                <g id="entrance-doors">
                  <path d="M 40 98 L 60 98" stroke="#854D0E" strokeWidth="1.5" />
                  <path d="M 46 98 A 4 4 0 0 0 50 94" fill="none" stroke="#C28C47" strokeWidth="0.4" strokeDasharray="0.5" />
                  <path d="M 54 98 A 4 4 0 0 1 50 94" fill="none" stroke="#C28C47" strokeWidth="0.4" strokeDasharray="0.5" />
                  <text x="50" y="99" textAnchor="middle" fontSize="1.4" fill="#92400E" fontWeight="bold">
                    PINTU MASUK UTAMA BALLROOM
                  </text>
                </g>

                {/* Red Carpet Runway (from Entrance to Dance Floor to Stage) */}
                <path
                  d="M 46 92 L 46 22 L 54 22 L 54 92 Z"
                  fill="url(#redCarpetGrad)"
                  opacity="0.85"
                />
                {/* Gold fringe lines for red carpet */}
                <line x1="46" y1="22" x2="46" y2="92" stroke="#EAB308" strokeWidth="0.25" strokeDasharray="0.8, 0.4" />
                <line x1="54" y1="22" x2="54" y2="92" stroke="#EAB308" strokeWidth="0.25" strokeDasharray="0.8, 0.4" />

                {/* Ballroom Pillars (Architectural Classical Columns) */}
                {[
                  { cx: 8, cy: 30 }, { cx: 8, cy: 70 },
                  { cx: 92, cy: 30 }, { cx: 92, cy: 70 },
                  { cx: 38, cy: 54 }, { cx: 62, cy: 54 },
                ].map((col, idx) => (
                  <g key={idx}>
                    <circle cx={col.cx} cy={col.cy} r="1.6" fill="#D9C5B2" stroke="#854D0E" strokeWidth="0.3" />
                    <circle cx={col.cx} cy={col.cy} r="0.9" fill="#B8860B" opacity="0.6" />
                  </g>
                ))}

                {/* Grand Chandelier Center Rings */}
                <circle cx="50" cy="50" r="16" fill="none" stroke="#EAB308" strokeWidth="0.2" opacity="0.4" strokeDasharray="2, 1" />
                <circle cx="50" cy="50" r="28" fill="none" stroke="#EAB308" strokeWidth="0.15" opacity="0.25" strokeDasharray="3, 1.5" />
              </g>
            ) : (
              <g id="garden-architecture">
                {/* Outdoor Garden Grass & Water Feature */}
                <rect x="2" y="2" width="96" height="96" rx="4" fill="#2E4A2E" opacity="0.15" />
                {/* Garden Walkway */}
                <path d="M 46 95 L 46 32 L 54 32 L 54 95 Z" fill="#E8DEC8" opacity="0.7" />
                {/* Fountain Pond in Garden */}
                <circle cx="50" cy="12" r="7" fill="#3B82F6" opacity="0.2" stroke="#60A5FA" strokeWidth="0.5" />
                <circle cx="50" cy="12" r="3" fill="#60A5FA" opacity="0.3" />
                {/* Foliage / Topiary trees */}
                {[
                  { cx: 12, cy: 15 }, { cx: 88, cy: 15 },
                  { cx: 10, cy: 80 }, { cx: 90, cy: 80 }
                ].map((tree, idx) => (
                  <circle key={idx} cx={tree.cx} cy={tree.cy} r="3" fill="#15803D" opacity="0.4" stroke="#166534" strokeWidth="0.3" />
                ))}
              </g>
            )}

            {/* --- DENSITY HEATMAP LAYER (IF TOGGLED) --- */}
            {showDensityHeatmap && (
              <g id="density-heatmap" opacity="0.45">
                {/* High density at stage & buffet */}
                <circle cx="50" cy="18" r="18" fill="#EF4444" filter="blur(6px)" />
                <circle cx="50" cy="65" r="16" fill="#F97316" filter="blur(6px)" />
                <circle cx="50" cy="92" r="14" fill="#F59E0B" filter="blur(5px)" />
                <circle cx="86" cy="28" r="10" fill="#EAB308" filter="blur(4px)" />
              </g>
            )}

            {/* --- INTERACTIVE ZONES RENDERING --- */}
            {filteredZones.map((zone) => {
              const isSelected = selectedZone?.id === zone.id;
              const isHovered = hoveredZone?.id === zone.id;
              const statusColors = getStatusColor(zone.status);

              const { x, y, width, height, shape } = zone.coordinates;
              const posX = x - width / 2;
              const posY = y - height / 2;

              return (
                <g
                  key={zone.id}
                  onClick={() => onSelectZone(zone)}
                  onMouseEnter={() => setHoveredZone(zone)}
                  className="cursor-pointer transition-all duration-200"
                >
                  {/* Pulsing indicator ring when selected or attention */}
                  {(isSelected || zone.status === 'attention') && (
                    <rect
                      x={posX - 1.5}
                      y={posY - 1.5}
                      width={width + 3}
                      height={height + 3}
                      rx="3"
                      fill="none"
                      stroke={zone.status === 'attention' ? '#EF4444' : '#B8860B'}
                      strokeWidth="0.8"
                      className="animate-pulse"
                      strokeDasharray="2, 1"
                    />
                  )}

                  {/* Main Zone Box Shape */}
                  {shape === 'circle' ? (
                    <circle
                      cx={x}
                      cy={y}
                      r={width / 2}
                      fill={
                        isSelected
                          ? '#FEF3C7'
                          : isHovered
                          ? '#FDF8F0'
                          : isNightAmbiance
                          ? '#2C2230'
                          : '#FFFFFF'
                      }
                      stroke={
                        isSelected
                          ? '#B8860B'
                          : isHovered
                          ? '#D4AF37'
                          : isNightAmbiance
                          ? '#4D3C52'
                          : '#D5C6B5'
                      }
                      strokeWidth={isSelected ? '1' : '0.4'}
                      filter="drop-shadow(0 2px 4px rgba(0,0,0,0.15))"
                    />
                  ) : shape === 'pill' ? (
                    <rect
                      x={posX}
                      y={posY}
                      width={width}
                      height={height}
                      rx={height / 2}
                      fill={
                        isSelected
                          ? '#FEF3C7'
                          : isHovered
                          ? '#FDF8F0'
                          : isNightAmbiance
                          ? '#2C2230'
                          : '#FFFFFF'
                      }
                      stroke={
                        isSelected
                          ? '#B8860B'
                          : isHovered
                          ? '#D4AF37'
                          : isNightAmbiance
                          ? '#4D3C52'
                          : '#D5C6B5'
                      }
                      strokeWidth={isSelected ? '1' : '0.4'}
                      filter="drop-shadow(0 2px 4px rgba(0,0,0,0.15))"
                    />
                  ) : (
                    <rect
                      x={posX}
                      y={posY}
                      width={width}
                      height={height}
                      rx="2"
                      fill={
                        isSelected
                          ? '#FEF3C7'
                          : isHovered
                          ? '#FDF8F0'
                          : isNightAmbiance
                          ? '#2C2230'
                          : '#FFFFFF'
                      }
                      stroke={
                        isSelected
                          ? '#B8860B'
                          : isHovered
                          ? '#D4AF37'
                          : isNightAmbiance
                          ? '#4D3C52'
                          : '#D5C6B5'
                      }
                      strokeWidth={isSelected ? '1' : '0.4'}
                      filter="drop-shadow(0 2px 4px rgba(0,0,0,0.15))"
                    />
                  )}

                  {/* Status Indicator Dot */}
                  <circle
                    cx={posX + 2.5}
                    cy={posY + 2.5}
                    r="1"
                    fill={statusColors.fill}
                  />

                  {/* ShortCode Badge inside SVG */}
                  <text
                    x={x}
                    y={y - (height > 12 ? 1.5 : 0)}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={width > 20 ? '2.4' : '1.9'}
                    fontWeight="bold"
                    fill={isSelected ? '#78350F' : isNightAmbiance ? '#F8E9DA' : '#2D2422'}
                    fontFamily="Plus Jakarta Sans, sans-serif"
                  >
                    {zone.shortCode}
                  </text>

                  {/* Capacity or Zone Subtitle if space permits */}
                  {height >= 12 && (
                    <text
                      x={x}
                      y={y + 2.5}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="1.3"
                      fontWeight="500"
                      fill={isSelected ? '#92400E' : isNightAmbiance ? '#C5B5A5' : '#78685E'}
                    >
                      {zone.name.length > 22 ? zone.name.substring(0, 20) + '..' : zone.name}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Empty Zones Overlay Banner */}
          {filteredZones.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none">
              <div className="max-w-md p-6 rounded-3xl bg-white/90 dark:bg-[#1E1822]/90 backdrop-blur-md border border-[#DFCFC0] dark:border-[#382C3D] shadow-2xl text-center space-y-3 pointer-events-auto">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-[#B8860B] flex items-center justify-center mx-auto shadow-inner">
                  <Layers className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-[#2D2422] dark:text-[#FFF7EE]">
                  Belum Ada Zona di Lantai Ini
                </h4>
                <p className="text-xs text-[#7B6E67] dark:text-[#A79890] leading-relaxed">
                  Tata letak denah masih kosong. Anda dapat membuka tab <strong>Studio Denah</strong> untuk menggambar zona panggung & meja secara interaktif atau sinkronkan data dari Supabase.
                </p>
              </div>
            </div>
          )}

          {/* Floating Hover Tooltip */}
          {hoveredZone && (
            <div
              style={{
                left: `${Math.min(Math.max(tooltipPos.x + 12, 10), 650)}px`,
                top: `${Math.min(Math.max(tooltipPos.y + 12, 10), 380)}px`,
              }}
              className="absolute pointer-events-none z-30 p-3 rounded-2xl bg-black/85 text-white backdrop-blur-md shadow-2xl border border-white/20 text-xs w-64 space-y-1.5 animate-fadeIn"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-[#E5B54F]">{hoveredZone.shortCode}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 capitalize font-medium">
                  {hoveredZone.category.replace('_', ' ')}
                </span>
              </div>
              <div className="font-bold text-sm text-white">{hoveredZone.name}</div>
              <div className="text-[11px] text-gray-300 flex items-center gap-1.5">
                <Users className="w-3 h-3 text-[#E5B54F]" />
                <span>Kapasitas: {hoveredZone.capacity}</span>
              </div>
              <div className="text-[11px] text-gray-300 flex items-center gap-1.5">
                <Info className="w-3 h-3 text-[#10B981]" />
                <span>PIC: {hoveredZone.pic.name} ({hoveredZone.pic.htChannel})</span>
              </div>
              <div className="pt-1 border-t border-white/10 text-[10px] text-amber-300 font-medium">
                👉 Klik untuk membuka rincian lengkap & checklist
              </div>
            </div>
          )}
        </motion.div>

        {/* Floating Zoom & Map Controls (Bottom Right) */}
        <div className="absolute bottom-5 right-5 flex flex-col gap-2 z-20">
          <div className="flex flex-col rounded-2xl bg-white/90 dark:bg-[#201A24]/90 backdrop-blur-md border border-[#DFCFC0] dark:border-[#382C3D] shadow-lg overflow-hidden">
            <button
              onClick={handleZoomIn}
              className="p-2.5 hover:bg-[#F2ECE1] dark:hover:bg-[#322738] text-[#554740] dark:text-[#E2D5C9] transition-colors"
              title="Perbesar (Zoom In)"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <div className="h-[1px] bg-[#EFE7DC] dark:bg-[#382C3D]" />
            <button
              onClick={handleZoomOut}
              className="p-2.5 hover:bg-[#F2ECE1] dark:hover:bg-[#322738] text-[#554740] dark:text-[#E2D5C9] transition-colors"
              title="Perkecil (Zoom Out)"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <div className="h-[1px] bg-[#EFE7DC] dark:bg-[#382C3D]" />
            <button
              onClick={handleResetZoom}
              className="p-2.5 hover:bg-[#F2ECE1] dark:hover:bg-[#322738] text-[#554740] dark:text-[#E2D5C9] transition-colors"
              title="Kembalikan Tampilan Normal (Reset)"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={toggleFullscreen}
            className="p-2.5 rounded-2xl bg-white/90 dark:bg-[#201A24]/90 backdrop-blur-md border border-[#DFCFC0] dark:border-[#382C3D] shadow-lg hover:bg-[#F2ECE1] dark:hover:bg-[#322738] text-[#554740] dark:text-[#E2D5C9] transition-colors"
            title="Layar Penuh (Fullscreen)"
          >
            <Maximize className="w-4 h-4" />
          </button>
        </div>

        {/* Floating Quick Legend (Bottom Left) */}
        <div className="absolute bottom-5 left-5 hidden sm:flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-white/85 dark:bg-[#1E1822]/85 backdrop-blur-md border border-[#DFCFC0] dark:border-[#382C3D] shadow-md text-xs text-[#554740] dark:text-[#DDD0C5]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Siap</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span>Proses</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span>Atensi</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
            <span>Standby</span>
          </div>
        </div>
      </div>
    </div>
  );
};
