import styles from './About.module.css';
import avatar1 from '../assets/images/avatar1.jpg';

const skillGroups = [
  {
    label: 'Frontend & State',
    items: [
      'React',
      'TypeScript',
      'Next.js',
      'JavaScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'TanStack Query',
      'React Hook Form',
      'Zod',
    ],
  },
  {
    label: 'Backend & Data',
    items: ['Node.js', 'Express', 'NestJS', 'Spring Boot', 'MySQL', 'Supabase'],
  },
  {
    label: 'Tools & Workflow',
    items: [
      'Git',
      'Figma',
      'Jira',
      'Postman',
      'Vercel',
      'AI-Assisted Testing',
    ],
  },
];

function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutMedia}>
            <div className={styles.aboutImage} data-gsap-card>
              <img
                src={avatar1}
                alt="Nguyen Le Thai Phat portrait"
                className={styles.aboutAvatar}
              />
            </div>
            <div className={styles.quickPanel} data-gsap-card>
              <h3 className={styles.quickTitle}>Education &amp; Certs</h3>
              <div className={styles.quickList}>
                <div className={styles.quickItem}>
                  <span>2023 - Present</span>
                  <strong>Information Technology at UTH</strong>
                </div>
                <div className={styles.quickItem}>
                  <span>April 2026</span>
                  <strong>Claude 101 Certificate by Anthropic</strong>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.aboutText}>
            <h2 className={styles.aboutTitle} data-gsap-heading>
              About <span className={styles.highlight}>Me</span>
            </h2>
            <p className={styles.aboutDescription} data-gsap-heading>
              Front-end Developer focused on React, TypeScript, modern state management (Redux Toolkit, TanStack Query), and AI-integrated web interfaces. Currently studying Information Technology at UTH.
            </p>
            <div className={styles.biodata} data-gsap-card>
              <h3 className={styles.biodataTitle}>Profile</h3>
              <div className={styles.biodataList}>
                <div className={styles.biodataItem}>
                  <span className={styles.label}>Name</span>
                  <span className={styles.colon}>:</span>
                  <span className={styles.value}>Nguyen Le Thai Phat</span>
                </div>
                <div className={styles.biodataItem}>
                  <span className={styles.label}>Role</span>
                  <span className={styles.colon}>:</span>
                  <span className={styles.value}>Front-end Developer</span>
                </div>
                <div className={styles.biodataItem}>
                  <span className={styles.label}>Education</span>
                  <span className={styles.colon}>:</span>
                  <span className={styles.value}>
                    Information Technology, University of Transport HCM City
                  </span>
                </div>
                <div className={styles.biodataItem}>
                  <span className={styles.label}>Location</span>
                  <span className={styles.colon}>:</span>
                  <span className={styles.value}>Go Vap, Ho Chi Minh City</span>
                </div>
                <div className={styles.biodataItem}>
                  <span className={styles.label}>Phone</span>
                  <span className={styles.colon}>:</span>
                  <a href="tel:0565356513" className={`${styles.value} ${styles.contactLink}`}>
                    0565356513
                  </a>
                </div>
                <div className={styles.biodataItem}>
                  <span className={styles.label}>Email</span>
                  <span className={styles.colon}>:</span>
                  <a
                    href="mailto:thaiphat5b@gmail.com"
                    className={`${styles.value} ${styles.contactLink}`}
                  >
                    thaiphat5b@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.skillsPanel} data-gsap-card data-gsap-skills-container>
              <h3 className={styles.biodataTitle}>Technical Skills</h3>
              <div className={styles.skillGroups}>
                {skillGroups.map((group) => (
                  <div className={styles.skillGroup} key={group.label}>
                    <p className={styles.skillLabel}>{group.label}</p>
                    <div className={styles.skillList}>
                      {group.items.map((item) => (
                        <span className={styles.skillTag} key={item} data-gsap-skill>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
