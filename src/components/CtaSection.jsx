import LogoWhite from './LogoWhite'
import StoreButton from './StoreButton'
import styles from './CtaSection.module.css'

export default function CtaSection() {
  return (
    <section className={styles.section} id="cta">
      <div className={styles.logoWrap}>
        <LogoWhite width={36} height={42} />
      </div>
      <h2>Ready to transform your estate?</h2>
      <p>
        Join hundreds of estates already running smarter with Supagate.<br />
        Get started for free — no credit card required.
      </p>
      <div className={styles.actions}>
        <StoreButton store="apple" light />
        <StoreButton store="play" light />
        <a href="#contact" className="btn btn-ghost-white" style={{ padding: '13px 28px', fontSize: '0.95rem' }}>
          Contact Sales
        </a>
      </div>
    </section>
  )
}
