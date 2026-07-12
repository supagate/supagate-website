import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from './Legal.module.css'

export default function DeleteAccount() {
  return (
    <>
      <Nav />

      <main className={styles.doc}>
        <h1>Delete Your Supagate Account</h1>
        <p className={styles.updated}>Supagate Technologies Ltd.</p>

        <p>
          You can permanently delete your Supagate account and its
          associated personal data at any time. This page explains how, and
          exactly what happens to your data when you do.
        </p>

        <h2>Option 1: Delete in the app (fastest)</h2>
        <ol>
          <li>Open the Supagate app and sign in.</li>
          <li>Go to <strong>Profile → Edit Profile</strong>.</li>
          <li>Scroll to the bottom and tap <strong>Delete Account</strong>.</li>
          <li>Enter your password to confirm (skip this if you signed in with Google or Apple), then tap <strong>Delete</strong>.</li>
        </ol>
        <p>
          Your account is deleted immediately. If you're the only
          administrator of an estate, you'll be asked to assign another
          admin there first — this prevents an estate from being left
          without anyone able to manage it.
        </p>

        <h2>Option 2: Request deletion by email</h2>
        <p>
          If you can't access the app, email{' '}
          <a href="mailto:hello@supagate.co">hello@supagate.co</a> from the
          address registered on your account and ask us to delete it. We'll
          verify your identity and complete the request within 14 days.
        </p>

        <h2>What gets deleted</h2>
        <ul>
          <li>Your name, email, phone number, and profile photo.</li>
          <li>Your password and linked Google/Apple sign-in.</li>
          <li>Guest and household member details you added.</li>
          <li>Device push-notification tokens.</li>
          <li>Your residency/membership link to any estate.</li>
        </ul>

        <h2>What's retained, and why</h2>
        <p>
          A limited amount of information is kept even after deletion,
          consistent with our{' '}
          <a href="/privacy-policy">Privacy Policy</a>:
        </p>
        <ul>
          <li>
            <strong>Bill and service-charge payment records</strong> your
            estate has an accounting obligation to keep — these are
            retained, but no longer linked to your name once your account
            is deleted.
          </li>
          <li>
            <strong>Gate and visitor logs</strong> already recorded before
            deletion, for the estate's security records.
          </li>
        </ul>
        <p>
          Everything else is deleted or irreversibly anonymized. This
          cannot be undone, and re-registering afterward starts a new
          account with no history.
        </p>

        <h2>Questions</h2>
        <p>
          Contact us at <a href="mailto:hello@supagate.co">hello@supagate.co</a>{' '}
          for anything not covered here.
        </p>
      </main>

      <Footer />
    </>
  )
}
