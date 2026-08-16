'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProductSection } from '@/components/sections/ProductSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';
import { ContactModal } from '@/components/ui/ContactModal';

// Dynamic import for Three.js Canvas to prevent SSR issues
const CelestialCanvas = dynamic(() => import('@/components/3d/CelestialCanvas'), {
  ssr: false,
});

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <main className="relative min-h-screen bg-[#07090E] text-slate-100 overflow-x-hidden">
      {/* Three.js Interactive 3D Background Canvas */}
      <CelestialCanvas />

      {/* Main Page Layout */}
      <div className="relative z-10">
        <Navbar onOpenContact={handleOpenContact} />
        
        <HeroSection
          onExploreWork={() => {
            const el = document.getElementById('product');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <AboutSection onOpenAboutModal={handleOpenContact} />
        <ServicesSection />
        <ProductSection />
        <ContactSection onOpenContactModal={handleOpenContact} />
        <Footer />
      </div>

      {/* Interactive Contact / Project Inquiry Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </main>
  );
}
