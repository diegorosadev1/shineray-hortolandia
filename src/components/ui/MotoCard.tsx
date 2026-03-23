import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, ArrowRight } from 'lucide-react';

interface MotoCardProps {
  moto: {
    id: string;
    name: string;
    model: string;
    price: number;
    year: string;
    image: string;
    mileage: string;
    transmission: string;
    color: string;
    category: string;
  };
}

export const MotoCard: React.FC<MotoCardProps> = ({ moto }) => {
  return (
    <div className="w-full bg-[#080808] flex overflow-hidden group border border-[#1a1a1a] h-full">
      {/* Vertical Sidebar */}
      <div className="w-16 bg-[#ff0000] flex flex-col items-center justify-between py-8 shrink-0 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] whitespace-nowrap text-white font-black italic text-2xl tracking-tighter">
          R$ {moto.price.toLocaleString('pt-BR')}
        </div>
        <div className="flex flex-col gap-2 mt-auto">
          <Zap size={18} className="text-white" />
          <Shield size={18} className="text-white opacity-50" />
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="relative aspect-square w-full overflow-hidden">
          <img
            src={moto.image}
            alt={moto.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 text-[10px] font-bold italic">
            MOD.{moto.year}
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Link 
              to={`/moto/${moto.id}`}
              className="bg-white text-black px-6 py-3 text-[10px] font-black uppercase italic tracking-widest hover:bg-[#ff0000] hover:text-white transition-all flex items-center gap-2"
            >
              Ver Detalhes
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="p-5 flex-1 flex flex-col justify-center">
          <h2 className="text-white text-lg font-black italic uppercase leading-none tracking-tight mb-4">
            {moto.name} <span className="text-gray-500">{moto.model}</span>
          </h2>
          <div className="flex items-center gap-2">
            <div className="h-[1px] flex-1 bg-[#ff0000]/30" />
            <span className="text-[#ff0000] text-[9px] font-bold tracking-widest uppercase">PLACA FINAL {moto.id.slice(-1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
