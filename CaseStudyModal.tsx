import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Eye, Award, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';
import { StrideDemo } from './demos/StrideDemo';
import { AmazonDemo } from './demos/AmazonDemo';
import { LuminaDemo } from './demos/LuminaDemo';
import { AiLabDemo } from './demos/AiLabDemo';
import { soundManager } from '../utils/audio';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const renderInteractiveDemo = () => {
    switch (project.demoType) {
      case 'ecommerce-stride':
        return <StrideDemo />;
      case 'ecommerce-amazon':
        return <AmazonDemo />;
      case 'creative-lumina':
        return <LuminaDemo />;
      case 'ai-experiments':
        return <AiLabDemo />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[9000] bg-black/90 backdrop-blur-2xl overflow-y-auto p-4 sm:p-6 md:p-12 animate-in fade-in duration-300">
      <div className="max-w-5xl mx-auto bg-[#08080a] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl my-8 relative">
        {/* Top Floating Close Button */}
        <button
          onClick={() => {
            soundManager.playClick();
            onClose();
          }}
          className="sticky top-6 right-6 ml-auto mr-6 z-50 p-3 rounded-full bg-zinc-900 border border-zinc-700 text-white hover:bg-white hover:text-black transition-all cursor-pointer flex items-center gap-2 text-xs font-mono font-bold"
        >
          <span>CLOSE</span>
          <X size={16} />
        </button>

        {/* Modal Banner Hero */}
        <div className="p-8 sm:p-12 border-b border-zinc-800 relative bg-gradient-to-b from-zinc-900/80 to-transparent">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
              CASE STUDY {project.number}
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs font-mono text-zinc-400">{project.year}</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white mb-4">
            {project.title}
          </h2>

          <p className="text-zinc-400 text-lg sm:text-xl font-medium max-w-2xl leading-relaxed">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Structured Case Study Content */}
        <div className="p-8 sm:p-12 space-y-16">
          {/* Section 1: THE IDEA */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-emerald-400 font-mono text-xs tracking-widest uppercase">
              <Layers size={16} />
              <span>THE IDEA</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-white">
              What Problem Was Being Solved?
            </h3>
            <p className="text-zinc-300 text-base leading-relaxed max-w-3xl">
              {project.idea}
            </p>
          </div>

          {/* Section 2: THE APPROACH */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-emerald-400 font-mono text-xs tracking-widest uppercase">
              <Eye size={16} />
              <span>THE APPROACH</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-white">
              How Was It Designed?
            </h3>
            <p className="text-zinc-300 text-base leading-relaxed max-w-3xl">
              {project.approach}
            </p>
          </div>

          {/* Section 3: THE BUILD */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-emerald-400 font-mono text-xs tracking-widest uppercase">
              <Cpu size={16} />
              <span>THE BUILD</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-white">
              Technology & Implementation
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.build.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex gap-3 items-start"
                >
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: THE EXPERIENCE (Interactive Demo Container) */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3 text-emerald-400 font-mono text-xs tracking-widest uppercase">
                <Sparkles size={16} />
                <span>THE EXPERIENCE</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase">
                INTERACTIVE DEMO ACTIVE
              </span>
            </div>
            <h3 className="text-2xl font-bold font-display text-white">
              Live Interactive Demonstration
            </h3>

            {/* Embedded Live Component */}
            {renderInteractiveDemo()}
          </div>

          {/* Section 5: THE RESULT */}
          <div className="space-y-4 pt-6 border-t border-zinc-800">
            <div className="flex items-center gap-3 text-emerald-400 font-mono text-xs tracking-widest uppercase">
              <Award size={16} />
              <span>THE RESULT</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-white">
              What Was Achieved
            </h3>
            <p className="text-zinc-300 text-base leading-relaxed max-w-3xl">
              {project.result}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-8 bg-zinc-950 border-t border-zinc-800 flex flex-wrap justify-between items-center gap-4">
          <span className="text-xs font-mono text-zinc-500">
            PROJECT CASE STUDY — INAM UL HAQ
          </span>

          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
              >
                <Github size={14} />
                <span>GITHUB REPO</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold tracking-widest hover:bg-zinc-200 transition-colors cursor-pointer"
            >
              DONE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
