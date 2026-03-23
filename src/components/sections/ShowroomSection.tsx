import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import { MotoCardV3 } from '../cards/MotoCardV3';
import { MOCK_MOTOS } from '../../constants';
import { motion, AnimatePresence } from 'motion/react';

export const ShowroomSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const motos = MOCK_MOTOS.slice(0, 5);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % motos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + motos.length) % motos.length);
  };

  return (
    <section className="flex flex-col gap-12 py-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#ff0000]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#ff0000]/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <header className="w-full flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8 relative z-10">
        <div className="text-left">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white leading-none">
            ESTOQUE <span className="text-[#ff0000]">DISPONÍVEL</span>
          </h2>
          <p className="text-gray-500 text-xs mt-4 uppercase tracking-[0.2em] font-bold">
            VEÍCULOS REVISADOS E PRONTOS PARA VOCÊ DIRIGIR HOJE MESMO.
          </p>
        </div>
        
        <Link 
          to="/estoque"
          className="hidden md:flex items-center gap-3 bg-white text-black px-8 py-4 text-[10px] font-black uppercase italic tracking-widest hover:bg-[#ff0000] hover:text-white transition-all group"
        >
          Ver Todo NOSSO ESTOQUE
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </header>
      
      {/* Desktop Layout (1 + 4 Grid) */}
      <div className="hidden lg:grid grid-cols-12 gap-6 xl:gap-8">
        {/* Large Featured Card */}
        <div className="col-span-6 xl:col-span-7 relative group">
          <div className="h-full relative">
            <MotoCardV3 
              id={motos[0].id}
              image={motos[0].image}
              name={motos[0].name}
              price={motos[0].price}
              year={motos[0].year}
              mileage={motos[0].mileage}
              fuel={motos[0].fuel}
              transmission={motos[0].transmission}
              brand={motos[0].brand}
              model={motos[0].model}
              version={motos[0].version}
              color={motos[0].color}
              category={motos[0].category}
              placaFinal={motos[0].id.slice(-1)} 
            />
            
            {/* Extra Badge for Featured */}
            <div className="absolute top-8 left-0 z-30">
              <div className="bg-[#ff0000] py-2 px-6 shadow-xl">
                <span className="text-white text-[10px] font-black uppercase tracking-[0.3em] italic">
                  Destaque da Semana
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Small Cards Grid */}
        <div className="col-span-6 xl:col-span-5 grid grid-cols-2 gap-6 xl:gap-8">
          {motos.slice(1, 5).map((moto) => (
            <div key={moto.id} className="transition-transform hover:scale-[1.02] duration-500">
              <MotoCardV3 
                id={moto.id}
                image={moto.image}
                name={moto.name}
                price={moto.price}
                year={moto.year}
                mileage={moto.mileage}
                fuel={moto.fuel}
                transmission={moto.transmission}
                brand={moto.brand}
                model={moto.model}
                version={moto.version}
                color={moto.color}
                category={moto.category}
                placaFinal={moto.id.slice(-1)} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tablet Layout (2x2 + 1) */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
        {motos.map((moto) => (
          <MotoCardV3 
            key={moto.id}
            id={moto.id}
            image={moto.image}
            name={moto.name}
            price={moto.price}
            year={moto.year}
            mileage={moto.mileage}
            fuel={moto.fuel}
            transmission={moto.transmission}
            brand={moto.brand}
            model={moto.model}
            version={moto.version}
            color={moto.color}
            category={moto.category}
            placaFinal={moto.id.slice(-1)} 
          />
        ))}
      </div>

      {/* Mobile Layout (Carousel) */}
      <div className="md:hidden relative px-4">
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full h-full relative"
            >
              <MotoCardV3 
                id={motos[currentIndex].id}
                image={motos[currentIndex].image}
                name={motos[currentIndex].name}
                price={motos[currentIndex].price}
                year={motos[currentIndex].year}
                mileage={motos[currentIndex].mileage}
                fuel={motos[currentIndex].fuel}
                transmission={motos[currentIndex].transmission}
                brand={motos[currentIndex].brand}
                model={motos[currentIndex].model}
                version={motos[currentIndex].version}
                color={motos[currentIndex].color}
                category={motos[currentIndex].category}
                placaFinal={motos[currentIndex].id.slice(-1)} 
              />
              
              {/* Mobile Badge */}
              <div className="absolute top-6 left-0 z-30">
                <div className="bg-[#ff0000] text-white py-1 px-4 transform -skew-x-12">
                  <span className="text-[8px] font-black uppercase tracking-widest block transform skew-x-12">
                    Destaque
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-between items-center mt-8">
          <div className="flex gap-2">
            {motos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-[#ff0000]' : 'w-4 bg-white/20'
                }`}
              />
            ))}
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 border border-white/10 flex items-center justify-center text-white hover:bg-[#ff0000] hover:border-[#ff0000] transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 border border-white/10 flex items-center justify-center text-white hover:bg-[#ff0000] hover:border-[#ff0000] transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="md:hidden mt-8">
        <Link 
          to="/estoque"
          className="flex items-center justify-center gap-3 bg-[#ff0000] text-white w-full py-5 text-[10px] font-black uppercase italic tracking-widest shadow-lg shadow-red-900/20"
        >
          <Zap size={14} />
          Ver Todo NOSSO ESTOQUE
        </Link>
      </div>
    </section>
  );
};
