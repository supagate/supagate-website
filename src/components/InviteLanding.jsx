import { useEffect, useMemo } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Phone from './Phone'
import Icon from './Icon'
import StoreButton from './StoreButton'
import { detectPlatform } from '../lib/platform'
import styles from './InviteLanding.module.css'

// Where an invite or join link lands when the Supagate app didn't open it
// (not installed yet, or the phone hasn't verified the link). Tries the
// app once more on a phone, then walks them through getting it.
export default function InviteLanding({
  eyebrow,
  title,
  intro,
  deepLink,
  chip,
  steps,
  help,
  floatTitle,
  floatSub,
}) {
  const platform = useMemo(() => detectPlatform(), [])
  const onPhone = platform !== 'desktop'

  useEffect(() => {
    if (deepLink && onPhone) window.location.href = deepLink
  }, [deepLink, onPhone])

  const stores = platform === 'android' ? ['play', 'apple'] : ['apple', 'play']

  return (
    <>
      <Nav />
      <main className={styles.page}>
        <section className={styles.panel}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.content}>
            <span className={styles.badge}>
              <Icon name="mail" size={16} /> {eyebrow}
            </span>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.lead}>{intro}</p>
            {chip && (
              <p className={styles.chip}>
                <Icon name="qr" size={16} /> {chip}
              </p>
            )}

            <div className={styles.actions}>
              {deepLink && onPhone && (
                <a href={deepLink} className="btn btn-lime">
                  Open in the Supagate app <Icon name="arrowRight" size={18} />
                </a>
              )}
              <div className={styles.stores}>
                {stores.map((store) => (
                  <StoreButton key={store} store={store} light />
                ))}
              </div>
            </div>

            {deepLink && !onPhone && (
              <p className={styles.tip}>
                <Icon name="sparkle" size={16} />
                <span>
                  On a computer? Open this link on your phone instead: the
                  Supagate app picks it up from there.
                </span>
              </p>
            )}
          </div>

          <div className={styles.visual} aria-hidden="true">
            <Phone
              src="/hero-crops/01-home.png"
              alt=""
              className={styles.phone}
              eager
            />
            <div className={styles.floatCard}>
              <span className={styles.floatIcon}>
                <Icon name="check" size={18} />
              </span>
              <span>
                <strong>{floatTitle}</strong>
                <small>{floatSub}</small>
              </span>
            </div>
          </div>
        </section>

        <section className={styles.steps} aria-labelledby="steps-title">
          <h2 id="steps-title">How to get started</h2>
          <ol className={styles.stepList}>
            {steps.map((step, i) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {help && (
          <section className={styles.help} aria-labelledby="help-title">
            <h2 id="help-title">Link not working?</h2>
            <ul>
              {help.map((line) => (
                <li key={line}>
                  <Icon name="check" size={16} /> <span>{line}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
