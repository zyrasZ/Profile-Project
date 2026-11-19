import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

const SECTIONS = ['home', 'about', 'experience', 'projects', 'contact'];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const appRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Active section tracking for header navigation
      SECTIONS.forEach((sectionId) => {
        const el = document.getElementById(sectionId);
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: 'top 42%',
          end: 'bottom 42%',
          onEnter: () => setActiveSection(sectionId),
          onEnterBack: () => setActiveSection(sectionId),
        });
      });

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // 1. Header scroll progress indicator
        gsap.to('[data-scroll-progress]', {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.25,
          },
        });

        // 2. Hero entrance choreography
        const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        heroTl
          .from('[data-hero-badge]', { y: 20, opacity: 0, duration: 0.45, clearProps: 'transform' })
          .from('[data-hero-title]', { y: 36, opacity: 0, duration: 0.65, clearProps: 'transform' }, '-=0.28')
          .from('[data-hero-sub]', { y: 22, opacity: 0, duration: 0.5, clearProps: 'transform' }, '-=0.38')
          .from('[data-hero-cta]', { y: 18, opacity: 0, duration: 0.45, clearProps: 'transform' }, '-=0.3')
          .from('[data-hero-media]', { y: 38, scale: 0.96, opacity: 0, duration: 0.72, clearProps: 'transform' }, '-=0.52');

        // 3. Subtle scroll parallax on Hero portrait
        gsap.to('[data-hero-avatar]', {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: '#home',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });

        // 4. Section headings & descriptions reveal
        gsap.utils.toArray('[data-gsap-heading]').forEach((el) => {
          gsap.from(el, {
            y: 26,
            opacity: 0,
            duration: 0.65,
            ease: 'power3.out',
            clearProps: 'transform',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
            },
          });
        });

        // 5. Individual cards & panels (About & Contact CTA)
        gsap.utils.toArray('[data-gsap-card]').forEach((el) => {
          gsap.from(el, {
            y: 32,
            scale: 0.98,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
            clearProps: 'transform',
            scrollTrigger: {
              trigger: el,
              start: 'top 86%',
              once: true,
            },
          });
        });

        // 6. Staggered grids (Experience cards & Projects cards)
        gsap.utils.toArray('[data-gsap-stagger-group]').forEach((group) => {
          const cards = group.querySelectorAll('[data-gsap-stagger-card]');
          if (!cards.length) return;
          gsap.from(cards, {
            y: 36,
            scale: 0.97,
            opacity: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: 'power3.out',
            clearProps: 'transform',
            scrollTrigger: {
              trigger: group,
              start: 'top 84%',
              once: true,
            },
          });
        });

        // 7. Skill tags cascade inside About section
        const skillsContainer = document.querySelector('[data-gsap-skills-container]');
        if (skillsContainer) {
          const skills = skillsContainer.querySelectorAll('[data-gsap-skill]');
          gsap.from(skills, {
            y: 14,
            scale: 0.94,
            opacity: 0,
            duration: 0.35,
            stagger: 0.03,
            ease: 'power2.out',
            clearProps: 'transform',
            scrollTrigger: {
              trigger: skillsContainer,
              start: 'top 82%',
              once: true,
            },
          });
        }
      });

      return () => mm.revert();
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="app" ref={appRef}>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
