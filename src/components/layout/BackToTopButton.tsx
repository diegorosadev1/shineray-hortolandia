import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Lógica para mostrar o botão de voltar ao topo
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
    <>
      {/* BOTÃO VOLTAR AO TOPO (LADO ESQUERDO) */}
      <button
        onClick={goToTop}
        className={`fixed bottom-8 left-8 z-50 bg-white text-black p-4 rounded-full shadow-2xl border border-gray-100 hover:bg-gray-50 transition-all duration-300 transform ${
          showTopBtn
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={24} />
      </button>
    </>
  );
};
