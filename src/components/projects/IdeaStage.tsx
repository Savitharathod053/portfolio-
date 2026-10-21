import { useState, useEffect } from 'react';
import { Lightbulb, Terminal, RefreshCw, AlertCircle } from 'lucide-react';
import type { ProjectJourneyData } from '../../data/projectJourneys.ts';

interface IdeaStageProps {
  stageData: ProjectJourneyData['stage1Idea'];
  projectId: string;
}

export function IdeaStage({ stageData, projectId }: IdeaStageProps) {
  const [selectedPrompt, setSelectedPrompt] = useState(stageData.exampleIdea);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    let count = 0;
    setCharCount(0);
    const interval = window.setInterval(() => {
      count += 1;
      setCharCount(count);
      if (count >= selectedPrompt.length) {
        clearInterval(interval);
      }
    }, 28);

    return () => {
      clearInterval(interval);
    };
  }, [selectedPrompt]);

  const displayedText = selectedPrompt.slice(0, charCount);
  const isTyping = charCount < selectedPrompt.length;

  return (
    <div className="stage-block" id={`${projectId}-stage-1`}>
      <div className="idea-card">
        {/* Top Header Badge Strip */}
        <div className="stage-badge-header">
          <div className="stage-label-pill">
            <Lightbulb size={15} color="var(--text-dark)" />
            <span>{stageData.label}</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.725rem',
                fontWeight: 700,
                color: 'var(--accent-lavender-dark)',
                backgroundColor: 'rgba(233, 213, 255, 0.4)',
                border: '1px solid var(--border-editorial)',
                padding: '0.2rem 0.65rem',
                borderRadius: '9999px',
              }}
            >
              {stageData.contextBadge}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
              }}
            >
              STAGE 01/05
            </span>
          </div>
        </div>

        {/* Interactive Product Terminal Card */}
        <div className="idea-terminal-box">
          <div className="idea-terminal-bar">
            <div className="idea-mac-dots">
              <span className="idea-mac-dot red" />
              <span className="idea-mac-dot amber" />
              <span className="idea-mac-dot green" />
              <span
                style={{
                  marginLeft: '0.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.725rem',
                  color: 'var(--text-muted)',
                }}
              >
                prompt_input.ai
              </span>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: isTyping ? 'var(--accent-lavender-dark)' : 'var(--text-muted)',
                fontWeight: 600,
              }}
            >
              <Terminal size={12} />
              <span>{isTyping ? 'SYNTHESIZING PROMPT...' : 'READY FOR ANALYSIS'}</span>
            </div>
          </div>

          {/* Typing Prompt Display */}
          <div className="idea-prompt-text">
            <span>&ldquo;{displayedText}&rdquo;</span>
            <span className="typing-cursor" aria-hidden="true" />
          </div>

          {/* Alternative Variations to Click */}
          {stageData.alternativeIdeas && stageData.alternativeIdeas.length > 0 && (
            <div style={{ marginTop: '1.25rem', paddingTop: '0.85rem', borderTop: '1px dashed var(--border-subtle)' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  fontWeight: 700,
                  marginBottom: '0.45rem',
                }}
              >
                <RefreshCw size={11} />
                <span>EXPLORE PROMPT VARIATIONS:</span>
              </div>
              <div className="idea-alternatives-strip">
                <button
                  type="button"
                  onClick={() => setSelectedPrompt(stageData.exampleIdea)}
                  className="idea-alt-chip"
                  style={{
                    backgroundColor: selectedPrompt === stageData.exampleIdea ? 'var(--accent-yellow)' : '#FFFFFF',
                    fontWeight: selectedPrompt === stageData.exampleIdea ? 700 : 500,
                  }}
                >
                  &bull; Default Concept
                </button>
                {stageData.alternativeIdeas.map((alt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedPrompt(alt)}
                    className="idea-alt-chip"
                    style={{
                      backgroundColor: selectedPrompt === alt ? 'var(--accent-yellow)' : '#FFFFFF',
                      fontWeight: selectedPrompt === alt ? 700 : 500,
                    }}
                  >
                    &bull; Variation {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Problem Description Note */}
        <div className="idea-problem-note">
          <AlertCircle size={18} color="var(--text-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', textTransform: 'uppercase' }}>
              The Problem Statement:{' '}
            </strong>
            <span>{stageData.problemSummary}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
