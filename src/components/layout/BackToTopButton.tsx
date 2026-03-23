import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={goToTop}
      // Ajuste: bottom-4 left-4 no mobile, bottom-8 left-8 no desktop
      // Padding menor (p-3) no mobile para ficar mais discreto
      className={`fixed bottom-4 left-4 md:bottom-8 md:left-8 z-50 bg-white text-black p-3 md:p-4 rounded-full shadow-2xl border border-gray-100 hover:bg-gray-50 transition-all duration-300 transform ${
        showTopBtn
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Voltar ao topo"
    >
      {/* Ícone menor no mobile (size 20 vs 24) */}
      <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
};