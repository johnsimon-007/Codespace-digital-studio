import React from 'react';
import { ShieldCheck, Cpu, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

export const TrustAndStats: React.FC = () => {
  const pillars = [
    'PREMIUM DESIGN',
    'RELIABLE DEVELOPMENT',
    'SECURITY CONSCIOUS',
    'SCALABLE SYSTEMS',
    'AUTOMATION',
    'ONGOING SUPPORT'
  ];

  return (
    <section className="py-24 md:py-36 bg-black relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span className="font-mono text-xs text-[#00F0FF] font-bold uppercase tracking-wider">
              HONEST ARCHITECTURE & TRANSPARENCY
            </span>
          </div>
          <h2 className="font-syne font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
            DESIGNED TO IMPRESS. <br />
            <span className="text-[#00F0FF]">BUILT TO WORK.</span>
          </h2>
        </div>

        {/* 6 Trust Pillars Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          {pillars.map((pillar) => (
            <div
              key={pillar}
              className="p-6 rounded-2xl bg-neutral-950 border border-white/10 hover:border-[#00F0FF] transition-colors flex items-center gap-4"
            >
              <div className="w-3 h-3 rounded-full bg-[#00F0FF] shadow-[0_0_10px_rgba(0,240,255,0.6)]"></div>
              <span className="font-syne font-extrabold text-base sm:text-xl text-white uppercase tracking-tight">
                {pillar}
              </span>
            </div>
          ))}
        </div>

        {/* Honest Stats Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8 sm:p-12 rounded-3xl bg-neutral-950 border border-white/15">
          
          <div>
            <div className="font-syne font-extrabold text-4xl sm:text-5xl text-[#00F0FF]">04</div>
            <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider mt-2">SPECIALIZED TEAM MEMBERS</div>
          </div>

          <div>
            <div className="font-syne font-extrabold text-4xl sm:text-5xl text-white">∞</div>
            <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider mt-2">IDEAS TO BUILD</div>
          </div>

          <div>
            <div className="font-syne font-extrabold text-4xl sm:text-5xl text-[#00F0FF]">24/7</div>
            <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider mt-2">AUTOMATED DIGITAL SYSTEMS</div>
          </div>

          <div>
            <div className="font-syne font-extrabold text-4xl sm:text-5xl text-white">01</div>
            <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider mt-2">MISSION: BUILD BETTER DIGITAL EXPERIENCES</div>
          </div>

        </div>

      </div>
    </section>
  );
};
