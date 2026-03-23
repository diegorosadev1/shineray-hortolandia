import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'NOSSO ESTOQUE', path: '/estoque' },
    { name: 'Financiamento', path: '/#financiamento' },
    { name: 'Contato', path: '/#contato' },
  ];

  const isInventoryPage = location.pathname === '/estoque';
  const isMotoDetailsPage = location.pathname.startsWith('/moto/');
  const useDarkText = !isScrolled && (isInventoryPage || isMotoDetailsPage);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      {/* Top Bar (Desktop) */}
      {!isScrolled && (
        <div className={`hidden lg:block border-b ${useDarkText ? 'border-black/5' : 'border-white/5'} pb-4 mb-4`}>
          <div className={`max-w-screen-2xl mx-auto px-6 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] ${useDarkText ? 'text-gray-400' : 'text-gray-500'}`}>
            <div className="flex gap-8">
              <span className="flex items-center gap-2">
                <MapPin size={12} className="text-[#ff0000]" />
                Av. Brasil, 1234 - Hortolândia/SP
              </span>
              <span className="flex items-center gap-2">
                <Phone size={12} className="text-[#ff0000]" />
                (19) 99999-9999
              </span>
            </div>
            <div className="flex gap-6">
              <a href="#" className={`transition-colors ${useDarkText ? 'hover:text-black' : 'hover:text-white'}`}><Instagram size={14} /></a>
              <a href="#" className={`transition-colors ${useDarkText ? 'hover:text-black' : 'hover:text-white'}`}><Facebook size={14} /></a>
            </div>
          </div>
        </div>
      )}

      <nav className="max-w-screen-2xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="relative group">
          <div className="bg-[#ff0000] px-6 py-2 transform -skew-x-12 group-hover:bg-white transition-colors duration-300">
            <span className="text-white group-hover:text-black font-black italic text-2xl transform skew-x-12 block tracking-tighter">
              SHINERAY
            </span>
          </div>
          <div className="absolute -bottom-1 -right-1 w-full h-full border border-[#ff0000] -z-10 transform -skew-x-12 translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 transition-all"></div>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-xs font-black italic uppercase tracking-[0.2em] transition-all relative group ${
                location.pathname === link.path 
                  ? 'text-[#ff0000]' 
                  : useDarkText 
                    ? 'text-black hover:text-[#ff0000]' 
                    : 'text-white hover:text-[#ff0000]'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-0.5 bg-[#ff0000] transition-all duration-300 ${
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
          
          <Link 
            to="/estoque" 
            className="bg-[#ff0000] text-white px-8 py-3 rounded-full font-black italic uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(255,0,0,0.3)]"
          >
            Ver NOSSO ESTOQUE
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className={`md:hidden w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
            useDarkText 
              ? 'bg-black/5 border border-black/10 text-black hover:bg-[#ff0000] hover:text-white' 
              : 'bg-white/5 border border-white/10 text-white hover:bg-[#ff0000]'
          }`}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[150] bg-[#111] md:hidden flex flex-col"
          >
            {/* Menu Header */}
            <div className="bg-white px-6 py-4 flex justify-between items-center border-b border-gray-100">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="relative group">
                <div className="bg-black px-4 py-1.5 transform -skew-x-12">
                  <span className="text-white font-black italic text-xl transform skew-x-12 block tracking-tighter">
                    SHINERAY
                  </span>
                </div>
              </Link>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg text-black hover:bg-[#ff0000] hover:text-white transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link 
                    to={link.path} 
                    onClick={() => setIsMenuOpen(false)}
                    className={`block w-full p-6 text-2xl font-black italic uppercase tracking-tighter transition-all border-l-4 ${
                      link.name === 'NOSSO ESTOQUE' 
                        ? 'bg-[#ff0000] text-white border-white/20' 
                        : 'bg-black text-white border-transparent hover:border-[#ff0000] hover:bg-[#1a1a1a]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Menu Footer */}
            <div className="mt-auto p-8 flex flex-col gap-6 bg-black/50">
              <div className="flex justify-between items-center">
                <div className="flex gap-6">
                  <Instagram size={20} className="text-gray-500 hover:text-white transition-colors" />
                  <Facebook size={20} className="text-gray-500 hover:text-white transition-colors" />
                </div>
                <p className="text-[8px] font-black uppercase tracking-widest text-gray-600">
                  © 2024 SHINERAY MOTORS
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
