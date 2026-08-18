import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { SystemModal } from './components/SystemModal';
import { ProjectEstimator } from './components/ProjectEstimator';
import { ServiceItem, PortfolioProject } from './types';

// Pages
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

function AppContent() {
  const [modalItem, setModalItem] = useState<ServiceItem | PortfolioProject | null>(null);
  const [modalType, setModalType] = useState<'service' | 'project' | null>(null);
  const [estimatorOpen, setEstimatorOpen] = useState<boolean>(false);
  const location = useLocation();

  const handleOpenEstimator = () => setEstimatorOpen(true);

  return (
    <div className="min-h-screen bg-[#050505] text-[#ECECEC] font-sans selection:bg-[#00F0FF] selection:text-black relative overflow-x-hidden">
      <CustomCursor />
      <Navigation onOpenEstimator={handleOpenEstimator} />

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={
              <HomePage 
                onStartProject={() => window.location.href = '/contact'} 
                onSelectProject={(p) => { setModalItem(p); setModalType('project'); }}
                onSelectService={(s) => { setModalItem(s); setModalType('service'); }}
                onOpenEstimator={handleOpenEstimator}
              />
            } />
            <Route path="/work" element={<WorkPage onSelectProject={(p) => { setModalItem(p); setModalType('project'); }} />} />
            <Route path="/services" element={<ServicesPage onSelectService={(s) => { setModalItem(s); setModalType('service'); }} onOpenEstimator={handleOpenEstimator} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />

      <SystemModal
        item={modalItem}
        type={modalType}
        onClose={() => {
          setModalItem(null);
          setModalType(null);
        }}
        onOpenEstimator={() => {
          setModalItem(null);
          setModalType(null);
          setEstimatorOpen(true);
        }}
        onOpenContact={() => {
          setModalItem(null);
          setModalType(null);
          window.location.href = '/contact';
        }}
      />

      <ProjectEstimator
        isOpen={estimatorOpen}
        onClose={() => setEstimatorOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

