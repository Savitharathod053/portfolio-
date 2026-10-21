import { useState, useEffect } from 'react';
import { Sparkles, Compass } from 'lucide-react';
import { PROJECT_JOURNEYS } from '../data/projectJourneys.ts';
import { ProjectJourney } from './projects/ProjectJourney.tsx';
import { ProjectSelector } from './projects/ProjectSelector.tsx';
import '../styles/projects.css';

export function Projects() {
  const [activeProjectId, setActiveProjectId] = useState<string>(PROJECT_JOURNEYS[0].id);

  // Update active project selector based on viewport scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (let i = PROJECT_JOURNEYS.length - 1; i >= 0; i--) {
        const el = document.getElementById(`journey-${PROJECT_JOURNEYS[i].id}`);
        if (el && el.offsetTop <= scrollPos) {
          setActiveProjectId(PROJECT_JOURNEYS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className="project-journey-section">
      <div className="container">
        {/* Editorial Section Header */}
        <header className="journey-section-header">
          <div className="journey-section-badge">
            <Compass size={14} />
            <span>Interactive AI Project Journey</span>
          </div>

          <h2 className="journey-section-title">
            From Idea to Intelligence
          </h2>

          <p className="journey-section-subtitle">
            Every project starts with a question. Follow the journey from the first idea to the technology that brings it to life.
          </p>
        </header>

        {/* Sticky Project Selector Pill Navigation */}
        <ProjectSelector
          projects={PROJECT_JOURNEYS}
          activeProjectId={activeProjectId}
          onSelectProject={(id) => setActiveProjectId(id)}
        />

        {/* All 5 Connected Project Journeys */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {PROJECT_JOURNEYS.map((project, idx) => (
            <ProjectJourney
              key={project.id}
              project={project}
              index={idx}
            />
          ))}
        </div>

        {/* Section Bottom Summary Box */}
        <div
          style={{
            margin: '2rem auto 0 auto',
            maxWidth: '680px',
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: '#FFFFFF',
            border: '2px solid var(--border-editorial)',
            borderRadius: '16px',
            boxShadow: 'var(--shadow-editorial)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'var(--accent-lavender-dark)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              marginBottom: '0.5rem',
            }}
          >
            <Sparkles size={13} />
            Prototype Philosophy
          </span>
          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-body)',
              lineHeight: 1.6,
            }}
          >
            All projects represent real engineering problem spaces — from national hackathon disaster risk modeling (VayuVision) to institutional lifecycle automation (Campus Flow) and developer codebase exploration (VibeDoubts).
          </p>
        </div>
      </div>
    </section>
  );
}
