import React from 'react';
import { useTranslation } from 'react-i18next';

export default function NewsNaslov(){
    const {t} = useTranslation();
    return (
        <div className="flex justify-center py-13 mb-[-50px]  ">
            <h1 className="md:text-[30px] lg:text-[35px] xl:text-[44px] text-[25px] px-5 py-3 font-['Poppins'] font-bold rounded-[15px] bg-gradient-to-br from-[#b8baf2] to-[#a3a5d2] shadow-xl shadow-[#6769b7]/40 text-center text-[#353767]
            ">
                {t("vestiIObjavi")}</h1>
        </div>
    );
}