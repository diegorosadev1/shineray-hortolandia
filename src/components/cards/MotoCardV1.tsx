import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MotoProps } from '../../types';

export const MotoCardV1 = ({ id, image, name, price, year, placaFinal }: MotoProps) => {
  return (
    <div className="w-full max-w-[400px] bg-black overflow-hidden shadow-2xl font-sans group relative">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Link 
            to={`/moto/${id}`}
            className="bg-white text-black px-6 py-3 text-[10px] font-black uppercase italic tracking-widest hover:bg-[#ff0000] hover:text-white transition-all flex items-center gap-2"
          >
            Ver Detalhes
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <div className="relative flex items-center h-12">
        <div className="flex-1 bg-[#1a1a1a] h-full flex items-center px-4">
          <span className="text-[#666] text-[10px] font-bold tracking-widest uppercase">
            PLACA FINAL: {placaFinal}
          </span>
        </div>
        <div className="absolute right-0 top-[-10px] bottom-[-10px] w-[60%] bg-[#ff0000] transform -skew-x-[15deg] origin-bottom-right flex items-center justify-center shadow-lg">
          <div className="transform skew-x-[15deg] flex items-baseline gap-1 text-white italic">
            <span className="text-xs font-bold italic">R$</span>
            <span className="text-2xl font-black tracking-tighter leading-none">
              {price}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 pt-8 pb-10">
        <h2 className="text-white text-2xl font-black italic leading-[1.1] uppercase tracking-tight mb-6">
          {name}
        </h2>
        <div className="flex gap-4">
          {year.split('').map((char, i) => (
            <span key={i} className="text-[#ff0000] text-lg font-bold tracking-[0.2em]">
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
