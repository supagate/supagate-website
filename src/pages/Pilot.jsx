import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import legalStyles from './Legal.module.css'
import styles from './Pilot.module.css'

// The app isn't on the App Store/Google Play yet, so "Get the App" collects
// interest here instead — see PilotTestersModule on the backend, which
// stores the signup and emails a notification.
const API_URL = 'https://api.supagate.co/api/v1/pilot-testers'

export default function Pilot() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | submitting | done | error
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    setError('')

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName: fullName.trim(), email: email.trim() }),
      })
      const json = await res.json().catch(() => null)

      if (!res.ok) {
        const message = json?.message
        throw new Error(Array.isArray(message) ? message[0] : message || 'Something went wrong. Please try again.')
      }

      setStatus('done')
    } catch (err) {
      setStatus('error')
      setError(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <>
      <Nav />

      <main className={legalStyles.doc}>
        <h1>Join the Supagate Pilot</h1>
        <p className={legalStyles.updated}>
          We're onboarding a small group of estates before our public
          launch. Leave your details below and we'll reach out with early
          access.
        </p>

        {status === 'done' ? (
          <div className={styles.success}>
            <h3>You're on the list 🎉</h3>
            <p>Thanks for your interest — we'll be in touch soon with next steps.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <span>Full Name</span>
              <input
                type="text"
                required
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                placeholder="Jane Doe"
              />
            </label>

            <label className={styles.field}>
              <span>Email</span>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="jane@example.com"
              />
            </label>

            {status === 'error' && <p className={styles.error}>{error}</p>}

            <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Submitting…' : 'Join the Pilot'}
            </button>
          </form>
        )}
      </main>

      <Footer />
    </>
  )
}
