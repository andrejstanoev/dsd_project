
import {NavLink} from "react-router-dom";
export default function HamburgerNavMenu( {setIsMenuOpen} ){
    return (
        <div
            className="sm:hidden absolute top-full left-0 w-full bg-[#f4f5fa] border border-[#444692] rounded-md mt-2 px-4 py-4 z-40 shadow-md ">
            <ul className="flex flex-col space-y-2">

                    <NavLink className="py-1 px-1 rounded hover:bg-indigo-200" onClick={()=>setIsMenuOpen(false)} to="/">Почетна</NavLink>

                    <NavLink className="py-1 px-1 rounded hover:bg-indigo-200" onClick={()=>setIsMenuOpen(false)} to="/vesti" >Вести и објави</NavLink>

                    <NavLink className="py-1 px-1 rounded hover:bg-indigo-200" onClick={()=>setIsMenuOpen(false)} to="/zanas" >За нас</NavLink>

                    <NavLink className="py-1 px-1 rounded hover:bg-indigo-200" onClick={()=>setIsMenuOpen(false)} to="/kontakt" >Контакт</NavLink>

                    <NavLink className="py-1 px-1 rounded hover:bg-indigo-200" onClick={()=>setIsMenuOpen(false)} to="/meni">Дневно мени</NavLink>

            </ul>
        </div>
    );
}