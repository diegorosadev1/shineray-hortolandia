import React from 'react';
import { Zap, CheckCircle2, Clock, Shield } from 'lucide-react';
import { Motorcycle, FeatureProps } from '../types';

export const FEATURES_DATA: FeatureProps[] = [
  {
    icon: <Zap size={32} />,
    title: "ZERO ENTRADA",
    description: "Planos especiais sem entrada para diversos modelos da linha Shineray."
  },
  {
    icon: <CheckCircle2 size={32} />,
    title: "FACILIDADE REAL",
    description: "Aprovação rápida e sem burocracia para você sair rodando hoje mesmo."
  },
  {
    icon: <Clock size={32} />,
    title: "PRONTA ENTREGA",
    description: "Toda a linha Shineray disponível em nosso estoque local para retirada imediata."
  },
  {
    icon: <Shield size={32} />,
    title: "GARANTIA TOTAL",
    description: "Motos revisadas com garantia de fábrica e procedência 100% garantida."
  }
];

export const MOCK_MOTOS: Motorcycle[] = [
  { id: '1', name: 'SHINERAY SHI 175 EFI', price: 15990, year: '2024/2024', mileage: '0', fuel: 'Gasolina', transmission: 'Manual', image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop', brand: 'Shineray', model: 'SHI 175', version: 'EFI', color: 'Vermelho', category: 'Trail' },
  { id: '2', name: 'SHINERAY JEF 150S EFI', price: 13490, year: '2024/2024', mileage: '0', fuel: 'Gasolina', transmission: 'Manual', image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop', brand: 'Shineray', model: 'JEF 150S', version: 'EFI', color: 'Preto', category: 'Street' },
  { id: '3', name: 'SHINERAY WORKER 125', price: 8990, year: '2024/2024', mileage: '0', fuel: 'Gasolina', transmission: 'Manual', image: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=800&auto=format&fit=crop', brand: 'Shineray', model: 'Worker 125', version: 'Standard', color: 'Cinza', category: 'Street' },
  { id: '4', name: 'SHINERAY PHOENIX 50 EFI', price: 7490, year: '2024/2024', mileage: '0', fuel: 'Gasolina', transmission: 'Semiautomático', image: 'https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=800&auto=format&fit=crop', brand: 'Shineray', model: 'Phoenix 50', version: 'EFI', color: 'Branco', category: 'CUB' },
  { id: '5', name: 'SHINERAY JET 125SS', price: 9990, year: '2024/2024', mileage: '0', fuel: 'Gasolina', transmission: 'Semiautomático', image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=800&auto=format&fit=crop', brand: 'Shineray', model: 'Jet 125SS', version: 'Standard', color: 'Azul', category: 'CUB' },
  { id: '6', name: 'SHINERAY STORM 200', price: 18990, year: '2024/2024', mileage: '0', fuel: 'Gasolina', transmission: 'Manual', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop', brand: 'Shineray', model: 'Jet 125SS', version: 'Standard', color: 'Azul', category: 'CUB' },
  { id: '6', name: 'SHINERAY STORM 200', price: 18990, year: '2024/2024', mileage: '0', fuel: 'Gasolina', transmission: 'Manual', image: 'https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=800&auto=format&fit=crop', brand: 'Shineray', model: 'Storm 200', version: 'Standard', color: 'Preto Fosco', category: 'Naked' },
  { id: '7', name: 'SHINERAY EXPLORER 150', price: 12990, year: '2024/2024', mileage: '0', fuel: 'Gasolina', transmission: 'Manual', image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop', brand: 'Shineray', model: 'Explorer 150', version: 'Standard', color: 'Verde', category: 'Trail' },
  { id: '8', name: 'SHINERAY BOLT 250', price: 16490, year: '2023/2024', mileage: '500', fuel: 'Gasolina', transmission: 'Manual', image: 'https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=800&auto=format&fit=crop', brand: 'Shineray', model: 'Bolt 250', version: 'Custom', color: 'Preto', category: 'Custom' },
  { id: '9', name: 'SHINERAY EAGLE 150', price: 11990, year: '2024/2024', mileage: '0', fuel: 'Gasolina', transmission: 'Manual', image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop', brand: 'Shineray', model: 'Eagle 150', version: 'Standard', color: 'Vermelho', category: 'Street' },
  { id: '10', name: 'SHINERAY FIRE 150', price: 10990, year: '2024/2024', mileage: '0', fuel: 'Gasolina', transmission: 'Manual', image: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=800&auto=format&fit=crop', brand: 'Shineray', model: 'Fire 150', version: 'Standard', color: 'Preto', category: 'Street' },
  { id: '11', name: 'SHINERAY MAX 150', price: 9490, year: '2024/2024', mileage: '0', fuel: 'Gasolina', transmission: 'Manual', image: 'https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=800&auto=format&fit=crop', brand: 'Shineray', model: 'Max 150', version: 'Standard', color: 'Prata', category: 'Street' },
  { id: '12', name: 'SHINERAY POWER 200', price: 17990, year: '2024/2024', mileage: '0', fuel: 'Gasolina', transmission: 'Manual', image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=800&auto=format&fit=crop', brand: 'Shineray', model: 'Power 200', version: 'Standard', color: 'Azul', category: 'Naked' },
  { id: '13', name: 'SHINERAY ROCKET 125', price: 8490, year: '2024/2024', mileage: '0', fuel: 'Gasolina', transmission: 'Manual', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop', brand: 'Shineray', model: 'Rocket 125', version: 'Standard', color: 'Amarelo', category: 'Street' },
  { id: '14', name: 'SHINERAY SPEED 150', price: 11490, year: '2024/2024', mileage: '0', fuel: 'Gasolina', transmission: 'Manual', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop', brand: 'Shineray', model: 'Speed 150', version: 'Standard', color: 'Branco', category: 'Street' },
  { id: '15', name: 'SHINERAY XY 50', price: 6990, year: '2024/2024', mileage: '0', fuel: 'Gasolina', transmission: 'Semiautomático', image: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=800&auto=format&fit=crop', brand: 'Shineray', model: 'XY 50', version: 'Standard', color: 'Preto', category: 'CUB' },
  { id: '16', name: 'SHINERAY SHI 175 (USADA)', price: 12900, year: '2022/2023', mileage: '5.400', fuel: 'Gasolina', transmission: 'Manual', image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop', brand: 'Shineray', model: 'SHI 175', version: 'Standard', color: 'Vermelho', category: 'Trail' },
  { id: '17', name: 'SHINERAY JEF 150S (USADA)', price: 10500, year: '2021/2022', mileage: '12.000', fuel: 'Gasolina', transmission: 'Manual', image: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=800&auto=format&fit=crop', brand: 'Shineray', model: 'JEF 150S', version: 'Standard', color: 'Preto', category: 'Street' },
  { id: '18', name: 'SHINERAY WORKER 125 (USADA)', price: 6800, year: '2021/2021', mileage: '15.000', fuel: 'Gasolina', transmission: 'Manual', image: 'https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=800&auto=format&fit=crop', brand: 'Shineray', model: 'Worker 125', version: 'Standard', color: 'Cinza', category: 'Street' },
  { id: '19', name: 'SHINERAY PHOENIX 50 (USADA)', price: 5500, year: '2020/2020', mileage: '18.000', fuel: 'Gasolina', transmission: 'Semiautomático', image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=800&auto=format&fit=crop', brand: 'Shineray', model: 'Phoenix 50', version: 'Standard', color: 'Branco', category: 'CUB' },
  { id: '20', name: 'SHINERAY JET 125 (USADA)', price: 7200, year: '2021/2022', mileage: '8.500', fuel: 'Gasolina', transmission: 'Semiautomático', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop', brand: 'Shineray', model: 'Jet 125', version: 'Standard', color: 'Azul', category: 'CUB' },
];
