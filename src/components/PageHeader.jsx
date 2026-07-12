import LogoGreen from './LogoGreen'
import styles from './PageHeader.module.css'

export default function PageHeader() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <LogoGreen />
        <span>Supagate</span>
      </a>
      <a href="/" className={styles.back}>← Back to home</a>
    </header>
  )
}
