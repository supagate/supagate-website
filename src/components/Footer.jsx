import LogoWhite from './LogoWhite'
import styles from './Footer.module.css'

const cols = [
  {
    heading: 'Product',
    links: [
      { href: '#features',     label: 'Features' },
      { href: '#how-it-works', label: 'How It Works' },
      { href: '#',             label: 'Pricing' },
      { href: '#',             label: 'Changelog' },
      { href: '#',             label: 'Roadmap' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '#', label: 'About Us' },
      { href: '#', label: 'Blog' },
      { href: '#', label: 'Careers' },
      { href: '#', label: 'Press Kit' },
      { href: '#contact', label: 'Contact' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { href: '#', label: 'Help Centre' },
      { href: '#', label: 'Documentation' },
      { href: '#', label: 'Community' },
      { href: '#', label: 'System Status' },
      { href: 'mailto:hello@supagate.ng', label: 'hello@supagate.ng' },
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
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  )
}
