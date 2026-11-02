import React from 'react';

export default function StackGridFeature({ onTutorialClick }) {
  return (
    <section className="feature-block" id="stack-grid" data-purpose="feature-stack-and-grid">
      {/* Glow background */}
      <div className="peach-radial-glow" />

      {/* Text Header & Content */}
      <div className="feature-text-header">
        <h2 className="feature-heading">Stack and Grid</h2>
        <p className="feature-desc">
          Stacks and Grids are used to organize multiple objects neatly. A Stack is a group of layers stacked vertically or horizontally, and a Grid is a structured pattern of layers. These tools allow for easy responsive design adaptable to different screen sizes.
        </p>

        {/* Tutorial Button */}
        <button
          className="tutorial-btn"
          onClick={() => onTutorialClick("Layout Tutorial", "Learn how to use Stacks and Grids for responsive layouts in Framer.")}
        >
          <div className="tutorial-badge-icon" style={{ background: 'linear-gradient(to top right, #F59E0B, #FB7185, #6366F1)' }}>
            <div className="tutorial-badge-overlay">
              <svg width="10" height="10" fill="white" viewBox="0 0 24 24" style={{ marginLeft: '1px' }}>
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
          <span className="tutorial-title">Layout Tutorial</span>
          <span className="tutorial-arrow">›</span>
        </button>
      </div>

      {/* Visual Card Showcase */}
      <div className="feature-card-showcase showcase-stack-grid">
        {/* Floating Layout Panel (Overlaps top-right) */}
        <div className="layout-floating-panel">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '8px', marginBottom: '8px', borderBottom: '1px solid #F3F4F6' }}>
            <span style={{ fontWeight: 600, color: '#1F2937', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Layout <span style={{ color: '#9CA3AF', fontSize: '10px' }}>ⓘ</span>
            </span>
            <span style={{ color: '#9CA3AF', fontWeight: 700, cursor: 'pointer' }}>−</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#6B7280', fontSize: '11px' }}>
              <span>Type</span>
              <div style={{ display: 'flex', background: '#F3F4F6', padding: '2px', borderRadius: '6px' }}>
                <span style={{ padding: '2px 8px', color: '#6B7280' }}>Stack</span>
                <span style={{ padding: '2px 8px', background: '#FFFFFF', color: '#0099FF', fontWeight: 600, borderRadius: '4px', boxShadow: 'var(--shadow-sm)' }}>Grid</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#6B7280', fontSize: '11px' }}>
              <span>Columns</span>
              <div style={{ display: 'flex', alignItems: 'center', background: '#F3F4F6', borderRadius: '4px', padding: '2px 8px', gap: '8px' }}>
                <span style={{ color: '#111111', fontWeight: 600 }}>5</span>
                <span style={{ color: '#9CA3AF', fontSize: '10px' }}>— +</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#6B7280', fontSize: '11px' }}>
              <span>Rows</span>
              <div style={{ display: 'flex', alignItems: 'center', background: '#F3F4F6', borderRadius: '4px', padding: '2px 8px', gap: '8px' }}>
                <span style={{ color: '#111111', fontWeight: 600 }}>3</span>
                <span style={{ color: '#9CA3AF', fontSize: '10px' }}>— +</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#6B7280', fontSize: '11px' }}>
              <span>Gap</span>
              <div style={{ display: 'flex', alignItems: 'center', background: '#F3F4F6', borderRadius: '4px', padding: '2px 8px', gap: '8px' }}>
                <span style={{ color: '#111111', fontWeight: 600 }}>12</span>
                <span style={{ color: '#9CA3AF', fontSize: '10px' }}>— +</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#6B7280', fontSize: '11px' }}>
              <span>Padding</span>
              <div style={{ display: 'flex', alignItems: 'center', background: '#F3F4F6', borderRadius: '4px', padding: '2px 6px', gap: '6px' }}>
                <span style={{ color: '#111111', fontWeight: 600 }}>0</span>
                <div style={{ width: '10px', height: '10px', border: '1px solid #0099FF', borderRadius: '1px' }} />
                <div style={{ width: '10px', height: '10px', border: '1px solid #D1D5DB', borderRadius: '50%' }} />
              </div>
            </div>

            <button style={{
              width: '100%',
              marginTop: '6px',
              padding: '6px 0',
              backgroundColor: 'var(--color-primary)',
              color: '#FFFFFF',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '11px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <span style={{ letterSpacing: '2px', fontSize: '9px' }}>•••</span> Advanced
            </button>
          </div>
        </div>

        {/* Inner Canvas Space & Grid Mockup */}
        <div style={{ paddingTop: '80px', paddingLeft: '32px', paddingRight: '32px', height: '100%' }}>
          <div style={{
            position: 'relative',
            width: '100%',
            height: '460px',
            border: '1px solid #0099FF',
            borderRadius: '8px',
            padding: '10px',
            backgroundColor: 'rgba(249, 250, 251, 0.7)'
          }}>
            {/* Active Selection handles */}
            <div className="corner-handle corner-tl" />
            <div className="corner-handle corner-tr" />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', height: '100%' }}>
              {/* Tile 1: Glossy Black 3D Blob (Double Col) */}
              <div style={{
                gridColumn: 'span 2',
                borderRadius: '10px',
                background: 'linear-gradient(to bottom right, #171717, #000000, #0a0a0a)',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '280px',
                  height: '190px',
                  borderRadius: '40%',
                  background: 'linear-gradient(to top right, rgba(234, 88, 12, 0.6), #292524, rgba(254, 215, 170, 0.2))',
                  filter: 'blur(1px) contrast(125%)',
                  transform: 'rotate(12deg)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 0 50px rgba(251, 146, 60, 0.3)'
                }} />
              </div>

              {/* Tile 2: Vivid Fluid Wave */}
              <div style={{
                borderRadius: '10px',
                background: 'linear-gradient(to top right, #990000, #FD4E1A, #FFB703)',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'
              }}>
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.2)', mixBlendMode: 'overlay' }} />
              </div>

              {/* Bottom Row Bleeding Tiles */}
              <div style={{
                height: '140px',
                borderRadius: '10px',
                background: 'linear-gradient(to right, #F59E0B, #FB923C)'
              }} />

              <div style={{
                gridColumn: 'span 2',
                height: '140px',
                borderRadius: '10px',
                backgroundColor: '#0a0a0a',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
