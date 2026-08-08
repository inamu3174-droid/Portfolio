import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, ArrowRight } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface GlobalAmbitionSectionProps {
  onOpenInquiry: () => void;
}

export const GlobalAmbitionSection: React.FC<GlobalAmbitionSectionProps> = ({ onOpenInquiry }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section className="py-36 px-6 md:px-12 bg-[#050505] text-white border-t border-zinc-900 relative overflow-hidden">
      {/* Background World Sphere Mesh lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full border border-zinc-700 animate-spin-slow" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-zinc-700" />
      </div>

      <div ref={containerRef} className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
        {/* Small Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.3em] text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full"
        >
          <Globe size={14} />
          <span>FROM KASHMIR → TO THE WORLD</span>
        </motion.div>

        {/* Massive Headlines */}
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-7xl font-black font-display tracking-tight text-white leading-none uppercase"
          >
            THE GOAL ISN'T TO BUILD<br />A BIGGER PORTFOLIO.
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl sm:text-5xl md:text-7xl font-black font-display tracking-tight text-zinc-500 leading-none uppercase"
          >
            THE GOAL IS TO BUILD<br />BIGGER THINGS.
          </motion.h2>
        </div>

        {/* Subtext Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-zinc-300 text-lg sm:text-2xl font-medium max-w-2xl mx-auto font-sans leading-relaxed"
        >
          “Open to building with ambitious people, teams and companies around the world.”
        </motion.p>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="pt-6"
        >
          <button
            onClick={() => {
              soundManager.playClick();
              onOpenInquiry();
            }}
            data-cursor="button"
            className="bg-white text-black px-10 py-5 rounded-full text-xs font-bold tracking-[0.2em] inline-flex items-center gap-3 hover:bg-zinc-200 transition-all cursor-pointer shadow-xl shadow-white/5"
          >
            <span>COLLABORATE WITH INAM</span>
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
