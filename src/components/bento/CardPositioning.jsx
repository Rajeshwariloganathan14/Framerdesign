import React from 'react';
import { editorialPortrait1, editorialPortrait2 } from '../../assets';

export default function CardPositioning({ onClick }) {
  return (
    <div
      className="bento-card col-span-2"
      onClick={onClick}
      role="button"
      tabIndex={0}
      style={{ cursor: 'pointer' }}
    >
      {/* Header */}
      <div className="bento-card-header">
        <div>
          <h3 className="bento-card-title">Positioning</h3>
          <p className="bento-card-sub">
            Use positioning options to fix navigation bars, sidebars, badges, and backgrounds.
          </p>
        </div>
        <div className="bento-arrow-btn">
          →
        </div>
      </div>

      {/* Visual Inset: Harper Carpenter Mockup */}
      <div className="bento-inset">
        <div className="harper-mockup-box">
          {/* Harper Carpenter Navigation Bar bounded by blue lines */}
          <div className="harper-nav">
            <span className="serif-font" style={{ fontStyle: 'italic', fontWeight: 600, fontSize: '15px', letterSpacing: '-0.02em', color: '#111111' }}>
              Harper Carpenter
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', fontSize: '12px', color: '#4B5563', fontWeight: 500 }}>
              <span style={{ cursor: 'pointer' }}>Projects</span>
              <span style={{ color: '#111111', fontWeight: 600, cursor: 'pointer' }}>About</span>
              <span style={{ cursor: 'pointer' }}>Contact</span>
            </div>
          </div>

          {/* Content Area with overlapping portraits */}
          <div className="harper-portraits-stage">
            {/* Portrait 1: Man in dark tracksuit against orange background */}
            <div style={{
              width: '280px',
              height: '220px',
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
              overflow: 'hidden',
              marginLeft: '24px',
              boxShadow: 'var(--shadow-md)',
              position: 'relative',
              backgroundColor: '#FF7700'
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

            {/* Portrait 2: Woman with afro overlapping lower right */}
            <div style={{
              width: '240px',
              height: '190px',
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
              overflow: 'hidden',
              position: 'absolute',
              right: '48px',
              bottom: '-8px',
              boxShadow: 'var(--shadow-xl)',
              borderTop: '2px solid #FFFFFF',
              borderLeft: '2px solid #FFFFFF',
              backgroundColor: '#1A1A1A',
              zIndex: 10
            }}>
              <img
                src={editorialPortrait2}
                alt="Editorial Portrait"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>

            {/* Floating Badge Indicator */}
            <div style={{
              position: 'absolute',
              top: '12px',
              right: '24px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)',
              border: '1px solid #E5E7EB',
              borderRadius: '9999px',
              padding: '4px 12px',
              fontSize: '11px',
              fontWeight: 500,
              color: '#1F2937',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              zIndex: 20
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }} />
              <span>Pin: Top + Left</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
