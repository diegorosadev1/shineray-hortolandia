import React from 'react';
import { FeatureProps } from '../../types';

export const FeatureCard = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="w-full bg-white border border-gray-100 overflow-hidden group relative shadow-sm hover:shadow-xl transition-all duration-500">
      {/* Skewed Background Element */}
      <div className="absolute top-0 right-0 w-24 h-full bg-[#ff0000] transform skew-x-[-15deg] translate-x-12 opacity-0 group-hover:opacity-10 transition-all duration-500" />
      
      <div className="relative z-10 p-8">
        <div className="text-[#ff0000] mb-6 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <h3 className="text-black text-2xl font-black italic uppercase tracking-tighter mb-3 leading-none">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>

        {/* Dynamic Line */}
        <div className="mt-6 h-[2px] w-12 bg-[#ff0000] group-hover:w-full transition-all duration-700" />
      </div>
    </div>
  );
};
