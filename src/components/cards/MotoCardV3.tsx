import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { MotoProps } from '../../types';

export const MotoCardV3 = ({ id, image, name, price, year, placaFinal }: MotoProps) => {
  return (
    <div className="w-full bg-black overflow-hidden group relative flex flex-col h-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-0 right-0 w-full h-12 bg-[#ff0000] transform skew-y-[-4deg] translate-y-6" />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
          <Link 
            to={`/moto/${id}`}
            className="bg-white text-black px-6 py-3 text-[10px] font-black uppercase italic tracking-widest hover:bg-[#ff0000] hover:text-white transition-all flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 duration-300"
          >
            Ver Detalhes
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <div className="relative z-10 p-5 md:p-6 -mt-4 flex-1 flex flex-col">
        <div className="flex justify-between items-center gap-2 mb-4">
          <div className="bg-white text-black px-3 md:px-4 py-1 font-black italic text-base md:text-xl shadow-lg transform -skew-x-12 shrink-0">
            <span className="inline-block transform skew-x-12">
              R$ {price.toLocaleString('pt-BR')}
            </span>
          </div>
          <div className="text-[#ff0000] font-black italic text-sm md:text-lg tracking-tight whitespace-nowrap shrink-0">
            {year}
          </div>
        </div>
        
        <h2 className="text-white text-xl md:text-2xl font-black italic uppercase leading-tight mb-4 flex-1">
          {name}
        </h2>
        
        <div className="h-[2px] w-full bg-[#1a1a1a] relative overflow-hidden mb-4">
          <div className="absolute top-0 left-0 h-full w-1/3 bg-[#ff0000] group-hover:w-full transition-all duration-1000" />
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-[#444] text-[10px] font-bold uppercase tracking-widest">FINAL {placaFinal}</span>
          <div className="flex items-center gap-2 text-[#ff0000] group-hover:translate-x-1 transition-transform">
            <span className="text-[8px] font-black uppercase italic tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Detalhes</span>
            <ChevronRight size={18} strokeWidth={3} />
          </div>
        </div>
      </div>
    </div>
  );
};
