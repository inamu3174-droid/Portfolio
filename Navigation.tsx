import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Command, Menu, X } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface NavigationProps {
  onOpenInquiry: () => void;
  onOpenShortcuts: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenInquiry, onOpenShortcuts }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const active = soundManager.toggleMute();
    setIsMuted(!active);
    soundManager.playClick();
  };

  const scrollToSection = (id: string) => {
    soundManager.playClick();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/80 backdrop-blur-md border-b border-zinc-800/60 py-4 px-6 md:px-12'
          : 'bg-transparent py-8 px-6 md:px-12'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="flex flex-col group cursor-pointer"
        >
          <span className="text-sm font-extrabold tracking-[0.2em] text-white font-display group-hover:text-zinc-300 transition-colors">
            INAM UL HAQ
          </span>
          <span className="text-[9px] text-zinc-500 tracking-[0.15em] font-mono uppercase">
            DEVELOPER · DESIGNER · BUILDER
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-[0.2em] text-zinc-400">
          <button
            onClick={() => scrollToSection('work')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            WORK
          </button>
          <button
            onClick={() => scrollToSection('kashmir')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            STORY
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            SKILLS
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            SERVICES
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-white transition-colors cursor-pointer py-1"
          >
            CONTACT
          </button>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Audio toggle */}
          <button
            onClick={toggleAudio}
            title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
            className="p-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer"
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>

          {/* Keyboard shortcut trigger */}
          <button
            onClick={() => {
              soundManager.playClick();
              onOpenShortcuts();
            }}
            title="Keyboard Shortcuts"
            className="hidden sm:flex p-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer"
          >
            <Command size={14} />
          </button>

          {/* Status Pill */}
          <div className="hidden lg:flex text-[10px] bg-zinc-900/80 px-3 py-1.5 rounded-full border border-zinc-800 items-center gap-2 text-zinc-300 font-mono tracking-wider">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span>BUILDING SOMETHING NEW</span>
          </div>

          {/* Let's Build CTA */}
          <button
            onClick={() => {
              soundManager.playClick();
              onOpenInquiry();
            }}
            data-cursor="button"
            className="hidden sm:block border border-zinc-700/80 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-white hover:bg-white hover:text-black transition-all cursor-pointer"
          >
            LET'S BUILD
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[72px] bg-[#050505] border-b border-zinc-800 p-6 flex flex-col gap-5 text-sm font-bold tracking-widest text-zinc-300 animate-in fade-in slide-in-from-top-2">
          <button
            onClick={() => scrollToSection('work')}
            className="text-left py-2 border-b border-zinc-900 hover:text-white"
          >
            01 — SELECTED WORK
          </button>
          <button
            onClick={() => scrollToSection('kashmir')}
            className="text-left py-2 border-b border-zinc-900 hover:text-white"
          >
            02 — KASHMIR STORY
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-left py-2 border-b border-zinc-900 hover:text-white"
          >
            03 — SKILLS & TECH
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-left py-2 border-b border-zinc-900 hover:text-white"
          >
            04 — SERVICES
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-left py-2 border-b border-zinc-900 hover:text-white"
          >
            05 — CONTACT
          </button>

          <div className="pt-2 flex justify-between items-center text-[10px] text-zinc-500 font-mono">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              BUILDING SOMETHING NEW
            </span>
            <span>SRINAGAR, INDIA</span>
          </div>
        </div>
      )}
    </header>
  );
};
