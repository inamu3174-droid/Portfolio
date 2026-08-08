import React, { useState } from 'react';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';
import { soundManager } from '../utils/audio';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-[#050505] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase block mb-3">
            CAPABILITIES & OFFERINGS
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white mb-4">
            WHAT I CAN BUILD
          </h2>
        </div>

        {/* Interactive Services List */}
        <div className="space-y-4">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.number}
              onMouseEnter={() => {
                soundManager.playHover();
                setHoveredIndex(idx);
              }}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                soundManager.playClick();
                onSelectService(service.title);
              }}
              data-cursor="build"
              className={`p-8 sm:p-10 rounded-3xl border transition-all cursor-pointer group flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                hoveredIndex === idx
                  ? 'bg-zinc-900 border-white text-white shadow-2xl scale-[1.01]'
                  : 'bg-zinc-950 border-zinc-800/80 text-zinc-300 hover:border-zinc-700'
              }`}
            >
              <div className="flex items-start gap-6 max-w-2xl">
                <span className="text-xl font-mono font-black text-zinc-500 group-hover:text-emerald-400 transition-colors">
                  {service.number}
                </span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-400 font-sans leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex items-center gap-3 shrink-0">
                <button className="px-6 py-3 rounded-full border border-zinc-700 bg-zinc-900/60 text-xs font-bold tracking-widest font-mono text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all flex items-center gap-2">
                  <span>START PROJECT</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
