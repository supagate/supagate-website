import Icon from './Icon'
import Phone from './Phone'
import WebScreen from './WebScreen'
import AppLink from './AppLink'
import { CONTACT } from '../lib/contact'
import styles from './Hero.module.css'

const audiences = [
  { icon: 'home',      label: 'Residents' },
  { icon: 'clipboard', label: 'Estate managers' },
  { icon: 'shield',    label: 'Security teams' },
  { icon: 'wrench',    label: 'Service providers' },
]

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.panel}>
        <div className={styles.glow} aria-hidden="true" />

        <div className={styles.content}>
          <p className={`${styles.badge} enter`}>
            <span className={styles.dot} />
            Smarter Communities. Safer Living. Better Everyday Experiences.
          </p>

          <h1 className={`${styles.heading} enter`} style={{ '--d': '90ms' }}>
            A better way to experience <span className={styles.highlight}>residential living.</span>
          </h1>

          <p className={`${styles.sub} enter`} style={{ '--d': '180ms' }}>
            Supagate connects residents, estate managers, security teams and
            trusted service providers on one easy-to-use platform, making
            everyday community living more convenient, organised and secure.
          </p>

          <div className={`${styles.actions} enter`} style={{ '--d': '270ms' }}>
            <AppLink className="btn btn-lime btn-lg" />
            <a href={CONTACT.demo} className="btn btn-ghost-white btn-lg">
              Book a Demo
            </a>
          </div>

          <ul className={`${styles.audiences} enter`} style={{ '--d': '360ms' }} aria-label="Who Supagate is for">
            {audiences.map(a => (
              <li key={a.label}><Icon name={a.icon} size={16} />{a.label}</li>
            ))}
          </ul>
        </div>

        <div className={styles.visual}>
          <WebScreen
            src="/web-screenshots/overview.jpg"
            alt="Supagate web dashboard with collections, outstanding dues and a monthly collections chart"
            className={styles.web}
            style={{ '--d': '300ms' }}
            eager
          />
          <Phone
            src="/hero-crops/01-home.png"
            alt="Supagate home screen with balance overview, visitors today and quick actions"
            className={`${styles.phone} ${styles.phoneEnter}`}
            style={{ '--d': '520ms' }}
            eager
          />

          <div className={`${styles.floatCard} ${styles.floatRight}`} style={{ '--d': '1000ms' }} aria-hidden="true">
            <span className={styles.floatIcon}><Icon name="shield" size={20} /></span>
            <span>
              <strong>Your guest has arrived</strong>
              <small>Verified at the gate · just now</small>
            </span>
          </div>

          <div className={`${styles.floatCard} ${styles.floatLeft}`} style={{ '--d': '1200ms' }} aria-hidden="true">
            <span className={`${styles.floatIcon} ${styles.floatIconLime}`}><Icon name="bell" size={20} /></span>
            <span>
              <strong>Water maintenance on Friday</strong>
              <small>Update from your estate</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
