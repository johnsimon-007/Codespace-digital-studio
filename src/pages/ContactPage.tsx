import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { motion } from 'motion/react';

export const ContactPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h1 className="font-syne font-extrabold text-5xl sm:text-7xl text-white uppercase tracking-tight mb-6">
          INITIATE <span className="text-[#00F0FF]">CONTACT</span>
        </h1>
        <p className="font-sans text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Ready to build your next digital system? Let's discuss your requirements and how we can help you scale.
        </p>
      </div>
      <ContactSection />
    </motion.div>
  );
};
