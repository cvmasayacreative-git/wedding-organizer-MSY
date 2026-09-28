import React, { useState, useRef, useEffect } from 'react';
import { VenueZone, FloorLevel, ZoneCategory, ZoneStatus } from '../types';
import { 
  Move, Square, Circle, Pill, Stamp, Trash2, Copy, Eraser,
  RotateCcw, Undo2, Redo2, ZoomIn, ZoomOut, Maximize2, 
  Grid, Check, Sparkles, MapPin, Users, Utensils, 
  Music, Shield, Heart, Save, AlertCircle, AlertTriangle, Eye, ArrowUp, ArrowDown, ArrowLeft, ArrowRight
} from 'lucide-react';

interface FloorPlanDesignerProps {
  zones: VenueZone[];
  onAddZone: (newZone: VenueZone) => void;
  onUpdateZone: (updatedZone: VenueZone) => void;
  onDeleteZone: (zoneId: string) => void;
  activeFloor: FloorLevel;
  onChangeFloor: (floor: FloorLevel) => void;
}

type EditorTool = 'select' | 'draw_rect' | 'draw_circle' | 'draw_pill' | 'stamp' | 'eraser';

interface StampPreset {
  id: string;
  name: string;
  codePrefix: string;
  category: ZoneCategory;
  width: number;
  height: number;
  shape: 'rect' | 'circle' | 'pill';
  capacity: string;
  dimensions: string;
  picName: string;
  htChannel: string;
}

const STAMP_PRESETS: StampPreset[] = [
  {
    id: 'p-pelaminan',
    name: 'Pelaminan & Royal Stage',
    codePrefix: 'STAGE',
    category: 'stage_vip',
    width: 32,
    height: 16,
    shape: 'rect',
    capacity: '12 Pax',
    dimensions: '14.0m x 4.5m',
    picName: 'Stage Master',
    htChannel: 'CH-01',
  },
  {
    id: 'p-vip-table',
    name: 'Meja Bundar VIP (10 Pax)',
    codePrefix: 'VIP',
    category: 'stage_vip',
    width: 14,
    height: 14,
    shape: 'circle',
    capacity: '10 Kursi',
    dimensions: 'Dia. 2.0m',
    picName: 'VIP Usher',
    htChannel: 'CH-03',
  },
  {
    id: 'p-guest-table',
    name: 'Meja Bundar Tamu (8 Pax)',
    codePrefix: 'TBL',
    category: 'dining',
    width: 12,
    height: 12,
    shape: 'circle',
    capacity: '8 Kursi',
    dimensions: 'Dia. 1.8m',
    picName: 'Floor Usher',
    htChannel: 'CH-04',
  },
  {
    id: 'p-buffet-island',
    name: 'Island Prasmanan (Buffet)',
    codePrefix: 'BUF',
    category: 'catering',
    width: 28,
    height: 13,
    shape: 'rect',
    capacity: '800 Pax Rotasi',
    dimensions: '10.0m x 2.4m',
    picName: 'Chef Plataran',
    htChannel: 'CH-02',
  },
  {
    id: 'p-stall-food',
    name: 'Stall Live Cooking Gubukan',
    codePrefix: 'STL',
    category: 'catering',
    width: 14,
    height: 12,
    shape: 'rect',
    capacity: '350 Pax',
    dimensions: '3.5m x 2.0m',
    picName: 'Cook In-Charge',
    htChannel: 'CH-02',
  },
  {
    id: 'p-photo-360',
    name: '360 Video Spinner / Photobooth',
    codePrefix: 'PB',
    category: 'entertainment',
    width: 14,
    height: 12,
    shape: 'rect',
    capacity: '4 Pax Platform',
    dimensions: '4.0m x 4.0m',
    picName: 'Booth Operator',
    htChannel: 'CH-04',
  },
  {
    id: 'p-music-band',
    name: 'Panggung Akustik & Orchestra',
    codePrefix: 'ENT',
    category: 'entertainment',
    width: 16,
    height: 13,
    shape: 'rect',
    capacity: '8 Musisi',
    dimensions: '5.0m x 3.5m',
    picName: 'Band Leader',
    htChannel: 'CH-04',
  },
  {
    id: 'p-dance-cake',
    name: 'Lantai Dansa & Wedding Cake',
    codePrefix: 'ACT',
    category: 'entertainment',
    width: 18,
    height: 14,
    shape: 'pill',
    capacity: 'Center Attraction',
    dimensions: 'Dia. 6.0m',
    picName: 'Show Operator',
    htChannel: 'CH-01',
  },
  {
    id: 'p-reception',
    name: 'Meja Registrasi & Kotak Angpao',
    codePrefix: 'RCP',
    category: 'reception_ops',
    width: 26,
    height: 10,
    shape: 'rect',
    capacity: '6 Antrean',
    dimensions: '9.0m x 1.8m',
    picName: 'Head Usher',
    htChannel: 'CH-05',
  },
];

