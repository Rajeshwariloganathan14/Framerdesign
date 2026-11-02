import React from 'react';
import { desertDunes } from '../../assets';

export default function FigmaFeature({ onTutorialClick }) {
  return (
    <section className="feature-block" id="figma" data-purpose="feature-figma-copy-paste">
      {/* Glow background */}
      <div className="peach-radial-glow" />

      {/* Text Header & Content */}
      <div className="feature-text-header">
        <h2 className="feature-heading">Figma Copy Paste</h2>
        <p className="feature-desc">
          The ability to copy and paste web designs from Figma to Framer is a convenient feature for designers who already have a website design in Figma and don’t want to start from scratch. With this feature, you can copy your designs from Figma, seamlessly transfer them to Framer, and publish your design as an actual website without requiring manual rebuilding or using code. This helps to save time and effort and allows you to focus on the creative aspects of your work.
        </p>

        {/* Tutorial Button */}
        <button
          className="tutorial-btn"
          onClick={() => onTutorialClick("Figma to Framer Tutorial", "Learn how to copy frames and vector components directly from Figma to Framer.")}
        >
          <div className="tutorial-badge-icon" style={{ background: 'linear-gradient(to top right, #22D3EE, #F472B6, #FDE047)' }}>
            <div className="tutorial-badge-overlay">
              <svg width="10" height="10" fill="white" viewBox="0 0 24 24" style={{ marginLeft: '1px' }}>
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
          <span className="tutorial-title">Figma to Framer Tutorial</span>
          <span className="tutorial-arrow">›</span>
        </button>
      </div>

      {/* Visual Card Showcase */}
      <div className="feature-card-showcase showcase-figma">
        <div style={{ position: 'relative', width: '780px', height: '350px', display: 'flex', alignItems: 'flex-end' }}>
          {/* Left Figma Panel */}
          <div style={{
            width: '260px',
            height: '340px',
            backgroundColor: '#2B2B2B',
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
            color: 'rgba(255, 255, 255, 0.8)',
            padding: '12px',
            boxShadow: 'var(--shadow-xl)',
            fontSize: '11px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            zIndex: 10
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '8px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '12px'
            }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ color: '#60A5FA' }}>❖</span>
                <span style={{ color: '#FFFFFF', fontWeight: 500 }}>Layers</span>
                <span>Assets</span>
              </div>
              <span style={{ fontSize: '10px' }}>Page 1 ⌄</span>
            </div>

            <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px', color: 'rgba(255, 255, 255, 0.7)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FFFFFF' }}>
                <span style={{ fontSize: '12px' }}>#</span> Desktop
              </div>
              <div style={{ paddingLeft: '14px', borderLeft: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255, 255, 255, 0.9)' }}>
                  <span>⊡</span> Hero
                </div>
                <div style={{ paddingLeft: '12px', display: 'flex', flexDirection: 'column', gap: '4px', color: 'rgba(255, 255, 255, 0.6)' }}>
                  <div>T Header</div>
                  <div>— Space</div>
                  <div>⊡ Button</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255, 255, 255, 0.9)' }}>
                  <span>☷</span> Grid
                </div>
                <div style={{ paddingLeft: '12px', display: 'flex', flexDirection: 'column', gap: '4px', color: 'rgba(255, 255, 255, 0.6)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>⊡</span> Column
                  </div>
                  <div style={{ paddingLeft: '12px', color: 'rgba(255, 255, 255, 0.4)' }}>
                    ◇ Photo
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Overlapping Framer Browser Window */}
          <div style={{
            width: '580px',
            height: '340px',
            backgroundColor: '#FFFFFF',
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
            boxShadow: 'var(--shadow-xl)',
            overflow: 'hidden',
            marginLeft: '-64px',
            border: '1px solid #E5E7EB',
            zIndex: 20,
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Browser Header Bar */}
            <div style={{
              height: '36px',
              backgroundColor: '#F9FAFB',
              borderBottom: '1px solid #E5E7EB',
              display: 'flex',
              alignItems: 'center',
              padding: '0 12px',
              gap: '8px'
            }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#D1D5DB' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#D1D5DB' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#D1D5DB' }} />
              </div>
              <div style={{
                flex: 1,
                maxWidth: '280px',
                margin: '0 auto',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '4px',
                padding: '2px 10px',
                fontSize: '11px',
                color: '#9CA3AF',
                textAlign: 'center',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}>
                https://your-website.framer.website/
              </div>
            </div>

            {/* Canvas Site Layout */}
            <div style={{ padding: '24px', flex: 1, backgroundColor: '#FFFFFF' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px' }}>
                <span style={{ fontWeight: 700, color: '#111111', fontSize: '15px', letterSpacing: '-0.02em' }}>Focal</span>
                <div style={{ display: 'flex', gap: '16px', fontSize: '12px', fontWeight: 500, color: '#4B5563' }}>
                  <span>About</span>
                  <span>Contact</span>
                </div>
              </div>

              {/* Real Desert Dunes Photography */}
              <div style={{
                width: '100%',
                height: '150px',
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <img
                  src={desertDunes}
                  alt="Desert Dunes Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginTop: '12px' }}>
                <div style={{ height: '64px', borderRadius: '6px', backgroundColor: '#171717' }} />
                <div style={{ height: '64px', borderRadius: '6px', backgroundColor: '#FEF3C7' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
