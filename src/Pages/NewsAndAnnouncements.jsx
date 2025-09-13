import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import NewsSectionFB from "../components/NewsSectionFB.jsx";
import MonNews from "../components/MonNews.jsx"
import NewsNaslov from "../components/NewsNaslov.jsx";



export default function NewsAndAnnouncements() {
    return (
        <div className="min-h-screen flex flex-col pt-25 bg-[#d3d4e9]">
            <NavBar />
            <div className="flex-1">
            <NewsNaslov/>
            </div>
            <div
                className="
          flex flex-col items-center justify-center
          md:flex-row md:items-start md:justify-center
          lg:justify-center gap-8 mt-2 md:mt-4 lg:mt-4 max-w-7xl mx-auto px-4 w-full
        "
            >
                <div className="flex-1 max-w-lg">
                    <NewsSectionFB />
                </div>
                <div className="flex-1 max-w-lg">
                    <MonNews />
                </div>
            </div>
            <Footer />
        </div>
    );
}

