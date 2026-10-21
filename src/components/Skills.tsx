import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Terminal, Info } from 'lucide-react';

interface PeriodicSkill {
  id: string;
  symbol: string;
  number: string;
  name: string;
  category: 'Language' | 'Backend & Web' | 'AI & ML' | 'Dev Ecosystem';
  color: string;
  accentColor: string;
  span?: 'standard' | 'wide' | 'tall';
  description: string;
  experience: string;
}

const PERIODIC_SKILLS: PeriodicSkill[] = [
  {
    id: 'python',
    symbol: 'Py',
    number: '01',
    name: 'Python',
    category: 'Language',
    color: '#FEF08A', // soft yellow
    accentColor: '#CA8A04',
    span: 'wide',
    description: 'Primary language for ML workflows, automation, data handling, and backend services.',
    experience: 'Core Language',
  },
  {
    id: 'ai-ml',
    symbol: 'Ml',
    number: '02',
    name: 'Machine Learning',
    category: 'AI & ML',
    color: '#E9D5FF', // lavender
    accentColor: '#9333EA',
    span: 'wide',
    description: 'Feature preprocessing, classification algorithms, and rigorous model evaluation.',
    experience: 'Academic & Projects',
  },
  {
    id: 'gemini',
    symbol: 'Ge',
    number: '03',
    name: 'Gemini API',
    category: 'AI & ML',
    color: '#BAE6FD', // soft sky blue
    accentColor: '#0284C7',
    span: 'standard',
    description: 'Prompt engineering, structured AI planning outputs, and debugged multi-turn context.',
    experience: 'Project Guard',
  },
  {
    id: 'java',
    symbol: 'Jv',
    number: '04',
    name: 'Java',
    category: 'Language',
    color: '#FEF08A',
    accentColor: '#CA8A04',
    span: 'standard',
    description: 'Object-oriented fundamentals, data structures, and algorithmic foundations.',
    experience: 'Core Curriculum',
  },
  {
    id: 'javascript',
    symbol: 'Js',
    number: '05',
    name: 'JavaScript',
    category: 'Backend & Web',
    color: '#FFEDD5', // soft peach
    accentColor: '#EA580C',
    span: 'standard',
    description: 'Modern ES6+, DOM manipulation, asynchronous fetch APIs, and dynamic state.',
    experience: 'Frontend & Web',
  },
  {
    id: 'react',
    symbol: 'Re',
    number: '06',
    name: 'React',
    category: 'Backend & Web',
    color: '#BAE6FD',
    accentColor: '#0284C7',
    span: 'wide',
    description: 'Component lifecycles, hooks, modular UI systems; currently expanding expertise.',
    experience: 'Actively Learning',
  },
  {
    id: 'fastapi',
    symbol: 'Fa',
    number: '07',
    name: 'FastAPI / Flask',
    category: 'Backend & Web',
    color: '#D1FAE5', // soft mint
    accentColor: '#059669',
    span: 'wide',
    description: 'RESTful API architectures, request routing, and backend data endpoints.',
    experience: 'Campus Flow & Web',
  },
  {
    id: 'sql',
    symbol: 'Sq',
    number: '08',
    name: 'SQL / Databases',
    category: 'Backend & Web',
    color: '#D1FAE5',
    accentColor: '#059669',
    span: 'standard',
    description: 'Relational database integration, student roll authentication datasets, and schema queries.',
    experience: 'Event Systems',
  },
  {
    id: 'c-cpp',
    symbol: 'C+',
    number: '09',
    name: 'C / C++',
    category: 'Language',
    color: '#FEF08A',
    accentColor: '#CA8A04',
    span: 'standard',
    description: 'Foundational programming concepts, memory layout fundamentals, and algorithms.',
    experience: 'Undergrad Studies',
  },
  {
    id: 'html-css',
    symbol: 'Hc',
    number: '10',
    name: 'HTML5 & CSS3',
    category: 'Backend & Web',
    color: '#FFEDD5',
    accentColor: '#EA580C',
    span: 'standard',
    description: 'Semantic markup, accessibility, CSS Grid, Flexbox, and responsive styling.',
    experience: 'Web Foundations',
  },
  {
    id: 'github',
    symbol: 'Gh',
    number: '11',
    name: 'GitHub & Git',
    category: 'Dev Ecosystem',
    color: '#E9D5FF',
    accentColor: '#9333EA',
    span: 'wide',
    description: 'Branching, PRs, codebase collaboration, and repository structure analysis.',
    experience: 'Daily Workflow',
  },
  {
    id: 'antigravity',
    symbol: 'Ag',
    number: '12',
    name: 'Antigravity & AI Tools',
    category: 'Dev Ecosystem',
    color: '#BAE6FD',
    accentColor: '#0284C7',
    span: 'wide',
    description: 'AI-assisted development for research, rapid prototyping, debugging, and testing.',
    experience: 'Prototyping Stack',
  },
];

