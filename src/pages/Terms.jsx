import LogoGreen from '../components/LogoGreen'
import Footer from '../components/Footer'
import styles from './Legal.module.css'

const EFFECTIVE_DATE = 'July 12, 2026'

export default function Terms() {
  return (
    <>
      <header className={styles.header}>
        <a href="/" className={styles.logo}>
          <LogoGreen />
          <span>Supagate</span>
        </a>
        <a href="/" className={styles.back}>← Back to home</a>
      </header>

      <main className={styles.doc}>
        <h1>Terms of Service</h1>
        <p className={styles.updated}>Effective date: {EFFECTIVE_DATE}</p>

        <p>
          These Terms of Service ("Terms") govern your access to and use of
          the Supagate mobile app and the supagate.co website (together,
          the "Service"), operated by Supagate Technologies Ltd.
          ("Supagate", "we", "us"). By creating an account or using the
          Service, you agree to these Terms. If you don't agree, don't use
          the Service.
        </p>

        <h2>1. The Service</h2>
        <p>
          Supagate is an estate management platform that lets estate
          administrators manage residents, visitors, bills, and
          announcements; lets residents invite guests, pay bills, and
          communicate with gate security; and lets security personnel log
          and verify visitor access. Features available to you depend on
          the role assigned to your account by your estate administrator
          (resident, security, or administrator).
        </p>

        <h2>2. Accounts &amp; Eligibility</h2>
        <ul>
          <li>You must be at least 18 years old, or the age of majority in your jurisdiction, to create an account.</li>
          <li>You're responsible for the accuracy of the information you provide and for keeping your login credentials confidential.</li>
          <li>You're responsible for all activity that occurs under your account.</li>
          <li>Notify us immediately at <a href="mailto:hello@supagate.co">hello@supagate.co</a> if you suspect unauthorized use of your account.</li>
          <li>Access to a specific estate on Supagate is granted or revoked at the discretion of that estate's administrator.</li>
        </ul>

        <h2>3. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Provide false information about yourself, a visitor, or a guest.</li>
          <li>Use the Service to harass, threaten, or impersonate another person.</li>
          <li>Attempt to gain unauthorized access to another user's account, another estate's data, or the Service's systems.</li>
          <li>Interfere with or disrupt the Service, including the gate/intercom and notification systems.</li>
          <li>Use the Service for any unlawful purpose or in violation of any applicable law.</li>
          <li>Reverse-engineer, decompile, or attempt to extract the source code of the app, except where permitted by law.</li>
        </ul>

        <h2>4. Visitor Management &amp; Voice Calls</h2>
        <p>
          You're responsible for the accuracy of guest and visitor
          information you submit. Voice calls placed through the visitor
          intercom feature are transmitted live between residents and
          security and are not recorded or stored by Supagate. Estate
          administrators and security personnel are responsible for
          exercising their own judgment when granting or denying physical
          access at the gate &mdash; Supagate provides tools to support
          that decision but does not make access-control decisions on
          anyone's behalf.
        </p>

        <h2>5. Bills &amp; Payments</h2>
        <ul>
          <li>Bills and service charges are created by your estate administrator; Supagate is not responsible for setting, disputing, or refunding estate-level charges.</li>
          <li>Payments are processed by our third-party payment processor, Paystack. Supagate does not store your card or bank credentials.</li>
          <li>Payment disputes, refunds, or waivers are handled between you and your estate administrator; an administrator may mark a bill as paid or waived outside of Paystack (e.g. for cash payments).</li>
          <li>You're responsible for ensuring payments are made through legitimate channels within the app.</li>
        </ul>

        <h2>6. Estate Administrator &amp; Security Responsibilities</h2>
        <p>
          If you act as an estate administrator or security personnel, you
          additionally agree to: use resident and visitor data only for
          legitimate estate-management and security purposes; not misuse
          your elevated access to residents' personal information; and
          comply with applicable data protection law when handling
          residents' personal information through the Service.
        </p>

        <h2>7. Intellectual Property</h2>
        <p>
          The Service, including its software, design, logos, and content
          (excluding content you submit), is owned by Supagate Technologies
          Ltd. and protected by intellectual property laws. We grant you a
          limited, non-exclusive, non-transferable license to use the
          Service for its intended purpose. You retain ownership of the
          content you submit (such as your profile photo), and grant us a
          license to host and display it as necessary to operate the
          Service.
        </p>

        <h2>8. Third-Party Services</h2>
        <p>
          The Service relies on third-party providers, including Paystack
          (payments), Cloudinary (media storage), Agora (voice calls),
          Firebase and Apple Push Notification service (notifications), and
          Google/Apple sign-in. Your use of features backed by these
          providers may also be subject to their own terms.
        </p>

        <h2>9. Termination</h2>
        <p>
          Your estate administrator may remove your access to their estate
          at any time. We may suspend or terminate your account if you
          violate these Terms, engage in fraudulent or unlawful activity,
          or if required by law. You may stop using the Service and request
          account deletion at any time by contacting us.
        </p>

        <h2>10. Disclaimers</h2>
        <p>
          The Service is provided "as is" and "as available," without
          warranties of any kind, whether express or implied, including
          implied warranties of merchantability, fitness for a particular
          purpose, and non-infringement. Supagate does not guarantee
          uninterrupted or error-free operation of the Service, including
          the visitor-call and notification features, and is not
          responsible for physical security incidents at your estate.
        </p>

        <h2>11. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Supagate Technologies
          Ltd. will not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or any loss of data, revenue,
          or goodwill, arising from your use of the Service. Our total
          liability for any claim arising from these Terms or the Service
          will not exceed the amount you paid us, if any, in the twelve
          months preceding the claim.
        </p>

        <h2>12. Indemnification</h2>
        <p>
          You agree to indemnify and hold Supagate harmless from any
          claims, damages, or expenses (including reasonable legal fees)
          arising from your violation of these Terms or misuse of the
          Service.
        </p>

        <h2>13. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the Federal Republic of
          Nigeria, without regard to conflict-of-law principles. Any
          dispute arising from these Terms or the Service will be subject
          to the exclusive jurisdiction of the courts of Nigeria.
        </p>

        <h2>14. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. If we make material
          changes, we'll notify you through the app or by email before the
          changes take effect. Continuing to use the Service after changes
          take effect constitutes acceptance of the updated Terms.
        </p>

        <h2>15. Contact Us</h2>
        <p>
          Questions about these Terms? Contact us at{' '}
          <a href="mailto:hello@supagate.co">hello@supagate.co</a>.
        </p>
      </main>

      <Footer />
    </>
  )
}
