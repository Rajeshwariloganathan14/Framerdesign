import React, { useState } from 'react';

export default function CardFreeform({ onClick }) {
  const [isPlaying, setIsPlaying] = useState(false);

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
          <h3 className="bento-card-title">Freeform canvas</h3>
          <p className="bento-card-sub">
            Use the freeform canvas to express your creative ideas like you are used to from other design tools.
          </p>
        </div>
        <div className="bento-arrow-btn">
          →
        </div>
      </div>

      {/* Visual Inset */}
      <div className="bento-inset" style={{ justifyContent: 'space-between' }}>
        {/* Text Input Simulation Bar */}
        <div className="freeform-text-bar">
          <span className="freeform-ship-text">Ship s</span>
          <span className="blinking-cursor" />
        </div>

        {/* Video Thumbnail with Selection Box & Handles */}
        <div className="freeform-video-box">
          {/* Blue corner handles */}
          <div className="corner-handle corner-tl" />
          <div className="corner-handle corner-tr" />
          <div className="corner-handle corner-bl" />
          <div className="corner-handle corner-br" />

          {/* Golden streaks / background */}
          <div style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.8,
            background: 'radial-gradient(circle at 60% 40%, rgba(255, 185, 30, 0.45) 0%, rgba(180, 100, 0, 0.15) 45%, transparent 70%)'
          }} />

          <div style={{
            position: 'absolute',
            left: '-40px',
            right: '-40px',
            top: 0,
            height: '200px',
            transform: 'rotate(15deg)',
            opacity: 0.6,
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 200, 60, 0.35) 40%, rgba(255, 140, 0, 0.5) 60%, transparent 100%)',
            filter: 'blur(12px)'
          }} />

          {/* Video Status Badge */}
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '11px',
            zIndex: 10
          }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }} />
            <span>4K • 60fps</span>
          </div>

          {/* Mouse pointer icon */}
          <div style={{
            position: 'absolute',
            top: '36px',
            left: '135px',
            zIndex: 20,
            pointerEvents: 'none',
            filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))'
          }}>
            <svg width="22" height="22" fill="#000000" stroke="#FFFFFF" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M3 3l7 18 3-7 7-3L3 3z" />
            </svg>
          </div>

          {/* Circular Play Button */}
          <div
            className="play-button-circle"
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying(!isPlaying);
            }}
            title={isPlaying ? "Pause Video" : "Play Video"}
          >
            {isPlaying ? (
              <span style={{ fontSize: '18px', fontWeight: 'bold' }}>❚❚</span>
            ) : (
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24" style={{ marginLeft: '4px' }}>
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
