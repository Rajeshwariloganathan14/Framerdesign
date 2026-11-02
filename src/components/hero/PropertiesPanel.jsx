import React, { useState } from 'react';

export default function PropertiesPanel() {
  const [layoutType, setLayoutType] = useState('stack');
  const [direction, setDirection] = useState('vertical');
  const [align, setAlign] = useState('center');
  const [wrap, setWrap] = useState('no');
  const [gap, setGap] = useState(0);
  const [padding, setPadding] = useState({ top: 80, right: 0, bottom: 0, left: 0 });

  return (
    <aside className="editor-sidebar-right" data-purpose="properties-inspector">
      {/* Top Align Toolbar */}
      <div className="align-row">
        <span className="align-icon-btn" title="Align Left">⇤</span>
        <span className="align-icon-btn" title="Align Center">⇥</span>
        <span className="align-icon-btn" title="Align Top">⇪</span>
        <span className="align-icon-btn" title="Align Middle">⇫</span>
        <span className="align-icon-btn" title="Distribute Horizontally">⇦</span>
        <span className="align-icon-btn" title="Distribute Vertically">⇨</span>
      </div>

      {/* Overlays */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 500, color: '#1F2937' }}>
        <span>Overlays</span>
        <span style={{ color: '#9CA3AF', cursor: 'pointer', fontWeight: 700 }}>+</span>
      </div>

      {/* Link */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 500, color: '#1F2937', borderBottom: '1px solid #F3F4F6', paddingBottom: '8px' }}>
        <span>Link</span>
        <span style={{ color: '#9CA3AF', cursor: 'pointer', fontWeight: 700 }}>+</span>
      </div>

      {/* Breakpoint Settings */}
      <div className="property-group">
        <div className="property-group-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span>Breakpoint</span>
            <span style={{ width: '12px', height: '12px', fontSize: '9px', borderRadius: '50%', border: '1px solid #D1D5DB', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF' }}>i</span>
          </div>
        </div>

        {/* Position */}
        <div className="prop-row">
          <span className="prop-label">Position</span>
          <div style={{ display: 'flex', gap: '4px' }}>
            <div className="prop-input-box" style={{ flex: 1 }}>
              <span>0</span>
              <span style={{ color: '#9CA3AF', fontSize: '9px' }}>X</span>
            </div>
            <div className="prop-input-box" style={{ flex: 1 }}>
              <span>0</span>
              <span style={{ color: '#9CA3AF', fontSize: '9px' }}>Y</span>
            </div>
          </div>
        </div>

        {/* Width */}
        <div className="prop-row">
          <span className="prop-label">Width</span>
          <div style={{ display: 'flex', gap: '4px' }}>
            <div className="prop-input-box" style={{ width: '64px' }}>
              <span>1400</span>
            </div>
            <div className="prop-input-box" style={{ flex: 1, color: '#4B5563' }}>
              <span>Fixed</span>
              <span style={{ fontSize: '8px', color: '#9CA3AF' }}>▾</span>
            </div>
          </div>
        </div>

        {/* Height */}
        <div className="prop-row">
          <span className="prop-label">Height</span>
          <div style={{ display: 'flex', gap: '4px' }}>
            <div className="prop-input-box" style={{ width: '64px' }}>
              <span>Auto</span>
            </div>
            <div className="prop-input-box" style={{ flex: 1, color: '#4B5563' }}>
              <span>Fit</span>
              <span style={{ fontSize: '8px', color: '#9CA3AF' }}>▾</span>
            </div>
          </div>
        </div>
      </div>

      {/* Layout Settings */}
      <div className="property-group" style={{ borderBottom: 'none' }}>
        <div className="property-group-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span>Layout</span>
            <span style={{ width: '12px', height: '12px', fontSize: '9px', borderRadius: '50%', border: '1px solid #D1D5DB', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF' }}>i</span>
          </div>
          <span style={{ color: '#9CA3AF', cursor: 'pointer', fontWeight: 700 }}>−</span>
        </div>

        {/* Type: Stack / Grid */}
        <div className="prop-row">
          <span className="prop-label">Type</span>
          <div className="segmented-control">
            <button
              className={`segmented-btn ${layoutType === 'stack' ? 'active' : ''}`}
              onClick={() => setLayoutType('stack')}
            >
              Stack
            </button>
            <button
              className={`segmented-btn ${layoutType === 'grid' ? 'active' : ''}`}
              onClick={() => setLayoutType('grid')}
            >
              Grid
            </button>
          </div>
        </div>

        {/* Direction */}
        <div className="prop-row">
          <span className="prop-label">Direction</span>
          <div className="segmented-control" style={{ display: 'flex', justifyContent: 'space-around' }}>
            <button
              style={{ flex: 1, padding: '2px 0', color: direction === 'horizontal' ? '#0099FF' : '#6B7280', fontWeight: direction === 'horizontal' ? 700 : 400, background: direction === 'horizontal' ? '#FFFFFF' : 'none', borderRadius: '4px' }}
              onClick={() => setDirection('horizontal')}
            >
              ↔
            </button>
            <button
              style={{ flex: 1, padding: '2px 0', color: direction === 'vertical' ? '#0099FF' : '#6B7280', fontWeight: direction === 'vertical' ? 700 : 400, background: direction === 'vertical' ? '#FFFFFF' : 'none', borderRadius: '4px' }}
              onClick={() => setDirection('vertical')}
            >
              ↕
            </button>
          </div>
        </div>

        {/* Distribute */}
        <div className="prop-row">
          <span className="prop-label">Distribute</span>
          <div className="prop-input-box">
            <span>Start</span>
            <span style={{ fontSize: '8px', color: '#9CA3AF' }}>▾</span>
          </div>
        </div>

        {/* Align */}
        <div className="prop-row">
          <span className="prop-label">Align</span>
          <div className="segmented-control" style={{ display: 'flex', justifyContent: 'space-between', padding: '2px 8px', color: '#9CA3AF' }}>
            <span
              style={{ cursor: 'pointer', color: align === 'left' ? '#0099FF' : '#9CA3AF', fontWeight: align === 'left' ? 700 : 400 }}
              onClick={() => setAlign('left')}
            >
              |▫
            </span>
            <span
              style={{ cursor: 'pointer', color: align === 'center' ? '#0099FF' : '#9CA3AF', fontWeight: align === 'center' ? 700 : 400 }}
              onClick={() => setAlign('center')}
            >
              ▫|▫
            </span>
            <span
              style={{ cursor: 'pointer', color: align === 'right' ? '#0099FF' : '#9CA3AF', fontWeight: align === 'right' ? 700 : 400 }}
              onClick={() => setAlign('right')}
            >
              ▫|
            </span>
          </div>
        </div>

        {/* Wrap */}
        <div className="prop-row">
          <span className="prop-label">Wrap</span>
          <div className="segmented-control">
            <button
              className={`segmented-btn ${wrap === 'yes' ? 'active' : ''}`}
              onClick={() => setWrap('yes')}
            >
              Yes
            </button>
            <button
              className={`segmented-btn ${wrap === 'no' ? 'active' : ''}`}
              onClick={() => setWrap('no')}
            >
              No
            </button>
          </div>
        </div>

        {/* Gap */}
        <div className="prop-row">
          <span className="prop-label">Gap</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div className="prop-input-box" style={{ width: '48px' }}>
              <span>{gap}</span>
            </div>
            <input
              type="range"
              min="0"
              max="48"
              value={gap}
              onChange={(e) => setGap(Number(e.target.value))}
              style={{ flex: 1, accentColor: '#0099FF' }}
            />
          </div>
        </div>

        {/* Padding */}
        <div className="prop-row">
          <span className="prop-label">Padding</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px', flex: 1 }}>
              <span className="prop-input-box" style={{ justifyContent: 'center', padding: '2px 4px', fontSize: '9px' }}>{padding.top}</span>
              <span className="prop-input-box" style={{ justifyContent: 'center', padding: '2px 4px', fontSize: '9px' }}>{padding.right}</span>
              <span className="prop-input-box" style={{ justifyContent: 'center', padding: '2px 4px', fontSize: '9px' }}>{padding.bottom}</span>
              <span className="prop-input-box" style={{ justifyContent: 'center', padding: '2px 4px', fontSize: '9px' }}>{padding.left}</span>
            </div>
            <span style={{ color: '#9CA3AF', cursor: 'pointer', fontSize: '12px' }}>⊡</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
