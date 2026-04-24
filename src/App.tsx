/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  MapPin, 
  Plane, 
  Train, 
  Briefcase, 
  CheckCircle, 
  Info, 
  Navigation, 
  Thermometer, 
  Coins, 
  ShoppingBag,
  ExternalLink,
  ChevronRight,
  Clock,
  Shirt,
  Search,
  ArrowRightLeft,
  Calendar,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Map, Marker, Overlay } from 'pigeon-maps';
import { ITINERARY_DATA, PACKING_LIST, STATIONS, DayInfo, Station } from './data';

const COLORS = {
  cream: '#faf6f0',
  ivory: '#f3ede3',
  warmGold: '#c9a84c',
  deepGold: '#9a7230',
  forest: '#2d4a3e',
  sage: '#5a7a6a',
  alpine: '#3a5f8a',
  snow: '#ffffff',
  ink: '#1a1a1a',
  muted: '#6b6b6b',
  redWarn: '#c0392b',
};

// Design Components - Magazine Style
const HeroSection = () => (
  <header id="home" className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-[#1a1a1a]">
    {/* Background Imagery Layer */}
    <div className="absolute inset-0 opacity-30">
      <div className="grid grid-cols-2 md:grid-cols-4 h-full gap-2 p-2">
        <div className="bg-gray-800 h-full overflow-hidden rounded-2xl">
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" alt="Swiss" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="hidden md:block bg-gray-800 h-full overflow-hidden rounded-2xl">
          <img src="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&q=80" alt="Swiss" className="w-full h-full object-cover" />
        </div>
        <div className="bg-gray-800 h-full overflow-hidden rounded-2xl">
          <img src="https://images.unsplash.com/photo-1491555103944-7c647fd857e6?auto=format&fit=crop&q=80" alt="Swiss" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="hidden md:block bg-gray-800 h-full overflow-hidden rounded-2xl">
           <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80" alt="Swiss" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#faf6f0]" />
    </div>

    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="z-10 bg-white/5 backdrop-blur-xl p-12 md:p-24 rounded-[5rem] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] max-w-4xl w-full"
    >
      <div className="mb-12 flex justify-center scale-110">
         <div className="relative">
            {/* Stable High-Res Wedding Image for Layout Demo */}
            <div className="relative w-64 h-80 md:w-80 md:h-[450px] bg-white p-4 rotate-[-4deg] shadow-2xl transition-all hover:rotate-0 hover:scale-105 duration-700 cursor-pointer">
               <div className="w-full h-full bg-gray-100 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Romantic Wedding" />
                  <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors" />
               </div>
            </div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#c9a84c] rounded-full flex items-center justify-center p-6 -rotate-[15deg] shadow-2xl border-4 border-white">
                <span className="text-white font-serif text-sm leading-tight italic font-bold">The<br/>Wedding<br/>Album</span>
            </div>
         </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-center gap-4 text-[#c9a84c] opacity-80 mb-2">
           <div className="h-[1px] w-12 bg-[#c9a84c]" />
           <span className="text-[10px] font-mono tracking-[0.6em] uppercase">Elegance and Adventure</span>
           <div className="h-[1px] w-12 bg-[#c9a84c]" />
        </div>
        <h1 className="text-6xl md:text-9xl font-serif text-white leading-[0.85] font-black tracking-tighter">
          Swiss<br /><span className="italic text-[#c9a84c] font-light">Serenity</span>
        </h1>
        <p className="text-white/60 max-w-lg mx-auto text-sm md:text-md leading-relaxed tracking-wide font-light">
          A curated expedition through the heart of the Alps. 18 days of architectural marvels and timeless romance.
        </p>
      </div>
      
      <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10">
        <div className="text-center">
          <span className="block text-3xl font-serif text-white font-thin italic">18</span>
          <span className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-mono mt-2 block">Days</span>
        </div>
        <div className="text-center border-x border-white/10">
          <span className="block text-3xl font-serif text-white font-thin italic">07</span>
          <span className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-mono mt-2 block">Cities</span>
        </div>
        <div className="text-center">
          <span className="block text-3xl font-serif text-[#c9a84c] font-thin">2026</span>
          <span className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-mono mt-2 block">Depart</span>
        </div>
      </div>
    </motion.div>
  </header>
);

const BentoSummary = () => (
   <section className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-7xl mx-auto px-4">
      <motion.div whileHover={{ y: -5 }} className="md:col-span-3 bg-white p-16 rounded-[4rem] border border-gray-100 shadow-xl flex flex-col justify-between h-[600px] relative overflow-hidden">
         <div className="absolute top-[-100px] right-[-100px] w-64 h-64 bg-[#f3ede3] rounded-full opacity-50" />
         <div className="relative z-10 space-y-10 text-left">
            <Heart className="text-[#c9a84c]" size={40} fill="#c9a84c" />
            <h3 className="text-5xl font-serif leading-[1.1] tracking-tight font-bold text-[#2d4a3e]">序章：<br /><span className="text-[#c9a84c] italic font-light">愛在阿爾卑斯</span></h3>
            <p className="text-gray-500 text-lg leading-relaxed max-w-sm font-light">這不只是一次旅行，而是我們新生活的壯麗開端。每一站都值得被細心收藏。</p>
         </div>
      </motion.div>
      <motion.div whileHover={{ y: -5 }} className="md:col-span-1 bg-[#2d4a3e] p-10 rounded-[4rem] text-white flex flex-col justify-end gap-6 h-[600px]">
         <Thermometer className="text-[#c9a84c]" size={32} />
         <h4 className="text-3xl font-serif">8°C — 22°C</h4>
         <p className="text-xs text-white/50 leading-relaxed italic">六月的清晨雲霧輕吻峰頂，層疊穿搭是溫柔的智慧。</p>
      </motion.div>
      <div className="md:col-span-2 space-y-6">
         {/* User's Wedding Photo 2 (Vending Machine) */}
         <div className="bg-[#f3ede3] h-[280px] rounded-[4rem] overflow-hidden relative group shadow-lg">
            <img src="/api/artifacts/ea79bb22-3837-4d76-8809-5a1e2612e471.png" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Lake" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
            <div className="absolute bottom-8 left-8 text-white font-serif text-2xl italic shadow-text">Urban Romance</div>
         </div>
         {/* User's Wedding Photo 3 (Dango) - Accented */}
         <div className="bg-white h-[280px] rounded-[4rem] border border-gray-100 p-2 flex group shadow-sm overflow-hidden">
            <div className="w-1/2 h-full overflow-hidden rounded-[3rem]">
               <img src="/api/artifacts/74e928f6-ec61-46dc-a76f-005697f26c6d.png" className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" alt="Dango" />
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center text-center p-4">
               <Train size={36} className="text-[#c9a84c] mb-4" />
               <span className="text-[10px] font-serif italic text-gray-400 uppercase tracking-widest">Swiss Selection</span>
               <span className="text-lg font-bold text-[#2d4a3e]">全境暢行系統</span>
            </div>
         </div>
      </div>
   </section>
);

const Navbar = () => {
  const [active, setActive] = useState('home');
  const items = [
    { id: 'home', label: '首頁', icon: Heart },
    { id: 'itinerary', label: '行程', icon: Calendar },
    { id: 'map', label: '地圖', icon: MapPin },
    { id: 'packing', label: '行李', icon: Briefcase },
    { id: 'tools', label: '工具', icon: Info },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/20 p-2 flex gap-1">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            setActive(item.id);
            document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
            active === item.id ? 'bg-[#2d4a3e] text-white p-3' : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <item.icon size={18} />
          {active === item.id && <span className="text-sm font-medium">{item.label}</span>}
        </button>
      ))}
    </nav>
  );
};

