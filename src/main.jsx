import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles.css'

import Layout from './components/Layout'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'

// basename = "/portfolio/" (from vite.config base) so routes resolve under the
// GitHub Pages sub-path. import.meta.env.BASE_URL keeps the two in sync.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* Unknown paths fall back to Home */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
