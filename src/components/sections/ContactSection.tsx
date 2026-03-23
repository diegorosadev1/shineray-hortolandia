import React, { useState } from 'react';
import { Send, MessageCircle, User, Mail, Phone } from 'lucide-react';

interface ContactSectionProps {
  openModal: () => void;
}

export const ContactSection = ({ openModal }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    restriction: ''
  });

  return (
    <section id="contato" className="py-32 bg-[#F5F5F7]">
      <div className="container px-4 mx-auto">
        <div className="max-w-screen-2xl mx-auto bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-100">
          
          {/* Lado Esquerdo: Formulário (Dark) */}
          <div className="md:w-1/2 p-8 md:p-16 bg-[#1A1A1A] text-white relative overflow-hidden flex flex-col justify-center">
            <div className="relative z-10">
              <span className="text-[#ff0000] font-black tracking-[0.3em] uppercase text-sm mb-4 block italic">Contato</span>
              <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase italic leading-none tracking-tighter">
                Fale com a <br /> <span className="text-[#ff0000]">Nossa Equipe</span>
              </h2>
              <p className="text-gray-400 text-lg font-medium mb-10 leading-relaxed max-w-md">
                Tire suas dúvidas, peça um orçamento ou agende um test-ride agora mesmo.
              </p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-1 italic">Nome Completo</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input 
                      type="text" 
                      placeholder="Seu nome aqui"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-[#ff0000] outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-1 italic">E-mail</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                      <input 
                        type="email" 
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-[#ff0000] outline-none transition-all font-medium"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-1 italic">Telefone</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                      <input 
                        type="text" 
                        placeholder="(00) 00000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-[#ff0000] outline-none transition-all font-medium"
                      />
                    </div>
                  </div>
                </div>

                <button className="w-full bg-[#ff0000] text-white py-5 rounded-2xl font-black italic uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#cc0000] transition-all shadow-xl group mt-4">
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Enviar Mensagem
                </button>
              </form>
            </div>
            
            {/* Background Glow */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#ff0000]/10 rounded-full blur-3xl"></div>
          </div>
          
          {/* Lado Direito: WhatsApp CTA (Light) */}
          <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center items-center text-center bg-white">
            <div className="max-w-sm flex flex-col items-center">
              
              {/* --- NOVO: AVATAR ATENDENTE ESPECIALISTA --- */}
             
              {/* --- FIM DO AVATAR --- */}

              <h3 className="text-3xl font-black text-[#1A1A1A] uppercase italic tracking-tighter mb-4 leading-tight">
                Prefere que a gente <br /> entre em contato?
              </h3>
              <p className="text-gray-500 font-medium mb-10">
                Preencha os campos ao lado ou inicie um atendimento agora mesmo pelo WhatsApp.
              </p>
              
              <button 
                onClick={openModal}
                className="w-full bg-[#25D366] text-white py-6 rounded-2xl font-black text-xl hover:bg-[#1eb954] transition-all shadow-xl shadow-[#25D366]/20 flex items-center justify-center gap-4 uppercase tracking-tighter italic hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle size={28} />
                INICIAR ATENDIMENTO
              </button>
              
              <div className="flex flex-col items-center mb-8 mt-10">
                <div className="relative group">
                  {/* Efeito de Pulsação Online */}
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>

                  {/* Container da Imagem Principal */}
                  <div className="relative w-24 h-24 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200"
                      alt="Atendente Comercial"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Badge de Status Online (Bolinha Verde) */}
                  <div className="absolute bottom-1.5 right-1.5 w-6 h-6 bg-green-500 border-4 border-white rounded-full shadow-lg"></div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Especialista online</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};