import React from "react";
import { Hash, Settings, Calendar, Gauge, Fuel, Palette } from "lucide-react";
import { SpecItem } from "./SpecItem";

export const SpecSection: React.FC<{ moto: any }> = ({ moto }) => (
  <div className="lg:col-span-4">
    <div className="bg-white p-8 border border-gray-100 h-full">
      <h2 className="text-black font-black italic uppercase text-xs tracking-[0.3em] mb-8 flex items-center gap-3">
        <span className="w-8 h-[1px] bg-[#ff0000]"></span>
        DETALHES TÉCNICOS
      </h2>
      <div className="space-y-6">
        <SpecItem icon={<Hash size={18} />} label="Marca" value={moto.brand} />
        <SpecItem icon={<Settings size={18} />} label="Modelo" value={moto.model} />
        <SpecItem icon={<Calendar size={18} />} label="Ano" value={moto.year} />
        <SpecItem icon={<Gauge size={18} />} label="Quilometragem" value={`${moto.mileage} KM`} />
        <SpecItem icon={<Settings size={18} />} label="Câmbio" value={moto.transmission} />
        <SpecItem icon={<Fuel size={18} />} label="Combustível" value={moto.fuel || "Gasolina"} />
        <SpecItem icon={<Palette size={18} />} label="Cor" value={moto.color} />
        <div className="pt-6 mt-6 border-t border-gray-100">
          <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Placa Final</div>
          <div className="bg-white border-2 border-black rounded-md px-6 py-2 inline-flex items-center gap-2">
            <div className="w-3 h-2 bg-blue-600 rounded-sm"></div>
            <span className="font-mono text-xl font-bold tracking-widest text-gray-300">XXX</span>
            <span className="font-mono text-xl font-bold text-black">{moto.id.slice(-1)}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);