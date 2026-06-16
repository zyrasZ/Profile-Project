import styles from './Hero.module.css';
import avatarImage from '../assets/images/avatar.jpg';

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.greeting} data-reveal>
              Front-end Developer
            </p>
            <h1
              className={styles.heroTitle}
              data-reveal
              style={{ '--reveal-delay': '90ms' }}
            >
              Nguyen Le
              <br />
              Thai Phat
            </h1>
            <div
              className={styles.heroDotsLine}
              data-reveal
              style={{ '--reveal-delay': '180ms' }}
            >
              <div className={styles.heroDots}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
              </div>
              <p className={styles.heroSubtitle}>
                React, UI/UX implementation, and responsive front-end
                interfaces.
              </p>
            </div>
          </div>
          <div
            className={styles.heroImage}
            data-reveal="scale"
            style={{ '--reveal-delay': '260ms' }}
          >
            <img
              src={avatarImage}
              alt="Avatar"
              className={styles.avatarImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
