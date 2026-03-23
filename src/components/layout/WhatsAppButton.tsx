import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/5500000000000" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25d366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
    >
      <div className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-xs font-black italic uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
        Fale Conosco Online
      </div>
      <MessageCircle size={32} />
      <div className="absolute -top-2 -right-2 bg-[#ff0000] text-white text-[8px] font-bold px-2 py-1 rounded-full animate-bounce">
        ONLINE
      </div>
    </a>
  );
};
