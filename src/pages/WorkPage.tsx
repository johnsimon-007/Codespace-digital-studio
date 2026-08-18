import React from 'react';
import { PortfolioSection } from '../components/PortfolioSection';
import { motion } from 'motion/react';
import { PortfolioProject } from '../types';

export const WorkPage: React.FC<{ onSelectProject: (p: PortfolioProject) => void }> = ({ onSelectProject }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h1 className="font-syne font-extrabold text-5xl sm:text-7xl text-white uppercase tracking-tight mb-6">
          SELECTED <span className="text-[#00F0FF]">WORK</span>
        </h1>
        <p className="font-sans text-xl text-zinc-400 max-w-2xl leading-relaxed">
          A showcase of premium digital systems, SaaS platforms, and editorial web experiences built for high-growth businesses.
        </p>
      </div>
      <PortfolioSection onSelectProject={onSelectProject} />
    </motion.div>
  );
};
