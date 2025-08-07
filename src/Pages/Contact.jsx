import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import InfoForContact from "../components/InfoForContact.jsx";

export default function Contact() {
    return (
        <div className="pt-25 bg-[#d3d4e9]">
            <NavBar/>
            <div>
                <InfoForContact/>
            </div>
            <Footer/>
        </div>
    );
}