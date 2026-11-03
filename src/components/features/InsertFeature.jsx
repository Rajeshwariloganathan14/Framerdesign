import React, { useState } from 'react';

export default function InsertFeature({ onTutorialClick }) {
  const [activeCategory, setActiveCategory] = useState('pages');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="feature-block" id="insert" data-purpose="feature-insert-pages-sections">
      {/* Glow background */}
      <div className="peach-radial-glow" />

      {/* Text Header & Content */}
      <div className="feature-text-header">
        <h2 className="feature-heading">Insert Pages and Sections</h2>
        <p className="feature-desc">
          Easily insert single-page templates into your project, with various templates for standard layouts such as landing pages, portfolios, and teaser pages. Insertable Pages &amp; Sections are minimally styled and designed to form a solid foundation for your Framer site—while still fully customizable to fit your creative vision.
        </p>

        {/* Tutorial Button */}
        <button
          className="tutorial-btn"
          onClick={() => onTutorialClick("Pages and Sections Tutorial", "Learn how to browse, customize, and insert pre-made layouts and templates.")}
        >
          <div className="tutorial-badge-icon" style={{ background: 'linear-gradient(to top right, #F59E0B, #FB7185, #6366F1)' }}>
            <div className="tutorial-badge-overlay">
              <svg width="10" height="10" fill="white" viewBox="0 0 24 24" style={{ marginLeft: '1px' }}>
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
          <span className="tutorial-title">Pages and Sections Tutorial</span>
          <span className="tutorial-arrow">›</span>
        </button>
      </div>

      {/* Visual Card Showcase */}
      <div className="feature-card-showcase showcase-insert">
        {/* Inner Editor Modal */}
        <div
          className="insert-feature-modal"
          style={{
            width: '100%',
            maxWidth: '820px',
            minHeight: '340px',
            backgroundColor: '#FFFFFF',
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
            boxShadow: 'var(--shadow-xl)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid rgba(0, 0, 0, 0.08)'
          }}
        >
          {/* Top Tool Menu */}
          <div
            className="insert-modal-toolbar"
            style={{
              height: '40px',
              borderBottom: '1px solid #E5E7EB',
              padding: '0 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              backgroundColor: '#F9FAFB',
              fontSize: '12px',
              fontWeight: 500,
              color: '#374151'
            }}
          >
            <div className="insert-tool-item tool-item-insert" style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 8px', backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '4px', boxShadow: 'var(--shadow-sm)' }}>
              <span style={{ color: '#111111', fontWeight: 700 }}>+</span> Insert
            </div>
            <div className="insert-tool-item tool-item-layout" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#6B7280' }}>
              <span>⊞</span> Layout
            </div>
            <div className="insert-tool-item tool-item-frame" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#6B7280' }}>
              <span>▢</span> Frame
            </div>
            <div className="insert-tool-item tool-item-text" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#6B7280' }}>
              <span>T</span> Text
            </div>
            <div className="insert-tool-item tool-item-cms" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#6B7280' }}>
              <span>❖</span> CMS
            </div>
          </div>

          {/* Body: Sidebar + Templates Shelf */}
          <div className="insert-modal-body" style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
            {/* Sidebar Navigation */}
            <div
              className="insert-sidebar-nav"
              style={{
                width: '210px',
                borderRight: '1px solid #E5E7EB',
                padding: '12px',
                backgroundColor: '#FFFFFF',
                fontSize: '11px',
                color: '#4B5563',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              <div>
                <input
                  type="text"
                  placeholder="Search templates"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    backgroundColor: '#F3F4F6',
                    borderRadius: '6px',
                    border: 'none',
                    fontSize: '11px',
                    padding: '4px 10px',
                    color: '#374151',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <span style={{ fontSize: '10px', fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Basics
                </span>
                <div style={{ marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <div
                    onClick={() => setActiveCategory('pages')}
                    style={{
                      padding: '6px 8px',
                      backgroundColor: activeCategory === 'pages' ? '#F3F4F6' : 'transparent',
                      fontWeight: activeCategory === 'pages' ? 600 : 400,
                      color: activeCategory === 'pages' ? '#000000' : '#4B5563',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer'
                    }}
                  >
                    <span>🗎 Pages</span>
                    <span style={{ fontSize: '10px' }}>›</span>
                  </div>
                  <div
                    onClick={() => setActiveCategory('sections')}
                    style={{
                      padding: '6px 8px',
                      backgroundColor: activeCategory === 'sections' ? '#F3F4F6' : 'transparent',
                      fontWeight: activeCategory === 'sections' ? 600 : 400,
                      color: activeCategory === 'sections' ? '#000000' : '#4B5563',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer'
                    }}
                  >
                    <span>☷ Sections</span>
                    <span style={{ fontSize: '10px' }}>›</span>
                  </div>
                  <div
                    onClick={() => setActiveCategory('nav')}
                    style={{
                      padding: '6px 8px',
                      backgroundColor: activeCategory === 'nav' ? '#F3F4F6' : 'transparent',
                      fontWeight: activeCategory === 'nav' ? 600 : 400,
                      color: activeCategory === 'nav' ? '#000000' : '#4B5563',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer'
                    }}
                  >
                    <span>☵ Navigation</span>
                    <span style={{ fontSize: '10px' }}>›</span>
                  </div>
                </div>
              </div>

              <div>
                <span style={{ fontSize: '10px', fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  CMS
                </span>
                <div style={{ marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <div style={{ padding: '6px 8px', color: '#6B7280', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                    <span>🗄 Collection Lists</span>
                    <span style={{ fontSize: '10px' }}>›</span>
                  </div>
                  <div style={{ padding: '6px 8px', color: '#6B7280', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                    <span>☰ Content Fields</span>
                    <span style={{ fontSize: '10px' }}>›</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Template Grid & Preview Shelf */}
            <div style={{ flex: 1, backgroundColor: '#F9FAFB', padding: '16px', display: 'flex', gap: '16px', overflow: 'hidden' }}>
              <div style={{
                width: '300px',
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                border: '1px solid #E5E7EB',
                boxShadow: 'var(--shadow-sm)',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#1F2937' }}>Portfolio</div>
                <div style={{ height: '80px', backgroundColor: 'rgba(251, 207, 232, 0.7)', borderRadius: '6px', border: '1px solid #FBCFE8' }} />
                <div style={{ height: '64px', backgroundColor: 'rgba(251, 207, 232, 0.5)', borderRadius: '6px', border: '1px solid #FBCFE8' }} />
              </div>

              <div style={{
                flex: 1,
                backgroundColor: '#F8EBDB',
                borderRadius: '8px',
                border: '1px solid rgba(245, 158, 11, 0.2)',
                padding: '16px'
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
