import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Stats.module.css'

const items = [
  { value: '500+',    label: 'Estates Managed' },
  { value: '20,000+', label: 'Residents & Counting' },
  { value: '2M+',     label: 'Gate Events Logged' },
  { value: '98%',     label: 'Admin Satisfaction Rate' },
]

function StatItem({ value, label, delay }) {
  const ref = useScrollAnimation()
  return (
    <div ref={ref} className={`${styles.item} aos`} style={{ transitionDelay: `${delay}ms` }}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  )
}

export default function Stats() {
  return (
    <div className={styles.wrapper}>
      {items.map((s, i) => (
        <StatItem key={s.label} {...s} delay={i * 80} />
      ))}
    </div>
  )
}
