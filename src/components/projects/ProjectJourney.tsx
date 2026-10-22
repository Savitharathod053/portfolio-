import { useRef } from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../Icons.tsx';
import type { ProjectJourneyData } from '../../data/projectJourneys.ts';
import { InlineWorkflow } from './InlineWorkflow.tsx';

interface ProjectJourneyProps {
  project: ProjectJourneyData;
  index: number;
}

export function ProjectJourney({ project, index }: ProjectJourneyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const projectNumber = String(index + 1).padStart(2, '0');

  return (
    <article
      ref={containerRef}
      id={`journey-${project.id}`}
      className="project-journey-container"
    >
      {/* SINGLE PROJECT BOX — CONTAINS THE ENTIRE WORKFLOW INSIDE */}
      <div className="project-journey-card editorial-single-box">
        {/* Project Header Banner inside the box */}
        <header className="journey-project-header">
          <div className="journey-header-main">
            <div className="journey-project-meta">
              <span className="journey-project-index">{projectNumber}</span>
              <span className="journey-category-tag">{project.category}</span>
              <span className="journey-status-pill">
                <CheckCircle2 size={13} color="#10B981" />
                <span>[{project.status}]</span>
              </span>
            </div>

            <h3 className="journey-project-title">{project.title}</h3>
            <p className="journey-project-tagline">{project.tagline}</p>
          </div>

          {/* Quick Header Actions */}
          <div className="journey-header-actions">
            {project.links.demoUrl && (
              <a
                href={project.links.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-primary"
                style={{ padding: '0.6rem 1.15rem', fontSize: '0.85rem' }}
              >
                <ExternalLink size={15} />
                <span>Launch Live Platform</span>
              </a>
            )}

            {project.links.githubUrl && (
              <a
                href={project.links.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-secondary"
                style={{ padding: '0.6rem 1.15rem', fontSize: '0.85rem' }}
              >
                <GithubIcon size={15} />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        </header>

        {/* Project Description & Architecture Notes */}
        <div className="project-body-text">
          <p className="project-full-description">{project.description}</p>
          {project.architectureNotes && (
            <div className="project-architecture-callout">
              <strong>Architecture: </strong>
              <span>{project.architectureNotes}</span>
            </div>
          )}
        </div>

        {/* Verified Technology Tags Strip */}
        <div className="project-tags-strip">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag-pill">
              #{tag}
            </span>
          ))}
        </div>

        {/* =================================================================
            COMPLETE WORKFLOW INSIDE THE SAME BOX:
            Idea → AI Engine → Datasets → Tasks → Outcome
            Connected with continuous animated line & traveling particles
            ================================================================= */}
        <InlineWorkflow project={project} />

        {/* Project Bottom Actions inside the same box */}
        <footer className="project-footer-actions">
          {project.links.demoUrl && (
            <a
              href={project.links.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-primary"
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem' }}
            >
              <ExternalLink size={15} />
              <span>Launch Live Platform</span>
            </a>
          )}

          {project.links.githubUrl && (
            <a
              href={project.links.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-secondary"
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem' }}
            >
              <GithubIcon size={15} />
              <span>View GitHub Repository</span>
            </a>
          )}
        </footer>
      </div>
    </article>
  );
}
