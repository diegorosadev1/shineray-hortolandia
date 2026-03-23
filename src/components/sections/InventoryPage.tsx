import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ChevronDown, Grid, List, MapPin, Fuel, Gauge, Settings, ArrowRight, Circle, Sliders, Calendar, Palette, Tag, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { Motorcycle } from '../../types';
import { MOCK_MOTOS } from '../../constants';
import { motion, AnimatePresence } from 'motion/react';

export const InventoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [showAdvanced, setShowAdvanced] = useState(false);
  const [filters, setFilters] = useState({
    category: [],
    yearMin: 'De',
    yearMax: 'Até',
    priceMax: 50000,
    color: '',
    transmission: '',
    plateEnd: '',
    fuel: '',
    mileageMax: 150000
  });

  const filteredMotos = MOCK_MOTOS.filter(moto => {
    const matchesSearch = moto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         moto.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filters.category.length === 0 || filters.category.includes(moto.category);
    const matchesPrice = moto.price <= filters.priceMax;
    const matchesColor = !filters.color || moto.color === filters.color;
    const matchesTransmission = !filters.transmission || moto.transmission === filters.transmission;
    const matchesPlateEnd = !filters.plateEnd || moto.id.slice(-1) === filters.plateEnd;
    const matchesFuel = !filters.fuel || moto.fuel === filters.fuel;
    const mileageNum = parseInt(moto.mileage.replace('.', '')) || 0;
    const matchesMileage = mileageNum <= filters.mileageMax;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesColor && matchesTransmission && matchesPlateEnd && matchesFuel && matchesMileage;
  });

  return (
    <div className="min-h-screen bg-[#f4f4f4] text-[#1a1a1a] font-sans">
      {/* Hero Header - Avance Style: Concise & Neutral */}
      <section className="relative h-[40vh] md:h-[45vh] flex items-center justify-center overflow-hidden bg-white border-b border-gray-100">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1920"
            alt="Showroom"
            className="w-full h-full object-cover opacity-10 blur-sm"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-[#666] italic uppercase tracking-tighter mb-4">
              NOSSO ESTOQUE
            </h1>
            <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed font-medium">
              Sua Shineray 0km está aqui e pronta para levar! Confira nossa linha completa com as melhores condições de financiamento e a entrega mais rápida de Hortolândia e região
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Bar - Floating Style */}
      <div className="relative z-20 -mt-10 max-w-3xl mx-auto px-6">
        <div className="bg-white p-2 rounded-xl shadow-xl flex items-center border border-gray-100">
          <input 
            type="text" 
            placeholder="Buscar no NOSSO ESTOQUE" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow bg-transparent px-8 py-4 font-bold text-gray-700 focus:outline-none text-sm md:text-base"
          />
          <button className="bg-[#ff0000] text-white p-4 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-red-500/20">
            <Search size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mt-6 lg:hidden">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 text-[#666] font-bold uppercase italic text-sm hover:text-[#ff0000] transition-colors"
          >
            <SlidersHorizontal size={18} className="text-[#ff0000]" />
            Mais Filtros
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto px-4 py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Advanced Filters Sidebar */}
          <div className={`lg:col-span-3 space-y-4 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            {/* Model Filter */}
            <div className="bg-white p-5 rounded-none shadow-sm border border-gray-100">
              <h3 className="text-black font-black italic uppercase text-[10px] tracking-[0.2em] mb-4 flex items-center gap-2">
                <Settings size={14} className="text-[#ff0000]" />
                Modelo
              </h3>
              <select className="w-full bg-gray-50 border border-gray-100 rounded-none p-3 text-[10px] font-bold uppercase italic outline-none focus:border-[#ff0000]">
                <option>Todos os Modelos</option>
                <option>SHI 175</option>
                <option>JEF 150S</option>
                <option>Worker 125</option>
                <option>Phoenix 50</option>
              </select>
            </div>

            {/* Category Filter */}
            <div className="bg-white p-5 rounded-none shadow-sm border border-gray-100">
              <h3 className="text-black font-black italic uppercase text-[10px] tracking-[0.2em] mb-4 flex items-center gap-2">
                <div className="w-2 h-4 bg-[#ff0000] transform -skew-x-12"></div>
                Categorias
              </h3>
              <div className="space-y-2">
                {['Street', 'Trail', 'Naked', 'Custom', 'CUB'].map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={filters.category.includes(cat)}
                      onChange={(e) => {
                        const newCats = e.target.checked 
                          ? [...filters.category, cat]
                          : filters.category.filter(c => c !== cat);
                        setFilters({ ...filters, category: newCats });
                      }}
                      className="w-4 h-4 rounded-none border-gray-200 text-[#ff0000] focus:ring-[#ff0000]" 
                    />
                    <span className="text-gray-500 group-hover:text-[#ff0000] transition-colors text-[10px] font-bold uppercase italic">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Year Filter */}
            <div className="bg-white p-5 rounded-none shadow-sm border border-gray-100">
              <h3 className="text-black font-black italic uppercase text-[10px] tracking-[0.2em] mb-4 flex items-center gap-2">
                <Calendar size={14} className="text-[#ff0000]" />
                Ano
              </h3>
              <div className="flex gap-2">
                <select 
                  value={filters.yearMin}
                  onChange={(e) => setFilters({ ...filters, yearMin: e.target.value })}
                  className="flex-1 bg-gray-50 border border-gray-100 rounded-none p-3 text-[10px] font-bold uppercase italic outline-none focus:border-[#ff0000]"
                >
                  <option>De</option>
                  {[2024, 2023, 2022, 2021, 2020].map(y => <option key={y}>{y}</option>)}
                </select>
                <select 
                  value={filters.yearMax}
                  onChange={(e) => setFilters({ ...filters, yearMax: e.target.value })}
                  className="flex-1 bg-gray-50 border border-gray-100 rounded-none p-3 text-[10px] font-bold uppercase italic outline-none focus:border-[#ff0000]"
                >
                  <option>Até</option>
                  {[2024, 2023, 2022, 2021, 2020].map(y => <option key={y}>{y}</option>)}
                </select>
              </div>
            </div>

            {/* Price Filter */}
            <div className="bg-white p-5 rounded-none shadow-sm border border-gray-100">
              <h3 className="text-black font-black italic uppercase text-[10px] tracking-[0.2em] mb-4 flex items-center gap-2">
                <div className="w-2 h-4 bg-[#ff0000] transform -skew-x-12"></div>
                Preço Máximo
              </h3>
              <input 
                type="range" 
                className="w-full accent-[#ff0000] mb-2" 
                min="5000" 
                max="50000" 
                step="1000" 
                value={filters.priceMax}
                onChange={(e) => setFilters({ ...filters, priceMax: parseInt(e.target.value) })}
              />
              <div className="flex justify-between text-[9px] font-black uppercase text-gray-400">
                <span>R$ 5.000</span>
                <span className="text-[#ff0000]">R$ {filters.priceMax.toLocaleString('pt-BR')}</span>
              </div>
            </div>

            {/* Mileage Filter */}
            <div className="bg-white p-5 rounded-none shadow-sm border border-gray-100">
              <h3 className="text-black font-black italic uppercase text-[10px] tracking-[0.2em] mb-4 flex items-center gap-2">
                <Gauge size={14} className="text-[#ff0000]" />
                Quilometragem Máxima
              </h3>
              <input 
                type="range" 
                className="w-full accent-[#ff0000] mb-2" 
                min="0" 
                max="150000" 
                step="5000" 
                value={filters.mileageMax}
                onChange={(e) => setFilters({ ...filters, mileageMax: parseInt(e.target.value) })}
              />
              <div className="flex justify-between text-[9px] font-black uppercase text-gray-400">
                <span>0 KM</span>
                <span className="text-[#ff0000]">{filters.mileageMax.toLocaleString('pt-BR')} KM</span>
              </div>
            </div>

            {/* Fuel Filter */}
            <div className="bg-white p-5 rounded-none shadow-sm border border-gray-100">
              <h3 className="text-black font-black italic uppercase text-[10px] tracking-[0.2em] mb-4 flex items-center gap-2">
                <Fuel size={14} className="text-[#ff0000]" />
                Combustível
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Gasolina', 'Flex', 'Diesel', 'Elétrico'].map((fuel) => (
                  <button 
                    key={fuel} 
                    onClick={() => setFilters({ ...filters, fuel: filters.fuel === fuel ? '' : fuel })}
                    className={`px-3 py-2 rounded-none border text-[9px] font-bold uppercase italic transition-all ${filters.fuel === fuel ? 'bg-[#ff0000] text-white border-[#ff0000]' : 'border-gray-100 text-gray-500 hover:border-[#ff0000] hover:text-[#ff0000]'}`}
                  >
                    {fuel}
                  </button>
                ))}
              </div>
            </div>

            {/* Plate End Filter */}
            <div className="bg-white p-5 rounded-none shadow-sm border border-gray-100">
              <h3 className="text-black font-black italic uppercase text-[10px] tracking-[0.2em] mb-4 flex items-center gap-2">
                <div className="w-2 h-4 bg-[#ff0000] transform -skew-x-12"></div>
                Final da Placa
              </h3>
              <div className="grid grid-cols-5 gap-1">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <button 
                    key={num} 
                    onClick={() => setFilters({ ...filters, plateEnd: filters.plateEnd === num.toString() ? '' : num.toString() })}
                    className={`p-2 rounded-none border text-[9px] font-bold uppercase italic transition-all ${filters.plateEnd === num.toString() ? 'bg-[#ff0000] text-white border-[#ff0000]' : 'border-gray-100 text-gray-500 hover:border-[#ff0000] hover:text-[#ff0000]'}`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div className="bg-white p-5 rounded-none shadow-sm border border-gray-100">
              <h3 className="text-black font-black italic uppercase text-[10px] tracking-[0.2em] mb-4 flex items-center gap-2">
                <Palette size={14} className="text-[#ff0000]" />
                Cor
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Preto', 'Branco', 'Vermelho', 'Azul', 'Cinza'].map((color) => (
                  <button 
                    key={color} 
                    onClick={() => setFilters({ ...filters, color: filters.color === color ? '' : color })}
                    className={`px-3 py-2 rounded-none border text-[9px] font-bold uppercase italic transition-all ${filters.color === color ? 'bg-[#ff0000] text-white border-[#ff0000]' : 'border-gray-100 text-gray-500 hover:border-[#ff0000] hover:text-[#ff0000]'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Transmission Filter */}
            <div className="bg-white p-5 rounded-none shadow-sm border border-gray-100">
              <h3 className="text-black font-black italic uppercase text-[10px] tracking-[0.2em] mb-4 flex items-center gap-2">
                <Sliders size={14} className="text-[#ff0000]" />
                Câmbio
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Manual', 'Automático', 'Semiauto'].map((opt) => (
                  <button 
                    key={opt} 
                    onClick={() => setFilters({ ...filters, transmission: filters.transmission === opt ? '' : opt })}
                    className={`px-3 py-2 rounded-none border text-[9px] font-bold uppercase italic transition-all ${filters.transmission === opt ? 'bg-[#ff0000] text-white border-[#ff0000]' : 'border-gray-100 text-gray-500 hover:border-[#ff0000] hover:text-[#ff0000]'}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setFilters({
                category: [],
                yearMin: 'De',
                yearMax: 'Até',
                priceMax: 50000,
                color: '',
                transmission: '',
                plateEnd: '',
                fuel: '',
                mileageMax: 150000
              })}
              className="w-full bg-[#ff0000] text-white py-4 rounded-none font-black italic uppercase tracking-widest text-[10px] hover:bg-black transition-all shadow-lg shadow-red-500/20"
            >
              Limpar Filtros
            </button>
          </div>

          {/* Inventory List */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredMotos.length > 0 ? (
                  filteredMotos.map((moto, index) => (
                    <motion.div 
                      key={moto.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="group bg-white rounded-none overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col relative"
                    >
                    {/* Price Tag - Skewed Dynamic Style */}
                    <div className="absolute top-6 right-0 z-20">
                      <div className="bg-[#ff0000] text-white py-2 px-8 transform -skew-x-12 shadow-lg">
                        <div className="transform skew-x-12 flex items-baseline gap-1">
                          <span className="text-[10px] font-black uppercase">R$</span>
                          <span className="text-2xl font-black italic leading-none tracking-tighter">
                            {moto.price.toLocaleString('pt-BR', { minimumFractionDigits: 3 })}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative w-full aspect-square overflow-hidden">
                      <img 
                        src={moto.image} 
                        alt={moto.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Placa Final Badge */}
                      <div className="absolute bottom-0 left-0 bg-gray-500/80 backdrop-blur-sm px-4 py-2">
                        <span className="text-white text-[10px] font-black uppercase tracking-widest">Placa Final {moto.id.slice(-1)}</span>
                      </div>
                    </div>

                    {/* Info Section */}
                    <div className="p-6 flex flex-col">
                      <h3 className="text-gray-900 text-xl font-black italic uppercase tracking-tighter leading-tight group-hover:text-[#ff0000] transition-colors mb-2">
                        {moto.name}
                      </h3>

                      <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">
                        {moto.year.split('/')[0]} - {moto.year.split('/')[1] || moto.year.split('/')[0]}
                      </div>

                      {/* Specs Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-3">
                          <Gauge size={18} className="text-[#ff0000]" />
                          <div className="flex flex-col">
                            <span className="text-[8px] text-gray-400 font-black uppercase tracking-widest leading-none mb-1">Quilometragem</span>
                            <span className="text-gray-900 text-[11px] font-bold uppercase">{moto.mileage}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Sliders size={18} className="text-[#ff0000]" />
                          <div className="flex flex-col">
                            <span className="text-[8px] text-gray-400 font-black uppercase tracking-widest leading-none mb-1">Câmbio</span>
                            <span className="text-gray-900 text-[11px] font-bold uppercase">{moto.transmission}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Fuel size={18} className="text-[#ff0000]" />
                          <div className="flex flex-col">
                            <span className="text-[8px] text-gray-400 font-black uppercase tracking-widest leading-none mb-1">Combustível</span>
                            <span className="text-gray-900 text-[11px] font-bold uppercase">{moto.fuel}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Circle size={18} className="text-[#ff0000]" />
                          <div className="flex flex-col">
                            <span className="text-[8px] text-gray-400 font-black uppercase tracking-widest leading-none mb-1">Tipo de Direção</span>
                            <span className="text-gray-900 text-[11px] font-bold uppercase">Mecânica</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                        <Link 
                          to={`/moto/${moto.id}`}
                          className="text-[#ff0000] font-black italic uppercase text-[10px] tracking-widest hover:translate-x-1 transition-transform flex items-center gap-2"
                        >
                          Ver Detalhes <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="bg-white p-20 rounded-[32px] text-center border border-dashed border-gray-200">
                  <p className="text-gray-400 font-black italic uppercase tracking-widest">Nenhum veículo encontrado com esses filtros.</p>
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setFilters({
                        category: [],
                        yearMin: 'De',
                        yearMax: 'Até',
                        priceMax: 50000,
                        color: '',
                        transmission: '',
                        plateEnd: '',
                        fuel: '',
                        mileageMax: 150000
                      });
                    }}
                    className="mt-6 text-[#ff0000] font-black italic uppercase text-xs hover:underline"
                  >
                    Limpar todos os filtros
                  </button>
                </div>
              )}
              </AnimatePresence>
            </div>

            {/* Pagination */}
            <div className="mt-16 flex flex-col items-center gap-6">
              <div className="flex gap-2">
                {[1, 2, 3, '...'].map((page, i) => (
                  <button key={i} className={`w-12 h-12 rounded-none flex items-center justify-center font-black italic text-sm transition-all ${page === 1 ? 'bg-[#ff0000] text-white' : 'bg-white text-gray-400 hover:text-black border border-gray-100'}`}>
                    {page}
                  </button>
                ))}
              </div>
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Página 1 de 5</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
