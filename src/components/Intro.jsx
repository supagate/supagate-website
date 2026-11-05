import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Icon from './Icon'
import styles from './Intro.module.css'

const pillars = [
  { icon: 'megaphone', label: 'Simpler communication' },
  { icon: 'shield',    label: 'Organised visitor management' },
  { icon: 'wallet',    label: 'Transparent payments' },
  { icon: 'wrench',    label: 'Easier issue reporting' },
  { icon: 'link',      label: 'Useful local services' },
]

export default function Intro() {
  const ref = useScrollAnimation()
  return (
    <section className={styles.section} id="about-supagate">
      <div ref={ref} className={`${styles.inner} aos`}>
        <div>
          <div className="section-label">What is Supagate?</div>
          <h2 className="section-title">Everything your residential community needs, connected.</h2>
        </div>
        <div className={styles.body}>
          <p className={styles.lead}>
            A well-managed residential community is about more than buildings,
            gates and shared facilities. It is about people feeling safe,
            informed, connected and comfortable where they live.
          </p>
          <p>
            Supagate brings the essential parts of community living together
            in one digital platform. Whether you are a resident, property
            manager, security officer or service provider, Supagate makes
            everyday responsibilities simpler and the community experience
            better.
          </p>
          <ul className={`${styles.pillars} stagger`}>
            {pillars.map((p, i) => (
              <li key={p.label} style={{ '--i': i }}>
                <span className={styles.icon}><Icon name={p.icon} size={18} /></span>
                {p.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
