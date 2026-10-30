import { useState } from 'react'
import InviteLanding from '../components/InviteLanding'

// An estate's join link, shared by its admins for residents to request a
// place. Reaching this page means the Supagate app didn't open the link
// itself, so InviteLanding tries the app again and shows how to get it.
export default function Join() {
  const [code] = useState(
    () => new URLSearchParams(window.location.search).get('code'),
  )

  if (!code) {
    return (
      <InviteLanding
        eyebrow="Join link"
        title="This join link is incomplete"
        intro="Part of the link is missing, so we can't tell which estate it's for. Ask your estate admin to share the join link again, then tap it on your phone."
        steps={STEPS}
        floatTitle="Need the link?"
        floatSub="Your estate admin can share it"
      />
    )
  }

  return (
    <InviteLanding
      eyebrow="Join your estate"
      title="Your estate is on Supagate"
      intro="Gate access, visitor passes, bills and estate notices, all from your phone. Get the app, then open this link on your phone to request your place."
      deepLink={`supagate://join?code=${encodeURIComponent(code)}`}
      chip={`Estate code: ${code}`}
      steps={STEPS}
      help={HELP}
      floatTitle="Request sent"
      floatSub="Your estate admin approves it"
    />
  )
}

const STEPS = [
  {
    title: 'Get the app',
    body: 'Download Supagate free from the App Store or Google Play.',
  },
  {
    title: 'Open this link',
    body: 'Tap this join link again on your phone. The app opens with your estate already chosen.',
  },
  {
    title: 'Add your home',
    body: 'Create your account, or sign in, and tell us your house and block.',
  },
  {
    title: 'Get approved',
    body: "Your estate admin approves your request. We'll notify you, and you're in.",
  },
]

const HELP = [
  "Open the link on the phone you'll use Supagate on, not a forwarded copy on a computer.",
  'If the app is installed but the link still opens here, tap Open in the Supagate app above.',
  'Already a resident? Just sign in to the app; there is nothing to join again.',
]
