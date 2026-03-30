import { useScrollReveal } from '../../hooks/useScrollReveal';
import './CTA.css';

export default function CTA() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="cta" id="cta">
      <div className="cta__card">
        <div
          ref={ref}
          className="cta__inner"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.96)',
            transition: 'all 0.6s ease-out',
          }}
        >
          {/* Background orbs */}
          <div className="cta__bg-orb cta__bg-orb--1" />
          <div className="cta__bg-orb cta__bg-orb--2" />

          <div className="cta__content">
            <p className="cta__label">Get Started</p>
            <h2 className="cta__title">
              Ready to Transform Your School?
            </h2>
            <p className="cta__subtitle">
              Join India's leading schools in adopting AI responsibly. 
              Book a 30-minute call to see how AI Ready School can work for your institution.
            </p>

            <div className="cta__actions">
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
              <a
                href="mailto:hello@aireadyschool.com"
                className="btn btn--secondary btn--large"
              >
                Contact Us
              </a>
            </div>

            <div className="cta__trust">
              <span className="cta__trust-item">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No commitment required
              </span>
              <span className="cta__trust-item">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                30-minute session
              </span>
              <span className="cta__trust-item">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Customised demo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
