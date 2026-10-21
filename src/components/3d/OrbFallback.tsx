export function OrbFallback() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '380px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      role="img"
      aria-label="Futuristic Glowing AI Orb"
    >
      {/* Background Soft Glow */}
      <div
        style={{
          position: 'absolute',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(34, 211, 238, 0.2) 40%, transparent 70%)',
          filter: 'blur(35px)',
          animation: 'pulseGlow 4s ease-in-out infinite alternate',
        }}
      />

      {/* SVG Multi-Layer Core & Rings */}
      <svg
        width="340"
        height="340"
        viewBox="0 0 340 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: '100%', height: 'auto', filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))' }}
      >
        <defs>
          <radialGradient id="fallbackCore" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="35%" stopColor="#8B5CF6" />
            <stop offset="75%" stopColor="#4C1D95" />
            <stop offset="100%" stopColor="#0D0D1A" />
          </radialGradient>
          <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="ringGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#38BDF8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Orbiting Ring 1 */}
        <g style={{ transformOrigin: '170px 170px', animation: 'spinRing 14s linear infinite' }}>
          <ellipse cx="170" cy="170" rx="145" ry="55" stroke="url(#ringGrad1)" strokeWidth="1.5" strokeDasharray="6 4" />
          <circle cx="315" cy="170" r="4.5" fill="#22D3EE" style={{ filter: 'drop-shadow(0 0 6px #22D3EE)' }} />
        </g>

        {/* Orbiting Ring 2 */}
        <g style={{ transformOrigin: '170px 170px', animation: 'spinRingRev 18s linear infinite' }}>
          <ellipse cx="170" cy="170" rx="135" ry="70" stroke="url(#ringGrad2)" strokeWidth="1.5" transform="rotate(45 170 170)" />
          <circle cx="280" cy="90" r="4" fill="#A78BFA" style={{ filter: 'drop-shadow(0 0 6px #A78BFA)' }} />
        </g>

        {/* Central Luminous Sphere */}
        <circle cx="170" cy="170" r="85" fill="url(#fallbackCore)" />

        {/* Inner Tech Grid/Wireframe Pattern */}
        <circle cx="170" cy="170" r="85" stroke="rgba(34, 211, 238, 0.35)" strokeWidth="1" strokeDasharray="3 3" />
        <ellipse cx="170" cy="170" rx="85" ry="40" stroke="rgba(167, 139, 250, 0.4)" strokeWidth="0.75" />
        <ellipse cx="170" cy="170" rx="40" ry="85" stroke="rgba(167, 139, 250, 0.4)" strokeWidth="0.75" />

        {/* Translucent Highlight Cap */}
        <ellipse cx="150" cy="135" rx="50" ry="25" fill="rgba(255, 255, 255, 0.15)" transform="rotate(-20 150 135)" />
      </svg>

      <style>{`
        @keyframes pulseGlow {
          from { transform: scale(0.9); opacity: 0.6; }
          to { transform: scale(1.15); opacity: 0.9; }
        }
        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinRingRev {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
