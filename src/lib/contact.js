// Every call to action leads to the contact page with the enquiry type
// preselected, so the team can sort enquiries as they arrive.
export const CONTACT_EMAIL = 'hello@supagate.co'

export const ENQUIRY_TYPES = [
  { value: 'demo',        label: 'Book an estate demo' },
  { value: 'resident',    label: 'I’m a resident' },
  { value: 'security',    label: 'Security and access management' },
  { value: 'provider',    label: 'Join as a service provider' },
  { value: 'partnership', label: 'Property developer partnership' },
  { value: 'support',     label: 'Support with my account' },
  { value: 'other',       label: 'Something else' },
]

const contact = type => `/contact?type=${type}#enquiry`

export const CONTACT = {
  demo:        contact('demo'),
  estateDemo:  contact('demo'),
  team:        contact('other'),
  provider:    contact('provider'),
  partnership: contact('partnership'),
  security:    contact('security'),
  support:     contact('support'),
  page:        '/contact',
  email:       `mailto:${CONTACT_EMAIL}`,
}

// The Supagate API. Set VITE_API_URL in .env.development.local to point a
// local build at a local backend.
const API_URL = (import.meta.env.VITE_API_URL || 'https://api.supagate.co/api/v1').replace(/\/$/, '')

/** Posts the contact form to the API; throws with a message people can read. */
export async function sendEnquiry(enquiry) {
  let res
  try {
    res = await fetch(`${API_URL}/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(enquiry),
    })
  } catch {
    throw new Error('We couldn’t reach Supagate just now.')
  }
  if (res.ok) return
  if (res.status === 429) throw new Error('You’ve sent a few enquiries already. Please wait a few minutes.')
  if (res.status === 400) throw new Error('Please check your details and try again.')
  throw new Error('Something went wrong sending your enquiry.')
}
