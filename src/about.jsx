import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AboutUs from './pages/AboutUs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AboutUs />
  </StrictMode>,
)
