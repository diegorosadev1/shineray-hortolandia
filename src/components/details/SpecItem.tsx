import React from "react";

interface SpecItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export const SpecItem: React.FC<SpecItemProps> = ({ icon, label, value }) => (
  <div className="flex items-center gap-4 group">
    {/* Container do Ícone com hover sutil em vermelho Shineray */}
    <div className="w-10 h-10 bg-gray-50 flex items-center justify-center text-[#ff0000] group-hover:bg-[#ff0000]/5 transition-all">
      {icon}
    </div>
    
    <div>
      {/* Label em caixa alta e cinza, seguindo o padrão do layout  */}
      <div className="text-[9px] font-black uppercase tracking-widest text-gray-400">
        {label}
      </div>
      {/* Valor em destaque preto e negrito  */}
      <div className="text-xs font-bold uppercase text-black">
        {value}
      </div>
    </div>
  </div>
);