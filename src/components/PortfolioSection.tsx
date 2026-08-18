import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/mockData';
import { PortfolioProject } from '../types';
import { ArrowUpRight, Sparkles, Monitor, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProject: (project: PortfolioProject) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'WEBSITES' | 'SYSTEMS & CRM' | 'AI & AUTOMATION'>('ALL');

  const filteredProjects = PORTFOLIO_PROJECTS.filter(
    (p) => selectedFilter === 'ALL' || p.category === selectedFilter
  );

  return (
    <section id="work" className="py-24 md:py-36 bg-black relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF]"></span>
              <span className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase font-semibold">
                PORTFOLIO & CASE STUDIES
              </span>
            </div>
            <h2 className="font-syne font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
              SELECTED <span className="text-[#00F0FF]">WORK</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {(['ALL', 'WEBSITES', 'SYSTEMS & CRM', 'AI & AUTOMATION'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 font-mono text-xs rounded-full border transition-all ${
                  selectedFilter === cat
                    ? 'bg-[#00F0FF] text-black font-bold border-[#00F0FF]'
                    : 'bg-neutral-900 text-zinc-400 border-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col justify-between bg-neutral-950 rounded-3xl border border-white/10 hover:border-[#00F0FF] overflow-hidden transition-all duration-300 transform hover:-translate-y-1.5 shadow-xl"
              data-cursor="VIEW PROJECT ↗"
            >
              {/* Project Card Image Container */}
              <div className={`w-full h-[280px] sm:h-[340px] bg-gradient-to-br ${project.imagePlaceholderBg} p-8 flex flex-col justify-between relative overflow-hidden`}>
                
                {/* Background Tech Wireframe Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

                {/* Top Badge Row */}
                <div className="flex items-center justify-between relative z-10 font-mono text-xs">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white font-bold">
                    {project.category}
                  </span>
                  <span className="text-zinc-400 font-mono">{project.year}</span>
                </div>

                {/* Center Visual Mockup Box */}
                <div className="relative z-10 my-auto text-center p-6 bg-black/70 backdrop-blur-md rounded-2xl border border-white/15 transform group-hover:scale-105 transition-transform duration-300">
                  <div className="font-syne text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase group-hover:text-[#00F0FF] transition-colors">
                    {project.name}
                  </div>
                  <div className="font-mono text-xs text-zinc-400 mt-1 uppercase">
                    INDUSTRY: {project.industry}
                  </div>
                </div>

                {/* Bottom Deliverables */}
                <div className="flex flex-wrap gap-1.5 relative z-10">
                  {project.deliverables.slice(0, 3).map((d) => (
                    <span key={d} className="font-mono text-[10px] px-2 py-0.5 rounded bg-black/80 border border-white/10 text-zinc-300">
                      {d}
                    </span>
                  ))}
                </div>

              </div>

              {/* Project Metadata & Description Footer */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 border-t border-white/10">
                <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed mb-6">
                  {project.summary}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 font-mono text-xs">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Monitor className="w-4 h-4 text-[#00F0FF]" />
                    <span>INTERACTIVE PROTOTYPE AVAILABLE</span>
                  </div>

                  <span className="text-[#00F0FF] font-bold group-hover:underline flex items-center gap-1">
                    <span>EXPLORE CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
