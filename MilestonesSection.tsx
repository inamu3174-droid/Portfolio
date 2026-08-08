import React from 'react';
import { Flag, Award, Calendar } from 'lucide-react';
import { MILESTONES_DATA } from '../data/portfolioData';

export const MilestonesSection: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#050505] border-t border-zinc-900 relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 text-xs font-mono text-emerald-400 tracking-widest uppercase mb-3">
            <Flag size={14} />
            <span>VERIFIED MILESTONES</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white mb-4">
            JOURNEY & PROGRESSION
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-lg">
            A timeline of genuine growth, shipped applications, and continuous engineering discipline.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-zinc-800 pl-6 md:pl-10 space-y-12 ml-4">
          {MILESTONES_DATA.map((item) => (
            <div key={item.year} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-2 border-emerald-500 group-hover:scale-125 transition-transform" />

              <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {item.year} — {item.tag}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">{item.subtitle}</span>
                </div>

                <h3 className="text-2xl font-bold font-display text-white group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-400 font-sans leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
