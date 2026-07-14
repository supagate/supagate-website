import { useState, useEffect } from 'react'
import LogoGreen from './LogoGreen'
import styles from './Nav.module.css'

const links = [
  { hash: 'features', label: 'Features' },
  { hash: 'how-it-works', label: 'How It Works' },
  { hash: 'who', label: 'Who It\'s For' },
  { hash: 'testimonials', label: 'Reviews' },
  { href: '/about', label: 'About Us' },
  { hash: 'contact', label: 'Contact' },
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

  // Hash links (Features, Contact, etc.) jump to the section in place when
  // it exists on the current page; otherwise they navigate home and land
  // on it there — so the same links work from any page, not just "/".
  const goToHash = (e, hash) => {
    setOpen(false)
    if (document.getElementById(hash)) return
    e.preventDefault()
    window.location.href = `/#${hash}`
  }

  const isAboutPage = window.location.pathname.startsWith('/about')

  return (
    <nav className={styles.nav}>
      <a href="#home" className={styles.logo} onClick={e => goToHash(e, 'home')}>
        <LogoGreen />
        <span>Supagate</span>
      </a>

      <ul className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
        {links.map(l => (
          <li key={l.hash ?? l.href}>
            {l.href ? (
              <a
                href={l.href}
                className={isAboutPage ? styles.linkActive : ''}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ) : (
              <a
                href={`#${l.hash}`}
                className={active === l.hash ? styles.linkActive : ''}
                onClick={e => goToHash(e, l.hash)}
              >
                {l.label}
              </a>
            )}
          </li>
        ))}
      </ul>

      <div className={styles.cta}>
        <a href="#contact" className="btn btn-outline" onClick={e => goToHash(e, 'contact')}>Contact Us</a>
        <a href="/pilot" className="btn btn-primary">Join the Pilot</a>
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
