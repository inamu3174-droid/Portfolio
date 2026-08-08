import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OpeningLoaderProps {
  onComplete: () => void;
}

export const OpeningLoader: React.FC<OpeningLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1800; // 1.8s crisp cinematic sequence

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculated = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(calculated);

      if (calculated >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => {
            onComplete();
          }, 800); // Allow clip-path reveal animation
        }, 200);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-[#050505] flex flex-col justify-between p-8 sm:p-12 select-none overflow-hidden"
          exit={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        >
          {/* Top Header */}
          <div className="flex justify-between items-center text-[11px] tracking-[0.2em] text-zinc-500 font-mono uppercase">
            <span>SRINAGAR, KASHMIR</span>
            <span>2026 EDITION</span>
          </div>

          {/* Main Title Center */}
          <div className="flex flex-col items-center justify-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white mb-4 font-display"
            >
              INAM UL HAQ
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-sm tracking-[0.3em] text-zinc-400 uppercase font-medium"
            >
              Developer · Designer · Builder
            </motion.p>
          </div>

          {/* Bottom Progress Bar */}
          <div className="w-full space-y-3">
            <div className="flex justify-between items-end text-xs font-mono text-zinc-400">
              <span className="tracking-widest uppercase text-[10px]">INITIALIZING SYSTEM</span>
              <span className="text-sm font-bold text-white">{progress}%</span>
            </div>
            
            <div className="w-full h-[2px] bg-zinc-900 overflow-hidden relative rounded-full">
              <motion.div
                className="h-full bg-white rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
