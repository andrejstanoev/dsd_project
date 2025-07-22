import {NavLink} from "react-router-dom";

export default function NavigationLink({children, to} ){
    return(
        <NavLink className="font-bold text-[#353767] text-[14px] lg:text-[18px] xl:text-[19px]  xl:px-4 xl:py-2 rounded-lg hover:bg-[#e8eafc]" to={to}>{children}</NavLink>
    )
}