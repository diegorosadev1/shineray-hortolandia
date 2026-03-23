import React from 'react';

export interface MotoProps {
  image: string;
  name: string;
  price: string;
  year: string;
  placaFinal: string;
}

export interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  key?: React.Key;
}
