import Icon from './Icon'
import Phone from './Phone'
import WebScreen from './WebScreen'
import CountUp from './CountUp'
import StoreButton from './StoreButton'
import styles from './Hero.module.css'

const stats = [
  { value: '500+',  label: 'Estates onboarded' },
  { value: '20K+',  label: 'Active residents' },
  { value: '99.9%', label: 'Uptime SLA' },
]

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.panel}>
        <div className={styles.glow} aria-hidden="true" />

        <div className={styles.content}>
          <a href="#download" className={`${styles.badge} enter`}>
            <span className={styles.dot} />
            Now live on iOS and Android
            <Icon name="arrowRight" size={16} />
          </a>

          <h1 className={`${styles.heading} enter`} style={{ '--d': '90ms' }}>
            Your estate, <span className={styles.highlight}>fully in control.</span>
          </h1>

          <p className={`${styles.sub} enter`} style={{ '--d': '180ms' }}>
            Supagate brings residents, security, and administrators onto one
            platform. Manage gate access, collect dues, book amenities, and
            keep everyone informed from your phone.
          </p>

          <div className={`${styles.actions} enter`} style={{ '--d': '270ms' }}>
            <StoreButton store="apple" light />
            <StoreButton store="play" light />
            <a href="#how-it-works" className={`btn btn-ghost-white btn-lg ${styles.howLink}`}>
              See how it works
            </a>
          </div>

          <dl className={`${styles.stats} enter`} style={{ '--d': '360ms' }}>
            {stats.map(s => (
              <div key={s.label} className={styles.stat}>
                <dt>{s.label}</dt>
                <dd><CountUp value={s.value} /></dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.visual}>
          <WebScreen
            src="/web-screenshots/overview.jpg"
            alt="Supagate web dashboard with collections, outstanding dues and a monthly collections chart"
            className={styles.web}
            style={{ '--d': '120ms' }}
            eager
          />
          <Phone
            src="/hero-crops/01-home.png"
            alt="Supagate admin home with balance overview, visitors today and quick actions"
            className={`${styles.phoneFront} ${styles.phoneEnter}`}
            style={{ '--d': '380ms' }}
            eager
          />

          <div className={`${styles.floatCard} ${styles.floatTop}`} style={{ '--d': '900ms' }} aria-hidden="true">
            <span className={styles.floatIcon}><Icon name="shield" size={20} /></span>
            <span>
              <strong>Visitor approved</strong>
              <small>Gate 2 · just now</small>
            </span>
          </div>

          <div className={`${styles.floatCard} ${styles.floatBottom}`} style={{ '--d': '1100ms' }} aria-hidden="true">
            <span className={`${styles.floatIcon} ${styles.floatIconLime}`}><Icon name="wallet" size={20} /></span>
            <span>
              <strong>Service charge paid</strong>
              <small>Receipt sent to resident</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
