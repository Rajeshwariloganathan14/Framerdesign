import React from 'react';
import '../../styles/footer.css';

export default function Footer() {
  return (
    <footer className="site-footer" data-purpose="site-footer">
      <div className="footer-container">
        {/* Column 1: Company & Product */}
        <div className="footer-col footer-col-1">
          <div>
            <h4 className="footer-group-title">Company</h4>
            <ul className="footer-link-list">
              <li><a href="#about">About</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#cookies">Cookies</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#abuse">Abuse</a></li>
              <li><a href="#charges">Charges</a></li>
              <li><a href="#terms">Terms</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-group-title">Product</h4>
            <ul className="footer-link-list">
              <li><a href="#learn">Learn</a></li>
              <li><a href="#plugins">Plugins</a></li>
              <li><a href="#awards">Awards</a></li>
              <li><a href="#agencies">Agencies</a></li>
              <li><a href="#startups">Startups</a></li>
              <li><a href="#freelancers">Freelancers</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
        </div>

        {/* Column 2: Templates */}
        <div className="footer-col footer-col-2">
          <h4 className="footer-group-title">Templates</h4>
          <ul className="footer-link-list">
            <li><a href="#new">New</a></li>
            <li><a href="#free">Free</a></li>
            <li><a href="#agency">Agency</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#brand">Brand Guidelines</a></li>
            <li><a href="#changelog">Changelog</a></li>
            <li><a href="#landing">Landing Page</a></li>
            <li><a href="#personal">Personal</a></li>
            <li><a href="#photography">Photography</a></li>
            <li><a href="#podcast">Podcast</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#splash">Splash Page</a></li>
            <li><a href="#startup">Startup</a></li>
            <li><a href="#web3">Web3</a></li>
            <li><a href="#3d">3D</a></li>
          </ul>
        </div>

        {/* Column 3: Resources, Support & Social Icons */}
        <div className="footer-col footer-col-3">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            <div>
              <h4 className="footer-group-title">Resources</h4>
              <ul className="footer-link-list">
                <li><a href="#desktop">Desktop Apps</a></li>
                <li><a href="#figma">Figma Plugin</a></li>
                <li><a href="#partner">Partner program</a></li>
                <li><a href="#webflow">Webflow vs. Framer</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-group-title">Support</h4>
              <ul className="footer-link-list">
                <li><a href="#updates">Updates</a></li>
                <li><a href="#community">Community</a></li>
                <li><a href="#business">Business</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Social Icons Row & Copyright */}
          <div className="footer-social-section">
            <div className="social-icons-row">
              {/* Twitter / X */}
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="Twitter">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="YouTube">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="Instagram">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Pinterest */}
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="Pinterest">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0a12 12 0 0 0-4.37 23.18c-.06-.94-.12-2.39.03-3.42l.9-3.82s-.23-.46-.23-1.15c0-1.07.62-1.87 1.4-1.87.66 0 .98.5 0.98 1.1 0 .66-.42 1.66-.64 2.58-.18.77.39 1.4 1.15 1.4 1.38 0 2.45-1.46 2.45-3.56 0-1.86-1.34-3.16-3.25-3.16-2.38 0-3.77 1.78-3.77 3.63 0 .72.28 1.49.62 1.91.07.08.08.15.06.24l-.23.95c-.04.15-.13.18-.3.11-1.12-.52-1.82-2.15-1.82-3.46 0-2.82 2.05-5.41 5.91-5.41 3.1 0 5.52 2.21 5.52 5.17 0 3.09-1.95 5.57-4.65 5.57-.91 0-1.76-.47-2.05-1.03l-.56 2.13c-.2 0.78-.75 1.75-1.12 2.35A12 12 0 1 0 12 0z"/>
                </svg>
              </a>
              {/* Dribbble */}
              <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="Dribbble">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10.18 10.457c-.672-.085-2.617-.308-5.112.359-.229-.533-.473-1.076-.732-1.624 3.064-1.616 4.298-3.328 4.417-3.498 1.107 1.347 1.838 3.045 1.427 4.763zm-3.037-6.279c-.144.195-1.353 1.79-4.323 3.324-1.579-2.909-3.292-5.263-3.454-5.485 1.488-.588 3.116-.889 4.814-.889 1.075 0 2.109.182 3.076.518l-.113.532zm-9.757-2.618c.164.225 1.859 2.553 3.447 5.426-3.882 1.157-7.989 1.135-8.411 1.135.882-2.88 3.003-5.239 4.964-6.561zm-7.616 8.529c.358 0 3.864.015 7.49-1.036.262.548.508 1.096.737 1.637-4.331 1.423-8.222 4.391-8.384 4.516-.423-1.482-.67-3.045-.67-4.664 0-.151.011-.299.017-.449.255-.004.542-.004.81-.004zm2.144 7.649c.174-.127 3.518-2.68 7.688-4.086 1.095 2.871 1.576 5.568 1.634 5.925-1.282.529-2.69.83-4.169.83-2.072 0-3.987-.604-5.597-1.644l.444-1.025zm11.393 1.085c-.066-.379-.533-2.881-1.589-5.632 2.302-.663 4.286-.481 4.896-.407-.29 2.682-1.637 5.008-3.307 6.039z"/>
                </svg>
              </a>
            </div>
            <div className="footer-copyright">
              Framer B.V. © 2023
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
