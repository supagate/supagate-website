import { CONTACT } from '../lib/contact'

// Copy for each audience page, adapted from the website content brief.
// Visuals: `web` + `phone` screenshots, a single `phone`, or a `board` list.
export const SOLUTION_PAGES = {
  residents: {
    eyebrow: 'For Residents',
    heading: 'Feel more connected to where you live.',
    intro: 'Your home should be a place of comfort, convenience and peace of mind. Supagate helps you manage everyday residential activities without unnecessary stress.',
    primary: { label: 'Explore the Resident App', href: '#download' },
    secondary: { label: 'Ask about Supagate for my estate', href: CONTACT.page + '?type=resident#enquiry' },
    visual: {
      phone: { src: '/hero-crops/13-resident-home.png', alt: 'Supagate resident home screen' },
      chips: [
        { icon: 'qr', title: 'Guest pass sent', sub: 'Valid for today’s visit' },
        { icon: 'bell', title: 'Your guest has arrived', sub: 'Verified at the gate' },
      ],
    },
    benefitsHeading: 'Everyday living, made easier',
    benefits: [
      { icon: 'qr',        title: 'Welcome your guests',   desc: 'Create a digital visitor pass before your guest arrives, so getting in is quick and organised.' },
      { icon: 'bell',      title: 'Know who’s at the gate', desc: 'Receive gate notifications when your visitors arrive and are verified by security.' },
      { icon: 'wallet',    title: 'Pay with confidence',   desc: 'Know what you owe, pay conveniently and keep track of every payment record.' },
      { icon: 'wrench',    title: 'Raise concerns easily', desc: 'Report maintenance, security or community issues and follow up without chasing multiple people.' },
      { icon: 'megaphone', title: 'Stay informed',         desc: 'Receive announcements, maintenance updates and important notices from your estate.' },
      { icon: 'handshake', title: 'Find useful services',  desc: 'Discover plumbers, electricians, cleaners and other providers serving your community.' },
    ],
    stepsHeading: 'Getting started as a resident',
    steps: [
      { title: 'Your estate joins Supagate', desc: 'Your estate or property management team sets up your community on Supagate.' },
      { title: 'Download the app', desc: 'Get Supagate on the App Store or Google Play and join with your estate’s invite link.' },
      { title: 'Live more connected', desc: 'Invite guests, pay dues, report concerns and stay informed from your phone.' },
    ],
    cta: {
      heading: 'Is your estate not on Supagate yet?',
      body: 'Tell us about your community and we’ll reach out to your estate management team.',
      button: { label: 'Recommend Supagate', href: CONTACT.page + '?type=resident#enquiry' },
    },
  },

  'estate-managers': {
    eyebrow: 'For Estate Managers',
    heading: 'Manage your community with greater clarity and control.',
    intro: 'Managing a residential community means coordinating people, payments, security, maintenance, communication and shared facilities. When these run through scattered records and disconnected channels, important information is hard to track. Supagate gives you one central platform for organised community administration.',
    primary: { label: 'Request an Estate Management Demo', href: CONTACT.estateDemo },
    secondary: { label: 'Get Started', href: 'https://app.supagate.co/signup' },
    visual: {
      web: { src: '/web-screenshots/overview.jpg', alt: 'Supagate web dashboard with collections, outstanding dues and a monthly collections chart' },
      phone: { src: '/hero-crops/02-residents.png', alt: 'Supagate residents directory on mobile' },
    },
    benefitsHeading: 'Manage your community with better visibility and organised records',
    benefits: [
      { icon: 'users',     title: 'Resident and property records', desc: 'Keep residents, units and household details organised in one up-to-date directory.' },
      { icon: 'wallet',    title: 'Billing and payment tracking',   desc: 'Raise community charges, monitor collections and see outstanding balances at a glance.' },
      { icon: 'megaphone', title: 'Announcements and notifications', desc: 'Share updates, reminders and emergency notices that reach every resident.' },
      { icon: 'wrench',    title: 'Maintenance and complaints',      desc: 'Receive requests with details attached, assign them and keep residents updated on progress.' },
      { icon: 'calendar',  title: 'Facility reservations',           desc: 'Manage bookings for shared amenities without double bookings or disputes.' },
      { icon: 'shield',    title: 'Visitor and access records',      desc: 'See visitor activity and access records kept by your security team.' },
      { icon: 'chart',     title: 'Financial and activity reports',  desc: 'Use clear reports on payments and community activity to support decisions and accountability.' },
      { icon: 'clipboard', title: 'Organised administration',        desc: 'Replace paper records and group chats with tools built for running a community.' },
    ],
    stepsHeading: 'Getting your community connected is simple',
    steps: [
      { title: 'Register your community', desc: 'Your estate or property management team gets started with Supagate.' },
      { title: 'Set up your community', desc: 'Configure residents, units, access procedures and community information.' },
      { title: 'Invite residents and teams', desc: 'Residents and authorised security personnel are invited to the platform.' },
      { title: 'Run everything from one place', desc: 'Manage payments, communication, requests and records together.' },
    ],
    cta: {
      heading: 'Ready to improve the way your community operates?',
      body: 'Whether you manage a gated estate, apartment complex, residential development or managed community, we’ll show you how Supagate fits.',
      button: { label: 'Book an Estate Demo', href: CONTACT.estateDemo },
    },
  },

  'security-teams': {
    eyebrow: 'For Security Teams',
    heading: 'Clearer procedures. More organised access. Better accountability.',
    intro: 'Security personnel play an important role in keeping residential communities safe and orderly. Supagate supports their work with digital visitor verification, access records and better communication with residents and management, reducing dependence on manual visitor logbooks.',
    primary: { label: 'See How Access Management Works', href: '/#features' },
    secondary: { label: 'Book a Demo', href: CONTACT.security },
    visual: {
      web: { src: '/web-screenshots/security.jpg', alt: 'Supagate web gate log listing today’s entries and exits' },
      phone: { src: '/hero-crops/07-security-inout.png', alt: 'Supagate security in-out log with today’s entries and exits' },
    },
    benefitsHeading: 'Tools that support the people at the gate',
    benefits: [
      { icon: 'qr',        title: 'Verify visitor passes', desc: 'Check a visitor’s digital pass and confirm their access is authorised.' },
      { icon: 'clipboard', title: 'Electronic entry and exit records', desc: 'Every entry and exit is recorded with a time, replacing paper logbooks.' },
      { icon: 'bell',      title: 'Reach residents quickly', desc: 'Let residents know their visitors have arrived and confirm unexpected guests.' },
      { icon: 'megaphone', title: 'Stay in touch with management', desc: 'Raise security concerns and keep estate management informed.' },
      { icon: 'calendar',  title: 'Duty and shift records', desc: 'Keep organised records of who was on duty and when.' },
      { icon: 'shield',    title: 'Accountable access', desc: 'Clear, consistent procedures for every visitor, every time.' },
    ],
    stepsHeading: 'How visitor access works',
    steps: [
      { title: 'Resident creates a pass', desc: 'A resident sends their guest a digital visitor pass before they arrive.' },
      { title: 'Security verifies access', desc: 'At the gate, security checks the pass and confirms the visitor is expected.' },
      { title: 'Entry is recorded', desc: 'The entry is logged electronically, and the resident is notified.' },
      { title: 'Exit is recorded', desc: 'When the visitor leaves, the exit is logged to complete the record.' },
    ],
    cta: {
      heading: 'Give your security team clearer procedures',
      body: 'See how Supagate helps your team verify visitors, keep accurate records and work closely with residents and management.',
      button: { label: 'Book a Security Demo', href: CONTACT.security },
    },
  },

  'service-providers': {
    eyebrow: 'For Service Providers',
    heading: 'Connect with more customers within residential communities.',
    intro: 'Are you a plumber, electrician, cleaner, technician or other service professional? Supagate helps you become more visible to residents looking for everyday services. Connect with potential customers, receive enquiries and build relationships within managed residential communities.',
    primary: { label: 'Register Your Interest', href: CONTACT.provider },
    secondary: { label: 'How it works', href: '#steps' },
    visual: {
      phone: { src: '/hero-crops/08-services.png', alt: 'Supagate services screen listing local providers' },
      chips: [{ icon: 'handshake', title: 'New enquiry', sub: 'Plumbing · Palm Close' }],
    },
    benefitsHeading: 'Grow your business where residents live',
    benefits: [
      { icon: 'users',     title: 'Be visible to residents', desc: 'Get listed where residents of managed communities look for everyday services.' },
      { icon: 'mail',      title: 'Receive enquiries',       desc: 'Residents can reach you directly with service requests.' },
      { icon: 'calendar',  title: 'Manage bookings',         desc: 'Keep track of your service bookings in one place.' },
      { icon: 'handshake', title: 'Build relationships',     desc: 'Become a familiar, go-to provider for the communities you serve.' },
    ],
    stepsHeading: 'Joining as a service provider',
    steps: [
      { title: 'Register your interest', desc: 'Tell us about your business and the services you offer.' },
      { title: 'Complete onboarding', desc: 'Our team explains registration and onboarding requirements.' },
      { title: 'Get listed', desc: 'Your services become visible to residents in participating communities.' },
      { title: 'Receive enquiries', desc: 'Respond to residents and grow your customer relationships.' },
    ],
    cta: {
      heading: 'Ready to reach more residents?',
      body: 'Register your interest and our team will get in touch about joining Supagate as a service provider.',
      button: { label: 'Join as a Service Provider', href: CONTACT.provider },
    },
  },

  'property-developers': {
    eyebrow: 'For Property Developers',
    heading: 'Build more than properties. Create better living experiences.',
    intro: 'Supagate gives property developers and residential property owners the opportunity to introduce digital community management from the beginning. With visitor management, communication, payments and community services built into the residential experience, you offer buyers and residents an added layer of convenience and organisation.',
    primary: { label: 'Discuss a Partnership', href: CONTACT.partnership },
    secondary: { label: 'See how it works', href: '#steps' },
    visual: {
      web: { src: '/web-screenshots/residents.jpg', alt: 'Supagate web dashboard residents list' },
      phone: { src: '/hero-crops/01-home.png', alt: 'Supagate home screen' },
    },
    benefitsHeading: 'A connected community from day one',
    benefits: [
      { icon: 'sparkle',   title: 'A stronger selling point', desc: 'Offer prospective buyers a modern, organised living experience from the start.' },
      { icon: 'shield',    title: 'Organised access from handover', desc: 'Digital visitor management is ready before the first residents move in.' },
      { icon: 'wallet',    title: 'Payments in place',        desc: 'Community billing and payment records set up for residents and management.' },
      { icon: 'megaphone', title: 'Communication built in',   desc: 'A central channel for updates between management and residents.' },
      { icon: 'handshake', title: 'Community services',       desc: 'Residents can connect with service providers serving the development.' },
      { icon: 'clipboard', title: 'A smooth handover',        desc: 'Organised resident and unit records for the team that manages the property.' },
    ],
    stepsHeading: 'How a partnership works',
    steps: [
      { title: 'Talk to our team', desc: 'Share your development plans and timeline.' },
      { title: 'Plan the rollout', desc: 'Agree how Supagate fits your development and management model.' },
      { title: 'Set up before handover', desc: 'Units, access procedures and community information are configured.' },
      { title: 'Residents move in connected', desc: 'New residents join a community that already works.' },
    ],
    cta: {
      heading: 'Let’s build better living experiences together',
      body: 'Talk to us about bringing Supagate into your next residential development.',
      button: { label: 'Partner with Supagate', href: CONTACT.partnership },
    },
  },
}
