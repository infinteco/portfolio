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
  role: 'Software Engineer — AI Engineering + Backend',
  pitch: 'I build reliable, scalable AI software — evaluation pipelines, ML services, and the backends that make them useful.',
  current: {
    title: 'Software Engineer',
    org: 'Ethara AI',
    place: 'Gurugram',
    when: 'Feb 2025 → present',
  },
  location: 'Delhi NCR, India',
  phone: '+91 8948887734',
  email: 'guharsh3@gmail.com',
  github: 'https://github.com/infinteco',
  linkedin: 'https://www.linkedin.com/in/harsh-gupta-967b7a256',
}

// Three headline numbers surfaced on Home. Each links to where it comes from.
export const proofNumbers = [
  { value: '0.921', unit: '', label: 'R² on used-car price prediction', source: 'XGBoost · 5-fold CV', to: '/work' },
  { value: '4800', unit: '', label: 'films indexed in recommender', source: 'TMDB · TF-IDF + cosine', to: '/work' },
  { value: '99.27', unit: 'pct', label: 'Naukri Young Turks', source: 'National assessment', to: '/about' },
]

// First-person bio, split into paragraphs.
export const about = [
  'I studied Artificial Intelligence at NIET, Greater Noida (2021–2025, 8.0 CGPA), and I have spent the time since turning models into things people actually use.',
  'At Ethara AI I work on AI engineering — building Python tools and evaluation pipelines that assess model outputs, surface failure patterns, and improve the quality of generated code. The work spans prompt refinement, output validation, automated testing, and running models in isolated, reproducible Docker environments.',
  'I care about the seam between an ML model and the system that serves it: making that boundary fast, reliable, and boring in the best way. I would rather show a number than a buzzword.',
]

// ---------------------------------------------------------------------------
//  PROJECTS  (cats drive the /work filter: 'aiml' | 'backend' | 'data')
// ---------------------------------------------------------------------------
export const projects = [
  {
    id: 'car',
    n: '01',
    title: 'Used-Car Price Prediction',
    cats: ['aiml', 'data'],
    catLabel: 'AI/ML · Data',
    problem: 'Give a reliable fair-value estimate for noisy, inconsistent used-car listings.',
    metric: { value: '0.921', unit: '', caption: 'R² on held-out test set · MAE ≈ ₹70K' },
    stack: ['Python', 'XGBoost', 'Scikit-Learn', 'MLflow', 'FastAPI', 'Docker'],
    role: 'Owned the full ML service end to end — data, model, API, UI, CI.',
    approach:
      'Benchmarked four regressors on the CarDekho dataset with 5-fold cross-validation and tuned XGBoost to R² = 0.921 and MAE ≈ ₹70K on a held-out test set. Packaged feature engineering, preprocessing and the model as a single serialized pipeline to prevent train/serve skew, served through a FastAPI endpoint and a Streamlit UI with SHAP explanations, and backed the whole thing with 41 pytest tests running in GitHub Actions CI.',
    github: 'https://github.com/infinteco/car-price-prediction',
  },
  {
    id: 'hospital',
    n: '02',
    title: 'Hospital Management System',
    cats: ['backend'],
    catLabel: 'Backend',
    problem: 'Manage patients, doctors and appointments through one secure, reliable system.',
    metric: { value: '3', unit: '', caption: 'JWT-scoped roles · Admin / Doctor / Patient' },
    stack: ['Java', 'Spring Boot', 'JWT', 'MySQL', 'React', 'Flyway', 'Testcontainers'],
    role: 'Designed and built the layered REST API, the data model and the React dashboard.',
    approach:
      'Built a layered Spring Boot REST API for patients, doctors and appointments with JWT-based role access (Admin, Doctor, Patient) and ownership checks on sensitive routes. Prevented doctor double-booking at the database level with a generated column and a unique index, managed schema evolution through Flyway, and covered the critical paths with Testcontainers integration tests. A React dashboard sits on top for day-to-day use.',
    github: 'https://github.com/infinteco/hospital-management',
  },
  {
    id: 'movie',
    n: '03',
    title: 'Movie Recommendation System',
    cats: ['aiml'],
    catLabel: 'AI/ML',
    problem: 'Help viewers find their next film without needing a rating history.',
    metric: { value: '4800', unit: '', caption: '~4,800 TMDB films · TF-IDF + cosine' },
    stack: ['Python', 'Scikit-Learn', 'FastAPI', 'RapidFuzz', 'React'],
    role: 'Built the recommender end to end — model, API, search, frontend and evaluation.',
    approach:
      'Vectorised metadata for ~4,800 TMDB films with TF-IDF, ranked candidates by cosine similarity, and blended the score with an IMDb-style weighted rating so both relevance and quality count. A FastAPI backend serves recommendations with typo-tolerant title search via RapidFuzz, a React frontend presents the results, and I evaluated the system with Precision@k, Recall@k and catalog coverage.',
    github: 'https://github.com/infinteco/movie-recommender',
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
    desc: 'AI engineering: Python tools and workflows that support model development, testing and evaluation. Build AI evaluation pipelines to assess outputs, identify failure patterns and improve generated-code quality; apply prompt refinement, output validation and iterative testing; automate data processing and testing; and run models in isolated, reproducible Docker environments. Use Git and GitHub for version control, collaborative development and code review.',
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
  { group: 'Languages', items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'] },
  { group: 'AI & ML', items: ['LLMs', 'Prompt Engineering', 'Model Evaluation', 'AI Workflow Automation'] },
  { group: 'AI Engineering', items: ['Evaluation Pipelines', 'Output Validation', 'Generated-Code Quality', 'Data Processing'] },
  { group: 'Backend & Web', items: ['FastAPI', 'Flask', 'Spring Boot', 'React.js', 'REST APIs'] },
  { group: 'Libraries & Data', items: ['NumPy', 'Pandas', 'Scikit-Learn', 'XGBoost', 'MLflow'] },
  { group: 'DevOps', items: ['Git', 'GitHub', 'Docker', 'Containerization', 'CI/CD (GitHub Actions)'] },
  { group: 'Databases', items: ['MySQL', 'MongoDB', 'SQLite'] },
  { group: 'Core', items: ['DSA', 'OOP', 'Software Testing', 'Performance Optimization', 'Debugging'] },
]

// ---------------------------------------------------------------------------
//  CERTIFICATIONS  (compact row on /about; first one is highlighted)
// ---------------------------------------------------------------------------
export const certs = [
  { issuer: 'Naukri Campus', name: 'Young Turks', highlight: '99.27', highlightUnit: 'percentile' },
  { issuer: 'IBM', name: 'Machine Learning with Python' },
  { issuer: 'Univ. of London', name: 'Machine Learning for All' },
  { issuer: 'Univ. of Michigan', name: 'Python Basics' },
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
    { t: 'Movie Recommendation System', b: 'Content-based recommender · ~4,800 TMDB films', v: [0.8, 1, 0.2, 0.5, 0.4, 0.5] },
    { t: 'Ethara AI — Software Engineer', b: 'AI evaluation pipelines · output validation', v: [0.9, 0.3, 0.3, 1, 0.5, 0.6] },
    { t: 'Used-Car Price Prediction', b: 'XGBoost pipeline · R² 0.921 · 41 tests in CI', v: [0.1, 0, 1, 0.5, 0.8, 0.3] },
    { t: 'Hospital Management System', b: 'Spring Boot REST API · JWT role-based access', v: [0, 0, 0, 1, 0.4, 0.5] },
  ],
}
