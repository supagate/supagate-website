import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './HowItWorks.module.css'

const steps = [
  { n: '1', title: 'Create Your Estate', desc: 'Sign up and set up your estate profile. Add your blocks, units, and amenities in a few taps.' },
  { n: '2', title: 'Invite Residents',   desc: 'Send invite links to residents. They download the app and join their unit in seconds.' },
  { n: '3', title: 'Activate Security',  desc: 'Onboard your security team. They use the app to log and manage every gate event, live.' },
  { n: '4', title: 'Run Everything',     desc: 'Collect dues, approve visitors, post notices, and track activity — all from one dashboard.' },
]

function Step({ n, title, desc, delay }) {
  const ref = useScrollAnimation()
  return (
    <div ref={ref} className={`${styles.step} aos`} style={{ transitionDelay: `${delay}ms` }}>
      <div className={styles.number}>{n}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default function HowItWorks() {
  const headerRef = useScrollAnimation()
  return (
    <section id="how-it-works">
      <div ref={headerRef} className="section-header-center aos">
        <div className="section-label">✦ How It Works</div>
        <h2 className="section-title">Up and running in minutes</h2>
        <p className="section-sub">Getting your estate on Supagate is simple — no long onboarding, no IT team required.</p>
      </div>
      <div className={styles.grid}>
        {steps.map((s, i) => (
          <Step key={s.n} {...s} delay={i * 100} />
        ))}
      </div>
    </section>
  )
}
