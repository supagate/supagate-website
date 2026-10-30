import { useState } from 'react'
import InviteLanding from '../components/InviteLanding'

// An invite to set up an account: a resident added by their estate, an
// admin, or a family member. Reaching this page means the Supagate app
// didn't open the link itself (not installed yet, or the phone hasn't
// verified the link), so InviteLanding tries the app again and shows how
// to get it.
export default function AcceptInvite() {
  const [token] = useState(
    () => new URLSearchParams(window.location.search).get('token'),
  )

  if (!token) {
    return (
      <InviteLanding
        eyebrow="Invite link"
        title="This invite link is incomplete"
        intro="Part of the link is missing, so we can't open your invite. Ask whoever invited you to send it again, then tap the new link on your phone."
        steps={STEPS}
        floatTitle="Invites last 7 days"
        floatSub="Ask for a new one any time"
      />
    )
  }

  return (
    <InviteLanding
      eyebrow="You've been invited"
      title="Set up your Supagate account"
      intro="Your estate is on Supagate: gate access, visitors, bills and notices in one app. Get the app, then open this invite on your phone to set your password."
      deepLink={`supagate://accept-invite?token=${encodeURIComponent(token)}`}
      steps={STEPS}
      help={HELP}
      floatTitle="Invite ready"
      floatSub="Set a password to finish"
    />
  )
}

const STEPS = [
  {
    title: 'Get the app',
    body: 'Download Supagate free from the App Store or Google Play.',
  },
  {
    title: 'Open your invite',
    body: 'Come back to your invite email on your phone and tap the link again. It opens in the app.',
  },
  {
    title: 'Set your password',
    body: 'Your email is already filled in. Choose a password to finish setting up.',
  },
  {
    title: "You're in",
    body: 'See your gate access code, invite guests and keep up with your estate.',
  },
]

const HELP = [
  'Invite links work for 7 days. If yours has expired, ask whoever invited you to resend it.',
  "Open the link on the phone you'll use Supagate on, not a forwarded copy on a computer.",
  'Already set up your account? Sign in to the app with the same email.',
]
