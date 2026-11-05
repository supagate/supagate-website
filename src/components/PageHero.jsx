import Icon from './Icon'
import styles from './PageHero.module.css'

// Dark hero panel for inner pages: copy on the left, product on the right.
export default function PageHero({ eyebrow, heading, intro, primary, secondary, children }) {
  return (
    <section className={styles.hero}>
      <div className={`${styles.panel} ${children ? '' : styles.textOnly}`}>
        <div className={styles.glow} aria-hidden="true" />
        <div className={styles.content}>
          <p className={`${styles.eyebrow} enter`}>{eyebrow}</p>
          <h1 className={`${styles.heading} enter`} style={{ '--d': '80ms' }}>{heading}</h1>
          <p className={`${styles.intro} enter`} style={{ '--d': '160ms' }}>{intro}</p>
          {(primary || secondary) && (
            <div className={`${styles.actions} enter`} style={{ '--d': '240ms' }}>
              {primary && (
                <a href={primary.href} className="btn btn-lime btn-lg">
                  {primary.label} <Icon name="arrowRight" size={18} />
                </a>
              )}
              {secondary && (
                <a href={secondary.href} className="btn btn-ghost-white btn-lg">
                  {secondary.label}
                </a>
              )}
            </div>
          )}
        </div>
        {children && <div className={styles.visual}>{children}</div>}
      </div>
    </section>
  )
}
