import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Icon from './Icon'
import styles from './WhySupagate.module.css'

const reasons = [
  { icon: 'sparkle',   title: 'Greater convenience',          desc: 'Everyday community activities are easier to access and manage.' },
  { icon: 'shield',    title: 'Improved security procedures', desc: 'Digital visitor management supports more organised access control.' },
  { icon: 'megaphone', title: 'Better communication',         desc: 'Important information reaches the people who need it.' },
  { icon: 'clipboard', title: 'Greater accountability',       desc: 'Digital records make it easier to track payments, visitors and reported issues.' },
  { icon: 'handshake', title: 'Improved service coordination', desc: 'Residents can connect with useful service providers.' },
  { icon: 'chart',     title: 'More organised administration', desc: 'Estate managers have central tools for managing community activities.' },
]

export default function WhySupagate() {
  const headerRef = useScrollAnimation()
  const gridRef = useScrollAnimation()
  return (
    <section className={`${styles.section} on-ink`} id="why-supagate">
      <div className={styles.inner}>
        <div ref={headerRef} className={`${styles.header} aos`}>
          <div className="section-label">Why Supagate</div>
          <h2 className="section-title">More than an app. A better community experience.</h2>
          <p className="section-sub">
            Residential living works best when people, processes and services
            work together. Supagate bridges the gaps between residents,
            management, security teams and service providers.
          </p>
        </div>
        <ul ref={gridRef} className={`${styles.grid} stagger aos`}>
          {reasons.map((r, i) => (
            <li key={r.title} style={{ '--i': i }}>
              <span className={styles.icon}><Icon name={r.icon} size={20} /></span>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
