import { useState, useEffect } from 'react'
import LogoGreen from './LogoGreen'
import AppLink from './AppLink'
import styles from './Nav.module.css'

const links = [
  { hash: 'features', label: 'Features' },
  { hash: 'who', label: 'Who It\'s For' },
  { hash: 'how-it-works', label: 'How It Works' },
  { hash: 'faq', label: 'FAQs' },
  { href: '/about', label: 'About Us' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const onScroll = () => {
      let current = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id
      })
      setActive(current)
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = e => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

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
    <header className={`${styles.nav} ${scrolled || open ? styles.scrolled : ''}`}>
      <nav className={styles.inner} aria-label="Main">
        <a href="/#home" className={styles.logo} onClick={e => goToHash(e, 'home')}>
          <LogoGreen />
          <span>Supagate</span>
        </a>

        <ul id="main-menu" className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {links.map((l, i) => (
            <li key={l.hash ?? l.href} style={{ '--i': i }}>
              {l.href ? (
                <a
                  href={l.href}
                  className={isAboutPage ? styles.linkActive : ''}
                  aria-current={isAboutPage ? 'page' : undefined}
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
          <li className={styles.mobileCta} style={{ '--i': links.length }}>
            <a href="#contact" className="btn btn-outline" onClick={e => goToHash(e, 'contact')}>Contact Us</a>
            <AppLink onClick={() => setOpen(false)} />
          </li>
        </ul>

        <div className={styles.cta}>
          <a href="#contact" className={styles.textLink} onClick={e => goToHash(e, 'contact')}>Contact Us</a>
          <AppLink />
        </div>

        <button
          className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </nav>
    </header>
  )
}
