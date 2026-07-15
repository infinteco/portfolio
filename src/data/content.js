// ============================================================================
//  SINGLE SOURCE OF TRUTH
//  Every page imports from here. Edit content in this one file — nowhere else.
// ============================================================================

import portraitUrl from '../assets/harsh-photo.jpeg'

// Resume lives in /public, so it is served at <base>HarshGupta_Resume.pdf.
// import.meta.env.BASE_URL is "/portfolio/" in this project.
export const resumeUrl = import.meta.env.BASE_URL + 'HarshGupta_Resume.pdf'
export const portrait = portraitUrl

export const profile = {
  name: 'Harsh Gupta',
  firstName: 'Harsh',
  lastName: 'Gupta',
  role: 'Software Engineer — AI/ML + Backend',
  pitch: 'I build AI-driven web applications — backend APIs, ML pipelines, and the systems that connect them.',
  current: {
    title: 'Software Engineer',
    org: 'Ethara AI',
    place: 'Gurugram',
    when: 'Feb 2025 → present',
  },
  location: 'Delhi NCR, India',
  email: 'guharsh3@gmail.com',
  github: 'https://github.com/infinteco',
  linkedin: 'https://www.linkedin.com/in/harsh-gupta-967b7a256',
}

// Three headline numbers surfaced on Home. Each links to where it comes from.
export const proofNumbers = [
  { value: '92', unit: '%', label: 'top-k accuracy', source: 'Movie Recommendation System', to: '/work' },
  { value: '35', unit: '%', label: 'faster NLP inference', source: 'Ethara AI — pipeline optimisation', to: '/about' },
  { value: '99.27', unit: 'pct', label: 'Naukri Young Turks', source: 'National ranking', to: '/about' },
]

// First-person bio, split into paragraphs.
export const about = [
  'I studied Artificial Intelligence at NIET, Greater Noida (2021–2025, 8.0 CGPA), and I have spent the time since turning models into things people actually use.',
  'At Ethara AI I build the full path from a Python/Flask service to a React interface — auth, sessions, inference, deployment. What I care about most is the boundary between an ML model and the system that serves it: making that seam fast, reliable, and boring in the best way.',
  'I like problems where the answer is part statistics and part engineering, and I would rather show a number than a buzzword.',
]

// ---------------------------------------------------------------------------
//  PROJECTS  (cats drive the /work filter: 'aiml' | 'backend' | 'data')
// ---------------------------------------------------------------------------
export const projects = [
  {
    id: 'movie',
    n: '01',
    title: 'Movie Recommendation System',
    cats: ['aiml'],
    catLabel: 'AI/ML',
    problem: 'Help viewers find their next film without relying on a rating history.',
    metric: { value: '92', unit: '%', caption: 'top-k accuracy · +60% return visits' },
    stack: ['Python', 'Flask', 'NLP', 'TF-IDF', 'Cosine similarity'],
    role: 'Built the recommender end to end — data, model, and the API that served it.',
    approach:
      'Vectorised movie metadata (genres, cast, keywords) with TF-IDF and ranked candidates by cosine similarity, exposed through a Flask API. Tuned the feature weighting to 92% top-k accuracy; the better matches drove a 60% lift in return visits.',
    github: 'https://github.com/infinteco',
  },
  {
    id: 'car',
    n: '02',
    title: 'Car Price Prediction',
    cats: ['aiml', 'data'],
    catLabel: 'AI/ML · Data',
    problem: 'Estimate a fair resale price from noisy, inconsistent listing data.',
    metric: { value: '↓', unit: '', caption: 'prediction error, well below baseline' },
    stack: ['Python', 'Scikit-Learn', 'Pandas', 'Regression', 'Cross-validation'],
    role: 'Owned the pipeline end to end, from raw listings to a tuned, evaluated model.',
    approach:
      'Cleaned and encoded the data, engineered features (vehicle age, mileage bands, brand tiers), compared regressors, and tuned hyperparameters with cross-validation — cutting prediction error substantially against the baseline.',
    github: 'https://github.com/infinteco',
  },
  {
    id: 'hospital',
    n: '03',
    title: 'Hospital Management System',
    cats: ['backend'],
    catLabel: 'Backend',
    problem: 'Manage patients, doctors and appointments through one reliable system.',
    metric: { value: '20', unit: '%', caption: 'faster data retrieval' },
    stack: ['Java', 'Spring Boot', 'JDBC', 'MySQL'],
    role: 'Designed and built the backend and data model.',
    approach:
      'Modelled patients, doctors and appointments in MySQL, exposed full CRUD through Spring Boot with JDBC, and indexed the hot query paths — cutting data-retrieval time by 20%.',
    github: 'https://github.com/infinteco',
  },
]

export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'aiml', label: 'AI/ML' },
  { id: 'backend', label: 'Backend' },
  { id: 'data', label: 'Data' },
]

