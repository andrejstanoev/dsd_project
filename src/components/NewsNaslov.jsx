import React from 'react';
import { useTranslation } from 'react-i18next';

export default function NewsNaslov(){
    return (
        <div className="flex justify-center pt-5 ">
            <h1 className="md:text-[23px] lg:text-[25px] xl:text-[40px] text-[19px] px-3 py-2 mt-5 rounded-[15px] border-1 border-[#353767] bg-[#A3A5D2] lg:w-150 lg:h-20 text-center text-[#353767] font-bold">
                Вести и новости</h1>
        </div>
    );
}