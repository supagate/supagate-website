import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Icon from './Icon'
import Phone from './Phone'
import WebScreen from './WebScreen'
import { CONTACT } from '../lib/contact'
import styles from './WhoItsFor.module.css'

const personas = [
  {
    id: 'resident',
    eyebrow: 'For Residents',
    heading: 'Feel more connected to where you live',
    desc: 'Your home should be a place of comfort, convenience and peace of mind. Supagate helps you manage everyday residential activities without unnecessary stress.',
    features: [
      'Welcome your guests with digital visitor passes',
      'Get notified when visitors arrive at the gate',
      'Know what you owe, pay conveniently and keep your records',
      'Raise concerns and follow up without chasing multiple people',
      'Stay informed about what matters in your community',
    ],
    screen: '/hero-crops/13-resident-home.png',
    alt: 'Supagate resident home with outstanding payments, an unpaid bill reminder and an estate alert',
    chip: { icon: 'qr', value: 'Guest pass sent', label: 'Valid for today’s visit' },
    cta: { href: '#download', label: 'Explore the Resident Experience' },
  },
  {
    id: 'admin',
    eyebrow: 'For Estate Managers and Administrators',
    heading: 'Manage your community with greater clarity and control',
    desc: 'Coordinating people, payments, security, maintenance and shared facilities through scattered records is hard to keep track of. Supagate gives you one central place to run it all.',
    features: [
      'Resident, unit and property records',
      'Community billing and payment tracking',
      'Announcements, maintenance requests and complaints',
      'Facility reservations, visitor activity and access records',
      'Financial and community activity reports',
    ],
    screen: '/hero-crops/02-residents.png',
    alt: 'Supagate residents directory on mobile',
    web: {
      src: '/web-screenshots/residents.jpg',
      alt: 'Supagate web dashboard residents list with join requests to approve',
    },
    chip: { icon: 'clipboard', value: 'Records in order', label: 'Payments, visitors and requests' },
    cta: { href: CONTACT.estateDemo, label: 'Request an Estate Management Demo' },
  },
  {
    id: 'security',
    eyebrow: 'For Security Teams',
    heading: 'Clearer procedures. More organised access. Better accountability.',
    desc: 'Security personnel keep communities safe and orderly. Supagate supports their work with digital visitor verification, access records and better communication with residents and management, reducing dependence on manual logbooks.',
    features: [
      'Verify visitor passes and confirm authorised access',
      'Record every entry and exit electronically',
      'Reach residents and estate management quickly',
      'Keep organised duty and shift records',
    ],
    screen: '/hero-crops/07-security-inout.png',
    alt: 'Supagate security in-out log with today’s entries and exits',
    web: {
      src: '/web-screenshots/security.jpg',
      alt: 'Supagate web gate log listing every visitor let in or out today',
    },
    chip: { icon: 'shield', value: 'Entry recorded', label: 'Gate 1 · 8:42 am' },
    cta: { href: '#features', label: 'Discover Security Management Features' },
  },
  {
    id: 'provider',
    eyebrow: 'For Service Providers',
    heading: 'Connect with more customers within residential communities',
    desc: 'Are you a plumber, electrician, cleaner, technician or other service professional? Supagate helps you become more visible to residents looking for everyday services.',
    features: [
      'Be listed where residents look for help',
      'Receive service enquiries and bookings',
      'Build lasting relationships within managed communities',
    ],
    screen: '/hero-crops/08-services.png',
    alt: 'Supagate services screen listing plumbers, electricians, cleaners and other providers',
    chip: { icon: 'handshake', value: 'New enquiry', label: 'Plumbing · Block C' },
    cta: { href: CONTACT.provider, label: 'Join as a Service Provider' },
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
        <a href={p.cta.href} className="btn btn-dark">
          {p.cta.label} <Icon name="arrowRight" size={18} />
        </a>
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
        <div className="section-label">Who Supagate Serves</div>
        <h2 className="section-title">One community. Different needs. One connected solution.</h2>
        <p className="section-sub">Residents, estate managers, security teams and service providers each get the tools they need, working together on one platform.</p>
      </div>

      <div className={styles.rows}>
        {personas.map((p, i) => <Row key={p.id} p={p} reverse={i % 2 === 1} />)}
      </div>
    </section>
  )
}
