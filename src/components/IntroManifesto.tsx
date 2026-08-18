import React from 'react';
import { Sparkles, Layers, Cpu, ShieldCheck } from 'lucide-react';

export const IntroManifesto: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 bg-black relative border-b border-white/10 overflow-hidden">
      {/* Decorative Technical Crosshairs */}
      <div className="absolute top-8 left-8 font-mono text-xs text-white/20 pointer-events-none">+ SECTION: MANIFESTO</div>
      <div className="absolute top-8 right-8 font-mono text-xs text-white/20 pointer-events-none">+ CODESPACE_PHILOSOPHY</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Eyebrow Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-12 h-[1px] bg-[#00F0FF]"></span>
          <span className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase font-semibold">
            THE CODESPACE MANIFESTO
          </span>
        </div>

        {/* Massive Editorial Headline */}
        <div className="max-w-5xl">
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-[1.05] mb-10">
            YOUR BUSINESS DESERVES <br className="hidden sm:inline" />
            <span className="text-black bg-[#00F0FF] px-3 py-1 inline-block my-1 font-extrabold">
              MORE THAN A TEMPLATE.
            </span>
          </h2>

          <p className="font-sans text-xl sm:text-2xl md:text-3xl font-light text-zinc-300 leading-relaxed tracking-wide mb-14">
            CodeSpace does not simply create websites. CodeSpace combines design, technology, automation, and intelligent systems to create complete digital experiences that actually work for the business behind them.
          </p>
        </div>

        {/* 4 Pillars of CodeSpace Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
          
          <div className="p-8 rounded-2xl bg-neutral-950 border border-white/10 hover:border-[#00F0FF]/60 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] flex items-center justify-center mb-6 group-hover:bg-[#00F0FF] group-hover:text-black transition-colors">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-syne text-xl font-bold text-white uppercase tracking-tight mb-3">
              COMPLETE DIGITAL SYSTEMS
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
              We connect your website directly to CRMs, booking calendars, WhatsApp APIs, and payment gateways so no lead or customer falls through the cracks.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-neutral-950 border border-white/10 hover:border-[#00F0FF]/60 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] flex items-center justify-center mb-6 group-hover:bg-[#00F0FF] group-hover:text-black transition-colors">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-syne text-xl font-bold text-white uppercase tracking-tight mb-3">
              INTELLIGENT AUTOMATION
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
              Eliminate repetitive manual tasks. Deploy 24/7 AI chatbots, AI receptionists, and WhatsApp automated communication flows that run effortlessly.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-neutral-950 border border-white/10 hover:border-[#00F0FF]/60 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] flex items-center justify-center mb-6 group-hover:bg-[#00F0FF] group-hover:text-black transition-colors">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-syne text-xl font-bold text-white uppercase tracking-tight mb-3">
              SECURITY BY ARCHITECTURE
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
              Every system we engineer is hardened with enterprise security best practices: encrypted API proxies, role-based auth, rate limiting, and OWASP defense.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
