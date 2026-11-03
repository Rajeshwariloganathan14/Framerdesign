import React, { useState } from 'react';
import LayersPanel from './LayersPanel';
import CanvasArea from './CanvasArea';
import PropertiesPanel from './PropertiesPanel';
import '../../styles/editor.css';

export default function EditorMockup({ onPublishClick, onTutorialClick }) {
  const [layoutDropdownOpen, setLayoutDropdownOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState('layout');
  const [selectedLayoutType, setSelectedLayoutType] = useState('frame');
  const [selectedLayer, setSelectedLayer] = useState('Desktop');
  const [activeArtboard, setActiveArtboard] = useState('desktop');

  return (
    <div className="editor-window" data-purpose="editor-canvas-preview">
      {/* ========================================================================= */}
      {/* EDITOR TOP TOOLBAR                                                        */}
      {/* ========================================================================= */}
      <header className="editor-toolbar">
        {/* Left Tools */}
        <div className="toolbar-left">
          {/* Framer Logo Tool */}
          <button className="tool-btn" style={{ padding: '4px 6px' }} title="Framer Main Menu">
            <svg width="12" height="16" fill="currentColor" viewBox="0 0 16 24">
              <path d="M0 0h16v8h-8L0 0zm0 8h8v8H0V8zm8 8h8l-8 8V16z" />
            </svg>
            <svg width="10" height="10" fill="#9CA3AF" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </button>

          <div className="toolbar-divider" />

          {/* Insert Tool */}
          <button
            className={`tool-btn ${selectedTool === 'insert' ? 'active' : ''}`}
            onClick={() => {
              setSelectedTool('insert');
              setLayoutDropdownOpen(false);
            }}
          >
            <span className="tool-plus-badge">+</span>
            <span>Insert</span>
          </button>

          {/* Layout Tool (Toggles Layout floating dropdown) */}
          <button
            className={`tool-btn ${selectedTool === 'layout' || layoutDropdownOpen ? 'active' : ''}`}
            onClick={() => {
              setSelectedTool('layout');
              setLayoutDropdownOpen(!layoutDropdownOpen);
            }}
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <span>Layout</span>
          </button>

          {/* Frame */}
          <button
            className={`tool-btn tool-btn-frame ${selectedTool === 'frame' ? 'active' : ''}`}
            onClick={() => {
              setSelectedTool('frame');
              setLayoutDropdownOpen(false);
            }}
          >
            <span style={{ width: '12px', height: '12px', border: '1px solid #9CA3AF', borderRadius: '2px', display: 'inline-block' }} />
            <span>Frame</span>
          </button>

          {/* Text */}
          <button
            className={`tool-btn tool-btn-text ${selectedTool === 'text' ? 'active' : ''}`}
            onClick={() => {
              setSelectedTool('text');
              setLayoutDropdownOpen(false);
            }}
          >
            <span style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '12px', lineHeight: 1 }}>T</span>
            <span>Text</span>
          </button>

          {/* CMS */}
          <button
            className={`tool-btn tool-btn-cms ${selectedTool === 'cms' ? 'active' : ''}`}
            onClick={() => {
              setSelectedTool('cms');
              setLayoutDropdownOpen(false);
            }}
          >
            <svg width="14" height="14" fill="#6B7280" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 2v2h8V6H6zm0 4v2h8v-2H6zm0 4v2h5v-2H6z" />
            </svg>
            <span>CMS</span>
          </button>
        </div>

        {/* Right Collaboration Tools */}
        <div className="toolbar-right">
          {/* Active Collaborators */}
          <div className="avatar-group">
            <span className="avatar-badge yellow" title="User 1 (Design Lead)">🧔</span>
            <span className="avatar-badge orange" title="User 2 (Editor)">👩</span>
          </div>

          {/* Settings Gear */}
          <button className="tool-btn tool-btn-settings" style={{ padding: '4px' }} title="Project Settings">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <circle cx="12" cy="12" r="3" strokeWidth="2" />
            </svg>
          </button>

          {/* Play / Preview */}
          <button
            className="tool-btn"
            style={{ padding: '4px' }}
            title="Preview Artboard"
            onClick={() => onTutorialClick && onTutorialClick("Interactive Canvas Preview")}
          >
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>

          {/* Invite */}
          <button className="btn-invite tool-btn-invite" onClick={() => onPublishClick && onPublishClick("Invite Team Collaborators")}>
            Invite
          </button>

          {/* Publish */}
          <button className="btn-publish" onClick={() => onPublishClick && onPublishClick("Publish Site to Live URL")}>
            Publish
          </button>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 3-COLUMN WORKSPACE AREA                                                    */}
      {/* ========================================================================= */}
      <div className="editor-workspace">
        {/* Floating Layout Dropdown Menu */}
        {layoutDropdownOpen && (
          <div className="layout-dropdown-menu">
            <div
              className={`dropdown-row ${selectedLayoutType === 'frame' ? 'selected' : ''}`}
              onClick={() => setSelectedLayoutType('frame')}
            >
              <div className="dropdown-row-left">
                <span style={{ width: '13px', height: '13px', border: '1px solid currentColor', borderRadius: '3px', display: 'inline-block' }} />
                <span>Frame</span>
              </div>
              <span className="dropdown-shortcut">F</span>
            </div>

            <div
              className={`dropdown-row ${selectedLayoutType === 'image' ? 'selected' : ''}`}
              onClick={() => setSelectedLayoutType('image')}
            >
              <div className="dropdown-row-left">
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span>Image</span>
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: '#F3F4F6', margin: '4px 0' }} />

            <div
              className={`dropdown-row ${selectedLayoutType === 'rows' ? 'selected' : ''}`}
              onClick={() => setSelectedLayoutType('rows')}
            >
              <div className="dropdown-row-left">
                <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ width: '14px', height: '3px', backgroundColor: 'currentColor', borderRadius: '1px' }} />
                  <span style={{ width: '14px', height: '3px', backgroundColor: 'currentColor', borderRadius: '1px' }} />
                </span>
                <span>Rows</span>
              </div>
              <span className="dropdown-shortcut">⇧R</span>
            </div>

            <div
              className={`dropdown-row ${selectedLayoutType === 'columns' ? 'selected' : ''}`}
              onClick={() => setSelectedLayoutType('columns')}
            >
              <div className="dropdown-row-left">
                <span style={{ display: 'flex', gap: '2px' }}>
                  <span style={{ width: '3px', height: '12px', backgroundColor: 'currentColor', borderRadius: '1px' }} />
                  <span style={{ width: '3px', height: '12px', backgroundColor: 'currentColor', borderRadius: '1px' }} />
                </span>
                <span>Columns</span>
              </div>
              <span className="dropdown-shortcut">⇧C</span>
            </div>

            <div
              className={`dropdown-row ${selectedLayoutType === 'grid' ? 'selected' : ''}`}
              onClick={() => setSelectedLayoutType('grid')}
            >
              <div className="dropdown-row-left">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 2.5zM2.5 2a.5.5 0 0 0-.5.5V7h5V2H2.5zm6 0v5h5V2.5a.5.5 0 0 0-.5-.5H8.5zM2 8v4.5a.5.5 0 0 0 .5.5H7V8H2zm6 5h4.5a.5.5 0 0 0 .5-.5V8H8v5z" />
                </svg>
                <span>Grid</span>
              </div>
              <span className="dropdown-shortcut">⇧G</span>
            </div>
          </div>
        )}

        {/* 1. Left Layers Sidebar */}
        <LayersPanel
          selectedLayer={selectedLayer}
          onSelectLayer={setSelectedLayer}
        />

        {/* 2. Center Canvas Area */}
        <CanvasArea
          activeArtboard={activeArtboard}
          setActiveArtboard={setActiveArtboard}
          onExploreClick={() => onTutorialClick && onTutorialClick("Podcasting Platform Mockup")}
        />

        {/* 3. Right Properties Panel */}
        <PropertiesPanel />
      </div>
    </div>
  );
}
