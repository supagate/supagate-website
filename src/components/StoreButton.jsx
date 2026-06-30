import styles from './StoreButton.module.css'

const AppleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.38.07 2.34.74 3.15.8 1.2-.24 2.35-.93 3.64-.84 1.55.12 2.72.72 3.47 1.82-3.15 1.9-2.4 5.83.4 6.97-.5 1.42-1.17 2.83-2.66 4.13zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
  </svg>
)

const PlayIcon = () => (
  <svg width="20" height="22" viewBox="0 0 22 24" fill="currentColor">
    <path d="M1.27 23.13c.35.2.74.23 1.13.05l12.35-7.13-2.62-2.62-10.86 9.7zm-1.02-20.6C.1 2.79.02 3.1.02 3.5v17c0 .4.08.71.23.97l.1.1 9.52-9.52v-.23L.25 2.53zm19.53 8.15l-2.78-1.6-2.94 2.93 2.94 2.93 2.79-1.62c.8-.46.8-1.18-.01-1.64zM2.4.87C2.01.69 1.62.72 1.27.92L12.17 11.8l2.63-2.62L2.4.87z"/>
  </svg>
)

export default function StoreButton({ store = 'apple', light = false }) {
  const isApple = store === 'apple'
  return (
    <a href="#" className={`${styles.btn} ${light ? styles.light : styles.dark}`}>
      {isApple ? <AppleIcon /> : <PlayIcon />}
      <div className={styles.inner}>
        <small>{isApple ? 'Download on the' : 'Get it on'}</small>
        <strong>{isApple ? 'App Store' : 'Google Play'}</strong>
      </div>
    </a>
  )
}
