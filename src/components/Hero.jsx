import StoreButton from './StoreButton'
import styles from './Hero.module.css'

const stats = [
  { value: '500+',  label: 'Estates Onboarded' },
  { value: '20K+',  label: 'Active Residents' },
  { value: '99.9%', label: 'Uptime SLA' },
]

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Now Live — Smarter Estate Management
        </div>

        <h1 className={styles.heading}>
          Your estate,<br />
          <span className={styles.highlight}>fully in control.</span>
        </h1>

        <p className={styles.sub}>
          Supagate brings residents, security, and administrators onto one
          seamless platform — manage gate access, pay dues, book amenities,
          and stay connected, all from your phone.
        </p>

        <div className={styles.actions}>
          <StoreButton store="apple" />
          <StoreButton store="play" />
        </div>

        <div className={styles.stats}>
          {stats.map(s => (
            <div key={s.label} className={styles.stat}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.blob} />

        <div className={`${styles.floatCard} ${styles.floatLeft}`}>
          <div className={styles.floatIcon} style={{ background: '#e8f7ef' }}>🛡️</div>
          <div className={styles.floatText}>
            <strong>Gate Secured</strong>
            <span>Visitor approved ✓</span>
          </div>
        </div>

        <div className={styles.phoneStack}>
          <div className={`${styles.phoneFrame} ${styles.phoneBack}`}>
            <div className={styles.btnPower} />
            <div className={styles.btnVolUp} />
            <div className={styles.btnVolDn} />
            <div className={styles.notch} />
            <div className={styles.phoneScreen}>
              <img
                src="/play-screenshots/07-security-inout.png"
                alt="Supagate gate in-out log"
                className={styles.screenImg}
              />
            </div>
          </div>

          <div className={`${styles.phoneFrame} ${styles.phoneFront}`}>
            <div className={styles.btnPower} />
            <div className={styles.btnVolUp} />
            <div className={styles.btnVolDn} />
            <div className={styles.notch} />
            <div className={styles.phoneScreen}>
              <img
                src="/play-screenshots/01-home.png"
                alt="Supagate estate dashboard"
                className={styles.screenImg}
              />
            </div>
          </div>
        </div>

        <div className={`${styles.floatCard} ${styles.floatRight}`}>
          <div className={styles.floatIcon} style={{ background: '#fff6d9' }}>💳</div>
          <div className={styles.floatText}>
            <strong>Payment Received</strong>
            <span>Service charge ✓</span>
          </div>
        </div>
      </div>
    </section>
  )
}
