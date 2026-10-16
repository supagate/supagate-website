import styles from './Phone.module.css'

// Device frame sized to the 1080×2340 app screenshots, so the screenshot
// fills the screen exactly with no cropping or letterboxing.
export default function Phone({ src, alt, className = '', style, eager = false }) {
  return (
    <div className={`${styles.frame} ${className}`} style={style}>
      <div className={styles.screen}>
        <img
          src={src}
          alt={alt}
          width="1080"
          height="2340"
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
    </div>
  )
}
