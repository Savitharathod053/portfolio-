import { motion } from 'motion/react';
import { Compass, Sparkles, Terminal } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolio.ts';

export function About() {
  const { profile } = PORTFOLIO_CONFIG;

  const focusPoints = [
    {
      title: 'Problem-First Engineering',
      desc: 'Identifying genuine hurdles faced by students and developers—like event ticketing bottlenecks or codebase comprehension—and prototyping robust software solutions.',
      tag: 'Methodology',
      color: 'var(--accent-yellow)',
    },
    {
      title: 'Applied AI & LLM Workflows',
      desc: 'Integrating Gemini API for structured planning outputs and developing geospatial risk classification models (SIH 2026 problem statement).',
      tag: 'AI/ML Focus',
      color: 'var(--accent-lavender)',
    },
    {
      title: 'AI-Assisted Development',
      desc: 'Actively using modern developer tools (Antigravity, ChatGPT) for technical research, rapid code generation, debugging, and continuous learning.',
      tag: 'Tooling',
      color: 'var(--accent-mint)',
    },
  ];

  return (
    <section
      id="about"
      style={{
        padding: '7rem 0',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '680px', marginBottom: '4rem' }}>
          <span className="section-badge">
            <Compass size={14} />
            BACKGROUND & OBJECTIVE
          </span>
          <h2 className="section-title-editorial">
            Building Real Solutions From Real Problems
          </h2>
          <p className="section-subtitle-editorial">
            An engineering perspective focused on practical prototypes, dependable architectures, and rapid learning.
          </p>
        </div>

        {/* Content Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
          className="about-editorial-grid"
        >
          {/* Main Editorial Narrative Card */}
          <div
            className="editorial-card"
            style={{
              padding: '2.5rem',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--text-dark)',
              }}
            >
              <Terminal size={16} />
              <span>WHO AM I_</span>
            </div>

            {profile.bioExtended.map((p, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.75,
                  color: 'var(--text-body)',
                }}
              >
                {p}
              </p>
            ))}

            <div
              style={{
                marginTop: '0.5rem',
                paddingTop: '1.5rem',
                borderTop: '2px dashed var(--border-subtle)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    marginBottom: '0.2rem',
                  }}
                >
                  Institution
                </span>
                <span style={{ fontWeight: 700, color: 'var(--text-dark)', fontSize: '0.95rem' }}>
                  Vardhaman College of Engineering
                </span>
              </div>

              <div>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    marginBottom: '0.2rem',
                  }}
                >
                  Academic Score
                </span>
                <span
                  style={{
                    fontWeight: 700,
                    color: '#059669',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.95rem',
                  }}
                >
                  9.03 CGPA (2nd Year)
                </span>
              </div>

              <div>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    marginBottom: '0.2rem',
                  }}
                >
                  Target Opportunity
                </span>
                <span style={{ fontWeight: 700, color: 'var(--text-dark)', fontSize: '0.95rem' }}>
                  Software Dev or AI/ML Internship
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked Editorial Sticky Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {focusPoints.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, rotate: idx % 2 === 0 ? 0.8 : -0.8 }}
                className="editorial-card"
                style={{
                  padding: '1.75rem',
                  backgroundColor: item.color,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.75rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.725rem',
                      fontWeight: 700,
                      backgroundColor: '#FFFFFF',
                      border: '1.5px solid var(--border-editorial)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '6px',
                    }}
                  >
                    {item.tag}
                  </span>
                  <Sparkles size={16} />
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-dark)',
                    marginBottom: '0.35rem',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-body)',
                    lineHeight: 1.55,
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-editorial-grid {
            grid-template-columns: 1.25fr 0.95fr !important;
          }
        }
      `}</style>
    </section>
  );
}
