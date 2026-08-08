import React, { useState } from 'react';
import { Lightbulb, Compass, Code, Rocket, ArrowRight } from 'lucide-react';
import { soundManager } from '../utils/audio';

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'IDEA',
    subtitle: 'Everything starts with a question.',
    description: 'Deconstructing core objectives, defining target audiences, and identifying what makes the experience uniquely memorable before writing a single line of code.',
    icon: Lightbulb
  },
  {
    number: '02',
    title: 'DESIGN',
    subtitle: 'Turn the idea into an experience.',
    description: 'Sculpting typography scales, color palettes, micro-interactions, and spatial layouts to build a cohesive visual system with clear emotional resonance.',
    icon: Compass
  },
  {
    number: '03',
    title: 'BUILD',
    subtitle: 'Transform design into working technology.',
    description: 'Engineering bulletproof React components, WebGL shaders, server proxy routes, and state machines optimized for sub-100ms response times.',
    icon: Code
  },
  {
    number: '04',
    title: 'SHIP',
    subtitle: 'Put it into the real world.',
    description: 'Deploying to high-availability global edge networks, verifying Lighthouse metrics, testing across devices, and launching with confidence.',
    icon: Rocket
  }
];

export const BuilderProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-32 px-6 md:px-12 bg-[#050505] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase block mb-3">
            THE BUILDER PROCESS
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white mb-4">
            HOW I TURN CONCEPTS INTO REALITY
          </h2>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const IconComp = step.icon;
            const isActive = activeStep === idx;

            return (
              <div
                key={step.number}
                onClick={() => {
                  soundManager.playClick();
                  setActiveStep(idx);
                }}
                onMouseEnter={() => soundManager.playHover()}
                className={`p-8 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between group ${
                  isActive
                    ? 'bg-zinc-900 border-emerald-500 shadow-xl shadow-emerald-500/5'
                    : 'bg-zinc-950 border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-2xl font-black font-mono text-zinc-500 group-hover:text-emerald-400 transition-colors">
                      {step.number}
                    </span>
                    <IconComp size={22} className={isActive ? 'text-emerald-400' : 'text-zinc-600'} />
                  </div>

                  <h3 className="text-2xl font-bold font-display text-white mb-2">{step.title}</h3>
                  <p className="text-xs font-mono text-emerald-400 font-bold mb-4">{step.subtitle}</p>
                </div>

                <p className="text-xs text-zinc-400 font-sans leading-relaxed pt-4 border-t border-zinc-800/60">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
