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
export default function Join() {
  const [code] = useState(
    () => new URLSearchParams(window.location.search).get('code'),
  )

  useEffect(() => {
    if (!code) return
    window.location.href = `supagate://join?code=${encodeURIComponent(code)}`
  }, [code])

  return (
    <>
      <Nav />

      <main className={styles.doc}>
        {code ? (
          <>
            <h1>Join your estate on Supagate</h1>
            <p>
              Open this link on your phone with the Supagate app installed
              to join your estate using this invite code.
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
            <h1>Join link incomplete</h1>
            <p>
              This link is missing its invite code, so we can't process it.
              Ask your estate administrator to resend the join link.
            </p>
          </>
        )}
      </main>

      <Footer />
    </>
  )
}
