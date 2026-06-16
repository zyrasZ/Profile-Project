import styles from './Projects.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faDiagramProject, faUtensils } from '@fortawesome/free-solid-svg-icons'

const projects = [
  {
    title: 'AI-WorkFlow',
    href: 'https://ai-work-flow-khaki.vercel.app/#/',
    icon: faDiagramProject,
    description: 'A visual workflow automation platform with an infinite canvas for connecting AI nodes into automated processing pipelines.',
    stack: 'TypeScript, React 19, ReactFlow, Tailwind CSS, Framer Motion, Supabase',
  },
  {
    title: 'BELLEMERE Fashion Store',
    href: 'https://zyrasz.github.io/Shopping-Project/',
    icon: faCartShopping,
    description: 'A modern e-commerce fashion platform with product filtering, persistent cart state, deep linking, and responsive UI.',
    stack: 'JavaScript, ES6 Modules, LocalStorage, CSS animations',
  },
  {
    title: 'Restaurant Management System',
    href: 'https://zyrasz.github.io/Restaurant_System/',
    icon: faUtensils,
    description: 'A restaurant system for menu CRUD, order processing, receipt generation, persistent data, and real-time calculations.',
    stack: 'JavaScript, OOP, LocalStorage, CSS Grid, Flexbox',
  },
]

function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.projectsContainer}>
        <div className={styles.projectsHeader}>
          <h2 className={styles.projectsTitle} data-reveal>Selected Projects</h2>
          <p className={styles.projectsDescription} data-reveal style={{ '--reveal-delay': '90ms' }}>
            Practical front-end work from my CV, focused on interaction design, responsive layouts, and reliable client-side logic.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectCard}
              key={project.title}
              data-reveal="scale"
              style={{ '--reveal-delay': `${index * 110}ms` }}
            >
              <div className={styles.projectIcon}>
                <div className={styles.iconPlaceholder}>
                  <FontAwesomeIcon icon={project.icon} />
                </div>
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <p className={styles.projectStack}>{project.stack}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
