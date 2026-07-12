import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AcceptInvite from './pages/AcceptInvite.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AcceptInvite />
  </StrictMode>,
)
