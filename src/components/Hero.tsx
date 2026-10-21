import { motion } from 'motion/react';
import { ArrowDown, Download, Sparkles, MapPin, Award } from 'lucide-react';
import { InteractiveCharacter } from './InteractiveCharacter.tsx';
import { PORTFOLIO_CONFIG } from '../data/portfolio.ts';

export function Hero() {
  const { profile } = PORTFOLIO_CONFIG;

  const headlineWords = [
    'AI/ML',
    'Engineer',
    '&',
    'Full',
    'Stack',
    'Developer',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 35, rotate: -2 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.55,
        ease: 'easeOut' as const,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--nav-height) + 2.5rem)',
        paddingBottom: '5rem',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            alignItems: 'center',
            gap: '3.5rem',
          }}
          className="hero-editorial-grid"
        >
          {/* Left Column: Oversized Editorial Typography & Intro */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              zIndex: 2,
            }}
          >
            {/* Top Status Pill */}
            <motion.div variants={itemVariants} style={{ alignSelf: 'flex-start' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.4rem 1rem',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--accent-mint)',
                  border: '1.5px solid var(--border-editorial)',
                  boxShadow: 'var(--shadow-editorial-sm)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.785rem',
                  fontWeight: 700,
                  color: 'var(--text-dark)',
                  letterSpacing: '0.04em',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#10B981',
                    boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.3)',
                    animation: 'pulseDot 2s infinite',
                  }}
                />
                <span>{profile.statusText}</span>
              </div>
            </motion.div>

            {/* Sub-label with Name & University */}
            <motion.div variants={itemVariants}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '0.25rem',
                }}
              >
                <span>NENAVATH SAVITHA</span>
                <span>&bull;</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                  <MapPin size={13} />
                  Hyderabad, India
                </span>
              </div>
            </motion.div>

            {/* Word-By-Word Animated Headline */}
            <motion.h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.75rem, 5.8vw, 4.85rem)',
                fontWeight: 600,
                color: 'var(--text-dark)',
                lineHeight: 1.05,
                letterSpacing: '-0.035em',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.3em',
              }}
              aria-label="AI/ML Engineer & Full Stack Developer"
            >
              {headlineWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  variants={wordVariants}
                  style={{
                    display: 'inline-block',
                    ...(word === '&'
                      ? { fontStyle: 'italic', color: 'var(--accent-lavender-dark)' }
                      : {}),
                    ...(word === 'AI/ML'
                      ? {
                          backgroundColor: 'var(--accent-yellow)',
                          padding: '0 0.15em',
                          borderRadius: '6px',
                          border: '2px solid var(--border-editorial)',
                          boxShadow: 'var(--shadow-editorial-sm)',
                        }
                      : {}),
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Engaging Introduction */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1.05rem, 1.35vw, 1.25rem)',
                color: 'var(--text-body)',
                maxWidth: '580px',
                lineHeight: 1.65,
                fontWeight: 400,
                marginTop: '0.25rem',
              }}
            >
              {profile.bioShort}
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                alignItems: 'center',
                marginTop: '0.75rem',
              }}
            >
              <a href="#projects" className="btn-editorial-primary">
                <span>Explore My Projects</span>
                <ArrowDown size={17} />
              </a>

              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-secondary"
              >
                <Download size={17} />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Editorial Highlight Strip */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.5rem',
                paddingTop: '1.5rem',
                marginTop: '1rem',
                borderTop: '1.5px dashed var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Award size={18} color="var(--accent-lavender-dark)" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.825rem', fontWeight: 600 }}>
                  9.03 CGPA &bull; 2nd Year
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Sparkles size={18} color="var(--accent-yellow-dark)" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.825rem', fontWeight: 600 }}>
                  SIH 2026 Shortlisted
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                  4 Verified Projects
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Playful Interactive Character & Stickers */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <InteractiveCharacter />
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @media (min-width: 960px) {
          .hero-editorial-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
