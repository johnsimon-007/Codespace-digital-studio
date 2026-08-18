import React from 'react';
import { ServiceItem, PortfolioProject } from '../types';
import { HeroSection } from '../components/HeroSection';
import { IntroManifesto } from '../components/IntroManifesto';
import { TrustAndStats } from '../components/TrustAndStats';
import { ServicesSection } from '../components/ServicesSection';
import { PortfolioSection } from '../components/PortfolioSection';
import { ContactSection } from '../components/ContactSection';
import { SecuritySection } from '../components/SecuritySection';
import { motion } from 'motion/react';

export const HomePage: React.FC<{ 
  onStartProject: () => void;
  onSelectProject: (p: PortfolioProject) => void;
  onSelectService: (s: ServiceItem) => void;
  onOpenEstimator: () => void;
}> = ({ onStartProject, onSelectProject, onSelectService, onOpenEstimator }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection
        onStartProject={onStartProject}
        onExploreWork={() => {
          const el = document.getElementById('work-preview');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
      
      <div className="space-y-32 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <IntroManifesto />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <TrustAndStats />
        </motion.div>

        <div id="work-preview">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <PortfolioSection onSelectProject={onSelectProject} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <ServicesSection onSelectServiceModal={onSelectService} onOpenEstimator={onOpenEstimator} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <SecuritySection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <ContactSection />
        </motion.div>
      </div>
    </motion.div>
  );
};
