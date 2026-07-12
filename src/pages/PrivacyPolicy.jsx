import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from './Legal.module.css'

const EFFECTIVE_DATE = 'July 12, 2026'

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />

      <main className={styles.doc}>
        <h1>Privacy Policy</h1>
        <p className={styles.updated}>Effective date: {EFFECTIVE_DATE}</p>

        <p>
          Supagate Technologies Ltd. ("Supagate", "we", "us", or "our")
          provides an estate management platform &mdash; consisting of the
          Supagate mobile app and the supagate.co website (together, the
          "Service") &mdash; used by residents, security personnel, and
          administrators of gated communities. This Privacy Policy explains
          what information we collect, how we use and share it, and the
          choices you have.
        </p>
        <p>
          By creating an account or otherwise using the Service, you agree
          to the collection and use of information as described here. If
          you don't agree, please don't use the Service.
        </p>

        <h2>1. Information We Collect</h2>

        <h3>1.1 Information you provide directly</h3>
        <ul>
          <li><strong>Account information:</strong> full name, email address, phone number, and password (stored as a salted hash &mdash; we never store your plain-text password).</li>
          <li><strong>Profile photo:</strong> a photo you capture with your camera or choose from your photo library, used to identify you in security sessions and visitor check-ins.</li>
          <li><strong>Estate &amp; residency details:</strong> your estate, house/unit number, and block, assigned when an estate administrator adds you as a resident, or that you provide during onboarding.</li>
          <li><strong>Visitor &amp; guest information:</strong> names and phone numbers of guests or family members you invite, which you may enter manually or select from your device contacts.</li>
          <li><strong>Communications:</strong> messages you send to our support team.</li>
        </ul>

        <h3>1.2 Information from third-party sign-in</h3>
        <p>
          If you sign in with Google or Apple, we receive your name, email
          address, and profile picture from that provider, as permitted by
          your settings with them.
        </p>

        <h3>1.3 Device permissions</h3>
        <p>
          The Supagate app requests the following device permissions. Each
          is used only for the stated purpose, and only when you actively
          use the related feature:
        </p>
        <table className={styles.table}>
          <thead>
            <tr><th>Permission</th><th>Why we ask</th></tr>
          </thead>
          <tbody>
            <tr><td>Camera</td><td>To capture a profile photo or visitor/guest photo for security sessions.</td></tr>
            <tr><td>Photo library</td><td>To select an existing photo as your profile picture, and to save photos the app generates.</td></tr>
            <tr><td>Contacts</td><td>To help you quickly fill in a guest's or family member's name and phone number when inviting them &mdash; we only read the specific contact you select, never your full address book.</td></tr>
            <tr><td>Microphone</td><td>For voice calls between residents and security at the gate (visitor intercom). Calls are transmitted live and are not recorded or stored by us.</td></tr>
            <tr><td>Notifications</td><td>To alert you about visitor arrivals, bill reminders, and estate announcements.</td></tr>
            <tr><td>Bluetooth</td><td>Required by our voice-call and notification infrastructure to route audio correctly (e.g. to a connected headset); Supagate does not use Bluetooth to scan for or connect to other devices.</td></tr>
          </tbody>
        </table>
        <p>
          You can disable any of these permissions at any time in your
          device settings; doing so may limit the related feature.
        </p>

        <h3>1.4 Payment information</h3>
        <p>
          Bill and service-charge payments are processed by our payment
          processor, <strong>Paystack</strong>. We never see or store your
          card, bank, or other payment credentials &mdash; our servers only
          receive a payment reference and status (e.g. "paid") once Paystack
          confirms your transaction.
        </p>

        <h3>1.5 Information collected automatically</h3>
        <ul>
          <li>Device information (device type, operating system, app version).</li>
          <li>Log data (IP address, access times, error logs).</li>
          <li>Push-notification tokens, used to deliver alerts to your device.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To create and manage your account and verify your identity.</li>
          <li>To operate core features: visitor invitations and gate check-in, bill generation and payment tracking, estate announcements, and voice intercom calls.</li>
          <li>To send transactional notifications and emails (visitor arrival, bill due, payment confirmation).</li>
          <li>To maintain the security of the Service, including estate admins' and security personnel's oversight of gate activity.</li>
          <li>To respond to support requests.</li>
          <li>To comply with legal obligations and enforce our Terms of Service.</li>
        </ul>

        <h2>3. How We Share Your Information</h2>
        <p>We share information only as follows:</p>
        <ul>
          <li><strong>Within your estate:</strong> your name, unit/block, and relevant activity (e.g. a visitor request, a bill payment status) are visible to your estate's administrators and security personnel, as necessary for estate management and gate access control.</li>
        </ul>
        
        <ul>
          <li><strong>Legal reasons:</strong> if required by law, regulation, legal process, or governmental request, or to protect the rights, property, or safety of Supagate, our users, or others.</li>
          <li><strong>Business transfers:</strong> in connection with a merger, acquisition, or sale of assets, subject to this Policy continuing to apply to your information.</li>
        </ul>
        <p>We do not sell your personal information.</p>

        <h2>4. Data Retention</h2>
        <p>
          We retain your information for as long as your account is active
          or as needed to provide the Service. If you or your estate
          administrator deletes your account, we delete or anonymize your
          personal information within a reasonable period, except where we
          must retain it to comply with legal, accounting, or dispute-
          resolution obligations (for example, financial records of bill
          payments).
        </p>

        <h2>5. Data Security</h2>
        <p>
          We use reasonable administrative, technical, and physical
          safeguards to protect your information, including encrypted
          transport (HTTPS), hashed passwords, and access controls limiting
          data visibility to your own estate. No method of transmission or
          storage is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2>6. Your Rights &amp; Choices</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access, correct, or request a copy of your personal information.</li>
          <li>Request deletion of your account and associated personal information.</li>
          <li>Object to or restrict certain processing.</li>
          <li>Withdraw consent where processing is based on consent (e.g. contacts access).</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{' '}
          <a href="mailto:hello@supagate.co">hello@supagate.co</a>. Note
          that some information, such as bill payment history, may need to
          be retained by your estate for accounting purposes even after an
          account deletion request.
        </p>
        <p>
          You can also disable push notifications and device permissions
          (camera, contacts, microphone, photos) at any time from your
          device settings.
        </p>

        <h2>7. Children's Privacy</h2>
        <p>
          The Service is not directed to children under 13 (or the minimum
          age required in your jurisdiction), and we do not knowingly
          collect personal information from them. If you believe a child
          has provided us with personal information, contact us and we
          will delete it.
        </p>

        <h2>8. International Data Transfers</h2>
        <p>
          Supagate is operated from Nigeria. Some of our service providers
          process data on servers located outside Nigeria. Where this
          happens, we take reasonable steps to ensure your information
          receives an adequate level of protection.
        </p>

        <h2 id="cookies">9. Cookies &amp; Similar Technologies</h2>
        <p>
          The supagate.co website uses minimal, privacy-conscious analytics
          (performance monitoring) to understand site usage and is not used
          to build advertising profiles. The Supagate mobile app does not
          use cookies.
        </p>

        <h2>10. Third-Party Links</h2>
        <p>
          The Service may contain links to third-party sites or services we
          don't control. This Policy doesn't apply to those third parties,
          and we encourage you to review their privacy policies.
        </p>

        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. If we make
          material changes, we will notify you through the app or by email
          before the changes take effect. The "Effective date" above
          reflects the latest revision.
        </p>

        <h2>12. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or how we handle
          your information, contact us at{' '}
          <a href="mailto:hello@supagate.co">hello@supagate.co</a>.
        </p>
      </main>

      <Footer />
    </>
  )
}
