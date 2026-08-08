import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Hero3DCanvas } from './Hero3DCanvas';
import { soundManager } from '../utils/audio';

interface HeroSectionProps {
  onOpenInquiry: () => void;
}

const PHRASES = [
  'Websites.',
  'E-Commerce.',
  'Digital Products.',
  'Creative Technology.'
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInquiry }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const scrollToWork = () => {
    soundManager.playClick();
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-12 pt-28 pb-12 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-15 pointer-events-none">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500 via-emerald-500 to-purple-600 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-8">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[1px] w-8 bg-zinc-700" />
            <span className="text-[10px] sm:text-xs tracking-[0.3em] text-zinc-400 font-mono uppercase">
              INAM UL HAQ / KASHMIR, INDIA
            </span>
          </div>

          {/* Massive Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] font-semibold tracking-tighter mb-8 text-white font-display">
            I BUILD DIGITAL<br />
            EXPERIENCES{' '}
            <span className="text-zinc-500 hover:text-zinc-300 transition-colors">
              THAT<br />
              FEEL ALIVE.
            </span>
          </h1>

          {/* Animated phrase */}
          <div className="min-h-[60px] mb-8">
            <p className="text-zinc-400 text-lg sm:text-xl font-medium tracking-tight">
              Crafting{' '}
              <span className="inline-block font-mono text-emerald-400 font-bold border-b border-emerald-500/40 pb-0.5 animate-pulse">
                {PHRASES[currentPhraseIndex]}
              </span>
            </p>
            <p className="text-zinc-500 text-sm mt-1">
              Built from Kashmir for a global digital audience.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={scrollToWork}
              data-cursor="button"
              className="bg-white text-black px-8 py-4 rounded-full text-xs font-bold tracking-[0.2em] flex items-center gap-3 hover:bg-zinc-200 transition-all cursor-pointer group shadow-lg shadow-white/5"
            >
              <span>VIEW MY WORK</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                onOpenInquiry();
              }}
              data-cursor="build"
              className="border border-zinc-700/80 px-8 py-4 rounded-full text-xs font-bold tracking-[0.2em] text-white hover:bg-white/10 hover:border-zinc-500 transition-all cursor-pointer"
            >
              LET'S BUILD
            </button>
          </div>
        </div>

        {/* Right Column: Interactive 3D Environment */}
        <div className="lg:col-span-5 relative flex flex-col justify-center items-center">
          <div className="w-full aspect-square max-w-[480px] relative rounded-2xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-sm overflow-hidden p-2 group shadow-2xl">
            {/* Top Bar Indicator */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 text-[10px] font-mono text-zinc-400 uppercase tracking-widest bg-black/60 px-3 py-1 rounded-full border border-zinc-800/80">
              <Sparkles size={12} className="text-emerald-400" />
              <span>CODE → DESIGN → IDEAS</span>
            </div>

            {/* 3D Canvas */}
            <Hero3DCanvas />

            {/* Bottom Caption */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-center text-[10px] font-mono text-zinc-500 px-2 pointer-events-none">
              <span>[ INTERACTIVE WEBGL MESH ]</span>
              <span>DRAG / HOVER / SCROLL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Watermark Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <span className="text-[280px] font-black tracking-tighter text-white font-display">
          INAM
        </span>
      </div>
    </section>
  );
};
