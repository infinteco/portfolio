import { useMemo, useState } from 'react'
import { recommender } from '../data/content'

// --- tiny linear algebra: content-based recommendation via cosine similarity ---
const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0)
const norm = (a) => Math.sqrt(dot(a, a))
const cosine = (a, b) => {
  const d = norm(a) * norm(b)
  return d === 0 ? 0 : dot(a, b) / d
}

// Signature interaction: interest "seeds" and my work share one 6-dim feature
// space. Selected seeds sum into a profile vector; cosine similarity to each
// item yields a live ranked list — the same method as my Movie Recommender.
export default function Recommender() {
  const { seeds, items } = recommender
  const [selected, setSelected] = useState({}) // { seedId: true }

  const toggle = (id) => setSelected((s) => ({ ...s, [id]: !s[id] }))

  const ranked = useMemo(() => {
    const active = seeds.filter((s) => selected[s.id])
    if (active.length === 0) return null
    const profile = active
      .map((s) => s.v)
      .reduce((acc, v) => acc.map((x, i) => x + v[i]), [0, 0, 0, 0, 0, 0])
    return items
      .map((it) => ({ ...it, score: Math.round(cosine(profile, it.v) * 100) }))
      .sort((a, b) => b.score - a.score)
  }, [selected, seeds, items])

  return (
    <section className="rec" aria-labelledby="rec-label">
      <div className="rec-top">
        <span className="lbl mono" id="rec-label">Live demo — content-based recommender</span>
        <span className="hint">cosine similarity · 6-dim feature space · runs in your browser</span>
      </div>

      <div className="rec-body">
        <div className="rec-seeds">
          <p className="q">What are you into? Pick a few — I&rsquo;ll recommend where my work fits.</p>
          <div className="seedgrid" role="group" aria-label="Interest seeds">
            {seeds.map((s) => (
              <button
                key={s.id}
                type="button"
                className="seed"
                aria-pressed={!!selected[s.id]}
                onClick={() => toggle(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="rec-results">
          {!ranked && (
            <p className="rec-empty">Select an interest to compute recommendations.</p>
          )}
          {ranked && (
            <ol className="rec-list" aria-live="polite" aria-label="Recommended work, ranked by match">
              {ranked.map((r) => (
                <li className="rec-item" key={r.t}>
                  <span className="ri-title">{r.t}</span>
                  <span className="ri-score">{r.score}<span style={{ fontSize: '.7em' }}>%</span></span>
                  <span className="ri-blurb">{r.b}</span>
                  <span className="rec-bar"><i style={{ width: r.score + '%' }} /></span>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>

      <p className="rec-foot">
        Same technique as my 92%-accuracy Movie Recommender — vectors &rarr; cosine similarity &rarr; ranking.
      </p>
    </section>
  )
}
