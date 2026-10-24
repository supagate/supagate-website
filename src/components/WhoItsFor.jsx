import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Icon from './Icon'
import Phone from './Phone'
import WebScreen from './WebScreen'
import AppLink from './AppLink'
import styles from './WhoItsFor.module.css'

const personas = [
  {
    id: 'admin',
    eyebrow: 'Supagate for Estate Administrators',
    heading: 'Run your estate like a CEO',
    desc: 'A command center for administrators. Track payments, manage residents, configure amenities, and resolve issues without a single phone call.',
    features: [
      'Full resident directory with unit assignments',
      'Automated service charge collection and receipts',
      'Real-time gate activity and security alerts',
      'Financial reports and outstanding dues tracking',
    ],
    screen: '/play-screenshots/02-residents.png',
    alt: 'Supagate admin residents directory',
    web: {
      src: '/web-screenshots/residents.jpg',
      alt: 'Supagate web dashboard residents list with join requests to approve',
    },
    chip: { icon: 'qr', value: 'Active', label: 'Guest access code valid' },
  },
  {
    id: 'resident',
    eyebrow: 'Supagate for Residents',
    heading: 'Live smarter, stress less',
    desc: 'Your digital companion at home. Invite guests, pay your bills, and stay connected with your estate community.',
    features: [
      'Generate one-time visitor access codes',
      'Pay service charges and utilities in-app',
      'Book shared amenities with live availability',
      'Receive estate announcements instantly',
    ],
    screen: '/hero-crops/03-payment.png',
    alt: 'Supagate resident payments screen',
    web: {
      src: '/web-screenshots/bills.jpg',
      alt: 'Supagate web dashboard bills page with collected and outstanding totals and each bill’s progress',
    },
    chip: { icon: 'wallet', value: '₦4.2M', label: 'Dues collected this month' },
  },
  {
    id: 'security',
    eyebrow: 'Supagate for Security Teams',
    heading: 'Guard smarter, not harder',
    desc: 'A purpose-built mobile interface for managing gate access, logging incidents, and reaching residents and admin in real time.',
    features: [
      'Verify visitor pass codes and QR tokens',
      'Log every entry and exit with timestamps',
      'Raise and escalate security alerts',
      'Shift handover logs and duty records',
    ],
    screen: '/hero-crops/07-security-inout.png',
    alt: 'Supagate security in-out gate log',
    web: {
      src: '/web-screenshots/security.jpg',
      alt: 'Supagate web dashboard security staff page with guards on duty and their shifts',
    },
    chip: { icon: 'shield', value: '247', label: 'Verified entries today' },
  },
]

function Row({ p, reverse }) {
  const ref = useScrollAnimation()
  return (
    <article ref={ref} className={`${styles.row} ${reverse ? styles.reverse : ''} aos`} id={`for-${p.id}`}>
      <div className={styles.text}>
        <div className="section-label">{p.eyebrow}</div>
        <h3>{p.heading}</h3>
        <p>{p.desc}</p>
        <ul className={`${styles.list} stagger`}>
          {p.features.map((f, i) => (
            <li key={f} style={{ '--i': i }}>
              <span className={styles.tick}><Icon name="check" size={14} strokeWidth={2.6} /></span>
              {f}
            </li>
          ))}
        </ul>
        <AppLink />
      </div>

      <div className={styles.visual}>
        <div className={`${styles.stage} ${p.web ? styles.withWeb : ''}`}>
          {p.web && <WebScreen {...p.web} className={styles.web} />}
          <Phone src={p.screen} alt={p.alt} className={styles.phone} />
          <div className={styles.chip} aria-hidden="true">
            <span className={styles.chipIcon}><Icon name={p.chip.icon} size={18} /></span>
            <span>
              <strong>{p.chip.value}</strong>
              <small>{p.chip.label}</small>
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function WhoItsFor() {
  const headerRef = useScrollAnimation()
  return (
    <section className={styles.section} id="who">
      <div ref={headerRef} className="section-header-center aos">
        <div className="section-label">Who It's For</div>
        <h2 className="section-title">Built for everyone inside the gate</h2>
        <p className="section-sub">One platform, three tailored experiences. Everyone gets the tools they need and nothing they don't.</p>
      </div>

      <div className={styles.rows}>
        {personas.map((p, i) => <Row key={p.id} p={p} reverse={i % 2 === 1} />)}
      </div>
    </section>
  )
}
