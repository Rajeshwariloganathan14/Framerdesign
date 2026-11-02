import React from 'react';
import EditorMockup from './EditorMockup';
import '../../styles/hero.css';

export default function HeroSection({ onPublishClick, onTutorialClick }) {
  return (
    <main className="hero-main" data-purpose="hero-section">
      {/* Ambient Radial Background Glow */}
      <div className="hero-glow-layer" />

      {/* Category Pill Badge */}
      <div className="category-pill-badge">
        DESIGN &amp; LAYOUT
      </div>

      {/* Main Title */}
      <h1 className="hero-title">
        Design sites faster.
      </h1>

      {/* Subtitle */}
      <p className="hero-subtitle">
        Design your site on a familiar free-form canvas. Visually set up your breakpoints to make it responsive.
      </p>

      {/* Framer Editor Canvas Mockup */}
      <section className="editor-mockup-wrapper">
        <EditorMockup
          onPublishClick={onPublishClick}
          onTutorialClick={onTutorialClick}
        />
      </section>
    </main>
  );
}
