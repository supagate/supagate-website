import LogoWhite from './LogoWhite'
import styles from './Footer.module.css'

const cols = [
  {
    heading: 'Product',
    links: [
      { href: '#features',     label: 'Features' },
      { href: '#how-it-works', label: 'How It Works' },
      // { href: '#',             label: 'Pricing' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { href: 'mailto:hello@supagate.co', label: 'hello@supagate.co' },
      { href: '/delete-account', label: 'Delete Account' },
    ],
  },
]

const socials = [
  { label: '𝕏',  aria: 'Twitter' },
  { label: '📷', aria: 'Instagram' },
  { label: 'in', aria: 'LinkedIn' },
  { label: 'f',  aria: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.grid}>
        <div className={styles.brand}>
          <a href="#home" className={styles.logo}>
            <LogoWhite width={28} height={32} />
            <span>Supagate</span>
          </a>
          <p>The all-in-one estate management platform built for Nigerian gated communities. Smarter living, safer estates.</p>
          <div className={styles.socials}>
            {socials.map(s => (
              <a key={s.aria} href="#" className={styles.socialLink} aria-label={s.aria}>{s.label}</a>
            ))}
          </div>
        </div>

        {cols.map(col => (
          <div key={col.heading} className={styles.col}>
            <h4>{col.heading}</h4>
            <ul>
              {col.links.map(l => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <p>© 2026 Supagate Technologies Ltd. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy-policy#cookies">Cookie Policy</a>
        </div>
      </div>
    </footer>
  )
}
