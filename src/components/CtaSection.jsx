import LogoWhite from './LogoWhite'
import StoreButton from './StoreButton'
import styles from './CtaSection.module.css'

export default function CtaSection() {
  return (
    <section className={styles.section} id="download">
      <div className={styles.panel}>
        <div className={styles.glow} aria-hidden="true" />
        <div className={styles.text}>
          <div className={styles.logoWrap} aria-hidden="true">
            <LogoWhite width={26} height={30} />
          </div>
          <h2>Unlock a smarter, safer estate.</h2>
          <p>
            Supagate is live on iOS and Android. Download the app, set up your
            estate, and invite your residents. It takes minutes.
          </p>
          <div className={styles.actions}>
            <StoreButton store="apple" light />
            <StoreButton store="play" light />
          </div>
        </div>
        <div className={styles.side}>
          <p>Managing a large estate or portfolio?</p>
          <a href="mailto:hello@supagate.co" className="btn btn-ghost-white">
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  )
}
