import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './HowItWorks.module.css'

const steps = [
  { n: '01', title: 'Register your community', desc: 'Your estate or property management team gets started with Supagate.' },
  { n: '02', title: 'Set up your community',   desc: 'Configure residents, units, access procedures and the community information that matters to you.' },
  { n: '03', title: 'Invite residents and teams', desc: 'Residents and authorised security personnel are invited to join the platform.' },
  { n: '04', title: 'Enjoy a more connected experience', desc: 'Manage everyday activities, communication, payments and services from one place.' },
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
            <h2 className="section-title">Getting your community connected is simple</h2>
          </div>
          <p className="section-sub">Four steps from first conversation to a community that runs better every day.</p>
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
