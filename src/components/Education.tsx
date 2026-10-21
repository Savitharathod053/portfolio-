import { motion } from 'motion/react';
import { GraduationCap, MapPin, CheckCircle } from 'lucide-react';

export function Education() {

  const timelineMilestones = [
    {
      year: '2026',
      badge: 'Hackathon & Engineering',
      title: 'Smart India Hackathon (SIH 2026)',
      institution: 'Vardhaman College of Engineering',
      description: 'Worked on AI/ML disaster management problem statement (VayuVision) identifying hazard red zones; successfully shortlisted in internal college selection.',
      tag: 'SIH Selection Round',
    },
    {
      year: '2024 - PRESENT',
      badge: 'Undergraduate Major',
      title: 'B.Tech in CSE (Artificial Intelligence & Machine Learning)',
      institution: 'Vardhaman College of Engineering, Hyderabad',
      grade: '9.03 CGPA',
      description: 'Currently pursuing second year with focus on Machine Learning pipelines, Python automation, role-based web platforms (Campus Flow), and API integrations.',
      highlights: [
        'Specialization in AI/ML fundamentals, data preprocessing, and classification.',
        'Core computer science foundations: Data Structures, OOP (Java & Python), Database Integration.',
        'Active prototyper: built Campus Flow and Project Guard.',
      ],
      tag: 'Currently Enrolled (2nd Year)',
    },
    {
      year: '2025',
      badge: 'Intermediate (12th)',
      title: 'Intermediate — MPC (Maths, Physics, Chemistry)',
      institution: 'Sri Chaithanya',
      grade: '9.7 CGPA',
      description: 'Completed higher secondary education with strong analytical foundations in higher mathematics and physics, graduating with a 9.7 CGPA.',
      tag: 'Distinction Standing',
    },
    {
      year: '2023',
      badge: 'Secondary School (10th)',
      title: 'SSC — Secondary School Certificate',
      institution: 'Keshava Reddy School',
      grade: '9.3 CGPA',
      description: 'Completed foundational secondary schooling with strong academic performance across mathematics and sciences.',
      tag: 'Academic Distinction',
    },
  ];

  return (
    <section
      id="education"
      style={{
        padding: '7rem 0',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '680px', marginBottom: '4.5rem' }}>
          <span className="section-badge">
            <GraduationCap size={14} />
            EDITORIAL TIMELINE
          </span>
          <h2 className="section-title-editorial">
            Academic Track & Education
          </h2>
          <p className="section-subtitle-editorial">
            Chronological progression from foundational secondary schooling to ongoing undergraduate specialization in Artificial Intelligence & Machine Learning.
          </p>
        </div>

        {/* Editorial Timeline with Oversized Year Markers */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
            maxWidth: '960px',
            margin: '0 auto',
          }}
        >
          {/* Vertical Connecting Line (Desktop) */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              bottom: '40px',
              left: '120px',
              width: '3px',
              backgroundColor: 'var(--border-editorial)',
              display: 'none',
            }}
            className="timeline-spine"
          />

          {timelineMilestones.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '1.5rem',
                alignItems: 'start',
              }}
              className="timeline-item-grid"
            >
              {/* Left Column: Oversized Year Marker */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                    fontWeight: 700,
                    color: 'var(--text-dark)',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {item.year}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.725rem',
                    fontWeight: 700,
                    color: 'var(--accent-lavender-dark)',
                    textTransform: 'uppercase',
                    marginTop: '0.35rem',
                  }}
                >
                  {item.badge}
                </span>
              </div>

              {/* Right Column: Editorial Card with Details */}
              <div
                className="editorial-card"
                style={{
                  padding: '2rem',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: 'var(--text-dark)',
                    }}
                  >
                    {item.title}
                  </h3>

                  {item.grade && (
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.825rem',
                        fontWeight: 700,
                        backgroundColor: 'var(--accent-mint)',
                        border: '1.5px solid var(--border-editorial)',
                        padding: '0.2rem 0.65rem',
                        borderRadius: '9999px',
                        color: 'var(--text-dark)',
                      }}
                    >
                      CGPA: {item.grade}
                    </span>
                  )}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    marginBottom: '1rem',
                  }}
                >
                  <MapPin size={14} />
                  <span>{item.institution}</span>
                </div>

                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-body)',
                    lineHeight: 1.6,
                    marginBottom: item.highlights ? '1rem' : 0,
                  }}
                >
                  {item.description}
                </p>

                {item.highlights && (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      paddingTop: '0.75rem',
                      borderTop: '1px solid var(--border-subtle)',
                    }}
                  >
                    {item.highlights.map((h, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.875rem',
                          color: 'var(--text-body)',
                        }}
                      >
                        <CheckCircle
                          size={15}
                          color="#059669"
                          style={{ marginTop: '0.2rem', flexShrink: 0 }}
                        />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .timeline-spine {
            display: block !important;
          }
          .timeline-item-grid {
            grid-template-columns: 190px 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
