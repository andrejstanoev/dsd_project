import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import UnderRenovation from "../components/UnderRenovation.jsx";

export default function Kuzman(){
    return (
        <div className="pt-25 bg-[#d3d4e9]">
            <NavBar/>
            <div className="flex justify-center items-center min-h-screen">
                <UnderRenovation/>
            </div>
            <Footer/>
        </div>
    );
}