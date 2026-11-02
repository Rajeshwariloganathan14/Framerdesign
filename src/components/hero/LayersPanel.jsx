import React, { useState } from 'react';

export default function LayersPanel({ selectedLayer, onSelectLayer }) {
  const [activeTab, setActiveTab] = useState('layers');
  const [heroExpanded, setHeroExpanded] = useState(true);
  const [subHeroExpanded, setSubHeroExpanded] = useState(true);
  const [assetExpanded, setAssetExpanded] = useState(true);

  return (
    <aside className="editor-sidebar-left" data-purpose="layers-panel">
      {/* Tab Switcher */}
      <div className="sidebar-tabs">
        <button
          className={`tab-btn ${activeTab === 'pages' ? 'active' : ''}`}
          onClick={() => setActiveTab('pages')}
        >
          Pages
        </button>
        <button
          className={`tab-btn ${activeTab === 'layers' ? 'active' : ''}`}
          onClick={() => setActiveTab('layers')}
        >
          Layers
        </button>
      </div>

      {activeTab === 'layers' ? (
        <div className="layers-tree">
          {/* Desktop Frame */}
          <div
            className={`layer-item ${selectedLayer === 'Desktop' ? 'active' : ''}`}
            onClick={() => onSelectLayer('Desktop')}
          >
            <div className="layer-left">
              <span style={{ fontSize: '9px' }}>▾</span>
              <span style={{ width: '10px', height: '10px', border: '1px solid currentColor', borderRadius: '2px', display: 'inline-block' }} />
              <span style={{ fontWeight: 600 }}>Desktop</span>
            </div>
            <span style={{ fontSize: '9px', opacity: 0.8 }}>1200+</span>
          </div>

          {/* Hero Section Container */}
          <div
            className={`layer-item layer-indent-1 ${selectedLayer === 'HeroSection' ? 'active' : ''}`}
            onClick={() => {
              setHeroExpanded(!heroExpanded);
              onSelectLayer('HeroSection');
            }}
          >
            <div className="layer-left">
              <span style={{ fontSize: '9px', color: '#94A3B8' }}>{heroExpanded ? '▾' : '▸'}</span>
              <span style={{ width: '8px', height: '8px', border: '1px solid #60A5FA', backgroundColor: '#DBEAFE', borderRadius: '2px', display: 'inline-block' }} />
              <span style={{ fontWeight: 500 }}>Hero</span>
            </div>
          </div>

          {heroExpanded && (
            <>
              {/* Nav layer */}
              <div
                className={`layer-item layer-indent-2 ${selectedLayer === 'Nav' ? 'active' : ''}`}
                onClick={() => onSelectLayer('Nav')}
              >
                <div className="layer-left">
                  <span style={{ color: '#3B82F6', fontFamily: 'monospace', fontSize: '9px' }}>⊞</span>
                  <span>Nav</span>
                </div>
              </div>

              {/* Nested Hero content */}
              <div
                className={`layer-item layer-indent-2 ${selectedLayer === 'HeroContent' ? 'active' : ''}`}
                onClick={() => {
                  setSubHeroExpanded(!subHeroExpanded);
                  onSelectLayer('HeroContent');
                }}
              >
                <div className="layer-left">
                  <span style={{ fontSize: '9px', color: '#94A3B8' }}>{subHeroExpanded ? '▾' : '▸'}</span>
                  <span style={{ width: '8px', height: '8px', border: '1px solid #60A5FA', borderRadius: '2px', display: 'inline-block' }} />
                  <span style={{ fontWeight: 500 }}>Hero</span>
                </div>
              </div>

              {subHeroExpanded && (
                <>
                  <div
                    className={`layer-item layer-indent-3 ${selectedLayer === 'Header' ? 'active' : ''}`}
                    onClick={() => onSelectLayer('Header')}
                  >
                    <div className="layer-left">
                      <span style={{ fontFamily: 'Georgia, serif', fontSize: '10px', color: '#94A3B8' }}>T</span>
                      <span>Header</span>
                    </div>
                  </div>

                  <div
                    className={`layer-item layer-indent-3 ${selectedLayer === 'Paragraph' ? 'active' : ''}`}
                    onClick={() => onSelectLayer('Paragraph')}
                  >
                    <div className="layer-left">
                      <span style={{ fontFamily: 'Georgia, serif', fontSize: '10px', color: '#94A3B8' }}>T</span>
                      <span>Paragraph</span>
                    </div>
                  </div>

                  <div
                    className={`layer-item layer-indent-3 ${selectedLayer === 'Button' ? 'active' : ''}`}
                    onClick={() => onSelectLayer('Button')}
                  >
                    <div className="layer-left">
                      <span style={{ color: '#6366F1', fontSize: '10px' }}>❖</span>
                      <span>Button</span>
                    </div>
                  </div>

                  <div
                    className={`layer-item layer-indent-3 ${selectedLayer === 'Asset' ? 'active' : ''}`}
                    onClick={() => {
                      setAssetExpanded(!assetExpanded);
                      onSelectLayer('Asset');
                    }}
                  >
                    <div className="layer-left">
                      <span style={{ fontSize: '9px', color: '#94A3B8' }}>{assetExpanded ? '▾' : '▸'}</span>
                      <span style={{ width: '8px', height: '8px', backgroundColor: '#60A5FA', borderRadius: '2px', display: 'inline-block' }} />
                      <span>Asset</span>
                    </div>
                  </div>

                  {assetExpanded && (
                    <div style={{ paddingLeft: '48px', display: 'flex', flexDirection: 'column', gap: '2px', color: '#64748B', fontSize: '10.5px' }}>
                      <div className="layer-item" onClick={() => onSelectLayer('Icon')}>
                        <div className="layer-left">
                          <span style={{ color: '#A855F7', fontSize: '9px' }}>⬡</span>
                          <span>Icon</span>
                        </div>
                      </div>
                      <div className="layer-item" onClick={() => onSelectLayer('Video')}>
                        <div className="layer-left">
                          <span style={{ color: '#94A3B8', fontSize: '9px' }}>⚏</span>
                          <span>Video</span>
                        </div>
                      </div>
                      <div className="layer-item" onClick={() => onSelectLayer('Image')}>
                        <div className="layer-left">
                          <span style={{ color: '#10B981', fontSize: '9px' }}>■</span>
                          <span>Image</span>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          )}

          {/* Sibling layers */}
          <div className="layer-item" onClick={() => onSelectLayer('Clients')}>
            <div className="layer-left">
              <span style={{ color: '#94A3B8', fontSize: '9px' }}>▸</span>
              <span style={{ width: '8px', height: '8px', border: '1px solid #60A5FA', backgroundColor: '#DBEAFE', borderRadius: '2px', display: 'inline-block' }} />
              <span>Clients</span>
            </div>
          </div>

          <div className="layer-item" onClick={() => onSelectLayer('Testimonials')}>
            <div className="layer-left">
              <span style={{ color: '#94A3B8', fontSize: '9px' }}>▸</span>
              <span style={{ width: '8px', height: '8px', border: '1px solid #60A5FA', backgroundColor: '#DBEAFE', borderRadius: '2px', display: 'inline-block' }} />
              <span>Testimonials</span>
            </div>
          </div>

          <div className="layer-item" onClick={() => onSelectLayer('Pricing')}>
            <div className="layer-left">
              <span style={{ color: '#94A3B8', fontSize: '9px' }}>▸</span>
              <span style={{ width: '8px', height: '8px', border: '1px solid #60A5FA', backgroundColor: '#DBEAFE', borderRadius: '2px', display: 'inline-block' }} />
              <span>Pricing</span>
            </div>
          </div>

          <div className="layer-item" onClick={() => onSelectLayer('Footer')}>
            <div className="layer-left">
              <span style={{ color: '#6366F1', fontSize: '10px' }}>❖</span>
              <span>Footer</span>
            </div>
            <span style={{ color: '#94A3B8', fontSize: '10px' }}>🔒</span>
          </div>

          {/* Collapsed Breakpoints */}
          <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '6px', marginTop: '6px' }}>
            <div className="layer-item" onClick={() => onSelectLayer('Tablet')}>
              <div className="layer-left">
                <span style={{ fontSize: '9px', color: '#94A3B8' }}>▸</span>
                <span style={{ width: '10px', height: '10px', border: '1px solid #94A3B8', borderRadius: '2px', display: 'inline-block' }} />
                <span>Tablet</span>
              </div>
              <span style={{ fontSize: '9px', color: '#94A3B8', fontFamily: 'monospace' }}>1199 — 810</span>
            </div>
            <div className="layer-item" onClick={() => onSelectLayer('Phone')}>
              <div className="layer-left">
                <span style={{ fontSize: '9px', color: '#94A3B8' }}>▸</span>
                <span style={{ width: '10px', height: '10px', border: '1px solid #3B82F6', backgroundColor: '#60A5FA', borderRadius: '2px', display: 'inline-block' }} />
                <span>Phone</span>
              </div>
              <span style={{ fontSize: '9px', color: '#94A3B8', fontFamily: 'monospace' }}>809 — 0</span>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ padding: '16px', color: '#64748B', fontSize: '11px', textAlign: 'center' }}>
          <div style={{ padding: '8px', background: '#FFFFFF', borderRadius: '6px', border: '1px solid #E2E8F0', marginBottom: '8px' }}>
            📄 Home Page
          </div>
          <div style={{ padding: '8px', background: '#FFFFFF', borderRadius: '6px', border: '1px solid #E2E8F0', marginBottom: '8px' }}>
            📄 Features
          </div>
          <div style={{ padding: '8px', background: '#FFFFFF', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
            📄 Pricing
          </div>
        </div>
      )}
    </aside>
  );
}
