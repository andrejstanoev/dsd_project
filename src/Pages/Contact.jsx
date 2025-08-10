import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import InfoForContact from "../components/InfoForContact.jsx";
import Maps from "../components/Maps.jsx";

export default function Contact() {
    return (
        <div className=" min-h-screen flex flex-col pt-45 bg-[#d3d4e9] ">
            <NavBar/>
            <div className=" flex-1 mt-2 md:mt-4 lg:mt-8">
                <InfoForContact/>
                <Maps/>
            </div>
            <Footer/>
        </div>
    );
}