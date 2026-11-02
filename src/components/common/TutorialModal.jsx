import React from 'react';
import '../../styles/modal.css';

export default function TutorialModal({ isOpen, onClose, title, subtitle }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <h3 className="modal-title">{title || "Interactive Tutorial"}</h3>
            {subtitle && <p style={{ fontSize: '13px', color: '#6B7280', marginTop: '2px' }}>{subtitle}</p>}
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        {/* Modal Body with Simulated Interactive Video Player */}
        <div className="modal-body">
          <div className="video-player-mockup">
            {/* Visual preview */}
            <div style={{ textAlign: 'center', color: '#FFFFFF', padding: '20px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                cursor: 'pointer',
                border: '1px solid rgba(255, 255, 255, 0.4)'
              }}>
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style={{ marginLeft: '4px' }}>
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '6px' }}>{title}</h4>
              <p style={{ fontSize: '12px', color: '#9CA3AF', maxWidth: '380px', margin: '0 auto' }}>
                Master layout, breakpoints, and positioning in Framer with step-by-step interactive demonstrations.
              </p>
            </div>

            {/* Bottom playback progress bar */}
            <div className="video-controls-bar">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ cursor: 'pointer' }}>▶</span>
                <span>0:00 / 3:45</span>
              </div>
              <div style={{ flex: 1, height: '4px', background: 'rgba(255, 255, 255, 0.3)', margin: '0 16px', borderRadius: '2px', position: 'relative' }}>
                <div style={{ width: '35%', height: '100%', background: '#0099FF', borderRadius: '2px' }} />
              </div>
              <span>1080p HD</span>
            </div>
          </div>

          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
            <button
              onClick={onClose}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                border: '1px solid #E5E7EB',
                backgroundColor: '#FFFFFF',
                color: '#374151',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              Close
            </button>
            <a
              href="#learn"
              onClick={onClose}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                background: 'var(--color-primary)',
                color: '#FFFFFF',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
