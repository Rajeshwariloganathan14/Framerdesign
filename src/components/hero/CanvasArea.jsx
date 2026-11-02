import React, { useState } from 'react';

export default function CanvasArea({ activeArtboard, setActiveArtboard, onExploreClick }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="editor-canvas-center" data-purpose="main-artboard-canvas">
      {/* ========================================================================= */}
      {/* DESKTOP ARTBOARD                                                          */}
      {/* ========================================================================= */}
      <div
        className={`artboard-col ${activeArtboard === 'desktop' ? 'active-artboard-wrap' : ''}`}
        onClick={() => setActiveArtboard('desktop')}
      >
        <div className="artboard-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1F2937' }}>
            <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
              <path d="M8 15h4v2H8v-2z" />
            </svg>
            <span style={{ fontWeight: 600 }}>Desktop</span>
          </div>
          <button className="breakpoint-btn" aria-label="Add Desktop Breakpoint">
            <span>Breakpoint</span>
            <span className="breakpoint-plus">+</span>
          </button>
        </div>

        {/* Desktop Artboard Container */}
        <div className="artboard-desktop">
          {/* Inner Navigation */}
          <div className="mock-nav">
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#FFFFFF', fontWeight: 700 }}>
              <span style={{ width: '8px', height: '8px', backgroundColor: '#F97316', borderRadius: '2px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '6px' }}>⚬</span>
              <span style={{ letterSpacing: '0.04em', fontSize: '8px' }}>Absolute</span>
            </div>
            <div className="mock-nav-links">
              <span style={{ color: '#FFFFFF' }}>Home</span>
              <span>Features</span>
              <span>Case Studies</span>
              <span>Pricing</span>
              <span>Contact</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: '#94A3B8' }}>Sign in</span>
              <span className="mock-btn-pill">Free trial &gt;</span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="mock-hero-text">
            <h2 className="mock-hero-heading">
              Here is your brand new, all-in-one podcasting platform.
            </h2>
            <p className="mock-hero-sub">
              A brand new podcasting platform. The easiest way to create, distribute and monetize your show.
            </p>
            <div style={{ marginTop: '10px' }}>
              <button
                className="mock-cta-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onExploreClick && onExploreClick();
                }}
              >
                <span>Explore how</span>
                <span>&gt;</span>
              </button>
            </div>

            {/* Compass Watermark */}
            <div style={{
              position: 'absolute',
              right: '8px',
              top: '0',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              opacity: 0.35,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              pointerEvents: 'none'
            }}>
              🧭
            </div>
          </div>

          {/* Audio Tracks Widget */}
          <div className="mock-audio-widget">
            <div className="mock-audio-header">
              <span style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '7px' }}>Episodes &gt; Sound</span>
              <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                <span
                  style={{ width: '6px', height: '6px', backgroundColor: isPlaying ? '#10B981' : '#6B7280', borderRadius: '50%', cursor: 'pointer' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlaying(!isPlaying);
                  }}
                  title="Toggle audio simulation"
                />
                <span style={{ width: '6px', height: '6px', backgroundColor: '#EAB308', borderRadius: '50%' }} />
              </div>
            </div>

            {/* Track 1: Orange Wave */}
            <div className="waveform-track orange">
              <div className="waveform-bars" style={{ opacity: isPlaying ? 1 : 0.75 }}>
                <span className="wave-bar" style={{ height: '12px', background: '#F97316' }} />
                <span className="wave-bar" style={{ height: '20px', background: '#FB923C' }} />
                <span className="wave-bar" style={{ height: '8px', background: '#F97316' }} />
                <span className="wave-bar" style={{ height: '16px', background: '#F97316' }} />
                <span className="wave-bar" style={{ height: '22px', background: '#FB923C' }} />
                <span className="wave-bar" style={{ height: '6px', background: '#F97316' }} />
                <span className="wave-bar" style={{ height: '18px', background: '#F97316' }} />
                <span className="wave-bar" style={{ height: '14px', background: '#FB923C' }} />
                <span className="wave-bar" style={{ height: '20px', background: '#F97316' }} />
                <span className="wave-bar" style={{ height: '10px', background: '#F97316' }} />
                <span className="wave-bar" style={{ height: '15px', background: '#FB923C' }} />
              </div>
            </div>

            {/* Track 2: Purple Wave */}
            <div className="waveform-track purple">
              <div className="waveform-bars" style={{ opacity: isPlaying ? 1 : 0.75 }}>
                <span className="wave-bar" style={{ height: '8px', background: '#A855F7' }} />
                <span className="wave-bar" style={{ height: '16px', background: '#C084FC' }} />
                <span className="wave-bar" style={{ height: '22px', background: '#A855F7' }} />
                <span className="wave-bar" style={{ height: '12px', background: '#C084FC' }} />
                <span className="wave-bar" style={{ height: '18px', background: '#A855F7' }} />
                <span className="wave-bar" style={{ height: '6px', background: '#A855F7' }} />
                <span className="wave-bar" style={{ height: '14px', background: '#C084FC' }} />
                <span className="wave-bar" style={{ height: '20px', background: '#A855F7' }} />
                <span className="wave-bar" style={{ height: '10px', background: '#C084FC' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE ARTBOARD                                                           */}
      {/* ========================================================================= */}
      <div
        className={`artboard-col ${activeArtboard === 'mobile' ? 'active-artboard-wrap' : ''}`}
        onClick={() => setActiveArtboard('mobile')}
      >
        <div className="artboard-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#1F2937' }}>
            <svg width="10" height="10" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
            <span style={{ fontWeight: 600 }}>Mobile</span>
          </div>
          <button className="breakpoint-btn" aria-label="Add Mobile Breakpoint">
            <span>Breakpoint</span>
            <span className="breakpoint-plus">+</span>
          </button>
        </div>

        {/* Mobile Artboard Frame */}
        <div className="artboard-mobile">
          {/* Mobile Nav */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '6px', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontWeight: 700 }}>
              <span style={{ width: '6px', height: '6px', backgroundColor: '#F97316', borderRadius: '1.5px', display: 'inline-block' }} />
              <span style={{ fontSize: '7px' }}>Absolute</span>
            </div>
            <span style={{ fontSize: '10px', color: '#94A3B8' }}>☰</span>
          </div>

          {/* Mobile Hero Content */}
          <div style={{ textAlign: 'left', margin: '8px 0' }}>
            <h3 style={{ fontSize: '12px', fontWeight: 700, lineHeight: 1.2, color: '#FFFFFF' }}>
              Here is your brand new, all-in-one podcasting platform.
            </h3>
            <p style={{ fontSize: '6.5px', color: '#94A3B8', marginTop: '6px', lineHeight: 1.4 }}>
              A brand new podcasting platform. The easiest way to create, distribute and monetize your show.
            </p>
            <div style={{ marginTop: '10px' }}>
              <button
                className="mock-cta-btn"
                style={{ fontSize: '6.5px', padding: '3px 8px' }}
                onClick={(e) => {
                  e.stopPropagation();
                  onExploreClick && onExploreClick();
                }}
              >
                <span>Explore how &gt;</span>
              </button>
            </div>
          </div>

          {/* Mini waveform cards */}
          <div style={{ marginTop: '12px', backgroundColor: '#13151B', border: '1px solid #1E293B', borderRadius: '4px', padding: '6px' }}>
            <div style={{ height: '14px', backgroundColor: '#1A1D24', borderRadius: '3px', display: 'flex', alignItems: 'center', padding: '0 4px', marginBottom: '4px' }}>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', gap: '1px' }}>
                <span style={{ width: '2px', height: '8px', background: '#A855F7', borderRadius: '1px' }} />
                <span style={{ width: '2px', height: '12px', background: '#C084FC', borderRadius: '1px' }} />
                <span style={{ width: '2px', height: '6px', background: '#A855F7', borderRadius: '1px' }} />
                <span style={{ width: '2px', height: '10px', background: '#C084FC', borderRadius: '1px' }} />
              </div>
            </div>
            <div style={{ height: '14px', backgroundColor: '#1A1D24', borderRadius: '3px', display: 'flex', alignItems: 'center', padding: '0 4px' }}>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', gap: '1px' }}>
                <span style={{ width: '2px', height: '8px', background: '#F97316', borderRadius: '1px' }} />
                <span style={{ width: '2px', height: '12px', background: '#FB923C', borderRadius: '1px' }} />
                <span style={{ width: '2px', height: '4px', background: '#F97316', borderRadius: '1px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
