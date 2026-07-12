import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from './Legal.module.css'

// Reaching this page at all means iOS/Android Universal/App Links didn't
// intercept the request before the browser loaded it — either the
// Supagate app isn't installed, or link verification hasn't completed on
// this device yet. The `supagate://` redirect below is a best-effort
// second attempt for the latter case; the static content is what most
// visitors here will actually see.
export default function AcceptInvite() {
  const [token] = useState(
    () => new URLSearchParams(window.location.search).get('token'),
  )

  useEffect(() => {
    if (!token) return
    window.location.href = `supagate://accept-invite?token=${encodeURIComponent(token)}`
  }, [token])

  return (
    <>
      <Nav />

      <main className={styles.doc}>
        {token ? (
          <>
            <h1>You've been invited to Supagate</h1>
            <p>
              Open this link on your phone with the Supagate app installed
              to accept your invite and finish setting up your account.
            </p>
            <p>
              If nothing happened automatically and you already have the
              app installed, make sure you're opening this link directly
              from your phone (not a forwarded message on desktop), then
              try again.
            </p>
          </>
        ) : (
          <>
            <h1>Invite link incomplete</h1>
            <p>
              This link is missing its invite code, so we can't process it.
              Ask whoever invited you to resend the invite.
            </p>
          </>
        )}
      </main>

      <Footer />
    </>
  )
}
