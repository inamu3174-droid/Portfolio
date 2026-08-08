import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const PhilosophySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const tenets = [
    'Design is not decoration.',
    'Motion is not noise.',
    'Technology is not the experience.',
    'The experience is the experience.'
  ];

  return (
    <section className="py-36 px-6 md:px-12 bg-black text-white border-t border-zinc-900 relative overflow-hidden">
      <div ref={containerRef} className="max-w-6xl mx-auto space-y-24">
        {/* Massive Headline Statements */}
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black font-display tracking-tighter text-white leading-none"
          >
            “DON'T JUST MAKE IT WORK.”
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black font-display tracking-tighter text-zinc-500 leading-none"
          >
            “MAKE PEOPLE REMEMBER IT.”
          </motion.h2>
        </div>

        {/* Independent Tenet Sentences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-zinc-900">
          {tenets.map((tenet, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + idx * 0.15 }}
              className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900 flex items-center gap-4"
            >
              <span className="text-xs font-mono font-bold text-emerald-400">0{idx + 1}</span>
              <p className="text-lg sm:text-xl font-bold font-display text-zinc-200">
                {tenet}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
