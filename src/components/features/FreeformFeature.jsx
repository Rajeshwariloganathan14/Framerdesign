import React, { useState } from 'react';

export default function FreeformFeature({ onTutorialClick }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="feature-block" id="freeform" data-purpose="feature-freeform-canvas">
      {/* Glow background */}
      <div className="peach-radial-glow" />

      {/* Text Header & Content */}
      <div className="feature-text-header">
        <h2 className="feature-heading">Freeform canvas</h2>
        <p className="feature-desc">
          The freeform canvas in Framer allows you to express your creative ideas freely, as it does not impose any constraints on pre-set layouts or box models, thus giving you the flexibility to design in the way you want.
        </p>
        <p className="feature-desc secondary">
          The freeform canvas is similar to other design tools you may be familiar with, such as Adobe XD, Sketch, and Figma; it provides flexibility and freedom to create unique designs tailored to your needs and creativity.
        </p>
      </div>

      {/* Visual Card Showcase */}
      <div className="feature-card-showcase showcase-freeform">
        {/* Text Input Simulation Layer */}
        <div style={{
          width: '640px',
          margin: '0 auto',
          borderTop: '1px solid #E5E7EB',
          borderBottom: '1px solid #E5E7EB',
          padding: '16px 8px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <span style={{ fontSize: '54px', fontWeight: 500, letterSpacing: '-0.03em', color: '#000000', lineHeight: 1 }}>
            Ship si
          </span>
          <span className="blinking-cursor" style={{ height: '52px' }} />
        </div>

        {/* Video Canvas Object with Bounding Box & Play button */}
        <div style={{
          width: '640px',
          margin: '0 auto',
          height: '240px',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
          background: 'linear-gradient(to right, #171717, #1c1917, #451a03)',
          border: '2px solid var(--color-primary)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-lg)',
          marginBottom: '-32px'
        }}>
          {/* Corner selection handles */}
          <div className="corner-handle corner-tl" />
          <div className="corner-handle corner-tr" />

          {/* Mouse pointer icon */}
          <div style={{ position: 'absolute', top: '16px', left: '24px', zIndex: 20 }}>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#FFFFFF', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}>
              <path d="M3 3l7 18 3-7 7-3L3 3z" />
            </svg>
          </div>

          {/* Abstract golden wave lines inside video */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at top, rgba(217, 119, 6, 0.3), #171717, #000000)'
          }} />

          {/* Circular Play Button */}
          <div
            className="play-button-circle"
            style={{
              position: 'relative',
              bottom: 'auto',
              left: 'auto',
              transform: 'none',
              width: '64px',
              height: '64px',
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              border: '1px solid rgba(255, 255, 255, 0.4)'
            }}
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying(!isPlaying);
              onTutorialClick && onTutorialClick("Freeform Canvas Video", "Learn how freeform positioning works with media elements.");
            }}
          >
            {isPlaying ? (
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>❚❚</span>
            ) : (
              <svg width="24" height="24" fill="white" viewBox="0 0 24 24" style={{ marginLeft: '4px' }}>
                <polygon points="6 4 20 12 6 20 6 4" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
