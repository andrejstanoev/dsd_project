import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import GoceMain from "../components/GoceMain.jsx";

export default function Goce(){
    return (
        <div className="min-h-screen flex flex-col bg-[#d3d4e9] pt-25">
            <NavBar/>
            <GoceMain/>
            <Footer/>
        </div>
    );
}