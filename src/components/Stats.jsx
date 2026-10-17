import { useScrollAnimation } from '../hooks/useScrollAnimation'
import CountUp from './CountUp'
import styles from './Stats.module.css'

const items = [
  { value: '500+',    label: 'Estates managed' },
  { value: '20,000+', label: 'Residents & counting' },
  { value: '2M+',     label: 'Gate events logged' },
  { value: '98%',     label: 'Admin satisfaction rate' },
]

function StatItem({ value, label, delay }) {
  const ref = useScrollAnimation()
  return (
    <div ref={ref} className={`${styles.item} aos`} style={{ '--delay': `${delay}ms` }}>
      <dt>{label}</dt>
      <dd><CountUp value={value} /></dd>
    </div>
  )
}

export default function Stats() {
  return (
    <div className={styles.wrapper}>
      <dl className={styles.grid}>
        {items.map((s, i) => (
          <StatItem key={s.label} {...s} delay={i * 80} />
        ))}
      </dl>
    </div>
  )
}
