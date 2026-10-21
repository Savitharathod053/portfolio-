import { motion } from 'motion/react';
import { ExternalLink, FolderGit2, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons.tsx';
import { PORTFOLIO_CONFIG, type ProjectItem } from '../data/portfolio.ts';

// Editorial Interactive Illustrations for each project
function EditorialProjectVisual({ project }: { project: ProjectItem }) {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '260px',
        backgroundColor: project.visualTheme === 'emerald'
          ? 'var(--accent-mint)'
          : project.visualTheme === 'cyan'
          ? 'var(--accent-blue)'
          : project.visualTheme === 'violet'
          ? 'var(--accent-lavender)'
          : 'var(--accent-yellow)',
        border: '2px solid var(--border-editorial)',
        borderRadius: '14px',
        boxShadow: 'var(--shadow-editorial-sm)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top Bar of Project Mockup */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1.5px solid var(--border-editorial)',
          paddingBottom: '0.75rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444', border: '1px solid #0F172A' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B', border: '1px solid #0F172A' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981', border: '1px solid #0F172A' }} />
        </div>

        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            fontWeight: 700,
            color: 'var(--text-dark)',
            backgroundColor: '#FFFFFF',
            padding: '0.2rem 0.65rem',
            borderRadius: '9999px',
            border: '1px solid var(--border-editorial)',
          }}
        >
          {project.id}.prototype
        </div>
      </div>

      {/* Center Interactive SVG Diagram */}
      <div
        style={{
          margin: '1.5rem 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {project.id === 'vayuvision' && (
          <svg width="240" height="120" viewBox="0 0 240 120" fill="none">
            {/* Risk classification radar */}
            <circle cx="120" cy="60" r="48" stroke="#0F172A" strokeWidth="2" strokeDasharray="4 4" fill="rgba(255,255,255,0.7)" />
            <circle cx="120" cy="60" r="30" stroke="#0F172A" strokeWidth="1.5" fill="#FFFFFF" />
            <circle cx="120" cy="60" r="14" fill="#EF4444" stroke="#0F172A" strokeWidth="1.5" />
            <path d="M 120 12 L 120 108" stroke="#0F172A" strokeWidth="1.5" />
            <path d="M 72 60 L 168 60" stroke="#0F172A" strokeWidth="1.5" />
            <rect x="15" y="45" width="46" height="24" rx="4" fill="#FEF08A" stroke="#0F172A" strokeWidth="1.5" />
            <text x="38" y="61" fill="#0F172A" fontSize="9" fontFamily="var(--font-mono)" fontWeight="700" textAnchor="middle">LOW</text>
            <rect x="180" y="45" width="46" height="24" rx="4" fill="#FCA5A5" stroke="#0F172A" strokeWidth="1.5" />
            <text x="203" y="61" fill="#0F172A" fontSize="9" fontFamily="var(--font-mono)" fontWeight="700" textAnchor="middle">HIGH</text>
          </svg>
        )}

        {project.id === 'campus-flow' && (
          <svg width="240" height="120" viewBox="0 0 240 120" fill="none">
            {/* Event lifecycle card & QR ticket */}
            <rect x="30" y="20" width="105" height="80" rx="8" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
            <rect x="42" y="32" width="55" height="8" rx="2" fill="var(--accent-lavender)" />
            <rect x="42" y="46" width="75" height="6" rx="2" fill="#E2E8F0" />
            <rect x="42" y="58" width="65" height="6" rx="2" fill="#E2E8F0" />
            <rect x="42" y="74" width="45" height="14" rx="4" fill="var(--accent-yellow)" stroke="#0F172A" strokeWidth="1.2" />
            <text x="64" y="84" fill="#0F172A" fontSize="8" fontFamily="var(--font-mono)" fontWeight="700" textAnchor="middle">APPROVED</text>
            {/* Ticket QR stamp */}
            <rect x="145" y="28" width="65" height="65" rx="6" fill="#FEF08A" stroke="#0F172A" strokeWidth="2" />
            <rect x="155" y="38" width="16" height="16" fill="#0F172A" />
            <rect x="184" y="38" width="16" height="16" fill="#0F172A" />
            <rect x="155" y="67" width="16" height="16" fill="#0F172A" />
            <circle cx="192" cy="75" r="5" fill="#0F172A" />
          </svg>
        )}

        {project.id === 'project-guard' && (
          <svg width="240" height="120" viewBox="0 0 240 120" fill="none">
            {/* AI project planner & Gemini task tree */}
            <rect x="25" y="45" width="75" height="34" rx="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
            <text x="62" y="66" fill="#0F172A" fontSize="9" fontFamily="var(--font-mono)" fontWeight="700" textAnchor="middle">PROJECT IDEA</text>
            <path d="M 100 62 L 135 62" stroke="#0F172A" strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="140" cy="62" r="14" fill="#E9D5FF" stroke="#0F172A" strokeWidth="2" />
            <text x="140" y="66" fill="#0F172A" fontSize="8" fontFamily="var(--font-mono)" fontWeight="700" textAnchor="middle">AI</text>
            <path d="M 154 62 L 175 40" stroke="#0F172A" strokeWidth="2" />
            <path d="M 154 62 L 175 84" stroke="#0F172A" strokeWidth="2" />
            <rect x="175" y="26" width="50" height="24" rx="4" fill="#D1FAE5" stroke="#0F172A" strokeWidth="1.5" />
            <text x="200" y="41" fill="#0F172A" fontSize="8" fontFamily="var(--font-mono)" fontWeight="700" textAnchor="middle">TASKS</text>
            <rect x="175" y="72" width="50" height="24" rx="4" fill="#FEF08A" stroke="#0F172A" strokeWidth="1.5" />
            <text x="200" y="87" fill="#0F172A" fontSize="8" fontFamily="var(--font-mono)" fontWeight="700" textAnchor="middle">DATASET</text>
          </svg>
        )}

        {project.id === 'vibedoubts' && (
          <svg width="240" height="120" viewBox="0 0 240 120" fill="none">
            {/* Code repo tree and chat bubble */}
            <rect x="20" y="24" width="85" height="72" rx="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
            <text x="32" y="42" fill="#0F172A" fontSize="8" fontFamily="var(--font-mono)">📁 /src</text>
            <text x="42" y="58" fill="#0F172A" fontSize="8" fontFamily="var(--font-mono)">📄 main.py</text>
            <text x="42" y="74" fill="#0F172A" fontSize="8" fontFamily="var(--font-mono)">📄 model.py</text>
            {/* Context Q&A Bubble */}
            <rect x="125" y="32" width="95" height="56" rx="8" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
            <text x="135" y="52" fill="#0F172A" fontSize="8" fontFamily="var(--font-mono)" fontWeight="700">Q: How it works?</text>
            <text x="135" y="68" fill="var(--text-muted)" fontSize="7" fontFamily="var(--font-mono)">A: Context parsed ✓</text>
          </svg>
        )}
      </div>

      {/* Bottom Live / Lab Status */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#FFFFFF',
          padding: '0.4rem 0.8rem',
          borderRadius: '8px',
          border: '1.5px solid var(--border-editorial)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.725rem',
            fontWeight: 700,
            color: 'var(--text-dark)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}
        >
          <CheckCircle2 size={13} color="#10B981" />
          {project.demoUrl ? 'Live Production Deployment' : 'Lab / Repository Platform'}
        </span>

        {project.demoUrl && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--accent-lavender-dark)',
              fontWeight: 700,
            }}
          >
            ACTIVE_URL
          </span>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  const { projects } = PORTFOLIO_CONFIG;

  return (
    <section
      id="projects"
      style={{
        padding: '7rem 0',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: '4.5rem' }}>
          <span className="section-badge">
            <FolderGit2 size={14} />
            CURATED CASE STUDIES
          </span>
          <h2 className="section-title-editorial">
            Featured Projects & Real Prototypes
          </h2>
          <p className="section-subtitle-editorial">
            Engineered solutions solving real campus workflow coordination, disaster management risk assessment, and developer codebase comprehension.
          </p>
        </div>

        {/* Projects List in Asymmetric Editorial Format */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {projects.map((project, idx) => {
            const projectNumber = String(idx + 1).padStart(2, '0');
            const isReversed = idx % 2 === 1;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="editorial-card"
                style={{
                  padding: '2.5rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '2.5rem',
                  alignItems: 'center',
                  backgroundColor: '#FFFFFF',
                }}
              >
                {/* Text Content */}
                <div
                  style={{
                    order: isReversed ? 2 : 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  {/* Top Metadata Strip */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '2.2rem',
                        fontWeight: 700,
                        color: 'var(--accent-lavender-dark)',
                        lineHeight: 1,
                      }}
                    >
                      {projectNumber}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        backgroundColor: 'var(--accent-yellow)',
                        border: '1.5px solid var(--border-editorial)',
                        padding: '0.2rem 0.65rem',
                        borderRadius: '9999px',
                        textTransform: 'uppercase',
                        color: 'var(--text-dark)',
                      }}
                    >
                      {project.category}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      [{project.status}]
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
                        fontWeight: 600,
                        color: 'var(--text-dark)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--accent-blue-dark)',
                        lineHeight: 1.4,
                      }}
                    >
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '1rem',
                      color: 'var(--text-body)',
                      lineHeight: 1.65,
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Architecture Notes */}
                  {project.architectureNotes && (
                    <div
                      style={{
                        padding: '0.85rem 1rem',
                        backgroundColor: 'var(--bg-muted)',
                        borderLeft: '3px solid var(--border-editorial)',
                        borderRadius: '0 8px 8px 0',
                        fontSize: '0.875rem',
                        color: 'var(--text-dark)',
                        fontFamily: 'var(--font-mono)',
                        lineHeight: 1.5,
                      }}
                    >
                      <strong>Architecture: </strong>
                      {project.architectureNotes}
                    </div>
                  )}

                  {/* Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      margin: '0.5rem 0',
                    }}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 600,
                          backgroundColor: '#FFFFFF',
                          border: '1.5px solid var(--border-editorial)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '6px',
                          color: 'var(--text-dark)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      gap: '0.85rem',
                      paddingTop: '0.5rem',
                    }}
                  >
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-editorial-primary"
                        style={{ padding: '0.65rem 1.25rem', fontSize: '0.875rem' }}
                      >
                        <ExternalLink size={16} />
                        <span>Live Platform</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-editorial-secondary"
                        style={{ padding: '0.65rem 1.25rem', fontSize: '0.875rem' }}
                      >
                        <GithubIcon size={16} />
                        <span>GitHub Repository</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Visual Graphic */}
                <div
                  style={{
                    order: isReversed ? 1 : 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <EditorialProjectVisual project={project} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          article.editorial-card {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
