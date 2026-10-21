import { Bot, Cpu, Sparkles, Activity, ShieldCheck } from 'lucide-react';
import type { ProjectJourneyData } from '../../data/projectJourneys.ts';

interface AIEngineStageProps {
  stageData: ProjectJourneyData['stage2AIEngine'];
  projectId: string;
}

export function AIEngineStage({ stageData, projectId }: AIEngineStageProps) {
  return (
    <div className="stage-block" id={`${projectId}-stage-2`}>
      <div className="ai-engine-card">
        {/* Top Header Badge */}
        <div className="stage-badge-header">
          <div
            className="stage-label-pill"
            style={{ backgroundColor: 'var(--accent-lavender)' }}
          >
            <Cpu size={15} color="var(--text-dark)" />
            <span>{stageData.label}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.725rem',
                fontWeight: 700,
                color: 'var(--accent-blue-dark)',
                backgroundColor: 'rgba(186, 230, 253, 0.45)',
                border: '1px solid var(--border-editorial)',
                padding: '0.2rem 0.65rem',
                borderRadius: '9999px',
              }}
            >
              {stageData.techBadge}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
              }}
            >
              STAGE 02/05
            </span>
          </div>
        </div>

        {/* Core Processing Node & Content Grid */}
        <div className="ai-engine-grid">
          {/* Visual Orbiting Node */}
          <div className="ai-node-visual" aria-hidden="true">
            <div className="ai-ring-outer" />
            <div className="ai-ring-middle" />

            <div className="ai-center-node">
              <span className="ai-pulse-dot" />
              <Bot size={28} color="var(--text-dark)" />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.625rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                }}
              >
                AI CORE
              </span>
            </div>
          </div>

          {/* Explanation & Processing Steps */}
          <div className="ai-engine-content">
            <h4 className="ai-engine-headline">{stageData.headline}</h4>
            <p className="ai-engine-explanation">{stageData.explanation}</p>

            {/* Active Processing Tasks */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.725rem',
                  fontWeight: 700,
                  color: 'var(--text-muted)',
                  marginBottom: '0.6rem',
                }}
              >
                <Activity size={12} color="var(--accent-lavender-dark)" />
                <span>INSPECTION & INFERENCE PIPELINE:</span>
              </div>

              <div className="ai-processing-pills">
                {stageData.processingPills.map((pill, idx) => (
                  <span key={idx} className="ai-processing-pill">
                    <Sparkles size={11} color="var(--accent-lavender-dark)" />
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Highlight Box */}
            <div className="ai-highlight-quote">
              <strong style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-dark)' }}>
                <ShieldCheck size={14} color="#10B981" />
                Architecture Insight:{' '}
              </strong>
              <span>{stageData.architectureHighlight}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
