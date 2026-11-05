import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Icon from './Icon'
import styles from './Faq.module.css'

const faqs = [
  {
    q: 'What is Supagate?',
    a: 'Supagate is a digital platform that connects residents, estate managers, security personnel and service providers to make everyday residential community living more convenient, organised and secure.',
  },
  {
    q: 'Who can use Supagate?',
    a: 'Supagate is designed for residents of managed communities, estate managers, property administrators, security personnel and service providers.',
  },
  {
    q: 'Can Supagate be used in apartment complexes and gated communities?',
    a: 'Yes. Supagate is built for managed residential environments of different sizes, including gated estates, apartment complexes, residential developments and similar properties.',
  },
  {
    q: 'Can residents manage their visitors through Supagate?',
    a: 'Yes. Residents create digital visitor passes for their guests, and security teams use Supagate to verify visitors at the gate and record entries and exits.',
  },
  {
    q: 'Can residents pay their estate dues through Supagate?',
    a: 'Yes. Residents can view outstanding charges, make payments and access their transaction records, while administrators monitor collections and payment activity.',
  },
  {
    q: 'Can residents report maintenance issues?',
    a: 'Yes. Residents can report maintenance, security or community concerns, add relevant details and follow the progress of their requests, depending on the features enabled for their community.',
  },
  {
    q: 'Does Supagate connect residents to service providers?',
    a: 'Yes. Residents can discover service providers listed on Supagate, such as plumbers, electricians, cleaners and technicians, and send them service enquiries.',
  },
  {
    q: 'How can my estate get started?',
    a: 'Contact the Supagate team to arrange a demonstration and discuss onboarding for your community.',
  },
  {
    q: 'How can I become a service provider on Supagate?',
    a: 'Contact our team to ask about registration and onboarding requirements for service providers.',
  },
  {
    q: 'How is my information protected?',
    a: 'Access is role-based, so residents, security staff and administrators only see what their role needs. Our Privacy Policy explains in plain language what we collect, how it is used and how it is protected.',
    link: { href: '/privacy-policy', label: 'Read our Privacy Policy' },
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
          <p className="section-sub">Everything you need to know about bringing your community onto Supagate. Can’t find your answer? We’re happy to help.</p>
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
              <p>
                {f.a}
                {f.link && <> <a href={f.link.href}>{f.link.label}</a>.</>}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
