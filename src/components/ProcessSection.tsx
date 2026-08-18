import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/mockData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-24 md:py-36 bg-black relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF]"></span>
            <span className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase font-semibold">
              EXECUTION ROADMAP
            </span>
          </div>
          <h2 className="font-syne font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
            FROM IDEA TO <span className="text-[#00F0FF]">DIGITAL SYSTEM.</span>
          </h2>
          <p className="text-zinc-400 font-sans text-lg mt-4">
            A structured four-phase delivery methodology designed to eliminate scope creep and ensure enterprise reliability.
          </p>
        </div>

        {/* Steps Navigation Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-6 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${
                  isActive
                    ? 'bg-[#00F0FF] text-black border-[#00F0FF] shadow-[0_0_25px_rgba(204,255,0,0.3)]'
                    : 'bg-neutral-950 text-white border-white/10 hover:border-white/30'
                }`}
              >
                <div className={`font-mono text-3xl font-extrabold mb-2 ${isActive ? 'text-black' : 'text-[#00F0FF]'}`}>
                  {step.number}
                </div>
                <div className="font-syne font-extrabold text-lg uppercase tracking-tight">
                  {step.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Details Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-950 border border-white/15 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 font-mono text-xs text-[#00F0FF] mb-3">
              <span>PHASE {activeStep.number} OF 04</span>
              <span>—</span>
              <span className="uppercase">{activeStep.name}</span>
            </div>

            <h3 className="font-syne font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight mb-6">
              {activeStep.description}
            </h3>

            <div className="space-y-3 mb-8">
              {activeStep.details.map((detail, i) => (
                <div key={i} className="flex items-start gap-3 font-sans text-sm text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-[#00F0FF] flex-shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-black p-6 sm:p-8 rounded-2xl border border-white/10">
            <div className="font-mono text-xs text-zinc-400 font-bold uppercase tracking-wider mb-4">
              KEY DELIVERABLES
            </div>
            <div className="space-y-3 font-mono text-xs">
              {activeStep.deliverables.map((deliv, i) => (
                <div key={i} className="p-3 rounded-lg bg-neutral-900 border border-white/10 text-white flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-[#00F0FF]" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
