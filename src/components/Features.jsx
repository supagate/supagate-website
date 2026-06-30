import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Features.module.css'

const features = [
  { icon: '🛡️', bg: '#e8f7ef', title: 'Smart Gate Access', desc: 'Control who enters and exits your estate in real time. Security staff can approve or deny visitors instantly with a full audit trail.' },
  { icon: '👥', bg: '#e8f0ff', title: 'Resident Management', desc: 'Maintain a complete, up-to-date directory of all residents. Admins can add, update, or deactivate residents with role-based access.' },
  { icon: '💳', bg: '#fff6d9', title: 'Payments & Service Charges', desc: 'Collect dues, utility bills, and levies digitally. Residents get payment reminders, receipts, and a full transaction history.' },
  { icon: '🏊', bg: '#fff0e5', title: 'Amenity Bookings', desc: 'Let residents book shared facilities like pools, gyms, and event halls through the app — no double bookings, no disputes.' },
  { icon: '📢', bg: '#f0eeff', title: 'Notice Board & Community', desc: 'Post announcements, emergency alerts, and community updates. Every resident stays informed without the noise of group chats.' },
  { icon: '📊', bg: '#e0f4ff', title: 'Reports & Analytics', desc: 'Get detailed reports on gate activity, payment rates, and maintenance requests. Make data-driven decisions for your estate.' },
]

function FeatureCard({ icon, bg, title, desc, delay }) {
  const ref = useScrollAnimation()
  return (
    <div ref={ref} className={`${styles.card} aos`} style={{ transitionDelay: `${delay}ms` }}>
      <div className={styles.icon} style={{ background: bg }}>{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default function Features() {
  const headerRef = useScrollAnimation()
  return (
    <section className={styles.section} id="features">
      <div ref={headerRef} className="section-header-center aos">
        <div className="section-label">✦ Features</div>
        <h2 className="section-title">Everything your estate needs,<br />in one place</h2>
        <p className="section-sub">From gate control to community communication, Supagate handles the complexity so you can focus on living.</p>
      </div>
      <div className={styles.grid}>
        {features.map((f, i) => (
          <FeatureCard key={f.title} {...f} delay={(i % 3) * 80} />
        ))}
      </div>
    </section>
  )
}