export const FloorPlanDesigner: React.FC<FloorPlanDesignerProps> = ({
  zones,
  onAddZone,
  onUpdateZone,
  onDeleteZone,
  activeFloor,
  onChangeFloor,
}) => {
  const [selectedTool, setSelectedTool] = useState<EditorTool>('select');
  const [selectedStamp, setSelectedStamp] = useState<StampPreset>(STAMP_PRESETS[1]);
  const [selectedZoneId, setSelectedZoneId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [isConfirmingInspectorDelete, setIsConfirmingInspectorDelete] = useState<boolean>(false);
  const [snapToGrid, setSnapToGrid] = useState<boolean>(true);
  const [gridSize, setGridSize] = useState<number>(2); // 2% grid step
  const [zoom, setZoom] = useState<number>(1);
  const [mouseCoord, setMouseCoord] = useState<{ x: number; y: number } | null>(null);

  // Drawing state
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawStart, setDrawStart] = useState<{ x: number; y: number } | null>(null);
  const [drawCurrent, setDrawCurrent] = useState<{ x: number; y: number } | null>(null);

  // Dragging state
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Resizing state
  const [isResizing, setIsResizing] = useState(false);
  const [resizeHandle, setResizeHandle] = useState<string | null>(null);

  // History state for Undo
  const [history, setHistory] = useState<VenueZone[][]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const svgRef = useRef<SVGSVGElement>(null);

  // Filter zones by active floor
  const floorZones = zones.filter((z) => z.floor === activeFloor);
  const selectedZone = zones.find((z) => z.id === selectedZoneId) || null;

  // Keyboard shortcut listener for Delete/Backspace key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;
      if ((e.key === 'Delete' || e.key === 'Backspace') && selectedZoneId) {
        onDeleteZone(selectedZoneId);
        setSelectedZoneId(null);
        setConfirmDeleteId(null);
        setIsConfirmingInspectorDelete(false);
      }
      if (e.key === 'Escape') {
        setSelectedZoneId(null);
        setConfirmDeleteId(null);
        setIsConfirmingInspectorDelete(false);
        setSelectedTool('select');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedZoneId, onDeleteZone]);

  // Push to history when zones change
  const saveStateToHistory = (newZones: VenueZone[]) => {
    setHistory((prev) => [...prev.slice(0, historyIndex + 1), newZones]);
    setHistoryIndex((prev) => prev + 1);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      const prevZones = history[historyIndex - 1];
      setHistoryIndex((prev) => prev - 1);
      // Restore zones
      // You can notify parent or reset
    }
  };

  // Convert client mouse event to SVG percentage coordinates (0 - 100)
  const getSvgCoordinates = (e: React.MouseEvent<SVGElement>): { x: number; y: number } => {
    if (!svgRef.current) return { x: 50, y: 50 };
    const rect = svgRef.current.getBoundingClientRect();
    const rawX = ((e.clientX - rect.left) / rect.width) * 100;
    const rawY = ((e.clientY - rect.top) / rect.height) * 100;

    const clampedX = Math.max(0, Math.min(100, rawX));
    const clampedY = Math.max(0, Math.min(100, rawY));

    if (snapToGrid) {
      return {
        x: Math.round(clampedX / gridSize) * gridSize,
        y: Math.round(clampedY / gridSize) * gridSize,
      };
    }
    return {
      x: Math.round(clampedX * 10) / 10,
      y: Math.round(clampedY * 10) / 10,
    };
  };

  // --- MOUSE DOWN ON SVG CANVAS ---
  const handleMouseDown = (e: React.MouseEvent<SVGSVGElement>) => {
    const coords = getSvgCoordinates(e);

    // If Stamp Tool is active: place preset immediately
    if (selectedTool === 'stamp') {
      const stampCount = zones.filter((z) => z.shortCode.startsWith(selectedStamp.codePrefix)).length + 1;
      const newZone: VenueZone = {
        id: `zone-${Date.now()}`,
        name: `${selectedStamp.name} #${stampCount}`,
        shortCode: `${selectedStamp.codePrefix}-${String(stampCount).padStart(2, '0')}`,
        category: selectedStamp.category as any,
        floor: activeFloor,
        status: 'ready',
        coordinates: {
          x: coords.x,
          y: coords.y,
          width: selectedStamp.width,
          height: selectedStamp.height,
          shape: selectedStamp.shape,
        },
        capacity: selectedStamp.capacity,
        dimensions: selectedStamp.dimensions,
        pic: {
          name: selectedStamp.picName,
          role: 'Divisi PIC',
          phone: '+62 812-3344-5566',
          htChannel: selectedStamp.htChannel,
        },
        description: `Zona ${selectedStamp.name} yang ditambahkan via Studio Gambar Denah.`,
        equipment: ['Peralatan Standar Lapangan'],
        checklist: [
          { id: `c-${Date.now()}-1`, text: 'Pemeriksaan penempatan posisi & jarak lalu lintas tamu', done: true },
          { id: `c-${Date.now()}-2`, text: 'Briefing kru PIC zona sebelum acara dimulai', done: false },
        ],
        timeline: [
          { time: '18:00 - 22:00', activity: 'Pelaksanaan operasional hari-H', status: 'active' },
        ],
        notes: 'Dibuat dengan Tool Stempel Denah',
      };
      onAddZone(newZone);
      setSelectedZoneId(newZone.id);
      setSelectedTool('select');
      return;
    }

    // If Draw Tool is active (rect, circle, pill): start drawing
    if (['draw_rect', 'draw_circle', 'draw_pill'].includes(selectedTool)) {
      setIsDrawing(true);
      setDrawStart(coords);
      setDrawCurrent(coords);
      return;
    }

    // If Select Tool is active:
    // If clicked on canvas background (not on an element), deselect
    if ((e.target as HTMLElement).tagName === 'svg' || (e.target as HTMLElement).id === 'canvas-bg' || (e.target as HTMLElement).id === 'grid-pattern-rect') {
      setSelectedZoneId(null);
    }
  };

  // --- MOUSE MOVE ON SVG CANVAS ---
  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const coords = getSvgCoordinates(e);
    setMouseCoord(coords);

    // If drawing new shape
    if (isDrawing && drawStart) {
      setDrawCurrent(coords);
      return;
    }

    // If dragging existing selected zone
    if (isDragging && selectedZone) {
      const newX = Math.max(5, Math.min(95, coords.x - dragOffset.x));
      const newY = Math.max(5, Math.min(95, coords.y - dragOffset.y));
      onUpdateZone({
        ...selectedZone,
        coordinates: {
          ...selectedZone.coordinates,
          x: snapToGrid ? Math.round(newX / gridSize) * gridSize : Math.round(newX * 10) / 10,
          y: snapToGrid ? Math.round(newY / gridSize) * gridSize : Math.round(newY * 10) / 10,
        },
      });
      return;
    }

    // If resizing selected zone
    if (isResizing && selectedZone && resizeHandle) {
      const curX = selectedZone.coordinates.x;
      const curY = selectedZone.coordinates.y;
      let newW = selectedZone.coordinates.width;
      let newH = selectedZone.coordinates.height;

      if (resizeHandle.includes('e')) {
        newW = Math.max(6, Math.min(50, Math.abs(coords.x - curX) * 2));
      }
      if (resizeHandle.includes('s')) {
        newH = Math.max(6, Math.min(40, Math.abs(coords.y - curY) * 2));
      }

      onUpdateZone({
        ...selectedZone,
        coordinates: {
          ...selectedZone.coordinates,
          width: snapToGrid ? Math.round(newW / gridSize) * gridSize : Math.round(newW),
          height: snapToGrid ? Math.round(newH / gridSize) * gridSize : Math.round(newH),
        },
      });
    }
  };

  // --- MOUSE UP ON SVG CANVAS ---
  const handleMouseUp = () => {
    if (isDrawing && drawStart && drawCurrent) {
      // Calculate drawn dimensions
      const minX = Math.min(drawStart.x, drawCurrent.x);
      const maxX = Math.max(drawStart.x, drawCurrent.x);
      const minY = Math.min(drawStart.y, drawCurrent.y);
      const maxY = Math.max(drawStart.y, drawCurrent.y);

      const width = Math.max(6, Math.round(maxX - minX));
      const height = Math.max(6, Math.round(maxY - minY));
      const centerX = Math.round(minX + width / 2);
      const centerY = Math.round(minY + height / 2);

      const shapeType: 'rect' | 'circle' | 'pill' = 
        selectedTool === 'draw_circle' ? 'circle' : 
        selectedTool === 'draw_pill' ? 'pill' : 'rect';

      const zoneCount = zones.length + 1;
      const defaultCategory: ZoneCategory = 
        shapeType === 'circle' ? 'dining' : 
        shapeType === 'pill' ? 'entertainment' : 'stage_vip';

      const newZone: VenueZone = {
        id: `zone-${Date.now()}`,
        name: `Zona Gambar #${zoneCount}`,
        shortCode: `ZN-${String(zoneCount).padStart(2, '0')}`,
        category: defaultCategory as any,
        floor: activeFloor,
        status: 'ready',
        coordinates: {
          x: centerX,
          y: centerY,
          width: shapeType === 'circle' ? Math.max(width, height) : width,
          height: shapeType === 'circle' ? Math.max(width, height) : height,
          shape: shapeType,
        },
        capacity: shapeType === 'circle' ? '8 Kursi' : '20 Pax',
        dimensions: `${Math.round(width * 0.35 * 10) / 10}m x ${Math.round(height * 0.35 * 10) / 10}m`,
        pic: {
          name: 'Kru Lapangan',
          role: 'Floor Coordinator',
          phone: '+62 812-9988-0000',
          htChannel: 'CH-01',
        },
        description: 'Zona baru hasil goresan gambar di studio denah.',
        equipment: ['Peralatan Lapangan Standar'],
        checklist: [
          { id: `chk-${Date.now()}`, text: 'Penataan meja & panggung sesuai hasil gambar', done: true },
        ],
        timeline: [
          { time: '18:00 - 22:00', activity: 'Operasional aktif', status: 'active' },
        ],
        notes: 'Digambar manual menggunakan Studio Gambar Denah',
      };

      onAddZone(newZone);
      setSelectedZoneId(newZone.id);
      setSelectedTool('select');
    }

    setIsDrawing(false);
    setIsDragging(false);
    setIsResizing(false);
    setDrawStart(null);
    setDrawCurrent(null);
    setResizeHandle(null);
  };

  // Nudge selected zone with keyboard or buttons
  const nudgeSelected = (dx: number, dy: number) => {
    if (!selectedZone) return;
    const newX = Math.max(5, Math.min(95, selectedZone.coordinates.x + dx));
    const newY = Math.max(5, Math.min(95, selectedZone.coordinates.y + dy));
    onUpdateZone({
      ...selectedZone,
      coordinates: {
        ...selectedZone.coordinates,
        x: newX,
        y: newY,
      },
    });
  };

  // Duplicate selected zone
  const duplicateSelected = () => {
    if (!selectedZone) return;
    const duplicated: VenueZone = {
      ...selectedZone,
      id: `zone-${Date.now()}`,
      name: `${selectedZone.name} (Copy)`,
      shortCode: `${selectedZone.shortCode}-C`,
      coordinates: {
        ...selectedZone.coordinates,
        x: Math.min(90, selectedZone.coordinates.x + 5),
        y: Math.min(90, selectedZone.coordinates.y + 5),
      },
    };
    onAddZone(duplicated);
    setSelectedZoneId(duplicated.id);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner / Studio Header */}
      <div className="p-5 rounded-3xl bg-gradient-to-r from-[#241A14] via-[#1E1620] to-[#121013] text-[#FAF7F2] border border-[#B8860B]/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold font-mono bg-[#B8860B] text-white flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> STUDIO GAMBAR DENAH INTERAKTIF
            </span>
            <span className="text-xs text-amber-200">
              Drag, Drop, Draw & Resize Elemen Panggung
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            Desain Layout & Tata Letak Meja Acara
          </h3>
          <p className="text-xs text-gray-300">
            Pilih alat gambar atau stempel cepat, lalu klik & geser di atas kanvas gedung untuk menentukan posisi akurat.
          </p>
        </div>

        {/* Floor Switcher & Grid Toggle */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center p-1 rounded-2xl bg-white/10 border border-white/20">
            <button
              onClick={() => onChangeFloor('grand_ballroom')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeFloor === 'grand_ballroom'
                  ? 'bg-[#B8860B] text-white shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Ballroom (Indoor)
            </button>
            <button
              onClick={() => onChangeFloor('garden_terrace')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeFloor === 'garden_terrace'
                  ? 'bg-[#B8860B] text-white shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Garden (Akad)
            </button>
          </div>

          <button
            onClick={() => setSnapToGrid(!snapToGrid)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-all ${
              snapToGrid
                ? 'bg-amber-600/40 text-amber-200 border-amber-500'
                : 'bg-white/10 text-gray-300 border-white/20'
            }`}
            title="Snap to Grid (Kerapian Garis Grid)"
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Snap Grid: {snapToGrid ? 'ON' : 'OFF'}</span>
          </button>
        </div>
      </div>

      {/* Main Designer Layout Grid: Toolbar (Left/Top) + Canvas (Center) + Inspector (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Left Column: Drawing Tools & Quick Stamps (3 cols) */}
        <div className="lg:col-span-3 space-y-4">
          {/* Main Drawing Tools */}
          <div className="p-4 rounded-3xl bg-white dark:bg-[#1A161D] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#865D36] dark:text-[#D4AF37] block">
              1. Pilih Alat Gambar (Tool)
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setSelectedTool('select')}
                className={`p-3 rounded-2xl text-xs font-semibold flex items-center gap-2 transition-all ${
                  selectedTool === 'select'
                    ? 'bg-[#2D2422] text-white dark:bg-[#F8F3ED] dark:text-[#18131B] shadow-md ring-2 ring-[#B8860B]'
                    : 'bg-[#FAF7F2] dark:bg-[#251E28] text-[#554740] dark:text-[#C5B7AE] hover:bg-[#F2ECE1]'
                }`}
              >
                <Move className="w-4 h-4 text-[#B8860B]" />
                <span>Pilih / Geser</span>
              </button>

              <button
                onClick={() => setSelectedTool('draw_rect')}
                className={`p-3 rounded-2xl text-xs font-semibold flex items-center gap-2 transition-all ${
                  selectedTool === 'draw_rect'
                    ? 'bg-[#2D2422] text-white dark:bg-[#F8F3ED] dark:text-[#18131B] shadow-md ring-2 ring-[#B8860B]'
                    : 'bg-[#FAF7F2] dark:bg-[#251E28] text-[#554740] dark:text-[#C5B7AE] hover:bg-[#F2ECE1]'
                }`}
              >
                <Square className="w-4 h-4 text-[#B8860B]" />
                <span>Gambar Kotak</span>
              </button>

              <button
                onClick={() => setSelectedTool('draw_circle')}
                className={`p-3 rounded-2xl text-xs font-semibold flex items-center gap-2 transition-all ${
                  selectedTool === 'draw_circle'
                    ? 'bg-[#2D2422] text-white dark:bg-[#F8F3ED] dark:text-[#18131B] shadow-md ring-2 ring-[#B8860B]'
                    : 'bg-[#FAF7F2] dark:bg-[#251E28] text-[#554740] dark:text-[#C5B7AE] hover:bg-[#F2ECE1]'
                }`}
              >
                <Circle className="w-4 h-4 text-[#B8860B]" />
                <span>Gambar Bulat</span>
              </button>

              <button
                onClick={() => setSelectedTool('draw_pill')}
                className={`p-3 rounded-2xl text-xs font-semibold flex items-center gap-2 transition-all ${
                  selectedTool === 'draw_pill'
                    ? 'bg-[#2D2422] text-white dark:bg-[#F8F3ED] dark:text-[#18131B] shadow-md ring-2 ring-[#B8860B]'
                    : 'bg-[#FAF7F2] dark:bg-[#251E28] text-[#554740] dark:text-[#C5B7AE] hover:bg-[#F2ECE1]'
                }`}
              >
                <Pill className="w-4 h-4 text-[#B8860B]" />
                <span>Gambar Lonjong</span>
              </button>

              <button
                onClick={() => setSelectedTool('eraser')}
                className={`col-span-2 p-2.5 rounded-2xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  selectedTool === 'eraser'
                    ? 'bg-rose-600 text-white shadow-md ring-2 ring-rose-400'
                    : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-rose-900/50 border border-rose-200 dark:border-rose-900/50'
                }`}
                title="Penghapus Elemen (Klik objek di kanvas untuk langsung menghapus)"
              >
                <Eraser className="w-4 h-4" />
                <span>Penghapus Zona (Klik Objek untuk Hapus)</span>
              </button>
            </div>

            {selectedTool === 'eraser' ? (
              <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-[11px] text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900/60 font-medium animate-pulse">
                🗑️ <strong>Mode Penghapus Aktif:</strong> Klik meja atau panggung mana pun pada kanvas denah untuk langsung menghapusnya.
              </div>
            ) : (
              <div className="p-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] text-[11px] text-[#7B6E67] dark:text-[#A79890] border border-[#DFCFC0] dark:border-[#382C3D]">
                💡 <strong>Tips:</strong> Klik & seret pada kanvas untuk membuat elemen. Tekan <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-black font-mono border">Del</kbd> untuk hapus objek terpilih.
              </div>
            )}
          </div>

          {/* Quick Stamp Presets */}
          <div className="p-4 rounded-3xl bg-white dark:bg-[#1A161D] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#865D36] dark:text-[#D4AF37]">
                2. Stempel Cepat Elemen
              </span>
              <span className="text-[10px] text-gray-400">Klik lalu tempel</span>
            </div>

            <div className="space-y-1.5 max-h-[360px] overflow-y-auto pr-1">
              {STAMP_PRESETS.map((preset) => {
                const isCurrentStamp = selectedTool === 'stamp' && selectedStamp.id === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => {
                      setSelectedTool('stamp');
                      setSelectedStamp(preset);
                    }}
                    className={`w-full p-2.5 rounded-2xl text-left border transition-all flex items-center justify-between text-xs ${
                      isCurrentStamp
                        ? 'bg-[#FEF3C7] dark:bg-[#342738] border-[#B8860B] ring-2 ring-[#B8860B]/50'
                        : 'bg-[#FAF7F2] dark:bg-[#201923] border-[#E5DACD] dark:border-[#382C3D] hover:border-[#B8860B]/40'
                    }`}
                  >
                    <div className="truncate">
                      <div className="font-bold text-[#221A18] dark:text-white truncate">
                        {preset.name}
                      </div>
                      <div className="text-[10px] text-[#7B6E67] dark:text-[#A79890]">
                        {preset.dimensions} • {preset.shape}
                      </div>
                    </div>
                    <Stamp className={`w-4 h-4 flex-shrink-0 ${isCurrentStamp ? 'text-[#B8860B]' : 'text-gray-400'}`} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Center Column: The Visual Canvas Area (6 cols) */}
        <div className="lg:col-span-6 space-y-3">
          <div className="relative rounded-3xl overflow-hidden bg-[#FAF8F5] dark:bg-[#18131B] border border-[#D5C6B5] dark:border-[#3C3042] shadow-xl p-2 select-none">
            
            {/* Top Canvas Bar Indicator */}
            <div className="px-3 py-2 flex items-center justify-between text-xs border-b border-[#E5DACD] dark:border-[#2C242E] bg-white/70 dark:bg-[#1C181E]/70 backdrop-blur-md rounded-2xl mb-2">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#865D36] dark:text-[#D4AF37]">
                  Denah: {activeFloor === 'grand_ballroom' ? 'Grand Ballroom (100% Skala)' : 'Glasshouse Garden'}
                </span>
                <span className="text-[11px] text-[#7B6E67] dark:text-[#A79890]">
                  ({floorZones.length} Zona Terpasang)
                </span>
              </div>

              {mouseCoord && (
                <div className="font-mono text-[11px] text-[#B8860B] bg-[#FAF4ED] dark:bg-[#2A222D] px-2 py-0.5 rounded">
                  X: {mouseCoord.x}% | Y: {mouseCoord.y}%
                </div>
              )}
            </div>

            {/* SVG Drawing Canvas */}
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-white dark:bg-[#1C1720] border border-[#DFCFC0] dark:border-[#2C242E]">
              <svg
                ref={svgRef}
                viewBox="0 0 100 100"
                className={`w-full h-full ${
                  selectedTool === 'eraser' ? 'cursor-pointer' :
                  selectedTool === 'stamp' ? 'cursor-cell' : 
                  selectedTool.startsWith('draw') ? 'cursor-crosshair' : 'cursor-default'
                }`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
              >
                <defs>
                  {/* Grid pattern */}
                  <pattern id="designerGrid" width="4" height="4" patternUnits="userSpaceOnUse">
                    <path d="M 4 0 L 0 0 0 4" fill="none" stroke="#E2D4C3" strokeWidth="0.1" opacity="0.4" />
                  </pattern>

                  {/* Red Carpet Runway Gradient */}
                  <linearGradient id="carpetGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7F1D1D" />
                    <stop offset="100%" stopColor="#991B1B" />
                  </linearGradient>
                </defs>

                {/* Background Grid & Architectural Guides */}
                <rect id="grid-pattern-rect" x="0" y="0" width="100" height="100" fill="url(#designerGrid)" />
                <rect x="2" y="2" width="96" height="96" rx="3" fill="none" stroke="#B8860B" strokeWidth="0.5" strokeDasharray="1, 1" opacity="0.3" />

                {activeFloor === 'grand_ballroom' ? (
                  <g id="ballroom-guidelines" opacity="0.5" pointerEvents="none">
                    {/* Red Carpet Runway Guide */}
                    <path d="M 46 95 L 46 22 L 54 22 L 54 95 Z" fill="url(#carpetGrad)" opacity="0.4" />
                    <line x1="50" y1="20" x2="50" y2="95" stroke="#EAB308" strokeWidth="0.2" strokeDasharray="1, 1" />
                    <text x="50" y="98" fontSize="1.3" textAnchor="middle" fill="#854D0E" fontWeight="bold">
                      GERBANG ENTRANCE
                    </text>
                    {/* Architectural Pillars */}
                    {[
                      { cx: 8, cy: 30 }, { cx: 8, cy: 70 },
                      { cx: 92, cy: 30 }, { cx: 92, cy: 70 },
                      { cx: 38, cy: 54 }, { cx: 62, cy: 54 },
                    ].map((col, idx) => (
                      <circle key={idx} cx={col.cx} cy={col.cy} r="1.3" fill="#D9C5B2" stroke="#854D0E" strokeWidth="0.2" />
                    ))}
                  </g>
                ) : (
                  <g id="garden-guidelines" opacity="0.5" pointerEvents="none">
                    <circle cx="50" cy="12" r="7" fill="#60A5FA" opacity="0.2" />
                    <path d="M 46 95 L 46 32 L 54 32 L 54 95 Z" fill="#E8DEC8" opacity="0.6" />
                  </g>
                )}

                {/* Render Existing Zones */}
                {floorZones.map((zone) => {
                  const isSelected = selectedZoneId === zone.id;
                  const isEraserMode = selectedTool === 'eraser';
                  const { x, y, width, height, shape } = zone.coordinates;
                  const posX = x - width / 2;
                  const posY = y - height / 2;

                  return (
                    <g
                      key={zone.id}
                      className={isEraserMode ? 'cursor-pointer hover:opacity-60 transition-opacity' : 'cursor-pointer'}
                      onMouseDown={(e) => {
                        e.stopPropagation();
                        if (selectedTool === 'eraser') {
                          onDeleteZone(zone.id);
                          if (selectedZoneId === zone.id) {
                            setSelectedZoneId(null);
                            setConfirmDeleteId(null);
                            setIsConfirmingInspectorDelete(false);
                          }
                          return;
                        }
                        setSelectedZoneId(zone.id);
                        setConfirmDeleteId(null);
                        setIsConfirmingInspectorDelete(false);
                        if (selectedTool === 'select') {
                          setIsDragging(true);
                          const coords = getSvgCoordinates(e);
                          setDragOffset({
                            x: coords.x - zone.coordinates.x,
                            y: coords.y - zone.coordinates.y,
                          });
                        }
                      }}
                    >
                      {/* Selection Glow / Pulse */}
                      {isSelected && (
                        <rect
                          x={posX - 1.5}
                          y={posY - 1.5}
                          width={width + 3}
                          height={height + 3}
                          rx="3"
                          fill="none"
                          stroke="#B8860B"
                          strokeWidth="0.8"
                          strokeDasharray="2, 1"
                          className="animate-pulse"
                        />
                      )}

                      {/* Shape Body */}
                      {shape === 'circle' ? (
                        <circle
                          cx={x}
                          cy={y}
                          r={width / 2}
                          fill={isSelected ? '#FEF3C7' : '#FFFFFF'}
                          stroke={isSelected ? '#B8860B' : '#78685E'}
                          strokeWidth={isSelected ? '1' : '0.4'}
                          filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                        />
                      ) : shape === 'pill' ? (
                        <rect
                          x={posX}
                          y={posY}
                          width={width}
                          height={height}
                          rx={height / 2}
                          fill={isSelected ? '#FEF3C7' : '#FFFFFF'}
                          stroke={isSelected ? '#B8860B' : '#78685E'}
                          strokeWidth={isSelected ? '1' : '0.4'}
                          filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                        />
                      ) : (
                        <rect
                          x={posX}
                          y={posY}
                          width={width}
                          height={height}
                          rx="2"
                          fill={isSelected ? '#FEF3C7' : '#FFFFFF'}
                          stroke={isSelected ? '#B8860B' : '#78685E'}
                          strokeWidth={isSelected ? '1' : '0.4'}
                          filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                        />
                      )}

                      {/* Code Label Text */}
                      <text
                        x={x}
                        y={y - (height > 12 ? 1.5 : 0)}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize={width > 20 ? '2.4' : '1.9'}
                        fontWeight="bold"
                        fill={isSelected ? '#78350F' : '#2D2422'}
                        fontFamily="Plus Jakarta Sans, sans-serif"
                      >
                        {zone.shortCode}
                      </text>

                      {/* Sub-label Name */}
                      {height >= 12 && (
                        <text
                          x={x}
                          y={y + 2.5}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fontSize="1.3"
                          fontWeight="500"
                          fill="#78685E"
                        >
                          {zone.name.length > 20 ? zone.name.substring(0, 18) + '..' : zone.name}
                        </text>
                      )}

                      {/* Resize Handle on Bottom-Right when selected */}
                      {isSelected && (
                        <g
                          onMouseDown={(e) => {
                            e.stopPropagation();
                            setIsResizing(true);
                            setResizeHandle('se');
                          }}
                          className="cursor-nwse-resize"
                        >
                          <circle
                            cx={posX + width}
                            cy={posY + height}
                            r="1.6"
                            fill="#B8860B"
                            stroke="#FFFFFF"
                            strokeWidth="0.4"
                          />
                        </g>
                      )}
                    </g>
                  );
                })}

                {/* Live Drawing Preview Shape */}
                {isDrawing && drawStart && drawCurrent && (
                  <rect
                    x={Math.min(drawStart.x, drawCurrent.x)}
                    y={Math.min(drawStart.y, drawCurrent.y)}
                    width={Math.abs(drawCurrent.x - drawStart.x)}
                    height={Math.abs(drawCurrent.y - drawStart.y)}
                    rx="2"
                    fill="rgba(184, 134, 11, 0.25)"
                    stroke="#B8860B"
                    strokeWidth="0.8"
                    strokeDasharray="2, 1"
                  />
                )}
              </svg>
            </div>

            {/* Quick Nudge Controls below canvas */}
            {selectedZone && (
              <div className="flex items-center justify-between p-2 mt-2 bg-white/70 dark:bg-[#1E1921]/70 backdrop-blur-md rounded-2xl border border-[#DFCFC0] dark:border-[#382C3D] text-xs">
                <span className="font-semibold text-[#865D36] dark:text-[#D4AF37] flex items-center gap-1">
                  <span>Geser Presisi {selectedZone.shortCode}:</span>
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => nudgeSelected(-1, 0)}
                    className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200"
                    title="Geser Kiri"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => nudgeSelected(0, -1)}
                    className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200"
                    title="Geser Atas"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => nudgeSelected(0, 1)}
                    className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200"
                    title="Geser Bawah"
                  >
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => nudgeSelected(1, 0)}
                    className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200"
                    title="Geser Kanan"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={duplicateSelected}
                    className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 font-semibold flex items-center gap-1"
                    title="Duplikat Elemen"
                  >
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </button>
                  {confirmDeleteId === selectedZone.id ? (
                    <div className="flex items-center gap-1 bg-rose-100 dark:bg-rose-950 px-2 py-0.5 rounded-lg border border-rose-300 dark:border-rose-800 animate-fadeIn">
                      <span className="text-[10px] font-bold text-rose-700 dark:text-rose-300">Yakin hapus?</span>
                      <button
                        type="button"
                        onClick={() => {
                          onDeleteZone(selectedZone.id);
                          setSelectedZoneId(null);
                          setConfirmDeleteId(null);
                          setIsConfirmingInspectorDelete(false);
                        }}
                        className="px-2 py-0.5 rounded bg-rose-600 hover:bg-rose-700 text-white font-bold text-[10px] cursor-pointer"
                      >
                        Ya
                      </button>
                      <button
                        type="button"
                        onClick={() => setConfirmDeleteId(null)}
                        className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-[10px] cursor-pointer"
                      >
                        Batal
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setConfirmDeleteId(selectedZone.id)}
                      className="px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950/50 hover:bg-rose-100 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                      title="Hapus Elemen dari Denah"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Hapus</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Properties & Inspector Panel for Selected Zone (3 cols) */}
        <div className="lg:col-span-3 space-y-4">
          <div className="p-4 rounded-3xl bg-white dark:bg-[#1A161D] border border-[#E5DACD] dark:border-[#2C242E] shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#E5DACD] dark:border-[#2C242E] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#865D36] dark:text-[#D4AF37]">
                3. Properti Zona Terpilih
              </span>
              {selectedZone && (
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#B8860B] text-white">
                  {selectedZone.shortCode}
                </span>
              )}
            </div>

            {selectedZone ? (
              <div className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-[#4B3C35] dark:text-[#DDD0C5]">Nama Zona / Panggung</label>
                  <input
                    type="text"
                    value={selectedZone.name}
                    onChange={(e) => onUpdateZone({ ...selectedZone, name: e.target.value })}
                    className="w-full mt-1 p-2 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="font-bold text-[#4B3C35] dark:text-[#DDD0C5]">Kode Singkat</label>
                    <input
                      type="text"
                      value={selectedZone.shortCode}
                      onChange={(e) => onUpdateZone({ ...selectedZone, shortCode: e.target.value })}
                      className="w-full mt-1 p-2 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none font-mono"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-[#4B3C35] dark:text-[#DDD0C5]">Bentuk Bentang</label>
                    <select
                      value={selectedZone.coordinates.shape || 'rect'}
                      onChange={(e) => onUpdateZone({
                        ...selectedZone,
                        coordinates: { ...selectedZone.coordinates, shape: e.target.value as any }
                      })}
                      className="w-full mt-1 p-2 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                    >
                      <option value="rect">Kotak (Rect)</option>
                      <option value="circle">Bulat (Circle)</option>
                      <option value="pill">Lonjong (Pill)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="font-bold text-[#4B3C35] dark:text-[#DDD0C5]">Posisi X: {selectedZone.coordinates.x}%</label>
                    <input
                      type="range"
                      min="5"
                      max="95"
                      value={selectedZone.coordinates.x}
                      onChange={(e) => onUpdateZone({
                        ...selectedZone,
                        coordinates: { ...selectedZone.coordinates, x: Number(e.target.value) }
                      })}
                      className="w-full accent-[#B8860B]"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-[#4B3C35] dark:text-[#DDD0C5]">Posisi Y: {selectedZone.coordinates.y}%</label>
                    <input
                      type="range"
                      min="5"
                      max="95"
                      value={selectedZone.coordinates.y}
                      onChange={(e) => onUpdateZone({
                        ...selectedZone,
                        coordinates: { ...selectedZone.coordinates, y: Number(e.target.value) }
                      })}
                      className="w-full accent-[#B8860B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="font-bold text-[#4B3C35] dark:text-[#DDD0C5]">Lebar: {selectedZone.coordinates.width}%</label>
                    <input
                      type="range"
                      min="6"
                      max="40"
                      value={selectedZone.coordinates.width}
                      onChange={(e) => onUpdateZone({
                        ...selectedZone,
                        coordinates: { ...selectedZone.coordinates, width: Number(e.target.value) }
                      })}
                      className="w-full accent-[#B8860B]"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-[#4B3C35] dark:text-[#DDD0C5]">Tinggi: {selectedZone.coordinates.height}%</label>
                    <input
                      type="range"
                      min="6"
                      max="35"
                      value={selectedZone.coordinates.height}
                      onChange={(e) => onUpdateZone({
                        ...selectedZone,
                        coordinates: { ...selectedZone.coordinates, height: Number(e.target.value) }
                      })}
                      className="w-full accent-[#B8860B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-[#4B3C35] dark:text-[#DDD0C5]">Kategori Acara</label>
                  <select
                    value={selectedZone.category}
                    onChange={(e) => onUpdateZone({ ...selectedZone, category: e.target.value as any })}
                    className="w-full mt-1 p-2 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                  >
                    <option value="stage_vip">👑 Pelaminan & VIP</option>
                    <option value="catering">🍽️ Katering & Gubukan</option>
                    <option value="dining">🪑 Meja Tamu Reguler</option>
                    <option value="entertainment">🎶 Musik & Hiburan</option>
                    <option value="reception_ops">📋 Registrasi & WO</option>
                    <option value="outdoor_ceremony">🌿 Akad Outdoor</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="font-bold text-[#4B3C35] dark:text-[#DDD0C5]">PIC Nama</label>
                    <input
                      type="text"
                      value={selectedZone.pic.name}
                      onChange={(e) => onUpdateZone({
                        ...selectedZone,
                        pic: { ...selectedZone.pic, name: e.target.value }
                      })}
                      className="w-full mt-1 p-2 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-[#4B3C35] dark:text-[#DDD0C5]">HT Channel</label>
                    <input
                      type="text"
                      value={selectedZone.pic.htChannel}
                      onChange={(e) => onUpdateZone({
                        ...selectedZone,
                        pic: { ...selectedZone.pic, htChannel: e.target.value }
                      })}
                      className="w-full mt-1 p-2 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-[#4B3C35] dark:text-[#DDD0C5]">Status Operasional</label>
                  <div className="grid grid-cols-3 gap-1.5 mt-1">
                    {(['ready', 'in_progress', 'attention'] as ZoneStatus[]).map((st) => (
                      <button
                        key={st}
                        onClick={() => onUpdateZone({ ...selectedZone, status: st })}
                        className={`py-1.5 rounded-lg text-[11px] font-bold capitalize transition-all ${
                          selectedZone.status === st
                            ? st === 'ready'
                              ? 'bg-emerald-600 text-white'
                              : st === 'in_progress'
                              ? 'bg-amber-600 text-white'
                              : 'bg-rose-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                        }`}
                      >
                        {st === 'ready' ? 'Siap' : st === 'in_progress' ? 'Proses' : 'Atensi'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Additional Settings Panel */}
                <div className="pt-3 border-t border-[#E5DACD] dark:border-[#2C242E] space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="font-bold text-[#4B3C35] dark:text-[#DDD0C5]">Kapasitas</label>
                      <input
                        type="text"
                        value={selectedZone.capacity}
                        onChange={(e) => onUpdateZone({ ...selectedZone, capacity: e.target.value })}
                        className="w-full mt-1 p-2 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                        placeholder="10 Kursi"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-[#4B3C35] dark:text-[#DDD0C5]">Dimensi Fisik</label>
                      <input
                        type="text"
                        value={selectedZone.dimensions}
                        onChange={(e) => onUpdateZone({ ...selectedZone, dimensions: e.target.value })}
                        className="w-full mt-1 p-2 rounded-xl bg-[#FAF7F2] dark:bg-[#251E28] border border-[#DFCFC0] dark:border-[#382C3D] outline-none"
                        placeholder="3m x 3m"
                      />
                    </div>
                  </div>

                  {selectedZone.category === 'catering' && (
                    <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 space-y-2">
                      <label className="font-bold text-amber-800 dark:text-amber-300">Pengaturan F&B (Katering)</label>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-[10px] text-amber-700 dark:text-amber-400">Total Porsi Awal</label>
                          <input
                            type="number"
                            value={selectedZone.fnbDetails?.maxPortions || 0}
                            onChange={(e) => {
                              const maxP = Number(e.target.value);
                              onUpdateZone({
                                ...selectedZone,
                                fnbDetails: {
                                  ...(selectedZone.fnbDetails || { menu: [], currentPortions: maxP, refillStatus: 'aman', chefInCharge: selectedZone.pic.name }),
                                  maxPortions: maxP,
                                  currentPortions: Math.min(selectedZone.fnbDetails?.currentPortions || maxP, maxP),
                                }
                              });
                            }}
                            className="w-full mt-0.5 p-1.5 rounded-lg bg-white dark:bg-[#251E28] border border-amber-300 dark:border-amber-800 outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-amber-700 dark:text-amber-400">Sisa Porsi Saat Ini</label>
                          <input
                            type="number"
                            value={selectedZone.fnbDetails?.currentPortions || 0}
                            onChange={(e) => {
                              const curP = Number(e.target.value);
                              onUpdateZone({
                                ...selectedZone,
                                fnbDetails: {
                                  ...(selectedZone.fnbDetails || { menu: [], maxPortions: Math.max(curP, 100), refillStatus: 'aman', chefInCharge: selectedZone.pic.name }),
                                  currentPortions: curP,
                                }
                              });
                            }}
                            className="w-full mt-0.5 p-1.5 rounded-lg bg-white dark:bg-[#251E28] border border-amber-300 dark:border-amber-800 outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-[#E5DACD] dark:border-[#2C242E] flex justify-between items-center text-[11px] text-[#7B6E67] dark:text-[#A79890]">
                  <span>Perubahan posisi & data langsung tersimpan.</span>
                  <Check className="w-4 h-4 text-emerald-500" />
                </div>

                {/* Hapus Zona Dari Denah */}
                <div className="pt-3 border-t border-[#E5DACD] dark:border-[#2C242E] space-y-2">
                  {isConfirmingInspectorDelete ? (
                    <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-900/60 space-y-2 animate-fadeIn">
                      <div className="text-xs font-bold text-rose-700 dark:text-rose-300 flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                        <span>Hapus zona "{selectedZone.name}"?</span>
                      </div>
                      <p className="text-[11px] text-rose-600 dark:text-rose-400 leading-relaxed">
                        Zona ini akan langsung dihapus dari denah layout {activeFloor === 'grand_ballroom' ? 'Grand Ballroom' : 'Glasshouse Garden'}.
                      </p>
                      <div className="flex items-center gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => {
                            onDeleteZone(selectedZone.id);
                            setSelectedZoneId(null);
                            setConfirmDeleteId(null);
                            setIsConfirmingInspectorDelete(false);
                          }}
                          className="flex-1 py-2 px-3 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Ya, Hapus Sekarang</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsConfirmingInspectorDelete(false)}
                          className="py-2 px-3 rounded-xl text-xs font-semibold bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                        >
                          Batal
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setIsConfirmingInspectorDelete(true)}
                      className="w-full py-2.5 px-3 rounded-2xl text-xs font-bold bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800/60 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                    >
                      <Trash2 className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                      <span>Hapus Zona Ini dari Denah Layout</span>
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="py-12 text-center text-xs text-[#8A796F] dark:text-[#9A8980] space-y-2">
                <MapPin className="w-8 h-8 text-[#B8860B] mx-auto opacity-50" />
                <p className="font-semibold text-sm text-[#2D2422] dark:text-white">
                  Belum Ada Zona Terpilih
                </p>
                <p className="text-[11px] max-w-xs mx-auto">
                  Klik salah satu meja atau panggung pada kanvas untuk mengedit ukuran, posisi, nama, dan kru PIC.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
