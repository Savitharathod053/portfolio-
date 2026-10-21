import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.ts';

gsap.registerPlugin(ScrollTrigger);

interface JourneyConnectorProps {
  label?: string;
  theme?: string;
}

export function JourneyConnector({ label = 'PROCESSING PIPELINE' }: JourneyConnectorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const particleRef = useRef<SVGCircleElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current || !lineRef.current) return;

    const path = lineRef.current;
    const length = path.getTotalLength();

    // Prepare path for stroke-dash animation
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    const ctx = gsap.context(() => {
      // Animate line drawing with ScrollTrigger scrub
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          end: 'bottom 50%',
          scrub: 0.5,
        },
      });

      // Animate particle position along line as scroll progresses
      if (particleRef.current) {
        gsap.fromTo(
          particleRef.current,
          { cy: 8, opacity: 0 },
          {
            cy: 82,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              end: 'bottom 50%',
              scrub: 0.5,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <div ref={containerRef} className="journey-connector-container" aria-hidden="true">
      <svg
        className="journey-connector-svg"
        viewBox="0 0 200 90"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Background Guide Line */}
        <path
          d="M 100 0 L 100 90"
          className="journey-line-bg"
        />

        {/* Dynamic Animated Line */}
        <path
          ref={lineRef}
          d="M 100 0 L 100 90"
          className="journey-line-active"
        />

        {/* Traveling Particle Pulse */}
        {!prefersReducedMotion && (
          <circle
            ref={particleRef}
            cx="100"
            cy="45"
            r="6"
            className="journey-particle-pulse"
          />
        )}
      </svg>

      {/* Tiny Monospace Step Badge */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--border-editorial)',
          borderRadius: '9999px',
          padding: '0.15rem 0.65rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          fontWeight: 700,
          color: 'var(--text-muted)',
          letterSpacing: '0.04em',
          whiteSpace: 'nowrap',
          boxShadow: 'var(--shadow-editorial-sm)',
        }}
      >
        {label}
      </div>
    </div>
  );
}
