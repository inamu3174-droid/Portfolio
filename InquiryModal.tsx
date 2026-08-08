import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { InquiryFormData } from '../types/portfolio';
import { soundManager } from '../utils/audio';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, defaultService }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    serviceType: defaultService || 'Web Experience',
    budget: '$3k - $5k',
    timeline: '1-2 Months',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playClick();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2400);
  };

  return (
    <div className="fixed inset-0 z-[9500] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="w-full max-w-2xl bg-[#09090c] border border-zinc-800 rounded-3xl p-6 sm:p-10 relative shadow-2xl space-y-6">
        {/* Close Button */}
        <button
          onClick={() => {
            soundManager.playClick();
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <>
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 tracking-widest uppercase mb-1">
                <Sparkles size={14} />
                <span>LET'S BUILD SOMETHING TOGETHER</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                PROJECT INQUIRY
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-zinc-400 font-mono block mb-1 uppercase tracking-wider">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Inam Ul Haq"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white focus:outline-none focus:border-emerald-500 font-mono"
                  />
                </div>

                <div>
                  <label className="text-zinc-400 font-mono block mb-1 uppercase tracking-wider">YOUR EMAIL</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white focus:outline-none focus:border-emerald-500 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-zinc-400 font-mono block mb-1 uppercase tracking-wider">SERVICE CATEGORY</label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white focus:outline-none focus:border-emerald-500 font-mono"
                  >
                    <option value="Web Experience">Web Experience</option>
                    <option value="E-Commerce Storefront">E-Commerce Storefront</option>
                    <option value="Personal Portfolio">Personal Portfolio</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Custom Web App">Custom Web App</option>
                    <option value="Creative Technology">Creative Technology</option>
                  </select>
                </div>

                <div>
                  <label className="text-zinc-400 font-mono block mb-1 uppercase tracking-wider">ESTIMATED BUDGET</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white focus:outline-none focus:border-emerald-500 font-mono"
                  >
                    <option value="<$2k">&lt; $2k</option>
                    <option value="$3k - $5k">$3k - $5k</option>
                    <option value="$5k - $10k">$5k - $10k</option>
                    <option value="$10k+">$10k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-zinc-400 font-mono block mb-1 uppercase tracking-wider">PROJECT DETAILS</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about what you want to build, key features, or design goals..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white focus:outline-none focus:border-emerald-500 font-mono resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-4 rounded-full text-xs font-bold tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors cursor-pointer"
              >
                <span>SEND INQUIRY</span>
                <Send size={14} />
              </button>
            </form>
          </>
        ) : (
          /* Success Message */
          <div className="py-12 text-center space-y-4">
            <CheckCircle2 size={48} className="text-emerald-400 mx-auto" />
            <h4 className="text-2xl font-bold font-display text-white">INQUIRY RECEIVED</h4>
            <p className="text-xs text-zinc-400 font-mono max-w-sm mx-auto">
              Thank you {formData.name}! I will personally review your project message and respond within 24 hours.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
