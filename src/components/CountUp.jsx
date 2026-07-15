import { useEffect, useRef, useState } from 'react'

// Animated number that counts up to its target when scrolled into view.
// Handles decimals (99.27, 8.0). Non-numeric values (e.g. "↓") render as-is.
// Respects prefers-reduced-motion (shows the final value immediately).
export default function CountUp({ value, className, duration = 1300 }) {
  const raw = String(value).trim()
  const target = parseFloat(raw)
  const numeric = /^-?\d*\.?\d+$/.test(raw)
  const decimals = numeric && raw.includes('.') ? raw.split('.')[1].length : 0

  const ref = useRef(null)
  const [display, setDisplay] = useState(numeric ? fmt(0, decimals) : raw)

  useEffect(() => {
    if (!numeric) return
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      setDisplay(fmt(target, decimals))
      return
    }

    let raf = 0
    let settle = 0
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return
        io.unobserve(e.target)
        // Smooth count via the timestamp rAF passes to its callback.
        let start = null
        const step = (now) => {
          if (start === null) start = now
          const t = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
          setDisplay(fmt(target * eased, decimals))
          if (t < 1) raf = requestAnimationFrame(step)
          else setDisplay(fmt(target, decimals))
        }
        raf = requestAnimationFrame(step)
        // Backstop: guarantee the exact final value even if rAF is throttled
        // (e.g. a backgrounded tab), so a number can never get stuck mid-count.
        settle = setTimeout(() => setDisplay(fmt(target, decimals)), duration + 120)
      }),
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf); clearTimeout(settle) }
  }, [numeric, target, decimals, duration])

  return <span ref={ref} className={className}>{display}</span>
}

function fmt(n, decimals) {
  return decimals ? n.toFixed(decimals) : String(Math.round(n))
}
