import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Products.css';

const productsData = [
  {
    name: 'Cypher',
    category: 'AI Learning Companion',
    description:
      'Cypher makes sure students ask honest, brave, and thoughtful questions. A personalised AI companion that guides thinking — not just answers.',
    features: [
      'Understands how students learn',
      'Guides thinking, not answers',
      'Personalised learning support',
      'Builds independent thinkers',
    ],
    icon: '🧠',
    color: 'var(--cypher-color)',
    bg: 'var(--cypher-bg)',
    visualEmoji: '🤖',
    visualLabel: 'AI Learning Companion',
    tags: ['Text', 'Code', 'Image', 'Assessment', 'Research'],
  },
  {
    name: 'Morpheus',
    category: 'AI Teaching Agent',
    description:
      'An AI-powered teaching agent that handles lesson plans, assessments, and content creation — so teachers can focus on what matters: teaching.',
    features: [
      'Lesson plan & content creation',
      'AI-powered assessments',
      'Integrated AI tool suite',
      'Real-time student progress tracking',
    ],
    icon: '📚',
    color: 'var(--morpheus-color)',
    bg: 'var(--morpheus-bg)',
    visualEmoji: '👩‍🏫',
    visualLabel: 'AI Teaching Agent',
    tags: ['Lesson Plans', 'Assessments', 'Content', 'Analytics'],
  },
  {
    name: 'Zion',
    category: 'AI Tool Suite',
    description:
      '30+ AI tools for your school — learning, creative, research, and project tools — all in one secure, integrated platform.',
    features: [
      'Creative Hub for media generation',
      'Learning Hub for personalised study',
      'Project Hub for collaboration',
      'Research Hub for AI exploration',
    ],
    icon: '⚡',
    color: 'var(--zion-color)',
    bg: 'var(--zion-bg)',
    visualEmoji: '🛠️',
    visualLabel: '30+ AI Tools',
    tags: ['Creative', 'Learning', 'Project', 'Research'],
  },
  {
    name: 'NEO',
    category: 'AI Innovation Lab',
    description:
      'NEO turns your school into a hands-on AI innovation centre — where students don\'t just learn about AI, they build with it.',
    features: [
      'Hands-on AI learning lab',
      'Project-based learning',
      'Latest AI devices & platforms',
      'AI competitions & clubs',
    ],
    icon: '🔬',
    color: 'var(--neo-color)',
    bg: 'var(--neo-bg)',
    visualEmoji: '🧪',
    visualLabel: 'AI Innovation Lab',
    tags: ['Robotics', 'AI Projects', 'Competitions', 'Clubs'],
  },
  {
    name: 'Matrix',
    category: 'AI Infrastructure',
    description:
      'Complete AI infrastructure for schools — secure, compliant, and built to scale. Everything runs on your terms.',
    features: [
      'Enterprise-grade security',
      'Data privacy by design',
      'Scalable cloud infrastructure',
      'Seamless LMS integration',
    ],
    icon: '🏗️',
    color: 'var(--matrix-color)',
    bg: 'var(--matrix-bg)',
    visualEmoji: '☁️',
    visualLabel: 'AI Infrastructure',
    tags: ['Security', 'Privacy', 'Cloud', 'Integration'],
  },
];

function ProductRow({ product, reverse, index }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`product-row ${reverse ? 'product-row--reverse' : ''} ${
        isVisible ? 'product-row--visible' : ''
      }`}
    >
      {/* Info */}
      <div className="product-row__info">
        <div className="product-row__icon-label">
          <div
            className="product-row__icon"
            style={{ background: product.bg, color: product.color }}
          >
            {product.icon}
          </div>
          <span className="product-row__category" style={{ color: product.color }}>
            {product.category}
          </span>
        </div>

        <h3 className="product-row__name">{product.name}</h3>
        <p className="product-row__desc">{product.description}</p>

        <div className="product-row__features">
          {product.features.map((feature) => (
            <div className="product-row__feature" key={feature}>
              <span
                className="product-row__feature-check"
                style={{ background: product.bg, color: product.color }}
              >
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {feature}
            </div>
          ))}
        </div>

        <a className="product-row__cta" style={{ color: product.color }} href="#">
          Learn more about {product.name}
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>

      {/* Visual */}
      <div className="product-row__visual">
        <div
          className="product-row__visual-card"
          style={{ background: `linear-gradient(135deg, ${product.bg}, white)` }}
        >
          <div className="product-row__visual-emoji">{product.visualEmoji}</div>
          <div className="product-row__visual-label" style={{ color: product.color }}>
            {product.visualLabel}
          </div>
          <div className="product-row__visual-features">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="product-row__visual-tag"
                style={{ background: `${product.color}15`, color: product.color }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section className="products" id="products">
      <div
        ref={headerRef}
        className="products__header"
        style={{
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s ease-out',
        }}
      >
        <p className="products__label">The Ecosystem</p>
        <h2 className="products__title">
          Five Products. One Mission.
        </h2>
        <p className="products__subtitle">
          Every product works independently — and even better together. 
          A complete ecosystem designed for how schools actually work.
        </p>
      </div>

      <div className="products__list">
        {productsData.map((product, index) => (
          <ProductRow
            key={product.name}
            product={product}
            reverse={index % 2 === 1}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
