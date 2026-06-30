import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    quote: 'Since we deployed Supagate, our service charge collection rate jumped from 52% to 91% within three months. The automated reminders alone paid for the subscription.',
    name: 'Adeola Okonkwo',
    role: 'Estate Manager, Lekki Gardens',
    initials: 'AO',
    color: '#009444',
  },
  {
    quote: 'I can let in my visitor from my office. No more calling the gateman, no more missed deliveries. The access code feature is incredibly convenient.',
    name: 'Chioma Ihejirika',
    role: 'Resident, Chevron Estate',
    initials: 'CI',
    color: '#23365D',
  },
  {
    quote: 'Our security team handles 200+ gate events daily. With Supagate, everything is logged automatically. Shift handovers now take 2 minutes instead of 20.',
    name: 'Yusuf Balogun',
    role: 'Head of Security, GRA Phase 2',
    initials: 'YB',
    color: '#4DCA90',
  },
]

function Card({ testimonial, delay }) {
  const ref = useScrollAnimation()
  return (
    <div ref={ref} className={`${styles.card} aos`} style={{ transitionDelay: `${delay}ms` }}>
      <div className={styles.stars}>{'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}</div>
      <blockquote>"{testimonial.quote}"</blockquote>
      <div className={styles.author}>
        <div className={styles.avatar} style={{ background: testimonial.color }}>{testimonial.initials}</div>
        <div>
          <strong>{testimonial.name}</strong>
          <span>{testimonial.role}</span>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const headerRef = useScrollAnimation()
  return (
    <section id="testimonials">
      <div ref={headerRef} className="section-header-center aos">
        <div className="section-label">✦ Testimonials</div>
        <h2 className="section-title">Loved by estates across Nigeria</h2>
        <p className="section-sub">Don't take our word for it — hear from administrators and residents using Supagate every day.</p>
      </div>
      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <Card key={t.name} testimonial={t} delay={i * 100} />
        ))}
      </div>
    </section>
  )
}
