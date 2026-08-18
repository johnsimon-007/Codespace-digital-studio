import React from 'react';
import { WHY_STATEMENTS } from '../data/mockData';
import { Check, Sparkles } from 'lucide-react';

export const WhyCodeSpace: React.FC = () => {
  return (
    <section className="py-24 md:py-36 bg-[#080808] relative border-b border-white/10 overflow-hidden">
      
      {/* Decorative Large Background Typography */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 font-syne font-extrabold text-[120px] sm:text-[200px] text-white/2 pointer-events-none whitespace-nowrap select-none">
        CODESPACE VALUE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF]"></span>
              <span className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase font-semibold">
                OUR DIFFERENCE
              </span>
            </div>
            <h2 className="font-syne font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
              WHY <span className="text-[#00F0FF]">CODESPACE</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-zinc-400 max-w-xs">
            Seven core principles that define how we build every digital system.
          </div>
        </div>

        {/* Sequential Editorial List */}
        <div className="space-y-4">
          {WHY_STATEMENTS.map((statement, idx) => (
            <div
              key={statement}
              className="group p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-white/10 hover:border-[#00F0FF] transition-all duration-300 flex items-center justify-between"
            >
              <div className="flex items-center gap-6">
                <span className="font-mono text-xs sm:text-sm text-[#00F0FF] font-bold">
                  0{idx + 1}
                </span>
                <h3 className="font-syne font-extrabold text-2xl sm:text-3xl md:text-4xl text-white uppercase tracking-tight group-hover:text-[#00F0FF] transition-colors">
                  {statement}
                </h3>
              </div>

              <div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 group-hover:bg-[#00F0FF] group-hover:text-black text-zinc-400 flex items-center justify-center transition-colors">
                <Check className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
