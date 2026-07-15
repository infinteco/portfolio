import { useState, useMemo } from 'react'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { projects, projectFilters } from '../data/content'

function ProjectCard({ p }) {
  const [open, setOpen] = useState(false)
  const moreId = `more-${p.id}`
  return (
    <article className={'card' + (open ? ' open' : '')}>
      <div className="c-top">
        <span className="c-cat mono">{p.catLabel}</span>
        <span className="c-n mono">{p.n}</span>
      </div>
      <h3>{p.title}</h3>
      <p className="c-prob">{p.problem}</p>

      <div className="c-metric">
        <span className="num">{p.metric.value}</span>
        {p.metric.unit && <span className="unit">{p.metric.unit}</span>}
        <span className="cap">{p.metric.caption}</span>
      </div>

      <div className="chips">
        {p.stack.map((s) => <span className="chip" key={s}>{s}</span>)}
      </div>

      <div className="c-foot">
        <button
          className="disclose"
          type="button"
          aria-expanded={open}
          aria-controls={moreId}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Hide detail' : 'Problem, approach & role'} <span className="arw" aria-hidden="true">›</span>
        </button>
      </div>

      <div className="c-more" id={moreId}>
        <div><div className="inner">
          <h4>Problem</h4><p>{p.problem}</p>
          <h4>My role</h4><p>{p.role}</p>
          <h4>Approach</h4><p>{p.approach}</p>
          <h4>Stack</h4><p>{p.stack.join(' · ')}</p>
          <a className="gh" href={p.github} target="_blank" rel="noopener noreferrer">View on GitHub ↗</a>
        </div></div>
      </div>
    </article>
  )
}

export default function Work() {
  useDocumentMeta(
    'Work — Harsh Gupta',
    'Selected projects by Harsh Gupta across AI/ML, backend and data: a content-based movie recommender, a car-price ML pipeline, and a Spring Boot hospital system.'
  )

  const [filter, setFilter] = useState('all')
  const shown = useMemo(
    () => projects.filter((p) => filter === 'all' || p.cats.includes(filter)),
    [filter]
  )

  return (
    <div className="page">
      <div className="wrap">
        <div className="sec-head">
          <span className="idx">02</span>
          <h2>Selected work</h2>
          <p className="note">
            Three projects across the stack. Filter by area, or open a project for the full problem,
            my approach, the stack and the outcome.
          </p>
        </div>

        <div className="filters" role="group" aria-label="Filter projects by area">
          <span className="flabel mono">Filter</span>
          {projectFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              className="filter"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
          <span className="count" aria-live="polite">
            {shown.length} {shown.length === 1 ? 'project' : 'projects'}
          </span>
        </div>

        <div className="proj-grid">
          {shown.map((p) => <ProjectCard key={p.id} p={p} />)}
        </div>
      </div>
    </div>
  )
}
