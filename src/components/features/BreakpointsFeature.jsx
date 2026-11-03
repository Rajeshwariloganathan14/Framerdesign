import React from 'react';

export default function BreakpointsFeature({ onTutorialClick }) {
  return (
    <section className="feature-block" id="breakpoints" data-purpose="feature-breakpoints">
      {/* Glow background */}
      <div className="peach-radial-glow" />

      {/* Text Header & Content */}
      <div className="feature-text-header">
        <h2 className="feature-heading">Breakpoints</h2>
        <p className="feature-desc">
          Breakpoints in Framer allow you to create responsive designs that adapt to different screen sizes, ensuring an optimal experience on any device. Breakpoints are visible on the canvas side by side; this allows you to compare and adapt faster than any visual site builder.
        </p>

        {/* Tutorial Button */}
        <button
          className="tutorial-btn"
          onClick={() => onTutorialClick("Responsive Design Tutorial", "Master breakpoints and responsive site building side-by-side in Framer.")}
        >
          <div className="tutorial-badge-icon" style={{ background: 'linear-gradient(to top right, #A855F7, #818CF8, #EC4899)' }}>
            <div className="tutorial-badge-overlay">
              <svg width="10" height="10" fill="white" viewBox="0 0 24 24" style={{ marginLeft: '1px' }}>
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
          <span className="tutorial-title">Responsive Design Tutorial</span>
          <span className="tutorial-arrow">›</span>
        </button>
      </div>

      {/* Visual Card Showcase */}
      <div className="feature-card-showcase showcase-breakpoints">
        <div className="breakpoints-showcase-stage" style={{ display: 'flex', gap: '16px', alignItems: 'flex-end', transform: 'translateY(16px)' }}>
          {/* Breakpoint Left: Desktop preview */}
          <div
            className="breakpoint-desktop-card"
            style={{
              width: '270px',
            backgroundColor: '#17171C',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
            padding: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: 'var(--shadow-xl)',
            height: '380px'
          }}>
            <div style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: 500, marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Breakpoint +</span>
            </div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Powerhouse.
            </div>
            <div style={{ width: '80px', height: '18px', backgroundColor: '#EA580C', borderRadius: '9999px', marginTop: '8px', fontSize: '9px', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>
              Hire Ultra
            </div>

            {/* Mock Phone Preview */}
            <div style={{
              marginTop: '32px',
              backgroundColor: '#18181B',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '12px',
              height: '220px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ fontSize: '11px', color: '#FFFFFF', fontWeight: 600 }}>
                Studio Ultra.
              </div>
              <div style={{
                width: '100%',
                height: '130px',
                marginTop: '12px',
                borderRadius: '8px',
                background: 'linear-gradient(to bottom right, rgba(88, 28, 135, 0.4), rgba(124, 58, 237, 0.3), #000000)',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '8px'
              }}>
                <span style={{ fontSize: '10px', color: '#E9D5FF' }}>Godlike</span>
                <span style={{ fontSize: '11px', fontWeight: 500, color: '#FFFFFF' }}>Accelerate Your...</span>
              </div>
            </div>
          </div>

          {/* Breakpoint Center: Tablet (Active 1199px) */}
          <div
            className="breakpoint-tablet-card"
            style={{
              width: '320px',
            backgroundColor: '#17171C',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
            padding: '20px',
            border: '2px solid rgba(59, 130, 246, 0.6)',
            boxShadow: 'var(--shadow-xl)',
            height: '400px'
          }}>
            <div style={{ fontSize: '11px', color: '#E2E8F0', fontWeight: 500, marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: '#3B82F6' }} />
                Tablet · 1199
              </span>
              <span style={{ color: '#9CA3AF' }}>Breakpoint +</span>
            </div>
            <div style={{ fontSize: '11px', color: '#9CA3AF', marginBottom: '4px' }}>
              Studio Ultra.
            </div>
            <div style={{ fontSize: '20px', fontWeight: 600, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              NoCode <span style={{ fontWeight: 400, color: '#9CA3AF' }}>Powerhouse.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px', fontSize: '10px', color: '#9CA3AF', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '8px' }}>
              <span>Creations</span>
              <span>Services</span>
              <span>Supply</span>
              <span style={{ padding: '2px 8px', backgroundColor: '#EA580C', color: '#FFFFFF', borderRadius: '9999px', fontWeight: 600 }}>Hire Ultra</span>
            </div>

            {/* Mock Phone Device with Phone Screen Artwork */}
            <div style={{
              marginTop: '16px',
              backgroundColor: '#18181B',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '12px',
              height: '220px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                width: '100%',
                height: '160px',
                borderRadius: '8px',
                background: 'linear-gradient(to top right, rgba(107, 33, 168, 0.5), rgba(79, 70, 229, 0.3), rgba(192, 132, 252, 0.2))',
                border: '1px solid rgba(192, 132, 252, 0.2)',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end'
              }}>
                <span style={{ fontSize: '10px', color: '#E9D5FF' }}>Godlike</span>
                <span style={{ fontSize: '13px', fontWeight: 500, color: '#FFFFFF' }}>Accelerate Your Web</span>
              </div>
            </div>
          </div>

          {/* Breakpoint Right: Mobile preview */}
          <div
            className="breakpoint-mobile-card"
            style={{
              width: '260px',
            backgroundColor: '#17171C',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
            padding: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: 'var(--shadow-xl)',
            height: '380px'
          }}>
            <div style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: 500, marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Mobile · 390</span>
            </div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              NoCode
            </div>
            <div style={{ fontSize: '12px', color: '#9CA3AF' }}>
              Powerhouse
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
