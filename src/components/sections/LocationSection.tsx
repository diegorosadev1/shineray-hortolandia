import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export const LocationSection = () => {
  const address = "R. Odenir Padovani, 430 - Parque Res. Maria de Lourdes, Hortolândia - SP, 13186-437";
  const phone = "(19) 99959-4379";
  const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.348663806085!2d-47.2185579!3d-22.826543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8bc0394000001%3A0x633e660e58863f6!2sShineray%20Hortol%C3%A2ndia!5e0!3m2!1spt-BR!2sbr!4v1711210000000!5m2!1spt-BR!2sbr`;

  return (
    <section className="bg-[#0a0a0a] py-20 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ff0000]/5 -skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[#ff0000] font-black italic uppercase tracking-[0.3em] text-xs">Localização</span>
              <h2 className="text-white text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">
                VEM QUE É <br />
                <span className="text-[#ff0000]">FÁCIL DE CHEGAR!</span>
              </h2>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Venha conhecer nossa loja, tomar um café e encontrar a Shineray perfeita para você! Estamos localizados em um ponto estratégico de Hortolândia.
            </p>

            <div className="flex flex-col gap-6">
              {/* Address Card */}
              <div className="flex items-start gap-4 group">
                <div className="bg-[#ff0000] p-3 rounded-xl transform -skew-x-12 group-hover:scale-110 transition-transform">
                  <MapPin className="text-white transform skew-x-12" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-black italic uppercase text-sm tracking-tight mb-1">Endereço</h4>
                  <p className="text-gray-400 text-sm leading-snug">{address}</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-start gap-4 group">
                <div className="bg-white p-3 rounded-xl transform -skew-x-12 group-hover:scale-110 transition-transform">
                  <Phone className="text-black transform skew-x-12" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-black italic uppercase text-sm tracking-tight mb-1">Telefone</h4>
                  <p className="text-gray-400 text-sm">{phone}</p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="flex items-start gap-4 group">
                <div className="bg-zinc-800 p-3 rounded-xl transform -skew-x-12 group-hover:scale-110 transition-transform">
                  <Clock className="text-white transform skew-x-12" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-black italic uppercase text-sm tracking-tight mb-1">Horário de Funcionamento</h4>
                  <p className="text-gray-400 text-sm">Segunda a Sexta: 08:00 - 18:00<br />Sábado: 08:00 - 13:00</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <a 
                href="https://maps.app.goo.gl/YourGoogleMapsLink" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#ff0000] text-white px-8 py-4 rounded-xl font-black italic uppercase tracking-widest flex items-center gap-3 hover:bg-white hover:text-black transition-all shadow-xl group"
              >
                <Navigation size={20} className="group-hover:rotate-12 transition-transform" />
                Traçar Rota
              </a>
              <a 
                href="https://www.google.com/maps" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-xl font-black italic uppercase tracking-widest flex items-center gap-3 hover:border-[#ff0000] hover:text-[#ff0000] transition-all group"
              >
                <ExternalLink size={20} />
                Abrir no Maps
              </a>
            </div>
          </motion.div>

          {/* Right Side: Map Embed */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Skewed Frame */}
            <div className="absolute -inset-4 bg-[#ff0000]/20 -skew-x-6 rounded-[40px] z-0"></div>
            
            <div className="relative z-10 rounded-[32px] overflow-hidden border-4 border-white/10 shadow-2xl aspect-square lg:aspect-auto lg:h-[600px]">
              <iframe
                src={googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shineray Hortolândia Location"
              ></iframe>
              
              {/* Map Overlay Gradient */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0a0a0a]/40 to-transparent"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl hidden md:block z-20 transform -rotate-3">
              <div className="flex items-center gap-4">
                <div className="bg-[#ff0000] w-12 h-12 rounded-full flex items-center justify-center text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Estamos aqui</p>
                  <p className="text-black font-black italic uppercase text-sm">Hortolândia - SP</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Skewed Divider for transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-20"></div>
      <div className="absolute -bottom-12 -left-10 -right-10 h-24 bg-[#0a0a0a] transform -rotate-2 z-10"></div>
    </section>
  );
};
