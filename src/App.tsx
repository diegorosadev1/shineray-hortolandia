/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/layout/WhatsAppButton';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { ShowroomSection } from './components/sections/ShowroomSection';
import { FinancingSection } from './components/sections/FinancingSection';
import { LocationSection } from './components/sections/LocationSection';
import { ContactSection } from './components/sections/ContactSection';
import { HeroSection } from './components/sections/HeroSection';
import { InventoryPage } from './components/sections/InventoryPage';
import { MotoDetailsPage } from './components/sections/MotoDetailsPage';
import { ContactModal } from './components/ui/ContactModal';

const LandingPage = ({ openModal }: { openModal: () => void }) => (
  <>
    <HeroSection />
    <FeaturesSection />
    <div className="max-w-screen-2xl mx-auto py-12 px-4 flex flex-col gap-20">
      <ShowroomSection />
    </div>
    <FinancingSection />
    <LocationSection />
    <ContactSection openModal={openModal} />
    <div className="max-w-screen-2xl mx-auto py-12 px-4 flex flex-col gap-20">
      <Footer openModal={openModal} />
    </div>
  </>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="min-h-screen font-sans">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <Routes>
        <Route path="/" element={
          <div className="bg-[#0a0a0a]">
            <LandingPage openModal={openContactModal} />
          </div>
        } />
        <Route path="/estoque" element={
          <div className="bg-[#f8f8f8]">
            <InventoryPage />
            <div className="max-w-screen-2xl mx-auto py-12 px-4">
              <Footer openModal={openContactModal} />
            </div>
          </div>
        } />
        <Route path="/moto/:id" element={
          <div className="bg-[#f5f5f5]">
            <MotoDetailsPage openModal={openContactModal} />
            <div className="max-w-screen-2xl mx-auto py-12 px-4">
              <Footer openModal={openContactModal} />
            </div>
          </div>
        } />
      </Routes>

      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
      <WhatsAppButton />
    </div>
  );
}
