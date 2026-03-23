import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useBikesStore } from '../../store/bikesStateStore';

export const HeroSection = () => {
  const navigate = useNavigate();
  const { filters, setFilters, searchTerm, setSearchTerm, applyFilters } = useBikesStore();
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters();
    navigate('/estoque');
  };

  const handleFilter = () => {
    applyFilters();
    navigate('/estoque');
  };

  const categories = ['Ciclomotor (50cc)', 'Scooter', 'Street', 'Trail', 'Elétrica'];
  const priceOptions = [
    { label: 'Até R$ 10.000', value: 10000 },
    { label: 'Até R$ 15.000', value: 15000 },
    { label: 'Até R$ 20.000', value: 20000 },
    { label: 'Até R$ 30.000', value: 30000 },
  ];

  return (
    <section id="" className="relative min-h-screen md:h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1920"
          className="w-full h-full object-cover opacity-50"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-motorcyclist-riding-on-a-highway-at-sunset-27572-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 relative z-10 w-full pb-40 md:pb-56 lg:pb-64">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col items-start"
          >
            {/* Black Title Box - DYNAMIC STYLE */}
            <div className="bg-black px-6 py-5 md:px-12 md:py-8 lg:px-16 lg:py-10 transform skew-x-[-15deg] shadow-2xl border border-white/5 mb-[-10px] relative z-10">
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.85] uppercase italic tracking-tighter transform skew-x-[15deg]">
                A PRONTA <br />
                <span className="text-white">ENTREGA</span>
              </h1>
            </div>
            
            {/* Aggressive Red Badge - DYNAMIC STYLE */}
            <div className="bg-[#ff0000] px-8 md:px-12 py-3 md:py-5 lg:px-16 lg:py-6 transform skew-x-[-15deg] shadow-[0_0_50px_rgba(255,0,0,0.4)] relative z-20">
              <span className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white italic uppercase tracking-tighter whitespace-nowrap block transform skew-x-[15deg]">
                ZERO DE ENTRADA
              </span>
            </div>

            <p className="text-base md:text-lg lg:text-xl text-gray-200 mt-8 mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-lg">
              Procurando sua moto 0km com as melhores condições da região? Na Shineray Hortolândia, você encontra toda a linha Shineray a pronta entrega e com facilidade real: ZERO de entrada para você sair acelerando hoje mesmo!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/estoque"
                className="bg-white text-black px-8 md:px-10 py-4 rounded-md font-black italic text-lg hover:bg-[#ff0000] hover:text-white transition-all flex items-center justify-center gap-3 shadow-2xl uppercase tracking-tighter group"
              >
                VER NOSSOS MODELOS
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Floating Search Bar / Footer - DYNAMIC STYLE */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="bg-[#ff0000] py-4 md:py-6 lg:py-8 shadow-[0_-20px_60px_rgba(0,0,0,0.4)]">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="max-w-6xl mx-auto flex flex-col gap-3 md:gap-4">
              <div className="flex justify-between items-center">
                <h4 className="text-base md:text-xl lg:text-2xl font-black text-white uppercase tracking-tighter italic">Encontre sua Shineray agora!</h4>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center gap-3">
                <div className="flex-grow w-full relative">
                  <form onSubmit={handleSearch} className="relative">
                    <input 
                      type="text" 
                      placeholder="Ex: Jet 50, SHI 175, Phoenix..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-white px-5 py-3 md:py-4 rounded-xl font-bold text-black focus:outline-none transition-all text-sm md:text-base shadow-inner"
                    />
                    <button type="submit" className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#ff0000] text-white p-2 md:p-3 rounded-lg hover:scale-105 transition-transform">
                      <Search size={18} className="md:w-5 md:h-5" />
                    </button>
                  </form>
                </div>

                <div className="flex gap-3 w-full lg:w-auto">
                  <button 
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="flex-1 lg:flex-none flex items-center justify-center gap-2 text-white font-black italic uppercase text-[10px] md:text-xs py-3 px-5 border-2 border-white/30 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <SlidersHorizontal size={16} />
                    {showAdvanced ? 'Ocultar Filtros' : 'Filtros Avançados'}
                  </button>

                  <button 
                    onClick={handleFilter}
                    className="hidden lg:flex bg-white text-[#ff0000] px-8 py-4 rounded-xl font-black italic text-base hover:bg-gray-100 transition-all items-center justify-center gap-2 uppercase tracking-tighter"
                  >
                    FILTRAR ESTOQUE <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Quick Filters (Advanced) */}
              <motion.div 
                initial={false}
                animate={{ height: showAdvanced ? 'auto' : 0, opacity: showAdvanced ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/80 uppercase tracking-[0.2em] ml-1">Modelo</label>
                    <select 
                      value={filters.category}
                      onChange={(e) => setFilters({ category: e.target.value })}
                      className="w-full bg-white px-6 py-4 rounded-xl font-bold text-black focus:outline-none cursor-pointer appearance-none text-sm shadow-lg"
                    >
                      <option value="">Todos os Modelos</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/80 uppercase tracking-[0.2em] ml-1">Ano</label>
                    <div className="flex gap-2">
                      <input 
                        type="number" 
                        placeholder="De" 
                        value={filters.yearMin || ''}
                        onChange={(e) => setFilters({ yearMin: parseInt(e.target.value) || 0 })}
                        className="w-full bg-white px-6 py-4 rounded-xl font-bold text-black focus:outline-none text-sm shadow-lg" 
                      />
                      <input 
                        type="number" 
                        placeholder="Até" 
                        value={filters.yearMax || ''}
                        onChange={(e) => setFilters({ yearMax: parseInt(e.target.value) || 0 })}
                        className="w-full bg-white px-6 py-4 rounded-xl font-bold text-black focus:outline-none text-sm shadow-lg" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/80 uppercase tracking-[0.2em] ml-1">Preço Máximo</label>
                    <select 
                      value={filters.priceMax}
                      onChange={(e) => setFilters({ priceMax: parseInt(e.target.value) })}
                      className="w-full bg-white px-6 py-4 rounded-xl font-bold text-black focus:outline-none cursor-pointer appearance-none text-sm shadow-lg"
                    >
                      <option value={100000}>Qualquer Preço</option>
                      {priceOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
