import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Icon from './Icon'
import styles from './Faq.module.css'

const faqs = [
  {
    q: 'Who is Supagate for?',
    a: 'Gated estates and residential communities in Nigeria: the facility managers, developers and residents’ associations who run them, the residents who live there, and the security teams at the gate. Each role gets its own view inside one app.',
  },
  {
    q: 'How does a visitor get in?',
    a: 'The resident creates a pass code in the app and sends it to their guest. At the gate, security enters the 6-digit code or scans the QR. Each code works once and only within its time window, and every entry is logged.',
  },
  {
    q: 'What if a visitor arrives without a code?',
    a: 'Security can register walk-in visitors directly from the gate app, whether it’s a guest, a delivery, an artisan or a car, so the visit is still recorded in the gate log.',
  },
  {
    q: 'How do residents pay their dues?',
    a: 'Residents see every bill in the app with what it is for and when it is due, and pay securely online through Paystack. Administrators see what has been collected and what is still outstanding.',
  },
  {
    q: 'Can we bill some residents and not others?',
    a: 'Yes. A bill can go to the whole estate, to a specific block, or to an individual household. It can be a one-off charge, like a repair or a fine, or recurring, like a quarterly utility levy.',
  },
  {
    q: 'Can I manage more than one estate?',
    a: 'Yes. Administrators can switch between the estates they manage from their profile, without signing out or using a second account.',
  },
  {
    q: 'Is Supagate available on iOS and Android?',
    a: 'Yes. Supagate is on the App Store for iPhone and on Google Play for Android. Residents and security staff download the same app and join their estate from an invite link.',
  },
  {
    q: 'How is our estate’s data protected?',
    a: 'Access is role-based, so residents, guards and administrators only see what their role needs. Guard access can be set to expire, and accounts can be protected with two-factor authentication. Our Privacy Policy explains what we collect and why.',
  },
  {
    q: 'How much does Supagate cost?',
    a: 'Pricing depends on the size of your estate. Email hello@supagate.co with a few details about your estate and we’ll send you a quote.',
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
