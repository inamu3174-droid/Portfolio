import React from 'react';
import { Compass, Globe, MapPin } from 'lucide-react';

export const KashmirSection: React.FC = () => {
  return (
    <section
      id="kashmir"
      className="py-32 px-6 md:px-12 bg-gradient-to-b from-[#050505] via-[#090a0f] to-[#050505] relative overflow-hidden border-t border-zinc-900"
    >
      {/* Mountain Silhouette Background (Minimal Vector Graphic) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg
          className="w-full h-full object-cover text-zinc-700"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,202.7C672,192,768,128,864,122.7C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="currentColor"
            fillOpacity="0.4"
          />
        </svg>
      </div>

      {/* Atmospheric Ambient Light Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-500/10 via-indigo-500/10 to-teal-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Geographic Line Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-md mb-10 text-[11px] font-mono text-zinc-400 tracking-widest uppercase">
          <MapPin size={13} className="text-emerald-400 animate-pulse" />
          <span>SRINAGAR, KASHMIR — 34.0837° N, 74.7973° E</span>
        </div>

        {/* Massive Headline */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white font-display leading-[0.95]">
            BUILT FROM KASHMIR.
          </h2>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-zinc-500 font-display leading-[0.95]">
            DESIGNED FOR THE WORLD.
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch mt-12">
          {/* Main Statement Card */}
          <div className="md:col-span-8 p-8 md:p-12 rounded-3xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-xl flex flex-col justify-between group hover:border-zinc-700 transition-all">
            <div>
              <div className="flex items-center gap-3 text-emerald-400 font-mono text-xs tracking-widest uppercase mb-6">
                <Globe size={16} />
                <span>BOUNDLESS CRAFT</span>
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight leading-snug mb-8 font-display">
                “Location doesn't define the scale of the ideas you can build.”
              </p>
            </div>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              Surrounded by mountain peaks in Kashmir, I engineer software that reaches across borders. High-performance code, thoughtful spatial aesthetics, and relentless attention to detail require only discipline, vision, and a connection to the global web.
            </p>
          </div>

          {/* Visual Photography / Coordinates Card */}
          <div className="md:col-span-4 rounded-3xl overflow-hidden border border-zinc-800 relative group flex flex-col justify-between p-8 bg-zinc-950">
            <img
              src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1000&auto=format&fit=crop"
              alt="Kashmir Landscape Ambient Visual"
              className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            <div className="relative z-10">
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase bg-black/60 px-3 py-1 rounded-full border border-zinc-800">
                ORIGIN STORY
              </span>
            </div>

            <div className="relative z-10 mt-24">
              <h3 className="text-xl font-bold text-white font-display mb-2">
                VALLEY OF INNOVATION
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                Blending calm focus with relentless digital ambition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
