import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SolutionPage from './pages/SolutionPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SolutionPage slug="service-providers" />
  </StrictMode>,
)
