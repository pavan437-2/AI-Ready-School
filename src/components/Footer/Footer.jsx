import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__brand-name">
              <div className="footer__brand-icon">AI</div>
              AI Ready <span>School</span>
            </div>
            <p className="footer__brand-desc">
              India's first complete AI ecosystem for K-12 schools. 
              Empowering students, teachers, and institutions to lead the AI era — responsibly.
            </p>
            <div className="footer__socials">
              <a href="https://twitter.com/aireadyschool" className="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                𝕏
              </a>
              <a href="https://linkedin.com/company/aireadyschool" className="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                in
              </a>
              <a href="https://instagram.com/aireadyschool" className="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                📷
              </a>
              <a href="https://youtube.com/@aireadyschool" className="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                ▶
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="footer__column-title">Products</h3>
            <a href="#products" className="footer__link">Cypher</a>
            <a href="#products" className="footer__link">Morpheus</a>
            <a href="#products" className="footer__link">Zion</a>
            <a href="#products" className="footer__link">NEO</a>
            <a href="#products" className="footer__link">Matrix</a>
          </div>

          {/* Company */}
          <div>
            <h3 className="footer__column-title">Company</h3>
            <a href="#" className="footer__link">About Us</a>
            <a href="#" className="footer__link">Our Philosophy</a>
            <a href="#" className="footer__link">Use Cases</a>
            <a href="#" className="footer__link">Blog</a>
            <a href="#" className="footer__link">Careers</a>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer__column-title">Get In Touch</h3>
            <a href="mailto:hello@aireadyschool.com" className="footer__link">hello@aireadyschool.com</a>
            <a href="https://calendly.com/aireadyschool" className="footer__link" target="_blank" rel="noopener noreferrer">Schedule a Call</a>
            <a href="https://app.aireadyschool.com" className="footer__link" target="_blank" rel="noopener noreferrer">Sign In</a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} AI Ready School. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
