import styles from './Hero.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import avatarImage from '../assets/images/avatar.jpg';

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.badgeRow} data-hero-badge>
              <p className={styles.greeting}>Front-end Developer</p>
              <span className={styles.availabilityBadge}>
                <span className={styles.statusDot} aria-hidden="true" />
                Open to Opportunities
              </span>
            </div>

            <h1 className={styles.heroTitle} data-hero-title>
              Nguyen Le
              <br />
              Thai Phat
            </h1>

            <div className={styles.heroDotsLine} data-hero-sub>
              <div className={styles.heroDots} aria-hidden="true">
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
              </div>
              <p className={styles.heroSubtitle}>
                React, TypeScript, UI/UX implementation, and scalable front-end systems.
              </p>
            </div>

            <div className={styles.heroActions} data-hero-cta>
              <a href="#projects" className={styles.primaryCta}>
                <span>Explore Projects</span>
                <FontAwesomeIcon icon={faArrowRight} className={styles.ctaIcon} />
              </a>
              <a href="#contact" className={styles.secondaryCta}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          <div className={styles.heroImage} data-hero-media>
            <img
              src={avatarImage}
              alt="Nguyen Le Thai Phat portrait"
              className={styles.avatarImage}
              data-hero-avatar
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
