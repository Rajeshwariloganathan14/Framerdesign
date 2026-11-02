import React from 'react';

export default function CardFigma({ onClick }) {
  return (
    <div
      className="bento-card"
      style={{ backgroundColor: '#FFF9F0' }}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {/* Header */}
      <div className="bento-card-header">
        <div>
          <h3 className="bento-card-title">Figma Copy Paste</h3>
          <p className="bento-card-sub">
            Copy and paste your web designs from Figma to Framer and hit publish.
          </p>
        </div>
        <div className="bento-arrow-btn">
          →
        </div>
      </div>

      {/* Figma Dark UI Visual */}
      <div className="bento-inset">
        <div className="figma-mockup-box">
          {/* Toolbar */}
          <div className="figma-toolbar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {/* Figma Logo */}
              <div style={{ width: '16px', height: '24px', display: 'flex', alignItems: 'center' }}>
                <svg width="14" height="21" viewBox="0 0 38 57" fill="none">
                  <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
                  <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
                  <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
                  <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
                  <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
                </svg>
              </div>

              {/* Cursor tool */}
              <div style={{ width: '22px', height: '22px', borderRadius: '4px', backgroundColor: '#0D99FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3l7 18 3-7 7-3L3 3z" />
                </svg>
              </div>

              {/* Frame tool */}
              <div style={{ color: '#9CA3AF' }}>
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 3v18M19 3v18M3 5h18M3 19h18" />
                </svg>
              </div>

              {/* Shape tool */}
              <div style={{ color: '#9CA3AF' }}>
                <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                </svg>
              </div>
            </div>

            <span style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: 500 }}>100% ▾</span>
          </div>

          {/* Tabs: Layers / Assets */}
          <div style={{
            height: '34px',
            borderBottom: '1px solid #383838',
            padding: '0 12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '11px',
            color: '#D1D5DB'
          }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <span style={{ color: '#FFFFFF', fontWeight: 500, borderBottom: '1px solid #FFFFFF', paddingBottom: '6px' }}>Layers</span>
              <span style={{ color: '#9CA3AF' }}>Assets</span>
            </div>
            <span style={{ color: '#9CA3AF' }}>Page 1 ▾</span>
          </div>

          {/* Layer Tree List */}
          <div className="figma-tree-list">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF', backgroundColor: '#0D99FF', padding: '4px 8px', borderRadius: '4px', fontWeight: 500 }}>
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 3v18M19 3v18M3 5h18M3 19h18" />
              </svg>
              <span>Desktop</span>
            </div>

            <div style={{ paddingLeft: '16px', display: 'flex', alignItems: 'center', gap: '6px', color: '#E5E7EB' }}>
              <span style={{ fontSize: '9px', color: '#9CA3AF' }}>▾</span>
              <span style={{ color: '#9CA3AF' }}>#</span>
              <span>Hero</span>
            </div>

            <div style={{ paddingLeft: '32px', display: 'flex', alignItems: 'center', gap: '6px', color: '#D1D5DB' }}>
              <span style={{ color: '#C084FC', fontSize: '10px' }}>T</span>
              <span>Header</span>
            </div>

            <div style={{ paddingLeft: '32px', display: 'flex', alignItems: 'center', gap: '6px', color: '#D1D5DB' }}>
              <span style={{ color: '#60A5FA', fontSize: '10px' }}>▢</span>
              <span>Space</span>
            </div>

            <div style={{ paddingLeft: '32px', display: 'flex', alignItems: 'center', gap: '6px', color: '#D1D5DB' }}>
              <span style={{ color: '#FB923C', fontSize: '10px' }}>❖</span>
              <span>Button</span>
            </div>

            <div style={{ paddingLeft: '16px', display: 'flex', alignItems: 'center', gap: '6px', color: '#9CA3AF' }}>
              <span style={{ fontSize: '9px' }}>▸</span>
              <span>#</span>
              <span>Features</span>
            </div>

            <div style={{ paddingLeft: '16px', display: 'flex', alignItems: 'center', gap: '6px', color: '#9CA3AF' }}>
              <span style={{ fontSize: '9px' }}>▸</span>
              <span>#</span>
              <span>Footer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
