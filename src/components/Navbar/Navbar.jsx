import { useState, useEffect } from 'react';
import './Navbar.css';

const products = [
  {
    name: 'Cypher',
    tagline: 'AI Learning Companion',
    description: 'Personalised AI companion that guides student thinking',
    icon: '🧠',
    color: 'var(--cypher-color)',
    bg: 'var(--cypher-bg)',
  },
  {
    name: 'Morpheus',
    tagline: 'AI Teaching Agent',
    description: 'Intelligent assistant that frees teachers to teach',
    icon: '📚',
    color: 'var(--morpheus-color)',
    bg: 'var(--morpheus-bg)',
  },
  {
    name: 'Zion',
    tagline: 'AI Tool Suite',
    description: '30+ AI tools for learning, creativity & research',
    icon: '⚡',
    color: 'var(--zion-color)',
    bg: 'var(--zion-bg)',
  },
  {
    name: 'NEO',
    tagline: 'AI Innovation Lab',
    description: 'Physical AI lab with latest devices & platforms',
    icon: '🔬',
    color: 'var(--neo-color)',
    bg: 'var(--neo-bg)',
  },
  {
    name: 'Matrix',
    tagline: 'AI Infrastructure',
    description: 'Complete AI infrastructure for schools',
    icon: '🏗️',
    color: 'var(--matrix-color)',
    bg: 'var(--matrix-bg)',
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollToSection = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#" className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="navbar__logo-icon">AI</div>
          AI Ready <span>School</span>
        </a>

        {/* Desktop Links */}
        <div className="navbar__links">
          <div className="navbar__dropdown-wrapper">
            <button className="navbar__link" aria-haspopup="true">
              Products
              <svg className="navbar__link-chevron" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="navbar__dropdown" role="menu">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="navbar__dropdown-item"
                  role="menuitem"
                  onClick={() => scrollToSection('products')}
                >
                  <div
                    className="navbar__dropdown-icon"
                    style={{ background: product.bg, color: product.color }}
                  >
                    {product.icon}
                  </div>
                  <div className="navbar__dropdown-text">
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="navbar__link" onClick={() => scrollToSection('products')}>
            Use Cases
          </button>

          <button className="navbar__link" onClick={() => scrollToSection('testimonials')}>
            Testimonials
          </button>

          <button className="navbar__link" onClick={() => scrollToSection('cta')}>
            Blog
          </button>
        </div>

        {/* Actions */}
        <div className="navbar__actions">
          <a href="https://app.aireadyschool.com" className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
            Sign In
          </a>
          <a href="https://calendly.com/aireadyschool" className="btn btn--primary" target="_blank" rel="noopener noreferrer">
            Schedule a Call
            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`navbar__toggle ${mobileOpen ? 'navbar__toggle--active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile-menu ${mobileOpen ? 'navbar__mobile-menu--open' : ''}`}>
        <div className="navbar__mobile-section-title">Products</div>
        {products.map((product) => (
          <a
            key={product.name}
            className="navbar__mobile-sub-link"
            onClick={() => scrollToSection('products')}
          >
            {product.icon} {product.name} — {product.tagline}
          </a>
        ))}

        <a className="navbar__mobile-link" onClick={() => scrollToSection('products')}>Use Cases</a>
        <a className="navbar__mobile-link" onClick={() => scrollToSection('testimonials')}>Testimonials</a>
        <a className="navbar__mobile-link" onClick={() => scrollToSection('cta')}>Blog</a>

        <div className="navbar__mobile-actions">
          <a href="https://app.aireadyschool.com" className="btn btn--secondary" target="_blank" rel="noopener noreferrer">
            Sign In
          </a>
          <a href="https://calendly.com/aireadyschool" className="btn btn--primary" target="_blank" rel="noopener noreferrer">
            Schedule a Call
            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
