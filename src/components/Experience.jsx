import styles from './Experience.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowTrendUp,
  faRocket,
  faBullseye,
} from '@fortawesome/free-solid-svg-icons';

import tmaLogo from '../assets/icons/TMA.png';
import viralmindsLogo from '../assets/icons/ViralMind.svg';
import animocaLogo from '../assets/icons/Animoca.png';

const experiences = [
  {
    role: 'Frontend Developer Intern',
    company: 'TMA Solutions',
    brandTag: 'TMA',
    brandLogo: tmaLogo,
    period: '08/2026 — 11/2026',
    cardTheme: 'light',
    coreWork: [
      'Built reusable React & TypeScript UI modules following clean-code standards.',
      'Managed global state & server caching with Redux Toolkit and TanStack Query.',
      'Implemented type-safe dynamic forms using React Hook Form and Zod.',
    ],
    keyResult: {
      metric: '30%+ Redundant API Reduction & 100% Type-Safe Forms',
      highlightIcon: faArrowTrendUp,
      detail:
        'Cut redundant network requests via query caching and enforced strict schema validation across all user forms.',
    },
    skills: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'TanStack Query',
      'React Hook Form',
      'Zod',
    ],
  },
  {
    role: 'Frontend Developer (Core Team)',
    company: 'ViralMinds',
    brandTag: 'VM',
    brandLogo: viralmindsLogo,
    period: '04/2026 — 05/2026',
    cardTheme: 'dark',
    coreWork: [
      'Designed UI/UX flows and responsive interfaces for the product.',
      'Developed the landing page and AI-assisted test case generation web app.',
      'Collaborated in agile sprints to refine UX and resolve client-side edge cases.',
    ],
    keyResult: {
      metric: 'On-Time MVP Public Trial Launch',
      highlightIcon: faRocket,
      detail:
        'Shipped the trial MVP on schedule to support initial users with automated AI test case generation.',
    },
    skills: [
      'React',
      'UI/UX Design',
      'AI Test Generation',
      'Landing Page',
      'MVP Launch',
    ],
  },
  {
    role: 'Product Advocate',
    company: 'Animoca Brands',
    event: 'SIHUB Data & AI Summer 2026',
    brandTag: 'ANIMOCA',
    brandLogo: animocaLogo,
    period: 'Summer 2026',
    cardTheme: 'accent',
    coreWork: [
      'Represented Animoca Brands at the SIHUB Data & AI Summer 2026 conference.',
      'Delivered live product demonstrations of the Animoca Minds AI suite.',
      'Connected with developers and industry partners to share workflows and gather feedback.',
    ],
    keyResult: {
      metric: '100+ Live Demos & Industry Connections',
      highlightIcon: faBullseye,
      detail:
        'Engaged 100+ engineers and enterprise attendees at the event, driving adoption interest for Animoca Minds.',
    },
    skills: [
      'Animoca Minds',
      'Product Demo',
      'AI Ecosystem',
      'Public Speaking',
    ],
  },
];

function Experience() {
  return (
    <section className={styles.experience} id="experience">
      <div className={styles.experienceContainer}>
        <div className={styles.experienceHeader}>
          <h2 className={styles.experienceTitle} data-gsap-heading>
            Experience &amp; Activities
          </h2>
          <p className={styles.experienceDescription} data-gsap-heading>
            Hands-on engineering experience, startup product delivery, and AI community advocacy.
          </p>
        </div>

        <div className={styles.experienceGrid} data-gsap-stagger-group>
          {experiences.map((exp, index) => (
            <article
              key={`${exp.company}-${index}`}
              className={`${styles.card} ${styles[exp.cardTheme]}`}
              data-gsap-stagger-card
            >
              <div className={styles.cardHeader}>
                <div className={styles.companyMeta}>
                  <div className={styles.brandBox} aria-hidden="true">
                    {exp.brandLogo ? (
                      <img
                        src={exp.brandLogo}
                        alt={`${exp.company} Logo`}
                        className={`${styles.brandLogoImg} ${exp.brandTag === 'ANIMOCA' ? styles.brandLogoZoom : ''}`}
                      />
                    ) : (
                      <span>{exp.brandTag}</span>
                    )}
                  </div>
                  <div className={styles.companyInfo}>
                    <h3 className={styles.companyName}>{exp.company}</h3>
                    {exp.event && (
                      <span className={styles.eventTag}>{exp.event}</span>
                    )}
                  </div>
                </div>
                <div className={styles.periodBadge}>{exp.period}</div>
              </div>

              <div className={styles.roleWrapper}>
                <h4 className={styles.roleTitle}>{exp.role}</h4>
              </div>

              <ul className={styles.bulletList}>
                {exp.coreWork.map((work, i) => (
                  <li key={i} className={styles.bulletItem}>
                    <span className={styles.bulletMarker}>›</span>
                    <span>{work}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.resultBox}>
                <div className={styles.resultHeader}>
                  <FontAwesomeIcon icon={exp.keyResult.highlightIcon} className={styles.resultIcon} />
                  <span className={styles.resultTag}>Key Outcome</span>
                </div>
                <p className={styles.resultMetric}>{exp.keyResult.metric}</p>
                <p className={styles.resultDetail}>{exp.keyResult.detail}</p>
              </div>

              <div className={styles.skillList}>
                {exp.skills.map((skill) => (
                  <span key={skill} className={styles.skillPill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
