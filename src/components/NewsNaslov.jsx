import React from 'react';
import { useTranslation } from 'react-i18next';

export default function NewsNaslov(){
    const {t} = useTranslation();
    return (
        <div className="flex justify-center py-16 ">
            <h1 className="md:text-[23px] lg:text-[25px] xl:text-[44px] text-[19px] px-3 py-1 font-['Poppins'] font-bold rounded-[15px] bg-gradient-to-br from-[#b8baf2] to-[#a3a5d2] shadow-xl shadow-[#6769b7]/40  lg:w-150 lg:h-17 text-center text-[#353767]">
                {t("vestiIObjavi")}</h1>
        </div>
    );
}