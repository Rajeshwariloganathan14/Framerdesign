import React, { useState } from 'react';
import '../../styles/navbar.css';

export default function Navbar({ onPublishClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="main-header" data-purpose="primary-header">
      {/* Brand & Logo */}
      <a href="#" className="brand-wrapper" aria-label="Framer Home">
        <svg className="framer-logo-icon" fill="currentColor" viewBox="0 0 16 24">
          <path d="M0 0h16v8h-8L0 0zm0 8h8v8H0V8zm8 8h8l-8 8V16z" />
        </svg>
        <span className="brand-name">Framer</span>
      </a>

      {/* Center Navigation Links with Interactive Dropdowns */}
      <nav className="desktop-nav" aria-label="Main Navigation">
        {/* Why Framer Dropdown */}
        <div className="nav-item-dropdown">
          <button className="nav-link-btn" aria-haspopup="true">
            <span>Why Framer</span>
            <svg className="nav-chevron" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </button>
          <div className="nav-dropdown-menu">
            <a href="#canvas" className="dropdown-item">
              <span className="dropdown-title">Free-form Canvas</span>
              <span className="dropdown-desc">Design visually with complete creative freedom</span>
            </a>
            <a href="#breakpoints" className="dropdown-item">
              <span className="dropdown-title">Visual Breakpoints</span>
              <span className="dropdown-desc">Adapt layouts side-by-side for every screen size</span>
            </a>
            <a href="#figma" className="dropdown-item">
              <span className="dropdown-title">Figma Copy & Paste</span>
              <span className="dropdown-desc">Directly copy vectors and artboards from Figma</span>
            </a>
          </div>
        </div>

        {/* Templates Dropdown */}
        <div className="nav-item-dropdown">
          <button className="nav-link-btn" aria-haspopup="true">
            <span>Templates</span>
            <svg className="nav-chevron" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </button>
          <div className="nav-dropdown-menu">
            <a href="#portfolio" className="dropdown-item">
              <span className="dropdown-title">Portfolios</span>
              <span className="dropdown-desc">Showcase your creative work in style</span>
            </a>
            <a href="#agency" className="dropdown-item">
              <span className="dropdown-title">Agency & Studios</span>
              <span className="dropdown-desc">High-converting agency layouts</span>
            </a>
            <a href="#startups" className="dropdown-item">
              <span className="dropdown-title">SaaS & Startups</span>
              <span className="dropdown-desc">Product teasers and landing templates</span>
            </a>
          </div>
        </div>

        {/* Community Dropdown */}
        <div className="nav-item-dropdown">
          <button className="nav-link-btn" aria-haspopup="true">
            <span>Community</span>
            <svg className="nav-chevron" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </button>
          <div className="nav-dropdown-menu">
            <a href="#community" className="dropdown-item">
              <span className="dropdown-title">Framer Community</span>
              <span className="dropdown-desc">Join 100,000+ designers and creators</span>
            </a>
            <a href="#awards" className="dropdown-item">
              <span className="dropdown-title">Site Awards</span>
              <span className="dropdown-desc">Explore award-winning websites built in Framer</span>
            </a>
          </div>
        </div>

        {/* Resources Dropdown */}
        <div className="nav-item-dropdown">
          <button className="nav-link-btn" aria-haspopup="true">
            <span>Resources</span>
            <svg className="nav-chevron" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </button>
          <div className="nav-dropdown-menu">
            <a href="#learn" className="dropdown-item">
              <span className="dropdown-title">Learn Framer</span>
              <span className="dropdown-desc">Tutorials, interactive guides, and courses</span>
            </a>
            <a href="#desktop" className="dropdown-item">
              <span className="dropdown-title">Desktop App</span>
              <span className="dropdown-desc">Download native apps for macOS and Windows</span>
            </a>
          </div>
        </div>

        <a className="nav-link" href="#awards">Awards</a>
        <a className="nav-link" href="#business">Business</a>
        <a className="nav-link" href="#pricing">Pricing</a>
      </nav>

      {/* Right Action Button */}
      <div className="header-actions">
        <button
          className="publish-btn-gradient desktop-publish-btn"
          onClick={() => onPublishClick && onPublishClick("Publish Your Site for Free")}
        >
          Publish your site for free
        </button>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#canvas" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Why Framer</a>
        <a href="#templates" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Templates</a>
        <a href="#community" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Community</a>
        <a href="#resources" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Resources</a>
        <a href="#awards" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Awards</a>
        <a href="#business" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Business</a>
        <a href="#pricing" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
        <button
          className="publish-btn-gradient"
          style={{ width: '100%', marginTop: '8px' }}
          onClick={() => {
            setMobileMenuOpen(false);
            if (onPublishClick) onPublishClick("Publish Your Site for Free");
          }}
        >
          Publish your site for free
        </button>
      </div>
    </header>
  );
}
