import Icon from './Icon'
import Phone from './Phone'
import WebScreen from './WebScreen'
import styles from './ProductVisual.module.css'

// Product shot for dark panels: a web screen with a phone in front, a lone
// phone, or a listing board, plus small floating status chips.
export default function ProductVisual({ web, phone, board, chips = [], eager = false }) {
  const mode = web ? styles.withWeb : board ? styles.withBoard : styles.phoneOnly
  return (
    <div className={`${styles.stage} ${mode}`}>
      {web && <WebScreen {...web} className={styles.web} eager={eager} />}
      {phone && <Phone {...phone} className={styles.phone} eager={eager} />}
      {board && (
        <div className={styles.board} aria-hidden="true">
          <p className={styles.boardTitle}>{board.title}</p>
          <ul>
            {board.items.map(raw => {
              const item = typeof raw === 'string' ? { label: raw } : raw
              return (
                <li key={item.label}>
                  <span className={styles.boardIcon}><Icon name={item.icon ?? board.icon ?? 'wrench'} size={16} /></span>
                  <span className={styles.boardText}>
                    {item.label}
                    {item.meta && <small>{item.meta}</small>}
                  </span>
                  {item.status && <span className={`${styles.status} ${styles[item.tone ?? 'ok']}`}>{item.status}</span>}
                </li>
              )
            })}
          </ul>
        </div>
      )}
      {chips.map((c, i) => (
        <div key={c.title} className={`${styles.chip} ${styles[`chip${i}`]}`} aria-hidden="true">
          <span className={styles.chipIcon}><Icon name={c.icon} size={18} /></span>
          <span>
            <strong>{c.title}</strong>
            <small>{c.sub}</small>
          </span>
        </div>
      ))}
    </div>
  )
}
