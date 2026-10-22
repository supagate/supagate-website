import LogoWhite from './LogoWhite'
import Icon from './Icon'
import styles from './Footer.module.css'

const cols = [
  {
    heading: 'Product',
    links: [
      { href: '/#features',     label: 'Features' },
      { href: '/#how-it-works', label: 'How It Works' },
      { href: '/#faq',          label: 'FAQs' },
      { href: '/#download',     label: 'Download the App' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { href: '/#for-admin',    label: 'Estate Administrators' },
      { href: '/#for-resident', label: 'Residents' },
      { href: '/#for-security', label: 'Security Teams' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
      { href: 'mailto:hello@supagate.co', label: 'Contact' },
      { href: '/delete-account', label: 'Delete Account' },
    ],
  },
]

const socials = [
  { icon: 'x',         aria: 'Supagate on X' },
  { icon: 'instagram', aria: 'Supagate on Instagram' },
  { icon: 'linkedin',  aria: 'Supagate on LinkedIn' },
  { icon: 'facebook',  aria: 'Supagate on Facebook' },
]

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <a href="/#home" className={styles.logo}>
              <LogoWhite width={28} height={32} />
              <span>Supagate</span>
            </a>
            <p>The all-in-one estate management platform built for Nigerian gated communities. Smarter living, safer estates.</p>
            <a href="mailto:hello@supagate.co" className={styles.email}>
              <Icon name="mail" size={18} /> hello@supagate.co
            </a>
          </div>

          {cols.map(col => (
            <nav key={col.heading} className={styles.col} aria-label={col.heading}>
              <h3>{col.heading}</h3>
              <ul>
                {col.links.map(l => (
                  <li key={l.label}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className={styles.wordmark} aria-hidden="true">Supagate</div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Supagate Technologies Ltd. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/privacy-policy#cookies">Cookie Policy</a>
          </div>
          <div className={styles.socials}>
            {socials.map(s => (
              <a key={s.icon} href="#" className={styles.socialLink} aria-label={s.aria}>
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
