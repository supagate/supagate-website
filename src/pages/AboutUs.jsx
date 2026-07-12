import Nav from '../components/Nav'
import Stats from '../components/Stats'
import CtaSection from '../components/CtaSection'
import Footer from '../components/Footer'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './AboutUs.module.css'

const values = [
  {
    icon: '🛡️',
    bg: '#e8f7ef',
    title: 'Security first',
    desc: 'Gate access and resident data are handled with the same care we\'d want for our own homes — every feature is built around trust.',
  },
  {
    icon: '🇳🇬',
    bg: '#e8f0ff',
    title: 'Built for Nigeria',
    desc: 'From Paystack payments to how estates actually run day to day, Supagate is designed around the realities of Nigerian gated communities.',
  },
  {
    icon: '🤝',
    bg: '#fff6d9',
    title: 'Community first',
    desc: 'Residents, security teams, and administrators are all part of the same community — the product is built to serve all three, not just one.',
  },
  {
    icon: '⚡',
    bg: '#fff0e5',
    title: 'Simplicity over noise',
    desc: 'No clutter, no confusing dashboards. Just the tools an estate actually needs to run smoothly, in one place.',
  },
]

function ValueCard({ icon, bg, title, desc, delay }) {
  const ref = useScrollAnimation()
  return (
    <div ref={ref} className={`${styles.card} aos`} style={{ transitionDelay: `${delay}ms` }}>
      <div className={styles.icon} style={{ background: bg }}>{icon}</div>
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
          <div className="section-label">✦ About Us</div>
          <h1 className="section-title">Smarter, safer estate living — for everyone inside the gate</h1>
          <p className={`section-sub ${styles.sub}`}>
            Supagate is the all-in-one platform for Nigerian gated
            communities — bringing residents, security teams, and
            administrators onto one app to manage gate access, dues,
            amenities, and community life.
          </p>
        </div>
      </section>

      <div className={styles.mission}>
        <p>
          "Our mission is to replace the paper logbooks, WhatsApp groups,
          and guesswork that estates run on with one simple, reliable
          platform — so every estate feels safer and every resident feels
          at home."
        </p>
      </div>

      <section className={styles.section}>
        <div ref={storyRef} className="section-header aos">
          <div className="section-label">✦ Our Story</div>
          <h2 className="section-title">Why we built Supagate</h2>
        </div>
        <div className={styles.storyGrid}>
          <p>
            Gated estates across Nigeria run on a patchwork of paper
            visitor logs, security walkie-talkies, and WhatsApp groups for
            everything from dues collection to emergency alerts. It works,
            until it doesn't — a lost logbook, an unpaid service charge no
            one can track, a visitor no one can verify.
          </p>
          <p>
            Supagate exists to bring that patchwork onto one platform:
            gate access residents and security can trust, payments
            residents can track, and communication that reaches everyone
            without the noise. We're building the estate management system
            we wished existed — one estate at a time.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div ref={valuesHeaderRef} className="section-header-center aos">
          <div className="section-label">✦ What We Believe</div>
          <h2 className="section-title">The principles behind Supagate</h2>
        </div>
        <div className={styles.grid}>
          {values.map((v, i) => (
            <ValueCard key={v.title} {...v} delay={(i % 4) * 80} />
          ))}
        </div>
      </section>

      <Stats />
      <CtaSection />
      <Footer />
    </>
  )
}
