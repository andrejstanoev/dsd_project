import NavigationLink from "./NavigationLink.jsx"
import dsdlogo from "../images/dsdlogo.png"
import {Link, NavLink} from "react-router-dom";
export default function NavBar(){
    return(

        <nav className="flex items-center bg-[#f4f5fa] px-6 py-4 ">
            <Link to="/">
                <img alt="logo" src={dsdlogo} className="h-23 mr-8"/>
            </Link>
            <ul className="2xl:w-7xl lg:w-4xl xl:w-4xl  flex items-center  border-2 border-[#444692] bg-[#f4f5fa] rounded-full px-6 py-2 -mr-6 shadow-sm">
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
                className="flex items-center justify-center w-14 h-14 rounded-full bg-[#ffd166] border-2 border-[#444692] ">

                <svg className="w-7 h-7 text-[#444692]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                    <line x1="25" y1="25" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2"/>
                </svg>
            </button>

        </nav>
    )
}