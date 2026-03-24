import React from "react";

interface HeroProps {
  name: string;
  model: string;
  year: string;
  price: number;
}

export const DetailsHero: React.FC<HeroProps> = ({ name, model, year, price }) => (
  <div className="flex flex-col lg:flex-row mb-8">
    <div className="flex-1 bg-black p-8 pt-16 lg:p-12 lg:pt-24 relative overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-white mt-10 text-3xl md:text-5xl font-black italic uppercase leading-none mb-4 max-w-2xl">
          {name} {model}
        </h1>
        <div className="text-[#ff0000] text-xl font-black italic uppercase tracking-tighter">
          {year}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-[-20deg] translate-x-1/2"></div>
    </div>
    <div className="lg:w-[300px] bg-[#ff0000] p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
      <div className="relative z-10">
        <div className="text-white/80 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Preço</div>
        <div className="text-white text-4xl font-black italic leading-none mb-2">
          R$ {price.toLocaleString("pt-BR")}
        </div>
        <div className="text-black text-[10px] font-bold uppercase tracking-widest">Financie em até 60x</div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black/10 skew-y-[-5deg] translate-y-1/2"></div>
    </div>
  </div>
);