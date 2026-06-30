import styles from './TrustBar.module.css'

const estates = [
  'Lekki Gardens', 'Chevron Estate', 'Maitama Close',
  'GRA Phase 2', 'Asokoro Heights', 'Parkview Estate',
]

export default function TrustBar() {
  return (
    <div className={styles.bar}>
      <span className={styles.label}>Trusted across</span>
      <div className={styles.items}>
        {estates.map(e => (
          <span key={e} className={styles.item}>🏘️ {e}</span>
        ))}
      </div>
    </div>
  )
}
