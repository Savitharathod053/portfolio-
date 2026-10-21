import { Database, Code2, Layers, BookOpen, ExternalLink, Cpu } from 'lucide-react';
import type { ProjectJourneyData, ProjectResource } from '../../data/projectJourneys.ts';

interface ResourceStageProps {
  stageData: ProjectJourneyData['stage3Resources'];
  projectId: string;
}

function getResourceIcon(category: ProjectResource['category']) {
  switch (category) {
    case 'Dataset':
      return <Database size={16} />;
    case 'API':
      return <Cpu size={16} />;
    case 'Tool':
      return <Code2 size={16} />;
    case 'Component':
      return <Layers size={16} />;
    case 'Documentation':
    default:
      return <BookOpen size={16} />;
  }
}

export function ResourceStage({ stageData, projectId }: ResourceStageProps) {
  return (
    <div className="stage-block" id={`${projectId}-stage-3`}>
      <div className="resource-card-container">
        {/* Stage Header */}
        <div className="stage-badge-header">
          <div
            className="stage-label-pill"
            style={{ backgroundColor: 'var(--accent-mint)' }}
          >
            <Database size={15} color="var(--text-dark)" />
            <span>{stageData.label}</span>
          </div>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
            }}
          >
            STAGE 03/05
          </span>
        </div>

        {/* Headline & Description */}
        <div style={{ maxWidth: '720px', marginBottom: '0.5rem' }}>
          <h4
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.35rem, 2.2vw, 1.75rem)',
              fontWeight: 700,
              color: 'var(--text-dark)',
              marginBottom: '0.4rem',
            }}
          >
            {stageData.headline}
          </h4>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.55 }}>
            {stageData.description}
          </p>
        </div>

        {/* Staggered Resource Cards Grid */}
        <div className="resource-grid">
          {stageData.items.map((item, idx) => {
            const isClickable = Boolean(item.url);
            const CardWrapper = isClickable ? 'a' : 'div';
            const linkProps = isClickable
              ? {
                  href: item.url,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  'aria-label': `View ${item.name} resource`,
                }
              : {};

            const categoryClass = item.category.toLowerCase();

            return (
              <CardWrapper
                key={idx}
                className="resource-item-box"
                {...linkProps}
              >
                {/* Top Strip */}
                <div className="resource-top-bar">
                  <span className={`resource-category-badge ${categoryClass}`}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      {getResourceIcon(item.category)}
                      {item.category}
                    </span>
                  </span>

                  {item.sourceLabel && (
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {item.sourceLabel}
                    </span>
                  )}
                </div>

                {/* Name & Description */}
                <div>
                  <h5 className="resource-title">{item.name}</h5>
                  <p className="resource-desc">{item.description}</p>
                </div>

                {/* Footer Strip */}
                <div className="resource-footer">
                  <span>{item.verified ? '✓ Verified Source' : 'Example Category'}</span>
                  {isClickable ? (
                    <span className="resource-link-pill">
                      <span>Visit Specs</span>
                      <ExternalLink size={12} />
                    </span>
                  ) : (
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}>
                      Integrated
                    </span>
                  )}
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
}
