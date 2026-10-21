import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Trophy, Star } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolio.ts';

// Subtle Animated Count-Up component for verified numbers only
function AnimatedStat({ value, label, subtitle }: { value: string; label: string; subtitle: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState<string>('0');

  useEffect(() => {
    if (!isInView) return;

    // Check if numeric or decimal
    const numericPart = parseFloat(value);
    if (isNaN(numericPart)) {
      setDisplayValue(value);
      return;
    }

    const isDecimal = value.includes('.');
    const duration = 1400; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = ease * numericPart;

      setDisplayValue(isDecimal ? current.toFixed(2) : Math.floor(current).toString());

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="editorial-card"
      style={{
        padding: '2rem 1.5rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
          fontWeight: 700,
          color: 'var(--text-dark)',
          lineHeight: 1,
          marginBottom: '0.5rem',
        }}
      >
        {displayValue}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1rem',
          fontWeight: 700,
          color: 'var(--text-dark)',
          marginBottom: '0.2rem',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
        }}
      >
        {subtitle}
      </div>
    </div>
  );
}

export function Achievements() {
  const { achievements } = PORTFOLIO_CONFIG;

  const verifiedStats = [
    { value: '9.03', label: 'B.Tech CGPA', subtitle: 'CSE (AI & ML) Vardhaman' },
    { value: '9.7', label: 'Intermediate CGPA', subtitle: 'Sri Chaithanya (2025)' },
    { value: '4', label: 'Full Prototypes', subtitle: 'AI/ML & Web Platforms' },
    { value: '1', label: 'SIH Shortlist', subtitle: 'Smart India Hackathon 2026' },
  ];

  return (
    <section
      id="achievements"
      style={{
        padding: '7rem 0',
        position: 'relative',
        backgroundColor: 'var(--bg-paper)',
        borderTop: '2px solid var(--border-editorial)',
        borderBottom: '2px solid var(--border-editorial)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
          <span className="section-badge">
            <Trophy size={14} />
            VERIFIED HIGHLIGHTS
          </span>
          <h2 className="section-title-editorial">
            Milestones & Academic Distinctions
          </h2>
          <p className="section-subtitle-editorial">
            Verified competitive hackathon participation, internal SIH selections, and academic performance throughout secondary and undergraduate studies.
          </p>
        </div>

        {/* Large Numbers Count-Up Banner */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem',
          }}
        >
          {verifiedStats.map((stat, idx) => (
            <AnimatedStat
              key={idx}
              value={stat.value}
              label={stat.label}
              subtitle={stat.subtitle}
            />
          ))}
        </div>

        {/* Detailed Achievements Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {achievements.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              className="editorial-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: item.badge === 'Hackathon'
                  ? 'var(--accent-yellow)'
                  : '#FFFFFF',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.725rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.65rem',
                      borderRadius: '9999px',
                      backgroundColor: '#FFFFFF',
                      border: '1.5px solid var(--border-editorial)',
                      color: 'var(--text-dark)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.badge}
                  </span>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: 'var(--text-dark)',
                    }}
                  >
                    {item.date}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--text-dark)',
                    marginBottom: '0.35rem',
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--text-body)',
                    marginBottom: '0.85rem',
                    fontWeight: 600,
                  }}
                >
                  {item.subtitle}
                </p>

                <p
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-body)',
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </p>
              </div>

              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid rgba(15, 23, 42, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.775rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-dark)',
                  fontWeight: 600,
                }}
              >
                <Star size={14} fill="var(--text-dark)" />
                <span>Verified Milestone</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
