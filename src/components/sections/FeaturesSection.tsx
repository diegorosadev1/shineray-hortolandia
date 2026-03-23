import React from 'react';
import { FeatureCard } from '../cards/FeatureCard';
import { FEATURES_DATA } from '../../constants';

export const FeaturesSection = () => {
  return (
    <section className="bg-[#f8f9fa] py-20 px-4">
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-xl">
            <h2 className="text-black text-5xl font-black italic uppercase tracking-tighter leading-none mb-4">
              Vantagens <span className="text-[#ff0000]">Exclusivas</span>
            </h2>
            <p className="text-gray-500 uppercase tracking-[0.2em] text-xs">
              Por que escolher a Shineray Hortolândia?
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES_DATA.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
