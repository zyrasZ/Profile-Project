import styles from './Projects.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faCode,
} from '@fortawesome/free-solid-svg-icons';

import aiWorkflowCover from '../assets/images/projects/ai-workflow.png';
import smartCanteenCover from '../assets/images/projects/smart-canteen.png';
import tmaEnterpriseCover from '../assets/images/projects/tma-enterprise.png';
import bellemereCover from '../assets/images/projects/bellemere.png';

const projects = [
  {
    title: 'AI-WorkFlow',
    liveUrl: 'https://ai-work-flow-khaki.vercel.app/#/',
    githubUrl: 'https://github.com/zyrasZ/AI-WorkFlow',
    coverImage: aiWorkflowCover,
    description:
      'Visual AI workflow automation platform featuring an infinite drag-and-drop canvas, DAG pipeline execution, conditional branching, and real-time persistence.',
    highlights: [
      'Infinite drag-and-drop node canvas with zoom & pan',
      'DAG execution engine with conditional branching logic',
      'Real-time workflow state persistence via Supabase',
    ],
    stack: 'TypeScript, React 19, ReactFlow, Tailwind CSS, Supabase',
  },
  {
    title: 'Smart Canteen',
    liveUrl: 'https://adminweb-dun.vercel.app/dashboard',
    coverImage: smartCanteenCover,
    description:
      'Multi-campus school canteen system comprising a Web Admin & Serving TV Display portal and a role-based Zalo Mini App for students, parents, and staff.',
    highlights: [
      'Web Admin: RBAC, Excel menu import, Kitchen BOM forecast & QR serving display',
      'Zalo Mini App: Meal pre-order (UTC+7 cut-off), e-wallet & dynamic QR Pass',
      'Brand Sync, CSAT feedback loops & offline demo fallback',
    ],
    stack:
      'React 19, TypeScript, Vite, Tailwind CSS v4, Recharts, Axios, jsQR, qrcode.react',
  },
  {
    title: 'Gas Station Management System IGAS',
    liveUrl: 'https://project-tma.vercel.app/',
    githubUrl: 'https://github.com/zyrasZ/project-tma',
    coverImage: tmaEnterpriseCover,
    description:
      'Role-based enterprise platform for managing fuel station chains with Admin and Staff portals for station monitoring, e-invoices, and reporting.',
    highlights: [
      'Admin & Staff portals with RBAC routing & i18n (EN/VI)',
      'Pump/tank monitoring, multi-provider e-invoice config & XLSX/PDF export',
      'Headless PrimeReact v11 UI system with TanStack Query & Redux Toolkit',
    ],
    stack:
      'React 19, TypeScript, Tailwind CSS v3, PrimeReact v11, TanStack Query v5, Redux Toolkit, Zod, ApexCharts',
  },
  {
    title: 'BELLEMERE Fashion Store',
    liveUrl: 'https://zyrasz.github.io/shopping-project/',
    githubUrl: 'https://github.com/zyrasZ/Shopping-Project',
    coverImage: bellemereCover,
    description:
      'E-commerce fashion storefront with multi-criteria product filtering, persistent cart state, and responsive mobile-first UI.',
    highlights: [
      'Catalog filtering & real-time product search',
      'Persistent shopping cart synced with LocalStorage',
      'Modular ES6 architecture with responsive interactions',
    ],
    stack: 'JavaScript, ES6 Modules, LocalStorage, CSS3',
  },
];

function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.projectsContainer}>
        <div className={styles.projectsHeader}>
          <h2 className={styles.projectsTitle} data-gsap-heading>
            Selected Projects
          </h2>
          <p className={styles.projectsDescription} data-gsap-heading>
            Production web applications, interactive workflows, and front-end engineering work.
          </p>
        </div>

        <div className={styles.projectsGrid} data-gsap-stagger-group>
          {projects.map((project) => (
            <article
              className={styles.projectCard}
              key={project.title}
              data-gsap-stagger-card
            >
              <div className={styles.previewContainer}>
                <img
                  src={project.coverImage}
                  alt={`${project.title} preview`}
                  className={styles.previewImage}
                  loading="lazy"
                />
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>

                <ul className={styles.projectHighlights}>
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className={styles.highlightItem}>
                      <span className={styles.highlightBullet}>›</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <p className={styles.projectStack}>{project.stack}</p>

                <div className={styles.actionRow}>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.actionButton} ${styles.liveButton}`}
                    >
                      <span>Live Demo</span>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.actionButton} ${styles.githubButton}`}
                    >
                      <FontAwesomeIcon icon={faCode} />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
