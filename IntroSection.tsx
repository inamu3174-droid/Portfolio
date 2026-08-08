import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export const IntroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const headingWords = ["I'M", "INAM."];
  const statementWords = [
    "A", "DEVELOPER", "WHO", "LIKES", "TO", "TURN",
    "IDEAS", "INTO", "EXPERIENCES."
  ];

  return (
    <section className="py-28 px-6 md:px-12 bg-[#050505] border-t border-zinc-900 relative overflow-hidden">
      <div ref={containerRef} className="max-w-5xl mx-auto">
        {/* Word-by-word Reveal Section */}
        <div className="mb-12">
          {/* Headline 1 */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 font-display">
            {headingWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Headline 2 */}
          <div className="flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-2 text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-300 font-display leading-tight">
            {statementWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                className={word === 'EXPERIENCES.' ? 'text-white underline decoration-emerald-500/50 underline-offset-8' : ''}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Short Personal Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md max-w-3xl"
        >
          <p className="text-zinc-300 text-lg sm:text-xl font-normal leading-relaxed">
            I design and build modern websites, e-commerce experiences and digital products with a focus on interaction, performance and visual storytelling.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
