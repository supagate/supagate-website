export const STORE_URLS = {
  apple: 'https://apps.apple.com/ng/app/supagate/id6793204613',
  play:  'https://play.google.com/store/apps/details?id=co.supagate.supagate',
}

// Where a generic "Get the App" button should go: straight to the right
// store on a phone, or to the download section (both badges) on desktop.
export function getAppLink() {
  const ua = typeof navigator === 'undefined' ? '' : navigator.userAgent
  // iPadOS reports itself as Mac; touch support tells them apart.
  const isIOS = /iPhone|iPad|iPod/i.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)
  if (isIOS) return { href: STORE_URLS.apple, external: true }
  if (/Android/i.test(ua)) return { href: STORE_URLS.play, external: true }
  return { href: '/#download', external: false }
}
