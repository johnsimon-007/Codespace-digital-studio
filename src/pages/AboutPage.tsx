import React from 'react';
import { TeamSection } from '../components/TeamSection';
import { WhyCodeSpace } from '../components/WhyCodeSpace';
import { ProcessSection } from '../components/ProcessSection';
import { SecuritySection } from '../components/SecuritySection';
import { motion } from 'motion/react';

export const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32 space-y-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h1 className="font-syne font-extrabold text-5xl sm:text-7xl text-white uppercase tracking-tight mb-6">
          THE <span className="text-[#00F0FF]">STUDIO</span>
        </h1>
        <p className="font-sans text-xl text-zinc-400 max-w-2xl leading-relaxed">
          CodeSpace is a specialized digital systems studio. We deconstruct complex business challenges and rebuild them into elegant, automated, and secure digital assets.
        </p>
      </div>
      
      <TeamSection />
      <WhyCodeSpace />
      <ProcessSection />
      <SecuritySection />
    </motion.div>
  );
};
