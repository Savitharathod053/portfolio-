import { Sparkles } from 'lucide-react';
import type { ProjectJourneyData } from '../../data/projectJourneys.ts';

interface ProjectSelectorProps {
  projects: ProjectJourneyData[];
  activeProjectId: string;
  onSelectProject: (id: string) => void;
}

export function ProjectSelector({ projects, activeProjectId, onSelectProject }: ProjectSelectorProps) {
  const handleScrollTo = (id: string) => {
    onSelectProject(id);
    const el = document.getElementById(`journey-${id}`);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="project-selector-wrapper" aria-label="Project Case Studies Navigator">
      <nav className="project-selector-bar">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.2rem 0.6rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.725rem',
            fontWeight: 800,
            color: 'var(--text-dark)',
            borderRight: '1px solid var(--border-subtle)',
            marginRight: '0.2rem',
          }}
        >
          <Sparkles size={13} color="var(--accent-lavender-dark)" />
          <span>PROJECTS</span>
        </div>

        {projects.map((proj, idx) => {
          const isActive = activeProjectId === proj.id;
          const num = String(idx + 1).padStart(2, '0');

          return (
            <button
              key={proj.id}
              type="button"
              onClick={() => handleScrollTo(proj.id)}
              className={`project-selector-pill ${isActive ? 'active' : ''}`}
              aria-current={isActive ? 'true' : undefined}
            >
              <span className="pill-number">{num}</span>
              <span>{proj.title}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
