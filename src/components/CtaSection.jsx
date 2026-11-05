import LogoWhite from './LogoWhite'
import StoreButton from './StoreButton'
import AppLink from './AppLink'
import Icon from './Icon'
import { CONTACT } from '../lib/contact'
import styles from './CtaSection.module.css'

const DEFAULTS = {
  heading: 'Better communities begin with better connections.',
  body: 'Bring residents, management, security personnel and service providers together with Supagate. Let’s make everyday residential living safer, simpler and more connected.',
  button: null,
  side: { text: 'Are you a plumber, electrician, cleaner or technician?', label: 'Join as a Service Provider', href: CONTACT.provider },
}

// Closing call to action. Pages pass their own heading, body and button;
// the app store badges always sit underneath.
export default function CtaSection(props) {
  const { heading, body, button, side } = { ...DEFAULTS, ...props }
  return (
    <section className={styles.section} id="download">
      <div className={styles.panel}>
        <div className={styles.glow} aria-hidden="true" />
        <div className={styles.text}>
          <div className={styles.logoWrap} aria-hidden="true">
            <LogoWhite width={26} height={30} />
          </div>
          <h2>{heading}</h2>
          <p>{body}</p>
          {button ? (
            <a href={button.href} className={`btn btn-lime btn-lg ${styles.primary}`}>
              {button.label} <Icon name="arrowRight" size={18} />
            </a>
          ) : (
            <AppLink className={`btn btn-lime btn-lg ${styles.primary}`}>Get Started with Supagate</AppLink>
          )}
          <div className={styles.actions}>
            <StoreButton store="apple" light />
            <StoreButton store="play" light />
          </div>
        </div>
        {side && (
          <div className={styles.side}>
            <p>{side.text}</p>
            <a href={side.href} className="btn btn-ghost-white">{side.label}</a>
          </div>
        )}
      </div>
    </section>
  )
}
