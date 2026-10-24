import styles from './WebScreen.module.css'

// Web app screenshot in a soft bezel, sized to the 1600×1000 captures.
export default function WebScreen({ src, alt, className = '', style, eager = false }) {
  return (
    <div className={`${styles.bezel} ${className}`} style={style}>
      <img
        src={src}
        alt={alt}
        width="1600"
        height="1000"
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
  )
}
