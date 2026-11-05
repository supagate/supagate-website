import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Icon from './Icon'
import Phone from './Phone'
import styles from './Features.module.css'

const features = [
  { icon: 'wallet',    title: 'Community Payments and Billing', desc: 'Know what you owe, pay conveniently and keep track of your records. Administrators can monitor collections and payment activity.' },
  { icon: 'megaphone', title: 'Communication and Updates',      desc: 'Stay informed about what matters. Announcements, maintenance updates, reminders and emergency notices reach everyone through one channel.' },
  { icon: 'wrench',    title: 'Maintenance and Issue Reporting', desc: 'Raise concerns without chasing multiple people. Report maintenance, security or community issues, add details and follow their progress.' },
  { icon: 'home',      title: 'Shared Facilities and Household', desc: 'Reserve amenities and keep household members, domestic staff, vehicles and emergency contacts organised, where your community enables them.' },
]

const services = ['Plumbers', 'Electricians', 'Cleaners', 'Technicians', 'Painters', 'Handymen']

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
        <div className="section-label">Our Solutions</div>
        <h2 className="section-title">Simple tools that make everyday living easier</h2>
        <p className="section-sub">Visitor access, payments, communication, maintenance and service connections, all in one place.</p>
      </div>

      <div className={styles.grid}>
        <Card className={styles.hero}>
          <div className={styles.heroText}>
            <span className={`${styles.icon} ${styles.iconLime}`}><Icon name="shield" /></span>
            <h3>Visitor and Access Management</h3>
            <p>Welcome your guests with greater convenience and organised access. Residents create digital visitor passes, while security teams verify access and keep electronic entry and exit records.</p>
          </div>
          <Phone
            src="/hero-crops/12-visitor-pass.png"
            alt="Supagate visitor pass for Chidi Okafor with its pass code"
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
            <span className={styles.icon}><Icon name="handshake" /></span>
            <h3>Trusted Service Connections</h3>
            <p>Find useful services and connect with professionals serving your community, from plumbers and electricians to cleaners and technicians.</p>
          </div>
          <ul className={`${styles.services} stagger`} aria-label="Example service categories">
            {services.map((s, i) => (
              <li key={s} style={{ '--i': i }}><Icon name="check" size={14} strokeWidth={2.6} />{s}</li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  )
}
