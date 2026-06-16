import styles from './About.module.css';
import avatar1 from '../assets/images/avatar1.jpg';

const skillGroups = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'NestJS', 'Spring Boot'],
  },
  {
    label: 'Data & Tools',
    items: ['MySQL', 'Supabase', 'Git', 'Postman', 'Vercel'],
  },
];

function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutMedia}>
            <div className={styles.aboutImage} data-reveal="scale">
              <img src={avatar1} alt="Avatar" className={styles.aboutAvatar} />
            </div>
            <div
              className={styles.quickPanel}
              data-reveal
              style={{ '--reveal-delay': '120ms' }}
            >
              <h3 className={styles.quickTitle}>Current Focus</h3>
              <div className={styles.quickList}>
                <div className={styles.quickItem}>
                  <span>2023 - Present</span>
                  <strong>Information Technology at UTH</strong>
                </div>
                <div className={styles.quickItem}>
                  <span>April 2026</span>
                  <strong>Claude 101 Certificate by Anthropic</strong>
                </div>
                <div className={styles.quickItem}>
                  <span>Portfolio</span>
                  <strong>
                    Frontend systems, UI implementation, and client-side logic
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.aboutText}>
            <h2 className={styles.aboutTitle} data-reveal>
              Personal <span className={styles.highlight}>Information</span>
            </h2>
            <p
              className={styles.aboutDescription}
              data-reveal
              style={{ '--reveal-delay': '90ms' }}
            >
              Dedicated Front-end Developer Intern with a solid foundation in
              modern web technologies and a practical approach to UI/UX
              implementation. I focus on using HTML, CSS, JavaScript, and React
              to build responsive, user-centric interfaces with clean code and
              reliable performance. I am currently studying Information
              Technology at the University of Transport HCM City.
            </p>
            <div
              className={styles.biodata}
              data-reveal
              style={{ '--reveal-delay': '160ms' }}
            >
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
                  <span className={styles.value}>0565356513</span>
                </div>
                <div className={styles.biodataItem}>
                  <span className={styles.label}>Email</span>
                  <span className={styles.colon}>:</span>
                  <span className={styles.value}>thaiphat5b@gmail.com</span>
                </div>
              </div>
            </div>

            <div
              className={styles.skillsPanel}
              data-reveal
              style={{ '--reveal-delay': '220ms' }}
            >
              <h3 className={styles.biodataTitle}>Skills</h3>
              <div className={styles.skillGroups}>
                {skillGroups.map(group => (
                  <div className={styles.skillGroup} key={group.label}>
                    <p className={styles.skillLabel}>{group.label}</p>
                    <div className={styles.skillList}>
                      {group.items.map(item => (
                        <span className={styles.skillTag} key={item}>
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