export function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedSkill, setSelectedSkill] = useState<PeriodicSkill | null>(null);

  const categories = ['All', 'Language', 'AI & ML', 'Backend & Web', 'Dev Ecosystem'];

  const filteredSkills = activeFilter === 'All'
    ? PERIODIC_SKILLS
    : PERIODIC_SKILLS.filter((s) => s.category === activeFilter);

  return (
    <section
      id="skills"
      style={{
        padding: '7rem 0',
        position: 'relative',
        backgroundColor: 'var(--bg-paper)',
        borderTop: '2px solid var(--border-editorial)',
        borderBottom: '2px solid var(--border-editorial)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            marginBottom: '3.5rem',
          }}
        >
          <div style={{ alignSelf: 'flex-start' }}>
            <span className="section-badge">
              <Sparkles size={14} />
              INTERACTIVE PERIODIC GRID
            </span>
          </div>

          <h2 className="section-title-editorial">
            Technical Stack & Ecosystem
          </h2>
          <p className="section-subtitle-editorial">
            Explore the verified technologies I use for building software prototypes, machine learning pipelines, and web applications. Hover over any tile to inspect practical implementation context.
          </p>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.6rem',
              marginTop: '1.25rem',
            }}
          >
            {categories.map((cat) => {
              const isSelected = activeFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  style={{
                    padding: '0.45rem 1rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    borderRadius: '9999px',
                    border: '1.5px solid var(--border-editorial)',
                    backgroundColor: isSelected ? 'var(--text-dark)' : '#FFFFFF',
                    color: isSelected ? '#FFFFFF' : 'var(--text-dark)',
                    boxShadow: isSelected ? 'none' : 'var(--shadow-editorial-sm)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Periodic Grid Tiles */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '1.25rem',
          }}
          className="periodic-grid"
        >
          {filteredSkills.map((skill) => {
            const isHovered = selectedSkill?.id === skill.id;

            return (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onMouseEnter={() => setSelectedSkill(skill)}
                onMouseLeave={() => setSelectedSkill(null)}
                onClick={() => setSelectedSkill(isHovered ? null : skill)}
                whileHover={{
                  y: -5,
                  rotate: -1,
                  transition: { duration: 0.15 },
                }}
                className="editorial-card"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '190px',
                  backgroundColor: skill.color,
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top Row: Atomic Number & Category Tag */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--text-dark)',
                    }}
                  >
                    {skill.number}
                  </span>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.675rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      border: '1px solid var(--border-editorial)',
                      color: 'var(--text-dark)',
                    }}
                  >
                    {skill.category}
                  </span>
                </div>

                {/* Center: Large Element Symbol & Name */}
                <div style={{ margin: '0.8rem 0' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      lineHeight: 1,
                      color: 'var(--text-dark)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {skill.symbol}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--text-dark)',
                    }}
                  >
                    {skill.name}
                  </h3>
                </div>

                {/* Bottom Context Strip / Hover Reveal */}
                <div
                  style={{
                    paddingTop: '0.5rem',
                    borderTop: '1px solid rgba(15, 23, 42, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.725rem',
                      fontWeight: 600,
                      color: 'var(--text-body)',
                    }}
                  >
                    {skill.experience}
                  </span>
                  <Info size={13} color="var(--text-dark)" />
                </div>

                {/* Interactive Overlay Drawer on Hover/Touch */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.18 }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: '#FFFFFF',
                        padding: '1.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        zIndex: 10,
                        border: '2px solid var(--border-editorial)',
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: 'var(--accent-lavender-dark)',
                          marginBottom: '0.35rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                        }}
                      >
                        <Terminal size={13} />
                        <span>{skill.name} in Practice</span>
                      </div>
                      <p
                        style={{
                          fontSize: '0.85rem',
                          lineHeight: 1.45,
                          color: 'var(--text-dark)',
                          fontWeight: 500,
                        }}
                      >
                        {skill.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
