import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './HowItWorks.module.css'

const steps = [
  { n: '01', title: 'Create your estate', desc: 'Sign up and set up your estate profile. Add your blocks, units, and amenities in a few taps.' },
  { n: '02', title: 'Invite residents',   desc: 'Send invite links to residents. They download the app and join their unit in seconds.' },
  { n: '03', title: 'Activate security',  desc: 'Onboard your security team. They log and manage every gate event, live.' },
  { n: '04', title: 'Run everything',     desc: 'Collect dues, approve visitors, post notices, and track activity from one dashboard.' },
]

function Step({ n, title, desc, delay }) {
  const ref = useScrollAnimation()
  return (
    <li ref={ref} className={`${styles.step} aos`} style={{ '--delay': `${delay}ms` }}>
      <span className={styles.number}>{n}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </li>
  )
}

export default function HowItWorks() {
  const headerRef = useScrollAnimation()
  return (
    <section id="how-it-works" className={`${styles.section} on-ink`}>
      <div className={styles.inner}>
        <div ref={headerRef} className={`${styles.header} aos`}>
          <div>
            <div className="section-label">How It Works</div>
            <h2 className="section-title">Up and running in minutes</h2>
          </div>
          <p className="section-sub">Getting your estate on Supagate is simple. No long onboarding, no IT team required.</p>
        </div>
        <ol className={styles.grid}>
          {steps.map((s, i) => (
            <Step key={s.n} {...s} delay={i * 100} />
          ))}
        </ol>
      </div>
    </section>
  )
}
