import React from 'react';
import { editorialPortrait1, editorialPortrait2 } from '../../assets';

export default function PositioningFeature({ onTutorialClick }) {
  return (
    <section className="feature-block" id="positioning" data-purpose="feature-positioning">
      {/* Glow background */}
      <div className="peach-radial-glow" />

      {/* Text Header & Content */}
      <div className="feature-text-header">
        <h2 className="feature-heading">Positioning</h2>
        <p className="feature-desc">
          Use positioning options to fix navigation bars, sidebars, badges, and backgrounds. Pin layers to the Viewport regardless of your page set-up, or use absolute positioning within Stacks to break out of its flow.
        </p>

        {/* Tutorial Button */}
        <button
          className="tutorial-btn"
          onClick={() => onTutorialClick("Positioning Tutorial", "Learn absolute and fixed viewport positioning inside Stacks and Grids.")}
        >
          <div className="tutorial-badge-icon" style={{ background: 'linear-gradient(to top right, #F59E0B, #FB7185, #6366F1)' }}>
            <div className="tutorial-badge-overlay">
              <svg width="10" height="10" fill="white" viewBox="0 0 24 24" style={{ marginLeft: '1px' }}>
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
          <span className="tutorial-title">Positioning Tutorial</span>
          <span className="tutorial-arrow">›</span>
        </button>
      </div>

      {/* Visual Card Showcase */}
      <div className="feature-card-showcase showcase-positioning">
        {/* Inner Website Canvas with Editorial Photography */}
        <div style={{
          width: '820px',
          height: '350px',
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
          boxShadow: 'var(--shadow-xl)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid rgba(0, 0, 0, 0.08)'
        }}>
          {/* Harper Carpenter Header */}
          <div style={{
            height: '64px',
            padding: '0 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(42, 160, 255, 0.6)',
            backgroundColor: '#FFFFFF'
          }}>
            <span className="serif-font" style={{ fontSize: '24px', letterSpacing: 'normal', color: '#000000', fontWeight: 600 }}>
              Harper Carpenter
            </span>
          </div>

          {/* Editorial Photography Composition */}
          <div style={{ flex: 1, position: 'relative', display: 'flex' }}>
            {/* Left Portrait: Man in Tracksuit against orange background */}
            <div style={{
              width: '50%',
              height: '100%',
              backgroundColor: '#F59E0B',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              <div style={{
                width: '190px',
                height: '220px',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)'
              }}>
                <img
                  src={editorialPortrait1}
                  alt="Tracksuit Model"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* Right Portrait: Woman with Afro in Red Top */}
            <div style={{
              width: '50%',
              height: '100%',
              backgroundColor: '#FFFFFF',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              <div style={{
                width: '220px',
                height: '250px',
                marginLeft: '-64px',
                zIndex: 10,
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                border: '2px solid rgba(255, 255, 255, 0.8)'
              }}>
                <img
                  src={editorialPortrait2}
                  alt="Editorial Model"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Floating Position Panel with Fixed Selector */}
          <div style={{
            position: 'absolute',
            right: '24px',
            top: '24px',
            zIndex: 30,
            width: '190px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)',
            borderRadius: '12px',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid #E5E7EB',
            padding: '14px',
            fontSize: '11px'
          }}>
            <span style={{ fontWeight: 600, color: '#374151', display: 'block', marginBottom: '8px' }}>Position</span>
            <div style={{
              position: 'relative',
              width: '112px',
              height: '112px',
              margin: '0 auto 12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #F3F4F6',
              backgroundColor: '#F9FAFB',
              borderRadius: '8px'
            }}>
              <span style={{ position: 'absolute', top: '4px', fontSize: '10px', color: '#4B5563', fontWeight: 600 }}>
                0 <span style={{ color: '#9CA3AF', fontSize: '8px' }}>T</span>
              </span>
              <span style={{ position: 'absolute', bottom: '4px', fontSize: '10px', color: '#4B5563', fontWeight: 600 }}>
                700 <span style={{ color: '#9CA3AF', fontSize: '8px' }}>B</span>
              </span>
              <span style={{ position: 'absolute', left: '4px', fontSize: '10px', color: '#4B5563', fontWeight: 600 }}>
                0 <span style={{ color: '#9CA3AF', fontSize: '8px' }}>L</span>
              </span>
              <span style={{ position: 'absolute', right: '4px', fontSize: '10px', color: '#4B5563', fontWeight: 600 }}>
                0 <span style={{ color: '#9CA3AF', fontSize: '8px' }}>R</span>
              </span>
              <div style={{
                width: '28px',
                height: '28px',
                backgroundColor: '#DBEAFE',
                borderRadius: '4px',
                border: '1px solid #60A5FA'
              }} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#6B7280', paddingTop: '6px', borderTop: '1px solid #F3F4F6' }}>
              <span>Type</span>
              <span style={{ backgroundColor: '#F3F4F6', padding: '2px 8px', borderRadius: '4px', color: '#1F2937', fontWeight: 600 }}>
                Fixed ⌄
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
