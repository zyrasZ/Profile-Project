import { useState } from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faArrowUpRightFromSquare,
  faCheck,
  faCode,
  faCopy,
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('thaiphat5b@gmail.com');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = 'mailto:thaiphat5b@gmail.com';
    }
  };

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.footerContainer}>
        <div className={styles.ctaCard} data-gsap-card>
          <div className={styles.ctaMain}>
            <h2 className={styles.title} data-gsap-heading>
              Let&apos;s Build Something Great
            </h2>
            <p className={styles.description} data-gsap-heading>
              Open to Front-end Developer roles and UI engineering collaborations.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <a
              href="mailto:thaiphat5b@gmail.com"
              className={styles.primaryBtn}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Send Email</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className={styles.copyBtn}
              aria-live="polite"
            >
              <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
              <span>{copied ? 'Email Copied' : 'thaiphat5b@gmail.com'}</span>
            </button>
          </div>

          <div className={styles.infoGrid}>
            <a
              href="https://github.com/zyrasZ"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoItem}
            >
              <FontAwesomeIcon icon={faCode} className={styles.infoIcon} />
              <div>
                <span className={styles.infoLabel}>GitHub</span>
                <strong className={styles.infoValue}>github.com/zyrasZ</strong>
              </div>
            </a>

            <a href="tel:0565356513" className={styles.infoItem}>
              <FontAwesomeIcon icon={faPhone} className={styles.infoIcon} />
              <div>
                <span className={styles.infoLabel}>Phone</span>
                <strong className={styles.infoValue}>0565356513</strong>
              </div>
            </a>

            <div className={styles.infoItem}>
              <FontAwesomeIcon icon={faLocationDot} className={styles.infoIcon} />
              <div>
                <span className={styles.infoLabel}>Location</span>
                <strong className={styles.infoValue}>Go Vap, Ho Chi Minh City</strong>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © 2026 Nguyen Le Thai Phat
          </p>
          <a href="#home" className={styles.backToTop}>
            <span>Back to Top</span>
            <FontAwesomeIcon icon={faArrowUp} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
