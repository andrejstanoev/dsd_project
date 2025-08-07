import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import App from './App.jsx'
import StudentsSectionHPV2 from "./components/StudentsSectionHPV2.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/*  <StudentsSectionHPV2></StudentsSectionHPV2>*/}
  </StrictMode>,
)
