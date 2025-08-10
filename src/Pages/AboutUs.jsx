import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import AboutUsMain from "../components/AboutUsMain.jsx";

export default function AboutUs() {
    return(
        <div className="pt-25 bg-[#d3d4e9] flex flex-col">
            <NavBar/>
            <AboutUsMain/>
            <Footer/>
        </div>
    );
}