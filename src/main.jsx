import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import App from './App.jsx'
import StudentsSectionHPV2 from "./components/StudentsSectionHPV2.jsx";
import UnderRenovation from "./components/UnderRenovation.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
