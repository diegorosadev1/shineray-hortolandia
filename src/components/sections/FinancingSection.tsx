import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

export const FinancingSection = () => {
  const [financingAmount, setFinancingAmount] = useState(15000);
  const [downPayment, setDownPayment] = useState(0);

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace('R$', 'R$ ');
  };

  return (
    <section id="financiamento" className="bg-white py-20 px-4">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Lado Esquerdo: Conteúdo */}
        <div className="flex flex-col gap-8 lg:sticky lg:top-32">
          
          {/* --- AJUSTE AQUI: Container da imagem menor --- */}
          <div className="relative rounded-[40px] overflow-hidden aspect-video max-w-xl mx-auto lg:mx-0 w-full ">
            <img 
              src="\assets\img\finance.png" 
              alt="Financiamento Shineray" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-black text-5xl font-black italic uppercase tracking-tighter leading-none">
              FINANCIAMENTO <br />
              <span className="text-[#ff0000]">SHINERAY</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Realize o sonho da sua moto nova com aprovação rápida e as melhores taxas de Hortolândia. Simule agora e receba uma proposta personalizada em minutos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm flex items-center gap-4 group hover:shadow-md transition-all hover:border-[#ff0000]/20">
              <CheckCircle2 className="text-[#ff0000]" size={24} />
              <span className="text-black font-black italic uppercase text-sm tracking-tight">Aprovação em 30min</span>
            </div>
            <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm flex items-center gap-4 group hover:shadow-md transition-all hover:border-[#ff0000]/20">
              <CheckCircle2 className="text-[#ff0000]" size={24} />
              <span className="text-black font-black italic uppercase text-sm tracking-tight">Zero de Entrada</span>
            </div>
          </div>
        </div>

        {/* Lado Direito: Card do Formulário */}
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-col gap-10">
          
          {/* Sliders */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <label className="text-[#444] text-xs font-black uppercase tracking-widest">Quanto quer Financiar?</label>
              <div className="relative pt-6">
                <div 
                  className="absolute -top-4 bg-black text-white px-3 py-1 rounded-md text-xs font-black italic transform -translate-x-1/2 transition-all duration-200"
                  style={{ left: `${((financingAmount - 5000) / 25000) * 100}%` }}
                >
                  {formatCurrency(financingAmount)}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black" />
                </div>
                <input 
                  type="range" 
                  min="5000" 
                  max="30000" 
                  step="500"
                  value={financingAmount}
                  onChange={(e) => setFinancingAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ff0000]"
                />
                <div className="flex justify-between mt-2 text-[10px] font-bold text-gray-400 uppercase">
                  <span>R$ 5.000</span>
                  <span>R$ 30.000+</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <label className="text-[#444] text-xs font-black uppercase tracking-widest">Valor de Entrada</label>
              <div className="relative pt-6">
                <div 
                  className="absolute -top-4 bg-black text-white px-3 py-1 rounded-md text-xs font-black italic transform -translate-x-1/2 transition-all duration-200"
                  style={{ left: `${(downPayment / 15000) * 100}%` }}
                >
                  {formatCurrency(downPayment)}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black" />
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="15000" 
                  step="500"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ff0000]"
                />
                <div className="flex justify-between mt-2 text-[10px] font-bold text-gray-400 uppercase">
                  <span>R$ 0</span>
                  <span>R$ 15.000+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Inputs */}
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-[#444] text-[10px] font-black uppercase tracking-widest ml-1">Seu Nome</label>
              <input 
                type="text" 
                placeholder="Nome completo"
                className="w-full bg-gray-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#ff0000] outline-none transition-all"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[#444] text-[10px] font-black uppercase tracking-widest ml-1">Email</label>
              <input 
                type="email" 
                placeholder="seu@email.com"
                className="w-full bg-gray-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#ff0000] outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#444] text-[10px] font-black uppercase tracking-widest ml-1">Telefone / Celular</label>
                <input 
                  type="text" 
                  placeholder="(00) 00000-0000"
                  className="w-full bg-gray-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#ff0000] outline-none transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#444] text-[10px] font-black uppercase tracking-widest ml-1">CPF ou CNPJ</label>
                <input 
                  type="text" 
                  placeholder="000.000.000-00"
                  className="w-full bg-gray-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#ff0000] outline-none transition-all"
                />
              </div>
            </div>

            <button className="mt-4 w-full bg-black text-white py-5 rounded-2xl font-black italic uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#ff0000] transition-all shadow-xl group">
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Enviar Proposta de Financiamento
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};