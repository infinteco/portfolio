import { Link } from 'react-router-dom'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useReveal } from '../hooks/useReveal'
import Recommender from '../components/Recommender'
import CountUp from '../components/CountUp'
import { profile, proofNumbers, portrait } from '../data/content'

export default function Home() {
  useDocumentMeta(
    'Harsh Gupta — Software Engineer, AI/ML + Backend',
    'Harsh Gupta builds AI-driven web applications — backend APIs, ML pipelines, and the systems that connect them. Software Engineer at Ethara AI, Delhi NCR.'
  )

  const c = profile.current
  const proofRef = useReveal()

  return (
    <section className="page-lead hero" aria-labelledby="hero-name">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <p className="role-line mono">
              <span className="live" aria-hidden="true" />
              {c.title} — {c.org} · {c.place} · {c.when}
            </p>
            <h1 id="hero-name">{profile.firstName}<br /><span className="last">{profile.lastName}</span></h1>
            <p className="pitch">
              I build <b>AI-driven web applications</b> — backend APIs, ML pipelines, and the systems that connect them.
            </p>
            <div className="hero-cta">
              <Link className="btn-link solid" to="/work">See the work <span className="arw" aria-hidden="true">→</span></Link>
              <Link className="btn-link" to="/about">More about me <span className="arw" aria-hidden="true">→</span></Link>
            </div>
          </div>

          <figure className="portrait-panel">
            <img
              className="portrait"
              src={portrait}
              alt="Harsh Gupta, a software engineer, in a black suit against a plain background."
              width="1024"
              height="1180"
            />
            <figcaption className="portrait-tag">Harsh Gupta / 2025</figcaption>
          </figure>
        </div>

        {/* Signature interaction */}
        <Recommender />

        {/* Three proof numbers pulled forward, each a path into the site */}
        <div className="proof reveal-up" ref={proofRef} aria-label="Highlights">
          {proofNumbers.map((p) => (
            <Link key={p.label} to={p.to}>
              <span className="pv"><CountUp value={p.value} className="num" /><span className="u">{p.unit}</span></span>
              <div className="pl">{p.label}</div>
              <div className="ps">{p.source}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
