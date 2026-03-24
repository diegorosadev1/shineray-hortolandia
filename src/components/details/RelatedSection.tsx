import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { MOCK_MOTOS } from "../../constants";
import { MotoCard } from "../ui/MotoCard";

export const RelatedSection: React.FC<{ currentId: string }> = ({ currentId }) => {
  const relatedMotos = MOCK_MOTOS.filter((m) => m.id !== currentId).slice(0, 3);

  return (
    <div className="mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <h2 className="text-black text-4xl md:text-6xl font-black italic uppercase leading-none tracking-tighter">
          Você também <br /> <span className="text-[#ff0000]">pode gostar:</span>
        </h2>
        <Link to="/estoque" className="bg-black text-white px-8 py-4 text-[10px] font-black uppercase italic tracking-widest hover:bg-[#ff0000] transition-colors flex items-center gap-3 group">
          Ver todo o NOSSO ESTOQUE
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedMotos.map((m) => (
          <MotoCard key={m.id} moto={m} />
        ))}
      </div>
    </div>
  );
};