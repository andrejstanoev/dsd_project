import {NavLink} from "react-router-dom";

export default function NavigationLink({children, to} ){
    return(
        <NavLink className="w-fit md:mx-2 lg:mx-3 font-bold text-[#353767] text-[10px] md:text-[14px] lg:text-[16px] xl:text-[22px] 2xl-[23px]  xl:px-4 xl:py-1 rounded-lg hover:bg-[#e8eafc]" to={to}>{children}</NavLink>
    )
}