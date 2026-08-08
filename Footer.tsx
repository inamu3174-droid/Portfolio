import React from 'react';
import { soundManager } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    soundManager.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 md:px-12 bg-[#020202] text-zinc-400 border-t border-zinc-900 text-xs font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left branding */}
        <div className="space-y-1 text-center md:text-left">
          <p className="text-white font-extrabold tracking-widest font-display text-sm">
            INAM UL HAQ
          </p>
          <p className="text-[10px] text-zinc-500 tracking-wider uppercase">
            DEVELOPER · DESIGNER · BUILDER — SRINAGAR, KASHMIR
          </p>
        </div>

        {/* Center Quick Navigation */}
        <div className="flex flex-wrap justify-center gap-6 font-bold tracking-widest text-[10px] text-zinc-500">
          <button onClick={() => scrollToSection('hero')} className="hover:text-white transition-colors cursor-pointer">
            HOME
          </button>
          <button onClick={() => scrollToSection('work')} className="hover:text-white transition-colors cursor-pointer">
            WORK
          </button>
          <button onClick={() => scrollToSection('kashmir')} className="hover:text-white transition-colors cursor-pointer">
            KASHMIR
          </button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-white transition-colors cursor-pointer">
            SKILLS
          </button>
          <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors cursor-pointer">
            SERVICES
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors cursor-pointer">
            CONTACT
          </button>
        </div>

        {/* Right Status & Copyright */}
        <div className="flex flex-col items-center md:items-end space-y-2 text-[10px] text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-zinc-300 font-bold">BUILDING SOMETHING NEW</span>
          </div>
          <p>© 2026 INAM UL HAQ. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};
