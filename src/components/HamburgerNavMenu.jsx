
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import NavigationLink from "./NavigationLink.jsx";
import {useTranslation} from "react-i18next";
export default function HamburgerNavMenu( {setIsMenuOpen} ){
    const [isClicked, setIsClicked] = useState(false)
    const {t} = useTranslation();

    function handleToggleDomovi(){
        setIsClicked(curr=>!curr)
    }

    return (
        <div
            className="sm:hidden absolute top-24 left-0 w-full bg-[#f4f5fa] border border-[#444692] rounded-md mt-2 px-4 py-4 z-40 shadow-md ">
            <ul className="flex flex-col space-y-2">

                    <NavLink className="py-1 px-1 rounded hover:bg-indigo-200" onClick={()=>setIsMenuOpen(false)} to="/">{t("pocetna")}</NavLink>

                <li className=" cursor-pointer py-1 px-1 rounded hover:bg-indigo-200" onClick={handleToggleDomovi}>
                    <div className="flex items-center align-center">
                        {isClicked ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path fill="#5c5eaa"
                                      d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z"/>
                            </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path fill="#5c5eaa" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
                            </svg>
                        }
                        {t("domovi")}
                    </div>
                    { isClicked && <div className=" p-4 bg-[#f4f5fa]  flex flex-col z-20">
                        <NavLink className="py-1 px-1 rounded hover:bg-indigo-200"  to="/goce">Гоце</NavLink>
                        <NavLink className="py-1 px-1 rounded hover:bg-indigo-200"  to="/kuzman">Кузман</NavLink>
                        <NavLink className="py-1 px-1 rounded hover:bg-indigo-200"  to="/stiv">Стив</NavLink>
                    </div>}
                </li>

                <NavLink className="py-1 px-1 rounded hover:bg-indigo-200" onClick={() => setIsMenuOpen(false)}
                         to="/vesti">{t("vestiIObjavi")}</NavLink>

                <NavLink className="py-1 px-1 rounded hover:bg-indigo-200" onClick={() => setIsMenuOpen(false)}
                         to="/zanas">{t("zaNas")}</NavLink>

                <NavLink className="py-1 px-1 rounded hover:bg-indigo-200" onClick={() => setIsMenuOpen(false)}
                         to="/kontakt">{t("kontakt")}</NavLink>

                <NavLink className="py-1 px-1 rounded hover:bg-indigo-200" onClick={() => setIsMenuOpen(false)}
                         to="/dokumenti">{t("dokumenti")}</NavLink>

            </ul>
        </div>
    );
}