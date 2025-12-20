import styles from './About.module.css'
import avatar1 from '../assets/images/avatar1.jpg'

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <img src={avatar1} alt="Avatar" className={styles.aboutAvatar} />
          </div>
          <div className={styles.aboutText}>
            <h2 className={styles.aboutTitle}>
              Personal <span className={styles.highlight}>Information</span>
            </h2>
            <p className={styles.aboutDescription}>
              Tôi là một sinh viên năm 3 đam mê phát triển web, luôn tìm kiếm sự kết hợp hoàn hảo giữa kỹ thuật và trải nghiệm người dùng.
              Dù đang trong quá trình học tập, tôi đã tích lũy kinh nghiệm thực hành qua các dự án cá nhân và nhóm, bao gồm xây dựng Landing Page(Template), Restaurant System,... 
              Mục tiêu của tôi là ứng dụng kiến thức và sự nhiệt huyết để tạo ra các giải pháp web hiệu quả, đáp ứng các tiêu chuẩn công nghiệp mới nhất.
            </p>
            <div className={styles.biodata}>
              <h3 className={styles.biodataTitle}>Thông tin</h3>
              <div className={styles.biodataList}>
                <div className={styles.biodataItem}>
                  <span className={styles.label}>Name</span>
                  <span className={styles.colon}>:</span>
                  <span className={styles.value}>Nguyễn Lê Thái Phát</span>
                </div>
                <div className={styles.biodataItem}>
                  <span className={styles.label}>Ngày sinh</span>
                  <span className={styles.colon}>:</span>
                  <span className={styles.value}>10 October 2005</span>
                </div>
                <div className={styles.biodataItem}>
                  <span className={styles.label}>Địa chỉ</span>
                  <span className={styles.colon}>:</span>
                  <span className={styles.value}>226/1 Nguyễn Văn Lượng - Phường Gò Vấp - Tp Hồ Chí Minh</span>
                </div>
                <div className={styles.biodataItem}>
                  <span className={styles.label}>Email</span>
                  <span className={styles.colon}>:</span>
                  <span className={styles.value}>thaiphat5b@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
