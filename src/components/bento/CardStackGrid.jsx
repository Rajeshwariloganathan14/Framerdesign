import React from 'react';

export default function CardStackGrid({ onClick }) {
  return (
    <div
      className="bento-card bento-card-tall"
      onClick={onClick}
      role="button"
      tabIndex={0}
      style={{ cursor: 'pointer' }}
    >
      {/* Header */}
      <div className="bento-card-header">
        <div style={{ paddingRight: '12px' }}>
          <h3 className="bento-card-title">Stack and Grid</h3>
          <p className="bento-card-sub" style={{ opacity: 0.9 }}>
            Use fixed grids or fluid stacks to organize and position elements with ease.
          </p>
        </div>
        <div className="bento-arrow-btn">
          →
        </div>
      </div>

      {/* Masonry collage of 3D tiles */}
      <div className="bento-inset" style={{ justifyContent: 'flex-end', paddingTop: '12px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', width: '100%' }}>
          {/* Tile 1: Dark Glass / Chrome blob tile */}
          <div style={{
            borderRadius: '8px',
            height: '190px',
            overflow: 'hidden',
            position: 'relative',
            background: 'linear-gradient(135deg, #18191d 0%, #2e3038 50%, #0d0e11 100%)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                width: '125px',
                height: '125px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 35%, #9fa5b5 0%, #464a56 45%, #15161b 85%)',
                boxShadow: 'inset -8px -8px 20px rgba(0,0,0,0.8), inset 8px 8px 18px rgba(255,255,255,0.4)',
                filter: 'blur(1px)'
              }} />
              <div style={{
                position: 'absolute',
                width: '60px',
                height: '30px',
                borderRadius: '50%',
                transform: 'rotate(-30deg)',
                background: 'rgba(255, 255, 255, 0.3)',
                filter: 'blur(4px)',
                top: '32px',
                left: '24px'
              }} />
            </div>
          </div>

          {/* Tile 2: Black tile with vibrant pink/orange/yellow wave */}
          <div style={{
            borderRadius: '8px',
            height: '190px',
            overflow: 'hidden',
            position: 'relative',
            background: '#0a0a0c',
            boxShadow: 'var(--shadow-md)'
          }}>
            <svg style={{ width: '100%', height: '100%', objectFit: 'cover' }} viewBox="0 0 160 190">
              <defs>
                <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF3366" />
                  <stop offset="50%" stopColor="#FF9900" />
                  <stop offset="100%" stopColor="#FFDE43" />
                </linearGradient>
              </defs>
              <path d="M-10,130 C40,70 100,160 170,90 L170,200 L-10,200 Z" fill="url(#wave1)" opacity="0.95" />
              <path d="M-10,80 C50,30 90,140 170,50 L170,110 C90,180 50,70 -10,120 Z" fill="url(#wave1)" opacity="0.6" />
            </svg>
          </div>

          {/* Tile 3: Yellow-orange wave tile */}
          <div style={{
            borderRadius: '8px',
            height: '195px',
            overflow: 'hidden',
            position: 'relative',
            background: 'linear-gradient(145deg, #FFB800 0%, #FF8500 100%)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 160 195">
              <path d="M-20,60 Q40,160 180,40 L180,210 L-20,210 Z" fill="#E65100" opacity="0.4" />
              <path d="M-20,110 Q60,190 180,90 L180,210 L-20,210 Z" fill="#BF360C" opacity="0.3" />
              <circle cx="80" cy="90" r="50" fill="url(#wave1)" filter="blur(6px)" opacity="0.25" />
            </svg>
          </div>

          {/* Tile 4: Black tile with orange swirl */}
          <div style={{
            borderRadius: '8px',
            height: '195px',
            overflow: 'hidden',
            position: 'relative',
            background: '#050505',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'conic-gradient(from 180deg, #FF5500, #FFAA00, #FF3300, #111111, #FF5500)',
                filter: 'blur(3px)',
                opacity: 0.9
              }} />
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: '#050505', position: 'absolute' }} />
            </div>
          </div>

          {/* Tile 5: Bottom fluid-shape tile spanning both columns */}
          <div style={{
            gridColumn: 'span 2',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            height: '210px',
            overflow: 'hidden',
            position: 'relative',
            background: 'linear-gradient(135deg, #FF6600 0%, #E63900 100%)',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <div style={{
              position: 'absolute',
              bottom: '-32px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '310px',
              height: '180px',
              borderRadius: '50%',
              filter: 'blur(2px)',
              background: 'radial-gradient(ellipse, #FFCC00 0%, #FF5500 60%, transparent 80%)',
              boxShadow: 'inset 0 0 40px rgba(255,255,255,0.4)'
            }} />
            <div style={{
              position: 'absolute',
              top: '16px',
              left: '40px',
              width: '96px',
              height: '48px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              filter: 'blur(12px)',
              transform: 'rotate(-15deg)'
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}
