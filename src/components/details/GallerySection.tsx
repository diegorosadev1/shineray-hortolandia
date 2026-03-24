import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GallerySectionProps {
  images: string[];
  currentIndex: number;
  setIndex: (index: number) => void;
  name: string;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ images, currentIndex, setIndex, name }) => {
  const nextImage = () => setIndex((currentIndex + 1) % images.length);
  const prevImage = () => setIndex((currentIndex - 1 + images.length) % images.length);

  return (
    <div className="lg:col-span-8">
      <div className="relative group aspect-[16/10] bg-white overflow-hidden border border-gray-100">
        <img src={images[currentIndex]} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-[#ff0000] text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-[#ff0000] text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
          <ChevronRight size={24} />
        </button>
        <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 text-[10px] font-black uppercase italic tracking-widest">
          Galeria de Fotos
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 mt-2">
        {images.map((img, idx) => (
          <button key={idx} onClick={() => setIndex(idx)} className={`aspect-video overflow-hidden border-2 transition-all ${currentIndex === idx ? "border-[#ff0000]" : "border-transparent opacity-60 hover:opacity-100"}`}>
            <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};