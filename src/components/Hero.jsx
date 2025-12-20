import styles from './Hero.module.css'
import avatarImage from '../assets/images/avatar.jpg' 

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.greeting}>Hello, My Name Is</p>
            <h1 className={styles.heroTitle}>
              Nguyễn Lê<br />
              Thái Phát
            </h1>
            <div className={styles.heroDotsLine}>
                <div className={styles.heroDots}>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                </div>
                <p className={styles.heroSubtitle}>Web Developer</p>
                </div>
            </div>
          <div className={styles.heroImage}>
            <img src={avatarImage} alt="Avatar" className={styles.avatarImage} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
