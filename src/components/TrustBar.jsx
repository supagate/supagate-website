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

// A short list sits still and centred; the marquee only kicks in once
// there are enough names to fill the width without visible repeats.
const MARQUEE_MIN = 6

export default function TrustBar() {
  const scrolls = estates.length >= MARQUEE_MIN
  return (
    <div className={styles.bar}>
      <p className={styles.label}>Estates already running on Supagate</p>
      {scrolls ? (
        <div className={styles.marquee}>
          <div className={styles.track}>
            <Row />
            <Row hidden />
          </div>
        </div>
      ) : (
        <div className={styles.static}>
          <Row />
        </div>
      )}
    </div>
  )
}
