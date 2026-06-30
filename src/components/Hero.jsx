import StoreButton from './StoreButton'
import styles from './Hero.module.css'

const visitors = [
  { initials: 'JA', bg: '#009444', name: 'James Adeyemi',  detail: 'Block C, House 4 · 09:15am', badge: 'IN',      badgeClass: styles.badgeIn },
  { initials: 'FM', bg: '#23365D', name: 'Fatima Musa',    detail: 'Block A, House 12 · 08:47am', badge: 'Pending', badgeClass: styles.badgePending },
  { initials: 'OK', bg: '#4DCA90', name: 'Oluwaseun Kalu', detail: 'Block B, House 7 · 08:30am',  badge: 'OUT',     badgeClass: styles.badgeOut },
]

const quickActions = [
  { icon: '🏃', label: 'Visitors',  sub: '12 today',    bg: '#e8f7ef' },
  { icon: '💳', label: 'Pay Dues',  sub: 'Due: Jun 30', bg: '#e8f0ff' },
  { icon: '🏊', label: 'Book Pool', sub: '3 slots left', bg: '#fff6d9' },
  { icon: '📢', label: 'Notices',   sub: '2 new',        bg: '#fef3c7' },
]

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

        <div className={styles.phoneFrame}>
          <div className={styles.phoneScreen}>
            <div className={styles.statusBar}>
              <span>9:41</span>
              <span>Supagate</span>
              <span>●●●</span>
            </div>

            <div className={styles.phoneContent}>
              <div className={styles.greeting}>
                Good morning 👋
                <strong>Lekki Gardens Estate</strong>
              </div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <span>Recent Visitors</span>
                  <small>View all →</small>
                </div>
                {visitors.map(v => (
                  <div key={v.name} className={styles.visitorRow}>
                    <div className={styles.avatar} style={{ background: v.bg }}>{v.initials}</div>
                    <div className={styles.visitorInfo}>
                      <p>{v.name}</p>
                      <small>{v.detail}</small>
                    </div>
                    <span className={`${styles.badge} ${v.badgeClass}`}>{v.badge}</span>
                  </div>
                ))}
              </div>

              <div className={styles.quickLabel}>Quick Actions</div>
              <div className={styles.quickGrid}>
                {quickActions.map(q => (
                  <div key={q.label} className={styles.quickItem}>
                    <div className={styles.quickIcon} style={{ background: q.bg }}>{q.icon}</div>
                    <p>{q.label}</p>
                    <small>{q.sub}</small>
                  </div>
                ))}
              </div>
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
