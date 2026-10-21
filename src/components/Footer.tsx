import { ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons.tsx';
import { PORTFOLIO_CONFIG } from '../data/portfolio.ts';

export function Footer() {
  const { profile, contact } = PORTFOLIO_CONFIG;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      style={{
        borderTop: '2px solid var(--border-editorial)',
        backgroundColor: '#FFFFFF',
        padding: '3.5rem 0',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          {/* Brand & Editorial Description */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--accent-yellow)',
                  border: '1.5px solid var(--border-editorial)',
                  boxShadow: '2px 2px 0px #0F172A',
                  color: 'var(--text-dark)',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {profile.initials}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  color: 'var(--text-dark)',
                }}
              >
                {profile.name}
              </span>
            </div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              AI/ML Engineering Student &bull; Vardhaman College of Engineering &bull; {currentYear}
            </p>
          </div>

          {/* Socials & Back To Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{
                color: 'var(--text-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid var(--border-editorial)',
                boxShadow: '2px 2px 0px #0F172A',
                textDecoration: 'none',
                transition: 'transform 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translate(-2px, -2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translate(0, 0)')}
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              style={{
                color: 'var(--text-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-lavender)',
                border: '1.5px solid var(--border-editorial)',
                boxShadow: '2px 2px 0px #0F172A',
                textDecoration: 'none',
                transition: 'transform 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translate(-2px, -2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translate(0, 0)')}
            >
              <LinkedinIcon size={18} />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="btn-editorial-secondary"
              style={{
                padding: '0.55rem 1rem',
                fontSize: '0.8rem',
                boxShadow: '2px 2px 0px #0F172A',
              }}
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        <div
          style={{
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-subtle)',
            textAlign: 'center',
            fontSize: '0.8rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem',
            flexWrap: 'wrap',
          }}
        >
          <span>Crafted with</span>
          <Heart size={14} color="#EF4444" fill="#EF4444" />
          <span>in Cream & Ivory Editorial Style for SDE & AI/ML Opportunities</span>
        </div>
      </div>
    </footer>
  );
}
