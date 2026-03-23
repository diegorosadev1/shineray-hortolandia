import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Mail, Phone, AlertCircle, MessageCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    restriction: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { name, email, phone, restriction } = formData;
    setIsFormValid(name.length > 2 && email.includes('@') && phone.length >= 10 && restriction !== '');
  }, [formData]);

  const handleWhatsAppRedirect = () => {
    const message = `Olá! Meu nome é ${formData.name}.%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0ATem restrição: ${formData.restriction}%0AEstou interessado em saber mais sobre as motos Shineray!`;
    const whatsappUrl = `https://wa.me/5519999594379?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-md rounded-[32px] overflow-hidden shadow-2xl"
          >
            {/* Modal Header */}
            <div className="bg-zinc-100 p-6 flex flex-col items-center text-center relative">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="bg-black px-4 py-2 transform -skew-x-12 mb-6">
                <span className="text-white font-black italic uppercase tracking-tighter transform skew-x-12 block">SHINERAY</span>
              </div>

              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full bg-[#ff0000] p-1">
                  <img 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                    alt="Attendant" 
                    className="w-full h-full rounded-full bg-white"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-[#00ff00] p-2 rounded-full border-4 border-white">
                  <MessageCircle size={16} className="text-white" />
                </div>
              </div>

              <h3 className="text-black font-black italic uppercase text-lg leading-tight max-w-[250px]">
                Antes de te direcionar para um dos nossos vendedores, precisamos saber:
              </h3>
            </div>

            {/* Modal Body */}
            <div className="p-8 flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-1">Qual o seu Nome? *</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="ex. João da Silva"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-[#00ff00]/30 focus:bg-white rounded-xl py-4 pl-12 pr-4 text-sm outline-none transition-all text-black font-medium"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-1">Seu Email: *</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="email" 
                    placeholder="meumelhoremail@mail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-[#00ff00]/30 focus:bg-white rounded-xl py-4 pl-12 pr-4 text-sm outline-none transition-all text-black font-medium"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-1">Celular / Whatsapp: *</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="(11) 99999-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-[#00ff00]/30 focus:bg-white rounded-xl py-4 pl-12 pr-4 text-sm outline-none transition-all text-black font-medium"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-1">Tem restrição em seu nome? *</label>
                <div className="relative">
                  <AlertCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <select 
                    value={formData.restriction}
                    onChange={(e) => setFormData({...formData, restriction: e.target.value})}
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-[#00ff00]/30 focus:bg-white rounded-xl py-4 pl-12 pr-4 text-sm outline-none transition-all text-black font-medium appearance-none"
                  >
                    <option value="">Escolha uma opção</option>
                    <option value="Sim">Sim, possuo restrição</option>
                    <option value="Não">Não possuo restrição</option>
                  </select>
                </div>
              </div>

              <button 
                disabled={!isFormValid}
                onClick={handleWhatsAppRedirect}
                className={`w-full py-5 rounded-2xl font-black italic uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl mt-2 ${
                  isFormValid 
                  ? 'bg-[#00ff00] text-white hover:bg-[#00cc00] scale-100' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed scale-95 opacity-50'
                }`}
              >
                Conversar Agora! <MessageCircle size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
