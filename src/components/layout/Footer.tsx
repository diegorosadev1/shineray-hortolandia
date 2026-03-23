import React from 'react';
import { MessageCircle, MapPin, Mail, Instagram, Youtube, Facebook, ArrowUp, ChevronRight } from 'lucide-react';

interface FooterProps {
  openModal: () => void;
}

export const Footer = ({ openModal }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] pt-20 pb-10 relative overflow-hidden border-t border-white/5">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff0000]/50 to-transparent"></div>
      
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-[#ff0000] px-3 py-1 transform -skew-x-12">
                <span className="text-white font-black italic uppercase tracking-tighter transform skew-x-12 block">SHINERAY</span>
              </div>
              <span className="text-white font-black italic uppercase tracking-tighter">HORTOLÂNDIA</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Sua concessionária Shineray em Hortolândia. As melhores motos, os melhores preços e o atendimento que você merece.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white hover:bg-[#ff0000] transition-all group">
                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white hover:bg-[#ff0000] transition-all group">
                <Facebook size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white hover:bg-[#ff0000] transition-all group">
                <Youtube size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Menu Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-black italic uppercase text-xs tracking-[0.2em] border-l-2 border-[#ff0000] pl-3">Menu</h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'Estoque', 'Financiamentos', 'Localização', 'Contato'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-white text-sm flex items-center gap-2 group transition-colors">
                    <ChevronRight size={14} className="text-[#ff0000] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-black italic uppercase text-xs tracking-[0.2em] border-l-2 border-[#ff0000] pl-3">Contato</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#ff0000] mt-1 shrink-0" />
                <p className="text-gray-500 text-sm leading-snug">
                  R. Odenir Padovani, 430<br />
                  Hortolândia - SP
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#ff0000] shrink-0" />
                <p className="text-gray-500 text-sm">contato@shinerayhortolandia.com.br</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-black italic uppercase text-xs tracking-[0.2em] border-l-2 border-[#ff0000] pl-3">Vendas</h4>
            <div className="bg-zinc-900/80 p-6 rounded-[32px] border border-white/10 relative group overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#25D366]/10 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="flex items-center gap-4 mb-6">
                 <div className="relative group">
                  {/* Efeito de Pulsação Online */}
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>

                  {/* Container da Imagem Principal */}
                  <div className="relative w-14 h-14 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200"
                      alt="Atendente Comercial"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Badge de Status Online (Bolinha Verde) */}
                  <div className="absolute bottom-1.5 right-1.5 w-4 h-4 bg-green-500 border-4 border-white rounded-full shadow-lg"></div>
                </div>
                <div>
                  <p className="text-white font-black italic uppercase text-sm leading-tight">Especialista Online</p>
                  <p className="text-[#25D366] text-[10px] font-black uppercase tracking-widest">Disponível agora</p>
                </div>
              </div>

              <button 
                onClick={openModal}
                className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-black italic uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 hover:bg-[#1eb954] transition-all shadow-xl shadow-[#25D366]/20"
              >
                <MessageCircle size={18} />
                Iniciar Atendimento
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest text-center md:text-left">
            © {currentYear} Shineray Hortolândia. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-8">
            <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">
              Design & Dev by <span className="text-white">DDR</span>
            </p>
            
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-white hover:bg-[#ff0000] hover:border-[#ff0000] transition-all group"
            >
              <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
