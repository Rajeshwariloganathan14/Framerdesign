import React from 'react';
import { cafeInterior } from '../../assets';

export default function CardPinning({ onClick }) {
  return (
    <div
      className="bento-card"
      style={{ backgroundColor: '#FFFBF3' }}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {/* Header */}
      <div className="bento-card-header">
        <div>
          <h3 className="bento-card-title">Pinning</h3>
          <p className="bento-card-sub">
            Use layout pinning to design smarter layouts that scale.
          </p>
        </div>
        <div className="bento-arrow-btn">
          →
        </div>
      </div>

      {/* Visual Inset */}
      <div className="bento-inset">
        <div className="pinning-visual-frame">
          <div className="pinning-image-container">
            {/* Real Cafe Interior Image or Stylized Architecture Scene */}
            <img
              src={cafeInterior}
              alt="Cafe layout preview"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                // Fallback SVG if asset path has issue
                e.target.style.display = 'none';
              }}
            />

            {/* Blue Pinning Guide Lines */}
            <div className="pin-guide-h" style={{ top: '28px' }} />
            <div className="pin-guide-h" style={{ bottom: '28px' }} />
            <div className="pin-guide-v" style={{ left: '28px' }} />
            <div className="pin-guide-v" style={{ right: '28px' }} />

            {/* White Floating Position Panel */}
            <div className="pinning-position-widget">
              <div style={{ fontSize: '11px', fontWeight: 600, color: '#1F2937', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Position</span>
                <span style={{ fontSize: '9px', color: 'var(--color-primary)', fontWeight: 400 }}>Fixed</span>
              </div>

              {/* Cross Layout Controller */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', fontSize: '10px', fontFamily: 'monospace' }}>
                {/* Top Input */}
                <div style={{ backgroundColor: '#F3F4F6', padding: '2px 8px', borderRadius: '4px', color: '#4B5563', border: '1px solid #E5E7EB' }}>
                  30
                </div>

                {/* Left - Center - Right */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ backgroundColor: '#F3F4F6', padding: '2px 6px', borderRadius: '4px', color: '#4B5563', border: '1px solid #E5E7EB' }}>
                    600
                  </div>

                  <div style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'rgba(0, 153, 255, 0.15)',
                    border: '1px solid var(--color-primary)',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--color-primary)', borderRadius: '50%' }} />
                  </div>

                  <div style={{ backgroundColor: '#F3F4F6', padding: '2px 6px', borderRadius: '4px', color: '#4B5563', border: '1px solid #E5E7EB' }}>
                    600
                  </div>
                </div>

                {/* Bottom Input */}
                <div style={{ backgroundColor: '#F3F4F6', padding: '2px 8px', borderRadius: '4px', color: '#4B5563', border: '1px solid #E5E7EB' }}>
                  30
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
