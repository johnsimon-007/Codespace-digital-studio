import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { ArrowUpRight, ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }) + ' IST'
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030303] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      
      {/* Footer Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Massive Branding & Tagline */}
        <div className="pb-16 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="font-syne font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-none">
              CODE<span className="text-[#00F0FF]">SPACE</span>
            </div>
            <div className="font-mono text-xs sm:text-sm text-[#00F0FF] tracking-widest uppercase mt-3 font-semibold">
              {COMPANY_INFO.tagline}
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="group px-5 py-3 rounded-full bg-neutral-900 border border-white/15 hover:border-[#00F0FF] hover:bg-[#00F0FF] hover:text-black font-mono text-xs font-bold uppercase transition-all flex items-center gap-2 self-start md:self-auto"
            data-cursor="TOP ↑"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Links & Contact Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-16 border-b border-white/10">
          
          {/* Col 1: Studio Description */}
          <div className="lg:col-span-4 space-y-4">
            <div className="font-mono text-xs text-white font-bold uppercase tracking-widest">
              CODESPACE STUDIO
            </div>
            <p className="font-sans text-sm text-zinc-300 leading-relaxed max-w-sm font-medium">
              CodeSpace creates premium websites, digital products, AI-powered experiences and automated business systems for ambitious businesses.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-white/10 font-mono text-[11px] text-[#00F0FF]">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse"></span>
              <span>TIME: {currentTime || '12:00:00 IST'}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-zinc-400 font-bold uppercase mb-4 tracking-widest">NAVIGATION</div>
            {['WORK', 'SERVICES', 'ABOUT', 'PROCESS', 'SECURITY', 'CONTACT'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-white hover:text-[#00F0FF] transition-colors uppercase tracking-wider py-1 font-semibold"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Col 3: Direct Contact */}
          <div className="lg:col-span-3 space-y-4 font-mono text-xs">
            <div className="text-zinc-400 font-bold uppercase mb-4 tracking-widest">GET IN TOUCH</div>
            <div>
              <div className="text-zinc-500 text-[10px] font-bold tracking-widest mb-1">PHONE / WHATSAPP</div>
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-white hover:text-[#00F0FF] font-black text-xl tracking-tighter">
                {COMPANY_INFO.phone}
              </a>
            </div>
            <div className="pt-2">
              <div className="text-zinc-500 text-[10px] font-bold tracking-widest mb-1">EMAIL</div>
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:text-[#00F0FF] font-black text-lg tracking-tight">
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

          {/* Col 4: Social Channels */}
          <div className="lg:col-span-2 space-y-3 font-mono text-xs">
            <div className="text-zinc-400 font-bold uppercase mb-4 tracking-widest">CONNECT</div>
            {[
              { name: 'WhatsApp', href: `https://wa.me/${COMPANY_INFO.phoneRaw}` },
              { name: 'LinkedIn', href: '#' },
              { name: 'Instagram', href: '#' }
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-white hover:text-[#00F0FF] transition-colors py-1 font-semibold"
              >
                <span>{s.name}</span>
                <ArrowUpRight className="w-3 h-3 text-[#00F0FF]" />
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Security Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-400 font-bold">
          <div>{COMPANY_INFO.copyright}</div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00F0FF]" />
            <span className="uppercase tracking-widest">PROTECTED BY CODESPACE SECURITY ARCHITECTURE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
