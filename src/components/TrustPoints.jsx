import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Icon from './Icon'
import styles from './TrustPoints.module.css'

const points = [
  { icon: 'clock',  title: 'Single-use, time-bound passes', desc: 'Each pass code works once, and only within the time it was issued for. A reused or early code is denied at the gate.' },
  { icon: 'list',   title: 'Every gate event on record',   desc: 'Entries, exits and denied attempts are logged with the time, so nobody has to rely on memory or a notebook.' },
  { icon: 'layers', title: 'Role-based access',             desc: 'Administrators, residents and security staff each see only what their role needs, and guard access can be set to expire.' },
  { icon: 'lock',   title: 'Two-factor authentication',     desc: 'Protect the accounts that manage your estate with a second step at sign-in.' },
]

export default function TrustPoints() {
  const headerRef = useScrollAnimation()
  const gridRef = useScrollAnimation()
  return (
    <section className={styles.section} id="trust">
      <div className={styles.inner}>
        <div ref={headerRef} className={`${styles.header} aos`}>
          <div className="section-label">Built for trust</div>
          <h2 className="section-title">Every visitor and every naira, accounted for</h2>
          <p className="section-sub">Your estate runs on records, not memory. Supagate keeps them clear for the committee, the residents and the gate.</p>
        </div>
        <ul ref={gridRef} className={`${styles.grid} aos stagger`}>
          {points.map((p, i) => (
            <li key={p.title} className={styles.point} style={{ '--i': i }}>
              <span className={styles.icon}><Icon name={p.icon} size={20} /></span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
