import { Title, NavBar, Footer } from '../../components'
import styles from './AboutUs.module.css'
import iconGym from '../../assets/icons/icon-gym.png'
import iconSchedule from '../../assets/icons/icon-schedule.png'
import iconShower from '../../assets/icons/icon-shower.png'

export default function AboutUs() {
  return (
    <div className={styles.background}>
      <NavBar />
      <Title
        title="About Us"
        link="/auth/register"
        linkTitle="Get Started"
      />
      <div className={styles.aboutUsFlex}>
        <div className={styles.aboutUsContainer}>
          <div className={styles.textContainer}>
            <p className={styles.paragraph}>
              Welcome to our fitness community! We offer CrossFit, Yoga, Calisthenics, and Pilates - a holistic approach to fitness.
            </p>
            <p className={styles.paragraph}>
              Our experienced instructors and state-of-the-art facility create a supportive environment for all levels.
            </p>
            <p className={styles.paragraph}>
              Join us today and transform your fitness journey! 💪
            </p>
            <p className={styles.paragraph}>
              <b>Hours of Operation:</b> Monday to Friday from 7am to 9am & 5pm to 9pm
            </p>
          </div>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <img src={iconGym} alt="Gym" />
              <h4>24/7 Gym Access</h4>
            </div>
            <div className={styles.card}>
              <img src={iconSchedule} alt="Schedule" />
              <h4>Easy Class Scheduling</h4>
            </div>
            <div className={styles.card}>
              <img src={iconShower} alt="Shower" />
              <h4>Shower Facilities</h4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}