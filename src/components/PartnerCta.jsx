import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Icon from './Icon'
import { CONTACT } from '../lib/contact'
import styles from './PartnerCta.module.css'

export default function PartnerCta() {
  const ref = useScrollAnimation()
  return (
    <section className={styles.section} id="partner">
      <div ref={ref} className={`${styles.grid} aos`}>
        <article className={`${styles.card} ${styles.managers}`}>
          <div className="section-label">For Estate Managers</div>
          <h2>Ready to improve the way your community operates?</h2>
          <p>
            Give your residents a more convenient living experience and equip
            your management and security teams with tools that support better
            coordination, accountability and efficiency.
          </p>
          <p>
            Whether you manage a gated estate, apartment complex, residential
            development or managed community, Supagate can help you take the
            next step towards smarter community living.
          </p>
          <div className={styles.actions}>
            <a href={CONTACT.estateDemo} className="btn btn-primary btn-lg">
              Book a Demo <Icon name="arrowRight" size={18} />
            </a>
            <a href={CONTACT.team} className={styles.textLink}>Talk to Our Team</a>
          </div>
        </article>

        <article className={`${styles.card} ${styles.developers}`} id="for-developers">
          <span className={styles.icon}><Icon name="building" /></span>
          <div className="section-label">For Property Developers</div>
          <h3>Build more than properties. Create better living experiences.</h3>
          <p>
            Introduce digital community management from day one. With visitor
            management, communication, payments and community services built
            into the residential experience, you offer buyers and residents an
            added layer of convenience and organisation.
          </p>
          <div className={styles.actions}>
            <a href={CONTACT.partnership} className="btn btn-outline">
              Partner with Supagate <Icon name="arrowRight" size={18} />
            </a>
            <a href="/property-developers" className={styles.textLink}>Learn more</a>
          </div>
        </article>
      </div>
    </section>
  )
}
