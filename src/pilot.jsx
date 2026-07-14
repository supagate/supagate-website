import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Pilot from './pages/Pilot.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pilot />
  </StrictMode>,
)
