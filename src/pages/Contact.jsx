import { useState, useRef, useEffect } from 'react'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { profile, resumeUrl } from '../data/content'

export default function Contact() {
  useDocumentMeta(
    'Contact — Harsh Gupta',
    'Get in touch with Harsh Gupta — email, résumé, GitHub and LinkedIn.'
  )

  const [copied, setCopied] = useState(false)
  const timer = useRef(null)
  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async () => {
    const email = profile.email
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email)
      } else {
        // Fallback for non-secure contexts
        const ta = document.createElement('textarea')
        ta.value = email
        ta.style.position = 'absolute'
        ta.style.left = '-9999px'
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
      }
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  const [user, domain] = profile.email.split('@')

  return (
    <div className="wrap contact-wrap">
      <p className="contact-kicker mono">Let&rsquo;s build something.</p>

      <a className="contact-email" href={`mailto:${profile.email}`}>
        {user}<span className="at">@</span>{domain}
      </a>

      <div className="contact-actions">
        <button className="btn" type="button" onClick={copy}>
          <span><span className="k">Copy</span>Email address</span>
          {copied
            ? <span className="copied" role="status">✓ copied</span>
            : <span className="arw" aria-hidden="true">⎘</span>}
        </button>

        <a className="btn primary" href={`mailto:${profile.email}`}>
          <span><span className="k">Write</span>Send me an email</span>
          <span className="arw" aria-hidden="true">→</span>
        </a>

        <a className="btn" href={resumeUrl} download>
          <span><span className="k">Download</span>Résumé (PDF)</span>
          <span className="arw" aria-hidden="true">↓</span>
        </a>

        <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
          <span><span className="k">Code</span>GitHub</span>
          <span className="arw" aria-hidden="true">↗</span>
        </a>

        <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          <span><span className="k">Connect</span>LinkedIn</span>
          <span className="arw" aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  )
}
