import { useState, useEffect } from 'react';
import {
  Lightbulb,
  Bot,
  Database,
  CheckSquare,
  Zap,
  ExternalLink,
  ShieldCheck,
  Activity,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';
import type { ProjectJourneyData } from '../../data/projectJourneys.ts';

interface InlineWorkflowProps {
  project: ProjectJourneyData;
}

export function InlineWorkflow({ project }: InlineWorkflowProps) {
  // Active stage can be selected by user hover/click; defaults to cycling or stage 0
  const [activeStage, setActiveStage] = useState<number>(0);
  const [isUserInteracting, setIsUserInteracting] = useState<boolean>(false);

  // Automatically cycle active stage every 4s if user is not actively clicking/hovering
  useEffect(() => {
    if (isUserInteracting) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 5);
    }, 4200);
    return () => clearInterval(interval);
  }, [isUserInteracting]);

  const stages = [
    {
      id: 'idea',
      num: '01',
      label: 'Idea',
      fullLabel: project.stage1Idea.label,
      icon: <Lightbulb size={18} />,
      accent: 'var(--accent-yellow)',
      badge: project.stage1Idea.contextBadge,
    },
    {
      id: 'ai-engine',
      num: '02',
      label: 'AI Engine',
      fullLabel: project.stage2AIEngine.label,
      icon: <Bot size={18} />,
      accent: 'var(--accent-lavender)',
      badge: project.stage2AIEngine.techBadge,
    },
    {
      id: 'datasets',
      num: '03',
      label: 'Datasets',
      fullLabel: project.stage3Resources.label,
      icon: <Database size={18} />,
      accent: 'var(--accent-mint)',
      badge: `${project.stage3Resources.items.length} Verified Sources`,
    },
    {
      id: 'tasks',
      num: '04',
      label: 'Tasks',
      fullLabel: project.stage4Tasks.label,
      icon: <CheckSquare size={18} />,
      accent: 'var(--accent-blue)',
      badge: `${project.stage4Tasks.tasks.length} Phased Steps`,
    },
    {
      id: 'outcome',
      num: '05',
      label: 'Outcome',
      fullLabel: project.stage5Outcome.label,
      icon: <Zap size={18} />,
      accent: 'var(--accent-peach)',
      badge: 'Specification Ready',
    },
  ];

  return (
    <div
      className="inline-workflow-container"
      onMouseEnter={() => setIsUserInteracting(true)}
      onMouseLeave={() => setIsUserInteracting(false)}
    >
      {/* Workflow Subheader inside Card */}
      <div className="inline-workflow-header">
        <div className="inline-workflow-tag">
          <span className="live-particle-dot" />
          <span>AI WORKFLOW JOURNEY: IDEA → OUTCOME</span>
        </div>
        <div className="inline-workflow-hint">
          Click or hover any stage to inspect details
        </div>
      </div>

      {/* Horizontal Pipeline Track with Continuous Animated Line & Glowing Particles */}
      <div className="inline-pipeline-track">
        {/* Continuous SVG Background Line with Moving Particles */}
        <svg
          className="inline-pipeline-svg"
          viewBox="0 0 1000 60"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`line-grad-${project.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EAB308" />
              <stop offset="25%" stopColor="#A855F7" />
              <stop offset="50%" stopColor="#10B981" />
              <stop offset="75%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>

            <filter id={`glow-${project.id}`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Continuous Base Guide Line */}
          <line
            x1="60"
            y1="30"
            x2="940"
            y2="30"
            stroke="var(--border-editorial)"
            strokeWidth="3"
            strokeDasharray="4 4"
            opacity="0.25"
          />

          {/* Continuous Glowing Progress Line */}
          <line
            x1="60"
            y1="30"
            x2="940"
            y2="30"
            stroke={`url(#line-grad-${project.id})`}
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Continuous Traveling Particles */}
          <circle r="5" fill="#A855F7" filter={`url(#glow-${project.id})`}>
            <animateMotion
              path="M 60 30 L 940 30"
              dur="3.8s"
              repeatCount="indefinite"
            />
          </circle>

          <circle r="4.5" fill="#0284C7" filter={`url(#glow-${project.id})`}>
            <animateMotion
              path="M 60 30 L 940 30"
              dur="3.8s"
              begin="1.25s"
              repeatCount="indefinite"
            />
          </circle>

          <circle r="4.5" fill="#10B981" filter={`url(#glow-${project.id})`}>
            <animateMotion
              path="M 60 30 L 940 30"
              dur="3.8s"
              begin="2.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        {/* 5 Horizontal Stage Nodes */}
        <div className="inline-nodes-row">
          {stages.map((st, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => {
                  setActiveStage(idx);
                  setIsUserInteracting(true);
                }}
                className={`inline-stage-node-btn ${isActive ? 'active' : ''}`}
                aria-label={`Inspect ${st.label} stage`}
                aria-expanded={isActive}
              >
                {/* Node Circle with Icon */}
                <div
                  className="inline-node-circle"
                  style={{
                    backgroundColor: isActive ? st.accent : '#FFFFFF',
                    borderColor: isActive ? 'var(--border-editorial)' : 'var(--border-editorial)',
                    boxShadow: isActive ? 'var(--shadow-editorial-sm)' : 'none',
                  }}
                >
                  {st.icon}
                </div>

                {/* Node Label & Number */}
                <div className="inline-node-info">
                  <span className="inline-node-num">{st.num}</span>
                  <span className="inline-node-label">{st.label}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Stage Detail Drawer (Strictly inside the same box) */}
      <div className="inline-stage-detail-panel">
        {/* Stage 01: Idea Preview */}
        {activeStage === 0 && (
          <div className="inline-stage-content">
            <div className="inline-content-header">
              <span className="inline-step-tag yellow">
                <Lightbulb size={13} />
                <span>{project.stage1Idea.label}</span>
              </span>
              <span className="inline-context-badge">{project.stage1Idea.contextBadge}</span>
            </div>
            <div className="inline-prompt-box">
              <span className="inline-prompt-quote">&ldquo;{project.stage1Idea.exampleIdea}&rdquo;</span>
            </div>
            <p className="inline-problem-desc">
              <strong>Problem: </strong>
              {project.stage1Idea.problemSummary}
            </p>
          </div>
        )}

        {/* Stage 02: AI Engine Preview */}
        {activeStage === 1 && (
          <div className="inline-stage-content">
            <div className="inline-content-header">
              <span className="inline-step-tag lavender">
                <Bot size={13} />
                <span>{project.stage2AIEngine.label}</span>
              </span>
              <span className="inline-context-badge">{project.stage2AIEngine.techBadge}</span>
            </div>
            <h5 className="inline-content-title">{project.stage2AIEngine.headline}</h5>
            <p className="inline-content-desc">{project.stage2AIEngine.explanation}</p>
            <div className="inline-pills-row">
              {project.stage2AIEngine.processingPills.map((pill, pIdx) => (
                <span key={pIdx} className="inline-tech-pill">
                  <Sparkles size={11} color="var(--accent-lavender-dark)" />
                  {pill}
                </span>
              ))}
            </div>
            <div className="inline-insight-box">
              <ShieldCheck size={14} color="#10B981" />
              <span>{project.stage2AIEngine.architectureHighlight}</span>
            </div>
          </div>
        )}

        {/* Stage 03: Datasets & Resources Preview */}
        {activeStage === 2 && (
          <div className="inline-stage-content">
            <div className="inline-content-header">
              <span className="inline-step-tag mint">
                <Database size={13} />
                <span>{project.stage3Resources.label}</span>
              </span>
              <span className="inline-context-badge">Verified Technical Assets</span>
            </div>
            <p className="inline-content-desc">{project.stage3Resources.description}</p>
            <div className="inline-resources-grid">
              {project.stage3Resources.items.map((item, rIdx) => (
                <div key={rIdx} className="inline-resource-item">
                  <div className="inline-resource-top">
                    <span className="inline-resource-cat">{item.category}</span>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-resource-link"
                      >
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                  <strong className="inline-resource-name">{item.name}</strong>
                  <span className="inline-resource-desc">{item.description}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stage 04: Tasks Preview */}
        {activeStage === 3 && (
          <div className="inline-stage-content">
            <div className="inline-content-header">
              <span className="inline-step-tag blue">
                <CheckSquare size={13} />
                <span>{project.stage4Tasks.label}</span>
              </span>
              <span className="inline-context-badge">Execution Roadmap</span>
            </div>
            <p className="inline-content-desc">{project.stage4Tasks.description}</p>
            <div className="inline-tasks-grid">
              {project.stage4Tasks.tasks.map((task) => (
                <div key={task.id} className="inline-task-item">
                  <div className="inline-task-header">
                    <span className="inline-task-phase">{task.phase}</span>
                    <span className={`inline-task-status ${task.status.toLowerCase().replace(' ', '-')}`}>
                      {task.status === 'Completed' || task.status === 'Verified' ? (
                        <CheckCircle2 size={11} />
                      ) : task.status === 'In Progress' ? (
                        <Activity size={11} />
                      ) : (
                        <Clock size={11} />
                      )}
                      {task.status}
                    </span>
                  </div>
                  <strong className="inline-task-title">{task.title}</strong>
                  <span className="inline-task-desc">{task.description}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stage 05: Outcome Preview */}
        {activeStage === 4 && (
          <div className="inline-stage-content">
            <div className="inline-content-header">
              <span className="inline-step-tag peach">
                <Zap size={13} />
                <span>{project.stage5Outcome.label}</span>
              </span>
              <span className="inline-context-badge">Journey Complete</span>
            </div>
            <h5 className="inline-content-title">{project.stage5Outcome.headline}</h5>
            <p className="inline-content-desc">{project.stage5Outcome.summary}</p>
            <div className="inline-metrics-row">
              {project.stage5Outcome.metrics.map((m, mIdx) => (
                <div key={mIdx} className="inline-metric-box">
                  <span className="inline-metric-label">{m.label}</span>
                  <strong className="inline-metric-val">{m.value}</strong>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
