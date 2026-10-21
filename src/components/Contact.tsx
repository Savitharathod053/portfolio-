import { useState } from 'react';
import { Mail, Copy, Check, FileText, Send, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons.tsx';
import { PORTFOLIO_CONFIG } from '../data/portfolio.ts';

export function Contact() {
  const { contact, profile } = PORTFOLIO_CONFIG;
  const [copied, setCopied] = useState(false);
  const [topic, setTopic] = useState('Internship Opportunity (Software Dev / AI-ML)');
  const [notes, setNotes] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const mailtoHref = `mailto:${contact.email}?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(notes || 'Hello Savitha, I came across your portfolio and would like to discuss...')}`;

  return (
    <section
      id="contact"
      style={{
        padding: '7rem 0',
        position: 'relative',
        backgroundColor: 'var(--bg-paper)',
        borderTop: '2px solid var(--border-editorial)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '680px', marginBottom: '4rem' }}>
          <span className="section-badge">
            <Mail size={14} />
            DIRECT CONTACT
          </span>
          <h2 className="section-title-editorial">
            Let's Collaborate on Software & AI
          </h2>
          <p className="section-subtitle-editorial">
            I am actively seeking Software Development and AI/ML internship opportunities. Feel free to reach out directly via email, phone, or professional networks.
          </p>
        </div>

        {/* Contact Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
          className="contact-editorial-grid"
        >
          {/* Left Column: Direct Info Card */}
          <div
            className="editorial-card"
            style={{
              padding: '2.5rem',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--text-dark)',
                  marginBottom: '0.4rem',
                }}
              >
                Direct Channels
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-body)' }}>
                Reach me directly with no intermediate forms.
              </p>
            </div>

            {/* Email Copy Card */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.15rem 1.25rem',
                backgroundColor: 'var(--accent-yellow)',
                border: '2px solid var(--border-editorial)',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-editorial-sm)',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', overflow: 'hidden' }}>
                <Mail size={19} color="var(--text-dark)" style={{ flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'var(--text-dark)',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {contact.email}
                </span>
              </div>

              <button
                type="button"
                onClick={copyEmail}
                className="btn-editorial-secondary"
                style={{
                  padding: '0.4rem 0.85rem',
                  fontSize: '0.75rem',
                  borderRadius: '9999px',
                  boxShadow: '2px 2px 0px #0F172A',
                }}
                aria-label="Copy email address"
              >
                {copied ? <Check size={14} color="#059669" /> : <Copy size={14} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Phone Card */}
            {contact.phone && (
              <a
                href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem 1.25rem',
                  backgroundColor: '#FFFFFF',
                  border: '2px solid var(--border-editorial)',
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow-editorial-sm)',
                  textDecoration: 'none',
                  color: 'var(--text-dark)',
                  transition: 'transform 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translate(-2px, -2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translate(0, 0)')}
              >
                <Phone size={18} color="var(--accent-lavender-dark)" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', fontWeight: 700 }}>
                  {contact.phone}
                </span>
                <span
                  style={{
                    marginLeft: 'auto',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.725rem',
                    color: 'var(--text-muted)',
                    fontWeight: 600,
                  }}
                >
                  Call Direct
                </span>
              </a>
            )}

            {/* Social Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
              }}
            >
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-secondary"
                style={{ justifyContent: 'flex-start', padding: '0.85rem 1rem' }}
              >
                <GithubIcon size={18} />
                <span>GitHub Profile</span>
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-secondary"
                style={{ justifyContent: 'flex-start', padding: '0.85rem 1rem' }}
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-primary"
                style={{ justifyContent: 'flex-start', padding: '0.85rem 1rem', gridColumn: '1 / -1' }}
              >
                <FileText size={18} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            {/* Location Pill */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                paddingTop: '0.75rem',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <MapPin size={15} />
              <span>{profile.location} &bull; Open to Onsite & Remote Roles</span>
            </div>
          </div>

          {/* Right Column: Pre-configured Mail Dispatcher */}
          <div
            className="editorial-card"
            style={{
              padding: '2.5rem',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--text-dark)',
                  marginBottom: '0.35rem',
                }}
              >
                Quick Email Dispatch
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-body)' }}>
                Select an inquiry topic to trigger your email client with pre-filled details.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label
                htmlFor="topic-select"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}
              >
                Subject Category
              </label>
              <select
                id="topic-select"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: '10px',
                  border: '2px solid var(--border-editorial)',
                  backgroundColor: 'var(--bg-paper)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.925rem',
                  fontWeight: 600,
                  color: 'var(--text-dark)',
                  cursor: 'pointer',
                }}
              >
                <option value="Internship Opportunity (Software Dev / AI-ML)">Internship Opportunity (Software Dev / AI-ML)</option>
                <option value="Project Collaboration / Hackathon">Project Collaboration / Hackathon</option>
                <option value="Technical Interview / Discussion">Technical Interview / Discussion</option>
                <option value="General Query">General Query</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label
                htmlFor="notes-area"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}
              >
                Message Notes (Optional)
              </label>
              <textarea
                id="notes-area"
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Mention role requirements, timeline, or notes here..."
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: '10px',
                  border: '2px solid var(--border-editorial)',
                  backgroundColor: 'var(--bg-paper)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.925rem',
                  color: 'var(--text-dark)',
                  resize: 'vertical',
                }}
              />
            </div>

            <a
              href={mailtoHref}
              className="btn-editorial-primary"
              style={{
                width: '100%',
                padding: '1rem',
                marginTop: '0.5rem',
              }}
            >
              <Send size={16} />
              <span>Launch Mail Client ({contact.email})</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .contact-editorial-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
