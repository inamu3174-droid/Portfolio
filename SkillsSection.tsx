import React, { useState } from 'react';
import { Cpu, Terminal, Code2, Sparkles, Check } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { soundManager } from '../utils/audio';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<{ name: string; highlight: string } | null>(
    null
  );

  const activeCategory = SKILLS_DATA[activeCategoryIndex];

  return (
    <section id="skills" className="py-32 px-6 md:px-12 bg-[#050505] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 text-xs font-mono text-emerald-400 tracking-widest uppercase mb-3">
            <Cpu size={14} />
            <span>INTERACTIVE TECH MATRIX</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white mb-4">
            SKILLS & CAPABILITIES
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-normal max-w-xl">
            An interactive typography-based capabilities matrix built around modern web architecture and creative engineering.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-zinc-900 pb-6">
          {SKILLS_DATA.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => {
                soundManager.playClick();
                setActiveCategoryIndex(idx);
              }}
              data-cursor="button"
              className={`px-6 py-3 rounded-full text-xs font-bold tracking-[0.2em] font-mono transition-all cursor-pointer ${
                activeCategoryIndex === idx
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Skill Typography List */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">
              {activeCategory.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeCategory.skills.map((skill) => (
                <div
                  key={skill.name}
                  onMouseEnter={() => {
                    soundManager.playHover();
                    setHoveredSkill(skill);
                  }}
                  className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-emerald-500/50 hover:bg-zinc-900/80 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold font-display text-white group-hover:text-emerald-400 transition-colors">
                      {skill.name}
                    </span>
                    <Sparkles size={14} className="text-zinc-700 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {skill.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Realtime Inspector Overlay */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-zinc-950 border border-zinc-800 relative min-h-[320px] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-6">
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase flex items-center gap-2">
                <Terminal size={13} /> CAPABILITY INSPECTOR
              </span>
              <span className="text-[10px] font-mono text-zinc-600">HOVER TO EXAMINE</span>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              {hoveredSkill ? (
                <div className="space-y-4 animate-in fade-in">
                  <h4 className="text-2xl font-bold font-display text-white">
                    {hoveredSkill.name}
                  </h4>
                  <p className="text-sm font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl">
                    // {hoveredSkill.highlight}
                  </p>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    Tested and refined through real client projects, e-commerce storefronts, and interactive digital experiences.
                  </p>
                </div>
              ) : (
                <div className="text-center text-zinc-600 py-12 space-y-2">
                  <Code2 size={28} className="mx-auto text-zinc-700" />
                  <p className="text-xs font-mono uppercase tracking-widest">
                    Hover over any skill to inspect architectural details.
                  </p>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-zinc-900 text-[10px] font-mono text-zinc-600 flex justify-between">
              <span>INAM UL HAQ / KASHMIR</span>
              <span>100% VERIFIED CRAFT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
