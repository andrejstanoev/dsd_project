import NavBar from "../components/NavBar.jsx";
import HomepageMain from "../components/HomepageMain.jsx";
import StudentsSectionHP from "../components/StudentsSectionHP.jsx";
import Footer from "../components/Footer.jsx";

export default function HomePage(){
    return (
        <div className="pt-25 bg-[#ebecf3] h-screen">
            <NavBar/>
            <HomepageMain/>
            <StudentsSectionHP/>
            <Footer/>




        </div>
    );
}