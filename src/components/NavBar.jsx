import NavigationLink from "./NavigationLink.jsx"
import dsdlogo from "../images/dsdlogo.png"
import {Link, NavLink} from "react-router-dom";
import React, {useState} from "react";
import HamburgerNavMenu from "./HamburgerNavMenu.jsx";
import MacedonianFlag from "./MacedonianFlag.jsx";
import AlbanianFlag from "./AlbanianFlag.jsx";
import { useTranslation } from 'react-i18next';
import GreatBritainFlag from "./GreatBritainFlag.jsx";
export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const { t } = useTranslation();

    function handleToggleMenu() {
        setIsMenuOpen(curr => !curr)
    }

    function handleToggleDomovi(){
        setIsClicked(curr=>!curr)
    }


    return (
        <nav
            className=" fixed top-0 left-0 w-full z-50 flex justify-between md:flex md:justify-between items-center bg-[#f4f5fa] px-6 py-4">
            <Link to="/">
                <img alt="logo" src={dsdlogo} className="h-20"/>
            </Link>
            {/*old classes : "hidden md:flex flex items-center justify-between border-2 border-[#444692] bg-[#d3d4e9] rounded-full px-6  shadow-sm"*/}
            <ul className="hidden md:flex flex items-center justify-between bg-[#d3d4e9]/70 shadow-xl backdrop-blur-xl rounded-full px-6 py-1 ring-1 ring-white/15">

                    <NavigationLink to="/">{t("pocetna")}</NavigationLink>

                <li className=" relative cursor-pointer md:mx-2 lg:mx-3 font-bold text-[#353767] text-[10px] md:text-[14px] lg:text-[16px] xl:text-[17px]  xl:px-4 xl:py-1 rounded-lg hover:bg-[#e8eafc]"
                    onClick={handleToggleDomovi}
                >
                    <div className="flex items-center align-center">
                        {isClicked ? <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                                <path fill="#5c5eaa"
                                      d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z"/>
                            </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                                <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                            </svg>
                        }
                        {t("domovi")}
                    </div>
                    { isClicked && <div className=" animate-fade-in rounded-xl  shadow-lg p-4 bg-[#f4f5fa] absolute flex flex-col z-20">
                        <NavigationLink to="/goce">Гоце</NavigationLink>
                        <NavigationLink to="/kuzman">Кузман</NavigationLink>
                        <NavigationLink to="/stiv">Стив</NavigationLink>
                    </div>}
                </li>

                    <NavigationLink to="/vesti">{t("vestiIObjavi")}</NavigationLink>


                    <NavigationLink to="/zanas">{t("zaNas")}</NavigationLink>

                    <NavigationLink to="/kontakt">{t("kontakt")}</NavigationLink>

                    <NavigationLink to="/meni">Документи</NavigationLink>

                {/*<li>*/}
                {/*    <button*/}
                {/*        className=" hidden sm:flex items-center justify-center w-14 h-14 rounded-full bg-[#ffd166] border-2 border-[#444692]">*/}

                {/*        /!*<svg className="w-7 h-7 text-[#444692]" fill="none" stroke="currentColor" viewBox="0 0 24 24">*!/*/}
                {/*        /!*    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>*!/*/}
                {/*        /!*    <line x1="25" y1="25" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2"/>*!/*/}
                {/*        /!*</svg>*!/*/}
                {/*    </button>*/}
                {/*</li>*/}
            </ul>
            {/*old class md:ml-auto*/}
            <div className=" space-x-2">
                <MacedonianFlag/>
                <AlbanianFlag/>
                <GreatBritainFlag/>
            </div>

            {/*Hamburger ikona*/}
            <button onClick={handleToggleMenu}
                    className="md:hidden flex items-center justify-center w-10 h-10 rounded bg-[#ffd166] border-2 border-[#444692] cursor-pointer"
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