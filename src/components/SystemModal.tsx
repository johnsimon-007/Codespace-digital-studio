import React from 'react';
import { ServiceItem, PortfolioProject } from '../types';
import { X, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, Layers } from 'lucide-react';

interface SystemModalProps {
  item: ServiceItem | PortfolioProject | null;
  type: 'service' | 'project' | null;
  onClose: () => void;
  onOpenEstimator: () => void;
  onOpenContact: () => void;
}

export const SystemModal: React.FC<SystemModalProps> = ({
  item,
  type,
  onClose,
  onOpenEstimator,
  onOpenContact
}) => {
  if (!item || !type) return null;

  const isService = type === 'service';
  const service = isService ? (item as ServiceItem) : null;
  const project = !isService ? (item as PortfolioProject) : null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-neutral-950 border border-[#00F0FF]/50 rounded-3xl max-w-3xl w-full p-6 sm:p-10 relative shadow-[0_0_50px_rgba(204,255,0,0.2)] my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900 text-zinc-400 hover:text-white hover:bg-neutral-800 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Type Badge */}
        <div className="flex items-center gap-2 mb-3 font-mono text-xs text-[#00F0FF]">
          <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse"></span>
          <span>{isService ? 'SYSTEM SERVICE SPECIFICATION' : 'PORTFOLIO CASE STUDY'}</span>
        </div>

        {/* Title */}
        <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight mb-4">
          {item.name}
        </h2>

        {/* Description */}
        <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed mb-8">
          {isService ? service?.fullDesc : project?.summary}
        </p>

        {/* Service Features or Project Deliverables */}
        <div className="space-y-3 mb-8 bg-black p-6 rounded-2xl border border-white/10">
          <div className="font-mono text-xs text-[#00F0FF] font-bold uppercase mb-2">
            {isService ? 'SYSTEM ARCHITECTURE HIGHLIGHTS' : 'PROJECT DELIVERABLES'}
          </div>
          {(isService ? service?.features : project?.deliverables)?.map((feat, i) => (
            <div key={i} className="flex items-start gap-3 font-sans text-xs sm:text-sm text-zinc-200">
              <CheckCircle2 className="w-4 h-4 text-[#00F0FF] flex-shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-8">
          <div className="font-mono text-xs text-zinc-400 font-bold uppercase mb-2">
            ENGINEERED WITH
          </div>
          <div className="flex flex-wrap gap-2">
            {(isService ? service?.tags : project?.techStack)?.map((tech) => (
              <span key={tech} className="font-mono text-xs px-3 py-1 rounded-md bg-neutral-900 border border-white/15 text-[#00F0FF]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-white/10">
          <button
            onClick={() => {
              onClose();
              onOpenEstimator();
            }}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#00F0FF] text-black font-mono font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>ESTIMATE THIS SYSTEM</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="w-full sm:w-auto px-6 py-3.5 bg-neutral-900 border border-white/20 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
          >
            <span>DISCUSS WITH CODESPACE TEAM ↗</span>
          </button>
        </div>

      </div>
    </div>
  );
};
