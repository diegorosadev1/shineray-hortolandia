import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  // Trava o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'NOSSO ESTOQUE', path: '/estoque' },
    { name: 'Financiamento', path: '/#financiamento' },
    { name: 'Localizacao', path: '/#localizacao' },
    { name: 'Contato', path: '/#contato' },
  ];

  const isInventoryPage = location.pathname === '/estoque';
  const isMotoDetailsPage = location.pathname.startsWith('/moto/');
  
  // Texto escuro apenas na página de estoque sem scroll
  const useDarkText = !isScrolled && isInventoryPage;

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    if (path.includes('#')) {
      const [route, id] = path.split('#');
      
      if (location.pathname === route || (location.pathname === '/' && route === '/')) {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } 
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-xl py-4 border-b border-white/10' 
          : 'bg-transparent py-6'
      }`}
    >
      {/* Top Bar (Desktop) */}
      {!isScrolled && (
        <div className={`hidden lg:block border-b ${useDarkText ? 'border-black/10' : 'border-white/5'} pb-4 mb-4`}>
          <div className={`max-w-screen-2xl mx-auto px-6 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] ${useDarkText ? 'text-zinc-600' : 'text-gray-400'}`}>
            <div className="flex gap-8">
              <span className="flex items-center gap-2">
                <MapPin size={12} className="text-[#ff0000]" />
                <span className={useDarkText ? 'text-zinc-900' : 'text-white/80'}>
                  R. Odenir Padovani, 430 - Hortolândia/SP
                </span>
              </span>
              <span className="flex items-center gap-2">
                <Phone size={12} className="text-[#ff0000]" />
                <span className={useDarkText ? 'text-zinc-900' : 'text-white/80'}>(19) 99959-4379</span>
              </span>
            </div>
            <div className={`flex gap-6 ${useDarkText ? 'text-zinc-900' : 'text-white'}`}>
              <a href="#" className="hover:text-[#ff0000] transition-colors"><Instagram size={14} /></a>
              <a href="#" className="hover:text-[#ff0000] transition-colors"><Facebook size={14} /></a>
            </div>
          </div>
        </div>
      )}

      <nav className="max-w-screen-2xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="relative group" onClick={() => setIsMenuOpen(false)}>
          <div className="bg-[#ff0000] px-6 py-2 transform -skew-x-12 transition-all duration-300 shadow-lg">
            <span className="text-white font-black italic text-2xl transform skew-x-12 block tracking-tighter">
              SHINERAY
            </span>
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={(e) => handleNavClick(e, link.path)}
                className={`text-xs italic uppercase tracking-[0.2em] transition-all relative group font-bold ${
                  isScrolled 
                    ? 'text-white hover:text-[#ff0000]' 
                    : useDarkText 
                      ? 'text-zinc-900 hover:text-[#ff0000]' 
                      : 'text-white hover:text-[#ff0000]'
                } ${isActive ? '!text-[#ff0000]' : ''}`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-[#ff0000] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            );
          })}
          
          <Link 
            to="/estoque" 
            className="bg-[#ff0000] text-white px-8 py-3 rounded-full font-black italic uppercase text-[10px] tracking-widest hover:bg-zinc-900 transition-all shadow-xl"
          >
            Ver NOSSO ESTOQUE
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className={`md:hidden w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
            useDarkText 
              ? 'bg-black/5 text-zinc-900 border border-black/10' 
              : 'bg-white/5 text-white border border-white/10'
          }`}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[200] bg-black md:hidden flex flex-col"
          >
            {/* Menu Header (Top bar interna do menu) */}
            <div className="px-6 py-6 flex justify-between items-center border-b border-white/10 bg-black">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <div className="bg-[#ff0000] px-4 py-1.5 transform -skew-x-12">
                  <span className="text-white font-black italic text-xl transform skew-x-12 block uppercase">SHINERAY</span>
                </div>
              </Link>
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col p-6 gap-2 bg-black flex-grow">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={link.path} 
                    onClick={(e) => handleNavClick(e, link.path)}
                    className={`block w-full p-5 text-2xl font-black italic uppercase tracking-tighter transition-all rounded-xl ${
                      location.pathname === link.path 
                        ? 'bg-[#ff0000] text-white shadow-lg' 
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Menu Footer */}
            <div className="p-8 flex flex-col gap-6 bg-zinc-900">
                <div className="flex flex-col gap-4">
                    <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Siga-nos</span>
                    <div className="flex gap-6">
                        <Instagram size={24} className="text-white hover:text-[#ff0000] transition-colors" />
                        <Facebook size={24} className="text-white hover:text-[#ff0000] transition-colors" />
                    </div>
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600">
                    © 2026 SHINERAY HORTOLÂNDIA
                </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};