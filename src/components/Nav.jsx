import { useState, useEffect } from 'react'
import LogoGreen from './LogoGreen'
import styles from './Nav.module.css'

const links = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#who', label: 'Who It\'s For' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const onScroll = () => {
      let current = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={styles.nav}>
      <a href="#home" className={styles.logo}>
        <LogoGreen />
        <span>Supagate</span>
      </a>

      <ul className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              className={active === l.href.slice(1) ? styles.linkActive : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.cta}>
        <a href="#contact" className="btn btn-outline">Contact Us</a>
        <a href="#cta" className="btn btn-primary">Get the App</a>
      </div>

      <button
        className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
        aria-label="Toggle menu"
        onClick={() => setOpen(o => !o)}
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
