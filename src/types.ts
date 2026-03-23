import React from 'react';

export interface Motorcycle {
  id: string;
  name: string;
  price: number;
  year: string;
  mileage: string;
  fuel: string;
  transmission: string;
  image: string;
  brand: string;
  model: string;
  version: string;
  color: string;
  category: string;
}

export interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  key?: number;
}

export interface MotoProps extends Motorcycle {
  placaFinal?: string;
  key?: string | number;
}
