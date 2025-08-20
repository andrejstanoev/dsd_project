import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Contact from "./Pages/Contact.jsx";
import Goce from "./Pages/Goce.jsx";
import Kuzman from "./Pages/Kuzman.jsx";
import Stiv from "./Pages/Stiv.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import NewsAndAnnouncements from "./Pages/NewsAndAnnouncements.jsx";

function App() {

  return (
      <BrowserRouter>
          <ScrollToTop/>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="zanas" element={<AboutUs/>}/>
              <Route path="kontakt" element={<Contact/>}/>
              <Route path="goce" element={<Goce/>}/>
              <Route path="kuzman" element={<Kuzman/>}/>
              <Route path="stiv" element={<Stiv/>}/>
              <Route path="vesti" element={<NewsAndAnnouncements/>}/>
          </Routes>
      </BrowserRouter>

  )
}

export default App
