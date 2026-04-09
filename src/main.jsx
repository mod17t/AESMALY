import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Acceuil from './Pages/Acceuil'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Acceuil />
  </StrictMode>,
)
