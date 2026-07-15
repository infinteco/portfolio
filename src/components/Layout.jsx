import { useEffect, useState, useCallback } from 'react'
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import { profile, resumeUrl } from '../data/content'

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

// One layout wraps every route: header nav, footer and theme toggle live here,
// so they are never repeated per page and their state survives route changes.
export default function Layout() {
  const location = useLocation()

  // Theme: null = follow the OS. An explicit value overrides for the session
  // only — this is React state, so nothing is written to storage.
  const [theme, setTheme] = useState(null)
  const [systemDark, setSystemDark] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  // Apply the override to <html>; remove it to fall back to the OS.
  useEffect(() => {
    const root = document.documentElement
    if (theme) root.setAttribute('data-theme', theme)
    else root.removeAttribute('data-theme')
  }, [theme])

  // Track OS changes so the icon stays correct while we are still following it.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e) => setSystemDark(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const isDark = theme ? theme === 'dark' : systemDark
  const toggle = useCallback(() => setTheme(isDark ? 'light' : 'dark'), [isDark])

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      <header className="nav">
        <div className="wrap nav-in">
          <Link className="brand" to="/" aria-label={`${profile.name} — home`}>
            <span className="dot" aria-hidden="true" /> {profile.name}
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
                aria-current={undefined /* NavLink sets aria-current="page" itself */}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <a className="nav-cta" href={resumeUrl} download>Résumé ↓</a>

          <button
            className="theme-btn"
            type="button"
            onClick={toggle}
            aria-pressed={isDark}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {isDark ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <ScrollToTop />

      {/* key on pathname replays the CSS-only route-in animation on each change.
          Content is rendered immediately; the animation only eases it in. */}
      <main id="main" tabIndex={-1}>
        <div className="route" key={location.pathname}>
          <Outlet />
        </div>
      </main>

      <footer>
        <div className="wrap foot-in">
          <span>© {new Date().getFullYear()} {profile.name} — {profile.location}</span>
          <span>Space Grotesk / Inter / JetBrains Mono</span>
          <span><Link to="/contact">Get in touch →</Link></span>
        </div>
      </footer>
    </>
  )
}
