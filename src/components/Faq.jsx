import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Icon from './Icon'
import styles from './Faq.module.css'

const faqs = [
  {
    q: 'Who is Supagate for?',
    a: 'Gated estates and residential communities. Supagate gives estate administrators, residents, and security teams each their own tailored experience inside one shared platform.',
  },
  {
    q: 'How does visitor access work?',
    a: 'Residents generate a one-time access code for their guest from the app. Security verifies the code at the gate, and every entry and exit is logged with a timestamp, so there is a full audit trail with no paper logbook.',
  },
  {
    q: 'Can residents pay service charges through the app?',
    a: 'Yes. Residents can pay dues, utility bills, and levies in-app. They get payment reminders and receipts, and administrators see collections and outstanding dues in real time.',
  },
  {
    q: 'Do we need an IT team to get set up?',
    a: 'No. You create your estate profile, add blocks, units, and amenities, then send invite links to residents and onboard your security team. Most of it takes a few taps.',
  },
  {
    q: 'Is the app available on iOS and Android?',
    a: 'Yes. Supagate is available on the App Store for iPhone and on Google Play for Android. Residents and security staff download the app and join their estate from an invite link.',
  },
  {
    q: 'Who can see our estate’s data?',
    a: 'Access is role-based. Residents, security staff, and administrators only see what their role needs. Our Privacy Policy explains exactly what we collect and how it is used.',
  },
]

export default function Faq() {
  const ref = useScrollAnimation()
  return (
    <section id="faq" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <div className="section-label">FAQs</div>
          <h2 className="section-title">Got questions?</h2>
          <p className="section-sub">Everything you need to know about bringing your estate onto Supagate. Can’t find your answer? We’re happy to help.</p>
          <a href="mailto:hello@supagate.co" className={`btn btn-outline ${styles.contact}`}>
            <Icon name="mail" size={18} /> hello@supagate.co
          </a>
        </div>

        <div ref={ref} className={`${styles.list} aos`}>
          {faqs.map((f, i) => (
            <details key={f.q} className={styles.item} open={i === 0}>
              <summary>
                <span>{f.q}</span>
                <span className={styles.toggle}><Icon name="plus" size={18} strokeWidth={2.2} /></span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
