import Icon from './Icon'
import Phone from './Phone'
import StoreButton from './StoreButton'
import styles from './Hero.module.css'

// Product facts rather than vanity numbers: each one is something the app
// visibly does today.
const stats = [
  { value: '3-in-1',  label: 'Admin, resident & security' },
  { value: '6-digit', label: 'Single-use visitor passes' },
  { value: 'Paystack', label: 'Secure in-app payments' },
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
            Collect dues without the chase, verify every visitor at the gate,
            and keep a record of everything that happens in your estate. One
            app for administrators, residents and security.
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
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.visual}>
          <Phone
            src="/play-screenshots/04-admin-security-list.png"
            alt="Supagate admin view of the estate security team"
            className={`${styles.phoneBack} ${styles.phoneEnter}`}
            style={{ '--d': '420ms' }}
          />
          <Phone
            src="/hero-crops/01-home.png"
            alt="Supagate admin home with balance overview, visitors today and quick actions"
            className={`${styles.phoneFront} ${styles.phoneEnter}`}
            style={{ '--d': '260ms' }}
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