// ---------------------------------------------------------------------------
//  EXPERIENCE + EDUCATION  (rendered as the vertical timeline on /about)
// ---------------------------------------------------------------------------
export const experience = [
  {
    when: 'Feb 2025 — Present',
    role: 'Software Engineer',
    org: 'Ethara AI',
    place: 'Gurugram',
    desc: 'Build AI-driven web apps for education and interactive content. Ship Python/Flask APIs integrated with React frontends, and own auth, session handling and secure deployment across microservices.',
    metrics: [
      { value: '35', unit: '%', caption: 'faster NLP inference after pipeline optimisation' },
    ],
  },
  {
    when: 'Jun 2024 — Aug 2024',
    role: 'Data Analyst Intern',
    org: 'Sorbitol Technologies',
    place: 'Noida',
    desc: 'Analysed large datasets for actionable trends and built visualisations and reports for stakeholders. Hands-on with data cleaning, preprocessing and model evaluation.',
    metrics: [],
  },
  {
    when: '2021 — 2025',
    role: 'B.Tech, Artificial Intelligence',
    org: 'NIET',
    place: 'Greater Noida',
    desc: 'Foundations in machine learning, statistics and software engineering.',
    metrics: [{ value: '8.0', unit: '/10', caption: 'CGPA' }],
  },
]

// ---------------------------------------------------------------------------
//  SKILLS  (grouped, shown visually on /about)
// ---------------------------------------------------------------------------
export const skills = [
  { group: 'Languages', items: ['Python', 'Java', 'SQL'] },
  { group: 'Machine Learning', items: ['Scikit-Learn', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib'] },
  { group: 'Web', items: ['Flask', 'React.js', 'HTML', 'CSS', 'JavaScript'] },
  { group: 'Databases', items: ['MySQL', 'MongoDB', 'SQLite'] },
  { group: 'Tools', items: ['Git', 'VS Code', 'IntelliJ', 'Eclipse'] },
  { group: 'Concepts', items: ['Data preprocessing', 'Model evaluation', 'Web scraping', 'REST APIs'] },
]

// ---------------------------------------------------------------------------
//  CERTIFICATIONS  (compact row on /about; first one is highlighted)
// ---------------------------------------------------------------------------
export const certs = [
  { issuer: 'Naukri Campus', name: 'Young Turks', highlight: '99.27', highlightUnit: 'percentile' },
  { issuer: 'Univ. of Michigan', name: 'Python Basics' },
  { issuer: 'IBM', name: 'Introduction to AI' },
  { issuer: 'IBM', name: 'Machine Learning with Python' },
  { issuer: 'Univ. of London', name: 'Machine Learning for All' },
]

// ---------------------------------------------------------------------------
//  SIGNATURE INTERACTION — content-based recommender
//  Interest "seeds" and my work share one 6-dim feature space:
//  [ nlp, recsys, prediction, backend, data, web ]. Selecting seeds builds a
//  profile vector; cosine similarity to each item produces a ranked list —
//  the same technique behind the Movie Recommendation System above.
// ---------------------------------------------------------------------------
export const recommender = {
  axes: ['nlp', 'recsys', 'prediction', 'backend', 'data', 'web'],
  seeds: [
    { id: 'nlp', label: 'NLP & language', v: [1, 0.3, 0, 0.2, 0.1, 0.2] },
    { id: 'rec', label: 'Recommendation', v: [0.4, 1, 0.2, 0.1, 0.2, 0.2] },
    { id: 'pred', label: 'Prediction & ML', v: [0.1, 0.2, 1, 0.1, 0.5, 0] },
    { id: 'api', label: 'Backend & APIs', v: [0.1, 0.1, 0.1, 1, 0.2, 0.4] },
    { id: 'data', label: 'Data & analytics', v: [0, 0, 0.4, 0.1, 1, 0.1] },
    { id: 'web', label: 'Web apps', v: [0.2, 0.2, 0, 0.5, 0.1, 1] },
  ],
  items: [
    { t: 'Movie Recommendation System', b: 'Content-based recommender · 92% accuracy', v: [0.8, 1, 0.2, 0.5, 0.4, 0.5] },
    { t: 'Ethara AI — Software Engineer', b: 'AI web apps · 35% faster NLP inference', v: [0.9, 0.3, 0.3, 1, 0.3, 0.9] },
    { t: 'Car Price Prediction', b: 'End-to-end ML pipeline · error ↓', v: [0, 0, 1, 0.2, 0.8, 0.1] },
    { t: 'Hospital Management System', b: 'Spring Boot CRUD · 20% faster retrieval', v: [0, 0, 0, 1, 0.5, 0.4] },
    { t: 'Data Analyst — Sorbitol', b: 'Trends, dashboards & reporting', v: [0.1, 0, 0.4, 0.1, 1, 0.2] },
  ],
}
