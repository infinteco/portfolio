import { useEffect, useRef } from 'react'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { about, experience, skills, certs } from '../data/content'

// Reveal timeline items as they scroll into view. Reduced-motion (or no
// IntersectionObserver) shows everything immediately — content is never gated.
function TimelineItem({ item }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      el.classList.add('in')
      return
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      }),
      { threshold: 0.25 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div className="tl-item reveal" ref={ref}>
      <div className="tl-when">{item.when}</div>
      <h3 className="tl-role">{item.role}</h3>
      <div className="tl-org"><b>{item.org}</b> · {item.place}</div>
      {item.desc && <p className="tl-desc">{item.desc}</p>}
      {item.metrics.length > 0 && (
        <div className="tl-metrics">
          {item.metrics.map((m) => (
            <div className="m" key={m.caption}>
              <div className="num">{m.value}<span className="u">{m.unit}</span></div>
              <div className="cap">{m.caption}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function About() {
  useDocumentMeta(
    'About — Harsh Gupta',
    'Harsh Gupta: B.Tech in Artificial Intelligence, now shipping production AI web apps. Experience, skills and certifications.'
  )

  return (
    <div className="page">
      <div className="wrap">
        {/* Bio */}
        <div className="sec-head"><span className="idx">01</span><h2>About</h2></div>
        <div className="about-grid">
          <p className="about-lead">
            A <b>B.Tech in Artificial Intelligence</b>, now shipping production AI web apps.
          </p>
          <div className="about-body">
            {about.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </div>
      </div>

      {/* Experience timeline */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><span className="idx">02</span><h2>Experience</h2></div>
          <div className="tl">
            {experience.map((item) => <TimelineItem key={item.role + item.when} item={item} />)}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><span className="idx">03</span><h2>Skills</h2></div>
          <div className="skills-grid">
            {skills.map((g) => (
              <div className="skgroup" key={g.group}>
                <h3><span className="gi">›</span> {g.group}</h3>
                <ul>{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><span className="idx">04</span><h2>Certifications</h2></div>
          <div className="certs">
            {certs.map((c) => (
              <div className={'cert' + (c.highlight ? ' hi' : '')} key={c.name}>
                <div className="ci">{c.issuer}</div>
                <div className="cn">{c.name}</div>
                {c.highlight && (
                  <div className="pct"><span className="num">{c.highlight}</span><span className="u">{c.highlightUnit}</span></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
