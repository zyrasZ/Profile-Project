import styles from './Projects.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faUtensils,faList } from '@fortawesome/free-solid-svg-icons';

function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.projectsContainer}>
        <div className={styles.projectsHeader}>
          <h2 className={styles.projectsTitle}>My Project</h2>
          <p className={styles.projectsDescription}>
            Những dự án tôi đã làm trong thời gian qua
          </p>
        </div>

        <div className={styles.projectsGrid}>
          <a
            href="https://zyrasz.github.io/Shopping-Project/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
          >
            <div className={styles.projectIcon}>
              <div className={styles.iconPlaceholder}><FontAwesomeIcon icon={faCartShopping} /></div>
            </div>
            <h3 className={styles.projectTitle}>Shopping-Project</h3>
          </a>

          <a
            href="https://zyrasz.github.io/Restaurant_System/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
          >
            <div className={styles.projectIcon}>
              <div className={styles.iconPlaceholder}><FontAwesomeIcon icon={faUtensils} /></div>
            </div>
            <h3 className={styles.projectTitle}>Resturant System</h3>
          </a>

          <a
            href="https://zyrasz.github.io/TodoList/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
          >
            <div className={styles.projectIcon}>
              <div className={styles.iconPlaceholder}><FontAwesomeIcon icon={faList} /></div>
            </div>
            <h3 className={styles.projectTitle}>Todo List</h3>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
