import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Join from './pages/Join.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Join />
  </StrictMode>,
)
