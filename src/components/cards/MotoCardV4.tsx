import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, ArrowRight } from 'lucide-react';
import { MotoProps } from '../../types';

export const MotoCardV4 = ({ id, image, name, price, year, placaFinal }: MotoProps) => {
  return (
    <div className="w-full max-w-[400px] bg-[#080808] flex overflow-hidden group border border-[#1a1a1a] relative">
      {/* Vertical Sidebar */}
      <div className="w-16 bg-[#ff0000] flex flex-col items-center justify-between py-8 shrink-0">
        <div className="rotate-[-90deg] whitespace-nowrap text-white font-black italic text-2xl tracking-tighter">
          R$ {price}
        </div>
        <div className="flex flex-col gap-2">
          <Zap size={20} className="text-white" />
          <Shield size={20} className="text-white opacity-50" />
        </div>
      </div>
 
      <div className="flex-1 flex flex-col">
        <div className="relative aspect-square w-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 text-[10px] font-bold italic">
            MOD.{year}
          </div>
          
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

        <div className="p-5 flex-1 flex flex-col justify-center">
          <h2 className="text-white text-xl font-black italic uppercase leading-none tracking-tight mb-4">
            {name}
          </h2>
          <div className="flex items-center gap-2">
            <div className="h-[1px] flex-1 bg-[#ff0000]/30" />
            <span className="text-[#ff0000] text-[10px] font-bold tracking-widest uppercase">PLACA {placaFinal}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
