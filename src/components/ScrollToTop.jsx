import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Reset scroll to the top whenever the route changes.
// 'instant' so it never fights the page-transition fade.
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}
