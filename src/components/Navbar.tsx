import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons.tsx';
import { PORTFOLIO_CONFIG } from '../data/portfolio.ts';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const { profile, contact, navLinks } = PORTFOLIO_CONFIG;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', ...navLinks.map((l) => l.href.replace('#', ''))];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.25s ease',
        backgroundColor: scrolled ? 'rgba(250, 248, 245, 0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '2px solid var(--border-editorial)' : '2px solid transparent',
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {/* Logo / Initials */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
          }}
          aria-label="Back to top"
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              backgroundColor: 'var(--accent-yellow)',
              border: '2px solid var(--border-editorial)',
              boxShadow: 'var(--shadow-editorial-sm)',
              color: 'var(--text-dark)',
              fontSize: '1rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
            }}
          >
            {profile.initials}
          </span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                fontSize: '1.25rem',
                color: 'var(--text-dark)',
                lineHeight: 1.1,
              }}
            >
              {profile.name}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.04em',
              }}
            >
              AI/ML &bull; Vardhaman College
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: '#FFFFFF',
            padding: '0.35rem 0.6rem',
            borderRadius: '9999px',
            border: '2px solid var(--border-editorial)',
            boxShadow: 'var(--shadow-editorial-sm)',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  position: 'relative',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: isActive ? 'var(--text-dark)' : 'var(--text-muted)',
                  textDecoration: 'none',
                  padding: '0.4rem 1rem',
                  borderRadius: '9999px',
                  backgroundColor: isActive ? 'var(--accent-yellow)' : 'transparent',
                  transition: 'all 0.15s ease',
                }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right CTAs */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.85rem',
          }}
          className="desktop-actions"
        >
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
              border: '2px solid var(--border-editorial)',
              boxShadow: 'var(--shadow-editorial-sm)',
              textDecoration: 'none',
              transition: 'transform 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
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
              border: '2px solid var(--border-editorial)',
              boxShadow: 'var(--shadow-editorial-sm)',
              textDecoration: 'none',
              transition: 'transform 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <LinkedinIcon size={18} />
          </a>

          <a
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial-primary"
            style={{
              padding: '0.55rem 1.15rem',
              fontSize: '0.85rem',
            }}
          >
            <FileText size={15} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            border: '2px solid var(--border-editorial)',
            backgroundColor: 'var(--accent-yellow)',
            boxShadow: 'var(--shadow-editorial-sm)',
            color: 'var(--text-dark)',
            cursor: 'pointer',
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 'var(--nav-height)',
              left: 0,
              right: 0,
              backgroundColor: 'var(--bg-primary)',
              borderBottom: '3px solid var(--border-editorial)',
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              zIndex: 49,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontSize: '1.25rem',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700,
                    color: 'var(--text-dark)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={18} color="var(--text-muted)" />
                </a>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-primary"
                style={{ flex: 1 }}
                onClick={() => setIsOpen(false)}
              >
                <FileText size={16} />
                <span>Resume (PDF)</span>
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-secondary"
                style={{ padding: '0.9rem' }}
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
