import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './HowItWorks.module.css'

const steps = [
  { n: '01', title: 'Create your estate',      desc: 'Download the app, name your estate and add your blocks and units.' },
  { n: '02', title: 'Invite your residents',   desc: 'Share an invite link. Residents join from their phone and are matched to their unit.' },
  { n: '03', title: 'Add your security team',  desc: 'Register your guards, link them to their security company and set how long their access lasts.' },
  { n: '04', title: 'Turn on collections',     desc: 'Create your first bills. Residents see what they owe and pay in the app.' },
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
            <h2 className="section-title">Set up your estate in four steps</h2>
          </div>
          <p className="section-sub">No IT team and no long onboarding. Your committee can set up the whole estate from a phone. Prefer a hand? <a href="mailto:hello@supagate.co?subject=Supagate%20walkthrough" className={styles.inlineLink}>Book a walkthrough</a>.</p>
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
