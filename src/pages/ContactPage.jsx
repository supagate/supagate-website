import { useState } from 'react'
import Nav from '../components/Nav'
import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import Icon from '../components/Icon'
import { CONTACT, CONTACT_EMAIL, ENQUIRY_TYPES, sendEnquiry } from '../lib/contact'
import styles from './ContactPage.module.css'

const routes = [
  { icon: 'clipboard', title: 'Estate managers', text: 'See Supagate working for your community.', label: 'Book an Estate Demo', type: 'demo' },
  { icon: 'home',      title: 'Residents', text: 'Get the app or recommend Supagate to your estate.', label: 'Explore the Resident App', href: '/residents' },
  { icon: 'shield',    title: 'Security teams', text: 'Learn how digital access management works.', label: 'See How Access Works', href: '/security-teams' },
  { icon: 'wrench',    title: 'Service providers', text: 'Reach residents in managed communities.', label: 'Register Your Interest', type: 'provider' },
  { icon: 'building',  title: 'Property developers', text: 'Build connected communities from day one.', label: 'Discuss a Partnership', type: 'partnership' },
  { icon: 'mail',      title: 'Support', text: 'Already using Supagate and need help?', label: 'Get Support', type: 'support' },
]

const initialType = () => {
  const t = new URLSearchParams(window.location.search).get('type')
  return ENQUIRY_TYPES.some(e => e.value === t) ? t : 'demo'
}

// Enquiry form. Submissions go to the Supagate API, land in the Console
// under Leads, and email the team. If the API can't be reached, the visitor
// is offered their email app with everything they typed filled in.
function EnquiryForm() {
  const [type, setType] = useState(initialType)
  const [state, setState] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')
  const [fallback, setFallback] = useState('')

  const onSubmit = async e => {
    e.preventDefault()
    const form = e.currentTarget
    const f = Object.fromEntries(new FormData(form))
    const typeLabel = ENQUIRY_TYPES.find(t => t.value === f.type)?.label ?? 'Enquiry'
    setState('sending')
    setError('')
    try {
      await sendEnquiry({
        fullName: f.name,
        phone: f.phone,
        email: f.email,
        organisation: f.organisation || undefined,
        type: f.type,
        message: f.message || undefined,
        website: f.website || undefined,
      })
      form.reset()
      setType(f.type)
      setState('sent')
    } catch (err) {
      const body = [
        `Name: ${f.name}`,
        `Phone: ${f.phone}`,
        `Email: ${f.email}`,
        `Organisation / community: ${f.organisation || '-'}`,
        `Enquiry type: ${typeLabel}`,
        '',
        f.message || '',
      ].join('\n')
      const subject = `${typeLabel} — ${f.organisation || f.name}`
      setFallback(`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
      setError(err.message)
      setState('error')
    }
  }

  if (state === 'sent') {
    return (
      <div className={`${styles.form} ${styles.sent}`} id="enquiry" role="status">
        <span className={styles.sentIcon}><Icon name="check" size={26} /></span>
        <h2>Thanks, we’ve got your enquiry.</h2>
        <p className={styles.formSub}>Someone from the Supagate team will get back to you shortly, usually within one working day.</p>
        <button type="button" className="btn btn-outline" onClick={() => setState('idle')}>
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} id="enquiry">
      <h2>Send us an enquiry</h2>
      <p className={styles.formSub}>Tell us a little about you and we’ll get back to you.</p>

      <div className={styles.fields}>
        <label>
          <span>Full name</span>
          <input name="name" required maxLength={120} autoComplete="name" />
        </label>
        <label>
          <span>Phone number</span>
          <input name="phone" type="tel" required maxLength={40} autoComplete="tel" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" required maxLength={254} autoComplete="email" />
        </label>
        <label>
          <span>Organisation or community name</span>
          <input name="organisation" maxLength={160} autoComplete="organization" />
        </label>
        <label className={styles.full}>
          <span>Type of enquiry</span>
          <select name="type" value={type} onChange={e => setType(e.target.value)}>
            {ENQUIRY_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
        </label>
        <label className={styles.full}>
          <span>Message <small>(optional)</small></span>
          <textarea name="message" rows={4} maxLength={4000} />
        </label>
        {/* Honeypot: hidden from people, so only bots fill it in. */}
        <label className={styles.trap} aria-hidden="true">
          <span>Website</span>
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button type="submit" className="btn btn-primary btn-lg" disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending…' : <>Send Enquiry <Icon name="arrowRight" size={18} /></>}
      </button>
      {state === 'error' ? (
        <p className={`${styles.note} ${styles.error}`} role="alert">
          {error} <a href={fallback}>Send it by email instead</a>, or write to <a href={CONTACT.email}>{CONTACT_EMAIL}</a>.
        </p>
      ) : (
        <p className={styles.note}>
          We only use these details to reply to you. See our <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      )}
    </form>
  )
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Contact Us"
          heading="Let’s talk about your community."
          intro="Book a demo, ask a question or get support. Choose what you need below, or send us an enquiry and the right person will get back to you."
        />

        <section className={styles.section}>
          <div className={styles.grid}>
            <div>
              <ul className={styles.routes}>
                {routes.map(r => (
                  <li key={r.title} className={styles.route}>
                    <span className={styles.icon}><Icon name={r.icon} size={20} /></span>
                    <div>
                      <strong>{r.title}</strong>
                      <p>{r.text}</p>
                      <a href={r.href ?? `/contact?type=${r.type}#enquiry`}>
                        {r.label} <Icon name="arrowRight" size={16} />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
              <div className={styles.direct}>
                <p>Prefer email?</p>
                <a href={CONTACT.email}><Icon name="mail" size={18} /> {CONTACT_EMAIL}</a>
                <p className={styles.faqLink}>Have a quick question? <a href="/#faq">Read our FAQs</a>.</p>
              </div>
            </div>
            <EnquiryForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
