import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Icon from './Icon'
import Phone from './Phone'
import styles from './Features.module.css'

const features = [
  { icon: 'wallet',  title: 'Collect dues without the chase', desc: 'Bill service charges, levies, utilities and repairs, one-off or recurring. Send to a block, one household or every resident, and watch payments come in.' },
  { icon: 'list',    title: 'A gate log that never forgets',  desc: 'Every entry, exit and denied attempt is recorded with the time and the resident visited. Filter by in, out or denied in a tap.' },
  { icon: 'users',   title: 'Know every resident',            desc: 'A live directory of residents by block and unit, with contact details your admin and security teams can rely on.' },
  { icon: 'badge',   title: 'Manage your security team',      desc: 'Add guards from your security company, give them access to the gate app, and set when that access expires.' },
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
        <h2 className="section-title">Everything your estate runs on, in one app</h2>
        <p className="section-sub">Dues, gate access, residents and security, connected. No more spreadsheets, notebooks and WhatsApp threads that never agree.</p>
      </div>

      <div className={styles.grid}>
        <Card className={styles.hero}>
          <div className={styles.heroText}>
            <span className={`${styles.icon} ${styles.iconLime}`}><Icon name="shield" /></span>
            <h3>Verified security at every gate</h3>
            <p>Residents send guests a 6-digit pass code. Security enters it or scans the QR, and Supagate checks it on the spot. Codes work once and only within their time window, so a reused or early pass is turned away.</p>
          </div>
          <Phone
            src="/play-screenshots/06-security-home.png"
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
            <h3>Reports, expenses and your estate balance</h3>
            <p>See collected versus outstanding dues, track what the estate spends, and pull financial, security and engagement reports when the committee meets.</p>
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
