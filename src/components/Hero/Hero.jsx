import './Hero.css';

const productCards = [
  {
    name: 'Cypher',
    tagline: 'Student AI Companion',
    icon: '🧠',
    color: 'var(--cypher-color)',
    bg: 'var(--cypher-bg)',
  },
  {
    name: 'Morpheus',
    tagline: 'Teacher AI Agent',
    icon: '📚',
    color: 'var(--morpheus-color)',
    bg: 'var(--morpheus-bg)',
  },
  {
    name: 'Zion',
    tagline: '30+ AI Tools',
    icon: '⚡',
    color: 'var(--zion-color)',
    bg: 'var(--zion-bg)',
  },
  {
    name: 'NEO',
    tagline: 'Innovation Lab',
    icon: '🔬',
    color: 'var(--neo-color)',
    bg: 'var(--neo-bg)',
  },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background Effects */}
      <div className="hero__bg">
        <div className="hero__bg-orb hero__bg-orb--1" />
        <div className="hero__bg-orb hero__bg-orb--2" />
        <div className="hero__bg-orb hero__bg-orb--3" />
        <div className="hero__bg-grid" />
      </div>

      <div className="hero__content">
        {/* Left — Text Content */}
        <div className="hero__text">
          <div className="hero__badge">
            <span className="badge badge--primary">
              <span className="badge__dot" />
              India's First Complete AI Ecosystem for Schools
            </span>
          </div>

          <h1 className="hero__title">
            Transform Your School With{' '}
            <span className="hero__title-highlight gradient-text">
              Responsible AI
            </span>
          </h1>

          <p className="hero__subtitle">
            Five integrated products — from personalised student companions 
            to physical AI labs — everything your school needs to lead the AI era. 
            Securely, on your terms.
          </p>

          <div className="hero__actions">
            <a
              href="https://calendly.com/aireadyschool"
              className="btn btn--primary btn--large"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Call
              <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <button
              className="btn btn--secondary btn--large"
              onClick={() => {
                const el = document.getElementById('products');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Products
            </button>
          </div>

          {/* Trust Strip */}
          <div className="hero__trust">
            <p className="hero__trust-label">Trusted by leading K-12 institutions</p>
            <div className="hero__trust-logos">
              <span className="hero__trust-logo">Meru International</span>
              <span className="hero__trust-logo">N.H. Goel</span>
              <span className="hero__trust-logo">Aarambh School</span>
              <span className="hero__trust-logo">Universal Public</span>
            </div>
          </div>
        </div>

        {/* Right — Visual */}
        <div className="hero__visual">
          <div className="hero__visual-wrapper">
            {/* Floating stat - top */}
            <div className="hero__floating-stat hero__floating-stat--top">
              <div className="hero__floating-stat-number">10,000+</div>
              <div className="hero__floating-stat-label">Students & Teachers</div>
            </div>

            {/* Product card grid */}
            <div className="hero__product-grid">
              {productCards.map((product) => (
                <div className="hero__product-card" key={product.name}>
                  <div
                    className="hero__product-card-icon"
                    style={{ background: product.bg, color: product.color }}
                  >
                    {product.icon}
                  </div>
                  <h3>{product.name}</h3>
                  <p>{product.tagline}</p>
                </div>
              ))}

              {/* Matrix spanning full */}
              <div className="hero__product-card hero__product-card--center">
                <div
                  className="hero__product-card-icon"
                  style={{ background: 'var(--matrix-bg)', color: 'var(--matrix-color)' }}
                >
                  🏗️
                </div>
                <div>
                  <h3>Matrix</h3>
                  <p>Complete AI Infrastructure</p>
                </div>
              </div>
            </div>

            {/* Floating stat - bottom */}
            <div className="hero__floating-stat hero__floating-stat--bottom">
              <div className="hero__floating-stat-number">5</div>
              <div className="hero__floating-stat-label">Integrated Products</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
