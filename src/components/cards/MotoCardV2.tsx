import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MotoProps } from '../../types';

export const MotoCardV2 = ({ id, image, name, price, year, placaFinal }: MotoProps) => {
  return (
    <div className="w-full max-w-[400px] bg-black border-2 border-[#1a1a1a] overflow-hidden group relative">
      <div className="relative aspect-[4/5] w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Link 
            to={`/moto/${id}`}
            className="bg-[#ff0000] text-white px-6 py-3 text-[10px] font-black uppercase italic tracking-widest hover:bg-white hover:text-black transition-all flex items-center gap-2"
          >
            Ver Detalhes
            <ArrowRight size={14} />
          </Link>
        </div>
        
        {/* Floating Price */}
        <div className="absolute top-6 right-0 bg-[#ff0000] py-2 px-6 shadow-xl transform skew-x-[-10deg] translate-x-2">
          <div className="transform skew-x-[10deg] text-white italic font-black text-xl">
            R$ {price}
          </div>
        </div>

        {/* Floating Year */}
        <div className="absolute bottom-6 left-6 bg-white text-black px-3 py-1 font-black italic text-sm">
          {year}
        </div>
      </div>

      <div className="p-6 bg-black">
        <div className="text-[#ff0000] text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
          PLACA FINAL {placaFinal} // SHINERAY MOTORS
        </div>
        <h2 className="text-white text-3xl font-black italic uppercase leading-none tracking-tighter">
          {name}
        </h2>
      </div>
    </div>
  );
};
