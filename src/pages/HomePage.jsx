import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import TutorialModal from '../components/common/TutorialModal';
import HeroSection from '../components/hero/HeroSection';
import BentoSection from '../components/bento/BentoSection';
import StackGridFeature from '../components/features/StackGridFeature';
import FreeformFeature from '../components/features/FreeformFeature';
import FigmaFeature from '../components/features/FigmaFeature';
import BreakpointsFeature from '../components/features/BreakpointsFeature';
import InsertFeature from '../components/features/InsertFeature';
import PinningFeature from '../components/features/PinningFeature';
import StylingFeature from '../components/features/StylingFeature';
import PositioningFeature from '../components/features/PositioningFeature';
import MiniFeatureCards from '../components/features/MiniFeatureCards';
import '../styles/features.css';

export default function HomePage() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    subtitle: ''
  });

  const openTutorial = (title, subtitle) => {
    setModalState({
      isOpen: true,
      title,
      subtitle: subtitle || 'Interactive visual walkthrough and documentation'
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      title: '',
      subtitle: ''
    });
  };

  return (
    <div className="homepage-wrapper">
      {/* 1. Main Navigation Bar */}
      <Navbar onPublishClick={(title) => openTutorial(title, "Publish directly to high-speed global CDN with custom domain support.")} />

      {/* 2. Hero Section with Interactive Editor Mockup */}
      <HeroSection
        onPublishClick={(title) => openTutorial(title, "Publish your project instantly.")}
        onTutorialClick={(title) => openTutorial(title, "Canvas artboard interactive preview.")}
      />

      {/* 3. Feature Bento Grid Section (8 Bento Cards) */}
      <BentoSection onCardClick={openTutorial} />

      {/* 4. In-Depth Features Showcase (8 Sections) */}
      <main className="features-container">
        <StackGridFeature onTutorialClick={openTutorial} />
        <FreeformFeature onTutorialClick={openTutorial} />
        <FigmaFeature onTutorialClick={openTutorial} />
        <BreakpointsFeature onTutorialClick={openTutorial} />
        <InsertFeature onTutorialClick={openTutorial} />
        <PinningFeature onTutorialClick={openTutorial} />
        <StylingFeature onTutorialClick={openTutorial} />
        <PositioningFeature onTutorialClick={openTutorial} />
      </main>

      {/* 5. Mini Feature Cards Grid (5 Vibrant Cards) */}
      <MiniFeatureCards onCardClick={openTutorial} />

      {/* 6. Site Footer */}
      <Footer />

      {/* Interactive Modal */}
      <TutorialModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        subtitle={modalState.subtitle}
      />
    </div>
  );
}
