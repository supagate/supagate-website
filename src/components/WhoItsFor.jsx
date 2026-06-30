import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './WhoItsFor.module.css'

const tabs = [
  {
    id: 'admin',
    label: 'Estate Administrators',
    heading: 'Run your estate like a CEO',
    desc: 'Supagate gives administrators a powerful command center — track payments, manage residents, configure amenities, and resolve issues without a single phone call.',
    features: [
      'Full resident directory with unit assignments',
      'Automated service charge collection and receipts',
      'Real-time gate activity and security alerts',
      'Amenity scheduling and booking management',
      'Community notice board with push notifications',
      'Financial reports and outstanding dues tracking',
    ],
    cards: [
      { icon: '💰', bg: '#e8f7ef', value: '₦4.2M',      sub: 'Dues collected this month' },
      { icon: '👥', bg: '#e8f0ff', value: '247',          sub: 'Active residents' },
      { icon: '🔔', bg: '#fff6d9', value: '3',            sub: 'Pending notices to send' },
      { icon: '⚠️', bg: '#feeaea', value: '5',            sub: 'Outstanding maintenance' },
    ],
  },
  {
    id: 'resident',
    label: 'Residents',
    heading: 'Live smarter, stress less',
    desc: 'As a resident, Supagate is your digital companion — manage your home, invite guests, pay your bills, and stay connected with your estate community.',
    features: [
      'Generate one-time visitor access codes',
      'Pay service charges and utilities in-app',
      'Book shared amenities with live availability',
      'Receive estate announcements instantly',
      'Track your payment history and receipts',
      'Request artisan and maintenance services',
    ],
    cards: [
      { icon: '🔑', bg: '#e8f7ef', value: 'Active',       sub: 'Guest access code valid' },
      { icon: '📅', bg: '#e8f0ff', value: 'Jul 5',         sub: 'Pool booking confirmed' },
      { icon: '🔧', bg: '#fff0e5', value: 'In Progress',   sub: 'Plumbing request #047' },
      { icon: '✅', bg: '#f0eeff', value: 'Paid',           sub: 'June service charge' },
    ],
  },
  {
    id: 'security',
    label: 'Security Teams',
    heading: 'Guard smarter, not harder',
    desc: 'Security personnel get a purpose-built mobile interface for managing gate access, logging incidents, and communicating with residents and admin in real time.',
    features: [
      'Verify visitor QR codes and access tokens',
      'Log entry and exit with timestamps',
      'Raise and escalate security alerts',
      'View resident contact info for verification',
      'Incident reporting with photo attachment',
      'Shift handover logs and duty records',
    ],
    cards: [
      { icon: '✅', bg: '#e8f7ef', value: '247',          sub: 'Verified entries today' },
      { icon: '🚨', bg: '#feeaea', value: '0',             sub: 'Active alerts right now' },
      { icon: '📋', bg: '#fff6d9', value: '18',            sub: 'Visitors logged today' },
      { icon: '🔒', bg: '#e8f0ff', value: 'Secure',        sub: 'All gates operational' },
    ],
  },
]

function Panel({ tab }) {
  const ref = useScrollAnimation()
  return (
    <div ref={ref} className={`${styles.panel} aos`}>
      <div className={styles.panelText}>
        <h2>{tab.heading}</h2>
        <p>{tab.desc}</p>
        <ul className={styles.featureList}>
          {tab.features.map(f => <li key={f}>{f}</li>)}
        </ul>
      </div>
      <div className={styles.panelVisual}>
        <div className={styles.cardGrid}>
          {tab.cards.map(c => (
            <div key={c.sub} className={styles.miniCard}>
              <div className={styles.miniIcon} style={{ background: c.bg }}>{c.icon}</div>
              <strong>{c.value}</strong>
              <span>{c.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function WhoItsFor() {
  const [active, setActive] = useState(0)
  const headerRef = useScrollAnimation()

  return (
    <section className={styles.section} id="who">
      <div ref={headerRef} className="section-header aos">
        <div className="section-label">✦ Who It's For</div>
        <h2 className="section-title">Built for everyone in the estate</h2>
      </div>

      <div className={styles.tabs}>
        {tabs.map((t, i) => (
          <button
            key={t.id}
            className={`${styles.tab} ${active === i ? styles.tabActive : ''}`}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <Panel key={active} tab={tabs[active]} />
    </section>
  )
}
