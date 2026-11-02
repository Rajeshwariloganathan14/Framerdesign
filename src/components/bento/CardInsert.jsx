import React from 'react';

export default function CardInsert({ onClick }) {
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
          <h3 className="bento-card-title">Insert Pages and Sections</h3>
          <p className="bento-card-sub">
            Insert pre-made pages, headers, footers, navigation bars, common layouts, and more.
          </p>
        </div>
        <div className="bento-arrow-btn">
          →
        </div>
      </div>

      {/* Visual Inset */}
      <div className="bento-inset">
        <div className="insert-split-box">
          {/* Left Orange Sidebar Panel */}
          <div className="sidebar-orange-panel">
            <div>
              {/* Sun/Compass Icon */}
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                </svg>
              </div>

              <h4 style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.02em', color: '#FFFFFF', marginBottom: '8px', lineHeight: 1 }}>
                Sidebar
              </h4>
              <p style={{ fontSize: '12px', lineHeight: 1.5, color: 'rgba(255, 255, 255, 0.9)', maxWidth: '280px' }}>
                Go from design to site with Framer, the web builder for creative pros.
              </p>
            </div>

            <div style={{
              paddingTop: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '11px',
              color: 'rgba(255, 255, 255, 0.85)',
              borderTop: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FFFFFF' }} />
              <span>Adaptive layout system</span>
            </div>
          </div>

          {/* Right Diagonal Striped Panel */}
          <div className="salmon-stripes-panel">
            <div className="diagonal-stripes" style={{ position: 'absolute', inset: 0 }} />
            <div style={{
              width: '84%',
              height: '84%',
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px',
              border: '1.5px solid rgba(255, 255, 255, 0.8)',
              position: 'relative',
              zIndex: 10,
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(2px)',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div style={{ width: '24px', height: '8px', backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: '2px' }} />
              <div style={{ width: '64px', height: '8px', backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: '2px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
