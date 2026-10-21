import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from './hooks/useLenis.ts';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion.ts';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Skills } from './components/Skills.tsx';
import { Projects } from './components/Projects.tsx';
import { Achievements } from './components/Achievements.tsx';
import { Education } from './components/Education.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import './styles/globals.css';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Initialize Lenis smooth scroll
  useLenis(!prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) return;

    // Coordinated GSAP ScrollTrigger reveals for sections
    const sections = ['#about', '#skills', '#projects', '#achievements', '#education', '#contact'];

    const ctx = gsap.context(() => {
      sections.forEach((selector) => {
        const el = document.querySelector(selector);
        if (!el) return;

        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <div ref={mainRef} style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden', backgroundColor: 'var(--bg-primary)' }}>
      {/* Subtle editorial background grid */}
      <div className="bg-editorial-grid" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
