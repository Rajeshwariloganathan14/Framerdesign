import React, { useState } from 'react';
import { saturnPlanet } from '../../assets';

export default function StylingFeature() {
  const [opacity, setOpacity] = useState(1);
  const [radius, setRadius] = useState(20);
  const [saturate, setSaturate] = useState(120);
  const [visible, setVisible] = useState('yes');

  return (
    <section className="feature-block" id="styling" data-purpose="feature-styling">
      {/* Glow background */}
      <div className="peach-radial-glow" />

      {/* Text Header & Content */}
      <div className="feature-text-header">
        <h2 className="feature-heading">Styling</h2>
        <p className="feature-desc">
          Style every layer on your site using simple property controls like fills, borders, filters, and even realistically rendered shadows. Use Text Styles and shared colors to style your pages throughout your entire project consistently.
        </p>
      </div>

      {/* Visual Card Showcase */}
      <div className="feature-card-showcase showcase-styling">
        {/* Canvas Artboard with Saturn Artwork */}
        <div style={{
          position: 'relative',
          marginLeft: '32px',
          width: '400px',
          height: '340px',
          borderRadius: `${radius}px`,
          background: 'linear-gradient(to bottom, #FDA400, #FD7901)',
          border: '2px solid #0099FF',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px',
          boxShadow: 'var(--shadow-xl)',
          opacity: opacity,
          filter: `saturate(${saturate}%)`,
          transition: 'all 0.15s ease'
        }}>
          {/* Selection handles */}
          <div className="corner-handle corner-tl" style={{ top: '-6px', left: '-6px', width: '10px', height: '10px' }} />
          <div className="corner-handle corner-tr" style={{ top: '-6px', right: '-6px', width: '10px', height: '10px' }} />

          {/* 3D Saturn Ring Planet Graphic */}
          <div style={{ position: 'relative', width: '200px', height: '200px', marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={saturnPlanet}
              alt="Saturn Artboard Preview"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Artboard Text */}
          <span style={{ fontSize: '32px', fontWeight: 600, color: '#111111', letterSpacing: '-0.02em', marginBottom: '8px' }}>
            Find Your Space
          </span>
        </div>

        {/* Dark Property Styles Panel (Framer Inspector) */}
        <div style={{
          width: '260px',
          backgroundColor: '#1C1C1C',
          color: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '12px',
          padding: '14px',
          fontSize: '11px',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          marginRight: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <span style={{ fontWeight: 600, color: '#FFFFFF' }}>Styles</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontWeight: 700, cursor: 'pointer' }}>+</span>
          </div>

          {/* Opacity */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'rgba(255, 255, 255, 0.7)' }}>
            <span>Opacity</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ backgroundColor: '#27272A', padding: '2px 8px', borderRadius: '4px', color: '#FFFFFF', fontFamily: 'monospace' }}>
                {opacity}
              </span>
              <input
                type="range"
                min="0.2"
                max="1"
                step="0.05"
                value={opacity}
                onChange={(e) => setOpacity(parseFloat(e.target.value))}
                style={{ width: '64px', accentColor: '#0099FF' }}
              />
            </div>
          </div>

          {/* Visible */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'rgba(255, 255, 255, 0.7)' }}>
            <span>Visible</span>
            <div style={{ display: 'flex', backgroundColor: '#27272A', padding: '2px', borderRadius: '4px', fontSize: '10px' }}>
              <button
                style={{ padding: '2px 8px', backgroundColor: visible === 'yes' ? '#3F3F46' : 'transparent', color: '#FFFFFF', borderRadius: '3px', fontWeight: 500 }}
                onClick={() => setVisible('yes')}
              >
                Yes
              </button>
              <button
                style={{ padding: '2px 8px', backgroundColor: visible === 'no' ? '#3F3F46' : 'transparent', color: 'rgba(255, 255, 255, 0.5)', borderRadius: '3px' }}
                onClick={() => setVisible('no')}
              >
                No
              </button>
            </div>
          </div>

          {/* Fill */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'rgba(255, 255, 255, 0.7)' }}>
            <span>Fill</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#27272A', padding: '2px 8px', borderRadius: '4px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'linear-gradient(to right, #F59E0B, #EA580C)' }} />
              <span style={{ color: '#FFFFFF', fontSize: '10px' }}>Linear</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.4)', marginLeft: '4px' }}>×</span>
            </div>
          </div>

          {/* Overflow */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'rgba(255, 255, 255, 0.7)' }}>
            <span>Overflow</span>
            <span style={{ backgroundColor: '#27272A', padding: '2px 8px', borderRadius: '4px', color: '#FFFFFF', fontSize: '10px' }}>
              Hidden ⌄
            </span>
          </div>

          {/* Radius */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'rgba(255, 255, 255, 0.7)' }}>
            <span>Radius</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ backgroundColor: '#27272A', padding: '2px 8px', borderRadius: '4px', color: '#FFFFFF', fontFamily: 'monospace' }}>
                {radius}
              </span>
              <input
                type="range"
                min="0"
                max="40"
                value={radius}
                onChange={(e) => setRadius(parseInt(e.target.value))}
                style={{ width: '64px', accentColor: '#0099FF' }}
              />
            </div>
          </div>

          {/* Rotation */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'rgba(255, 255, 255, 0.7)' }}>
            <span>Rotation</span>
            <span style={{ backgroundColor: '#27272A', padding: '2px 8px', borderRadius: '4px', color: '#FFFFFF', fontFamily: 'monospace' }}>
              0°
            </span>
          </div>

          {/* Border */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'rgba(255, 255, 255, 0.7)' }}>
            <span>Border</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#27272A', padding: '2px 8px', borderRadius: '4px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#D6D3D1' }} />
              <span style={{ color: '#FFFFFF', fontSize: '10px' }}>Solid</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.4)', marginLeft: '4px' }}>×</span>
            </div>
          </div>

          {/* Shadows */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'rgba(255, 255, 255, 0.7)' }}>
            <span>Shadows</span>
            <span style={{ backgroundColor: '#27272A', padding: '2px 8px', borderRadius: '4px', color: '#FFFFFF', fontSize: '10px' }}>
              Realistic ×
            </span>
          </div>

          {/* Saturate */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'rgba(255, 255, 255, 0.7)' }}>
            <span>Saturate</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ backgroundColor: '#27272A', padding: '2px 6px', borderRadius: '4px', color: '#FFFFFF', fontFamily: 'monospace' }}>
                {saturate}%
              </span>
              <input
                type="range"
                min="50"
                max="200"
                value={saturate}
                onChange={(e) => setSaturate(parseInt(e.target.value))}
                style={{ width: '48px', accentColor: '#0099FF' }}
              />
            </div>
          </div>

          {/* Z Index */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'rgba(255, 255, 255, 0.7)' }}>
            <span>Z Index</span>
            <span style={{ backgroundColor: '#27272A', padding: '2px 8px', borderRadius: '4px', color: '#FFFFFF', fontFamily: 'monospace' }}>
              1 — +
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
