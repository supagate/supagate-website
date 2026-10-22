import Icon from './Icon'
import styles from './TrustBar.module.css'

const estates = [
  'Haj Estate', 'Graymond Estate',
]

function Row({ hidden = false }) {
  return (
    <ul className={styles.row} aria-hidden={hidden || undefined}>
      {estates.map(e => (
        <li key={e} className={styles.item}>
          <Icon name="building" size={18} />
          {e}
        </li>
      ))}
    </ul>
  )
}

export default function TrustBar() {
  return (
    <div className={styles.bar}>
      <p className={styles.label}>Trusted by gated communities across Nigeria</p>
      <div className={styles.marquee}>
        <div className={styles.track}>
          <Row />
          <Row hidden />
        </div>
      </div>
    </div>
  )
}
