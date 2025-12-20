import styles from './Header.module.css'
import logoP from '../assets/icons/Logo-P.jpg'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <img src={logoP} alt="Logo P" className={styles.logoImage} />
        </div>
        <nav className={styles.navigation}>
          <a href="#home" className={`${styles.navLink}`}>Home</a>
          <a href="#about" className={styles.navLink}>About Me</a>
          <a href="#contact" className={styles.navLink}>Contact Us</a>
          <a href="#testimonial" className={styles.navLink}>Testimonial</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
