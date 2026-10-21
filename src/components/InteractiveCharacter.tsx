import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Terminal, Code2 } from 'lucide-react';

export function InteractiveCharacter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isWinking, setIsWinking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalized coordinates (-1 to 1)
      const x = Math.max(-1, Math.min(1, (e.clientX - centerX) / 300));
      const y = Math.max(-1, Math.min(1, (e.clientY - centerY) / 300));
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleClick = () => {
    setIsWinking(true);
    setTimeout(() => setIsWinking(false), 900);
  };

  // Eye pupil offset
  const pupilX = mousePos.x * 6;
  const pupilY = mousePos.y * 5;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '460px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Decorative Editorial Backing Shape */}
      <div
        style={{
          position: 'absolute',
          width: '380px',
          height: '380px',
          borderRadius: '42% 58% 68% 32% / 32% 45% 55% 68%',
          backgroundColor: 'var(--accent-yellow)',
          border: '2px solid var(--border-editorial)',
          boxShadow: 'var(--shadow-editorial-lg)',
          zIndex: 1,
          animation: 'morphShape 14s ease-in-out infinite alternate',
        }}
      />

      {/* Floating Decorative Tags */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '15px',
          left: '-10px',
          zIndex: 10,
        }}
      >
        <span
          className="sticker-badge"
          style={{
            backgroundColor: 'var(--accent-lavender)',
            transform: 'rotate(-6deg)',
          }}
        >
          <Sparkles size={13} style={{ marginRight: '4px' }} />
          SIH 2026 Shortlist
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        style={{
          position: 'absolute',
          bottom: '25px',
          right: '-15px',
          zIndex: 10,
        }}
      >
        <span
          className="sticker-badge"
          style={{
            backgroundColor: 'var(--accent-mint)',
            transform: 'rotate(5deg)',
          }}
        >
          <Code2 size={13} style={{ marginRight: '4px' }} />
          CGPA 9.03 &bull; Vardhaman
        </span>
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '40px',
          right: '5px',
          zIndex: 10,
        }}
      >
        <span
          className="sticker-badge"
          style={{
            backgroundColor: '#FFFFFF',
            transform: 'rotate(8deg)',
          }}
        >
          <Terminal size={13} style={{ marginRight: '4px' }} />
          Python & AI/ML
        </span>
      </motion.div>

      {/* Main Animated Character SVG */}
      <motion.div
        onClick={handleClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          position: 'relative',
          zIndex: 2,
          cursor: 'pointer',
        }}
        aria-label="Click to interact with avatar"
      >
        <svg
          width="360"
          height="390"
          viewBox="0 0 360 390"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: 'drop-shadow(2px 6px 0px rgba(15, 23, 42, 0.1))' }}
        >
          {/* Desk / Base Mat */}
          <ellipse cx="180" cy="355" rx="145" ry="24" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
          <ellipse cx="180" cy="355" rx="125" ry="17" fill="var(--bg-subtle)" stroke="#0F172A" strokeWidth="1" strokeDasharray="4 3" />

          {/* Shoulders / Hoodie */}
          <path
            d="M 100 350 C 100 270, 130 250, 180 250 C 230 250, 260 270, 260 350 Z"
            fill="var(--accent-blue)"
            stroke="#0F172A"
            strokeWidth="2.5"
          />

          {/* Hoodie Collar Detail */}
          <path
            d="M 155 250 L 180 285 L 205 250"
            fill="#FFFFFF"
            stroke="#0F172A"
            strokeWidth="2"
          />
          <circle cx="180" cy="275" r="3.5" fill="#0F172A" />

          {/* Neck */}
          <rect x="166" y="222" width="28" height="32" rx="6" fill="#FDE68A" stroke="#0F172A" strokeWidth="2.5" />

          {/* Head Shape */}
          <g style={{ transform: `translate(${mousePos.x * 4}px, ${mousePos.y * 3}px)` }}>
            {/* Hair Back */}
            <path
              d="M 102 180 C 95 105, 140 85, 180 85 C 220 85, 265 105, 258 180 C 258 215, 240 240, 235 240 C 230 240, 130 240, 125 240 C 120 240, 102 215, 102 180 Z"
              fill="#1E293B"
              stroke="#0F172A"
              strokeWidth="2.5"
            />

            {/* Face Oval */}
            <rect
              x="125"
              y="110"
              width="110"
              height="120"
              rx="48"
              fill="#FEF08A"
              stroke="#0F172A"
              strokeWidth="2.5"
            />

            {/* Cheek Blushes */}
            <circle cx="145" cy="188" r="9" fill="#FCA5A5" opacity="0.65" />
            <circle cx="215" cy="188" r="9" fill="#FCA5A5" opacity="0.65" />

            {/* Left Eye */}
            <g transform="translate(148, 168)">
              {isWinking ? (
                <path d="M -8 2 Q 0 -6 8 2" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" fill="none" />
              ) : (
                <>
                  <ellipse cx="0" cy="0" rx="9" ry="10" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
                  <circle cx={pupilX} cy={pupilY} r="5" fill="#0F172A" />
                  <circle cx={pupilX + 1.8} cy={pupilY - 1.8} r="1.8" fill="#FFFFFF" />
                </>
              )}
            </g>

            {/* Right Eye */}
            <g transform="translate(212, 168)">
              <ellipse cx="0" cy="0" rx="9" ry="10" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
              <circle cx={pupilX} cy={pupilY} r="5" fill="#0F172A" />
              <circle cx={pupilX + 1.8} cy={pupilY - 1.8} r="1.8" fill="#FFFFFF" />
            </g>

            {/* Glasses Frame (Editorial Designer Look) */}
            <rect x="135" y="152" width="26" height="26" rx="8" fill="none" stroke="#0F172A" strokeWidth="2.5" />
            <rect x="199" y="152" width="26" height="26" rx="8" fill="none" stroke="#0F172A" strokeWidth="2.5" />
            <path d="M 161 165 L 199 165" stroke="#0F172A" strokeWidth="2.5" />

            {/* Friendly Smile */}
            <path
              d="M 170 196 Q 180 205 190 196"
              fill="none"
              stroke="#0F172A"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Hair Front Bangs */}
            <path
              d="M 125 130 C 145 112, 175 115, 185 132 C 195 115, 220 115, 235 135 C 235 110, 215 95, 180 95 C 145 95, 125 110, 125 130 Z"
              fill="#1E293B"
            />

            {/* Headband / Cozy Headphones */}
            <path
              d="M 115 160 C 110 95, 250 95, 245 160"
              fill="none"
              stroke="var(--accent-lavender-dark)"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <rect x="110" y="155" width="16" height="32" rx="7" fill="var(--accent-lavender)" stroke="#0F172A" strokeWidth="2" />
            <rect x="234" y="155" width="16" height="32" rx="7" fill="var(--accent-lavender)" stroke="#0F172A" strokeWidth="2" />
          </g>

          {/* Mini Laptop on Desk */}
          <rect x="135" y="318" width="90" height="34" rx="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
          <path d="M 120 352 L 240 352" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
          <circle cx="180" cy="334" r="5" fill="var(--accent-yellow)" stroke="#0F172A" strokeWidth="1.5" />
        </svg>
      </motion.div>

      <style>{`
        @keyframes morphShape {
          0% { border-radius: 42% 58% 68% 32% / 32% 45% 55% 68%; }
          100% { border-radius: 58% 42% 38% 62% / 60% 35% 65% 40%; }
        }
      `}</style>
    </div>
  );
}
