import Nav from '../components/Nav'
import CtaSection from '../components/CtaSection'
import Footer from '../components/Footer'
import Icon from '../components/Icon'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './AboutUs.module.css'

const values = [
  {
    icon: 'home',
    title: 'Living, not just managing',
    desc: 'A good residential experience goes beyond a beautiful home. We design for how it feels to live in a community, not only how it is administered.',
  },
  {
    icon: 'users',
    title: 'Everyone plays a part',
    desc: 'Residents, estate managers, security personnel and service providers each have a role. Supagate is built to serve all of them, together.',
  },
  {
    icon: 'shield',
    title: 'Trust you can see',
    desc: 'Clear procedures, accountable records and plain-language privacy practices. We earn trust by being open about how things work.',
  },
  {
    icon: 'building',
    title: 'For every managed community',
    desc: 'Gated estates, apartment blocks and residential developments of every size and budget, not only luxury estates.',
  },
]

function ValueCard({ icon, title, desc, delay }) {
  const ref = useScrollAnimation()
  return (
    <div ref={ref} className={`${styles.card} aos`} style={{ '--delay': `${delay}ms` }}>
      <div className={styles.icon}><Icon name={icon} /></div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default function AboutUs() {
  const introRef = useScrollAnimation()
  const storyRef = useScrollAnimation()
  const valuesHeaderRef = useScrollAnimation()

  return (
    <>
      <Nav />

      <section className={styles.intro}>
        <div ref={introRef} className="section-header-center aos">
          <div className="section-label">About Us</div>
          <h1 className="section-title">Making residential living work better</h1>
          <p className={`section-sub ${styles.sub}`}>
            Supagate is a smart residential community platform designed to
            improve the everyday experience of living in managed residential
            communities.
          </p>
        </div>
      </section>

      <div className={styles.mission}>
        <p>
          "Our goal is to make residential communities more organised,
          responsive, convenient and connected, one community at a time."
        </p>
      </div>

      <section className={styles.section}>
        <div ref={storyRef} className="section-header aos">
          <div className="section-label">Our Story</div>
          <h2 className="section-title">Why we built Supagate</h2>
        </div>
        <div className={styles.storyGrid}>
          <div>
            <p>
              We believe that a good residential experience goes beyond having
              a beautiful home. It also means feeling secure, receiving timely
              information, accessing reliable services and knowing that the
              community around you is well coordinated.
            </p>
            <p>
              That is why we bring residents, estate managers, security
              personnel and service providers together through one connected
              platform.
            </p>
          </div>
          <dl className={styles.vm}>
            <div>
              <dt>Our Vision</dt>
              <dd>To become a trusted platform for smarter, safer and better-connected residential communities.</dd>
            </div>
            <div>
              <dt>Our Mission</dt>
              <dd>To simplify everyday community living through accessible technology that improves convenience, communication, security procedures and service coordination.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className={styles.section}>
        <div ref={valuesHeaderRef} className="section-header-center aos">
          <div className="section-label">What We Believe</div>
          <h2 className="section-title">The principles behind Supagate</h2>
        </div>
        <div className={styles.grid}>
          {values.map((v, i) => (
            <ValueCard key={v.title} {...v} delay={(i % 4) * 80} />
          ))}
        </div>
      </section>

      <CtaSection />
      <Footer />
    </>
  )
}
