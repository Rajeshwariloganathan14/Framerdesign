import React from 'react';
import { cafeInterior } from '../../assets';

export default function PinningFeature({ onTutorialClick }) {
  return (
    <section className="feature-block" id="pinning" data-purpose="feature-pinning">
      {/* Glow background */}
      <div className="peach-radial-glow" />

      {/* Text Header & Content */}
      <div className="feature-text-header">
        <h2 className="feature-heading">Pinning</h2>
        <p className="feature-desc">
          Use layout pinning to design more imaginative layouts that scale. With Framer’s pinning feature, you can secure your elements and sections in place, ensuring they adapt to your layout when the viewport size changes. You can even put absolute elements inside stacks and grids, ignoring the flow of things and pinning it to a specific position.
        </p>

        {/* Tutorial Button */}
        <button
          className="tutorial-btn"
          onClick={() => onTutorialClick("Viewport Pinning Tutorial", "Discover layout pinning and sticky positioning for responsive headers and sidebars.")}
        >
          <div className="tutorial-badge-icon" style={{ background: 'linear-gradient(to top right, #F59E0B, #FB7185, #6366F1)' }}>
            <div className="tutorial-badge-overlay">
              <svg width="10" height="10" fill="white" viewBox="0 0 24 24" style={{ marginLeft: '1px' }}>
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
          <span className="tutorial-title">Viewport Pinning Tutorial</span>
          <span className="tutorial-arrow">›</span>
        </button>
      </div>

      {/* Visual Card Showcase */}
      <div className="feature-card-showcase showcase-pinning">
        {/* Inner Cafe Page Canvas with Pin Guides */}
        <div
          className="pinning-inner-canvas"
          style={{
            width: '100%',
            maxWidth: '820px',
            minHeight: '340px',
            backgroundColor: '#FFFFFF',
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
            boxShadow: 'var(--shadow-xl)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid rgba(0, 0, 0, 0.08)'
          }}
        >
          {/* Guide lines */}
          <div style={{ position: 'absolute', left: 0, right: 0, top: '64px', borderBottom: '1px solid #0099FF', zIndex: 10 }} />
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: '33.3%', borderRight: '1px solid #0099FF', zIndex: 10 }} />
          <div style={{ position: 'absolute', top: 0, bottom: 0, right: '112px', borderRight: '1px dashed #0099FF', zIndex: 10 }} />

          {/* Top Mock Header Bar */}
          <div style={{ height: '64px', width: '100%', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', padding: '0 24px' }}>
            <div style={{ width: '128px', height: '16px', backgroundColor: '#E5E7EB', borderRadius: '4px' }} />
          </div>

          {/* Cafe Photography Interior */}
          <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
            <img
              src={cafeInterior}
              alt="Cafe interior layout"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Floating Position Panel */}
          <div
            className="pinning-floating-panel"
            style={{
              position: 'absolute',
              right: '24px',
              top: '24px',
              zIndex: 30,
              width: '180px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(12px)',
              borderRadius: '12px',
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid #E5E7EB',
              padding: '12px',
              fontSize: '11px'
            }}
          >
            <span style={{ fontWeight: 600, color: '#374151', display: 'block', marginBottom: '8px' }}>Position</span>
            <div style={{
              position: 'relative',
              width: '112px',
              height: '112px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #F3F4F6',
              backgroundColor: '#F9FAFB',
              borderRadius: '8px'
            }}>
              <span style={{ position: 'absolute', top: '4px', fontSize: '10px', color: '#4B5563', fontWeight: 600 }}>
                30 <span style={{ color: '#9CA3AF', fontSize: '8px' }}>T</span>
              </span>
              <span style={{ position: 'absolute', bottom: '4px', fontSize: '10px', color: '#4B5563', fontWeight: 600 }}>
                600 <span style={{ color: '#9CA3AF', fontSize: '8px' }}>B</span>
              </span>
              <span style={{ position: 'absolute', left: '4px', fontSize: '10px', color: '#4B5563', fontWeight: 600 }}>
                600 <span style={{ color: '#9CA3AF', fontSize: '8px' }}>L</span>
              </span>
              <span style={{ position: 'absolute', right: '4px', fontSize: '10px', color: '#4B5563', fontWeight: 600 }}>
                30 <span style={{ color: '#9CA3AF', fontSize: '8px' }}>R</span>
              </span>
              <div style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#EFF6FF',
                border: '1px solid #3B82F6',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3B82F6',
                fontWeight: 700
              }}>
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
