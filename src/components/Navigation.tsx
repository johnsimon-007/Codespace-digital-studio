import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../data/mockData';
import { Menu, X, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

interface NavigationProps {
  onOpenEstimator: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenEstimator }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { id: 'home', label: 'HOME', href: '/' },
    { id: 'work', label: 'WORK', href: '/work' },
    { id: 'services', label: 'SERVICES', href: '/services' },
    { id: 'about', label: 'ABOUT', href: '/about' },
    { id: 'contact', label: 'CONTACT', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-black/80 backdrop-blur-md border-b border-white/10 shadow-2xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Operational Status */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="group flex items-center gap-2 focus:outline-none"
            data-cursor="CODESPACE"
          >
            <span className="font-syne font-extrabold text-2xl tracking-tighter text-white group-hover:text-[#00F0FF] transition-colors">
              CODE<span className="text-[#00F0FF]">SPACE</span>
            </span>
            <span className="font-mono text-[9px] px-1.5 py-0.5 rounded border border-[#00F0FF]/40 bg-[#00F0FF]/10 text-[#00F0FF] hidden sm:inline-block">
              2026
            </span>
          </Link>

          {/* Operational Status Pill */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 border border-white/10 text-[11px] font-mono text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
            </span>
            <span className="text-white font-medium uppercase">SYSTEMS SECURED</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-neutral-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.id}
                to={link.href}
                className={`px-4 py-1.5 text-xs font-mono tracking-wider transition-all rounded-full relative ${
                  isActive
                    ? 'text-black font-bold bg-[#00F0FF] shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Estimator Button */}
          <button
            onClick={onOpenEstimator}
            className="px-3.5 py-2 text-xs font-mono tracking-wider text-zinc-300 hover:text-white bg-neutral-900 border border-white/15 hover:border-[#00F0FF]/60 rounded-full transition-all flex items-center gap-1.5 group"
            data-cursor="CALCULATE"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00F0FF] group-hover:rotate-12 transition-transform" />
            <span>ESTIMATE SYSTEM</span>
          </button>

          {/* Let's Talk CTA */}
          <Link
            to="/contact"
            className="group px-5 py-2.5 text-xs font-mono font-bold tracking-wider text-black bg-[#00F0FF] hover:bg-white rounded-full transition-all duration-200 flex items-center gap-1.5 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transform hover:-translate-y-0.5"
            data-cursor="LET'S TALK"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-zinc-300 hover:text-white bg-neutral-900 border border-white/10 rounded-lg lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#00F0FF]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-neutral-950/98 border-b border-white/10 p-6 backdrop-blur-xl flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs text-zinc-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse"></span>
              CODESPACE STUDIO
            </span>
            <span>{COMPANY_INFO.phone}</span>
          </div>

          <div className="flex flex-col gap-2 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-syne text-2xl font-bold tracking-tight text-white hover:text-[#00F0FF] py-2 flex items-center justify-between border-b border-white/5"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 text-zinc-500" />
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full py-3 text-xs font-mono font-semibold bg-neutral-900 border border-white/20 text-white rounded-xl flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#00F0FF]" />
              ESTIMATE SYSTEM COST & SCOPE
            </button>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 text-xs font-mono font-bold bg-[#00F0FF] text-black rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
            >
              <span>LET'S TALK ↗</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
