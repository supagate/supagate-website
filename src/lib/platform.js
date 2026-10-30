// Which phone the visitor is on, to show their app store first and to only
// try opening the app where it can be installed.
export function detectPlatform(userAgent = navigator.userAgent) {
  if (/iPhone|iPad|iPod/i.test(userAgent)) return 'ios'
  // iPadOS reports itself as a Mac; touch gives it away.
  if (/Macintosh/i.test(userAgent) && navigator.maxTouchPoints > 1) return 'ios'
  if (/Android/i.test(userAgent)) return 'android'
  return 'desktop'
}