const SectionHeader = ({ title, subtitle, icon: Icon }: { title: string, subtitle: string, icon?: any }) => (
  <div className="flex flex-col items-center mb-24 px-4 text-center">
    <div className="mb-6">
       <span className="inline-block px-4 py-1 rounded-full border border-[#c9a84c]/30 text-[#c9a84c] text-[10px] font-mono uppercase tracking-[0.3em] mb-4">
          Journey Log
       </span>
    </div>
    <div className="relative inline-block">
       <h2 className="text-6xl font-serif text-[#2d4a3e] tracking-tighter font-bold mb-4">{title}</h2>
       <div className="absolute -right-10 -top-6 text-[#c9a84c]/20">
          {Icon && <Icon size={64} strokeWidth={1} />}
       </div>
    </div>
    <p className="text-[#9a7230] text-xs font-mono uppercase tracking-[0.4em]">{subtitle}</p>
  </div>
);

const TrainMapExplorer = () => {
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const AnyMarker = Marker as any;

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm relative h-[600px]">
      <Map 
        height={600} 
        defaultCenter={[46.8182, 8.2275]} 
        defaultZoom={8}
        mouseEvents={true}
        touchEvents={true}
      >
        {STATIONS.map((station) => (
          <AnyMarker 
            key={station.id} 
            width={40}
            anchor={station.coords} 
            onClick={() => setSelectedStation(station)}
            color={selectedStation?.id === station.id ? COLORS.warmGold : COLORS.alpine}
          />
        ))}
      </Map>

      {/* Floating Panel */}
      <AnimatePresence>
        {selectedStation && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute top-6 right-6 bottom-6 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-6 overflow-y-auto z-10"
          >
            <button 
              onClick={() => setSelectedStation(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <Info size={20} />
            </button>
            <h3 className="text-xl font-bold text-[#2d4a3e] mb-2">{selectedStation.name}</h3>
            <p className="text-xs text-gray-500 mb-4">{selectedStation.description}</p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[10px] font-bold text-[#c9a84c] uppercase tracking-widest border-b border-gray-100 pb-2">
                <Clock size={12} /> 推薦班次時刻表
              </div>
              {selectedStation.schedules.map((s, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#2d4a3e]">{s.time}</span>
                    <span className="text-[10px] text-gray-400">月台 {s.platform}</span>
                  </div>
                  <div className="flex items-center gap-2 text-right">
                    <span className="text-xs text-gray-600">往 {s.destination}</span>
                    <Train size={14} className="text-[#c9a84c]" />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
               <a 
                href={`https://www.google.com/maps/search/?api=1&query=${selectedStation.coords[0]},${selectedStation.coords[1]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#f3ede3] text-[#2d4a3e] py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#e0d8cc] transition-colors"
               >
                 <Navigation size={16} /> 開啟 Google 導航
               </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!selectedStation && (
        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100 pointer-events-none">
          <p className="text-xs font-bold text-[#3a5f8a] flex items-center gap-2">
            <MapPin size={14} /> 點擊地圖上的站點查看時刻表
          </p>
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [exchangeRate, setExchangeRate] = useState(40.3);
  const [chf, setChf] = useState(1);
  const [twd, setTwd] = useState(40.3);
  const [activeDay, setActiveDay] = useState(ITINERARY_DATA[0]);

  const handleChfChange = (val: string) => {
    const num = parseFloat(val) || 0;
    setChf(num);
    setTwd(Math.round(num * exchangeRate));
  };

  const handleTwdChange = (val: string) => {
    const num = parseFloat(val) || 0;
    setTwd(num);
    setChf(parseFloat((num / exchangeRate).toFixed(2)));
  };

  return (
    <div className="bg-[#faf6f0] min-h-screen font-sans selection:bg-[#c9a84c] selection:text-white pb-32 overflow-x-hidden">
      <Navbar />
      <HeroSection />

      <main className="container mx-auto px-4 py-32 space-y-48">
        
        {/* Itinerary Section */}
        <section id="itinerary">
          <SectionHeader title="夢幻行程" subtitle="Eighteen Days Chronicle" icon={Calendar} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Tabs */}
            <div className="lg:col-span-3 overflow-x-auto lg:overflow-y-auto lg:max-h-[600px] flex lg:flex-col gap-2 no-scrollbar">
              {ITINERARY_DATA.map((day) => (
                <button
                  key={day.day}
                  onClick={() => setActiveDay(day)}
                  className={`flex-shrink-0 px-6 py-4 rounded-xl text-left border transition-all ${
                    activeDay.day === day.day 
                      ? 'bg-[#2d4a3e] border-[#2d4a3e] text-white shadow-md' 
                      : 'bg-white border-gray-200 text-gray-600 hover:border-[#c9a84c]'
                  }`}
                >
                  <div className="text-xs opacity-60 font-mono mb-1">DAY {day.day < 10 ? `0${day.day}` : day.day}</div>
                  <div className="font-bold whitespace-nowrap">{day.title.split(' ')[0]}</div>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="lg:col-span-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDay.day}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8 pb-8 border-bottom border-gray-100">
                    <div>
                      <h3 className="text-2xl font-bold text-[#2d4a3e] mb-2">{activeDay.title}</h3>
                      <p className="text-gray-500 font-mono flex items-center gap-2">
                        <Clock size={14} /> {activeDay.date}
                      </p>
                    </div>
                    {activeDay.hotel && (
                      <div className="bg-[#f3ede3] p-4 rounded-2xl flex flex-col items-end text-right border border-[#e0d8cc]">
                        <div className="flex items-center gap-2 text-[#2d4a3e] font-bold mb-1">
                          <Heart size={16} fill="#c9a84c" stroke="none" />
                          飯店：{activeDay.hotel.name}
                        </div>
                        <p className="text-xs text-gray-500 mb-2">{activeDay.hotel.details}</p>
                        {activeDay.hotel.mapUrl && (
                          <a 
                            href={activeDay.hotel.mapUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-[10px] text-[#3a5f8a] border border-[#3a5f8a]/30 px-2 py-1 rounded-full hover:bg-[#3a5f8a] hover:text-white transition-colors"
                          >
                            <Navigation size={10} /> 導航至飯店
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    {activeDay.schedule.map((item, i) => (
                      <div key={i} className="flex gap-4 group">
                        <div className="flex flex-col items-center">
                          <div className="w-2 h-2 rounded-full bg-[#c9a84c] mb-2" />
                          <div className="w-[1px] h-full bg-gray-200 group-last:hidden" />
                        </div>
                        <div className="pb-8 flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-mono text-[#c9a84c] text-sm">{item.time}</span>
                            <h4 className="font-bold text-[#2d4a3e]">{item.title}</h4>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map(tag => (
                              <span key={tag} className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md">{tag}</span>
                            ))}
                            {item.mapUrl && (
                              <a href={item.mapUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] bg-[#3a5f8a]/10 text-[#3a5f8a] px-2 py-0.5 rounded-md flex items-center gap-1 hover:bg-[#3a5f8a] hover:text-white transition-colors">
                                <MapPin size={8} /> 查看地圖
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 p-8 bg-[#fdf5e0] rounded-[3rem] border-l-[12px] border-[#c9a84c] shadow-sm">
                    <div className="flex items-center gap-3 text-[#9a7230] font-bold mb-5 text-xl font-serif">
                      <Sparkles size={24} /> Travel Journal Tips
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 text-sm text-[#9a7230]/80 leading-relaxed italic">
                      <li className="flex gap-4"><span>—</span> 蘇黎世的黎明總是帶著湖水的微鹹。</li>
                      <li className="flex gap-4"><span>—</span> 記得在 SBB App 中同步我們的 Swiss Pass。</li>
                      <li className="flex gap-4"><span>—</span> 每一座月台都是一張待開啟的明信片。</li>
                      <li className="flex gap-4"><span>—</span> 轉接頭是連結異國風景的橋樑。</li>
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        <section id="map" className="max-w-7xl mx-auto px-4">
           <BentoSummary />
           <div className="mt-24">
              <SectionHeader title="鐵道導航" subtitle="Interactive Rail Map" icon={MapPin} />
              <TrainMapExplorer />
              <div className="mt-12 p-10 bg-[#e8f0f8] rounded-[3rem] border-l-[12px] border-[#3a5f8a] shadow-sm">
                <div className="flex items-center gap-3 text-[#3a5f8a] font-bold mb-4 text-xl font-serif">
                  <Info size={24} /> Rail Guide
                </div>
                <p className="text-sm text-[#3a5f8a]/70 leading-relaxed font-light italic">
                  點擊地圖上的站點，開啟我們為這座城市編寫的隱藏時刻表。班次資訊僅供參考，請隨時以 SBB App 為準。
                </p>
              </div>
           </div>
        </section>

        {/* Packing List Section */}
        <section id="packing">
          <SectionHeader title="行李整備" subtitle="Packing Guides" icon={Briefcase} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Checked Bag */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 bg-[#2d4a3e] text-white rounded-bl-3xl font-mono text-sm">
                MAX {PACKING_LIST.checked.weightLimit}
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#e8f5ee] text-[#2d4a3e] rounded-2xl">
                  <Plane size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2d4a3e]">托運行李</h3>
                  <p className="text-xs text-gray-500">放箱子裡的大型用品</p>
                </div>
              </div>
              
              <div className="space-y-8">
                {PACKING_LIST.checked.items.map((cat, i) => (
                  <div key={i}>
                    <h4 className="text-xs uppercase tracking-widest text-[#c9a84c] font-bold mb-4 flex items-center gap-2">
                       <ChevronRight size={12} /> {cat.category}
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {cat.items.map(item => (
                        <div key={item} className="flex items-center gap-2 group cursor-pointer">
                          <CheckCircle size={16} className="text-gray-200 group-hover:text-[#c9a84c] transition-colors" />
                          <span className="text-sm text-gray-600 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carry on */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 bg-[#c9a84c] text-white rounded-bl-3xl font-mono text-sm">
                MAX {PACKING_LIST.carryOn.weightLimit}
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#fdf5e0] text-[#c9a84c] rounded-2xl">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2d4a3e]">手提/隨身</h3>
                  <p className="text-xs text-gray-500">證件與貴重物品</p>
                </div>
              </div>
              
              <div className="space-y-8">
                {PACKING_LIST.carryOn.items.map((cat, i) => (
                  <div key={i}>
                    <h4 className="text-xs uppercase tracking-widest text-[#c9a84c] font-bold mb-4 flex items-center gap-2">
                       <ChevronRight size={12} /> {cat.category}
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {cat.items.map(item => (
                        <div key={item} className="flex items-center gap-2 group cursor-pointer">
                          <CheckCircle size={16} className="text-gray-200 group-hover:text-[#c9a84c] transition-colors" />
                          <span className="text-sm text-gray-600 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section id="tools" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Converter */}
          <div className="lg:col-span-1 bg-[#2d4a3e] text-white rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <SectionHeader title="匯率換算" subtitle="CHF vs TWD" icon={Coins} />
              <div className="space-y-4 mb-8">
                <div className="relative">
                  <label className="text-[10px] uppercase text-white/50 block mb-1">CHF (瑞士法郎)</label>
                  <input 
                    type="number" 
                    value={chf}
                    onChange={(e) => handleChfChange(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-xl font-mono outline-none focus:border-[#c9a84c] transition-all"
                  />
                </div>
                <div className="flex justify-center py-2 text-[#c9a84c]">
                  <ArrowRightLeft size={20} />
                </div>
                <div className="relative">
                  <label className="text-[10px] uppercase text-white/50 block mb-1">TWD (台幣)</label>
                  <input 
                    type="number" 
                    value={twd}
                    onChange={(e) => handleTwdChange(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-xl font-mono outline-none focus:border-[#c9a84c] transition-all"
                  />
                </div>
              </div>
              <p className="text-[10px] text-white/30 text-center uppercase tracking-widest">
                今日參考匯率：1 CHF ≈ 40.3 TWD
              </p>
            </div>
          </div>

          {/* SBB Info */}
          <div className="lg:col-span-1 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col">
            <h3 className="text-xl font-bold text-[#2d4a3e] mb-2 flex items-center gap-2">
              <Train className="text-red-600" /> SBB 國鐵服務
            </h3>
            <p className="text-xs text-gray-500 mb-6 uppercase tracking-widest">Train Schedule & App</p>
            
            <div className="flex-1 space-y-4">
              <div className="bg-gray-50 p-4 rounded-2xl">
                <h4 className="font-bold text-sm mb-1 text-[#2d4a3e]">必備 App：SBB Mobile</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  在瑞士旅行必備神器，即時查詢月台、誤點狀況與轉車資訊。可以整合 Swiss Pass 到 App 中。
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl">
                <h4 className="font-bold text-sm mb-1 text-[#2d4a3e]">黃金、冰河列車</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  雖然 Swiss Pass 免費搭乘，但這類熱門景觀列車「必須事先訂位」，請確認訂位證明。
                </p>
              </div>
            </div>
            
            <a 
              href="https://www.sbb.ch/en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 w-full bg-[#ff0000] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#d00000] transition-colors"
            >
              前網 SBB 官網 <ExternalLink size={16} />
            </a>
          </div>

          {/* More Tips */}
          <div className="lg:col-span-1 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col">
            <h3 className="text-xl font-bold text-[#2d4a3e] mb-2 flex items-center gap-2">
              <ShoppingBag className="text-orange-500" /> 超市省錢指南
            </h3>
            <p className="text-xs text-gray-500 mb-6 uppercase tracking-widest">Coop & Migros</p>
            
            <div className="flex-1 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">M</div>
                <div>
                  <h4 className="font-bold text-sm text-[#2d4a3e]">Migros</h4>
                  <p className="text-[11px] text-gray-500">自有品牌包裝橘色，價格最親民。不賣菸酒。</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">C</div>
                <div>
                  <h4 className="font-bold text-sm text-[#2d4a3e]">Coop</h4>
                  <p className="text-[11px] text-gray-500">分布最廣，熟食區選擇豐富，自有品牌黃色包裝。</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">!</div>
                <div>
                  <h4 className="font-bold text-sm text-[#2d4a3e]">注意營業時間</h4>
                  <p className="text-[11px] text-gray-500">瑞士超市通常 20-21 點關門，週日多數不營業（除火車站內）。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-2xl border border-gray-200">
               <div className="text-[10px] font-bold text-gray-400 uppercase mb-2">蜜月省錢小帖步</div>
               <p className="text-xs text-gray-600">
                 每天早上在飯店多帶一點麵包，午餐去超市買個沙拉，晚餐再回飯店煮泡麵。這樣兩個人一天可以省下至少 $2000 台幣！
               </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2d4a3e] text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <Heart className="mx-auto mb-6 text-[#c9a84c] fill-[#c9a84c]" size={40} />
          <h2 className="text-3xl font-serif italic mb-4">Happy Honeymoon!</h2>
          <p className="text-white/50 text-sm max-w-md mx-auto leading-relaxed">
            這份行程是我們愛的啟程，願在瑞士的每一天都充滿驚喜與甜蜜。
            <br />
            2026.06.14 — 07.01
          </p>
          <div className="mt-12 pt-12 border-t border-white/10 text-[10px] text-white/20 uppercase tracking-[0.3em]">
            &copy; 2026 Crafted with love by Our Travel Butler
          </div>
        </div>
      </footer>
    </div>
  );
}
