import LogoWhite from './LogoWhite'
import Icon from './Icon'
import { CONTACT } from '../lib/contact'
import { SOLUTIONS } from '../lib/sitemap'
import styles from './Footer.module.css'

const cols = [
  {
    heading: 'Product',
    links: [
      { href: '/#who',          label: 'Features' },
      { href: '/#how-it-works', label: 'How It Works' },
      { href: '/#a-day',        label: 'A Day with Supagate' },
      { href: '/#faq',          label: 'FAQs' },
      { href: '/#download',     label: 'Download the App' },
    ],
  },
  {
    heading: 'Solutions',
    links: SOLUTIONS.map(s => ({ href: s.href, label: s.label })),
  },
  {
    heading: 'Company',
    links: [
      { href: '/about',          label: 'About Us' },
      { href: CONTACT.page,      label: 'Contact Us' },
      { href: CONTACT.demo,      label: 'Book a Demo' },
      { href: CONTACT.support,   label: 'Support' },
      { href: '/delete-account', label: 'Delete Account' },
    ],
  },
]

// Only accounts with an href are shown. Add the link to bring one back.
const socials = [
  { icon: 'instagram', aria: 'Supagate on Instagram', href: 'https://www.instagram.com/supagate.co/' },
  { icon: 'x',         aria: 'Supagate on X' },
  { icon: 'linkedin',  aria: 'Supagate on LinkedIn' },
  { icon: 'facebook',  aria: 'Supagate on Facebook' },
].filter(s => s.href)

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
            <p>Making residential living work better. Smarter communities, safer living and better everyday experiences in the places we call home.</p>
            <a href={CONTACT.email} className={styles.email}>
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
              <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label={s.aria}>
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
