import React, { useState } from 'react';
import { ESTIMATOR_COMPONENTS } from '../data/mockData';
import { Sparkles, Check, ArrowUpRight, X, Send, Calculator } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectEstimatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ isOpen, onClose }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(['est-web', 'est-crm', 'est-ai']);
  const [businessName, setBusinessName] = useState('');
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleComponent = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const selectedComponents = ESTIMATOR_COMPONENTS.filter((c) => selectedIds.includes(c.id));
  const totalWeeks = selectedComponents.reduce((acc, c) => acc + c.estimatedWeeks, 0);

  const handleSendProposal = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    } catch (e) {
      // fallback if canvas blocked
    }
  };

  const generateWhatsAppText = () => {
    const list = selectedComponents.map((c) => `• ${c.name}`).join('%0A');
    return `https://wa.me/918680888188?text=Hello%20CodeSpace%21%20I%20used%20the%20System%20Estimator.%0A%0ABusiness%3A%20${encodeURIComponent(
      businessName || 'My Business'
    )}%0AContact%3A%20${encodeURIComponent(
      phoneOrEmail || 'Not specified'
    )}%0A%0ASelected%20System%20Modules%3A%0A${list}%0A%0AEstimated%20Timeline%3A%20~${totalWeeks}%20weeks`;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-neutral-950 border border-[#00F0FF]/50 rounded-3xl max-w-4xl w-full p-4 sm:p-10 relative shadow-[0_0_50px_rgba(0,240,255,0.2)] my-4 sm:my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-neutral-900 text-zinc-400 hover:text-white hover:bg-neutral-800 transition-colors z-10"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2 font-mono text-[10px] sm:text-xs text-[#00F0FF]">
          <Calculator className="w-4 h-4" />
          <span className="font-bold tracking-widest uppercase">SYSTEM CALCULATOR</span>
        </div>
        
        <h2 className="font-syne font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight mb-2">
          ESTIMATE YOUR <span className="text-[#00F0FF]">DIGITAL SYSTEM</span>
        </h2>
        <p className="text-zinc-400 font-sans text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed max-w-2xl">
          Select the modules required for your business. We will generate a customized scope and architecture blueprint based on your selection.
        </p>

        {/* Component Selector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 sm:mb-8 max-h-[350px] overflow-y-auto pr-1 no-scrollbar pb-4">
          {ESTIMATOR_COMPONENTS.map((comp) => {
            const isSelected = selectedIds.includes(comp.id);
            return (
              <div
                key={comp.id}
                onClick={() => toggleComponent(comp.id)}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start justify-between gap-3 ${
                  isSelected
                    ? 'bg-[#00F0FF]/10 border-[#00F0FF] text-white'
                    : 'bg-neutral-900 border-white/10 text-zinc-400 hover:border-white/30'
                }`}
              >
                <div className="flex-1">
                  <div className="font-syne font-bold text-sm text-white uppercase tracking-tight">{comp.name}</div>
                  <div className="text-[11px] text-zinc-500 mt-1 leading-snug">{comp.description}</div>
                  <div className="font-mono text-[10px] text-[#00F0FF] mt-2 font-bold tracking-wider">
                    EST. ~{comp.estimatedWeeks} WEEK{comp.estimatedWeeks > 1 ? 'S' : ''}
                  </div>
                </div>

                <div className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  isSelected ? 'bg-[#00F0FF] border-[#00F0FF] text-black' : 'border-white/20'
                }`}>
                  {isSelected && <Check className="w-3.5 h-3.5 font-bold" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Footer Bar */}
        <div className="p-4 sm:p-6 rounded-2xl bg-black border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="text-center sm:text-left">
            <div className="font-mono text-[10px] text-zinc-500 font-bold tracking-widest uppercase">TOTAL ESTIMATED TIMELINE</div>
            <div className="font-syne text-xl sm:text-2xl font-extrabold text-[#00F0FF] uppercase tracking-tight">
              ~{totalWeeks} WEEKS DELIVERY
            </div>
            <div className="text-[10px] text-zinc-600 font-mono mt-1 font-bold">{selectedComponents.length} MODULES SELECTED FOR YOUR SYSTEM</div>
          </div>

          <a
            href={generateWhatsAppText()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 bg-[#00F0FF] hover:bg-white text-black font-mono font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-[0_0_20px_rgba(37,211,102,0.2)] flex items-center justify-center gap-2"
          >
            <span>GET THIS ESTIMATE ON WHATSAPP</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Quick Direct Form */}
        {!submitted ? (
          <form onSubmit={handleSendProposal} className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
            <input
              type="text"
              required
              placeholder="Your Business Name"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="bg-black border border-white/20 rounded-xl px-4 py-3 text-xs text-white focus:border-[#00F0FF] focus:outline-none placeholder:text-zinc-600"
            />
            <input
              type="text"
              required
              placeholder="Phone or Email"
              value={phoneOrEmail}
              onChange={(e) => setPhoneOrEmail(e.target.value)}
              className="bg-black border border-white/20 rounded-xl px-4 py-3 text-xs text-white focus:border-[#00F0FF] focus:outline-none placeholder:text-zinc-600"
            />
            <button
              type="submit"
              className="py-3 px-6 bg-[#00F0FF] text-black font-mono font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)]"
            >
              REQUEST BLUEPRINT
            </button>
          </form>
        ) : (
          <div className="p-4 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF] text-center font-mono text-xs text-[#00F0FF] font-bold uppercase tracking-widest">
            ✓ PROPOSAL REQUEST LOGGED. OUR TEAM WILL REACH OUT WITHIN 2 HOURS.
          </div>
        )}

      </div>
    </div>
  );
};
