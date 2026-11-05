import { useState, useEffect, useRef } from 'react'
import LogoGreen from './LogoGreen'
import AppLink from './AppLink'
import Icon from './Icon'
import { CONTACT } from '../lib/contact'
import { SOLUTIONS } from '../lib/sitemap'
import styles from './Nav.module.css'

const items = [
  { id: 'solutions', label: 'Solutions', menu: SOLUTIONS, match: SOLUTIONS.map(s => s.href) },
  { href: '/#who', label: 'Features' },
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/about', label: 'About Us', match: ['/about'] },
  { href: '/contact', label: 'Contact Us', match: ['/contact'] },
]

const path = () => window.location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/'

function Dropdown({ item, open, onToggle, onClose, active }) {
  return (
    <li
      className={styles.dropItem}
      onMouseEnter={() => window.matchMedia('(hover: hover) and (min-width: 961px)').matches && onToggle(true)}
      onMouseLeave={() => window.matchMedia('(hover: hover) and (min-width: 961px)').matches && onToggle(false)}
    >
      <button
        type="button"
        className={`${styles.dropBtn} ${active ? styles.linkActive : ''}`}
        aria-expanded={open}
        aria-controls={`menu-${item.id}`}
        onClick={() => onToggle(!open)}
      >
        {item.label}
        <svg className={styles.caret} width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M3 4.5 6 7.5l3-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div id={`menu-${item.id}`} className={`${styles.panel} ${open ? styles.panelOpen : ''}`}>
        <ul className={styles.panelGrid}>
          {item.menu.map(m => (
            <li key={m.href}>
              <a href={m.href} className={styles.panelLink} onClick={onClose}>
                <span className={styles.panelIcon}><Icon name={m.icon} size={18} /></span>
                <span>
                  <strong>{m.label}</strong>
                  <small>{m.desc}</small>
                </span>
              </a>
            </li>
          ))}
        </ul>
        {item.all && (
          <a href={item.all.href} className={styles.panelAll} onClick={onClose}>
            {item.all.label} <Icon name="arrowRight" size={16} />
          </a>
        )}
      </div>
    </li>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const current = path()

  // Sections render after load, so the browser can't find /#who on its
  // own when arriving from another page: scroll to it once it exists.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return
    const jump = () => document.getElementById(id)?.scrollIntoView({ behavior: 'instant' })
    const t = setTimeout(jump, 60)
    // Images above the section can still shift it while loading.
    window.addEventListener('load', jump, { once: true })
    return () => { clearTimeout(t); window.removeEventListener('load', jump) }
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') { setOpen(false); setMenu(null) } }
    const onClick = e => { if (navRef.current && !navRef.current.contains(e.target)) setMenu(null) }
    window.addEventListener('keydown', onKey)
    document.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClick)
    }
  }, [])

  const close = () => { setOpen(false); setMenu(null) }

  return (
    <header ref={navRef} className={`${styles.nav} ${scrolled || open ? styles.scrolled : ''}`}>
      <nav className={styles.inner} aria-label="Main">
        <a href="/" className={styles.logo}>
          <LogoGreen />
          <span>Supagate</span>
        </a>

        <ul id="main-menu" className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {items.map((item, i) => {
            const active = item.match?.includes(current)
            return item.menu ? (
              <Dropdown
                key={item.id}
                item={item}
                active={active}
                open={menu === item.id}
                onToggle={v => setMenu(v ? item.id : null)}
                onClose={close}
              />
            ) : (
              <li key={item.href} style={{ '--i': i }}>
                <a
                  href={item.href}
                  className={active ? styles.linkActive : ''}
                  aria-current={active ? 'page' : undefined}
                  onClick={close}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
          <li className={styles.mobileCta} style={{ '--i': items.length }}>
            <a href={CONTACT.demo} className="btn btn-outline" onClick={close}>Book a Demo</a>
            <AppLink onClick={close} />
          </li>
        </ul>

        <div className={styles.cta}>
          <a href={CONTACT.demo} className={styles.textLink}>Book a Demo</a>
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
