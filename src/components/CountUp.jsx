import { useEffect, useRef, useState } from 'react'

// Splits "₦4.2M", "20,000+", "99.9%" into prefix / number / suffix so the
// numeric part can tick up while the surrounding symbols stay fixed.
function parse(value) {
  const match = String(value).match(/^([^\d]*)([\d,]*\.?\d+)(.*)$/)
  if (!match) return null
  const [, prefix, num, suffix] = match
  const decimals = num.includes('.') ? num.split('.')[1].length : 0
  return { prefix, suffix, target: parseFloat(num.replace(/,/g, '')), decimals, commas: num.includes(',') }
}

function format(n, { decimals, commas }) {
  const fixed = n.toFixed(decimals)
  return commas ? Number(fixed).toLocaleString('en-US', { minimumFractionDigits: decimals }) : fixed
}

const easeOutExpo = t => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

export default function CountUp({ value, duration = 1400 }) {
  const parts = parse(value)
  const ref = useRef(null)
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const el = ref.current
    if (!el || !parts) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame
    setDisplay(parts.prefix + format(0, parts) + parts.suffix)

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const tick = now => {
        const t = Math.min((now - start) / duration, 1)
        setDisplay(parts.prefix + format(parts.target * easeOutExpo(t), parts) + parts.suffix)
        if (t < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, { threshold: 0.5 })

    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
    // value is static per instance
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration])

  return (
    <>
      {/* The hidden final value reserves the width so neighbours don't shift while counting. */}
      <span ref={ref} aria-hidden="true" style={{ display: 'inline-grid', fontVariantNumeric: 'tabular-nums' }}>
        <span style={{ gridArea: '1 / 1', visibility: 'hidden' }}>{value}</span>
        <span style={{ gridArea: '1 / 1' }}>{display}</span>
      </span>
      <span className="sr-only">{value}</span>
    </>
  )
}
