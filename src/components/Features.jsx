import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Icon from './Icon'
import Phone from './Phone'
import styles from './Features.module.css'

const features = [
  { icon: 'users',     title: 'Resident Management',      desc: 'A complete, up-to-date directory of every resident. Add, update, or deactivate residents with role-based access.' },
  { icon: 'wallet',    title: 'Payments & Service Charges', desc: 'Collect dues, utility bills, and levies digitally, with reminders, receipts, and full transaction history.' },
  { icon: 'calendar',  title: 'Amenity Bookings',         desc: 'Residents book pools, gyms, and event halls in the app. No double bookings, no disputes.' },
  { icon: 'megaphone', title: 'Notice Board & Community', desc: 'Announcements and emergency alerts reach every resident, without the noise of group chats.' },
]

const bars = [42, 58, 51, 74, 66, 88, 81]

function Card({ children, className = '', delay = 0 }) {
  const ref = useScrollAnimation()
  return (
    <article ref={ref} className={`${styles.card} ${className} aos`} style={{ '--delay': `${delay}ms` }}>
      {children}
    </article>
  )
}

export default function Features() {
  const headerRef = useScrollAnimation()
  return (
    <section className={styles.section} id="features">
      <div ref={headerRef} className="section-header-center aos">
        <div className="section-label">Key Features</div>
        <h2 className="section-title">Everything your estate needs, in one place</h2>
        <p className="section-sub">From gate control to community communication, Supagate handles the complexity so you can focus on living.</p>
      </div>

      <div className={styles.grid}>
        <Card className={styles.hero}>
          <div className={styles.heroText}>
            <span className={`${styles.icon} ${styles.iconLime}`}><Icon name="shield" /></span>
            <h3>Smart Gate Access</h3>
            <p>Control who enters and exits in real time. Residents issue one-time pass codes; security verifies them at the gate and every event lands in a full audit trail.</p>
          </div>
          <Phone
            src="/hero-crops/06-security-home.png"
            alt="Security app verifying a visitor pass code"
            className={styles.heroPhone}
          />
        </Card>

        {features.map((f, i) => (
          <Card key={f.title} delay={(i % 2) * 80}>
            <span className={styles.icon}><Icon name={f.icon} /></span>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </Card>
        ))}

        <Card className={styles.wide}>
          <div>
            <span className={styles.icon}><Icon name="chart" /></span>
            <h3>Reports & Analytics</h3>
            <p>Detailed reports on gate activity, payment rates, and maintenance requests, so every decision about your estate is backed by data.</p>
          </div>
          <div className={styles.chart} aria-hidden="true">
            {bars.map((h, i) => (
              <span key={i} style={{ height: `${h}%`, '--i': i }} className={i === bars.length - 2 ? styles.barHi : ''} />
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
