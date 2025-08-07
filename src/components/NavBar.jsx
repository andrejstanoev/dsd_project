import NavigationLink from "./NavigationLink.jsx"
import dsdlogo from "../images/dsdlogo.png"
import {Link, NavLink} from "react-router-dom";
import {useState} from "react";
import HamburgerNavMenu from "./HamburgerNavMenu.jsx";
export default function NavBar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function handleToggleMenu(){
        setIsMenuOpen(curr=>!curr)
    }
        return(
        <nav className=" fixed top-0 left-0 w-full z-50 flex justify-between sm:flex sm:justify-start items-center bg-[#f4f5fa] px-6 py-4">
            <Link to="/">
                <img alt="logo" src={dsdlogo} className="h-23 mr-8"/>
            </Link>
            <ul className=" hidden sm:flex 2xl:w-7xl lg:w-4xl xl:w-4xl  flex items-center  border-2 border-[#444692] bg-[#f4f5fa] rounded-full px-6 py-2 -mr-6 shadow-sm">
                <li className="mx-4">
                    <NavigationLink to="/">Почетна</NavigationLink>
                </li>
                <li className="mx-4">
                    <NavigationLink to="/vesti">Вести и објави</NavigationLink>
                </li>
                <li className="mx-4">
                    <NavigationLink to="/zanas">За нас</NavigationLink>
                </li>
                <li className="mx-4">
                    <NavigationLink to="/kontakt">Контакт</NavigationLink>
                </li>
                <li className="mx-4">
                    <NavigationLink to="/meni">Дневно мени</NavigationLink>
                </li>
            </ul>
            <button
                className=" hidden sm:flex items-center justify-center w-14 h-14 rounded-full bg-[#ffd166] border-2 border-[#444692]">

                <svg className="w-7 h-7 text-[#444692]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                    <line x1="25" y1="25" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2"/>
                </svg>
            </button>

            {/*Hamburger ikona*/}
            <button onClick={handleToggleMenu}
                className="sm:hidden flex items-center justify-center w-10 h-10 rounded bg-[#ffd166] border-2 border-[#444692] cursor-pointer"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2"
                     viewBox="0 0 24 24" className="w-6 h-6 text-[#444692]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
            {isMenuOpen && <HamburgerNavMenu setIsMenuOpen={setIsMenuOpen}/>}
        </nav>
    )
}