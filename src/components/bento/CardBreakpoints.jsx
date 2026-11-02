import React from 'react';

export default function CardBreakpoints({ onClick }) {
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
          <h3 className="bento-card-title">Breakpoints</h3>
          <p className="bento-card-sub">
            Visually design layouts that adapt to any size.
          </p>
        </div>
        <div className="bento-arrow-btn">
          →
        </div>
      </div>

      {/* Breakpoint controls & artboard preview */}
      <div className="bento-inset" style={{ marginTop: '4px' }}>
        <div className="breakpoint-card-box">
          {/* Top Blue Breakpoint Header */}
          <div className="breakpoint-top-pill">
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-primary)' }}>Breakpoint</span>
            <div style={{
              width: '20px',
              height: '20px',
              backgroundColor: 'var(--color-primary)',
              borderRadius: '4px',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer'
            }}>
              +
            </div>
          </div>

          {/* Floating Dropdown Menu */}
          <div className="breakpoint-dropdown-float">
            <div style={{ padding: '6px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '4px', cursor: 'pointer' }}>
              <span>Tablet</span>
              <span style={{ color: '#9CA3AF', fontFamily: 'monospace', fontSize: '10px' }}>810</span>
            </div>
            <div style={{ padding: '6px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '4px', cursor: 'pointer', backgroundColor: 'rgba(0, 153, 255, 0.08)', color: 'var(--color-primary)', fontWeight: 600 }}>
              <span>Phone</span>
              <span style={{ color: '#9CA3AF', fontFamily: 'monospace', fontSize: '10px' }}>390</span>
            </div>
            <div style={{ height: '1px', backgroundColor: '#F3F4F6', margin: '2px 0' }} />
            <div style={{ padding: '6px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '4px', cursor: 'pointer' }}>
              <span>Custom</span>
              <span style={{ color: '#9CA3AF', fontSize: '10px' }}>...</span>
            </div>
          </div>

          {/* Background Dark Website Preview */}
          <div className="breakpoint-mockup-dark">
            <div style={{ fontSize: '24px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.1, opacity: 0.9, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              ode Powerhous
            </div>
            <div style={{ fontSize: '10px', color: '#9CA3AF', marginTop: '4px', marginBottom: '12px' }}>
              All-in-one studio interface
            </div>

            {/* Two Phone Mockups Side-by-Side */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', paddingTop: '8px' }}>
              <div style={{
                width: '90px',
                height: '170px',
                backgroundColor: '#1E2024',
                borderTopLeftRadius: '12px',
                borderTopRightRadius: '12px',
                border: '1px solid #3F3F46',
                padding: '6px',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ width: '32px', height: '4px', backgroundColor: '#52525B', borderRadius: '2px', margin: '0 auto 8px' }} />
                <div style={{ width: '100%', height: '32px', backgroundColor: 'rgba(234, 88, 12, 0.3)', borderRadius: '4px', marginBottom: '6px' }} />
                <div style={{ width: '75%', height: '8px', backgroundColor: '#52525B', borderRadius: '2px', marginBottom: '4px' }} />
                <div style={{ width: '50%', height: '8px', backgroundColor: '#3F3F46', borderRadius: '2px' }} />
              </div>

              <div style={{
                width: '90px',
                height: '170px',
                backgroundColor: '#1E2024',
                borderTopLeftRadius: '12px',
                borderTopRightRadius: '12px',
                border: '1px solid #3F3F46',
                padding: '6px',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ width: '32px', height: '4px', backgroundColor: '#52525B', borderRadius: '2px', margin: '0 auto 8px' }} />
                <div style={{ width: '100%', height: '32px', backgroundColor: 'rgba(37, 99, 235, 0.3)', borderRadius: '4px', marginBottom: '6px' }} />
                <div style={{ width: '75%', height: '8px', backgroundColor: '#52525B', borderRadius: '2px', marginBottom: '4px' }} />
                <div style={{ width: '50%', height: '8px', backgroundColor: '#3F3F46', borderRadius: '2px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
