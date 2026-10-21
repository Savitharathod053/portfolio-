import { CheckSquare, CheckCircle2, Clock, Activity, CornerDownRight } from 'lucide-react';
import type { ProjectJourneyData } from '../../data/projectJourneys.ts';

interface TaskStageProps {
  stageData: ProjectJourneyData['stage4Tasks'];
  projectId: string;
}

export function TaskStage({ stageData, projectId }: TaskStageProps) {
  return (
    <div className="stage-block" id={`${projectId}-stage-4`}>
      <div className="task-stage-card">
        {/* Stage Header */}
        <div className="stage-badge-header">
          <div
            className="stage-label-pill"
            style={{ backgroundColor: 'var(--accent-blue)' }}
          >
            <CheckSquare size={15} color="var(--text-dark)" />
            <span>{stageData.label}</span>
          </div>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
            }}
          >
            STAGE 04/05
          </span>
        </div>

        {/* Headline & Description */}
        <div style={{ maxWidth: '720px', marginBottom: '0.75rem' }}>
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

        {/* Task Items List */}
        <div className="task-items-list">
          {stageData.tasks.map((task) => {
            const statusClass = task.status.toLowerCase().replace(' ', '-');

            return (
              <div key={task.id} className="task-item-card">
                {/* Milestone Step Number */}
                <div className="task-phase-number">
                  {task.stageNumber}
                </div>

                {/* Main Details */}
                <div className="task-main-col">
                  <span className="task-phase-pill">{task.phase}</span>
                  <h5 className="task-title">{task.title}</h5>
                  <p className="task-desc">{task.description}</p>
                </div>

                {/* Status & Deliverables */}
                <div className="task-status-col">
                  <span className={`task-status-badge ${statusClass}`}>
                    {task.status === 'Completed' || task.status === 'Verified' ? (
                      <CheckCircle2 size={13} color="currentColor" />
                    ) : task.status === 'In Progress' ? (
                      <Activity size={13} color="currentColor" />
                    ) : (
                      <Clock size={13} color="currentColor" />
                    )}
                    <span>{task.status}</span>
                  </span>

                  {task.deliverables && task.deliverables.length > 0 && (
                    <div className="task-deliverables-strip">
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.65rem',
                          color: 'var(--text-muted)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '2px',
                        }}
                      >
                        <CornerDownRight size={10} /> Outputs:
                      </span>
                      {task.deliverables.map((item, dIdx) => (
                        <span key={dIdx} className="task-deliverable-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
