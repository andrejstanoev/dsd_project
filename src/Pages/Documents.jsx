import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import DocumentsMain from "../components/DocumentsMain.jsx";

export  default  function Documents(){
    return (
        <div className="min-h-screen flex flex-col bg-[#d3d4e9] pt-25">
            <NavBar/>
            <DocumentsMain/>
            <Footer/>
        </div>
    )
}