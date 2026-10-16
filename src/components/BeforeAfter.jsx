import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Icon from './Icon'
import styles from './BeforeAfter.module.css'

const scenarios = [
  {
    moment: 'Dues week',
    icon: 'wallet',
    before: 'The treasurer messages residents one by one, then spends evenings matching bank alerts against a spreadsheet.',
    after: 'One bill goes to the right blocks at once. Residents pay in the app, and you can see who has paid and who still owes.',
  },
  {
    moment: 'A visitor at midnight',
    icon: 'keypad',
    before: 'The guard calls a resident who is asleep. The visitor waits at the gate, and the name goes into a notebook.',
    after: 'The visitor shows a single-use pass code. Security verifies it in seconds and the entry is logged automatically.',
  },
  {
    moment: '“Who came in on Saturday?”',
    icon: 'list',
    before: 'Someone needs to know. The logbook is missing pages and nobody remembers which shift was on duty.',
    after: 'The gate log shows every entry, exit and denied attempt with the time, filterable in a tap.',
  },
]

function Scenario({ s, delay }) {
  const ref = useScrollAnimation()
  return (
    <article ref={ref} className={`${styles.card} aos`} style={{ '--delay': `${delay}ms` }}>
      <header className={styles.moment}>
        <span className={styles.momentIcon}><Icon name={s.icon} size={18} /></span>
        {s.moment}
      </header>
      <div className={styles.before}>
        <span className={styles.tag}>Before</span>
        <p>{s.before}</p>
      </div>
      <div className={styles.after}>
        <span className={`${styles.tag} ${styles.tagAfter}`}>With Supagate</span>
        <p>{s.after}</p>
      </div>
    </article>
  )
}

export default function BeforeAfter() {
  const headerRef = useScrollAnimation()
  return (
    <section className={styles.section} id="why">
      <div ref={headerRef} className="section-header-center aos">
        <div className="section-label">Before and after</div>
        <h2 className="section-title">From chasing people to running an estate</h2>
        <p className="section-sub">Everyday moments in a Nigerian estate, before and after Supagate. Example scenarios, based on how estates run today.</p>
      </div>
      <div className={styles.grid}>
        {scenarios.map((s, i) => <Scenario key={s.moment} s={s} delay={i * 100} />)}
      </div>
    </section>
  )
}
