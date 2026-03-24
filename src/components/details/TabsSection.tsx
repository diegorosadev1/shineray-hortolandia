import React, { useState } from "react";
import { MessageSquare, Info, Calculator, User, Mail, Phone, Send, MessageCircle, CheckCircle2 } from "lucide-react";

export const TabsSection: React.FC<{ moto: any; openModal?: () => void }> = ({ moto, openModal }) => {
  const [activeTab, setActiveTab] = useState<"interested" | "details" | "finance">("interested");

  return (
    <div className="mt-12">
      <div className="grid grid-cols-3">
        <TabButton active={activeTab === "interested"} onClick={() => setActiveTab("interested")} icon={<MessageSquare size={20} />} label="Interesse" />
        <TabButton active={activeTab === "details"} onClick={() => setActiveTab("details")} icon={<Info size={20} />} label="Diferenciais" />
        <TabButton active={activeTab === "finance"} onClick={() => setActiveTab("finance")} icon={<Calculator size={20} />} label="Financiar" />
      </div>
      <div className="bg-white border border-gray-100 min-h-[400px]">
        {activeTab === "interested" && <InterestedTab openModal={openModal} />}
        {activeTab === "details" && <DetailsTab />}
        {activeTab === "finance" && <FinanceTab moto={moto} />}
      </div>
    </div>
  );
};

const TabButton = ({ active, onClick, icon, label }: any) => (
  <button onClick={onClick} className={`flex flex-col items-center justify-center gap-2 py-6 border-b-4 transition-all ${active ? "bg-white border-[#ff0000] text-[#ff0000]" : "bg-gray-100 border-transparent text-gray-400 hover:bg-gray-50"}`}>
    {icon} <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
  </button>
);

const InterestedTab = ({ openModal }: any) => (
  <div className="p-8 md:p-12 grid lg:grid-cols-2 gap-12">
    <div className="bg-[#1A1A1A] p-8 rounded-[32px] text-white">
      <h3 className="text-2xl font-black italic uppercase mb-6">Fale com a <span className="text-[#ff0000]">Equipe</span></h3>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Nome" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-[#ff0000]" />
        <input type="text" placeholder="WhatsApp" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-[#ff0000]" />
        <button className="w-full bg-[#ff0000] py-4 rounded-2xl font-black uppercase flex items-center justify-center gap-2">
          <Send size={18} /> Enviar Mensagem
        </button>
      </form>
    </div>
    <div className="flex flex-col items-center justify-center text-center">
      <h3 className="text-2xl font-black italic mb-6">Atendimento Imediato</h3>
      <button onClick={openModal} className="bg-[#25D366] text-white px-10 py-6 rounded-2xl font-black text-xl flex items-center gap-4 hover:scale-105 transition-transform">
        <MessageCircle size={24} /> WHATSAPP
      </button>
      <div className="mt-8 flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200" className="w-16 h-16 rounded-full border-2 border-[#ff0000]" alt="Consultor" />
          <p className="text-[10px] font-black uppercase text-gray-400 mt-2">Especialista Online [cite: 66]</p>
      </div>
    </div>
  </div>
);

const DetailsTab = () => (
  <div className="p-12 grid grid-cols-2 md:grid-cols-3 gap-6">
    {["Partida Elétrica", "Injeção Eletrônica", "Painel Digital", "ABS", "Manual", "Chave Reserva"].map((item) => (
      <div key={item} className="flex items-center gap-3">
        <CheckCircle2 size={18} className="text-[#ff0000]" />
        <span className="text-xs font-bold uppercase">{item}</span>
      </div>
    ))}
  </div>
);

const FinanceTab = ({ moto }: any) => {
    const [entry, setEntry] = React.useState(2000);
    return (
        <div className="p-12 grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
                <h3 className="text-3xl font-black italic uppercase leading-none">Simule <span className="text-[#ff0000]">Shineray</span></h3>
                <input type="range" min="0" max={moto.price} step="500" value={entry} onChange={(e) => setEntry(Number(e.target.value))} className="w-full accent-[#ff0000]" />
                <div className="bg-gray-100 p-4 rounded-xl flex justify-between font-black">
                    <span>Saldo:</span> <span className="text-[#ff0000]">R$ {(moto.price - entry).toLocaleString()}</span>
                </div>
            </div>
            <div className="bg-white border p-8 rounded-3xl shadow-lg">
                <p className="text-xs font-bold text-gray-500 mb-4">Envie seu CPF para pré-análise rápida.</p>
                <input type="text" placeholder="000.000.000-00" className="w-full bg-gray-50 p-4 rounded-xl mb-4" />
                <button className="w-full bg-black text-white py-4 rounded-xl font-black uppercase">Solicitar Crédito</button>
            </div>
        </div>
    );
};