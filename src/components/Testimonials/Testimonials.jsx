import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Testimonials.css';

const stats = [
  { number: '10,000+', label: 'Students & Teachers' },
  { number: '7+', label: 'Partner Schools' },
  { number: '30+', label: 'AI Tools Available' },
];

const testimonials = [
  {
    text: 'The AI-Ready School App is a game-changer. It simplifies routine tasks like generating worksheets, lesson plans, and assignments, while also helping us create engaging content — images, videos, and presentations — that make complex topics easier to teach.',
    name: 'Mansi Sharma',
    role: 'TGT English Teacher',
    school: 'NH Goel World School, Raipur',
    initials: 'MS',
  },
  {
    text: 'AI Ready School has transformed how we approach innovation in education. The tools are intuitive, safe for students, and the support team understands the needs of a real school environment. It\'s been a huge step forward for us.',
    name: 'Shraddha Verma',
    role: 'Academic Coordinator',
    school: 'Meru International School',
    initials: 'SV',
  },
];

const schoolLogos = [
  'Meru International',
  'N.H. Goel',
  'The Aarambh School',
  'Universal Public School',
];

export default function Testimonials() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [statsRef, statsVisible] = useScrollReveal();
  const [cardsRef, cardsVisible] = useScrollReveal();

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__bg-accent" />

      <div className="testimonials__inner">
        {/* Header */}
        <div
          ref={headerRef}
          className="testimonials__header"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <p className="testimonials__label">Social Proof</p>
          <h2 className="testimonials__title">
            Trusted by Educators Across India
          </h2>
          <p className="testimonials__subtitle">
            Real teachers, real schools, real impact. See what educators say about their experience.
          </p>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="testimonials__stats"
          style={{
            opacity: statsVisible ? 1 : 0,
            transform: statsVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out 0.1s',
          }}
        >
          {stats.map((stat) => (
            <div className="testimonials__stat" key={stat.label}>
              <div className="testimonials__stat-number">{stat.number}</div>
              <div className="testimonials__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div
          ref={cardsRef}
          className="testimonials__grid"
          style={{
            opacity: cardsVisible ? 1 : 0,
            transform: cardsVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out 0.2s',
          }}
        >
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.name}>
              <div className="testimonial-card__quote-icon">"</div>
              <p className="testimonial-card__text">{testimonial.text}</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                  {testimonial.initials}
                </div>
                <div className="testimonial-card__author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}, {testimonial.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* School Logos */}
        <div className="testimonials__logos">
          <p className="testimonials__logos-label">Schools we work with</p>
          <div className="testimonials__logos-row">
            {schoolLogos.map((logo) => (
              <span className="testimonials__logo-item" key={logo}>{logo}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
