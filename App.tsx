import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { OpeningLoader } from './components/OpeningLoader';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { KashmirSection } from './components/KashmirSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { SkillsSection } from './components/SkillsSection';
import { PhilosophySection } from './components/PhilosophySection';
import { BuilderProcessSection } from './components/BuilderProcessSection';
import { MilestonesSection } from './components/MilestonesSection';
import { ServicesSection } from './components/ServicesSection';
import { GlobalAmbitionSection } from './components/GlobalAmbitionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { ShortcutsModal } from './components/ShortcutsModal';
import { soundManager } from './utils/audio';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Web Experience');

  const handleOpenInquiry = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsInquiryOpen(true);
  };

  // Keyboard Shortcuts Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'm' || e.key === 'M') {
        soundManager.toggleMute();
      } else if (e.key === 'c' || e.key === 'C') {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 'w' || e.key === 'W') {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 's' || e.key === 'S') {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 'k' || e.key === 'K') {
        document.getElementById('kashmir')?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === '?') {
        setIsShortcutsOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsInquiryOpen(false);
        setIsShortcutsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-emerald-500 selection:text-black overflow-x-hidden antialiased">
      {/* Custom Mouse Cursor */}
      <CustomCursor />

      {/* Opening Loader Sequence */}
      {loading ? (
        <OpeningLoader onComplete={() => setLoading(false)} />
      ) : (
        <>
          {/* Top Floating Navigation */}
          <Navigation
            onOpenInquiry={() => handleOpenInquiry()}
            onOpenShortcuts={() => setIsShortcutsOpen(true)}
          />

          {/* Main Hero View */}
          <HeroSection
            onOpenInquiry={() => handleOpenInquiry()}
          />

          {/* Self Introduction / Narrative */}
          <IntroSection />

          {/* Kashmir Roots & Resilient Builder Story */}
          <KashmirSection />

          {/* Selected Interactive Works / Projects Showcase */}
          <SelectedWorkSection onOpenInquiry={handleOpenInquiry} />

          {/* Technical Skills Matrix & Live Code Playground */}
          <SkillsSection />

          {/* Core Builder Philosophy Tenets */}
          <PhilosophySection />

          {/* 4-Step Builder Process */}
          <BuilderProcessSection />

          {/* Milestones & Journey */}
          <MilestonesSection />

          {/* Services & Capabilities */}
          <ServicesSection onSelectService={(service) => handleOpenInquiry(service)} />

          {/* Global Ambition Banner */}
          <GlobalAmbitionSection onOpenInquiry={() => handleOpenInquiry()} />

          {/* Contact Section */}
          <ContactSection onOpenInquiry={() => handleOpenInquiry()} preselectedService={selectedService} />

          {/* Minimal Footer */}
          <Footer />

          {/* Interactive Modals */}
          <InquiryModal
            isOpen={isInquiryOpen}
            onClose={() => setIsInquiryOpen(false)}
            defaultService={selectedService}
          />

          <ShortcutsModal
            isOpen={isShortcutsOpen}
            onClose={() => setIsShortcutsOpen(false)}
          />
        </>
      )}
    </div>
  );
}
