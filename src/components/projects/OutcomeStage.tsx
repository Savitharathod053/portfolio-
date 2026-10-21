import { CheckCircle, ExternalLink, Zap } from 'lucide-react';
import { GithubIcon } from '../Icons.tsx';
import type { ProjectJourneyData } from '../../data/projectJourneys.ts';

interface OutcomeStageProps {
  stageData: ProjectJourneyData['stage5Outcome'];
  links: ProjectJourneyData['links'];
  projectId: string;
}

export function OutcomeStage({ stageData, links, projectId }: OutcomeStageProps) {
  return (
    <div className="stage-block" id={`${projectId}-stage-5`}>
      <div className="outcome-card">
        {/* Seal Badge */}
        <div className="outcome-seal-badge">
          <CheckCircle size={15} color="#065F46" />
          <span>{stageData.label}</span>
        </div>

        {/* Headline & Summary */}
        <h4 className="outcome-headline">{stageData.headline}</h4>
        <p className="outcome-summary">{stageData.summary}</p>

        {/* Key Metrics Strip */}
        <div className="outcome-metrics-grid">
          {stageData.metrics.map((metric, idx) => (
            <div key={idx} className="outcome-metric-card">
              <div className="metric-label">{metric.label}</div>
              <div className="metric-value">{metric.value}</div>
            </div>
          ))}
        </div>

        {/* Verified Tech Stack */}
        <div className="outcome-tech-section">
          <div className="outcome-tech-label">VERIFIED TECHNOLOGY STACK:</div>
          <div className="outcome-tech-pills">
            {stageData.techStack.map((tech, idx) => (
              <span key={idx} className="outcome-tech-pill">
                #{tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons to Real Repos & Demos */}
        <div className="outcome-actions-strip">
          {links.demoUrl && (
            <a
              href={links.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-primary"
              style={{ padding: '0.75rem 1.6rem', fontSize: '0.9rem' }}
            >
              <ExternalLink size={16} />
              <span>Launch Live Platform</span>
            </a>
          )}

          {links.githubUrl && (
            <a
              href={links.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-secondary"
              style={{ padding: '0.75rem 1.6rem', fontSize: '0.9rem' }}
            >
              <GithubIcon size={16} />
              <span>View GitHub Repository</span>
            </a>
          )}

          <div
            style={{
              marginLeft: 'auto',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              fontWeight: 700,
            }}
          >
            <Zap size={13} color="var(--accent-yellow-dark)" />
            <span>JOURNEY COMPLETE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
