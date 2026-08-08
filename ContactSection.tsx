import React, { useState } from 'react';
import { Mail, Github, Linkedin, Instagram, ArrowRight, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface ContactSectionProps {
  onOpenInquiry: () => void;
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenInquiry, preselectedService }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    soundManager.playClick();
    navigator.clipboard.writeText('inamulhaq0557@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-36 px-6 md:px-12 bg-[#030303] text-white border-t border-zinc-900 relative overflow-hidden">
      {/* Background Subtle Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Massive Headline */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-mono text-emerald-400 tracking-[0.3em] uppercase bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full inline-block">
            START A CONVERSATION
          </span>

          <h2 className="text-5xl sm:text-7xl md:text-9xl font-black font-display tracking-tighter text-white">
            HAVE AN IDEA?
          </h2>

          <h3 className="text-4xl sm:text-6xl md:text-8xl font-black font-display tracking-tighter text-zinc-500">
            LET'S BUILD IT.
          </h3>
        </div>

        {/* Magnetic CTA & Direct Contact Options */}
        <div className="flex flex-col items-center justify-center space-y-12">
          {/* Main Magnetic Button */}
          <button
            onClick={() => {
              soundManager.playClick();
              onOpenInquiry();
            }}
            data-cursor="build"
            className="group relative bg-white text-black px-12 py-6 rounded-full text-sm font-extrabold tracking-[0.25em] flex items-center gap-4 hover:bg-zinc-200 transition-all cursor-pointer shadow-2xl hover:scale-105 active:scale-95"
          >
            <span>START A CONVERSATION</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>

          {/* Email Copy Card */}
          <div className="p-4 rounded-full bg-zinc-900/80 border border-zinc-800 flex items-center gap-4 px-6 text-xs font-mono">
            <Mail size={16} className="text-emerald-400" />
            <span className="text-zinc-300">inamulhaq0557@gmail.com</span>
            <button
              onClick={handleCopyEmail}
              className="ml-2 text-[10px] font-bold text-emerald-400 hover:text-white transition-colors cursor-pointer"
            >
              {copiedEmail ? 'COPIED!' : 'COPY EMAIL'}
            </button>
          </div>

          {/* Social Links Bar */}
          <div className="flex items-center gap-8 text-xs font-mono text-zinc-400 tracking-widest uppercase pt-6">
            <a
              href="https://github.com/inamulhaq"
              target="_blank"
              rel="noreferrer"
              onClick={() => soundManager.playClick()}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Github size={16} />
              <span>GITHUB</span>
            </a>

            <a
              href="https://linkedin.com/in/inamulhaq"
              target="_blank"
              rel="noreferrer"
              onClick={() => soundManager.playClick()}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Linkedin size={16} />
              <span>LINKEDIN</span>
            </a>

            <a
              href="https://instagram.com/inamulhaq"
              target="_blank"
              rel="noreferrer"
              onClick={() => soundManager.playClick()}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Instagram size={16} />
              <span>INSTAGRAM</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
