import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Icon from './Icon'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    quote: 'Since we deployed Supagate, our service charge collection rate jumped from 52% to 91% within three months. The automated reminders alone paid for the subscription.',
    name: 'Adeola Okonkwo',
    role: 'Estate Manager, Lekki Gardens',
    initials: 'AO',
  },
  {
    quote: 'I can let in my visitor from my office. No more calling the gateman, no more missed deliveries. The access code feature is incredibly convenient.',
    name: 'Chioma Ihejirika',
    role: 'Resident, Chevron Estate',
    initials: 'CI',
  },
  {
    quote: 'Our security team handles 200+ gate events daily. With Supagate, everything is logged automatically. Shift handovers now take 2 minutes instead of 20.',
    name: 'Yusuf Balogun',
    role: 'Head of Security, GRA Phase 2',
    initials: 'YB',
  },
]

function Card({ testimonial, featured, delay }) {
  const ref = useScrollAnimation()
  return (
    <figure ref={ref} className={`${styles.card} ${featured ? styles.featured : ''} aos`} style={{ '--delay': `${delay}ms` }}>
      <div className={styles.stars} role="img" aria-label="Rated 5 out of 5">
        {Array.from({ length: 5 }, (_, i) => <Icon key={i} name="star" size={16} strokeWidth={0} fill="currentColor" />)}
      </div>
      <blockquote>“{testimonial.quote}”</blockquote>
      <figcaption className={styles.author}>
        <span className={styles.avatar} aria-hidden="true">{testimonial.initials}</span>
        <span>
          <strong>{testimonial.name}</strong>
          <small>{testimonial.role}</small>
        </span>
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  const headerRef = useScrollAnimation()
  return (
    <section id="testimonials" className={styles.section}>
      <div ref={headerRef} className="section-header-center aos">
        <div className="section-label">Testimonials</div>
        <h2 className="section-title">Hear what estates say about Supagate</h2>
        <p className="section-sub">Administrators, residents, and security teams on what changed after moving their estate onto Supagate.</p>
      </div>
      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <Card key={t.name} testimonial={t} featured={i === 1} delay={i * 100} />
        ))}
      </div>
    </section>
  )
}
