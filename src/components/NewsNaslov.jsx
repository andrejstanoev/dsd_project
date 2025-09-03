import React from 'react';
import { useTranslation } from 'react-i18next';

export default function NewsNaslov(){
    const {t} = useTranslation();
    return (
        <div className="flex justify-center pt-5 ">
            <h1 className="md:text-[23px] lg:text-[25px] xl:text-[40px] text-[19px] px-3 py-1 mt-5 rounded-[15px] bg-[#A3A5D2]/90 shadow-xl backdrop-blur-md lg:w-150 lg:h-17 text-center text-[#353767] font-bold">
                {t("vestiIObjavi")}</h1>
        </div>
    );
}