import NavBar from "../components/NavBar.jsx";
import HomepageMain from "../components/HomepageMain.jsx";
import StudentsSectionHP from "../components/StudentsSectionHP.jsx";
import Footer from "../components/Footer.jsx";
import StudentsSectionHPV2 from "../components/StudentsSectionHPV2.jsx";

export default function HomePage(){
    return (
        <div className="pt-25 bg-[#d3d4e9]">
            <NavBar/>
            <HomepageMain/>
            {/*<StudentsSectionHP/>*/}
            <StudentsSectionHPV2/>
            <Footer/>




        </div>
    );
}