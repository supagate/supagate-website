import Nav from '../components/Nav'
import PageHero from '../components/PageHero'
import ProductVisual from '../components/ProductVisual'
import CtaSection from '../components/CtaSection'
import Footer from '../components/Footer'
import Icon from '../components/Icon'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { SOLUTION_PAGES } from '../content/solutions'
import { SOLUTIONS } from '../lib/sitemap'
import { CONTACT } from '../lib/contact'
import styles from './SolutionPage.module.css'

function Benefit({ b, i }) {
  const ref = useScrollAnimation()
  return (
    <li ref={ref} className={`${styles.benefit} aos`} style={{ '--delay': `${(i % 4) * 70}ms` }}>
      <span className={styles.icon}><Icon name={b.icon} /></span>
      <h3>{b.title}</h3>
      <p>{b.desc}</p>
    </li>
  )
}

function Step({ s, i }) {
  const ref = useScrollAnimation()
  return (
    <li ref={ref} className={`${styles.step} aos`} style={{ '--delay': `${i * 90}ms` }}>
      <span className={styles.number}>{String(i + 1).padStart(2, '0')}</span>
      <h3>{s.title}</h3>
      <p>{s.desc}</p>
    </li>
  )
}

export default function SolutionPage({ slug }) {
  const page = SOLUTION_PAGES[slug]
  const benefitsRef = useScrollAnimation()
  const stepsRef = useScrollAnimation()
  const othersRef = useScrollAnimation()
  const others = SOLUTIONS.filter(s => s.href !== `/${slug}`)

  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow={page.eyebrow}
          heading={page.heading}
          intro={page.intro}
          primary={page.primary}
          secondary={page.secondary}
        >
          <ProductVisual {...page.visual} eager />
        </PageHero>

        <section className={styles.benefits}>
          <div ref={benefitsRef} className="section-header-center aos">
            <div className="section-label">What you get</div>
            <h2 className="section-title">{page.benefitsHeading}</h2>
          </div>
          <ul className={`${styles.benefitGrid} ${page.benefits.length % 4 === 0 ? styles.four : ''}`}>
            {page.benefits.map((b, i) => <Benefit key={b.title} b={b} i={i} />)}
          </ul>
        </section>

        <section className={`${styles.steps} on-ink`} id="steps">
          <div className={styles.inner}>
            <div ref={stepsRef} className="aos">
              <div className="section-label">How it works</div>
              <h2 className="section-title">{page.stepsHeading}</h2>
            </div>
            <ol className={`${styles.stepGrid} ${page.steps.length === 3 ? styles.three : ''}`}>
              {page.steps.map((s, i) => <Step key={s.title} s={s} i={i} />)}
            </ol>
          </div>
        </section>

        <section className={styles.others}>
          <div ref={othersRef} className="section-header-center aos">
            <div className="section-label">One connected platform</div>
            <h2 className="section-title">Supagate works for your whole community</h2>
          </div>
          <ul className={styles.otherGrid}>
            {others.map(o => (
              <li key={o.href}>
                <a href={o.href} className={styles.other}>
                  <span className={styles.icon}><Icon name={o.icon} /></span>
                  <strong>{o.label}</strong>
                  <small>{o.desc}</small>
                  <span className={styles.arrow}><Icon name="arrowRight" size={18} /></span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <CtaSection
          heading={page.cta.heading}
          body={page.cta.body}
          button={page.cta.button}
          side={{ text: 'Have a question first?', label: 'Contact Us', href: CONTACT.page }}
        />
      </main>
      <Footer />
    </>
  )
}
