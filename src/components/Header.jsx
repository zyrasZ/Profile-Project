import { useState } from 'react';
import styles from './Header.module.css';

const navItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About Me', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

function Header({ activeSection = 'home' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <div className={styles.topRow}>
          <a
            href="#home"
            className={styles.logo}
            aria-label="Nguyen Le Thai Phat"
            onClick={handleLinkClick}
          >
            <span className={styles.wordmark}>
              THAI PHAT<span className={styles.wordmarkDot}></span>
            </span>
          </a>

          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className={`${styles.menuBar} ${isMenuOpen ? styles.menuBarTopOpen : ''}`} />
            <span className={`${styles.menuBar} ${isMenuOpen ? styles.menuBarBottomOpen : ''}`} />
          </button>
        </div>

        <nav
          className={`${styles.navigation} ${isMenuOpen ? styles.navigationOpen : ''}`}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={handleLinkClick}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>

      {/* GSAP Scrubbed Scroll Progress Bar */}
      <div className={styles.scrollTrack} aria-hidden="true">
        <div className={styles.scrollProgress} data-scroll-progress />
      </div>
    </header>
  );
}

export default Header;
