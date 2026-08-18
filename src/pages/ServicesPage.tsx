import React from 'react';
import { ServicesSection } from '../components/ServicesSection';
import { EcosystemSection } from '../components/EcosystemSection';
import { motion } from 'motion/react';
import { ServiceItem } from '../types';

export const ServicesPage: React.FC<{
  onSelectService: (s: ServiceItem) => void;
  onOpenEstimator: () => void;
}> = ({ onSelectService, onOpenEstimator }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h1 className="font-syne font-extrabold text-5xl sm:text-7xl text-white uppercase tracking-tight mb-6">
          SYSTEM <span className="text-[#00F0FF]">CAPABILITIES</span>
        </h1>
        <p className="font-sans text-xl text-zinc-400 max-w-2xl leading-relaxed">
          From custom SaaS architecture to AI-powered automation, we build the digital infrastructure your business needs to scale.
        </p>
      </div>
      <ServicesSection onSelectServiceModal={onSelectService} onOpenEstimator={onOpenEstimator} />
      <div className="py-24">
        <EcosystemSection />
      </div>
    </motion.div>
  );
};
