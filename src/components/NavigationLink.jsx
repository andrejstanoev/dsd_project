import {NavLink} from "react-router-dom";

export default function NavigationLink({children, to} ){
    return(
        <NavLink className="font-bold lg:text-[19px] text-[#353767] px-4 py-2 rounded-lg hover:bg-[#e8eafc]" to={to}>{children}</NavLink>
    )
}