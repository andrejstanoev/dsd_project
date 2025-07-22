
import {NavLink} from "react-router-dom";
export default function HamburgerNavMenu( {setIsMenuOpen} ){
    return (
        <div
            className="sm:hidden absolute top-full left-0 w-full bg-[#f4f5fa] border border-[#444692] rounded-md mt-2 px-4 py-4 z-40 shadow-md">
            <ul className="flex flex-col space-y-4">
                <li>
                    <NavLink onClick={()=>setIsMenuOpen(false)} to="/">Почетна</NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>setIsMenuOpen(false)} to="/vesti" >Вести и објави</NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>setIsMenuOpen(false)} to="/zanas" >За нас</NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>setIsMenuOpen(false)} to="/kontakt" >Контакт</NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>setIsMenuOpen(false)} to="/meni">Дневно мени</NavLink>
                </li>
            </ul>
        </div>
    );
}