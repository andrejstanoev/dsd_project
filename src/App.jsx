import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Contact from "./Pages/Contact.jsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="zanas" element={<AboutUs/>}/>
              <Route path="kontakt" element={<Contact/>}/>
          </Routes>
      </BrowserRouter>

  )
}

export default App
