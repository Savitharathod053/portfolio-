import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../Icons.tsx';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.ts';
import type { ProjectJourneyData } from '../../data/projectJourneys.ts';

import { IdeaStage } from './IdeaStage.tsx';
import { AIEngineStage } from './AIEngineStage.tsx';
import { ResourceStage } from './ResourceStage.tsx';
import { TaskStage } from './TaskStage.tsx';
import { OutcomeStage } from './OutcomeStage.tsx';
import { JourneyConnector } from './JourneyConnector.tsx';

gsap.registerPlugin(ScrollTrigger);

interface ProjectJourneyProps {
  project: ProjectJourneyData;
  index: number;
}

export function ProjectJourney({ project, index }: ProjectJourneyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const stageNames = [
    '01 Idea',
    '02 AI Core',
    '03 Resources',
    '04 Tasks',
    '05 Outcome',
  ];

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Monitor which stage is active as visitor scrolls
      const stageElements = [
        document.getElementById(`${project.id}-stage-1`),
        document.getElementById(`${project.id}-stage-2`),
        document.getElementById(`${project.id}-stage-3`),
        document.getElementById(`${project.id}-stage-4`),
        document.getElementById(`${project.id}-stage-5`),
      ];

      stageElements.forEach((el, stageIdx) => {
        if (!el) return;

        ScrollTrigger.create({
          trigger: el,
          start: 'top 70%',
          end: 'bottom 40%',
          onEnter: () => setActiveStageIndex(stageIdx),
          onEnterBack: () => setActiveStageIndex(stageIdx),
        });

        // Subtle upward reveal animation for each stage
        gsap.fromTo(
          el,
          { opacity: 0.2, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [project.id, prefersReducedMotion]);

  const projectNumber = String(index + 1).padStart(2, '0');

  return (
    <article
      ref={containerRef}
      id={`journey-${project.id}`}
      className="project-journey-container"
    >
      <div className="project-journey-card">
        {/* Project Header Banner */}
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

          {/* Quick Header Links */}
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
                <span>Live Demo</span>
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
                <span>Codebase</span>
              </a>
            )}
          </div>
        </header>

        {/* Small Stage Progress Tracker */}
        <div className="journey-stages-progress-bar" aria-label="Journey Stage Progress">
          {stageNames.map((name, sIdx) => {
            const isActive = activeStageIndex >= sIdx;
            const isCurrent = activeStageIndex === sIdx;

            return (
              <div
                key={sIdx}
                className={`journey-stage-step-item ${isActive ? 'active' : ''}`}
              >
                <span
                  className="journey-stage-step-dot"
                  style={{
                    backgroundColor: isCurrent ? 'var(--accent-yellow)' : isActive ? 'var(--accent-mint)' : '#FFFFFF',
                  }}
                >
                  {sIdx + 1}
                </span>
                <span>{name}</span>
                {sIdx < stageNames.length - 1 && <span className="journey-stage-step-divider" />}
              </div>
            );
          })}
        </div>

        {/* Connected Stages Workflow */}
        <div className="journey-flow">
          {/* Stage 1: The Idea Box */}
          <IdeaStage stageData={project.stage1Idea} projectId={project.id} />

          {/* Connector 1 -> 2 */}
          <JourneyConnector label="IDEA → AI ANALYSIS" />

          {/* Stage 2: The AI Engine */}
          <AIEngineStage stageData={project.stage2AIEngine} projectId={project.id} />

          {/* Connector 2 -> 3 */}
          <JourneyConnector label="AI ANALYSIS → DATA & RESOURCES" />

          {/* Stage 3: Datasets and Resources */}
          <ResourceStage stageData={project.stage3Resources} projectId={project.id} />

          {/* Connector 3 -> 4 */}
          <JourneyConnector label="DATA & RESOURCES → TASKS" />

          {/* Stage 4: Task Breakdown */}
          <TaskStage stageData={project.stage4Tasks} projectId={project.id} />

          {/* Connector 4 -> 5 */}
          <JourneyConnector label="TASKS → PROJECT OUTCOME" />

          {/* Stage 5: Project Outcome */}
          <OutcomeStage
            stageData={project.stage5Outcome}
            links={project.links}
            projectId={project.id}
          />
        </div>
      </div>
    </article>
  );
}
