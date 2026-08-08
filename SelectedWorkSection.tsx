import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Layers } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { CaseStudyModal } from './CaseStudyModal';
import { soundManager } from '../utils/audio';

export const SelectedWorkSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-900 pb-8">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-emerald-400 tracking-widest uppercase mb-3">
              <Layers size={14} />
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white">
              SELECTED WORK
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base font-normal max-w-md">
            A collection of things I've designed, developed and shipped.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                soundManager.playClick();
                setActiveProject(project);
              }}
              data-cursor="view"
              data-cursor-text="VIEW"
              className="group relative rounded-3xl bg-zinc-950 border border-zinc-800/80 overflow-hidden cursor-pointer transition-all duration-500 hover:border-zinc-600 hover:shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                {/* Left: Metadata & Descriptions */}
                <div className="lg:col-span-5 p-8 sm:p-12 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold tracking-widest text-zinc-500">
                      {project.number} — {project.category}
                    </span>
                    <span className="text-zinc-700">•</span>
                    <span className="text-xs font-mono text-zinc-500">{project.year}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    {project.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-2 text-xs font-bold tracking-widest text-white group-hover:text-emerald-400 transition-colors">
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

                {/* Right: Visual Artwork Frame */}
                <div className="lg:col-span-7 aspect-video relative overflow-hidden bg-zinc-900 p-4 sm:p-8 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 filter saturate-[0.9] group-hover:saturate-100"
                  />

                  {/* Top-Right Badge */}
                  <div className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-black/40 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};
