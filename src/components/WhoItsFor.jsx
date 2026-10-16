import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Icon from './Icon'
import Phone from './Phone'
import AppLink from './AppLink'
import styles from './WhoItsFor.module.css'

const personas = [
  {
    id: 'admin',
    eyebrow: 'Supagate for Estate Administrators',
    heading: 'Run your estate like a CEO',
    desc: 'Facility managers and residents’ associations get one view of money, people and security, without compiling spreadsheets or calling round.',
    features: [
      'Create bills for a block, a household or the whole estate',
      'See collected and outstanding dues at a glance',
      'Keep the resident directory up to date by block and unit',
      'Onboard guards and control when their access expires',
      'Track expenses and pull financial and security reports',
    ],
    screen: '/play-screenshots/02-residents.png',
    alt: 'Supagate admin residents directory',
    chip: { icon: 'wallet', value: '₦51,000', label: 'Collected this month' },
  },
  {
    id: 'resident',
    eyebrow: 'Supagate for Residents',
    heading: 'Live smarter, stress less',
    desc: 'Everything you need from your estate in your pocket. Let guests in without a phone call and pay what you owe in a few taps.',
    features: [
      'Send guests a single-use pass code before they arrive',
      'See every bill, what it is for and when it is due',
      'Pay securely in the app with Paystack',
      'Get alerts from your estate as they happen',
    ],
    screen: '/play-screenshots/03-payment.png',
    alt: 'Supagate payments screen listing estate bills',
    chip: { icon: 'qr', value: 'Active', label: 'Guest pass code valid' },
  },
  {
    id: 'security',
    eyebrow: 'Supagate for Security Teams',
    heading: 'Guard smarter, not harder',
    desc: 'A gate app built for the post. Verify visitors in seconds and let the log do the paperwork.',
    features: [
      'Enter a 6-digit pass code or scan the guest’s QR',
      'Reused or out-of-hours passes are flagged and denied',
      'Register walk-in guests, deliveries, artisans and cars',
      'Every entry and exit is logged with the time',
    ],
    screen: '/hero-crops/07-security-inout.png',
    alt: 'Supagate security in-out gate log',
    chip: { icon: 'shield', value: '3 denied', label: 'Used or out-of-hours passes' },
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
        <div className={styles.stage}>
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
        <h2 className="section-title">One app for every role in the estate</h2>
        <p className="section-sub">Administrators, residents and gate teams each get the tools they need, working from the same records.</p>
      </div>

      <div className={styles.rows}>
        {personas.map((p, i) => <Row key={p.id} p={p} reverse={i % 2 === 1} />)}
      </div>
    </section>
  )
}
