import React from 'react';
import { saturnPlanet } from '../../assets';

export default function CardStyling({ onClick }) {
  return (
    <div
      className="bento-card"
      style={{ background: 'var(--grad-card-dark)', color: '#FFFFFF' }}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {/* Header */}
      <div className="bento-card-header">
        <div>
          <h3 className="bento-card-title" style={{ color: '#FFFFFF' }}>Styling</h3>
          <p className="bento-card-sub" style={{ color: '#E0E0E0' }}>
            Style everything using familiar, easy-to-use property controls.
          </p>
        </div>
        <div className="bento-arrow-btn" style={{ backgroundColor: '#6E6E6E' }}>
          →
        </div>
      </div>

      {/* Visual Inset: Saturn planet on warm amber tile */}
      <div className="saturn-visual-box">
        <div className="saturn-amber-tile">
          {/* Real Extracted Saturn Asset */}
          <div style={{
            position: 'absolute',
            bottom: '-40px',
            left: '-24px',
            width: '200px',
            height: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src={saturnPlanet}
              alt="Styling 3D Planet"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              onError={(e) => {
                // If image fails, render pure SVG Saturn
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Property badge overlay */}
          <div style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(8px)',
            borderRadius: '6px',
            padding: '4px 10px',
            fontSize: '10px',
            color: '#FFFFFF',
            fontFamily: 'monospace',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}>
            radius: 50%
          </div>
        </div>
      </div>
    </div>
  );
}
