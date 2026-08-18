import React from 'react';
import { ThreeCanvasHero } from './ThreeCanvasHero';
import { ArrowUpRight, ArrowDown, Cpu, ShieldCheck, Zap } from 'lucide-react';

interface HeroSectionProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartProject, onExploreWork }) => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden bg-grid-pattern border-b border-white/10">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Top Technical Metadata Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-zinc-400 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#00F0FF]"></span>
            <span className="text-white font-semibold tracking-wider">CODESPACE STUDIO // 2026</span>
            <span className="text-zinc-600">|</span>
            <span className="hidden sm:inline-block">DIGITAL SYSTEMS ARCHITECTURE</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-zinc-400 hidden md:inline-block">LATENCY: &lt;1.2ms</span>
            <span className="text-[#00F0FF] font-bold">100% CUSTOM CODE</span>
          </div>
        </div>
      </div>

      {/* Hero Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        
        {/* Left Column: Massive Editorial Typography & Narrative */}
        <div className="lg:col-span-7 flex flex-col z-10">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-6">
            <span className="font-mono text-xs text-[#00F0FF] font-semibold tracking-wide uppercase">
              DESIGN • TECHNOLOGY • AUTOMATION
            </span>
          </div>

          {/* Headline with Editorial Font & Neon Highlight */}
          <h1 className="font-syne font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.92] text-white uppercase mb-8">
            WE BUILD <br />
            <span className="relative inline-block text-[#00F0FF] neon-text-glow">
              DIGITAL SYSTEMS
            </span> <br />
            THAT MOVE <br />
            <span className="underline decoration-[#00F0FF] decoration-4 underline-offset-8">BUSINESS.</span>
          </h1>

          {/* Secondary Description */}
          <p className="text-zinc-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-10 font-sans">
            CodeSpace creates premium websites, digital products, AI-powered experiences, and automated business systems for ambitious businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onStartProject}
              className="group px-8 py-4 bg-[#00F0FF] text-black font-mono font-bold text-sm tracking-wider uppercase rounded-full transition-all duration-300 flex items-center gap-3 shadow-[0_0_30px_rgba(0,240,255,0.35)] hover:bg-white hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] transform hover:-translate-y-1"
              data-cursor="START A PROJECT ↗"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <button
              onClick={onExploreWork}
              className="group px-8 py-4 bg-neutral-900 border border-white/20 hover:border-[#00F0FF] text-white font-mono font-bold text-sm tracking-wider uppercase rounded-full transition-all duration-300 flex items-center gap-3 hover:bg-white/5 transform hover:-translate-y-1"
              data-cursor="EXPLORE WORK ↗"
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1 text-[#00F0FF]" />
            </button>
          </div>
        </div>

        {/* Right Column: 3D Canvas Interactive Viewport */}
        <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[480px] lg:h-[560px] flex items-center justify-center">
          <ThreeCanvasHero />

          {/* Floating Micro Tech Badge 1 */}
          <div className="absolute top-12 -left-4 sm:left-4 z-20 px-3 py-2 rounded-xl bg-neutral-950/90 border border-white/15 backdrop-blur-md shadow-xl flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF]">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <div className="font-mono text-[10px] text-zinc-400">ENGINE</div>
              <div className="font-mono text-xs font-bold text-white">GEMINI AI 2.5 + NODE</div>
            </div>
          </div>

          {/* Floating Micro Tech Badge 2 */}
          <div className="absolute bottom-12 -right-2 sm:right-4 z-20 px-3.5 py-2.5 rounded-xl bg-neutral-950/90 border border-[#00F0FF]/40 backdrop-blur-md shadow-xl flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#00F0FF] text-black font-bold">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="font-mono text-[10px] text-zinc-400">SECURITY ARCHITECTURE</div>
              <div className="font-mono text-xs font-bold text-[#00F0FF]">100% SECURE BY DESIGN</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar: Stats Ticker & Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 pt-8 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          
          <div className="border-l-2 border-[#00F0FF] pl-4">
            <div className="font-syne font-extrabold text-3xl sm:text-4xl text-white">04</div>
            <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider mt-1">CORE TEAM MEMBERS</div>
          </div>

          <div className="border-l-2 border-white/20 pl-4">
            <div className="font-syne font-extrabold text-3xl sm:text-4xl text-white">100%</div>
            <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider mt-1">CUSTOM ARCHITECTURE</div>
          </div>

          <div className="border-l-2 border-white/20 pl-4">
            <div className="font-syne font-extrabold text-3xl sm:text-4xl text-[#00F0FF]">24/7</div>
            <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider mt-1">AUTOMATED SYSTEMS</div>
          </div>

          <div className="flex items-center justify-end col-span-2 md:col-span-1">
            <a
              href="#about"
              className="group font-mono text-xs text-zinc-400 hover:text-[#00F0FF] flex items-center gap-2 transition-colors uppercase tracking-widest"
            >
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown className="w-4 h-4 text-[#00F0FF] animate-bounce" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
