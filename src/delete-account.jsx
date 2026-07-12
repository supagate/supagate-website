import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DeleteAccount from './pages/DeleteAccount.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DeleteAccount />
  </StrictMode>,
)
