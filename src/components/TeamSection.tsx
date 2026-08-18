import React from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { Code2, Terminal, ShieldCheck, Sparkles, Layers } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section className="py-24 md:py-36 bg-[#080808] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF]"></span>
              <span className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase font-semibold">
                LEADERSHIP & ENGINEERING
              </span>
            </div>
            <h2 className="font-syne font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
              THE PEOPLE BEHIND <span className="text-[#00F0FF]">CODESPACE.</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-zinc-400 max-w-xs">
            04 specialized engineers & designers building next-generation digital systems.
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="group p-8 rounded-3xl bg-neutral-950 border border-white/10 hover:border-[#00F0FF] transition-all duration-300 flex flex-col justify-between h-[420px] relative overflow-hidden shadow-xl"
            >
              {/* Top Initials Avatar Box */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-white/15 group-hover:border-[#00F0FF] group-hover:bg-[#00F0FF] group-hover:text-black transition-all flex items-center justify-center font-syne font-extrabold text-2xl text-white">
                    {member.initials}
                  </div>
                  <span className="font-mono text-[10px] px-2.5 py-1 rounded bg-black border border-white/10 text-[#00F0FF] font-bold">
                    {member.badge}
                  </span>
                </div>

                <h3 className="font-syne font-extrabold text-3xl text-white uppercase tracking-tight group-hover:text-[#00F0FF] transition-colors">
                  {member.name}
                </h3>

                <div className="font-mono text-xs text-[#00F0FF] font-semibold mt-1">
                  {member.role}
                </div>

                <p className="text-zinc-400 font-sans text-xs leading-relaxed mt-4">
                  {member.specialty}
                </p>
              </div>

              {/* Tech Stack Pills Footer */}
              <div className="pt-4 border-t border-white/10">
                <div className="font-mono text-[10px] text-zinc-500 uppercase mb-2">SPECIALIZATION</div>
                <div className="flex flex-wrap gap-1.5">
                  {member.techs.map((tech) => (
                    <span key={tech} className="font-mono text-[10px] px-2 py-0.5 rounded bg-black border border-white/10 text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
